import type { Language } from '@/contexts/language-context';
import type { LucideIcon } from 'lucide-react';

export interface NavLinkItem {
  href: string;
  labelTranslations: Record<string, string>;
  iconName?: string;
}

export interface BlogPostMapping {
  id: string;
  slug: string;
  title: string;
  date: string;
  author: string;
  excerpt: string;
  content: string;
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
  postedDate: string;
}

export interface SubscriptionOption {
  type: 'monthly' | 'yearly';
  price: number;
}

export interface Product {
  id: string;
  name: Record<string, string>;
  description: Record<string, string>;
  keyFeatures: Record<string, string[]>;
  iconName?: string;
  imageUrl?: string;
  dataAiHint?: string;
  subscriptionOptions?: SubscriptionOption[];
  details?: {
    explanation?: Record<string, string>;
    stack?: Record<string, string>;
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
  name: string | Record<string, string>;
  role: Record<string, string>;
  bio: Record<string, string>;
  imageUrl?: string;
  dataAiHint?: string;
  socialLinks?: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
}
