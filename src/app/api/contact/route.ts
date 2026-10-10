import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { Resend } from 'resend';
import { Client as HubSpotClient } from '@hubspot/api-client';
import nodemailer from 'nodemailer';
import { z } from 'zod';
import { checkRateLimit, getClientIp } from '@/lib/rate-limit';
import { escapeHtml, sanitizeString, sanitizeEmail, formatSafeMultilineHtml } from '@/lib/sanitize';
import { env } from '@/lib/env';

// Schema validation for contact form submissions
const contactBodySchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100, 'Name cannot exceed 100 characters'),
  email: z.string().email('Valid email address is required').max(254, 'Email cannot exceed 254 characters'),
  company: z.string().max(150, 'Company cannot exceed 150 characters').optional().nullable(),
  country: z.string().max(100, 'Country cannot exceed 100 characters').optional().nullable(),
  service: z.string().max(100, 'Service cannot exceed 100 characters').optional().nullable(),
  infrastructure: z.string().max(100, 'Infrastructure cannot exceed 100 characters').optional().nullable(),
  message: z.string().max(5000, 'Message cannot exceed 5000 characters').optional().nullable(),
  scheduledDate: z.string().max(50, 'Invalid scheduled date').optional().nullable(),
  scheduledTime: z.string().max(50, 'Invalid scheduled time').optional().nullable(),
});

const resendApiKey = env.RESEND_API_KEY || process.env.RESEND_API_KEY;
const resend = resendApiKey ? new Resend(resendApiKey) : null;

const hubspotToken = env.HUBSPOT_ACCESS_TOKEN || process.env.HUBSPOT_ACCESS_TOKEN;
const hubspotClient = hubspotToken ? new HubSpotClient({ accessToken: hubspotToken }) : null;

async function sendEmail({
  to,
  subject,
  html,
  text,
}: {
  to: string | string[];
  subject: string;
  html: string;
  text?: string;
}) {
  const from = env.RESEND_FROM_EMAIL || process.env.RESEND_FROM_EMAIL || `"Moh-AI Tech" <info@moh-ai-tech.com>`;
  const recipients = Array.isArray(to) ? to : [to];
  const plainText = text || html.replace(/<[^>]*>?/gm, '');

  let sent = false;

  // 1. Try Resend if API key available
  if (resend) {
    try {
      const { data, error } = await resend.emails.send({
        from,
        to: recipients,
        subject,
        html,
        text: plainText,
      });

      if (error) {
        console.error('[SECURITY LOG] Resend email dispatch failed:', error.message || 'Unknown error');
      } else {
        sent = true;
      }
    } catch (err: any) {
      console.error('[SECURITY LOG] Resend API execution error');
    }
  }

  // 2. Fallback to Nodemailer SMTP if Resend wasn't configured or failed
  if (!sent) {
    const smtpHost = env.SMTP_HOST || process.env.SMTP_HOST || 'smtp.titan.email';
    const smtpPort = Number(env.SMTP_PORT || process.env.SMTP_PORT) || 465;
    const smtpUser = env.SMTP_USER || process.env.SMTP_USER || 'info@moh-ai-tech.com';
    const smtpPass = env.SMTP_PASS || process.env.SMTP_PASS;

    if (smtpUser && smtpPass) {
      try {
        const transporter = nodemailer.createTransport({
          host: smtpHost,
          port: smtpPort,
          secure: smtpPort === 465,
          auth: {
            user: smtpUser,
            pass: smtpPass,
          },
        });

        await transporter.sendMail({
          from: `"Moh-AI Tech" <${smtpUser}>`,
          to: recipients.join(', '),
          subject,
          html,
          text: plainText,
        });

        sent = true;
      } catch (smtpErr: any) {
        console.error('[SECURITY LOG] SMTP dispatch failed');
      }
    }
  }

  return sent;
}

export async function POST(req: Request) {
  try {
    // 1. Rate Limiting Check (Max 5 inquiries per minute per IP)
    const clientIp = getClientIp(req);
    const rateLimit = checkRateLimit(clientIp, {
      limit: 5,
      windowMs: 60 * 1000,
      identifier: 'api-contact',
    });

    if (!rateLimit.success) {
      return NextResponse.json(
        { error: 'Too many requests. Please wait a minute before submitting again.' },
        {
          status: 429,
          headers: {
            'Retry-After': String(Math.ceil((rateLimit.resetTime - Date.now()) / 1000)),
            'X-RateLimit-Limit': String(rateLimit.limit),
            'X-RateLimit-Remaining': '0',
          },
        }
      );
    }

    // 2. Parse and Validate Request Body with Zod
    let rawJson: unknown;
    try {
      rawJson = await req.json();
    } catch {
      return NextResponse.json({ error: 'Invalid JSON payload.' }, { status: 400 });
    }

    const validationResult = contactBodySchema.safeParse(rawJson);
    if (!validationResult.success) {
      const errorMsg = validationResult.error.issues[0]?.message || 'Invalid input data.';
      return NextResponse.json({ error: errorMsg }, { status: 400 });
    }

    const validatedData = validationResult.data;

    // 3. Sanitize inputs
    const cleanName = sanitizeString(validatedData.name, 100);
    const cleanEmail = sanitizeEmail(validatedData.email);
    const cleanCompany = validatedData.company ? sanitizeString(validatedData.company, 150) : null;
    const cleanCountry = validatedData.country ? sanitizeString(validatedData.country, 100) : null;
    const cleanService = validatedData.service ? sanitizeString(validatedData.service, 100) : null;
    const cleanInfrastructure = validatedData.infrastructure ? sanitizeString(validatedData.infrastructure, 100) : null;
    const cleanMessage = validatedData.message ? sanitizeString(validatedData.message, 5000) : '';
    const cleanScheduledDate = validatedData.scheduledDate ? sanitizeString(validatedData.scheduledDate, 50) : null;
    const cleanScheduledTime = validatedData.scheduledTime ? sanitizeString(validatedData.scheduledTime, 50) : null;

    // 4. Save to Database via parameterized ORM
    let newQuery = null;
    try {
      newQuery = await prisma.contactQuery.create({
        data: {
          name: cleanName,
          company: cleanCompany,
          email: cleanEmail,
          country: cleanCountry,
          service: cleanService,
          message: cleanMessage,
          scheduledDate: cleanScheduledDate,
          scheduledTime: cleanScheduledTime,
        },
      });
    } catch (dbError) {
      console.error('[SECURITY LOG] Database persistence non-fatal failure');
    }

    // 5. Sync to HubSpot CRM safely
    if (hubspotClient) {
      try {
        const nameParts = cleanName.split(' ');
        const firstName = nameParts[0] || '';
        const lastName = nameParts.slice(1).join(' ') || '';

        await hubspotClient.crm.contacts.basicApi.create({
          properties: {
            email: cleanEmail,
            firstname: firstName,
            lastname: lastName,
            company: cleanCompany || '',
            country: cleanCountry || '',
            message: cleanMessage,
            job_function: cleanService || '',
          },
        });
      } catch (hubspotError) {
        console.error('[SECURITY LOG] CRM sync non-fatal error');
      }
    }

    // 6. Format HTML Emails with strict entity escaping (XSS Prevention)
    const isCallScheduled = Boolean(cleanScheduledDate && cleanScheduledTime);
    const adminSubjectTitle = isCallScheduled
      ? `[CALL SCHEDULED] New Booking: ${cleanName}`
      : `New Lead: ${cleanName} from ${cleanCompany || 'Unknown Organization'}`;
    const customerSubjectTitle = isCallScheduled
      ? 'Booking Confirmed - Moh-AI Tech'
      : 'Thank you for contacting Moh-AI Tech';

    const adminNotificationList = env.NOTIFICATION_EMAIL || process.env.NOTIFICATION_EMAIL;
    const adminEmails = adminNotificationList
      ? adminNotificationList.split(',').map((e) => e.trim()).filter(Boolean)
      : ['info@moh-ai-tech.com', 'mohaitechpvt@gmail.com'];

    const safeNameHtml = escapeHtml(cleanName);
    const safeEmailHtml = escapeHtml(cleanEmail);
    const safeCompanyHtml = escapeHtml(cleanCompany || 'N/A');
    const safeCountryHtml = escapeHtml(cleanCountry || 'N/A');
    const safeServiceHtml = escapeHtml(cleanService || 'N/A');
    const safeInfraHtml = escapeHtml(cleanInfrastructure || 'N/A');
    const safeDateHtml = cleanScheduledDate ? escapeHtml(cleanScheduledDate) : '';
    const safeTimeHtml = cleanScheduledTime ? escapeHtml(cleanScheduledTime) : '';
    const safeMessageHtml = cleanMessage ? formatSafeMultilineHtml(cleanMessage) : 'No message provided.';

    const adminHtml = `
      <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 30px; border: 1px solid #eaeaea; border-radius: 12px; background-color: #ffffff;">
        <div style="text-align: center; margin-bottom: 25px; border-bottom: 2px solid #f3f4f6; padding-bottom: 20px;">
          <h1 style="color: #1f2937; margin: 15px 0 0 0; font-size: 24px; font-weight: 700;">Moh-AI Tech</h1>
          <p style="color: #6b7280; margin: 5px 0 0 0; font-size: 14px;">${isCallScheduled ? 'New Meeting Scheduled' : 'New Contact Inquiry'}</p>
        </div>

        <h2 style="color: #0066cc; font-size: 20px; margin-bottom: 20px;">Lead Details</h2>
        <table style="width: 100%; border-collapse: collapse; font-size: 15px; color: #374151;">
          <tr><td style="padding: 8px 0; font-weight: 600; width: 140px;">Name:</td><td>${safeNameHtml}</td></tr>
          <tr><td style="padding: 8px 0; font-weight: 600;">Email:</td><td><a href="mailto:${safeEmailHtml}" style="color: #0066cc;">${safeEmailHtml}</a></td></tr>
          <tr><td style="padding: 8px 0; font-weight: 600;">Company:</td><td>${safeCompanyHtml}</td></tr>
          <tr><td style="padding: 8px 0; font-weight: 600;">Country:</td><td>${safeCountryHtml}</td></tr>
          <tr><td style="padding: 8px 0; font-weight: 600;">Service:</td><td>${safeServiceHtml}</td></tr>
          <tr><td style="padding: 8px 0; font-weight: 600;">Infrastructure:</td><td>${safeInfraHtml}</td></tr>
        </table>

        ${
          isCallScheduled
            ? `<div style="background: #f0f7ff; border: 1px solid #bae6fd; padding: 20px; border-radius: 8px; margin: 20px 0;">
                 <h3 style="margin: 0 0 10px 0; color: #0369a1; font-size: 16px;">📅 Scheduled Meeting</h3>
                 <p style="margin: 0; font-size: 15px; color: #0c4a6e;"><strong>Date:</strong> ${safeDateHtml}</p>
                 <p style="margin: 6px 0 0 0; font-size: 15px; color: #0c4a6e;"><strong>Time:</strong> ${safeTimeHtml}</p>
               </div>`
            : ''
        }

        <div style="margin-top: 20px;">
          <h3 style="margin: 0 0 10px 0; color: #374151; font-size: 16px;">Message:</h3>
          <div style="background: #f9fafb; padding: 15px; border-radius: 8px; border: 1px solid #e5e7eb; color: #4b5563; line-height: 1.6;">
            ${safeMessageHtml}
          </div>
        </div>

        <br/>
        <p style="font-size: 14px; color: #9ca3af; text-align: center; margin-top: 20px;">Automated security-hardened notification from Moh-AI Tech.</p>
      </div>
    `;

    const customerHtml = `
      <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 30px; border: 1px solid #eaeaea; border-radius: 12px; background-color: #ffffff;">
        <div style="text-align: center; margin-bottom: 25px; border-bottom: 2px solid #f3f4f6; padding-bottom: 20px;">
          <h1 style="color: #1f2937; margin: 15px 0 0 0; font-size: 24px; font-weight: 700;">Moh-AI Tech</h1>
        </div>
        <h2 style="color: #0066cc; font-size: 20px; margin-bottom: 20px;">Thank You for Reaching Out!</h2>
        <p style="font-size: 16px; color: #4b5563; line-height: 1.6;">Hi ${safeNameHtml},</p>
        ${
          isCallScheduled
            ? `<p style="font-size: 16px; color: #4b5563; line-height: 1.6;">You have successfully booked a discovery call with us.</p>
               <div style="background: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0; border: 1px solid #e5e7eb;">
                 <p style="margin: 0; font-size: 16px; color: #1f2937;"><strong>Date:</strong> ${safeDateHtml}</p>
                 <p style="margin: 10px 0 0 0; font-size: 16px; color: #1f2937;"><strong>Time:</strong> ${safeTimeHtml}</p>
               </div>
               <p style="font-size: 16px; color: #4b5563; line-height: 1.6;">Our engineering team will connect with you at <strong>${safeEmailHtml}</strong> with the meeting coordinates.</p>`
            : `<p style="font-size: 16px; color: #4b5563; line-height: 1.6;">We have received your message. Our technical team is reviewing it and will reach out shortly.</p>`
        }
        <br/>
        <p style="font-size: 16px; color: #4b5563; margin-top: 20px;">Best regards,<br/><strong style="color: #1f2937;">The Moh-AI Tech Team</strong><br/><a href="mailto:info@moh-ai-tech.com" style="color: #0066cc;">info@moh-ai-tech.com</a></p>
      </div>
    `;

    await Promise.allSettled([
      sendEmail({
        to: adminEmails,
        subject: adminSubjectTitle,
        html: adminHtml,
      }),
      sendEmail({
        to: cleanEmail,
        subject: customerSubjectTitle,
        html: customerHtml,
      }),
    ]);

    // 7. WhatsApp Webhook (Validate URL before sending)
    const whatsappWebhookUrl = env.WHATSAPP_WEBHOOK_URL || process.env.WHATSAPP_WEBHOOK_URL;
    if (whatsappWebhookUrl && whatsappWebhookUrl.startsWith('https://')) {
      fetch(whatsappWebhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          text: `*New Lead!* 🚀\nName: ${cleanName}\nEmail: ${cleanEmail}\nService: ${cleanService || 'N/A'}\n${cleanScheduledDate ? `*Meeting:* ${cleanScheduledDate} @ ${cleanScheduledTime}` : ''}`,
        }),
      }).catch(() => {});
    }

    return NextResponse.json({ success: true, message: 'Inquiry received successfully.' }, { status: 201 });
  } catch (error) {
    console.error('[SECURITY LOG] Contact API unexpected processing error');
    return NextResponse.json({ error: 'An error occurred while processing your request.' }, { status: 500 });
  }
}
