'use client';

import React from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/layout/navbar';
import Footer from '@/components/layout/footer';

export default function PlaybookEarnPage() {
  return (
    <>
      <Navbar />
      
      <main style={{ paddingTop: '100px', backgroundColor: 'var(--bg)', color: 'var(--text)', minHeight: '100vh' }}>
        <section style={{ maxWidth: '800px', margin: '0 auto', padding: '40px 20px 80px 20px', lineHeight: '1.8' }}>
          
          <Link href="/playbook" style={{ color: 'var(--accent)', textDecoration: 'none', display: 'inline-block', marginBottom: '32px', fontFamily: 'Space Grotesk' }}>
            ← Back to Playbook
          </Link>
          
          <div style={{ marginBottom: '60px' }}>
            <span style={{ background: 'var(--border)', padding: '4px 12px', borderRadius: '4px', fontSize: '14px', marginBottom: '16px', display: 'inline-block' }}>Phase 2</span>
            <h1 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '20px', color: 'var(--text)' }}>
              Earn with AI
            </h1>
            <p style={{ fontSize: '1.25rem', color: 'var(--muted)', marginBottom: '40px' }}>
              With technical comprehension comes direct commercial application.
            </p>
          </div>

          <div style={{ marginBottom: '60px' }}>
            <h2 style={{ fontSize: '2rem', borderBottom: '2px solid var(--border)', paddingBottom: '10px', marginBottom: '20px' }}>Turning Efficiency into Margins</h2>
            <p style={{ marginBottom: '16px' }}>In this phase, the client leverages our robust, stress-free software to streamline operations, reduce operational friction, and introduce automated high-margin service offerings for immediate financial return.</p>
            <p style={{ marginBottom: '16px' }}>AI should not just be a cost center; it must be a direct driver of revenue or a drastic reducer of overhead. By automating repetitive cognitive tasks, your human workforce is freed up to do what they do best: build relationships and close deals.</p>
            
            <div style={{ background: 'var(--bg2)', padding: '30px', borderRadius: '12px', border: '1px solid var(--border)', margin: '40px 0' }}>
              <h3 style={{ fontSize: '1.25rem', color: 'var(--accent)', marginBottom: '10px' }}>Key Deliverables in Phase 2:</h3>
              <ul style={{ paddingLeft: '20px', color: 'var(--muted)' }}>
                <li style={{ marginBottom: '10px' }}>Deployment of custom data pipelines tailored to your operations.</li>
                <li style={{ marginBottom: '10px' }}>Integration of AI agents into your existing SaaS tools (CRMs, ERPs).</li>
                <li>Measurable ROI tracking and operational bottleneck elimination.</li>
              </ul>
            </div>
          </div>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '60px' }}>
            <Link href="/playbook/learn" style={{ textDecoration: 'none' }}>
              <div style={{ padding: '16px 24px', color: 'var(--muted)', display: 'inline-block', transition: 'color 0.2s ease' }}>
                ← Previous: Learn
              </div>
            </Link>
            <Link href="/playbook/lead" style={{ textDecoration: 'none' }}>
              <div style={{ background: 'var(--accent)', color: 'white', padding: '16px 32px', borderRadius: '8px', fontWeight: 'bold', display: 'inline-block', transition: 'opacity 0.2s ease' }} className="btn-hover">
                Continue to Phase 3: Lead with AI →
              </div>
            </Link>
          </div>

        </section>
      </main>

      <Footer />
    </>
  );
}
