
import type { NavLinkItem } from '@/types';
import type { Language } from '@/contexts/language-context';

export const APP_NAME: Record<Language, string> = {
  en: "Moh-AI Tech",
  ta: "மோ-ஏஐ டெக்"
};

export const NAV_LINKS: NavLinkItem[] = [
  { href: '/', labelTranslations: { en: 'Home', ta: 'முகப்பு' } },
  { href: '/about', labelTranslations: { en: 'About Us', ta: 'எங்களைப் பற்றி' } },
  { href: '/products', labelTranslations: { en: 'Products', ta: 'தயாரிப்புகள்' } },
  { href: '/blog', labelTranslations: { en: 'Blog', ta: 'வலைப்பதிவு' } },
  { href: '/careers', labelTranslations: { en: 'Careers', ta: 'வேலைவாய்ப்புகள்' } },
  { href: '/contact', labelTranslations: { en: 'Contact', ta: 'தொடர்புக்கு' } },
];

export const ADMIN_NAV_LINKS: NavLinkItem[] = [
  { href: '/admin/dashboard', labelTranslations: { en: 'Dashboard', ta: 'கட்டுப்பாட்டகம்' } },
  { href: '/admin/blog', labelTranslations: { en: 'Manage Blog', ta: 'வலைப்பதிவை நிர்வகி' } },
  { href: '/admin/careers', labelTranslations: { en: 'Manage Careers', ta: 'வேலைவாய்ப்புகளை நிர்வகி' } },
  { href: '/admin/products', labelTranslations: { en: 'Manage Products', ta: 'தயாரிப்புகளை நிர்வகி' } },
  { href: '/admin/team', labelTranslations: { en: 'Manage Team', ta: 'குழுவை நிர்வகி' } },
];

// MOCK_ANALYTICS can remain here if it's purely for display and not dynamic from data-store sizes yet.
export const MOCK_ANALYTICS = {
  totalUsers: 1250, // This will be different from usersStore.size if you add/remove users from store
  totalBlogPosts: 42, // This will be different from blogPostsData.size
  totalContacts: 315, // This will be different from contactMessages.length
  totalCareers: 5, // This will be different from careerOpeningsData.size
};
