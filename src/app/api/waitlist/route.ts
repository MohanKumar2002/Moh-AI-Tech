import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { message: 'Invalid email address provided.' },
        { status: 400 }
      );
    }

    // Configure the SMTP transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === 'true' || false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: process.env.SMTP_FROM_EMAIL || process.env.SMTP_USER,
      to: email,
      subject: 'Welcome to the Moh-AI Tech Waitlist!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eaeaeb; border-radius: 8px;">
          <h2 style="color: #4f46e5; text-align: center;">Welcome to the Future!</h2>
          <p style="font-size: 16px; color: #374151;">Hi there,</p>
          <p style="font-size: 16px; color: #374151; line-height: 1.5;">
            Thank you for joining the waitlist for Moh-AI Tech's upcoming products! 
            We are working hard to build the next generation of autonomous enterprise tools, including <strong>Docu-Mind</strong> and <strong>HR Recruiter AI</strong>.
          </p>
          <p style="font-size: 16px; color: #374151; line-height: 1.5;">
            You will be among the first to get exclusive early access before our public launch in Q3 2026.
          </p>
          <p style="font-size: 16px; color: #374151; margin-top: 30px;">
            Best regards,<br/>
            <strong>The Moh-AI Tech Team</strong>
          </p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Successfully joined the waitlist!' },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Waitlist Email Error:', error);
    
    const errorMessage = error.message || 'Unknown error occurred while sending email.';
    
    return NextResponse.json(
      { message: `Email failed to send. Error: ${errorMessage}` },
      { status: 500 }
    );
  }
}
