
import type { Product, TeamMember, NavLinkItem } from '@/types';
import type { Language } from '@/contexts/language-context';
import { FileSignature, MessageCircle, Video, ScanText, AlignLeft } from 'lucide-react';

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
];

export const PRODUCTS_DATA: Product[] = [
  {
    id: 'resume-builder',
    name: { en: 'AI Resume Builder', ta: 'AI ரெஸ்யூம் பில்டர்' },
    description: { 
      en: 'Craft compelling, ATS-friendly resumes in minutes with our AI-powered builder.',
      ta: 'எங்கள் AI-இயங்கும் பில்டர் மூலம் நிமிடங்களில் அழுத்தமான, ATS-க்கு ஏற்ற ரெஸ்யூம்களை உருவாக்குங்கள்.'
    },
    keyFeatures: {
      en: ['AI-driven content suggestions', 'ATS optimization', 'Multiple templates', 'Real-time feedback'],
      ta: ['AI-உந்துதல் உள்ளடக்க பரிந்துரைகள்', 'ATS தேர்வுமுறை', 'பல வார்ப்புருக்கள்', 'நிகழ்நேர பின்னூட்டம்']
    },
    icon: FileSignature,
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'resume builder',
    subscriptionOptions: [
      { type: 'monthly', price: 9.99 },
      { type: 'yearly', price: 99.99 },
    ],
  },
  {
    id: 'smart-chatbot',
    name: { en: 'Smart Chatbot', ta: 'ஸ்மார்ட் சாட்பாட்'},
    description: {
      en: 'Engage customers 24/7 with intelligent, human-like conversations.',
      ta: 'புத்திசாலித்தனமான, மனிதனைப் போன்ற உரையாடல்களுடன் வாடிக்கையாளர்களை 24/7 ஈடுபடுத்துங்கள்.'
    },
    keyFeatures: {
      en: ['Natural Language Processing', 'Customizable workflows', 'Multi-channel support', 'Analytics dashboard'],
      ta: ['இயற்கை மொழி செயலாக்கம்', 'தனிப்பயனாக்கக்கூடிய பணிப்பாய்வுகள்', 'பல சேனல் ஆதரவு', 'பகுப்பாய்வு டாஷ்போர்டு']
    },
    icon: MessageCircle,
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'chatbot interface',
    subscriptionOptions: [
      { type: 'monthly', price: 49.99 },
      { type: 'yearly', price: 499.99 },
    ],
  },
  {
    id: 'video-generator',
    name: { en: 'Video Generator', ta: 'வீடியோ ஜெனரேட்டர்' },
    description: {
      en: 'Transform text and images into professional-quality videos effortlessly.',
      ta: 'உரை மற்றும் படங்களை சிரமமின்றி தொழில்முறை-தரமான வீடியோக்களாக மாற்றவும்.'
    },
    keyFeatures: {
      en: ['Text-to-video synthesis', 'AI voiceovers', 'Stock media library', 'Branding customization'],
      ta: ['உரையிலிருந்து வீடியோ தொகுப்பு', 'AI குரல்வழி', 'பங்கு ஊடக நூலகம்', 'பிராண்டிங் தனிப்பயனாக்கம்']
    },
    icon: Video,
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'video editing',
    subscriptionOptions: [
      { type: 'monthly', price: 29.99 },
      { type: 'yearly', price: 299.99 },
    ],
  },
  {
    id: 'ocr-engine',
    name: { en: 'OCR Engine', ta: 'OCR இயந்திரம்' },
    description: {
      en: 'Extract text from images and documents with high accuracy and speed.',
      ta: 'படங்கள் மற்றும் ஆவணங்களிலிருந்து அதிக துல்லியம் மற்றும் வேகத்துடன் உரையைப் பிரித்தெடுக்கவும்.'
    },
    keyFeatures: {
      en: ['Multi-language support', 'Layout analysis', 'Data extraction', 'Cloud & on-premise options'],
      ta: ['பல மொழி ஆதரவு', 'தளவமைப்பு பகுப்பாய்வு', 'தரவு பிரித்தெடுத்தல்', 'கிளவுட் & ஆன்-பிரைமைஸ் விருப்பங்கள்']
    },
    icon: ScanText,
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'document scan',
    subscriptionOptions: [
      { type: 'monthly', price: 19.99 },
      { type: 'yearly', price: 199.99 },
    ],
  },
  {
    id: 'text-summarizer',
    name: { en: 'Text Summarizer', ta: 'உரை சுருக்கி' },
    description: {
      en: 'Get concise summaries of long articles, reports, and documents instantly.',
      ta: 'நீண்ட கட்டுரைகள், அறிக்கைகள் மற்றும் ஆவணங்களின் சுருக்கமான சுருக்கங்களை உடனடியாகப் பெறுங்கள்.'
    },
    keyFeatures: {
      en: ['Abstractive & extractive summarization', 'Adjustable summary length', 'Key phrase extraction', 'API access'],
      ta: ['சுருக்கமான & பிரித்தெடுக்கும் சுருக்கம்', 'சரிசெய்யக்கூடிய சுருக்க நீளம்', 'முக்கிய சொற்றொடர் பிரித்தெடுத்தல்', 'API அணுகல்']
    },
    icon: AlignLeft,
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'text analysis',
    subscriptionOptions: [
      { type: 'monthly', price: 14.99 },
      { type: 'yearly', price: 149.99 },
    ],
  },
];

export const TEAM_MEMBERS_DATA: TeamMember[] = [
  {
    id: '1',
    name: { en: 'Mr. Mohan Kumar', ta: 'டாக்டர். மோகன் குமார்' },
    role: { 
  en: 'CEO & Founder, AI Solutions Architect', 
  ta: 'CEO மற்றும் நிறுவனர், ஏஐ தீர்வு வடிவமைப்பாளர்' 
},
bio: { 
  en: 'CEO and founder of Moh-AI Tech, driving innovation in AI development. Passionate about building powerful tools that transform business intelligence and empower users globally.',
  ta: 'மோ-ஏஐ டெக் நிறுவனத்தின் CEO மற்றும் நிறுவனர், ஏஐ மேம்பாட்டில் புதுமைகளை வழிநடத்துகிறார். வணிக நுண்ணறிவை மாற்றும் மற்றும் உலகளாவிய பயனர்களை அதிகாரப்படுத்தும் சக்திவாய்ந்த கருவிகளை உருவாக்கும் ஆர்வமுள்ளவர்.'
},
    imageUrl: 'https://placehold.co/300x300.png',
    dataAiHint: 'professional woman'
  },
  {
    id: '2',
    name: { en: 'Ben Carter', ta: 'பென் கார்ட்டர்' },
    role: { en: 'CTO & Head of Engineering', ta: 'தலைமை தொழில்நுட்ப அதிகாரி & பொறியியல் துறை தலைவர்' },
    bio: {
      en: 'Expert technologist building scalable and robust AI platforms, ensuring Moh-AI Tech stays at the cutting edge of technology.',
      ta: 'அளவிடக்கூடிய மற்றும் வலுவான AI தளங்களை உருவாக்கும் நிபுணர் தொழில்நுட்பவியலாளர், மோ-ஏஐ டெக் தொழில்நுட்பத்தின் vanguard இல் இருப்பதை உறுதிசெய்கிறார்.'
    },
    imageUrl: 'https://placehold.co/300x300.png',
    dataAiHint: 'professional man'
  },
  {
    id: '3',
    name: { en: 'Chloe Davis', ta: 'குளோயி டேவிஸ்' },
    role: { en: 'Head of Product', ta: 'தயாரிப்பு பிரிவு தலைவர்' },
    bio: {
      en: 'Passionate about creating user-centric AI products that solve real-world problems and deliver exceptional value.',
      ta: 'நிஜ உலகப் பிரச்சனைகளைத் தீர்க்கும் மற்றும் விதிவிலக்கான மதிப்பை வழங்கும் பயனர் மைய AI தயாரிப்புகளை உருவாக்குவதில் ஆர்வமாக உள்ளார்.'
    },
    imageUrl: 'https://placehold.co/300x300.png',
    dataAiHint: 'smiling person'
  }
];

export const MOCK_ANALYTICS = {
  totalUsers: 1250,
  totalBlogPosts: 42,
  totalContacts: 315,
  totalCareers: 5,
};
