import type { BlogPostMapping, CareerOpening } from '@/types';

// Use Maps for easier CRUD by ID
export let blogPostsData: Map<string, BlogPostMapping> = new Map([
  ['ai-in-healthcare', {
    id: '1',
    slug: 'ai-in-healthcare',
    title: 'The Transformative Role of AI in Healthcare',
    date: '2024-07-15',
    author: 'Dr. AI Expert',
    excerpt: 'Artificial intelligence is revolutionizing healthcare, from diagnostics to personalized treatments...',
    content: '<p>Artificial intelligence (AI) is rapidly transforming the healthcare landscape, offering innovative solutions to complex medical challenges. Its applications span a wide range of areas, including diagnostics, drug discovery, personalized medicine, and patient care.</p><h3>Enhanced Diagnostics</h3><p>AI algorithms can analyze medical images like X-rays, CT scans, and MRIs with remarkable speed and accuracy, often detecting subtle patterns that human eyes might miss. This capability aids in the early detection of diseases such as cancer and diabetic retinopathy, leading to better patient outcomes.</p><h3>Drug Discovery and Development</h3><p>The process of discovering and developing new drugs is notoriously long and expensive. AI can significantly accelerate this by analyzing vast datasets of biological and chemical information to identify potential drug candidates and predict their efficacy and side effects. This reduces the time and cost associated with bringing new therapies to market.</p><h3>Personalized Medicine</h3><p>AI enables a more personalized approach to treatment by analyzing individual patient data, including genetic information, lifestyle factors, and medical history. This allows healthcare providers to tailor treatment plans to the specific needs of each patient, improving effectiveness and minimizing adverse reactions.</p><p>While the potential of AI in healthcare is immense, challenges such as data privacy, regulatory hurdles, and the need for robust validation remain. However, ongoing research and development continue to push the boundaries, promising a future where AI plays an integral role in delivering more efficient, effective, and equitable healthcare for all.</p>',
    imageUrl: 'https://placehold.co/800x400.png',
    dataAiHint: 'healthcare technology',
    tags: ['AI', 'Healthcare', 'Innovation']
  }],
  ['future-of-work-with-ai', {
    id: '2',
    slug: 'future-of-work-with-ai',
    title: 'Navigating the Future of Work with AI',
    date: '2024-06-28',
    author: 'Tech Futurist',
    excerpt: 'AI is not just changing tools, it\'s reshaping industries and the very nature of work...',
    content: '<p>The integration of Artificial Intelligence (AI) into the workplace is heralding a new era, often referred to as the Future of Work. This transformation encompasses not only the tools we use but also the way tasks are performed, roles are defined, and industries operate. Understanding and adapting to these changes is crucial for individuals and organizations alike.</p><h3>Automation and Augmentation</h3><p>AI excels at automating repetitive and data-intensive tasks, freeing up human workers to focus on more complex, creative, and strategic activities. This doesn\'t necessarily mean widespread job displacement but rather a shift in job roles. AI can also augment human capabilities, providing insights and assistance that enhance productivity and decision-making. For example, AI-powered analytics can help marketers understand customer behavior more deeply, while AI assistants can manage schedules and communications more efficiently.</p><h3>New Skills and Roles</h3><p>As AI takes over certain tasks, the demand for new skills will rise. These include data literacy, AI ethics, human-AI collaboration, and skills related to developing and maintaining AI systems. New job roles will emerge, such as AI trainers, data scientists specializing in AI, and AI ethicists. Continuous learning and upskilling will be essential for navigating this evolving landscape.</p><h3>Ethical Considerations</h3><p>The increasing prevalence of AI in the workplace also raises important ethical considerations. Issues such as algorithmic bias, data privacy, and the impact on employment require careful attention. Organizations must develop responsible AI frameworks and ensure that AI systems are fair, transparent, and accountable.</p><p>The future of work with AI presents both opportunities and challenges. By embracing lifelong learning, fostering human-AI collaboration, and addressing ethical concerns proactively, we can harness the power of AI to create a more productive, innovative, and equitable working world.</p>',
    imageUrl: 'https://placehold.co/800x400.png',
    dataAiHint: 'futuristic office',
    tags: ['AI', 'Future of Work', 'Technology']
  }]
]);

export let careerOpeningsData: Map<string, CareerOpening> = new Map([
  ['ai-engineer', {
    id: '1',
    title: 'Senior AI Engineer',
    location: 'Remote / San Francisco, CA',
    type: 'Full-time',
    department: 'Engineering',
    description: 'Join our innovative team to design and implement cutting-edge AI solutions that redefine industries. You will work on challenging projects, leveraging machine learning, deep learning, and NLP techniques.',
    requirements: ['5+ years of experience in AI/ML development', 'Proficiency in Python, TensorFlow/PyTorch', 'Strong understanding of algorithms and data structures', 'MSc or PhD in Computer Science or related field preferred'],
    postedDate: '2024-07-01'
  }],
  ['ml-researcher', {
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

// Simulating a simple user store for auth context
export const usersStore = new Map<string, { id: string, email: string, passwordHash: string, role: 'user' | 'admin', name?: string }>();
usersStore.set('admin@mohai.tech', { id: 'admin001', email: 'admin@mohai.tech', passwordHash: 'hashed_admin_password', role: 'admin', name: 'Admin User'});
usersStore.set('user@mohai.tech', { id: 'user001', email: 'user@mohai.tech', passwordHash: 'hashed_user_password', role: 'user', name: 'Regular User'});

// Simple store for contact messages - in a real app, this would go to a database
export let contactMessages: Array<{ id: string; name: string; email: string; subject: string; message: string; createdAt: Date }> = [];
