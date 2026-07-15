'use client';

import React from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/layout/navbar';
import Footer from '@/components/layout/footer';

export default function PlaybookLearnPage() {
  return (
    <>
      <Navbar />
      
      <main style={{ paddingTop: '100px', backgroundColor: 'var(--bg)', color: 'var(--text)', minHeight: '100vh' }}>
        <section style={{ maxWidth: '800px', margin: '0 auto', padding: '40px 20px 80px 20px', lineHeight: '1.8' }}>
          
          <Link href="/playbook" style={{ color: 'var(--accent)', textDecoration: 'none', display: 'inline-block', marginBottom: '32px', fontFamily: 'Space Grotesk' }}>
            ← Back to Playbook
          </Link>
          
          <div style={{ marginBottom: '60px' }}>
            <span style={{ background: 'var(--border)', padding: '4px 12px', borderRadius: '4px', fontSize: '14px', marginBottom: '16px', display: 'inline-block' }}>Phase 1</span>
            <h1 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '20px', color: 'var(--text)' }}>
              Learn with AI
            </h1>
            <p style={{ fontSize: '1.25rem', color: 'var(--muted)', marginBottom: '40px' }}>
              The journey begins with comprehensive demystification.
            </p>
          </div>

          <div style={{ marginBottom: '60px' }}>
            <h2 style={{ fontSize: '2rem', borderBottom: '2px solid var(--border)', paddingBottom: '10px', marginBottom: '20px' }}>Replacing Fear with Technical Confidence</h2>
            <p style={{ marginBottom: '16px' }}>Before a client can effectively deploy an algorithmic tool, they must comprehend its operational parameters. AI should not be a "black box" that operates mysteriously in the background.</p>
            <p style={{ marginBottom: '16px' }}>At Moh-AI Tech, we embed educational mentor modules directly into our platforms. We strip away the intimidating terminology and replace it with straightforward, pragmatic technical confidence.</p>
            
            <div style={{ background: 'var(--bg2)', padding: '30px', borderRadius: '12px', border: '1px solid var(--border)', margin: '40px 0' }}>
              <h3 style={{ fontSize: '1.25rem', color: 'var(--accent)', marginBottom: '10px' }}>Key Deliverables in Phase 1:</h3>
              <ul style={{ paddingLeft: '20px', color: 'var(--muted)' }}>
                <li style={{ marginBottom: '10px' }}>Interactive onboarding for all internal staff using the new AI tools.</li>
                <li style={{ marginBottom: '10px' }}>Clear documentation on data privacy, security, and algorithmic decision making.</li>
                <li>Strategic alignment workshops for leadership teams.</li>
              </ul>
            </div>
          </div>
          
          <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '60px' }}>
            <Link href="/playbook/earn" style={{ textDecoration: 'none' }}>
              <div style={{ background: 'var(--accent)', color: 'white', padding: '16px 32px', borderRadius: '8px', fontWeight: 'bold', display: 'inline-block', transition: 'opacity 0.2s ease' }} className="btn-hover">
                Continue to Phase 2: Earn with AI →
              </div>
            </Link>
          </div>

        </section>
      </main>

      <Footer />
    </>
  );
}
