import React from 'react';
import Image from 'next/image';
import Footer from '@/components/layout/footer';
import { Bot, FileText } from 'lucide-react';
import { WaitlistForm } from '@/components/waitlist-form';

export const metadata = {
  title: 'Coming Soon | Moh-AI Tech Upcoming Products',
  description: 'Join the waitlist for our next generation AI products: Docu-Mind and HR Recruiter AI.',
};

export default function ComingSoonPage() {
  return (
    <main style={{ minHeight: '100vh', background: 'var(--bg)', overflow: 'hidden' }}>
      
      {/* Premium Hero Section */}
      <section style={{ position: 'relative', paddingTop: '160px', paddingBottom: '80px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
        <div className="hero-glow-1" style={{ position: 'absolute', top: '10%', left: '20%', filter: 'blur(100px)', opacity: 0.5, pointerEvents: 'none' }}></div>
        <div className="hero-glow-2" style={{ position: 'absolute', top: '40%', right: '20%', filter: 'blur(100px)', opacity: 0.5, pointerEvents: 'none' }}></div>
        
        <div className="hero-badge fu vis d1" style={{ marginBottom: '24px' }}>
          <div className="badge-pulse"></div>
          <span>Unveiling Q3 2026</span>
        </div>
        
        <h1 className="hero-h1 fu vis d2" style={{ maxWidth: '900px', margin: '0 auto 24px' }}>
          The Future of Autonomous AI <br />
          <em className="grad-text">Is Almost Here.</em>
        </h1>
        
        <p className="hero-sub fu vis d3" style={{ margin: '0 auto 48px', fontSize: '18px', maxWidth: '600px' }}>
          We are building the next generation of autonomous enterprise tools. 
          Get exclusive early access to Docu-Mind and HR Recruiter AI before the public launch.
        </p>

        {/* Waitlist Form */}
        <WaitlistForm />
      </section>

      {/* Products Showcase */}
      <section style={{ padding: '80px 5%', background: 'var(--bg2)', borderTop: '1px solid var(--border)', position: 'relative', zIndex: 5 }}>
        <div className="inner" style={{ padding: '0', maxWidth: '1200px' }}>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px' }}>
            
            {/* Product 1: Docu-Mind */}
            <div className="sol-card" style={{ padding: '0', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
              <div style={{ width: '100%', height: '260px', position: 'relative', borderBottom: '1px solid var(--border)', background: 'var(--bg)' }}>
                <Image src="/images/products/documind.png" alt="DocuMind AI Interface" fill style={{ objectFit: 'cover', objectPosition: 'top' }} />
              </div>
              <div style={{ padding: '32px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <div style={{ position: 'absolute', top: '230px', right: '32px', width: '60px', height: '60px', background: 'var(--card)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'var(--shadow)', border: '1px solid var(--border)', color: '#00B4D8' }}>
                  <FileText size={28} />
                </div>
                
                <h3 className="sol-name" style={{ fontSize: '28px', marginBottom: '8px' }}>Docu-Mind</h3>
                <div className="sol-tagline" style={{ color: 'var(--accent2)', fontWeight: '600', marginBottom: '24px' }}>Intelligent Document Understanding</div>
                
                <p className="sol-desc" style={{ marginBottom: '32px' }}>
                  Stop manually entering data from invoices, forms, and contracts. Docu-Mind reads any complex document, extracts structured JSON data instantly, and pushes it directly to your CRM or ERP.
                </p>
                
                <ul className="sol-feats" style={{ margin: 'auto 0 0 0' }}>
                  <li>Handwriting & Bad Scan OCR</li>
                  <li>Table Extraction & Line Items</li>
                  <li>Zero-shot Custom Form Training</li>
                  <li>Enterprise API Integration</li>
                </ul>
              </div>
            </div>

            {/* Product 2: HR Recruiter AI */}
            <div className="sol-card" style={{ padding: '0', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
              <div style={{ width: '100%', height: '260px', position: 'relative', borderBottom: '1px solid var(--border)', background: 'var(--bg)', overflow: 'hidden' }}>
                <video 
                  src="/videos/hr-demo.webm" 
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }}
                />
              </div>
              <div style={{ padding: '32px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <div style={{ position: 'absolute', top: '230px', right: '32px', width: '60px', height: '60px', background: 'var(--card)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'var(--shadow)', border: '1px solid var(--border)', color: '#8B5CF6' }}>
                  <Bot size={28} />
                </div>
                
                <h3 className="sol-name" style={{ fontSize: '28px', marginBottom: '8px' }}>HR Recruiter AI</h3>
                <div className="sol-tagline" style={{ color: '#8B5CF6', fontWeight: '600', marginBottom: '24px' }}>Autonomous Talent Acquisition</div>
                
                <p className="sol-desc" style={{ marginBottom: '32px' }}>
                  Scale your hiring without scaling your HR department. Our autonomous agent screens thousands of resumes, conducts initial conversational interviews, and ranks the top talent for your final review.
                </p>
                
                <ul className="sol-feats" style={{ margin: 'auto 0 0 0' }}>
                  <li>Semantic Resume Parsing</li>
                  <li>Voice/Chat Pre-Screening Agent</li>
                  <li>Bias-Free Candidate Ranking</li>
                  <li>Automated Interview Scheduling</li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}
