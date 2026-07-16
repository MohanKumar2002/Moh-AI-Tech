import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { Resend } from 'resend';
import { Client as HubSpotClient } from '@hubspot/api-client';

const resend = new Resend(process.env.RESEND_API_KEY || 're_dummy');
const hubspotClient = new HubSpotClient({ accessToken: process.env.HUBSPOT_ACCESS_TOKEN || 'dummy' });

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, company, email, country, service, infrastructure, message, scheduledDate, scheduledTime } = body;

    if (!name || !email) {
      return NextResponse.json({ error: 'Name and email are required.' }, { status: 400 });
    }

    // 1. Save to Database (Wrapped in try/catch so DB sync issues don't block emails)
    let newQuery = null;
    try {
      newQuery = await prisma.contactQuery.create({
        data: {
          name,
          company: company || null,
          email,
          country: country || null,
          service: service || null,
          message: message || '',
          scheduledDate: scheduledDate || null,
          scheduledTime: scheduledTime || null,
        },
      });
    } catch (dbError) {
      console.error('Database save error:', dbError);
    }

    // 2. Save to HubSpot CRM
    if (process.env.HUBSPOT_ACCESS_TOKEN) {
      try {
        await hubspotClient.crm.contacts.basicApi.create({
          properties: {
            email: email,
            firstname: name.split(' ')[0],
            lastname: name.split(' ').slice(1).join(' '),
            company: company || '',
            country: country || '',
            message: message || '',
            job_function: service || '',
          }
        });
      } catch (hubspotError) {
        console.error('HubSpot save error:', hubspotError);
      }
    }

    // 3. Send Emails via Resend
    const isCallScheduled = scheduledDate && scheduledTime;
    const subjectTitle = isCallScheduled ? `[CALL SCHEDULED] New Lead: ${name}` : `New Lead: ${name} from ${company || 'Unknown Company'}`;

    if (process.env.RESEND_API_KEY) {
      try {
        await Promise.all([
          // Notification to Admin
          resend.emails.send({
            from: 'Moh-AI Tech <noreply@moh-ai-tech.com>', // Ensure domain is verified in Resend
            to: process.env.NOTIFICATION_EMAIL ? process.env.NOTIFICATION_EMAIL.split(',').map(e => e.trim()) : ['info@moh-ai-tech.com'],
            subject: subjectTitle,
            text: `
              You have a new contact query!
              
              Name: ${name}
              Email: ${email}
              Company: ${company || 'N/A'}
              Country: ${country || 'N/A'}
              Service of Interest: ${service || 'N/A'}
              Infrastructure/Data Source: ${infrastructure || 'N/A'}
              
              ${isCallScheduled ? `CALL SCHEDULED FOR:\nDate: ${scheduledDate}\nTime: ${scheduledTime}\n\n` : ''}Message:
              ${message || 'No message provided.'}
            `,
          }),
          // Confirmation to Customer
          resend.emails.send({
            from: 'Moh-AI Tech <info@moh-ai-tech.com>', // Ensure domain is verified in Resend
            to: [email],
            subject: isCallScheduled ? 'Booking Confirmed - Moh-AI Tech' : 'Thank you for contacting Moh-AI Tech',
            html: `
              <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 30px; border: 1px solid #eaeaea; border-radius: 12px; background-color: #ffffff;">
                <div style="text-align: center; margin-bottom: 25px; border-bottom: 2px solid #f3f4f6; padding-bottom: 20px;">
                  <h1 style="color: #1f2937; margin: 15px 0 0 0; font-size: 24px; font-weight: 700;">Moh-AI Tech</h1>
                </div>
                <h2 style="color: #6366f1; font-size: 20px; margin-bottom: 20px;">Thank You for Choosing Moh-AI Tech!</h2>
                <p style="font-size: 16px; color: #4b5563; line-height: 1.6;">Hi ${name},</p>
                ${isCallScheduled 
                  ? `<p style="font-size: 16px; color: #4b5563; line-height: 1.6;">You have successfully booked a discovery call with us.</p>
                     <div style="background: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0; border: 1px solid #e5e7eb;">
                       <p style="margin: 0; font-size: 16px; color: #1f2937;"><strong>Date:</strong> ${scheduledDate}</p>
                       <p style="margin: 10px 0 0 0; font-size: 16px; color: #1f2937;"><strong>Time:</strong> ${scheduledTime}</p>
                     </div>
                     <p style="font-size: 16px; color: #4b5563; line-height: 1.6;">Our team will connect with you shortly with the meeting link.</p>`
                  : `<p style="font-size: 16px; color: #4b5563; line-height: 1.6;">We have successfully received your message. Our team is reviewing it and will connect with you very soon.</p>`
                }
                <br/>
                <p style="font-size: 16px; color: #4b5563; margin-top: 20px;">Best regards,<br/><strong style="color: #1f2937;">The Moh-AI Tech Team</strong></p>
              </div>
            `
          })
        ]);
      } catch (emailError) {
        console.error("Resend Email error:", emailError);
      }
    } else {
      console.warn("RESEND_API_KEY is not set. Emails were not sent.");
    }

    // 4. Send WhatsApp Notification (Using Free CallMeBot API or Webhook)
    const whatsappWebhookUrl = process.env.WHATSAPP_WEBHOOK_URL;
    if (whatsappWebhookUrl) {
      fetch(whatsappWebhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          text: `*New Lead!* 🚀\nName: ${name}\nEmail: ${email}\nService: ${service || 'N/A'}\n${scheduledDate ? `*Meeting Scheduled:* ${scheduledDate} @ ${scheduledTime}` : ''}`,
        }),
      }).catch(err => console.error("WhatsApp error:", err));
    }

    return NextResponse.json({ success: true, data: newQuery }, { status: 201 });
  } catch (error) {
    console.error('Contact API Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
