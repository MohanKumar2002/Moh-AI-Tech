'use server';

import { prisma } from '@/lib/prisma';
import nodemailer from 'nodemailer';

export async function submitWaitlist(email: string) {
  if (!email || !email.includes('@')) {
    return { error: 'Invalid email address' };
  }

  try {
    // Check if it already exists to avoid unique constraint error
    const existing = await prisma.waitlist.findUnique({
      where: { email },
    });

    if (existing) {
      return { success: true, message: 'You are already on the waitlist!' };
    }

    await prisma.waitlist.create({
      data: {
        email,
      },
    });

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.ethereal.email',
      port: Number(process.env.SMTP_PORT) || 587,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const waitlistMailOptions = {
      from: `"Moh-AI Tech" <${process.env.SMTP_USER}>`,
      to: email,
      subject: 'Thank You for Your Interest - Moh-AI Tech',
      text: `Hi there,\n\nThank you for your interest in our upcoming products! We have added you to our waitlist.\n\nPlease wait for our launch. We will notify you as soon as we go live!\n\nBest regards,\nMoh-AI Tech Team`,
      html: `
        <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 30px; border: 1px solid #eaeaea; border-radius: 12px; background-color: #ffffff;">
          <div style="text-align: center; margin-bottom: 25px; border-bottom: 2px solid #f3f4f6; padding-bottom: 20px;">
            <img src="https://moh-ai-tech.com/logo.png" alt="Moh-AI Tech Logo" style="height: 60px; object-fit: contain;" />
            <h1 style="color: #1f2937; margin: 15px 0 0 0; font-size: 24px; font-weight: 700;">Moh-AI Tech</h1>
          </div>
          <h2 style="color: #6366f1; font-size: 20px; margin-bottom: 20px;">You're on the Waitlist!</h2>
          <p style="font-size: 16px; color: #4b5563; line-height: 1.6;">Hi there,</p>
          <p style="font-size: 16px; color: #4b5563; line-height: 1.6;">Thank you for your interest in our upcoming products! We have successfully added <strong>${email}</strong> to our waitlist.</p>
          <p style="font-size: 16px; color: #4b5563; line-height: 1.6;">Please wait for our launch. We will notify you with early access as soon as we go live!</p>
          <br/>
          <p style="font-size: 16px; color: #4b5563; margin-top: 20px;">Best regards,<br/><strong style="color: #1f2937;">The Moh-AI Tech Team</strong></p>
        </div>
      `
    };

    // Notify the admin as well
    const adminMailOptions = {
      from: `"Moh-AI Tech" <${process.env.SMTP_USER}>`,
      to: process.env.NOTIFICATION_EMAIL || 'info@moh-ai-tech.com, mohaitechpvt@gmail.com',
      subject: 'New Waitlist Signup!',
      text: `A new user has joined the waitlist: ${email}`
    };

    try {
      await Promise.all([
        transporter.sendMail(waitlistMailOptions),
        transporter.sendMail(adminMailOptions)
      ]);
    } catch (emailError) {
      console.error("Waitlist Email failed:", emailError);
    }

    return { success: true, message: 'Thanks for joining the waitlist!' };
  } catch (error) {
    console.error('Waitlist error:', error);
    return { error: 'Something went wrong. Please try again.' };
  }
}
