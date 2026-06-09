import type { BlogPostMapping, CareerOpening, Product, TeamMember, SubscriptionOption } from '@/types';
import type { Language } from '@/contexts/language-context';

// Use Maps for easier CRUD by ID
export let blogPostsData: Map<string, BlogPostMapping> = new Map([
  ['1', {
    id: '1',
    slug: 'automating-sales-outreach-n8n',
    title: 'Case Study: Automating Sales Outreach using n8n and LLMs',
    date: '2024-07-15',
    author: 'Mohan Kumar',
    excerpt: 'How we engineered an automated outreach pipeline integrating HuggingFace NLP models to increase lead response rates by 45%.',
    content: '<p>In the competitive landscape of B2B sales, speed and personalization are everything. Manually researching prospects, drafting tailored emails, and tracking follow-ups is a massive drain on resources. We were tasked with solving this exact problem for a growing agency.</p><h3>The Challenge</h3><p>Our client had a robust list of leads but struggled with a low response rate (under 5%). Generic email blasts were failing, and manual personalization took 20-30 minutes per lead. They needed a scalable system that felt highly personal.</p><h3>The Solution: n8n + HuggingFace + Gmail API</h3><p>We engineered a highly scalable workflow automation pipeline using <strong>n8n</strong>. The workflow triggers automatically when a new lead is added to a Google Sheet. It then scrapes the lead\'s company website to extract their core business value.</p><p>We integrated open-source LLMs via <strong>HuggingFace</strong> to analyze this scraped data and generate a hyper-personalized email draft. The LLM was prompted to identify a specific pain point the company might be facing and pitch our client\'s solution natively.</p><h3>The Results</h3><p>Once the AI generates the email, the workflow uses the <strong>Gmail API</strong> to automatically save it as a draft for human review, or send it directly for trusted funnels. The results were astounding:</p><ul><li><strong>45% Increase in Response Rate:</strong> Prospects felt the emails were written specifically for them after hours of research.</li><li><strong>20+ Hours Saved Weekly:</strong> The sales team stopped drafting emails and started closing deals.</li></ul><p>If your sales pipeline is bottlenecked by manual outreach, custom AI automation is no longer a luxury—it is a necessity.</p>',
    imageUrl: '/images/blog-lead-gen.png',
    tags: ['Automation', 'n8n', 'Lead Gen', 'LLMs']
  }],
  ['2', {
    id: '2',
    slug: 'rag-chatbot-reducing-support',
    title: 'How a Custom RAG Chatbot Reduced Support Queries by 70%',
    date: '2024-06-28',
    author: 'Mohan Kumar',
    excerpt: 'Deploying a tailored Retrieval-Augmented Generation (RAG) chatbot using FastAPI and Vector Databases to handle enterprise customer support.',
    content: '<p>Customer support teams often spend the majority of their day answering the same repetitive questions. While traditional rule-based chatbots attempt to solve this, they usually frustrate users with "I don\'t understand" loops. The modern solution is <strong>Retrieval-Augmented Generation (RAG)</strong>.</p><h3>The Problem with Off-the-Shelf AI</h3><p>A mid-sized SaaS client approached us because their support tickets were overwhelming their small team. They tried using standard ChatGPT wrappers, but the AI hallucinated answers or gave generic advice that didn\'t apply to their specific software.</p><h3>Building the RAG Architecture</h3><p>We built a custom RAG system from the ground up. First, we ingested their entire knowledge base, API documentation, and past resolved support tickets. We converted this text into dense vector embeddings and stored them in a high-performance <strong>Vector Database</strong>.</p><p>We then developed a robust backend using <strong>FastAPI</strong>. When a user asks a question, the system queries the Vector DB to retrieve the top 3 most relevant documents. These documents are injected into the prompt of an advanced LLM, forcing the AI to generate an answer based <em>only</em> on the client\'s actual documentation.</p><h3>Impact & Metrics</h3><p>The deployed chatbot was instantly deployed to their user dashboard.</p><ul><li><strong>70% Ticket Deflection:</strong> The bot successfully resolved 7 out of 10 queries without human intervention.</li><li><strong>0% Hallucination Rate:</strong> Because of strict RAG grounding, the bot never invented features that didn\'t exist.</li><li><strong>24/7 Instant Support:</strong> Users received complex technical answers in under 3 seconds.</li></ul><p>By connecting your proprietary data to LLMs securely, you can create AI agents that actually understand your business inside and out.</p>',
    imageUrl: '/images/blog-rag-bot.png',
    tags: ['RAG', 'Vector DB', 'FastAPI', 'Chatbot']
  }]
]);

export let careerOpeningsData: Map<string, CareerOpening> = new Map([
  ['0', {
    id: '0',
    title: 'Career Opportunities Coming Soon',
    location: 'Global',
    type: 'Full-time',
    department: 'All Departments',
    description: 'We’re not hiring at the moment, but exciting roles will be posted here soon. Stay connected!',
    requirements: ['Stay tuned for future openings'],
    postedDate: '2025-06-15'
  }]
]);

export let teamMembersData: Map<string, TeamMember> = new Map([
  ['mohan-kumar', {
    id: 'mohan-kumar',
    name: { en: 'Mr. Mohan Kumar', ta: 'திரு. மோகன் குமார்' },
    role: { en: 'CEO & Founder, AI Solutions Architect', ta: 'தலைமை நிர்வாக அதிகாரி & நிறுவனர், AI தீர்வுகள் கட்டிடக் கலைஞர்' },
    bio: { 
      en: 'CEO and Founder of Moh-AI Tech. Delivered 21+ advanced AI projects across M.Tech, PhD, and UG research levels. Expert in NLP, Transformers, and scalable Full-Stack AI architectures, with published research in IEEE.',
      ta: 'மோ-ஏஐ டெக்கின் தலைமை நிர்வாக அதிகாரி மற்றும் நிறுவனர். 21+ மேம்பட்ட AI திட்டங்களை வழங்கியுள்ளார். NLP மற்றும் Full-Stack AI கட்டமைப்புகளில் நிபுணர், IEEE-இல் ஆராய்ச்சிக் கட்டுரைகளை வெளியிட்டுள்ளார்.'
    },
    imageUrl: '/images/mohan.jpg',
  }]
]);


export let productsData: Map<string, Product> = new Map([
  ['resume-builder', {
    id: 'resume-builder',
    name: { en: 'AI Resume Builder (Demo)', ta: 'AI ரெஸ்யூம் பில்டர் (டெமோ)' },
    description: { 
      en: 'Craft compelling, ATS-friendly resumes in minutes with our AI-powered builder.',
      ta: 'எங்கள் AI-இயங்கும் பில்டர் மூலம் நிமிடங்களில் அழுத்தமான, ATS-க்கு ஏற்ற ரெஸ்யூம்களை உருவாக்குங்கள்.'
    },
    keyFeatures: {
      en: ['AI-driven content suggestions', 'ATS optimization', 'Multiple templates', 'Real-time feedback'],
      ta: ['AI-உந்துதல் உள்ளடக்க பரிந்துரைகள்', 'ATS தேர்வுமுறை', 'பல வார்ப்புருக்கள்', 'நிகழ்நேர பின்னூட்டம்']
    },
    iconName: 'FileSignature',
    imageUrl: '/images/resume.png',
    subscriptionOptions: [
      { type: 'monthly', price: 0.00 },
    ],
  }],
  ['text-summarizer', {
    id: 'text-summarizer',
    name: { en: 'Text Summarizer (Demo)', ta: 'உரை சுருக்கி (டெமோ)' },
    description: {
      en: 'Get concise summaries of long articles, reports, and documents instantly.',
      ta: 'நீண்ட கட்டுரைகள், அறிக்கைகள் மற்றும் ஆவணங்களின் சுருக்கமான சுருக்கங்களை உடனடியாகப் பெறுங்கள்.'
    },
    keyFeatures: {
      en: ['Abstractive & extractive summarization', 'Adjustable summary length', 'Key phrase extraction', 'API access'],
      ta: ['சுருக்கமான & பிரித்தெடுக்கும் சுருக்கம்', 'சரிசெய்யக்கூடிய சுருக்க நீளம்', 'முக்கிய சொற்றொடர் பிரித்தெடுத்தல்', 'API அணுகல்']
    },
    iconName: 'AlignLeft',
    imageUrl: '/images/text_sum.png',
    subscriptionOptions: [
      { type: 'monthly', price: 0.00 },
    ],
  }],
  ['ai-email-writer', {
    id: 'ai-email-writer',
    name: { en: 'AI Email Writer (Demo)', ta: 'AI மின்னஞ்சல் எழுத்தாளர் (டெமோ)' },
    description: {
      en: 'Instantly draft professional, high-converting emails based on a single prompt.',
      ta: 'ஒரே ஒரு வரியில் தொழில்முறை மின்னஞ்சல்களை உடனடியாக உருவாக்குங்கள்.'
    },
    keyFeatures: {
      en: ['Tone adjustment', 'Sales outreach templates', 'Follow-up generator', 'Grammar correction'],
      ta: ['தொனி சரிசெய்தல்', 'விற்பனை மின்னஞ்சல்கள்', 'பின்தொடர்தல்', 'இலக்கண திருத்தம்']
    },
    iconName: 'Mail',
    imageUrl: '/images/email-writer.png',
    subscriptionOptions: [
      { type: 'monthly', price: 0.00 },
    ],
  }],
  ['idea-validator', {
    id: 'idea-validator',
    name: { en: 'Business Idea Validator (Demo)', ta: 'வணிக யோசனை சரிபார்ப்பான் (டெமோ)' },
    description: {
      en: 'Analyze your startup idea for market viability, competitors, and potential pitfalls.',
      ta: 'உங்கள் ஸ்டார்ட்அப் யோசனையை சந்தை, போட்டியாளர்கள் மற்றும் சாத்தியமான சிக்கல்களுக்கு பகுப்பாய்வு செய்யுங்கள்.'
    },
    keyFeatures: {
      en: ['Market analysis', 'Competitor tracking', 'SWOT generation', 'Monetization strategies'],
      ta: ['சந்தை பகுப்பாய்வு', 'போட்டியாளர் கண்காணிப்பு', 'SWOT உருவாக்கம்', 'வருவாய் உத்திகள்']
    },
    iconName: 'Lightbulb',
    imageUrl: '/images/idea-validator.png',
    subscriptionOptions: [
      { type: 'monthly', price: 0.00 },
    ],
  }],
]);


// Simulating a simple user store for auth context
export const usersStore = new Map<string, { id: string, email: string, passwordHash: string, role: 'user' | 'admin', name?: string }>();
usersStore.set('admin@mohai.tech', { id: 'admin001', email: 'admin@mohai.tech', passwordHash: 'hashed_admin_password', role: 'admin', name: 'Admin User'});
usersStore.set('user@mohai.tech', { id: 'user001', email: 'user@mohai.tech', passwordHash: 'hashed_user_password', role: 'user', name: 'Regular User'});

// Simple store for contact messages - in a real app, this would go to a database
export let contactMessages: Array<{ id: string; name: string; email: string; subject: string; message: string; createdAt: Date }> = [];
