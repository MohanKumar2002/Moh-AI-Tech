'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/components/i18n-provider';
import { BookingForm } from '@/components/booking-form';
import Footer from '@/components/layout/footer';

export default function Home() {
  const { t } = useLanguage();

  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('vis');
      });
    }, { threshold: 0.08 });
    
    document.querySelectorAll('.fu').forEach(el => obs.observe(el));
    setTimeout(() => {
      document.querySelectorAll('.hero-content .fu').forEach(el => el.classList.add('vis'));
    }, 120);
  }, []);


  return (
    <>
<section id="hero">
  <div className="hero-glow hero-glow-1"></div>
  <div className="hero-glow hero-glow-2"></div>
  <div className="hero-inner">
    <div className="hero-content">
      <div className="hero-badge fu">
        <span className="badge-pulse"></span>
        <span data-t="hero_badge">{t('hero_badge')}</span>
      </div>
      <h1 className="hero-h1 fu d1">
        MOH-AI TECH
      </h1>
      <p className="hero-sub fu d2">
        <em>Mastering Outstanding Horizons through Focused Engineering.</em><br/><br/>
        We design and build AI, Machine Learning, Computer Vision, and Data Intelligence solutions for businesses and institutions worldwide. No fake claims — just honest, production-grade engineering.
      </p>
      
      <div className="hero-tagline fu d2" style={{
        marginTop: '1.5rem',
        marginBottom: '1rem',
        padding: '0.8rem 1.8rem',
        background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.05), rgba(168, 85, 247, 0.05))',
        border: '1px solid rgba(99, 102, 241, 0.2)',
        borderRadius: '999px',
        display: 'inline-block',
        boxShadow: '0 4px 20px -2px rgba(99, 102, 241, 0.1)',
        backdropFilter: 'blur(10px)'
      }}>
        <span style={{ 
          background: 'linear-gradient(90deg, #6366f1, #a855f7)', 
          WebkitBackgroundClip: 'text', 
          WebkitTextFillColor: 'transparent', 
          fontWeight: 700, 
          letterSpacing: '0.5px',
          fontSize: '1.15rem'
        }} data-t="hero_tagline">
          {t('hero_tagline') || "Peace in mind, Progress through AI, Prosperity in life."}
        </span>
      </div>

      <div className="hero-btns fu d3">
        <a href="#contact" className="btn-primary" data-t="hero_btn1">{t('hero_btn1')}</a>
        <a href="#services" className="btn-ghost" data-t="hero_btn2">{t('hero_btn2')}</a>
      </div>
      <div className="hero-chips fu d4">
        <div className="chip"><span className="chip-dot"></span><span data-t="chip1">{t('chip1')}</span></div>
        <div className="chip"><span className="chip-dot"></span><span data-t="chip2">{t('chip2')}</span></div>
        <div className="chip"><span className="chip-dot"></span><span data-t="chip3">{t('chip3')}</span></div>
      </div>
    </div>
    <div className="hero-visual">
      <div className="hv-float-1">
        <div className="hv-card" style={{'marginBottom': '16px'}}>
          <div className="hv-card-title">Active Project</div>
          <div className="hv-row"><span className="hv-label">Type</span><span className="hv-val">Computer Vision</span></div>
          <div className="hv-row"><span className="hv-label">Stack</span><span className="hv-val">PyTorch + FastAPI</span></div>
          <div className="hv-row"><span className="hv-label">Status</span><span className="hv-badge hv-green">In Development</span></div>
        </div>
      </div>
      <div className="hv-float-2">
        <div className="hv-card">
          <div className="hv-card-title">Capabilities</div>
          <div className="hv-row"><span className="hv-label">Web Development</span><span className="hv-badge hv-green">✓ Ready</span></div>
          <div className="hv-row"><span className="hv-label">AI / ML / DL</span><span className="hv-badge hv-green">✓ Ready</span></div>
          <div className="hv-row"><span className="hv-label">Computer Vision</span><span className="hv-badge hv-green">✓ Ready</span></div>
          <div className="hv-row"><span className="hv-label">Custom LLM</span><span className="hv-badge hv-blue">✓ Ready</span></div>
        </div>
      </div>
    </div>
  </div>
</section>



{/* ===== FOUNDER ===== */}
<section id="founder" style={{ background: 'var(--bg2)', padding: '60px 0' }}>
  <div className="inner">
    <div className="global-grid fu d1" style={{ alignItems: 'center' }}>
      <div>
        <div className="tag" style={{ marginBottom: '16px' }}>Leadership</div>
        <h2 className="h2" style={{ marginBottom: '24px' }}>Founder-Led Engineering</h2>
        <p className="lead" style={{ fontSize: '18px', color: 'var(--text)', lineHeight: '1.7', marginBottom: '24px' }}>
          Founded by <strong>Mohan Kumar S</strong>, Moh-AI Tech is an MSME-registered AI company focused on building practical AI solutions that solve real business problems.
        </p>
        <p style={{ fontSize: '16px', color: 'var(--muted)', lineHeight: '1.6' }}>
          We don't just sell software; we engineer custom architectures. From deep learning and computer vision to intelligent web platforms, we build systems that automate work and scale operations for businesses worldwide.
        </p>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <Image 
          src="/images/team/mohan.jpg" 
          alt="Mohan Kumar S" 
          width={220}
          height={220}
          priority
          style={{ width: '220px', height: '220px', borderRadius: '50%', objectFit: 'cover', border: '4px solid var(--border)', boxShadow: 'var(--shadow)' }} 
        />
        <div style={{ marginTop: '16px', fontWeight: '700', fontSize: '18px', color: 'var(--text)', textAlign: 'center', width: '100%' }}>Mohan Kumar S</div>
        <div style={{ fontSize: '14px', color: 'var(--accent)', textAlign: 'center', width: '100%' }}>Founder & CEO</div>
      </div>
    </div>
  </div>
</section>

{/* ===== VISION & MISSION ===== */}
<section id="vision-mission" style={{ background: 'var(--bg)', padding: '80px 0' }}>
  <div className="inner">
    <div className="global-grid fu d1" style={{ gap: '48px' }}>
      <div className="card">
        <div className="tag" style={{ marginBottom: '16px' }}>Our Vision</div>
        <h2 className="h2" style={{ marginBottom: '24px', fontSize: '28px' }}>AI shouldn't be a luxury only big companies can afford</h2>
        <p className="lead" style={{ fontSize: '16px', color: 'var(--muted)', lineHeight: '1.6' }}>
          Most businesses — especially in India and emerging markets — watch AI transform their bigger competitors while staying priced out themselves. We exist to close that gap: practical, honestly-built AI that any serious business can actually afford and actually use.
        </p>
      </div>
      <div className="card">
        <div className="tag" style={{ marginBottom: '16px' }}>Our Mission</div>
        <h2 className="h2" style={{ marginBottom: '24px', fontSize: '28px' }}>Solving one real problem at a time</h2>
        <p className="lead" style={{ fontSize: '16px', color: 'var(--muted)', lineHeight: '1.6' }}>
          We build AI systems that solve one real problem at a time — no bloated platforms, no "AI-washing." Every system we ship is something we'd deploy in our own business first. If it doesn't save real time or real money, we don't build it.
        </p>
      </div>
    </div>
  </div>
</section>

{/* ===== THE PROBLEMS WE SOLVE ===== */}
<section id="problems" style={{ background: 'var(--bg2)', padding: '80px 0', borderTop: '1px solid var(--border)' }}>
  <div className="inner">
    <div className="tag fu">The Problems We Solve</div>
    <h2 className="h2 fu d1">If any of this sounds familiar, we should talk</h2>
    
    <div className="fu d2" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '24px', marginTop: '48px', maxWidth: '900px' }}>
      
      <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <h3 style={{ fontSize: '18px', fontWeight: '700', color: 'var(--text)' }}>"Our team spends hours screening resumes/documents manually"</h3>
        <p style={{ fontSize: '15px', color: 'var(--muted)' }}>→ We build automated screening & document intelligence that ranks, extracts, and routes in minutes — see ResumeFilter AI below.</p>
      </div>

      <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <h3 style={{ fontSize: '18px', fontWeight: '700', color: 'var(--text)' }}>"We have years of data but no way to actually query it"</h3>
        <p style={{ fontSize: '15px', color: 'var(--muted)' }}>→ We build an Enterprise AI Brain that connects to your existing documents, databases, and emails — ask questions in plain language, get real answers.</p>
      </div>

      <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <h3 style={{ fontSize: '18px', fontWeight: '700', color: 'var(--text)' }}>"Customer support is either too slow or too expensive to scale"</h3>
        <p style={{ fontSize: '15px', color: 'var(--muted)' }}>→ We build multi-channel AI agents trained on your own knowledge base — WhatsApp, email, and web, with human escalation built in.</p>
      </div>

      <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <h3 style={{ fontSize: '18px', fontWeight: '700', color: 'var(--text)' }}>"Reporting takes days and still doesn't answer the real question"</h3>
        <p style={{ fontSize: '15px', color: 'var(--muted)' }}>→ We build automated data pipelines and PowerBI dashboards with AI-generated insight summaries — no more manual spreadsheet stitching.</p>
      </div>

      <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <h3 style={{ fontSize: '18px', fontWeight: '700', color: 'var(--text)' }}>"Invoice and expense processing eats up finance team hours every week"</h3>
        <p style={{ fontSize: '15px', color: 'var(--muted)' }}>→ We build automated invoice extraction pipelines that read, validate, and push structured data straight into your accounting or ERP system.</p>
      </div>

      <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <h3 style={{ fontSize: '18px', fontWeight: '700', color: 'var(--text)' }}>"Quality control is manual and inconsistent across our production line"</h3>
        <p style={{ fontSize: '15px', color: 'var(--muted)' }}>→ We build custom-trained computer vision pipelines that catch defects your team misses, in real time. <span style={{ display: 'inline-block', padding: '2px 8px', background: 'rgba(234, 179, 8, 0.1)', color: '#ca8a04', fontSize: '12px', fontWeight: '600', borderRadius: '4px', marginLeft: '8px' }}>In Development</span></p>
      </div>

    </div>

    <div className="fu d3" style={{ marginTop: '48px' }}>
      <a href="#contact" className="btn btn-primary" style={{ display: 'inline-block' }}>Tell us your problem →</a>
    </div>
  </div>
</section>

{/* ===== TRUST BAND ===== */}
<section id="trust">
  <div className="trust-inner">
    <div className="trust-label" data-t="trust_label">{t('trust_label')}</div>
    <div className="trust-pills">
      <div className="trust-pill"><span className="trust-pill-icon">🏢</span> MSME Reg: UDYAM-TN-14-0088280</div>
      <div className="trust-pill"><span className="trust-pill-icon">💻</span> Web Development</div>
      <div className="trust-pill"><span className="trust-pill-icon">🤖</span> AI, ML & Deep Learning</div>
      <div className="trust-pill"><span className="trust-pill-icon">👁️</span> Computer Vision</div>
      <div className="trust-pill"><span className="trust-pill-icon">🌐</span> Remote-Friendly</div>
      <div className="trust-pill"><span className="trust-pill-icon">📊</span> Data Intelligence</div>
      <div className="trust-pill"><span className="trust-pill-icon">🔒</span> NDA & IP Protected</div>
      <div className="trust-pill"><span className="trust-pill-icon">📍</span> Based in Namakkal, India</div>
    </div>
  </div>
</section>

{/* ===== SERVICES ===== */}
<section id="services">
  <div className="inner">
    <div className="tag fu" data-t="tag_services">{t('tag_services')}</div>
    <h2 className="h2 fu d1" data-t="h2_services">{t('h2_services')}</h2>
    <p className="lead fu d2" data-t="lead_services">{t('lead_services')}</p>
    <div className="services-grid fu d3" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
      <div className="svc-card">
        <div className="svc-icon">🧠</div>
        <div className="svc-title">Custom AI Applications</div>
        <div className="svc-desc">Intelligent, conversational, and generative systems built specifically for your business data and logic.</div>
        <div className="svc-tags">
          <span className="svc-tag">Chatbots</span>
          <span className="svc-tag">AI Agents</span>
          <span className="svc-tag">RAG Systems</span>
        </div>
      </div>
      <div className="svc-card">
        <div className="svc-icon">⚙️</div>
        <div className="svc-title">Business Automation</div>
        <div className="svc-desc">We replace manual data entry and repetitive tasks with AI pipelines that extract, process, and route information.</div>
        <div className="svc-tags">
          <span className="svc-tag">Workflows</span>
          <span className="svc-tag">Dashboards</span>
          <span className="svc-tag">Document Processing</span>
        </div>
      </div>
      <div className="svc-card">
        <div className="svc-icon">💻</div>
        <div className="svc-title">Intelligent Web Platforms</div>
        <div className="svc-desc">High-performance, modern web applications designed to house complex AI logic and deliver seamless user experiences.</div>
        <div className="svc-tags">
          <span className="svc-tag">React.js</span>
          <span className="svc-tag">FastAPI</span>
          <span className="svc-tag">Full-Stack Systems</span>
        </div>
      </div>
    </div>
  </div>
</section>

{/* ===== SOLUTIONS ===== */}
<section id="solutions">
  <div className="inner">
    <div className="tag fu" data-t="tag_solutions">{t('tag_solutions')}</div>
    <h2 className="h2 fu d1">Solution Architectures We Build</h2>
    <p className="lead fu d2" data-t="lead_solutions">{t('lead_solutions')}</p>
    <div className="solutions-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
      <div className="sol-card fu">
        <div className="sol-icon">🧠</div>
        <div className="sol-name">Enterprise AI Brain</div>
        <div className="sol-tagline">Private AI assistant trained on your company data</div>
        <div className="sol-desc">A custom AI system that connects to your internal data — documents, databases, emails — and gives your team a conversational interface to query it securely.</div>
        <ul className="sol-feats">
          <li>Private LLM setup (on-premise or cloud)</li>
          <li>Connects to your existing data sources</li>
          <li>Role-based access control</li>
          <li>Full data privacy — no third-party training</li>
        </ul>
        <a href="#contact" className="sol-link">Discuss this →</a>
        <div className="sol-note" data-t="sol_concept">{t('sol_concept')}</div>
      </div>
      <div className="sol-card fu d1">
        <div className="sol-icon">📊</div>
        <div className="sol-name">Data Intelligence Suite</div>
        <div className="sol-tagline">From raw data to executive dashboards</div>
        <div className="sol-desc">We set up your complete data pipeline — ingestion, transformation, modeling — and deliver PowerBI dashboards with AI-assisted insight generation.</div>
        <ul className="sol-feats">
          <li>Automated data pipeline setup</li>
          <li>Industry-specific dashboard templates</li>
          <li>Predictive trend overlays</li>
          <li>Scheduled email / WhatsApp reports</li>
        </ul>
        <a href="#contact" className="sol-link">Discuss this →</a>
        <div className="sol-note" data-t="sol_concept">{t('sol_concept')}</div>
      </div>
      <div className="sol-card fu">
        <div className="sol-icon">🤖</div>
        <div className="sol-name">AI Customer Service Agent</div>
        <div className="sol-tagline">Multi-channel conversational AI</div>
        <div className="sol-desc">A custom-built AI agent that handles customer inquiries across WhatsApp, email, and web chat. Learns from your knowledge base and escalates when needed.</div>
        <ul className="sol-feats">
          <li>WhatsApp, email, web integration</li>
          <li>Trained on your product/service knowledge</li>
          <li>30+ language support</li>
          <li>Connects to your CRM or helpdesk</li>
        </ul>
        <a href="#contact" className="sol-link">Discuss this →</a>
        <div className="sol-note" data-t="sol_concept">{t('sol_concept')}</div>
      </div>
      <div className="sol-card fu d1">
        <div className="sol-icon">📑</div>
        <div className="sol-name">HR & Document Automation</div>
        <div className="sol-tagline">Automated parsing and screening</div>
        <div className="sol-desc">Intelligent document processing for resumes, contracts, and forms. Includes semantic parsing and TF-IDF based candidate ranking.</div>
        <ul className="sol-feats">
          <li>High-accuracy OCR for legacy records</li>
          <li>Semantic resume parsing & ranking</li>
          <li>Automated candidate pre-screening</li>
          <li>Enterprise API integration</li>
        </ul>
        <a href="#contact" className="sol-link">Discuss this →</a>
        <div className="sol-note" data-t="sol_concept">{t('sol_concept')}</div>
      </div>
    </div>
  </div>
</section>

{/* ===== ENTERPRISE SECURITY ===== */}
<section id="security" style={{ background: 'var(--bg2)', padding: '60px 0', borderTop: '1px solid var(--border)' }}>
  <div className="inner">
    <div className="tag fu" style={{ background: 'rgba(16, 185, 129, 0.1)', color: '#10b981' }}>🔒 Enterprise Data Sovereignty</div>
    <div className="fu d2" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', marginTop: '32px' }}>
      <div className="card">
        <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '12px' }}>Zero Public Training</h3>
        <p style={{ fontSize: '15px', color: 'var(--muted)', lineHeight: '1.6' }}>We design systems where your proprietary company data, documents, and emails are never used to train public LLMs. Your data stays yours.</p>
      </div>
      <div className="card">
        <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '12px' }}>Flexible Deployment</h3>
        <p style={{ fontSize: '15px', color: 'var(--muted)', lineHeight: '1.6' }}>We host architectures wherever you need them—whether that's a fully isolated secure private cloud or on-premise hardware.</p>
      </div>
      <div className="card">
        <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '12px' }}>IP & Code Ownership</h3>
        <p style={{ fontSize: '15px', color: 'var(--muted)', lineHeight: '1.6' }}>Complete handover. You own 100% of the custom codebase, documentation, and operational weights we engineer.</p>
      </div>
    </div>
  </div>
</section>

{/* ===== TECHNICAL CAPABILITIES ===== */}
<section id="capabilities" style={{ background: 'var(--bg)', padding: '80px 0', borderTop: '1px solid var(--border)' }}>
  <div className="inner">
    <h2 className="h2 fu d1" style={{ marginBottom: '32px' }}>Technical Capabilities Blueprint</h2>
    <div className="fu d2" style={{ overflowX: 'auto' }}>
      <table style={{ width: '100%', minWidth: '800px', borderCollapse: 'collapse', textAlign: 'left', background: 'var(--card)', border: '1px solid var(--border)', borderRadius: '12px', overflow: 'hidden' }}>
        <thead style={{ background: 'var(--bg2)', borderBottom: '2px solid var(--border)' }}>
          <tr>
            <th style={{ padding: '16px', fontWeight: '700', color: 'var(--text)' }}>Engine Domain</th>
            <th style={{ padding: '16px', fontWeight: '700', color: 'var(--text)' }}>Verified Readiness</th>
            <th style={{ padding: '16px', fontWeight: '700', color: 'var(--text)' }}>Core Production Stack</th>
            <th style={{ padding: '16px', fontWeight: '700', color: 'var(--text)' }}>Deployed Output</th>
          </tr>
        </thead>
        <tbody>
          <tr style={{ borderBottom: '1px solid var(--border)' }}>
            <td style={{ padding: '16px', fontWeight: '600', color: 'var(--text)' }}>Autonomous AI Agents</td>
            <td style={{ padding: '16px', color: '#10b981' }}>✓ Enterprise Ready</td>
            <td style={{ padding: '16px', color: 'var(--muted)' }}>LangChain + FastAPI</td>
            <td style={{ padding: '16px', color: 'var(--muted)' }}>System-wide automated report & invoice workers</td>
          </tr>
          <tr style={{ borderBottom: '1px solid var(--border)' }}>
            <td style={{ padding: '16px', fontWeight: '600', color: 'var(--text)' }}>Computer Vision</td>
            <td style={{ padding: '16px', color: '#10b981' }}>✓ Enterprise Ready</td>
            <td style={{ padding: '16px', color: 'var(--muted)' }}>PyTorch + OpenCV</td>
            <td style={{ padding: '16px', color: 'var(--muted)' }}>Real-time industrial defect & line monitoring</td>
          </tr>
          <tr style={{ borderBottom: '1px solid var(--border)' }}>
            <td style={{ padding: '16px', fontWeight: '600', color: 'var(--text)' }}>Intelligent Web Platforms</td>
            <td style={{ padding: '16px', color: '#10b981' }}>✓ Enterprise Ready</td>
            <td style={{ padding: '16px', color: 'var(--muted)' }}>React.js + TailwindCSS</td>
            <td style={{ padding: '16px', color: 'var(--muted)' }}>Fast, responsive frontends housing complex ML logic</td>
          </tr>
          <tr>
            <td style={{ padding: '16px', fontWeight: '600', color: 'var(--text)' }}>Custom Retrieval (RAG)</td>
            <td style={{ padding: '16px', color: '#10b981' }}>✓ Enterprise Ready</td>
            <td style={{ padding: '16px', color: 'var(--muted)' }}>PostgreSQL (pgvector) / Vector DBs</td>
            <td style={{ padding: '16px', color: 'var(--muted)' }}>Secure enterprise brains querying private corporate data</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</section>

{/* ===== EMERGING ARCHITECTURES ===== */}
<section id="emerging" style={{ background: 'var(--card)', padding: '60px 0', borderTop: '1px solid var(--border)' }}>
  <div className="inner">
    <div className="tag fu" style={{ background: 'rgba(99, 102, 241, 0.1)', color: 'var(--accent)' }}>Roadmap</div>
    <h2 className="h2 fu d1">Emerging Architectures</h2>
    <p className="lead fu d2">These are domains we're actively extending into. Available for early pilot partners who want to help shape the build.</p>
    <div className="fu d3" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px', marginTop: '40px' }}>
      <div className="sol-card">
        <div className="sol-icon">👁️</div>
        <div className="sol-name">Vision Inspection System</div>
        <div className="sol-tagline">AI-powered quality control & video analytics</div>
        <div className="sol-desc" style={{ marginBottom: '16px' }}>Computer Vision pipeline for real-time video or image analysis — detecting defects, monitoring safety compliance, or tracking objects in your environment.</div>
        <div style={{ display: 'inline-block', padding: '6px 12px', background: 'rgba(234, 179, 8, 0.1)', color: '#ca8a04', fontSize: '12px', fontWeight: '600', borderRadius: '4px' }}>In Development — Pilot Partner Wanted</div>
      </div>
      <div className="sol-card">
        <div className="sol-icon">🌾</div>
        <div className="sol-name">Agriculture AI System</div>
        <div className="sol-tagline">Precision farming & crop intelligence</div>
        <div className="sol-desc" style={{ marginBottom: '16px' }}>AI-powered crop monitoring, disease detection, and yield estimation — using satellite imagery, drone data, or field sensor inputs. Designed for Indian farming contexts.</div>
        <div style={{ display: 'inline-block', padding: '6px 12px', background: 'rgba(234, 179, 8, 0.1)', color: '#ca8a04', fontSize: '12px', fontWeight: '600', borderRadius: '4px' }}>In Development — Pilot Partner Wanted</div>
      </div>
      <div className="sol-card">
        <div className="sol-icon">🏥</div>
        <div className="sol-name">Medical Imaging AI</div>
        <div className="sol-tagline">Deep learning for diagnostic image analysis</div>
        <div className="sol-desc" style={{ marginBottom: '16px' }}>Custom deep learning models for analyzing medical images — X-rays, retinal scans, histopathology — to assist clinicians with pattern detection.</div>
        <div style={{ display: 'inline-block', padding: '6px 12px', background: 'rgba(234, 179, 8, 0.1)', color: '#ca8a04', fontSize: '12px', fontWeight: '600', borderRadius: '4px' }}>In Development — Pilot Partner Wanted</div>
      </div>
    </div>
    <div className="fu d3" style={{ marginTop: '40px' }}>
      <a href="#contact" className="btn btn-outline" style={{ display: 'inline-block' }}>Discuss a Pilot →</a>
    </div>
  </div>
</section>

{/* ===== PROJECT SHOWCASE ===== */}
<section id="projects" style={{ background: 'var(--bg)', padding: '88px 0' }}>
  <div className="inner">
    <div className="tag fu">Recent Work</div>
    <h2 className="h2 fu d1">Our Engineering Roadmap & Recent Work</h2>
    <p className="lead fu d2">A look at the systems we've engineered and are actively building out.</p>
    
    <div className="fu d3" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '32px', marginTop: '48px' }}>
      
      {/* Smart Document Pipeline */}
      <div className="project-card" style={{ background: 'var(--card)', borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--border)' }}>
        <Image src="/images/products/ocr.png" alt="Document OCR Pipeline" width={800} height={600} style={{ width: '100%', height: '220px', objectFit: 'cover', borderBottom: '1px solid var(--border)' }} />
        <div style={{ padding: '32px' }}>
          <h3 style={{ fontSize: '20px', fontWeight: '800', marginBottom: '8px' }}>Smart Document Pipeline</h3>
          <p style={{ fontSize: '15px', color: 'var(--muted)', lineHeight: '1.6', marginBottom: '24px' }}>Built an OCR-based extraction pipeline for automated data capture from legacy records — reads, structures, and routes document data without manual entry.</p>
        </div>
      </div>

      {/* Vision Analytics System */}
      <div className="project-card" style={{ background: 'var(--card)', borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--border)' }}>
        <Image src="/images/products/video.png" alt="Video Analytics" width={800} height={600} style={{ width: '100%', height: '220px', objectFit: 'cover', borderBottom: '1px solid var(--border)' }} />
        <div style={{ padding: '32px' }}>
          <h3 style={{ fontSize: '20px', fontWeight: '800', marginBottom: '8px' }}>Vision Analytics System</h3>
          <p style={{ fontSize: '15px', color: 'var(--muted)', lineHeight: '1.6', marginBottom: '24px' }}>Computer vision pipeline for real-time defect detection — built with PyTorch and FastAPI, currently in development and available for pilot deployment.</p>
        </div>
      </div>

      {/* RAG Support Agent */}
      <div className="project-card" style={{ background: 'var(--card)', borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--border)' }}>
        <Image src="/images/products/chatbot.png" alt="Custom Chatbot" width={800} height={600} style={{ width: '100%', height: '220px', objectFit: 'cover', borderBottom: '1px solid var(--border)' }} />
        <div style={{ padding: '32px' }}>
          <h3 style={{ fontSize: '20px', fontWeight: '800', marginBottom: '8px' }}>RAG Support Agent</h3>
          <p style={{ fontSize: '15px', color: 'var(--muted)', lineHeight: '1.6', marginBottom: '24px' }}>Context-aware conversational AI built on retrieval-augmented generation — connects to a knowledge base and answers queries with source-grounded responses.</p>
        </div>
      </div>

      {/* ResumeFilter AI */}
      <div className="project-card" style={{ background: 'var(--card)', borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--border)' }}>
        <Image src="/images/products/resume.png" alt="Resume Parser" width={800} height={600} style={{ width: '100%', height: '220px', objectFit: 'cover', borderBottom: '1px solid var(--border)' }} />
        <div style={{ padding: '32px' }}>
          <h3 style={{ fontSize: '20px', fontWeight: '800', marginBottom: '8px' }}>ResumeFilter AI — HR Automation</h3>
          <p style={{ fontSize: '15px', color: 'var(--muted)', lineHeight: '1.6', marginBottom: '24px' }}>Resume screening engine using TF-IDF scoring and PDF parsing — processes batches of resumes and ranks candidates against job criteria in minutes instead of hours.</p>
        </div>
      </div>

    </div>

    <div className="fu d3" style={{ marginTop: '48px', textAlign: 'center' }}>
      <a href="#process" className="sol-link" style={{ fontSize: '18px', fontWeight: '600' }}>See how we build →</a>
    </div>
  </div>
</section>

{/* ===== AI AGENTS ===== */}
<section id="agents">
  <div className="inner">
    <div className="tag fu" data-t="tag_agents">{t('tag_agents')}</div>
    <h2 className="h2 fu d1" data-t="h2_agents">{t('h2_agents')}</h2>
    <p className="lead fu d2" data-t="lead_agents">{t('lead_agents')}</p>
    <div className="agents-grid">
      <div className="agent-card fu">
        <div className="agent-status"><span className="agent-dot"></span><span data-t="agent_available">{t('agent_available')}</span></div>
        <div className="agent-name">Report Agent</div>
        <div className="agent-desc">Collects data from your sources, generates formatted PDF or Excel reports, and sends them on a schedule. Zero manual effort.</div>
      </div>
      <div className="agent-card fu d1">
        <div className="agent-status"><span className="agent-dot"></span><span data-t="agent_available">{t('agent_available')}</span></div>
        <div className="agent-name">Invoice Processor</div>
        <div className="agent-desc">Reads invoices from email or PDF, extracts structured data, validates entries, and pushes to your accounting or ERP system.</div>
      </div>
      <div className="agent-card fu d2">
        <div className="agent-status"><span className="agent-dot"></span><span data-t="agent_available">{t('agent_available')}</span></div>
        <div className="agent-name">Support Agent</div>
        <div className="agent-desc">Handles customer queries across channels using your knowledge base. Escalates to a human when it can't confidently answer.</div>
      </div>
      <div className="agent-card fu d3">
        <div className="agent-status"><span className="agent-dot"></span><span data-t="agent_available">{t('agent_available')}</span></div>
        <div className="agent-name">HR Assistant Agent</div>
        <div className="agent-desc">Screens resumes against your job criteria, schedules interviews, and answers HR policy questions — freeing your HR team for high-value work.</div>
      </div>
    </div>
  </div>
</section>

{/* ===== INDUSTRIES ===== */}
<section id="industries">
  <div className="inner">
    <div className="tag fu" data-t="tag_industries">{t('tag_industries')}</div>
    <h2 className="h2 fu d1" data-t="h2_industries">{t('h2_industries')}</h2>
    <p className="lead fu d2" data-t="lead_industries">{t('lead_industries')}</p>
    <div className="industry-grid fu d3" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))' }}>
      <div className="ind-card"><span className="ind-icon">🏥</span><div className="ind-name">Healthcare</div><div className="ind-desc">Diagnostics AI, patient data analytics, hospital operations</div></div>
      <div className="ind-card"><span className="ind-icon">🧑‍💼</span><div className="ind-name">HR & Recruitment</div><div className="ind-desc">Resume screening, candidate ranking, applicant tracking automation</div></div>
      <div className="ind-card"><span className="ind-icon">🏭</span><div className="ind-name">Manufacturing</div><div className="ind-desc">Quality control, predictive maintenance, production analytics</div></div>
      <div className="ind-card"><span className="ind-icon">🏦</span><div className="ind-name">Finance & Document Processing</div><div className="ind-desc">Fraud detection, risk modeling, document automation</div></div>
    </div>
  </div>
</section>



{/* ===== TECH STACK ===== */}
<section id="tech">
  <div className="inner">
    <div className="tag fu" data-t="tag_tech">{t('tag_tech')}</div>
    <h2 className="h2 fu d1" data-t="h2_tech">{t('h2_tech')}</h2>
    <p className="lead fu d2" data-t="lead_tech">{t('lead_tech')}</p>
    <div className="marquee-container fu d3">
      <div className="marquee-content">
        <div className="tech-pill"><span className="tech-dot" style={{'background': '#3572A5'}}></span>Python</div>
        <div className="tech-pill"><span className="tech-dot" style={{'background': '#EE4C2C'}}></span>PyTorch</div>
        <div className="tech-pill"><span className="tech-dot" style={{'background': '#FF6F00'}}></span>TensorFlow</div>
        <div className="tech-pill"><span className="tech-dot" style={{'background': '#5C3EE8'}}></span>OpenCV</div>
        <div className="tech-pill"><span className="tech-dot" style={{'background': '#FFD21E'}}></span>HuggingFace</div>
        <div className="tech-pill"><span className="tech-dot" style={{'background': '#9B59B6'}}></span>Scikit-Learn</div>
        <div className="tech-pill"><span className="tech-dot" style={{'background': '#61DAFB'}}></span>React</div>
        <div className="tech-pill"><span className="tech-dot" style={{'background': '#009688'}}></span>FastAPI</div>
        <div className="tech-pill"><span className="tech-dot" style={{'background': '#F2C811'}}></span>PowerBI</div>
        <div className="tech-pill"><span className="tech-dot" style={{'background': '#34A853'}}></span>LangChain</div>
        <div className="tech-pill"><span className="tech-dot" style={{'background': '#FF9900'}}></span>AWS</div>
        <div className="tech-pill"><span className="tech-dot" style={{'background': '#0089D6'}}></span>Azure AI</div>
        <div className="tech-pill"><span className="tech-dot" style={{'background': '#4285F4'}}></span>Google Cloud</div>
        <div className="tech-pill"><span className="tech-dot" style={{'background': '#2496ED'}}></span>Docker / K8s</div>
        <div className="tech-pill"><span className="tech-dot" style={{'background': '#336791'}}></span>PostgreSQL</div>
        <div className="tech-pill"><span className="tech-dot" style={{'background': '#FFCA28'}}></span>Apache Spark</div>
        {/* Duplicate for infinite loop */}
        <div className="tech-pill"><span className="tech-dot" style={{'background': '#3572A5'}}></span>Python</div>
        <div className="tech-pill"><span className="tech-dot" style={{'background': '#EE4C2C'}}></span>PyTorch</div>
        <div className="tech-pill"><span className="tech-dot" style={{'background': '#FF6F00'}}></span>TensorFlow</div>
        <div className="tech-pill"><span className="tech-dot" style={{'background': '#5C3EE8'}}></span>OpenCV</div>
        <div className="tech-pill"><span className="tech-dot" style={{'background': '#FFD21E'}}></span>HuggingFace</div>
        <div className="tech-pill"><span className="tech-dot" style={{'background': '#9B59B6'}}></span>Scikit-Learn</div>
        <div className="tech-pill"><span className="tech-dot" style={{'background': '#61DAFB'}}></span>React</div>
        <div className="tech-pill"><span className="tech-dot" style={{'background': '#009688'}}></span>FastAPI</div>
        <div className="tech-pill"><span className="tech-dot" style={{'background': '#F2C811'}}></span>PowerBI</div>
        <div className="tech-pill"><span className="tech-dot" style={{'background': '#34A853'}}></span>LangChain</div>
        <div className="tech-pill"><span className="tech-dot" style={{'background': '#FF9900'}}></span>AWS</div>
        <div className="tech-pill"><span className="tech-dot" style={{'background': '#0089D6'}}></span>Azure AI</div>
        <div className="tech-pill"><span className="tech-dot" style={{'background': '#4285F4'}}></span>Google Cloud</div>
        <div className="tech-pill"><span className="tech-dot" style={{'background': '#2496ED'}}></span>Docker / K8s</div>
        <div className="tech-pill"><span className="tech-dot" style={{'background': '#336791'}}></span>PostgreSQL</div>
        <div className="tech-pill"><span className="tech-dot" style={{'background': '#FFCA28'}}></span>Apache Spark</div>
      </div>
    </div>
    <div className="fu d4" style={{ marginTop: '40px', textAlign: 'center' }}>
      <a href="/products" className="btn-ghost" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
        See our upcoming products →
      </a>
    </div>
  </div>
</section>

{/* ===== WHY US ===== */}
<section id="why-us" style={{ background: 'var(--bg2)', padding: '40px 0 60px' }}>
  <div className="inner">
    <div className="tag fu">Why Moh-AI Tech?</div>
    <h2 className="h2 fu d1">Built for Trust & Reliability</h2>
    <div className="fu d2" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginTop: '32px' }}>
      <div style={{ background: 'var(--card)', padding: '32px', borderRadius: '12px', border: '1px solid var(--border)', boxShadow: 'var(--shadow)' }}>
        <div style={{ fontSize: '32px', marginBottom: '16px' }}>🎯</div>
        <h3 style={{ fontFamily: 'var(--syne)', fontSize: '18px', fontWeight: '700', marginBottom: '12px' }}>Practical AI</h3>
        <p style={{ fontSize: '14px', color: 'var(--muted)', lineHeight: '1.6' }}>No hype. No unnecessary features. We build solutions focused strictly on measurable business outcomes and real-world utility.</p>
      </div>
      <div style={{ background: 'var(--card)', padding: '32px', borderRadius: '12px', border: '1px solid var(--border)', boxShadow: 'var(--shadow)' }}>
        <div style={{ fontSize: '32px', marginBottom: '16px' }}>🤝</div>
        <h3 style={{ fontFamily: 'var(--syne)', fontSize: '18px', fontWeight: '700', marginBottom: '12px' }}>Founder-Led Delivery</h3>
        <p style={{ fontSize: '14px', color: 'var(--muted)', lineHeight: '1.6' }}>Direct communication with the engineer building your solution. No account managers, no lost context.</p>
      </div>
      <div style={{ background: 'var(--card)', padding: '32px', borderRadius: '12px', border: '1px solid var(--border)', boxShadow: 'var(--shadow)' }}>
        <div style={{ fontSize: '32px', marginBottom: '16px' }}>🛡️</div>
        <h3 style={{ fontFamily: 'var(--syne)', fontSize: '18px', fontWeight: '700', marginBottom: '12px' }}>Long-Term Partnership</h3>
        <p style={{ fontSize: '14px', color: 'var(--muted)', lineHeight: '1.6' }}>We provide full documentation, transparent code handovers, and reliable support long after your project is deployed.</p>
      </div>
    </div>
  </div>
</section>

{/* ===== PROCESS ===== */}
<section id="process">
  <div className="inner">
    <div className="tag fu" data-t="tag_process">{t('tag_process')}</div>
    <h2 className="h2 fu d1" data-t="h2_process">{t('h2_process')}</h2>
    <p className="lead fu d2" data-t="lead_process">{t('lead_process')}</p>
    <div className="steps fu d3">
      <div className="step">
        <div className="step-num-row"><span className="step-circle">1</span> Discover</div>
        <div className="step-title">Strategy & Scoping</div>
        <div className="step-desc">Free call to understand your goals, existing data, and the right AI approach. We produce a clear project blueprint before any money changes hands.</div>
      </div>
      <div className="step">
        <div className="step-num-row"><span className="step-circle">2</span> Design</div>
        <div className="step-title">Architecture & Data</div>
        <div className="step-desc">We design the system architecture, assess your data quality, and set up pipelines. You review and approve before development starts.</div>
      </div>
      <div className="step">
        <div className="step-num-row"><span className="step-circle">3</span> Build</div>
        <div className="step-title">Agile Development</div>
        <div className="step-desc">2-week sprint cycles. Every sprint ends with a live demo and written progress update. No surprises, no black boxes.</div>
      </div>
      <div className="step">
        <div className="step-num-row"><span className="step-circle">4</span> Deploy</div>
        <div className="step-title">Launch & Integration</div>
        <div className="step-desc">We deploy to your environment, integrate with existing systems, and run a handover session with your team. Full documentation included.</div>
      </div>
      <div className="step">
        <div className="step-num-row"><span className="step-circle">5</span> Support</div>
        <div className="step-title">Monitor & Maintain</div>
        <div className="step-desc">Ongoing monitoring, performance checks, and model updates as your data evolves. Support plans available post-delivery.</div>
      </div>
    </div>
  </div>
</section>

{/* ===== GLOBAL REACH ===== */}
<section id="global">
  <div className="inner">
    <div className="tag fu" data-t="tag_global">{t('tag_global')}</div>
    <h2 className="h2 fu d1" data-t="h2_global">{t('h2_global')}</h2>
    <p className="lead fu d2" data-t="lead_global">{t('lead_global')}</p>
    <div className="global-grid fu d3">
      <div className="global-text">
        <h3 style={{'fontFamily': 'var(--syne)', 'fontSize': '22px', 'fontWeight': '700', 'color': 'var(--text)', 'marginBottom': '14px', 'letterSpacing': '-.4px'}}>Why work with an <em style={{'color': 'var(--accent)', 'fontStyle': 'normal'}}>India-based AI team?</em></h3>
        <p style={{'fontSize': '15px', 'color': 'var(--muted)', 'lineHeight': '1.65', 'marginBottom': '22px'}}>India has one of the world's largest pools of AI and software engineering talent. Working with an India-based team means access to that talent at a meaningful cost advantage — without compromising on quality or communication.</p>
        <ul className="why-list">
          <li>Significant cost advantage vs US / UK / European firms for equivalent skill</li>
          <li>English-fluent team — no communication barriers</li>
          <li>Flexible working hours to overlap with your timezone</li>
          <li>NDA, IP ownership, and contract-based engagement</li>
          <li>Weekly video calls, Slack updates, Jira tracking — full visibility</li>
          <li>Invoicing in INR, USD, AED, GBP, or EUR</li>
        </ul>
        <div style={{'marginTop': '24px', 'fontSize': '13px', 'color': 'var(--muted)', 'background': 'var(--bg3)', 'border': '1px solid var(--border)', 'borderRadius': '8px', 'padding': '14px', 'lineHeight': '1.6'}}>
          <strong style={{'color': 'var(--text)'}}>Languages spoken:</strong> English · Tamil<br />
          <strong style={{'color': 'var(--text)'}}>Open to clients from:</strong> Worldwide

        </div>
      </div>
      </div>
      
      {/* Table spans full width below */}
      <div className="card" style={{ gridColumn: '1 / -1', marginTop: '16px', padding: '0', overflow: 'hidden' }}>
        <div style={{ padding: '24px', borderBottom: '1px solid var(--border)' }}>
          <h3 style={{ fontSize: '20px', fontWeight: '700' }}>Flexible Engagement Options</h3>
        </div>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', minWidth: '600px', borderCollapse: 'collapse', textAlign: 'left' }}>
            <thead style={{ background: 'var(--bg2)', borderBottom: '2px solid var(--border)' }}>
              <tr>
                <th style={{ padding: '16px 24px', fontWeight: '700', color: 'var(--text)' }}>Model</th>
                <th style={{ padding: '16px 24px', fontWeight: '700', color: 'var(--text)' }}>Pricing Strategy</th>
                <th style={{ padding: '16px 24px', fontWeight: '700', color: 'var(--text)' }}>Best For</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: '1px solid var(--border)' }}>
                <td style={{ padding: '16px 24px', fontWeight: '600', color: 'var(--text)' }}>Fixed-Price Project</td>
                <td style={{ padding: '16px 24px', color: 'var(--muted)' }}>Milestone-Based Quote</td>
                <td style={{ padding: '16px 24px', color: 'var(--muted)' }}>Clearly defined MVPs, chatbots, and web launches.</td>
              </tr>
              <tr style={{ borderBottom: '1px solid var(--border)' }}>
                <td style={{ padding: '16px 24px', fontWeight: '600', color: 'var(--text)' }}>Monthly Retainer</td>
                <td style={{ padding: '16px 24px', color: 'var(--muted)' }}>Predictable Flat Fee</td>
                <td style={{ padding: '16px 24px', color: 'var(--muted)' }}>Continuous AI optimization, scaling, and ongoing support.</td>
              </tr>
              <tr style={{ borderBottom: '1px solid var(--border)' }}>
                <td style={{ padding: '16px 24px', fontWeight: '600', color: 'var(--text)' }}>Dedicated AI Team</td>
                <td style={{ padding: '16px 24px', color: 'var(--muted)' }}>On-Demand Product Squad</td>
                <td style={{ padding: '16px 24px', color: 'var(--muted)' }}>Full-scale custom AI product development and integration.</td>
              </tr>
              <tr>
                <td style={{ padding: '16px 24px', fontWeight: '600', color: 'var(--text)' }}>Consulting & Advisory</td>
                <td style={{ padding: '16px 24px', color: 'var(--muted)' }}>Hourly / Daily Rates</td>
                <td style={{ padding: '16px 24px', color: 'var(--muted)' }}>Architecture design, AI feasibility studies, and tech roadmaps.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div style={{ padding: '20px 24px', background: 'var(--bg2)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px', flexWrap: 'wrap' }}>
          <div style={{ color: 'var(--muted)', fontSize: '14px' }}>
            💡 Every engagement begins with a free, comprehensive scoping call. We provide a realistic, transparent estimate with zero obligation to proceed.
          </div>
          <a href="#contact" className="btn-primary" style={{ whiteSpace: 'nowrap' }}>Book a Free Strategy Call →</a>
        </div>
      </div>
    </div>
  </div>
</section>



{/* ===== CONTACT ===== */}
<section id="contact">
  <div className="inner">
    <div className="tag fu" data-t="tag_contact">{t('tag_contact')}</div>
    <h2 className="h2 fu d1" data-t="h2_contact">{t('h2_contact')}</h2>
    <p className="lead fu d2" data-t="lead_contact">{t('lead_contact')}</p>
    <div className="contact-grid fu d3">
      <div>
        <div className="contact-method">
          <div className="cmethod-icon">📧</div>
          <div>
            <div className="cmethod-lbl">Email</div>
            <div className="cmethod-val">info@moh-ai-tech.com</div>
          </div>
        </div>
        <div className="contact-method">
          <div className="cmethod-icon">📱</div>
          <div>
            <div className="cmethod-lbl">WhatsApp / Phone</div>
            <div className="cmethod-val">+91 9566852700</div>
          </div>
        </div>
        <div className="contact-method">
          <div className="cmethod-icon">📍</div>
          <div>
            <div className="cmethod-lbl">Location</div>
            <div className="cmethod-val">Namakkal, Tamil Nadu, India</div>
          </div>
        </div>
        <div className="contact-method">
          <div className="cmethod-icon">🌐</div>
          <div>
            <div className="cmethod-lbl">Availability</div>
            <div className="cmethod-val">Remote-first · Flexible timezones</div>
          </div>
        </div>
        <div style={{'marginTop': '28px', 'padding': '24px', 'background': 'var(--card)', 'border': '1px solid var(--border)', 'borderRadius': '14px', 'boxShadow': 'var(--shadow)'}}>
          <div style={{'fontFamily': 'var(--syne)', 'fontSize': '16px', 'fontWeight': '700', 'color': 'var(--text)', 'marginBottom': '10px'}}>Free 30-min Discovery Call</div>
          <div style={{'fontSize': '14px', 'color': 'var(--muted)', 'lineHeight': '1.6'}}>We'll review your business challenge, suggest the right AI approach, and give you a realistic scope estimate. No sales pressure, no generic pitch.</div>
          <div style={{'marginTop': '16px', 'fontSize': '13px', 'color': 'var(--muted2)'}}>✓ Objective assessment &nbsp; ✓ Technical depth &nbsp; ✓ No commitment required</div>
        </div>
      </div>
      <BookingForm />
    </div>

    <div className="cta-banner fu">
      <div className="cta-h" data-t="cta_h">{t('cta_h')}</div>
      <div className="cta-sub" data-t="cta_sub">{t('cta_sub')}</div>
      <div className="cta-btns">
        <a href="#contact" className="btn-primary" data-t="cta_btn1">{t('cta_btn1')}</a>
        <a href="mailto:info@moh-ai-tech.com" className="btn-ghost" data-t="cta_btn2">{t('cta_btn2')}</a>
      </div>
    </div>
  </div>
</section>

<Footer />
    </>
  );
}
