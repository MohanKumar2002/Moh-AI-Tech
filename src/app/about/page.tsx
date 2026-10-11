import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Footer from '@/components/layout/footer';

export const metadata = {
  title: 'About Us | Moh-AI Tech',
  description: 'Learn about Moh-AI Tech, our mission to transform global manufacturing through artificial intelligence, and our founder-led engineering approach.',
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[var(--bg)] pt-28 pb-16">
      <div className="inner" style={{ maxWidth: '900px', margin: '0 auto', padding: '0 5%' }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <span className="tag">Our Story</span>
          <h1 className="h2" style={{ fontFamily: 'var(--syne)', fontSize: '36px', fontWeight: '800', marginTop: '8px' }}>About Moh-AI Tech</h1>
        </div>
        
        {/* Story Card */}
        <div className="card mb-12" style={{ padding: '36px', background: 'var(--card)', border: '1px solid var(--border)', borderRadius: '16px', boxShadow: 'var(--shadow)', marginBottom: '32px' }}>
          <h2 style={{ fontFamily: 'var(--syne)', fontWeight: '700', fontSize: '22px', color: 'var(--text)', marginBottom: '16px' }}>Industrial Transformation from Tamil Nadu</h2>
          <p className="text-[var(--muted)] text-md leading-relaxed mb-6" style={{ fontSize: '15px', color: 'var(--muted)', lineHeight: '1.6' }}>
            Moh-AI Tech is a Tamil Nadu-based AI engineering company focused on building intelligent systems for industrial transformation. Founded with the vision of creating globally competitive AI technology from India, we solve real business problems through artificial intelligence, machine learning, computer vision, and automation.
          </p>
          <p className="text-[var(--muted)] text-md leading-relaxed" style={{ fontSize: '15px', color: 'var(--muted)', lineHeight: '1.6' }}>
            Traditional manufacturing sectors have often been left out of the modern AI revolution due to cost barrier and integration complexity. We exist to close that gap. By engineering secure, practical, and highly optimized computer vision and machine learning architectures, we enable CNC factories, automotive suppliers, and electronics assemblers to digitize their operations without operational disruptions.
          </p>
        </div>

        {/* Founder Section */}
        <div className="card mb-12" style={{ padding: '36px', background: 'var(--card)', border: '1px solid var(--border)', borderRadius: '16px', boxShadow: 'var(--shadow)', marginBottom: '32px' }}>
          <h2 style={{ fontFamily: 'var(--syne)', fontWeight: '700', fontSize: '22px', color: 'var(--text)', marginBottom: '24px' }}>Founder-Led Technical Execution</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '150px 1fr', gap: '24px', alignItems: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Image 
                src="/images/mohan.jpg" 
                alt="Mohan Kumar S" 
                width={120} 
                height={120} 
                style={{ borderRadius: '50%', border: '3px solid var(--border2)', objectFit: 'cover' }} 
              />
              <div style={{ marginTop: '10px', fontWeight: '700', fontSize: '15px', color: 'var(--text)', textAlign: 'center' }}>Mohan Kumar S</div>
              <div style={{ fontSize: '12px', color: 'var(--accent-l)', fontWeight: '600', textAlign: 'center' }}>Founder & CEO</div>
            </div>
            <div>
              <p style={{ fontSize: '15px', color: 'var(--muted)', lineHeight: '1.6', fontStyle: 'italic', marginBottom: '12px' }}>
                "Building practical AI systems today while working toward advanced AI technology for tomorrow."
              </p>
              <p style={{ fontSize: '14px', color: 'var(--muted)', lineHeight: '1.6', marginBottom: '12px' }}>
                Mohan Kumar S founded Moh-AI Tech to ensure that manufacturing companies have a direct, non-diluted path to technical execution. By eliminating corporate bureaucracy, clients discuss projects directly with the lead engineer.
              </p>
              <a 
                href="https://www.linkedin.com/in/mohan-kumar-subramanian/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-ghost" 
                style={{ border: '1px solid var(--border2)', color: 'var(--accent-l)', padding: '6px 16px', borderRadius: '6px', fontSize: '13px', fontWeight: '600', textDecoration: 'none', display: 'inline-block' }}
              >
                LinkedIn Profile
              </a>
            </div>
          </div>
        </div>

        {/* Future Vision Section */}
        <div className="card mb-12" style={{ padding: '36px', background: 'var(--card)', border: '1px solid var(--border)', borderRadius: '16px', boxShadow: 'var(--shadow)', marginBottom: '48px' }}>
          <h2 style={{ fontFamily: 'var(--syne)', fontWeight: '700', fontSize: '22px', color: 'var(--text)', marginBottom: '16px' }}>Long-Term Vision</h2>
          <p className="text-[var(--muted)] text-md leading-relaxed" style={{ fontSize: '15px', color: 'var(--muted)', lineHeight: '1.6' }}>
            Our journey begins with industrial intelligence. Over time, Moh-AI Tech aims to contribute to advanced AI research, edge intelligence, robotics, and intelligent computing from India. We believe in building technology that creates real value, pushes the boundaries of computing, and contributes positively to India's deep-tech ecosystem.
          </p>
        </div>

        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <Link href="/contact" className="btn-primary" style={{ background: 'var(--grad)', color: '#fff', padding: '12px 24px', borderRadius: '8px', textDecoration: 'none', fontWeight: '600', fontSize: '15px' }}>
            Work with us →
          </Link>
        </div>
      </div>
      <Footer />
    </main>
  );
}
