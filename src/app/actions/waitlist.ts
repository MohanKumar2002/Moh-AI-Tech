'use server';

import prisma from '@/lib/prisma';

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

    return { success: true, message: 'Thanks for joining the waitlist!' };
  } catch (error) {
    console.error('Waitlist error:', error);
    return { error: 'Something went wrong. Please try again.' };
  }
}
