
'use server';

import { z } from 'zod';
import { teamMembersData } from '@/lib/data-store';
import type { TeamMember } from '@/types';
import { revalidatePath } from 'next/cache';

const TeamMemberSchema = z.object({
  id: z.string().min(1, "ID must be at least 1 character.").regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, "ID must be lowercase alphanumeric with hyphens."),
  name_en: z.string().min(2, "English name must be at least 2 characters."),
  name_ta: z.string().min(2, "Tamil name must be at least 2 characters."),
  role_en: z.string().min(2, "English role must be at least 2 characters."),
  role_ta: z.string().min(2, "Tamil role must be at least 2 characters."),
  bio_en: z.string().min(10, "English bio must be at least 10 characters."),
  bio_ta: z.string().min(10, "Tamil bio must be at least 10 characters."),
  imageUrl: z.string().url("Invalid image URL.").or(z.literal('')), // Allow empty string for no image
  dataAiHint: z.string().optional(),
});

// For updates, ID is part of the form data, but not part of the main schema for create.
const UpdateTeamMemberSchema = TeamMemberSchema.extend({
  originalId: z.string().min(1, "Original ID is required for update."), // Used to fetch the existing member
});


export type TeamMemberFormState = {
  message: string;
  fields?: Record<string, any>; // Allow any for fields due to mixed types
  issues?: string[];
  success: boolean;
};

// Create Team Member
export async function createTeamMember(prevState: TeamMemberFormState, data: FormData): Promise<TeamMemberFormState> {
  const formData = Object.fromEntries(data);
  const parsed = TeamMemberSchema.safeParse(formData);

  if (!parsed.success) {
    return {
      message: "Invalid form data for team member.",
      fields: formData,
      issues: parsed.error.issues.map(issue => `${issue.path.join('.')}: ${issue.message}`),
      success: false,
    };
  }

  const { id, name_en, name_ta, role_en, role_ta, bio_en, bio_ta, imageUrl, dataAiHint } = parsed.data;

  if (teamMembersData.has(id)) {
    return { message: `Team member with ID "${id}" already exists.`, success: false, issues: ['id: ID already exists.'] };
  }

  const newMember: TeamMember = {
    id,
    name: { en: name_en, ta: name_ta },
    role: { en: role_en, ta: role_ta },
    bio: { en: bio_en, ta: bio_ta },
    imageUrl: imageUrl || 'https://placehold.co/300x300.png', // Default placeholder if empty
    dataAiHint: dataAiHint || (imageUrl ? undefined : 'portrait person'),
  };

  teamMembersData.set(id, newMember);
  
  revalidatePath('/admin/team');
  revalidatePath('/about'); // Team members are shown on About Us page
  return { message: "Team member created successfully!", success: true };
}

// Update Team Member
export async function updateTeamMember(prevState: TeamMemberFormState, data: FormData): Promise<TeamMemberFormState> {
  const formData = Object.fromEntries(data);
  const parsed = UpdateTeamMemberSchema.safeParse(formData);

  if (!parsed.success) {
    return {
      message: "Invalid form data for updating team member.",
      fields: formData,
      issues: parsed.error.issues.map(issue => `${issue.path.join('.')}: ${issue.message}`),
      success: false,
    };
  }
  
  const { originalId, id: newId, name_en, name_ta, role_en, role_ta, bio_en, bio_ta, imageUrl, dataAiHint } = parsed.data;

  const existingMember = teamMembersData.get(originalId);
  if (!existingMember) {
    return { message: "Team member not found for update.", success: false };
  }

  // If ID is changed, check for conflicts and update map key
  if (originalId !== newId) {
    if (teamMembersData.has(newId)) {
      return { message: `Another team member with ID "${newId}" already exists.`, success: false, issues: ['id: New ID already exists.'] };
    }
    teamMembersData.delete(originalId); // Remove old entry
  }
  
  const updatedMember: TeamMember = {
    ...existingMember, // Preserve any fields not in the form if needed
    id: newId,
    name: { en: name_en, ta: name_ta },
    role: { en: role_en, ta: role_ta },
    bio: { en: bio_en, ta: bio_ta },
    imageUrl: imageUrl || existingMember.imageUrl || 'https://placehold.co/300x300.png',
    dataAiHint: dataAiHint || (imageUrl ? undefined : existingMember.dataAiHint),
  };

  teamMembersData.set(newId, updatedMember); // Add/update with new ID
  
  revalidatePath('/admin/team');
  revalidatePath('/about');
  return { message: "Team member updated successfully!", success: true };
}

// Delete Team Member
export async function deleteTeamMember(id: string): Promise<{ success: boolean; message: string }> {
  if (teamMembersData.has(id)) {
    teamMembersData.delete(id);
    revalidatePath('/admin/team');
    revalidatePath('/about');
    return { success: true, message: "Team member deleted." };
  }
  return { success: false, message: "Team member not found." };
}
