
'use server';

import { z } from 'zod';
import { productsData } from '@/lib/data-store';
import type { Product, SubscriptionOption } from '@/types';
import { revalidatePath } from 'next/cache';

const ProductSchema = z.object({
  id: z.string().min(1, "ID must be at least 1 character.").regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, "ID must be lowercase alphanumeric with hyphens."),
  name_en: z.string().min(3, "English name must be at least 3 characters."),
  name_ta: z.string().min(3, "Tamil name must be at least 3 characters."),
  description_en: z.string().min(10, "English description must be at least 10 characters."),
  description_ta: z.string().min(10, "Tamil description must be at least 10 characters."),
  keyFeatures_en: z.string().transform(val => val.split('\n').map(feat => feat.trim()).filter(Boolean)),
  keyFeatures_ta: z.string().transform(val => val.split('\n').map(feat => feat.trim()).filter(Boolean)),
  iconName: z.string().optional(),
  imageUrl: z.string().url("Invalid image URL.").optional().or(z.literal('')),
  dataAiHint: z.string().optional(),
  monthlyPrice: z.preprocess(
    (val) => (val === "" || val === undefined || val === null ? undefined : Number(val)),
    z.number().positive("Price must be positive.").optional()
  ),
  yearlyPrice: z.preprocess(
    (val) => (val === "" || val === undefined || val === null ? undefined : Number(val)),
    z.number().positive("Price must be positive.").optional()
  ),
});

// For updates, ID is part of the form data, but not part of the main schema for create.
const UpdateProductSchema = ProductSchema.extend({
  originalId: z.string().min(1, "Original ID is required for update."), // Used to fetch the existing product
});


export type ProductFormState = {
  message: string;
  fields?: Record<string, any>; // Allow any for fields due to mixed types
  issues?: string[];
  success: boolean;
};

// Helper to construct subscription options
const constructSubscriptionOptions = (monthlyPrice?: number, yearlyPrice?: number): SubscriptionOption[] => {
  const options: SubscriptionOption[] = [];
  if (monthlyPrice !== undefined && monthlyPrice > 0) {
    options.push({ type: 'monthly', price: monthlyPrice });
  }
  if (yearlyPrice !== undefined && yearlyPrice > 0) {
    options.push({ type: 'yearly', price: yearlyPrice });
  }
  return options;
};

// Create Product
export async function createProduct(prevState: ProductFormState, data: FormData): Promise<ProductFormState> {
  const formData = Object.fromEntries(data);
  const parsed = ProductSchema.safeParse(formData);

  if (!parsed.success) {
    return {
      message: "Invalid form data for product.",
      fields: formData,
      issues: parsed.error.issues.map(issue => `${issue.path.join('.')}: ${issue.message}`),
      success: false,
    };
  }

  const { id, name_en, name_ta, description_en, description_ta, keyFeatures_en, keyFeatures_ta, iconName, imageUrl, dataAiHint, monthlyPrice, yearlyPrice } = parsed.data;

  if (productsData.has(id)) {
    return { message: `Product with ID "${id}" already exists.`, success: false, issues: ['id: ID already exists.'] };
  }

  const newProduct: Product = {
    id,
    name: { en: name_en, ta: name_ta },
    description: { en: description_en, ta: description_ta },
    keyFeatures: { en: keyFeatures_en, ta: keyFeatures_ta },
    iconName: iconName || undefined,
    imageUrl: imageUrl || undefined,
    dataAiHint: dataAiHint || undefined,
    subscriptionOptions: constructSubscriptionOptions(monthlyPrice, yearlyPrice),
  };

  productsData.set(id, newProduct);
  
  revalidatePath('/admin/products');
  revalidatePath('/products');
  revalidatePath('/'); // Products are shown on homepage
  return { message: "Product created successfully!", success: true };
}

// Update Product
export async function updateProduct(prevState: ProductFormState, data: FormData): Promise<ProductFormState> {
  const formData = Object.fromEntries(data);
  const parsed = UpdateProductSchema.safeParse(formData);

  if (!parsed.success) {
    return {
      message: "Invalid form data for updating product.",
      fields: formData,
      issues: parsed.error.issues.map(issue => `${issue.path.join('.')}: ${issue.message}`),
      success: false,
    };
  }
  
  const { originalId, id: newId, name_en, name_ta, description_en, description_ta, keyFeatures_en, keyFeatures_ta, iconName, imageUrl, dataAiHint, monthlyPrice, yearlyPrice } = parsed.data;

  const existingProduct = productsData.get(originalId);
  if (!existingProduct) {
    return { message: "Product not found for update.", success: false };
  }

  // If ID is changed, check for conflicts and update map key
  if (originalId !== newId) {
    if (productsData.has(newId)) {
      return { message: `Another product with ID "${newId}" already exists.`, success: false, issues: ['id: New ID already exists.'] };
    }
    productsData.delete(originalId); // Remove old entry
  }
  
  const updatedProduct: Product = {
    ...existingProduct, // Preserve any fields not in the form
    id: newId,
    name: { en: name_en, ta: name_ta },
    description: { en: description_en, ta: description_ta },
    keyFeatures: { en: keyFeatures_en, ta: keyFeatures_ta },
    iconName: iconName || undefined,
    imageUrl: imageUrl || undefined,
    dataAiHint: dataAiHint || undefined,
    subscriptionOptions: constructSubscriptionOptions(monthlyPrice, yearlyPrice),
  };

  productsData.set(newId, updatedProduct); // Add/update with new ID
  
  revalidatePath('/admin/products');
  revalidatePath('/products');
  revalidatePath('/');
  return { message: "Product updated successfully!", success: true };
}

// Delete Product
export async function deleteProduct(id: string): Promise<{ success: boolean; message: string }> {
  if (productsData.has(id)) {
    productsData.delete(id);
    revalidatePath('/admin/products');
    revalidatePath('/products');
    revalidatePath('/');
    return { success: true, message: "Product deleted." };
  }
  return { success: false, message: "Product not found." };
}
