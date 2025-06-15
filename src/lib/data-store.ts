import type { BlogPostMapping, CareerOpening, Product, TeamMember, SubscriptionOption } from '@/types';
import type { Language } from '@/contexts/language-context';

// Use Maps for easier CRUD by ID
export let blogPostsData: Map<string, BlogPostMapping> = new Map([
  ['1', { // Changed key to ID for consistency
    id: '1',
    slug: 'ai-in-healthcare',
    title: 'The Transformative Role of AI in Healthcare',
    date: '2024-07-15',
    author: 'Dr. AI Expert',
    excerpt: 'Artificial intelligence is revolutionizing healthcare, from diagnostics to personalized treatments...',
    content: '<p>Artificial intelligence (AI) is rapidly transforming the healthcare landscape, offering innovative solutions to complex medical challenges. Its applications span a wide range of areas, including diagnostics, drug discovery, personalized medicine, and patient care.</p><h3>Enhanced Diagnostics</h3><p>AI algorithms can analyze medical images like X-rays, CT scans, and MRIs with remarkable speed and accuracy, often detecting subtle patterns that human eyes might miss. This capability aids in the early detection of diseases such as cancer and diabetic retinopathy, leading to better patient outcomes.</p><h3>Drug Discovery and Development</h3><p>The process of discovering and developing new drugs is notoriously long and expensive. AI can significantly accelerate this by analyzing vast datasets of biological and chemical information to identify potential drug candidates and predict their efficacy and side effects. This reduces the time and cost associated with bringing new therapies to market.</p><h3>Personalized Medicine</h3><p>AI enables a more personalized approach to treatment by analyzing individual patient data, including genetic information, lifestyle factors, and medical history. This allows healthcare providers to tailor treatment plans to the specific needs of each patient, improving effectiveness and minimizing adverse reactions.</p><p>While the potential of AI in healthcare is immense, challenges such as data privacy, regulatory hurdles, and the need for robust validation remain. However, ongoing research and development continue to push the boundaries, promising a future where AI plays an integral role in delivering more efficient, effective, and equitable healthcare for all.</p>',
    imageUrl: '/images/blog1.png',
    tags: ['AI', 'Healthcare', 'Innovation']
  }],
  ['2', { // Changed key to ID for consistency
    id: '2',
    slug: 'future-of-work-with-ai',
    title: 'Navigating the Future of Work with AI',
    date: '2024-06-28',
    author: 'Tech Futurist',
    excerpt: 'AI is not just changing tools, it\'s reshaping industries and the very nature of work...',
    content: '<p>The integration of Artificial Intelligence (AI) into the workplace is heralding a new era, often referred to as the Future of Work. This transformation encompasses not only the tools we use but also the way tasks are performed, roles are defined, and industries operate. Understanding and adapting to these changes is crucial for individuals and organizations alike.</p><h3>Automation and Augmentation</h3><p>AI excels at automating repetitive and data-intensive tasks, freeing up human workers to focus on more complex, creative, and strategic activities. This doesn\'t necessarily mean widespread job displacement but rather a shift in job roles. AI can also augment human capabilities, providing insights and assistance that enhance productivity and decision-making. For example, AI-powered analytics can help marketers understand customer behavior more deeply, while AI assistants can manage schedules and communications more efficiently.</p><h3>New Skills and Roles</h3><p>As AI takes over certain tasks, the demand for new skills will rise. These include data literacy, AI ethics, human-AI collaboration, and skills related to developing and maintaining AI systems. New job roles will emerge, such as AI trainers, data scientists specializing in AI, and AI ethicists. Continuous learning and upskilling will be essential for navigating this evolving landscape.</p><h3>Ethical Considerations</h3><p>The increasing prevalence of AI in the workplace also raises important ethical considerations. Issues such as algorithmic bias, data privacy, and the impact on employment require careful attention. Organizations must develop responsible AI frameworks and ensure that AI systems are fair, transparent, and accountable.</p><p>The future of work with AI presents both opportunities and challenges. By embracing lifelong learning, fostering human-AI collaboration, and addressing ethical concerns proactively, we can harness the power of AI to create a more productive, innovative, and equitable working world.</p>',
    imageUrl: '/images/blog2.png',
    tags: ['AI', 'Future of Work', 'Technology']
  }]
]);

export let careerOpeningsData: Map<string, CareerOpening> = new Map([
  ['1', { // Changed key to ID
    id: '1',
    title: 'Senior AI Engineer',
    location: 'Remote / San Francisco, CA',
    type: 'Full-time',
    department: 'Engineering',
    description: 'Join our innovative team to design and implement cutting-edge AI solutions that redefine industries. You will work on challenging projects, leveraging machine learning, deep learning, and NLP techniques.',
    requirements: ['5+ years of experience in AI/ML development', 'Proficiency in Python, TensorFlow/PyTorch', 'Strong understanding of algorithms and data structures', 'MSc or PhD in Computer Science or related field preferred'],
    postedDate: '2024-07-01'
  }],
  ['2', { // Changed key to ID
    id: '2',
    title: 'Machine Learning Researcher',
    location: 'New York, NY',
    type: 'Full-time',
    department: 'Research & Development',
    description: 'Conduct pioneering research in machine learning to develop novel algorithms and models. Collaborate with a team of world-class scientists and engineers to publish findings and contribute to our product pipeline.',
    requirements: ['PhD in Machine Learning, AI, or a related field', 'Proven track record of publications in top-tier conferences/journals', 'Expertise in statistical modeling and experimental design', 'Strong programming skills in Python'],
    postedDate: '2024-06-20'
  }]
]);

export let teamMembersData: Map<string, TeamMember> = new Map([
  ['mohan-kumar', {
    id: 'mohan-kumar',
    name: { en: 'Mr. Mohan Kumar', ta: 'திரு. மோகன் குமார்' },
    role: { en: 'CEO & Founder, AI Solutions Architect', ta: 'தலைமை நிர்வாக அதிகாரி & நிறுவனர், AI தீர்வுகள் கட்டிடக் கலைஞர்' },
    bio: { 
      en: 'CEO and founder of Moh-AI Tech, driving innovation in AI development. Passionate about building powerful tools that transform business intelligence and empower users globally.',
      ta: 'மோ-ஏஐ டெக்கின் தலைமை நிர்வாக அதிகாரி மற்றும் நிறுவனர், AI மேம்பாட்டில் புதுமைகளை உருவாக்குகிறார். வணிக நுண்ணறிவை மாற்றும் மற்றும் உலகளவில் பயனர்களுக்கு அதிகாரம் அளிக்கும் சக்திவாய்ந்த கருவிகளை உருவாக்குவதில் ஆர்வமாக உள்ளார்.'
    },
    imageUrl: '/images/mohan.jpg',
  }],

export let productsData: Map<string, Product> = new Map([
  ['resume-builder', {
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
    iconName: 'FileSignature',
    imageUrl: '/images/resume.png',
    subscriptionOptions: [
      { type: 'monthly', price: 9.99 },
      { type: 'yearly', price: 99.99 },
    ],
  }],
  ['smart-chatbot', {
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
    iconName: 'MessageCircle',
    imageUrl: '/images/chatbot.png',
    subscriptionOptions: [
      { type: 'monthly', price: 49.99 },
      { type: 'yearly', price: 499.99 },
    ],
  }],
  ['video-generator', {
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
    iconName: 'Video',
    imageUrl: '/images/video.png',
    subscriptionOptions: [
      { type: 'monthly', price: 29.99 },
      { type: 'yearly', price: 299.99 },
    ],
  }],
  ['ocr-engine', {
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
    iconName: 'ScanText',
    imageUrl: '/images/ocr.png',
    subscriptionOptions: [
      { type: 'monthly', price: 19.99 },
      { type: 'yearly', price: 199.99 },
    ],
  }],
  ['text-summarizer', {
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
    iconName: 'AlignLeft',
    imageUrl: '/images/text_sum.png',
    subscriptionOptions: [
      { type: 'monthly', price: 14.99 },
      { type: 'yearly', price: 149.99 },
    ],
  }],
]);


// Simulating a simple user store for auth context
export const usersStore = new Map<string, { id: string, email: string, passwordHash: string, role: 'user' | 'admin', name?: string }>();
usersStore.set('admin@mohai.tech', { id: 'admin001', email: 'admin@mohai.tech', passwordHash: 'hashed_admin_password', role: 'admin', name: 'Admin User'});
usersStore.set('user@mohai.tech', { id: 'user001', email: 'user@mohai.tech', passwordHash: 'hashed_user_password', role: 'user', name: 'Regular User'});

// Simple store for contact messages - in a real app, this would go to a database
export let contactMessages: Array<{ id: string; name: string; email: string; subject: string; message: string; createdAt: Date }> = [];
