import { z } from 'zod';

const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
  
  // Database Configuration
  DATABASE_URL: z.string().min(1, 'DATABASE_URL is required').optional(),
  DIRECT_URL: z.string().optional(),
  
  // NextAuth Authentication
  NEXTAUTH_SECRET: z.string().min(16, 'NEXTAUTH_SECRET should be at least 16 characters').optional(),
  NEXTAUTH_URL: z.string().url('NEXTAUTH_URL must be a valid URL').optional(),
  
  // Email Service (Resend)
  RESEND_API_KEY: z.string().optional(),
  RESEND_FROM_EMAIL: z.string().optional(),
  
  // CRM Integration (HubSpot)
  HUBSPOT_ACCESS_TOKEN: z.string().optional(),
  
  // SMTP Fallback
  SMTP_HOST: z.string().optional(),
  SMTP_PORT: z.coerce.number().optional(),
  SMTP_USER: z.string().optional(),
  SMTP_PASS: z.string().optional(),
  NOTIFICATION_EMAIL: z.string().optional(),
  
  // Webhook Notifications
  WHATSAPP_WEBHOOK_URL: z.string().url().optional().or(z.literal('')),
  
  // Analytics
  NEXT_PUBLIC_GA_MEASUREMENT_ID: z.string().optional(),
});

export type Env = z.infer<typeof envSchema>;

function getValidatedEnv(): Env {
  const parsed = envSchema.safeParse(process.env);

  if (!parsed.success) {
    const errorDetails = parsed.error.issues
      .map((issue) => `  - ${issue.path.join('.')}: ${issue.message}`)
      .join('\n');

    const errorMessage = `[CRITICAL] Environment variable validation failed:\n${errorDetails}`;

    if (process.env.NODE_ENV === 'production') {
      throw new Error(errorMessage);
    } else {
      console.warn(errorMessage);
    }
    return process.env as unknown as Env;
  }

  // Enforce critical secrets in production
  if (parsed.data.NODE_ENV === 'production') {
    if (!parsed.data.NEXTAUTH_SECRET) {
      console.warn('[SECURITY WARNING] NEXTAUTH_SECRET is not set in production. Ensure a strong 32+ char secret is configured.');
    }
  }

  return parsed.data;
}

export const env = getValidatedEnv();
