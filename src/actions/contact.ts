'use server';

import { z } from 'zod';
import { contactMessages } from '@/lib/data-store';

const ContactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export type ContactFormState = {
  message: string;
  fields?: Record<string, string>;
  issues?: string[];
  success: boolean;
};

export async function submitContactForm(
  prevState: ContactFormState,
  data: FormData
): Promise<ContactFormState> {
  const formData = Object.fromEntries(data);
  const parsed = ContactFormSchema.safeParse(formData);

  if (!parsed.success) {
    return {
      message: "Invalid form data",
      fields: formData as any,
      issues: parsed.error.issues.map((issue) => issue.message),
      success: false,
    };
  }
  
  const { name, email, subject, message } = parsed.data;

  try {
    // Simulate saving to a database or sending an email
    console.log("New contact form submission:", { name, email, subject, message });
    
    // Store in our mock data store
    const newMessage = {
        id: `contact_${Date.now()}`,
        name,
        email,
        subject,
        message,
        createdAt: new Date(),
    };
    contactMessages.push(newMessage);

    // Placeholder for email notification
    // await sendContactEmailNotification({ name, email, subject, message });

    return { message: "Your message has been sent successfully! We'll get back to you soon.", success: true };
  } catch (error) {
    console.error("Error submitting contact form:", error);
    return { message: "An error occurred. Please try again later.", success: false };
  }
}

// Placeholder for email notification function
// async function sendContactEmailNotification(data: { name: string; email: string; subject: string; message: string }) {
//   console.log("Sending email notification for contact form:", data);
//   // Integrate with SendGrid or similar service here
//   // Example: await sendgrid.send({ to: 'admin@mohai.tech', from: data.email, subject: data.subject, text: data.message });
//   return Promise.resolve();
// }
