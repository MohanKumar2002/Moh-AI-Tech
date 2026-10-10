'use server';

import { z } from 'zod';
import { usersStore } from '@/lib/data-store';

// Schemas
const LoginSchema = z.object({
  email: z.string().email({ message: "Invalid email address." }),
  password: z.string().min(6, { message: "Password must be at least 6 characters." }),
});

const RegisterSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  password: z.string().min(6, { message: "Password must be at least 6 characters." }),
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

  const { email, password } = parsed.data;
  const user = usersStore.get(email);

  // In a real app, you would compare password hashes
  if (user) { // Simplified check: user exists
    // Mock successful login
    return { 
        message: "Login successful!", 
        success: true, 
        // In a real app, you'd set a cookie/session here
        // For client-side context, this action might just return success
        // and the client-side AuthContext handles setting the user.
        // Or, for server-driven auth, redirect from here.
        // For this mock, we'll assume client context handles user state.
        redirectTo: user.role === 'admin' ? '/admin/dashboard' : '/',
    };
  }

  return { message: "Invalid email or password.", success: false };
}


import { prisma } from '@/lib/prisma';
import bcrypt from 'bcryptjs';

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

  try {
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return { message: "User with this email already exists.", success: false };
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await prisma.user.create({
      data: {
        email,
        name,
        password: hashedPassword,
        role: email === 'admin@mohai.tech' ? 'admin' : 'user',
      },
    });

    return { 
      message: "Registration successful! You can now log in.", 
      success: true,
      redirectTo: '/login'
    };
  } catch (error: any) {
    console.error("Registration error:", error);
    return { message: "An error occurred during registration: " + (error.message || String(error)), success: false };
  }
}

