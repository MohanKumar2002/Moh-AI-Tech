import type { Language } from '@/contexts/language-context';
import type { LucideIcon } from 'lucide-react'; // Keep for potential direct use, but iconName is primary for data

export interface BlogPostMapping {
  id: string;
  slug: string;
  title: string;
  date: string;
  author: string;
  excerpt: string;
  content: string; // Should be HTML string
  imageUrl?: string;
  dataAiHint?: string;
  tags?: string[];
}

export interface CareerOpening {
  id: string;
  title: string;
  location: string;
  type: 'Full-time' | 'Part-time' | 'Contract' | 'Internship';
  department: string;
  description: string;
  requirements: string[];
  postedDate: string; // ISO date string
}

export interface SubscriptionOption {
  type: 'monthly' | 'yearly';
  price: number;
}

export interface Product {
  id: string;
  name: Record<Language, string>;
  description: Record<Language, string>;
  keyFeatures: Record<Language, string[]>;
  iconName?: string;
  imageUrl?: string;
  dataAiHint?: string;
  subscriptionOptions?: SubscriptionOption[];

  // ✅ NEW: Full flow and stack content
  details?: {
    explanation?: Record<Language, string>;
    stack?: Record<Language, string>;
  };
}

export type UserRole = 'user' | 'admin';

export interface User {
  id: string;
  email: string;
  role: UserRole;
  name?: string;
}

export interface TeamMember {
  id: string;
  name: Record<Language, string>;
  role: Record<Language, string>;
  bio: Record<Language, string>;
  imageUrl: string;
  dataAiHint?: string;
}

export interface NavLinkItem {
  href: string;
  labelTranslations: Record<Language, string>;
}
