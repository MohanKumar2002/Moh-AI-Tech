import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import nodemailer from 'nodemailer';

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, company, email, country, service, message, scheduledDate, scheduledTime } = body;

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
      console.error('Database save error (ignoring to send emails):', dbError);
    }

    // 2. Send Email Notification (using nodemailer)
    // In production, configure these via environment variables
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.ethereal.email',
      port: Number(process.env.SMTP_PORT) || 587,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const isCallScheduled = scheduledDate && scheduledTime;
    const subjectTitle = isCallScheduled ? `[CALL SCHEDULED] New Lead: ${name}` : `New Lead: ${name} from ${company || 'Unknown Company'}`;

    const mailOptions = {
      from: `"Moh-AI Tech" <${process.env.SMTP_USER}>`,
      to: process.env.NOTIFICATION_EMAIL || 'info@moh-ai-tech.com, mohaitechpvt@gmail.com',
      subject: subjectTitle,
      text: `
        You have a new contact query!
        
        Name: ${name}
        Email: ${email}
        Company: ${company || 'N/A'}
        Country: ${country || 'N/A'}
        Service of Interest: ${service || 'N/A'}
        
        ${isCallScheduled ? `CALL SCHEDULED FOR:\nDate: ${scheduledDate}\nTime: ${scheduledTime}\n\n` : ''}Message:
        ${message || 'No message provided.'}
      `,
    };

    const customerMailOptions = {
      from: `"Moh-AI Tech" <${process.env.SMTP_USER}>`,
      to: email,
      subject: isCallScheduled ? 'Booking Confirmed - Moh-AI Tech' : 'Thank you for contacting Moh-AI Tech',
      text: isCallScheduled 
        ? `Hi ${name},\n\nThank you for choosing Moh-AI Tech! You have successfully booked a discovery call with us on ${scheduledDate} at ${scheduledTime}.\n\nOur team will connect with you soon.\n\nBest regards,\nMoh-AI Tech Team`
        : `Hi ${name},\n\nThank you for reaching out to Moh-AI Tech! We have successfully received your message and our team will connect with you soon.\n\nBest regards,\nMoh-AI Tech Team`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eaeaea; border-radius: 10px;">
          <h2 style="color: #6366f1; margin-bottom: 20px;">Thank You for Choosing Moh-AI Tech!</h2>
          <p style="font-size: 16px; color: #333;">Hi ${name},</p>
          ${isCallScheduled 
            ? `<p style="font-size: 16px; color: #333;">You have successfully booked a discovery call with us.</p>
               <div style="background: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0; border: 1px solid #e5e7eb;">
                 <p style="margin: 0; font-size: 16px;"><strong>Date:</strong> ${scheduledDate}</p>
                 <p style="margin: 10px 0 0 0; font-size: 16px;"><strong>Time:</strong> ${scheduledTime}</p>
               </div>
               <p style="font-size: 16px; color: #333;">Our team will connect with you shortly with the meeting link.</p>`
            : `<p style="font-size: 16px; color: #333;">We have successfully received your message. Our team is reviewing it and will connect with you very soon.</p>`
          }
          <br/>
          <p style="font-size: 16px; color: #333; margin-top: 20px;">Best regards,<br/><strong>The Moh-AI Tech Team</strong></p>
        </div>
      `
    };

    // VERCEL FIX: We MUST await the emails, otherwise Vercel kills the serverless function before they send!
    try {
      await Promise.all([
        transporter.sendMail(mailOptions),
        transporter.sendMail(customerMailOptions)
      ]);
    } catch (emailError) {
      console.error("Email sending failed (check SMTP credentials):", emailError);
    }

    // 3. Send WhatsApp Notification (Using Free CallMeBot API or Webhook)
    // To get a free CallMeBot API key, message their bot on WhatsApp.
    // Set WHATSAPP_WEBHOOK_URL="https://api.callmebot.com/whatsapp.php?phone=[YOUR_NUMBER]&text=[MESSAGE]&apikey=[YOUR_API_KEY]"
    const whatsappWebhookUrl = process.env.WHATSAPP_WEBHOOK_URL;
    if (whatsappWebhookUrl) {
      // We replace [MESSAGE] in the URL with URL-encoded text if using CallMeBot directly via GET
      // Or if it's a generic POST webhook, we keep this structure.
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
