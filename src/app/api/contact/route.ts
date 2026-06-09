import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import nodemailer from 'nodemailer';

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, company, email, country, service, message } = body;

    if (!name || !email) {
      return NextResponse.json({ error: 'Name and email are required.' }, { status: 400 });
    }

    // 1. Save to Database
    const newQuery = await prisma.contactQuery.create({
      data: {
        name,
        company: company || null,
        email,
        country: country || null,
        service: service || null,
        message: message || '',
      },
    });

    // 2. Send Email Notification (using nodemailer)
    // In production, configure these via environment variables
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.ethereal.email',
      port: Number(process.env.SMTP_PORT) || 587,
      auth: {
        user: process.env.SMTP_USER, // Add to .env
        pass: process.env.SMTP_PASS, // Add to .env
      },
    });

    const mailOptions = {
      from: '"Moh-AI Tech" <noreply@moh-ai-tech.com>',
      to: process.env.NOTIFICATION_EMAIL || 'admin@moh-ai-tech.com',
      subject: `New Lead: ${name} from ${company || 'Unknown Company'}`,
      text: `
        You have a new contact query!
        
        Name: ${name}
        Email: ${email}
        Company: ${company || 'N/A'}
        Country: ${country || 'N/A'}
        Service of Interest: ${service || 'N/A'}
        
        Message:
        ${message}
      `,
    };

    // We don't await this so it doesn't block the response if it fails in dev, or we catch the error
    transporter.sendMail(mailOptions).catch(err => console.error("Email error:", err));

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
          text: `*New Lead!* 🚀\nName: ${name}\nEmail: ${email}\nService: ${service || 'N/A'}`,
        }),
      }).catch(err => console.error("WhatsApp error:", err));
    }

    return NextResponse.json({ success: true, data: newQuery }, { status: 201 });
  } catch (error) {
    console.error('Contact API Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
