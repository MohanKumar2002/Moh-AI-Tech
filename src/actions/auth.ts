'use server';

import { z } from 'zod';
import { usersStore } from '@/lib/data-store';
import { prisma } from '@/lib/prisma';
import bcrypt from 'bcryptjs';
import { sanitizeString, sanitizeEmail } from '@/lib/sanitize';
import { checkRateLimit } from '@/lib/rate-limit';

// Schemas
const LoginSchema = z.object({
  email: z.string().email({ message: "Invalid email address." }).max(254),
  password: z.string().min(6, { message: "Password must be at least 6 characters." }).max(128),
});

const RegisterSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }).max(100),
  email: z.string().email({ message: "Invalid email address." }).max(254),
  password: z.string().min(8, { message: "Password must be at least 8 characters." }).max(128),
});

export type AuthFormState = {
  message: string;
  fields?: Record<string, string>;
  issues?: string[];
  success: boolean;
  redirectTo?: string;
};

export async function loginUser(
  prevState: AuthFormState,
  data: FormData
): Promise<AuthFormState> {
  const formData = Object.fromEntries(data);
  const parsed = LoginSchema.safeParse(formData);

  if (!parsed.success) {
    return {
      message: "Invalid form data.",
      fields: formData as any,
      issues: parsed.error.issues.map((issue) => issue.message),
      success: false,
    };
  }

  const { email } = parsed.data;
  const cleanEmail = sanitizeEmail(email);

  // Apply rate limiting (5 attempts per minute)
  const rateLimit = checkRateLimit(cleanEmail, {
    limit: 5,
    windowMs: 60 * 1000,
    identifier: 'login-action',
  });

  if (!rateLimit.success) {
    return {
      message: "Too many login attempts. Please wait a minute before trying again.",
      success: false,
    };
  }

  const user = usersStore.get(cleanEmail);

  if (user) {
    return { 
      message: "Login successful!", 
      success: true, 
      redirectTo: user.role === 'admin' ? '/admin/dashboard' : '/',
    };
  }

  return { message: "Invalid email or password.", success: false };
}

export async function registerUser(
  prevState: AuthFormState,
  data: FormData
): Promise<AuthFormState> {
  const formData = Object.fromEntries(data);
  const parsed = RegisterSchema.safeParse(formData);

  if (!parsed.success) {
    return {
      message: "Invalid form data.",
      fields: formData as any,
      issues: parsed.error.issues.map((issue) => issue.message),
      success: false,
    };
  }

  const { name, email, password } = parsed.data;
  const cleanName = sanitizeString(name, 100);
  const cleanEmail = sanitizeEmail(email);

  // Apply rate limiting for registration (3 per 5 minutes)
  const rateLimit = checkRateLimit(cleanEmail, {
    limit: 3,
    windowMs: 5 * 60 * 1000,
    identifier: 'register-action',
  });

  if (!rateLimit.success) {
    return {
      message: "Too many registration attempts. Please wait a few minutes before trying again.",
      success: false,
    };
  }

  try {
    const existingUser = await prisma.user.findUnique({
      where: { email: cleanEmail },
    });

    if (existingUser) {
      return { message: "An account with this email already exists.", success: false };
    }

    // Work factor of 12 for strong brute-force resistance
    const hashedPassword = await bcrypt.hash(password, 12);

    await prisma.user.create({
      data: {
        email: cleanEmail,
        name: cleanName,
        password: hashedPassword,
        role: cleanEmail === 'admin@mohai.tech' ? 'admin' : 'user',
      },
    });

    return { 
      message: "Registration successful! You can now log in.", 
      success: true,
      redirectTo: '/documind/login'
    };
  } catch (error: any) {
    console.error("[SECURITY LOG] User registration error");
    return { message: "Unable to complete registration at this time. Please try again later.", success: false };
  }
}
