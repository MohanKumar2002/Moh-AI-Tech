'use server';

import { z } from 'zod';
import { careerOpeningsData } from '@/lib/data-store';
import type { CareerOpening } from '@/types';
import { revalidatePath } from 'next/cache';

const CareerSchema = z.object({
  id: z.string().optional(),
  title: z.string().min(5, "Title must be at least 5 characters."),
  location: z.string().min(2, "Location is required."),
  type: z.enum(['Full-time', 'Part-time', 'Contract', 'Internship']),
  department: z.string().min(2, "Department is required."),
  description: z.string().min(20, "Description must be at least 20 characters."),
  requirements: z.string().transform(val => val.split('\n').map(req => req.trim()).filter(Boolean)),
});

export type CareerFormState = {
  message: string;
  fields?: Partial<CareerOpening>;
  issues?: string[];
  success: boolean;
};

// Create Career Opening
export async function createCareerOpening(prevState: CareerFormState, data: FormData): Promise<CareerFormState> {
  const formData = Object.fromEntries(data);
  const parsed = CareerSchema.safeParse(formData);

  if (!parsed.success) {
    return {
      message: "Invalid form data for career opening.",
      fields: formData as any,
      issues: parsed.error.issues.map(issue => `${issue.path.join('.')}: ${issue.message}`),
      success: false,
    };
  }

  const newOpeningData = parsed.data;
  const newId = `career_${Date.now()}`;
  const careerOpening: CareerOpening = {
    ...newOpeningData,
    id: newId,
    postedDate: new Date().toISOString(),
  };

  careerOpeningsData.set(newId, careerOpening);
  revalidatePath('/admin/careers');
  revalidatePath('/careers');
  return { message: "Career opening created successfully!", success: true };
}

// Update Career Opening
export async function updateCareerOpening(prevState: CareerFormState, data: FormData): Promise<CareerFormState> {
  const formData = Object.fromEntries(data);
  const parsed = CareerSchema.extend({ id: z.string().min(1, "ID is required for update.") }).safeParse(formData);

  if (!parsed.success) {
    return {
      message: "Invalid form data for updating career opening.",
      fields: formData as any,
      issues: parsed.error.issues.map(issue => `${issue.path.join('.')}: ${issue.message}`),
      success: false,
    };
  }

  const { id, ...updateData } = parsed.data;
  const existingOpening = careerOpeningsData.get(id);

  if (!existingOpening) {
    return { message: "Career opening not found.", success: false };
  }

  const updatedOpening: CareerOpening = {
    ...existingOpening,
    ...updateData,
  };

  careerOpeningsData.set(id, updatedOpening);
  revalidatePath('/admin/careers');
  revalidatePath('/careers');
  return { message: "Career opening updated successfully!", success: true };
}

// Delete Career Opening
export async function deleteCareerOpening(id: string): Promise<{ success: boolean; message: string }> {
  if (careerOpeningsData.has(id)) {
    careerOpeningsData.delete(id);
    revalidatePath('/admin/careers');
    revalidatePath('/careers');
    return { success: true, message: "Career opening deleted." };
  }
  return { success: false, message: "Career opening not found." };
}
