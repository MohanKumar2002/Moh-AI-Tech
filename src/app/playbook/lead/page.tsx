'use client';

import React from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/layout/navbar';
import Footer from '@/components/layout/footer';

export default function PlaybookLeadPage() {
  return (
    <>
      <Navbar />
      
      <main style={{ paddingTop: '100px', backgroundColor: 'var(--bg)', color: 'var(--text)', minHeight: '100vh' }}>
        <section style={{ maxWidth: '800px', margin: '0 auto', padding: '40px 20px 80px 20px', lineHeight: '1.8' }}>
          
          <Link href="/playbook" style={{ color: 'var(--accent)', textDecoration: 'none', display: 'inline-block', marginBottom: '32px', fontFamily: 'Space Grotesk' }}>
            ← Back to Playbook
          </Link>
          
          <div style={{ marginBottom: '60px' }}>
            <span style={{ background: 'var(--border)', padding: '4px 12px', borderRadius: '4px', fontSize: '14px', marginBottom: '16px', display: 'inline-block' }}>Phase 3</span>
            <h1 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '20px', color: 'var(--text)' }}>
              Lead with AI
            </h1>
            <p style={{ fontSize: '1.25rem', color: 'var(--muted)', marginBottom: '40px' }}>
              The final evolutionary state: transitioning from an adaptive consumer to a clear industry leader.
            </p>
          </div>

          <div style={{ marginBottom: '60px' }}>
            <h2 style={{ fontSize: '2rem', borderBottom: '2px solid var(--border)', paddingBottom: '10px', marginBottom: '20px' }}>Setting New Industry Benchmarks</h2>
            <p style={{ marginBottom: '16px' }}>Armed with continuous automated insights, Moh-AI Tech clients set new industry benchmarks, out-pacing competitors who rely on legacy paradigms.</p>
            <p style={{ marginBottom: '16px' }}>Once the foundational automation is in place, the focus shifts to predictive intelligence. You aren't just reacting to data anymore; your AI agents are forecasting trends, predicting inventory shortages, and proactively identifying new sales opportunities before your competitors even realize the market has shifted.</p>
            
            <div style={{ background: 'var(--bg2)', padding: '30px', borderRadius: '12px', border: '1px solid var(--border)', margin: '40px 0' }}>
              <h3 style={{ fontSize: '1.25rem', color: 'var(--accent)', marginBottom: '10px' }}>Key Deliverables in Phase 3:</h3>
              <ul style={{ paddingLeft: '20px', color: 'var(--muted)' }}>
                <li style={{ marginBottom: '10px' }}>Deployment of autonomous agents that execute multi-step workflows.</li>
                <li style={{ marginBottom: '10px' }}>Predictive modeling dashboards for executive leadership.</li>
                <li>Long-term technological moat development.</li>
              </ul>
            </div>
          </div>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '60px' }}>
            <Link href="/playbook/earn" style={{ textDecoration: 'none' }}>
              <div style={{ padding: '16px 24px', color: 'var(--muted)', display: 'inline-block', transition: 'color 0.2s ease' }}>
                ← Previous: Earn
              </div>
            </Link>
            <Link href="/#contact" style={{ textDecoration: 'none' }}>
              <div style={{ background: 'var(--accent)', color: 'white', padding: '16px 32px', borderRadius: '8px', fontWeight: 'bold', display: 'inline-block', transition: 'opacity 0.2s ease' }} className="btn-hover">
                Book a Discovery Call →
              </div>
            </Link>
          </div>

        </section>
      </main>

      <Footer />
    </>
  );
}
