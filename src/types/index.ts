
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
  dataAiHint?: string; // For image generation hints
  tags?: string[];
}

export interface CareerOpening {
  id: string;
  title: string;
  location: string;
  type: 'Full-time' | 'Part-time' | 'Contract' | 'Internship';
  department: string;
  description: string;
  requirements: string[]; // List of requirements
  postedDate: string; // ISO date string
}

export interface SubscriptionOption {
  type: 'monthly' | 'yearly';
  price: number;
  // currency could be added here, e.g., currency: 'USD';
}

export interface Product {
  id: string;
  name: Record<Language, string>;
  description: Record<Language, string>;
  keyFeatures: Record<Language, string[]>;
  iconName?: string; // Changed from icon: React.ElementType to string name
  imageUrl?: string;
  dataAiHint?: string;
  subscriptionOptions?: SubscriptionOption[];
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

// For NAV_LINKS and ADMIN_NAV_LINKS
export interface NavLinkItem {
  href: string;
  labelTranslations: Record<Language, string>;
}
