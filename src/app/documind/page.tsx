'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function DocuMindLanding() {
  const [authMode, setAuthMode] = useState<'login' | 'signup' | null>(null);

  return (
    <>
      <style>{`
        /* ── DocuMind Design Tokens ── */
        .dm-root {
          --bg: #0a0a0f;
          --bg2: #111118;
          --bg3: #1a1a26;
          --bg4: #22223a;
          --border: #2a2a42;
          --border2: #3a3a58;
          --cyan: #00d4ff;
          --purple: #7c3aed;
          --purple2: #9d5cf6;
          --indigo: #4f46e5;
          --text: #f0f0ff;
          --text2: #a0a0c0;
          --text3: #606080;
          --green: #10b981;
          --amber: #f59e0b;
          --red: #ef4444;
          --radius: 12px;
          --radius2: 8px;
        }
        .dm-root *, .dm-root *::before, .dm-root *::after {
          box-sizing: border-box;
        }

        /* Nav */
        .dm-nav {
          position: fixed; top: 0; left: 0; right: 0; z-index: 100;
          display: flex; align-items: center; justify-content: space-between;
          padding: 0 2rem; height: 64px;
          background: rgba(10,10,15,0.85);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid #2a2a42;
        }
        .dm-nav-logo {
          display: flex; align-items: center; gap: 10px;
          font-size: 18px; font-weight: 700; color: #f0f0ff;
          text-decoration: none;
        }
        .dm-nav-logo span { color: #00d4ff; }
        .dm-logo-icon {
          width: 32px; height: 32px; border-radius: 8px;
          background: linear-gradient(135deg, #7c3aed, #00d4ff);
          display: flex; align-items: center; justify-content: center;
          font-size: 16px;
        }
        .dm-nav-links { display: flex; gap: 2rem; }
        .dm-nav-links a { color: #a0a0c0; text-decoration: none; font-size: 14px; transition: color 0.2s; }
        .dm-nav-links a:hover { color: #f0f0ff; }
        .dm-nav-cta { display: flex; gap: 10px; align-items: center; }

        /* Buttons */
        .dm-btn {
          display: inline-flex; align-items: center; gap: 6px;
          padding: 9px 20px; border-radius: 8px;
          font-size: 14px; font-weight: 500; cursor: pointer;
          border: none; transition: all 0.2s; text-decoration: none;
        }
        .dm-btn-ghost {
          background: transparent; color: #a0a0c0;
          border: 1px solid #3a3a58;
        }
        .dm-btn-ghost:hover { color: #f0f0ff; border-color: #606080; }
        .dm-btn-primary {
          background: linear-gradient(135deg, #7c3aed, #4f46e5); color: white;
          box-shadow: 0 4px 24px rgba(124,58,237,0.3);
        }
        .dm-btn-primary:hover { transform: translateY(-1px); box-shadow: 0 6px 32px rgba(124,58,237,0.45); }
        .dm-btn-cyan {
          background: linear-gradient(135deg, #00d4ff, #4f46e5); color: #000; font-weight: 600;
          box-shadow: 0 4px 24px rgba(0,212,255,0.25);
        }
        .dm-btn-cyan:hover { transform: translateY(-1px); box-shadow: 0 6px 32px rgba(0,212,255,0.4); }
        .dm-btn-lg { padding: 14px 32px; font-size: 16px; border-radius: 12px; }

        /* Hero */
        .dm-hero {
          min-height: 100vh;
          display: flex; flex-direction: column; align-items: center; justify-content: center;
          text-align: center; padding: 100px 2rem 4rem;
          position: relative; overflow: hidden;
          background: #0a0a0f;
        }
        .dm-hero-orb {
          position: absolute; border-radius: 50%; filter: blur(120px); opacity: 0.15; pointer-events: none;
        }
        .dm-hero-orb1 { width: 600px; height: 600px; background: #7c3aed; top: -100px; left: -200px; }
        .dm-hero-orb2 { width: 500px; height: 500px; background: #00d4ff; bottom: -100px; right: -150px; }
        .dm-badge {
          display: inline-flex; align-items: center; gap: 6px;
          background: rgba(124,58,237,0.15); border: 1px solid rgba(124,58,237,0.3);
          color: #9d5cf6; font-size: 13px; font-weight: 500;
          padding: 6px 16px; border-radius: 100px; margin-bottom: 1.5rem;
        }
        .dm-badge-dot {
          width: 6px; height: 6px; border-radius: 50%; background: #10b981;
          animation: dm-pulse 2s infinite;
        }
        @keyframes dm-pulse { 0%,100%{opacity:1}50%{opacity:0.4} }
        .dm-hero h1 {
          font-size: clamp(2.5rem, 6vw, 5rem);
          font-weight: 800; line-height: 1.1; letter-spacing: -0.03em;
          margin-bottom: 1.5rem; max-width: 900px; color: #f0f0ff;
        }
        .dm-grad {
          background: linear-gradient(135deg, #00d4ff, #9d5cf6, #f0f0ff);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
        }
        .dm-hero p { font-size: 1.2rem; color: #a0a0c0; max-width: 600px; line-height: 1.7; margin-bottom: 2.5rem; }
        .dm-hero-btns { display: flex; gap: 12px; flex-wrap: wrap; justify-content: center; margin-bottom: 3rem; }
        .dm-hero-stats { display: flex; gap: 3rem; color: #a0a0c0; font-size: 14px; }
        .dm-hero-stats .stat strong { color: #f0f0ff; font-size: 1.4rem; font-weight: 700; display: block; }

        /* Demo preview */
        .dm-demo-preview {
          margin-top: 4rem; width: 100%; max-width: 900px;
          background: #111118; border: 1px solid #2a2a42;
          border-radius: 16px; overflow: hidden;
          box-shadow: 0 32px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(124,58,237,0.1);
        }
        .dm-demo-bar {
          background: #1a1a26; padding: 12px 16px;
          display: flex; align-items: center; gap: 8px;
          border-bottom: 1px solid #2a2a42;
        }
        .dm-demo-dot { width: 10px; height: 10px; border-radius: 50%; }
        .dm-demo-url {
          flex: 1; background: #22223a; border-radius: 6px;
          padding: 5px 12px; font-size: 12px; color: #606080; margin: 0 12px;
        }
        .dm-demo-inner { display: grid; grid-template-columns: 260px 1fr; height: 420px; }
        .dm-demo-sidebar { border-right: 1px solid #2a2a42; padding: 16px; }
        .dm-demo-sidebar-title {
          font-size: 11px; color: #606080; text-transform: uppercase;
          letter-spacing: 0.08em; margin-bottom: 12px;
        }
        .dm-demo-doc {
          display: flex; align-items: center; gap: 10px;
          padding: 10px; border-radius: 8px; margin-bottom: 6px; cursor: pointer;
        }
        .dm-demo-doc.active { background: #1a1a26; }
        .dm-demo-doc-icon {
          width: 32px; height: 32px; border-radius: 6px;
          background: linear-gradient(135deg, #7c3aed, #4f46e5);
          display: flex; align-items: center; justify-content: center;
          font-size: 14px; flex-shrink: 0;
        }
        .dm-demo-doc-name { font-size: 13px; color: #f0f0ff; }
        .dm-demo-doc-size { font-size: 11px; color: #606080; }
        .dm-demo-chat {
          display: flex; flex-direction: column; padding: 16px; gap: 12px;
          overflow: hidden;
        }
        .dm-demo-msg { max-width: 80%; }
        .dm-demo-msg.user {
          align-self: flex-end;
          background: linear-gradient(135deg, #7c3aed, #4f46e5);
          color: white; padding: 10px 14px;
          border-radius: 12px 12px 2px 12px; font-size: 13px;
        }
        .dm-demo-msg.ai {
          align-self: flex-start;
          background: #1a1a26; border: 1px solid #2a2a42;
          color: #a0a0c0; padding: 10px 14px;
          border-radius: 2px 12px 12px 12px; font-size: 13px; line-height: 1.5;
        }
        .dm-cite {
          display: inline; background: rgba(0,212,255,0.1);
          color: #00d4ff; font-size: 11px; padding: 1px 6px;
          border-radius: 4px; margin-left: 4px;
        }

        /* Sections */
        .dm-section { padding: 6rem 2rem; background: #0a0a0f; }
        .dm-section-center { text-align: center; }
        .dm-section-tag {
          font-size: 12px; color: #00d4ff; text-transform: uppercase;
          letter-spacing: 0.1em; font-weight: 600; margin-bottom: 1rem;
        }
        .dm-section h2 {
          font-size: clamp(1.8rem, 4vw, 3rem); font-weight: 700;
          line-height: 1.2; letter-spacing: -0.02em; margin-bottom: 1rem; color: #f0f0ff;
        }
        .dm-section p.lead {
          font-size: 1.1rem; color: #a0a0c0; max-width: 600px;
          margin: 0 auto 3rem; line-height: 1.7;
        }

        /* Features */
        .dm-features-grid {
          display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.5rem; max-width: 1100px; margin: 0 auto;
        }
        .dm-feature-card {
          background: rgba(255,255,255,0.03); border: 1px solid #2a2a42;
          border-radius: 12px; padding: 1.5rem;
          transition: border-color 0.2s, transform 0.2s;
        }
        .dm-feature-card:hover { border-color: #3a3a58; transform: translateY(-2px); }
        .dm-feature-icon { font-size: 2rem; margin-bottom: 1rem; }
        .dm-feature-card h3 { font-size: 1rem; font-weight: 600; margin-bottom: 0.5rem; color: #f0f0ff; }
        .dm-feature-card p { font-size: 14px; color: #a0a0c0; line-height: 1.6; }

        /* Audience */
        .dm-audience-grid {
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 2rem; max-width: 900px; margin: 0 auto;
        }
        .dm-audience-card {
          background: #111118; border: 1px solid #2a2a42;
          border-radius: 12px; padding: 2rem;
        }
        .dm-audience-card h3 { font-size: 1.2rem; font-weight: 700; margin-bottom: 1rem; color: #f0f0ff; }
        .dm-audience-card ul { list-style: none; }
        .dm-audience-card ul li {
          padding: 6px 0; font-size: 14px; color: #a0a0c0;
          display: flex; align-items: flex-start; gap: 8px;
        }
        .dm-audience-card ul li::before { content: '✓'; color: #10b981; font-weight: 700; flex-shrink: 0; }

        /* Pricing */
        .dm-pricing-bg { background: #111118; }
        .dm-pricing-grid {
          display: grid; grid-template-columns: repeat(4, 1fr);
          gap: 1rem; max-width: 1100px; margin: 0 auto;
        }
        .dm-price-card {
          background: #111118; border: 1px solid #2a2a42;
          border-radius: 12px; padding: 1.75rem;
          position: relative; transition: all 0.2s;
        }
        .dm-price-card:hover { transform: translateY(-3px); border-color: #3a3a58; }
        .dm-price-card.popular { border-color: #7c3aed; background: rgba(124,58,237,0.05); }
        .dm-popular-badge {
          position: absolute; top: -12px; left: 50%; transform: translateX(-50%);
          background: linear-gradient(135deg, #7c3aed, #4f46e5); color: white;
          font-size: 11px; font-weight: 600; padding: 4px 14px;
          border-radius: 100px; white-space: nowrap;
        }
        .dm-price-name { font-size: 13px; color: #a0a0c0; font-weight: 500; margin-bottom: 8px; }
        .dm-price-val { font-size: 2.2rem; font-weight: 800; margin-bottom: 2px; color: #f0f0ff; }
        .dm-price-per { font-size: 12px; color: #606080; margin-bottom: 1.5rem; }
        .dm-price-features { list-style: none; margin-bottom: 1.5rem; }
        .dm-price-features li {
          padding: 5px 0; font-size: 13px; color: #a0a0c0;
          display: flex; gap: 8px; align-items: flex-start;
        }
        .dm-price-features li.yes::before { content: '✓'; color: #10b981; font-weight: 700; flex-shrink: 0; }
        .dm-price-features li.no { opacity: 0.4; }
        .dm-price-features li.no::before { content: '✗'; color: #606080; flex-shrink: 0; }
        .dm-price-btn {
          width: 100%; padding: 10px; border-radius: 8px;
          font-size: 14px; font-weight: 500; cursor: pointer;
          border: 1px solid #3a3a58; background: transparent; color: #f0f0ff;
          transition: all 0.2s;
        }
        .dm-price-btn:hover { background: #1a1a26; }
        .dm-price-btn.primary {
          background: linear-gradient(135deg, #7c3aed, #4f46e5); border: none; color: white;
        }
        .dm-price-btn.primary:hover { opacity: 0.9; }

        /* Footer */
        .dm-footer {
          border-top: 1px solid #2a2a42;
          padding: 3rem 2rem; text-align: center;
          background: #0a0a0f;
        }

        /* Auth Modal */
        .dm-modal-overlay {
          position: fixed; inset: 0; background: rgba(0,0,0,0.7);
          backdrop-filter: blur(8px); z-index: 200;
          display: flex; align-items: center; justify-content: center;
        }
        .dm-modal {
          background: #111118; border: 1px solid #2a2a42;
          border-radius: 16px; padding: 2rem; width: 90%; max-width: 480px;
          position: relative;
        }
        .dm-modal h2 { font-size: 1.3rem; font-weight: 700; margin-bottom: 0.5rem; color: #f0f0ff; }
        .dm-modal p { font-size: 14px; color: #a0a0c0; margin-bottom: 1.5rem; line-height: 1.6; }
        .dm-modal-close {
          position: absolute; top: 16px; right: 16px;
          background: none; border: none; color: #606080; cursor: pointer; font-size: 20px;
        }
        .dm-form-group { margin-bottom: 1rem; }
        .dm-form-label { font-size: 13px; color: #a0a0c0; margin-bottom: 6px; display: block; }
        .dm-form-input {
          width: 100%; background: #1a1a26; border: 1px solid #3a3a58;
          border-radius: 8px; padding: 10px 14px; color: #f0f0ff;
          font-size: 14px; outline: none; transition: border-color 0.2s;
        }
        .dm-form-input:focus { border-color: #7c3aed; }

        @media (max-width: 768px) {
          .dm-nav-links { display: none; }
          .dm-pricing-grid { grid-template-columns: 1fr 1fr; }
          .dm-audience-grid { grid-template-columns: 1fr; }
          .dm-demo-inner { grid-template-columns: 1fr; }
          .dm-demo-sidebar { display: none; }
        }
        @media (max-width: 480px) {
          .dm-pricing-grid { grid-template-columns: 1fr; }
          .dm-hero-stats { gap: 1.5rem; }
        }
      `}</style>

      <div className="dm-root">
        {/* ── NAV ── */}
        <nav className="dm-nav">
          <Link href="/documind" className="dm-nav-logo">
            <div className="dm-logo-icon">🧠</div>
            Docu<span>Mind</span>
          </Link>
          <div className="dm-nav-links">
            <a href="#features">Features</a>
            <a href="#audience">Who it&apos;s for</a>
            <a href="#pricing">Pricing</a>
          </div>
          <div className="dm-nav-cta">
            <button className="dm-btn dm-btn-ghost" onClick={() => setAuthMode('login')}>Sign in</button>
            <button className="dm-btn dm-btn-primary" onClick={() => setAuthMode('signup')}>Start free</button>
          </div>
        </nav>

        {/* ── HERO ── */}
        <section className="dm-hero">
          <div className="dm-hero-orb dm-hero-orb1" />
          <div className="dm-hero-orb dm-hero-orb2" />

          <div className="dm-badge">
            <span className="dm-badge-dot" />
            Now with Tamil, Hindi &amp; Telugu support
          </div>
          <h1>Chat with any<br /><span className="dm-grad">document instantly</span></h1>
          <p>Upload PDFs, Word docs, research papers, or company manuals. Ask questions, get summaries, generate quizzes — powered by AI that understands your content.</p>

          <div className="dm-hero-btns">
            <button className="dm-btn dm-btn-cyan dm-btn-lg" onClick={() => setAuthMode('signup')}>Start for free →</button>
            <a href="#features" className="dm-btn dm-btn-ghost dm-btn-lg">See how it works</a>
          </div>
          <div className="dm-hero-stats">
            <div className="stat"><strong>10+</strong> File formats</div>
            <div className="stat"><strong>3</strong> Indian languages</div>
            <div className="stat"><strong>∞</strong> Questions per doc</div>
          </div>

          {/* Demo Preview */}
          <div className="dm-demo-preview">
            <div className="dm-demo-bar">
              <div className="dm-demo-dot" style={{ background: '#ef4444' }} />
              <div className="dm-demo-dot" style={{ background: '#f59e0b' }} />
              <div className="dm-demo-dot" style={{ background: '#10b981' }} />
              <div className="dm-demo-url">app.documind.ai — Chat with your documents</div>
            </div>
            <div className="dm-demo-inner">
              <div className="dm-demo-sidebar">
                <div className="dm-demo-sidebar-title">My Documents</div>
                <div className="dm-demo-doc active">
                  <div className="dm-demo-doc-icon">📘</div>
                  <div>
                    <div className="dm-demo-doc-name">Machine_Learning.pdf</div>
                    <div className="dm-demo-doc-size">4.2 MB · 186 pages</div>
                  </div>
                </div>
                <div className="dm-demo-doc">
                  <div className="dm-demo-doc-icon" style={{ background: 'linear-gradient(135deg,#10b981,#059669)' }}>📄</div>
                  <div>
                    <div className="dm-demo-doc-name">Employee_Handbook.pdf</div>
                    <div className="dm-demo-doc-size">2.8 MB · 94 pages</div>
                  </div>
                </div>
                <div className="dm-demo-doc">
                  <div className="dm-demo-doc-icon" style={{ background: 'linear-gradient(135deg,#f59e0b,#d97706)' }}>📊</div>
                  <div>
                    <div className="dm-demo-doc-name">Q3_Report_2025.pdf</div>
                    <div className="dm-demo-doc-size">1.1 MB · 32 pages</div>
                  </div>
                </div>
              </div>
              <div className="dm-demo-chat">
                <div className="dm-demo-msg user">What is gradient descent and how does it work?</div>
                <div className="dm-demo-msg ai">
                  Gradient descent is an optimization algorithm used to minimize a function by iteratively moving in the direction of steepest descent. <span className="dm-cite">pg. 47</span><br /><br />
                  The algorithm works by computing the gradient of the loss function, then updating parameters in the opposite direction scaled by the learning rate. <span className="dm-cite">pg. 48</span>
                </div>
                <div className="dm-demo-msg user">Give me 3 quiz questions on this topic</div>
                <div className="dm-demo-msg ai">
                  <strong style={{ color: '#f0f0ff' }}>Quiz generated! ✨</strong><br />
                  Q1: What does gradient descent minimize?<br />
                  Q2: Why do we move opposite to the gradient?<br />
                  Q3: What is the role of learning rate?
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── FEATURES ── */}
        <section className="dm-section dm-section-center" id="features">
          <div className="dm-section-tag">Features</div>
          <h2>Everything you need from<br />any document</h2>
          <p className="lead">One platform for students studying for exams and companies managing knowledge — powered by the same enterprise-grade AI.</p>
          <div className="dm-features-grid">
            {[
              { icon: '💬', title: 'Natural language chat', desc: 'Ask anything about your document in plain language. Get cited, accurate answers — never hallucinated responses from outside the document.' },
              { icon: '⚡', title: 'Instant summaries', desc: 'Three levels: a 2-line overview, a one-page breakdown, or a comprehensive chapter-by-chapter analysis. Your choice.' },
              { icon: '🎯', title: 'Quiz & flashcard generator', desc: 'Upload a textbook chapter and get MCQs, fill-in-the-blanks, and flashcards in seconds. Study smarter, not longer.' },
              { icon: '🌐', title: 'Multilingual — Tamil, Hindi, Telugu', desc: 'Upload an English document and ask questions in Tamil. Get answers in your language. The first AI document tool built for India.' },
              { icon: '📊', title: 'Data extraction', desc: 'Extract tables, numbers, dates, and named entities automatically. Export as Excel or CSV. Built for finance and operations teams.' },
              { icon: '👥', title: 'Team workspaces', desc: 'Share documents with your team, collaborate with shared notes and highlights, and build a searchable company knowledge base.' },
            ].map((f) => (
              <div key={f.title} className="dm-feature-card">
                <div className="dm-feature-icon">{f.icon}</div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── AUDIENCE ── */}
        <section className="dm-section dm-section-center dm-pricing-bg" id="audience">
          <div className="dm-section-tag">Who uses DocuMind</div>
          <h2>Built for two worlds</h2>
          <p className="lead">Whether you&apos;re studying for your Anna University exam or managing a 500-person company, DocuMind works for you.</p>
          <div className="dm-audience-grid">
            <div className="dm-audience-card">
              <h3>🎓 Students</h3>
              <ul>
                {['Chat with textbooks and research papers', 'Summarize 200-page PDFs in 2 minutes', 'Auto-generate exam practice questions', 'Study in Tamil, Hindi, or English', 'Understand complex topics simply', 'Create flashcards from any chapter'].map(i => <li key={i}>{i}</li>)}
              </ul>
            </div>
            <div className="dm-audience-card">
              <h3>🏢 Companies</h3>
              <ul>
                {['Search employee manuals instantly', 'Query legal contracts in seconds', 'New hire self-onboarding via policy docs', 'Extract data from hundreds of reports', 'Compliance verification at scale', 'Team knowledge base with access control'].map(i => <li key={i}>{i}</li>)}
              </ul>
            </div>
          </div>
        </section>

        {/* ── PRICING ── */}
        <section className="dm-section dm-section-center" id="pricing">
          <div className="dm-section-tag">Pricing</div>
          <h2>Simple, honest pricing</h2>
          <p className="lead">Start free. Upgrade when you need more. No hidden fees, no usage surprises.</p>
          <div className="dm-pricing-grid">
            {/* Free */}
            <div className="dm-price-card">
              <div className="dm-price-name">Free</div>
              <div className="dm-price-val">₹0</div>
              <div className="dm-price-per">forever</div>
              <ul className="dm-price-features">
                <li className="yes">3 documents / month</li>
                <li className="yes">20 questions / day</li>
                <li className="yes">Basic summary</li>
                <li className="yes">PDF support</li>
                <li className="no">Quiz generator</li>
                <li className="no">Multilingual</li>
                <li className="no">Team features</li>
              </ul>
              <button className="dm-price-btn" onClick={() => setAuthMode('signup')}>Get started</button>
            </div>

            {/* Student */}
            <div className="dm-price-card popular">
              <div className="dm-popular-badge">Most popular</div>
              <div className="dm-price-name">Student</div>
              <div className="dm-price-val">₹299</div>
              <div className="dm-price-per">/month</div>
              <ul className="dm-price-features">
                <li className="yes">50 documents / month</li>
                <li className="yes">Unlimited questions</li>
                <li className="yes">Quiz &amp; flashcard generator</li>
                <li className="yes">All summary levels</li>
                <li className="yes">Tamil &amp; Hindi support</li>
                <li className="yes">Priority processing</li>
                <li className="no">Team features</li>
              </ul>
              <button className="dm-price-btn primary" onClick={() => setAuthMode('signup')}>Start free trial</button>
            </div>

            {/* Professional */}
            <div className="dm-price-card">
              <div className="dm-price-name">Professional</div>
              <div className="dm-price-val">₹999</div>
              <div className="dm-price-per">/month</div>
              <ul className="dm-price-features">
                <li className="yes">200 documents / month</li>
                <li className="yes">Multi-document workspace</li>
                <li className="yes">Data extraction &amp; export</li>
                <li className="yes">Document comparison</li>
                <li className="yes">3 team members</li>
                <li className="yes">All languages</li>
                <li className="yes">API access (1K calls/mo)</li>
              </ul>
              <button className="dm-price-btn" onClick={() => setAuthMode('signup')}>Start free trial</button>
            </div>

            {/* Business */}
            <div className="dm-price-card">
              <div className="dm-price-name">Business</div>
              <div className="dm-price-val">₹4,999</div>
              <div className="dm-price-per">/month</div>
              <ul className="dm-price-features">
                <li className="yes">Unlimited documents</li>
                <li className="yes">10 team members</li>
                <li className="yes">Unlimited API access</li>
                <li className="yes">Custom branding</li>
                <li className="yes">Priority support (SLA)</li>
                <li className="yes">On-premise option</li>
                <li className="yes">Dedicated onboarding</li>
              </ul>
              <button className="dm-price-btn" onClick={() => setAuthMode('signup')}>Contact sales</button>
            </div>
          </div>
        </section>

        {/* ── FOOTER ── */}
        <footer className="dm-footer">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, marginBottom: '1rem' }}>
            <div className="dm-logo-icon">🧠</div>
            <span style={{ fontSize: 18, fontWeight: 700 }}>Docu<span style={{ color: '#00d4ff' }}>Mind</span></span>
          </div>
          <p style={{ fontSize: 13, color: '#606080', marginBottom: '1rem' }}>
            Built by <strong style={{ color: '#a0a0c0' }}>MOH AI TECH</strong> · Namakkal, Tamil Nadu, India · MSME Registered
          </p>
          <p style={{ fontSize: 13, color: '#606080' }}>info@mohaitech.com · moh-ai-tech.com</p>
          <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/" style={{ fontSize: 13, color: '#606080', textDecoration: 'none' }}>← Back to Moh-AI Tech</Link>
            <Link href="/documind/dashboard" style={{ fontSize: 13, color: '#9d5cf6', textDecoration: 'none' }}>Open App →</Link>
          </div>
        </footer>

        {/* ── AUTH MODAL ── */}
        {authMode && (
          <div className="dm-modal-overlay" onClick={() => setAuthMode(null)}>
            <div className="dm-modal" onClick={e => e.stopPropagation()}>
              <button className="dm-modal-close" onClick={() => setAuthMode(null)}>✕</button>
              <h2>{authMode === 'login' ? 'Welcome back' : 'Create your account'}</h2>
              <p>{authMode === 'login' ? 'Sign in to access your documents and chats.' : 'Start for free — no credit card required.'}</p>
              <div className="dm-form-group">
                <label className="dm-form-label">Email address</label>
                <input type="email" className="dm-form-input" placeholder="you@example.com" />
              </div>
              <div className="dm-form-group">
                <label className="dm-form-label">Password</label>
                <input type="password" className="dm-form-input" placeholder="••••••••" />
              </div>
              {authMode === 'signup' && (
                <div className="dm-form-group">
                  <label className="dm-form-label">Full name</label>
                  <input type="text" className="dm-form-input" placeholder="Your name" />
                </div>
              )}
              <Link href="/documind/dashboard" style={{ display: 'block', marginTop: 8 }}>
                <button
                  className="dm-btn dm-btn-primary"
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  {authMode === 'login' ? 'Sign in' : 'Create account'} →
                </button>
              </Link>
              <p style={{ textAlign: 'center', marginTop: 16, fontSize: 13, color: '#606080' }}>
                {authMode === 'login' ? "Don't have an account? " : 'Already have an account? '}
                <button
                  onClick={() => setAuthMode(authMode === 'login' ? 'signup' : 'login')}
                  style={{ background: 'none', border: 'none', color: '#9d5cf6', cursor: 'pointer', fontSize: 13 }}
                >
                  {authMode === 'login' ? 'Sign up' : 'Sign in'}
                </button>
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
