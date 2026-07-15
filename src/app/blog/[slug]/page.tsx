import { notFound } from 'next/navigation';
import Link from 'next/link';

// Mock database for now. In a real app, this would be fetched from MDX files or a CMS.
const POSTS: Record<string, any> = {
  'building-hr-agent-resume-screening': {
    title: 'How We Built an HR Agent that Screens 500 Resumes in 4 Minutes',
    date: 'Jul 15, 2026',
    category: 'Engineering',
    readTime: '6 min read',
    content: `
      <h2>The Problem with Modern Hiring</h2>
      <p>Most HR departments spend up to 30 hours a week just reading through unqualified resumes. Traditional ATS (Applicant Tracking Systems) rely on simple keyword matching, meaning highly qualified candidates are often rejected just because they didn't use the exact synonym the ATS was looking for.</p>
      <p>We wanted to build an AI agent that didn't just look for keywords, but actually understood the semantic meaning of a candidate's experience.</p>
      
      <h2>Our Architecture: RAG + TF-IDF</h2>
      <p>To achieve 98% accuracy and eliminate hallucination, we couldn't just throw resumes into a standard LLM. We needed a deterministic scoring pipeline.</p>
      <ul>
        <li><strong>OCR Pipeline:</strong> First, we built a robust OCR pipeline using AWS Textract to normalize messy PDFs into structured JSON.</li>
        <li><strong>TF-IDF Baseline:</strong> We use Term Frequency-Inverse Document Frequency (TF-IDF) as a fast, baseline filter to remove resumes that completely lack domain relevance.</li>
        <li><strong>Semantic Scoring:</strong> For the remaining resumes, we use OpenAI's embeddings to calculate semantic similarity against the Job Description.</li>
        <li><strong>LLM Summarization:</strong> Finally, an LLM generates a 3-bullet-point summary explaining exactly *why* a candidate is a good fit, saving the recruiter from reading the full document.</li>
      </ul>

      <h2>The Results</h2>
      <p>In our initial benchmarks, the pipeline processed a batch of 500 resumes in exactly 4 minutes. It successfully identified the top 10 candidates with a 98% alignment to human recruiter selections.</p>
      <p>This isn't just a time-saver; it's a competitive advantage for any company trying to hire top talent before their competitors do.</p>
    `
  },
  'why-msmes-need-custom-ai': {
    title: 'Why MSMEs Should Stop Buying SaaS and Start Owning AI',
    date: 'Jul 02, 2026',
    category: 'Strategy',
    readTime: '4 min read',
    content: `
      <h2>The SaaS Trap</h2>
      <p>For the last decade, the playbook for mid-market companies was to buy a SaaS product for every problem. Need CRM? Salesforce. Need HR? Workday. Need project management? Asana.</p>
      <p>But with the rise of AI, SaaS companies are charging massive premiums for "AI features" that are essentially just wrappers around OpenAI's API.</p>
      
      <h2>The Custom Data Advantage</h2>
      <p>Your company's most valuable asset is its historical data. If you upload all that data into a SaaS vendor's platform, you are training their AI, not yours.</p>
      <p>By building custom AI agents tailored to your specific workflows, you retain ownership of your data, avoid expensive per-seat licensing fees, and create a proprietary system that your competitors cannot easily copy.</p>
    `
  }
};

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = POSTS[params.slug];

  if (!post) {
    notFound();
  }

  return (
    <>
      <section style={{ padding: '120px 0 60px', background: 'var(--bg)' }}>
        <div className="inner" style={{ maxWidth: '800px' }}>
          <Link href="/blog" style={{ color: 'var(--accent)', textDecoration: 'none', display: 'inline-block', marginBottom: '32px', fontFamily: 'Space Grotesk' }}>
            ← Back to Blog
          </Link>
          
          <div style={{ display: 'flex', gap: '16px', alignItems: 'center', marginBottom: '24px', fontSize: '14px', color: 'var(--text-muted)', fontFamily: 'Space Grotesk' }}>
            <span style={{ background: 'var(--border)', padding: '4px 12px', borderRadius: '4px', color: 'var(--text)' }}>
              {post.category}
            </span>
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>
          
          <h1 className="h1" style={{ marginBottom: '40px', fontSize: '40px', lineHeight: '1.2' }}>{post.title}</h1>
          
          {/* Article Content */}
          <div 
            className="article-content"
            style={{ fontSize: '18px', lineHeight: '1.8', color: 'var(--text)' }}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          
          {/* CTA Section at bottom of article */}
          <div style={{ marginTop: '80px', padding: '40px', background: 'var(--card-bg)', border: '1px solid var(--border)', borderRadius: '12px', textAlign: 'center' }}>
            <h3 className="h3" style={{ marginBottom: '16px' }}>Want to build something similar?</h3>
            <p className="p" style={{ marginBottom: '24px' }}>Let's discuss how we can engineer a custom AI solution for your business.</p>
            <Link href="/#contact" className="btn btn-primary" style={{ display: 'inline-block' }}>Book a Discovery Call</Link>
          </div>
        </div>
      </section>

      {/* Basic styles for the injected HTML content */}
      <style dangerouslySetInnerHTML={{__html: `
        .article-content h2 { font-size: 28px; font-weight: 700; margin: 48px 0 24px; font-family: 'Syne', sans-serif; }
        .article-content h3 { font-size: 22px; font-weight: 600; margin: 32px 0 16px; }
        .article-content p { margin-bottom: 24px; color: var(--text-muted); }
        .article-content ul { margin-bottom: 24px; padding-left: 24px; }
        .article-content li { margin-bottom: 12px; color: var(--text-muted); }
        .article-content strong { color: var(--text); }
      `}} />
    </>
  );
}
