'use server';

import { z } from 'zod';
import { blogPostsData } from '@/lib/data-store';
import type { BlogPostMapping } from '@/types';
import { revalidatePath } from 'next/cache';

const BlogSchema = z.object({
  id: z.string().optional(), // Optional for creation, required for update
  title: z.string().min(5, "Title must be at least 5 characters."),
  slug: z.string().min(3, "Slug must be at least 3 characters.").regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, "Slug must be lowercase alphanumeric with hyphens."),
  author: z.string().min(2, "Author name must be at least 2 characters."),
  excerpt: z.string().min(10, "Excerpt must be at least 10 characters."),
  content: z.string().min(50, "Content must be at least 50 characters."),
  imageUrl: z.string().url("Invalid image URL.").optional().or(z.literal('')),
  tags: z.string().optional().transform(val => val ? val.split(',').map(tag => tag.trim()).filter(Boolean) : []),
});

export type BlogFormState = {
  message: string;
  fields?: Partial<BlogPostMapping>;
  issues?: string[];
  success: boolean;
};

// Create Blog Post
export async function createBlogPost(prevState: BlogFormState, data: FormData): Promise<BlogFormState> {
  const formData = Object.fromEntries(data);
  const parsed = BlogSchema.safeParse(formData);

  if (!parsed.success) {
    return {
      message: "Invalid form data for blog post.",
      fields: formData as any,
      issues: parsed.error.issues.map(issue => `${issue.path.join('.')}: ${issue.message}`),
      success: false,
    };
  }

  const newPostData = parsed.data;

  if (blogPostsData.has(newPostData.slug) || Array.from(blogPostsData.values()).find(p => p.slug === newPostData.slug)) {
    return { message: `Blog post with slug "${newPostData.slug}" already exists.`, success: false, issues: ['slug: Slug already exists.'] };
  }
  
  const newId = `blog_${Date.now()}`;
  const blogPost: BlogPostMapping = {
    ...newPostData,
    id: newId,
    date: new Date().toISOString(),
    tags: newPostData.tags || [],
  };

  blogPostsData.set(newId, blogPost); // Use newId as key if slug can change. Or use slug as key.
                                      // For simplicity with current Map, let's use ID as key for Map storage
                                      // and ensure slug is unique.
  
  revalidatePath('/admin/blog');
  revalidatePath('/blog');
  revalidatePath(`/blog/${blogPost.slug}`);
  return { message: "Blog post created successfully!", success: true };
}

// Update Blog Post
export async function updateBlogPost(prevState: BlogFormState, data: FormData): Promise<BlogFormState> {
  const formData = Object.fromEntries(data);
  const parsed = BlogSchema.extend({ id: z.string().min(1, "ID is required for update.") }).safeParse(formData);

  if (!parsed.success) {
    return {
      message: "Invalid form data for updating blog post.",
      fields: formData as any,
      issues: parsed.error.issues.map(issue => `${issue.path.join('.')}: ${issue.message}`),
      success: false,
    };
  }
  
  const { id, ...updateData } = parsed.data;

  const existingPost = blogPostsData.get(id);
  if (!existingPost) {
    return { message: "Blog post not found.", success: false };
  }

  // Check if slug is being changed and if the new slug already exists (excluding current post)
  if (updateData.slug !== existingPost.slug) {
    if (Array.from(blogPostsData.values()).find(p => p.slug === updateData.slug && p.id !== id)) {
         return { message: `Blog post with slug "${updateData.slug}" already exists.`, success: false, issues: ['slug: Slug already exists.'] };
    }
  }

  const updatedPost: BlogPostMapping = {
    ...existingPost,
    ...updateData,
    tags: updateData.tags || [],
  };

  blogPostsData.set(id, updatedPost);
  
  revalidatePath('/admin/blog');
  revalidatePath('/blog');
  revalidatePath(`/blog/${existingPost.slug}`); // old slug
  if (existingPost.slug !== updatedPost.slug) {
    revalidatePath(`/blog/${updatedPost.slug}`); // new slug
  }
  return { message: "Blog post updated successfully!", success: true };
}

// Delete Blog Post
export async function deleteBlogPost(id: string): Promise<{ success: boolean; message: string }> {
  const post = blogPostsData.get(id);
  if (post) {
    blogPostsData.delete(id);
    revalidatePath('/admin/blog');
    revalidatePath('/blog');
    revalidatePath(`/blog/${post.slug}`);
    return { success: true, message: "Blog post deleted." };
  }
  return { success: false, message: "Blog post not found." };
}
