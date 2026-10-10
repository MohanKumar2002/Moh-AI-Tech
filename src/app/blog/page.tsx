import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Engineering Blog | Moh-AI Tech',
  description: 'Technical teardowns, AI architectures, and insights on building enterprise AI solutions by the Moh-AI Tech engineering team.',
};

const POSTS = [
  {
    slug: 'building-hr-agent-resume-screening',
    title: 'How We Built an HR Agent that Screens 500 Resumes in 4 Minutes',
    excerpt: 'A technical deep-dive into the RAG architecture and TF-IDF scoring pipeline behind our automated HR Recruiter AI.',
    date: 'Jul 15, 2026',
    category: 'Engineering',
    readTime: '6 min read'
  },
  {
    slug: 'why-msmes-need-custom-ai',
    title: 'Why MSMEs Should Stop Buying SaaS and Start Owning AI',
    excerpt: 'The hidden costs of per-seat SaaS licensing, and how custom data pipelines give mid-market companies an unfair advantage.',
    date: 'Jul 02, 2026',
    category: 'Strategy',
    readTime: '4 min read'
  }
];

export default function BlogPage() {
  return (
    <>
      <section className="hero" style={{ padding: '120px 0 60px', background: 'var(--bg)' }}>
        <div className="inner text-center">
          <span className="mono-badge" style={{ marginBottom: '24px', display: 'inline-block' }}>THE PLAYBOOK</span>
          <h1 className="h1" style={{ marginBottom: '24px' }}>Engineering <span style={{ color: 'var(--accent)' }}>Blog</span></h1>
          <p className="p" style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--text-muted)' }}>
            Technical teardowns, system architectures, and pragmatic strategies for deploying AI in the real world.
          </p>
        </div>
      </section>

      <section style={{ padding: '60px 0 120px', background: 'var(--bg)' }}>
        <div className="inner">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '32px' }}>
            {POSTS.map((post) => (
              <Link href={`/blog/${post.slug}`} key={post.slug} style={{ textDecoration: 'none' }}>
                <div 
                  className="sol-card" 
                  style={{ 
                    height: '100%', 
                    display: 'flex', 
                    flexDirection: 'column',
                    transition: 'transform 0.2s ease, border-color 0.2s ease',
                    cursor: 'pointer'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', fontSize: '12px', color: 'var(--text-muted)', fontFamily: 'Space Grotesk, sans-serif' }}>
                    <span style={{ background: 'var(--border)', padding: '4px 8px', borderRadius: '4px', color: 'var(--text)' }}>
                      {post.category}
                    </span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="h3" style={{ fontSize: '20px', marginBottom: '16px' }}>{post.title}</h3>
                  <p className="p" style={{ fontSize: '15px', color: 'var(--text-muted)', marginBottom: '24px', flexGrow: 1 }}>
                    {post.excerpt}
                  </p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '14px', color: 'var(--text-muted)' }}>
                    <span>{post.date}</span>
                    <span style={{ color: 'var(--accent)', fontWeight: 'bold' }}>Read Article →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
