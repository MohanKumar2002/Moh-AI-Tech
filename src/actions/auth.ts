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

  if (usersStore.has(email)) {
    return { message: "User with this email already exists.", success: false };
  }

  // In a real app, hash the password before storing
  const newUser = { id: `user_${Date.now()}`, email, passwordHash: `hashed_${password}`, role: 'user' as const, name };
  usersStore.set(email, newUser);

  return { 
    message: "Registration successful! You can now log in.", 
    success: true,
    redirectTo: '/login'
  };
}
