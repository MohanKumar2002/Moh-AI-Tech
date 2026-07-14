'use client';

import React, { useEffect } from 'react';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';

export default function PlaybookPage() {
  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('vis');
      });
    }, { threshold: 0.08 });
    
    document.querySelectorAll('.fu').forEach(el => obs.observe(el));
  }, []);

  return (
    <>
      <Navbar />
      
      <main style={{ paddingTop: '100px', backgroundColor: 'var(--bg)', color: 'var(--text)' }}>
        {/* HERO SECTION */}
        <section style={{ textAlign: 'center', padding: '80px 20px 60px 20px', maxWidth: '800px', margin: '0 auto' }}>
          <h1 className="fu" style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '20px', background: 'linear-gradient(90deg, #6366f1, #a855f7)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            The Stress-Free AI Revolution
          </h1>
          <p className="fu" style={{ fontSize: '1.25rem', color: 'var(--muted)', marginBottom: '40px' }}>
            How to Learn, Earn, and Lead with Peace of Mind. The official cultural framework and operational core of Moh-AI Tech.
          </p>
          <div className="fu hero-tagline" style={{ padding: '1rem 2rem', background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.05), rgba(168, 85, 247, 0.05))', border: '1px solid rgba(99, 102, 241, 0.2)', borderRadius: '999px', display: 'inline-block' }}>
            <span style={{ fontWeight: '600', color: 'var(--text)' }}>"Peace in mind, Progress through AI, Prosperity in life."</span>
          </div>
        </section>

        {/* CONTENT */}
        <section style={{ maxWidth: '800px', margin: '0 auto', padding: '0 20px 80px 20px', lineHeight: '1.8' }}>
          
          <div className="fu" style={{ marginBottom: '60px' }}>
            <h2 style={{ fontSize: '2rem', borderBottom: '2px solid var(--border)', paddingBottom: '10px', marginBottom: '20px' }}>The Crisis of the Modern Tech Paradigm</h2>
            <p style={{ marginBottom: '16px' }}>The contemporary technology landscape is trapped in an unsustainable cycle. In the race to dominate the artificial intelligence sector, enterprises have institutionalized an environment characterized by extreme professional burnout, high employee turnover, and hyper-accelerated developmental timelines.</p>
            <p style={{ marginBottom: '16px' }}>Paradoxically, this frantic operational posture rarely yields optimal technological products. When systems are built under perpetual anxiety, the underlying codebases suffer from systemic instability, technical debt increases, and innovation becomes purely derivative.</p>
            <p style={{ marginBottom: '16px' }}>Moh-AI Tech was established to directly challenge this counterproductive framework. We operate on a fundamental truth: human cognitive brilliance does not flourish under conditions of duress. True innovation requires psychological security, deliberate learning parameters, and a focus on long-term sustainability rather than short-term optimization.</p>
          </div>

          <div className="fu" style={{ marginBottom: '60px' }}>
            <h2 style={{ fontSize: '2rem', borderBottom: '2px solid var(--border)', paddingBottom: '10px', marginBottom: '20px' }}>The Core Mantras</h2>
            <div style={{ background: 'var(--bg2)', padding: '30px', borderRadius: '12px', border: '1px solid var(--border)', marginBottom: '30px' }}>
              <h3 style={{ fontSize: '1.25rem', color: 'var(--accent)', marginBottom: '10px' }}>The Master Brand Slogan</h3>
              <p style={{ fontSize: '1.1rem', fontWeight: 'bold' }}>"Peace in mind, Progress through AI, Prosperity in life."</p>
              <p style={{ color: 'var(--muted)', marginTop: '8px' }}>"மனதில் அமைதி; ஏஐ-யில் வளர்ச்சி; வாழ்வில் உயர்ச்சி!"</p>
            </div>
            <div style={{ background: 'var(--bg2)', padding: '30px', borderRadius: '12px', border: '1px solid var(--border)' }}>
              <h3 style={{ fontSize: '1.25rem', color: 'var(--accent)', marginBottom: '10px' }}>The Service Activation Motto</h3>
              <p style={{ fontSize: '1.1rem', fontWeight: 'bold' }}>"Learn with AI, Earn with AI, Lead with AI."</p>
              <p style={{ color: 'var(--muted)', marginTop: '8px' }}>"ஏஐ-யோடு கற்போம், ஏஐ-யோடு ஈட்டுவோம், ஏஐ-யோடு வழிநடத்துவோம்!"</p>
            </div>
          </div>

          <div className="fu" style={{ marginBottom: '60px' }}>
            <h2 style={{ fontSize: '2rem', borderBottom: '2px solid var(--border)', paddingBottom: '10px', marginBottom: '20px' }}>Cultivating Stress-Free Engineering</h2>
            <p style={{ marginBottom: '16px' }}>The first phase of the Moh-AI paradigm begins internally with the developer's mind. In standard software development models, engineers are treated as transactional processors converting tickets into code. When an engineer operates under chronic stress, the prefrontal cortex experiences cognitive narrowing, limiting the ability to perceive elegant architectural solutions.</p>
            <p style={{ marginBottom: '16px' }}>Moh-AI Tech actively structures a counter-environment. We assert that a stress-free workplace is the ultimate competitive advantage in the AI space. By intentionally mitigating artificial urgency and toxic management paradigms, we allow our engineers the psychological runway required to investigate edge cases, refine system documentation, and write highly optimized algorithms.</p>
            <div style={{ background: 'rgba(99, 102, 241, 0.05)', padding: '20px', borderRadius: '8px', borderLeft: '4px solid var(--accent)', margin: '20px 0', textAlign: 'center', fontFamily: 'monospace', fontSize: '1.2rem' }}>
              S = ∫ (ψ − σ) · dt
            </div>
            <p style={{ fontSize: '0.9rem', color: 'var(--muted)' }}>Where ψ represents deep cognitive focus and σ represents internal systemic friction. When stress approaches zero, stability optimizes naturally.</p>
          </div>

          <div className="fu" style={{ marginBottom: '60px' }}>
            <h2 style={{ fontSize: '2rem', borderBottom: '2px solid var(--border)', paddingBottom: '10px', marginBottom: '20px' }}>The Funnel of Growth — Learn, Earn, Lead</h2>
            <p style={{ marginBottom: '24px' }}>To translate our high-level philosophy into practical steps for the end-user, Moh-AI Tech applies a strictly structured user journey funnel. This progression guarantees that no partner enters our ecosystem as a passive customer; they enter as students and leave as industry pioneers.</p>
            
            <div style={{ paddingLeft: '20px', borderLeft: '2px solid var(--border)' }}>
              <h3 style={{ fontSize: '1.5rem', color: 'var(--accent)', marginBottom: '10px' }}>Phase 1: Learn with AI</h3>
              <p style={{ marginBottom: '24px' }}>The journey begins with comprehensive demystification. Before a client can effectively deploy an algorithmic tool, they must comprehend its operational parameters. We embed educational mentor modules directly into our platforms, stripping away fear and replacing it with technical confidence.</p>
              
              <h3 style={{ fontSize: '1.5rem', color: 'var(--accent)', marginBottom: '10px' }}>Phase 2: Earn with AI</h3>
              <p style={{ marginBottom: '24px' }}>With technical comprehension comes direct commercial application. In this phase, the client leverages our robust, stress-free software to streamline operations, reduce operational friction, and introduce automated high-margin service offerings for immediate financial return.</p>
              
              <h3 style={{ fontSize: '1.5rem', color: 'var(--accent)', marginBottom: '10px' }}>Phase 3: Lead with AI</h3>
              <p>The final evolutionary state occurs when the user transitions from an adaptive consumer to a clear industry leader. Armed with continuous automated insights, Moh-AI Tech clients set new industry benchmarks, out-pacing competitors who rely on legacy paradigms.</p>
            </div>
          </div>

        </section>
      </main>

      <Footer />
    </>
  );
}
