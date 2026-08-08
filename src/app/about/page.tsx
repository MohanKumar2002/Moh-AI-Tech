import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'About Moh-AI Tech | AI Software Studio in Namakkal, India',
  description: 'Moh-AI Tech (Mastering Outstanding Horizons) is an MSME-registered AI company in Namakkal, India. We build enterprise AI agents, computer vision systems, and custom automation for global businesses.',
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'About Moh-AI Tech | AI Software Studio in Namakkal, India',
    description: 'Enterprise AI agents, computer vision, and custom software studio founded by Mohan Kumar Subramanian in Namakkal, Tamil Nadu, India.',
    url: 'https://moh-ai-tech.com/about',
    siteName: 'Moh-AI Tech',
    type: 'website' as const,
    locale: 'en_US',
    images: [
      {
        url: 'https://moh-ai-tech.com/images/team/mohan.webp',
        width: 1200,
        height: 630,
        alt: 'Mohan Kumar Subramanian — Founder of Moh-AI Tech',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image' as const,
    title: 'About Moh-AI Tech | AI Software Studio in Namakkal, India',
    description: 'Enterprise AI agents, computer vision, and custom software — built by Moh-AI Tech, Namakkal, Tamil Nadu, India.',
    images: ['https://moh-ai-tech.com/images/team/mohan.webp'],
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[var(--bg)] pt-32 pb-24">
      <div className="inner" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1 className="h2 mb-12 text-center">About Moh-AI Tech</h1>

        {/* Brand Disambiguation — critical for Google entity understanding */}
        <div style={{ background: 'var(--card-bg)', border: '1px solid var(--border)', borderRadius: '12px', padding: '24px 32px', marginBottom: '48px', borderLeft: '4px solid var(--accent)' }}>
          <p style={{ fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--accent)', marginBottom: '8px', fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600 }}>About the name</p>
          <p style={{ fontSize: '18px', fontWeight: 700, color: 'var(--text)', marginBottom: '8px' }}>
            MOH stands for <strong>Mastering Outstanding Horizons</strong> with AI Technology.
          </p>
          <p style={{ color: 'var(--text-muted)', fontSize: '15px', margin: 0 }}>
            Moh-AI Tech is a private AI software engineering company in Namakkal, Tamil Nadu, India — not affiliated with any Ministry of Health (MOH) or government body.
          </p>
        </div>

        <div className="card mb-12">
          <h2 className="text-[var(--text)] font-bold text-2xl mb-6">Why we exist</h2>
          <p className="text-[var(--muted)] text-lg leading-relaxed mb-6">
            AI is changing what businesses can do — but right now, that change is mostly reaching companies who can already afford large engineering teams and enterprise software budgets. Everyone else is left reading about AI, not using it.
          </p>
          <p className="text-[var(--muted)] text-lg leading-relaxed">
            Moh-AI Tech (Mastering Outstanding Horizons) was founded to close that gap. We&apos;re a Namakkal-based, MSME-registered AI company built on one principle: every system we ship should genuinely save time or money for the people using it — not just look impressive in a pitch deck.
          </p>
        </div>

        <div className="card mb-12">
          <h2 className="text-[var(--text)] font-bold text-2xl mb-6">How we work</h2>
          <p className="text-[var(--muted)] text-lg leading-relaxed">
            We don&apos;t sell platforms. We design and build specific solutions for specific problems — an AI Brain for your internal data, a screening engine for your resumes, a vision pipeline for your production line. Founder-led, sprint-based, fully documented, no black boxes.
          </p>
        </div>

        <div className="card mb-12">
          <h2 className="text-[var(--text)] font-bold text-2xl mb-6">Our Vision</h2>
          <p className="text-[var(--muted)] text-lg leading-relaxed mb-8">
            At Moh-AI Tech, we don&apos;t measure success by how many hours someone sits in front of a laptop. We measure success by the value they create. We believe people should build meaningful technology, keep learning, and still have time for their family, health, and personal life. We are building a company where growth belongs to both the business and the people behind it.
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
