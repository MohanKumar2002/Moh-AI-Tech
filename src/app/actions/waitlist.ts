'use server';

import { prisma } from '@/lib/prisma';
import nodemailer from 'nodemailer';
import { z } from 'zod';
import { escapeHtml, sanitizeEmail } from '@/lib/sanitize';
import { checkRateLimit } from '@/lib/rate-limit';
import { env } from '@/lib/env';

const waitlistSchema = z.object({
  email: z.string().email('Please provide a valid email address').max(254, 'Email is too long'),
});

export async function submitWaitlist(rawEmail: string) {
  // 1. Validate Email Input with Zod
  const validationResult = waitlistSchema.safeParse({ email: rawEmail });
  if (!validationResult.success) {
    return { error: validationResult.error.issues[0]?.message || 'Invalid email address' };
  }

  const cleanEmail = sanitizeEmail(validationResult.data.email);

  // 2. Apply Rate Limiting based on clean email identifier
  const rateLimit = checkRateLimit(cleanEmail, {
    limit: 5,
    windowMs: 60 * 1000,
    identifier: 'waitlist-action',
  });

  if (!rateLimit.success) {
    return { error: 'Too many requests. Please wait a minute before trying again.' };
  }

  try {
    // 3. Prevent Duplicates with Parameterized Query
    const existing = await prisma.waitlist.findUnique({
      where: { email: cleanEmail },
    });

    if (existing) {
      return { success: true, message: 'You are already on the waitlist!' };
    }

    await prisma.waitlist.create({
      data: {
        email: cleanEmail,
      },
    });

    const smtpHost = env.SMTP_HOST || process.env.SMTP_HOST || 'smtp.titan.email';
    const smtpPort = Number(env.SMTP_PORT || process.env.SMTP_PORT) || 465;
    const smtpUser = env.SMTP_USER || process.env.SMTP_USER;
    const smtpPass = env.SMTP_PASS || process.env.SMTP_PASS;

    if (smtpUser && smtpPass) {
      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: smtpPort === 465,
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
      });

      const safeEmailHtml = escapeHtml(cleanEmail);

      const waitlistMailOptions = {
        from: `"Moh-AI Tech" <${smtpUser}>`,
        to: cleanEmail,
        subject: 'Thank You for Your Interest - Moh-AI Tech',
        text: `Hi there,\n\nThank you for your interest in our upcoming products! We have added you to our waitlist.\n\nWe will notify you as soon as we go live!\n\nBest regards,\nMoh-AI Tech Team`,
        html: `
          <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 30px; border: 1px solid #eaeaea; border-radius: 12px; background-color: #ffffff;">
            <div style="text-align: center; margin-bottom: 25px; border-bottom: 2px solid #f3f4f6; padding-bottom: 20px;">
              <h1 style="color: #1f2937; margin: 15px 0 0 0; font-size: 24px; font-weight: 700;">Moh-AI Tech</h1>
            </div>
            <h2 style="color: #0066cc; font-size: 20px; margin-bottom: 20px;">You're on the Waitlist!</h2>
            <p style="font-size: 16px; color: #4b5563; line-height: 1.6;">Hi there,</p>
            <p style="font-size: 16px; color: #4b5563; line-height: 1.6;">Thank you for your interest in our upcoming products! We have successfully added <strong>${safeEmailHtml}</strong> to our waitlist.</p>
            <p style="font-size: 16px; color: #4b5563; line-height: 1.6;">Please wait for our launch. We will notify you with early access as soon as we go live!</p>
            <br/>
            <p style="font-size: 16px; color: #4b5563; margin-top: 20px;">Best regards,<br/><strong style="color: #1f2937;">The Moh-AI Tech Team</strong></p>
          </div>
        `,
      };

      const adminNotificationList = env.NOTIFICATION_EMAIL || process.env.NOTIFICATION_EMAIL || 'info@moh-ai-tech.com';
      const adminMailOptions = {
        from: `"Moh-AI Tech" <${smtpUser}>`,
        to: adminNotificationList,
        subject: 'New Waitlist Signup!',
        text: `A new user has joined the waitlist: ${cleanEmail}`,
      };

      await Promise.allSettled([
        transporter.sendMail(waitlistMailOptions),
        transporter.sendMail(adminMailOptions),
      ]);
    }

    return { success: true, message: 'Thanks for joining the waitlist!' };
  } catch (error) {
    console.error('[SECURITY LOG] Waitlist signup processing failure');
    return { error: 'Unable to process waitlist signup at this time. Please try again later.' };
  }
}
