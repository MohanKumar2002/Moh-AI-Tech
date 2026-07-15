import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'About - Moh-AI Tech',
  description: 'Why we exist and how we build AI systems that solve real problems.',
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[var(--bg)] pt-32 pb-24">
      <div className="inner" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1 className="h2 mb-12 text-center">About Moh-AI Tech</h1>
        
        <div className="card mb-12">
          <h2 className="text-[var(--text)] font-bold text-2xl mb-6">Why we exist</h2>
          <p className="text-[var(--muted)] text-lg leading-relaxed mb-6">
            AI is changing what businesses can do — but right now, that change is mostly reaching companies who can already afford large engineering teams and enterprise software budgets. Everyone else is left reading about AI, not using it.
          </p>
          <p className="text-[var(--muted)] text-lg leading-relaxed">
            Moh-AI Tech was founded to close that gap. We're a Namakkal-based, MSME-registered AI company built on one principle: every system we ship should genuinely save time or money for the people using it — not just look impressive in a pitch deck.
          </p>
        </div>

        <div className="card mb-12">
          <h2 className="text-[var(--text)] font-bold text-2xl mb-6">How we work</h2>
          <p className="text-[var(--muted)] text-lg leading-relaxed">
            We don't sell platforms. We design and build specific solutions for specific problems — an AI Brain for your internal data, a screening engine for your resumes, a vision pipeline for your production line. Founder-led, sprint-based, fully documented, no black boxes.
          </p>
        </div>

        <div className="card mb-12">
          <h2 className="text-[var(--text)] font-bold text-2xl mb-6">Our Vision</h2>
          <p className="text-[var(--muted)] text-lg leading-relaxed mb-8">
            At Moh-AI Tech, we don't measure success by how many hours someone sits in front of a laptop. We measure success by the value they create. We believe people should build meaningful technology, keep learning, and still have time for their family, health, and personal life. We are building a company where growth belongs to both the business and the people behind it.
          </p>
          <div className="mt-8 text-center border-t border-[var(--border)] pt-8">
            <Link href="/#contact" className="btn btn-primary inline-block">
              Work with us →
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
