'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/components/i18n-provider';
import { BookingForm } from '@/components/booking-form';

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
        <span data-t="hero_h1_1">{t('hero_h1_1')}</span><br />
        <em data-t="hero_h1_2">{t('hero_h1_2')}</em>
      </h1>
      <p className="hero-sub fu d2" data-t="hero_sub">{t('hero_sub')}</p>
      
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

{/* ===== THE FUNNEL OF GROWTH ===== */}
<section id="funnel" style={{ background: 'var(--bg)', padding: '100px 0', borderBottom: '1px solid var(--border)' }}>
  <div className="inner">
    <div style={{ textAlign: 'center', marginBottom: '60px' }}>
      <div className="tag" style={{ marginBottom: '16px' }} data-t="tag_funnel">{t('tag_funnel') || 'Our Philosophy'}</div>
      <h2 className="h2 fu d1" data-t="h2_funnel">{t('h2_funnel') || 'The Funnel of Growth'}</h2>
      <p className="lead fu d2" style={{ maxWidth: '600px', margin: '0 auto' }} data-t="lead_funnel">
        {t('lead_funnel') || 'We translate high-level philosophy into practical steps for the end-user. You enter as a student, and leave as an industry pioneer.'}
      </p>
      <a href="/playbook" className="btn-ghost fu d3" style={{ marginTop: '24px', display: 'inline-block' }}>Read Our Full Playbook →</a>
    </div>

    <div className="global-grid">
      <div className="card fu d1" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
        <div style={{ width: '48px', height: '48px', background: 'rgba(99, 102, 241, 0.1)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px', color: 'var(--accent)', fontWeight: 'bold', fontSize: '20px' }}>1</div>
        <h3 className="card-h3" data-t="funnel_1_title">{t('funnel_1_title') || 'Learn with AI'}</h3>
        <p className="card-p" style={{ flexGrow: 1 }} data-t="funnel_1_desc">
          {t('funnel_1_desc') || 'The journey begins with comprehensive demystification. We systematically guide you through operational mechanics, stripping away fear and replacing it with technical confidence.'}
        </p>
      </div>

      <div className="card fu d2" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
        <div style={{ width: '48px', height: '48px', background: 'rgba(99, 102, 241, 0.1)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px', color: 'var(--accent)', fontWeight: 'bold', fontSize: '20px' }}>2</div>
        <h3 className="card-h3" data-t="funnel_2_title">{t('funnel_2_title') || 'Earn with AI'}</h3>
        <p className="card-p" style={{ flexGrow: 1 }} data-t="funnel_2_desc">
          {t('funnel_2_desc') || 'With technical comprehension comes direct application. Leverage our robust, stress-free software to streamline operations, reduce friction, and introduce high-margin automation for immediate financial return.'}
        </p>
      </div>

      <div className="card fu d3" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
        <div style={{ width: '48px', height: '48px', background: 'rgba(99, 102, 241, 0.1)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px', color: 'var(--accent)', fontWeight: 'bold', fontSize: '20px' }}>3</div>
        <h3 className="card-h3" data-t="funnel_3_title">{t('funnel_3_title') || 'Lead with AI'}</h3>
        <p className="card-p" style={{ flexGrow: 1 }} data-t="funnel_3_desc">
          {t('funnel_3_desc') || 'Transition from an adaptive consumer to an industry leader. Armed with continuous insights, you set new industry benchmarks and out-pace competitors relying on legacy paradigms.'}
        </p>
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

{/* ===== TRUST BAND ===== */}
<section id="trust">
  <div className="trust-inner">
    <div className="trust-label" data-t="trust_label">{t('trust_label')}</div>
    <div className="trust-pills">
      <div className="trust-pill"><span className="trust-pill-icon">🏢</span> MSME Registered</div>
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
    <h2 className="h2 fu d1" data-t="h2_solutions">{t('h2_solutions')}</h2>
    <p className="lead fu d2" data-t="lead_solutions">{t('lead_solutions')}</p>
    <div className="solutions-grid">
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
        <div className="sol-icon">👁️</div>
        <div className="sol-name">Vision Inspection System</div>
        <div className="sol-tagline">AI-powered quality control & video analytics</div>
        <div className="sol-desc">Computer Vision pipeline for real-time video or image analysis — detecting defects, monitoring safety compliance, or tracking objects in your environment.</div>
        <ul className="sol-feats">
          <li>Works with existing cameras or sensors</li>
          <li>Custom-trained for your specific defect types</li>
          <li>Edge or cloud deployment</li>
          <li>Alert system with dashboard</li>
        </ul>
        <a href="#contact" className="sol-link">Discuss this →</a>
        <div className="sol-note" data-t="sol_concept">{t('sol_concept')}</div>
      </div>
      <div className="sol-card fu d2">
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
        <div className="sol-icon">🌾</div>
        <div className="sol-name">Agriculture AI System</div>
        <div className="sol-tagline">Precision farming & crop intelligence</div>
        <div className="sol-desc">AI-powered crop monitoring, disease detection, and yield estimation — using satellite imagery, drone data, or field sensor inputs. Designed for Indian farming contexts.</div>
        <ul className="sol-feats">
          <li>Crop disease detection via image AI</li>
          <li>Weather-adaptive yield estimation</li>
          <li>Multilingual alerts (Tamil, Hindi, Telugu)</li>
          <li>WhatsApp or SMS delivery</li>
        </ul>
        <a href="#contact" className="sol-link">Discuss this →</a>
        <div className="sol-note" data-t="sol_concept">{t('sol_concept')}</div>
      </div>
      <div className="sol-card fu d1">
        <div className="sol-icon">🏥</div>
        <div className="sol-name">Medical Imaging AI</div>
        <div className="sol-tagline">Deep learning for diagnostic image analysis</div>
        <div className="sol-desc">Custom deep learning models for analyzing medical images — X-rays, retinal scans, histopathology — to assist clinicians with pattern detection. Developed in consultation with medical professionals.</div>
        <ul className="sol-feats">
          <li>Custom-trained for your image modality</li>
          <li>DICOM-compatible integration</li>
          <li>Explainable output for clinical review</li>
          <li>Built with data privacy as a priority</li>
        </ul>
        <a href="#contact" className="sol-link">Discuss this →</a>
        <div className="sol-note" data-t="sol_concept">{t('sol_concept')}</div>
      </div>
      <div className="sol-card fu d2">
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
    </div>
  </div>
</section>

{/* ===== PROJECT SHOWCASE ===== */}
<section id="projects" style={{ background: 'var(--bg)', padding: '88px 0' }}>
  <div className="inner">
    <div className="tag fu">Recent Work</div>
    <h2 className="h2 fu d1">Real Projects. Real Results.</h2>
    <p className="lead fu d2">A glimpse into some of the custom solution architectures we've engineered for our clients.</p>
    
    <div className="metrics-bar fu d3" style={{ display: 'flex', flexWrap: 'wrap', gap: '24px', margin: '40px 0', background: 'var(--card)', border: '1px solid var(--border)', borderRadius: '12px', padding: '32px', justifyContent: 'space-around' }}>
      <div style={{ textAlign: 'center' }}>
        <div style={{ fontSize: '32px', fontWeight: '800', color: '#000' }}>500+</div>
        <div style={{ fontSize: '14px', color: 'var(--muted)', marginTop: '8px' }}>CVs Processed in 4 Mins</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <div style={{ fontSize: '32px', fontWeight: '800', color: '#000' }}>98%</div>
        <div style={{ fontSize: '14px', color: 'var(--muted)', marginTop: '8px' }}>Vision Defect Accuracy</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <div style={{ fontSize: '32px', fontWeight: '800', color: '#000' }}>30+</div>
        <div style={{ fontSize: '14px', color: 'var(--muted)', marginTop: '8px' }}>Hours Saved/Week per Client</div>
      </div>
    </div>

    <div className="fu d3" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
      <div className="project-card" style={{ background: 'var(--card)', borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--border)' }}>
        <Image src="/images/products/ocr.png" alt="Document OCR Pipeline" width={800} height={600} style={{ width: '100%', height: '200px', objectFit: 'cover', borderBottom: '1px solid var(--border)' }} />
        <div style={{ padding: '20px' }}>
          <h3 style={{ fontSize: '16px', fontWeight: '700', marginBottom: '8px' }}>Smart Document Pipeline</h3>
          <p style={{ fontSize: '14px', color: 'var(--muted)', lineHeight: '1.5' }}>High-accuracy OCR for automated data extraction from legacy records.</p>
        </div>
      </div>
      <div className="project-card" style={{ background: 'var(--card)', borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--border)' }}>
        <Image src="/images/products/video.png" alt="Video Analytics" width={800} height={600} style={{ width: '100%', height: '200px', objectFit: 'cover', borderBottom: '1px solid var(--border)' }} />
        <div style={{ padding: '20px' }}>
          <h3 style={{ fontSize: '16px', fontWeight: '700', marginBottom: '8px' }}>Vision Analytics System</h3>
          <p style={{ fontSize: '14px', color: 'var(--muted)', lineHeight: '1.5' }}>Real-time computer vision pipeline for automated defect detection.</p>
        </div>
      </div>
      <div className="project-card" style={{ background: 'var(--card)', borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--border)' }}>
        <Image src="/images/products/chatbot.png" alt="Custom Chatbot" width={800} height={600} style={{ width: '100%', height: '200px', objectFit: 'cover', borderBottom: '1px solid var(--border)' }} />
        <div style={{ padding: '20px' }}>
          <h3 style={{ fontSize: '16px', fontWeight: '700', marginBottom: '8px' }}>RAG Support Agent</h3>
          <p style={{ fontSize: '14px', color: 'var(--muted)', lineHeight: '1.5' }}>Context-aware conversational AI integrated directly into client workflows.</p>
        </div>
      </div>
      <div className="project-card" style={{ background: 'var(--card)', borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--border)' }}>
        <Image src="/images/products/resume.png" alt="Resume Parser" width={800} height={600} style={{ width: '100%', height: '200px', objectFit: 'cover', borderBottom: '1px solid var(--border)' }} />
        <div style={{ padding: '20px' }}>
          <h3 style={{ fontSize: '16px', fontWeight: '700', marginBottom: '8px' }}>HR Automation</h3>
          <p style={{ fontSize: '14px', color: 'var(--muted)', lineHeight: '1.5' }}>Automated resume parsing and candidate ranking intelligence.</p>
        </div>
      </div>
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
      <div className="agent-card fu">
        <div className="agent-status"><span className="agent-dot"></span><span data-t="agent_available">{t('agent_available')}</span></div>
        <div className="agent-name">Tender Scout</div>
        <div className="agent-desc">Scans procurement portals daily, identifies matching tenders by your criteria, and delivers concise summaries to your inbox or WhatsApp.</div>
      </div>
      <div className="agent-card fu d1">
        <div className="agent-status"><span className="agent-dot"></span><span data-t="agent_available">{t('agent_available')}</span></div>
        <div className="agent-name">Sales Intelligence Agent</div>
        <div className="agent-desc">Monitors your CRM, predicts deal probability, identifies at-risk accounts, and surfaces next-best-action suggestions to your sales team.</div>
      </div>
      <div className="agent-card fu d2">
        <div className="agent-status"><span className="agent-dot"></span><span data-t="agent_available">{t('agent_available')}</span></div>
        <div className="agent-name">Inventory Optimizer</div>
        <div className="agent-desc">Predicts stock requirements, raises purchase orders automatically, and alerts you before stockouts happen — based on historical and seasonal patterns.</div>
      </div>
      <div className="agent-card fu d3">
        <div className="agent-status"><span className="agent-dot"></span><span data-t="agent_available">{t('agent_available')}</span></div>
        <div className="agent-name">Document Intelligence Agent</div>
        <div className="agent-desc">Reads, classifies, extracts, and routes documents — contracts, forms, certificates — into your systems with structured data output.</div>
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
    <div className="industry-grid fu d3">
      <div className="ind-card"><span className="ind-icon">🏥</span><div className="ind-name">Healthcare</div><div className="ind-desc">Diagnostics AI, patient data analytics, hospital operations</div></div>
      <div className="ind-card"><span className="ind-icon">🌾</span><div className="ind-name">Agriculture</div><div className="ind-desc">Crop monitoring, disease detection, precision farming</div></div>
      <div className="ind-card"><span className="ind-icon">🏭</span><div className="ind-name">Manufacturing</div><div className="ind-desc">Quality control, predictive maintenance, production analytics</div></div>
      <div className="ind-card"><span className="ind-icon">🏦</span><div className="ind-name">Finance</div><div className="ind-desc">Fraud detection, risk modeling, KYC automation</div></div>
      <div className="ind-card"><span className="ind-icon">🎓</span><div className="ind-name">Education</div><div className="ind-desc">Adaptive learning, assessment AI, student analytics</div></div>
      <div className="ind-card"><span className="ind-icon">🚚</span><div className="ind-name">Logistics</div><div className="ind-desc">Route optimization, demand forecasting, tracking AI</div></div>
      <div className="ind-card"><span className="ind-icon">🛒</span><div className="ind-name">Retail & E-commerce</div><div className="ind-desc">Recommendations, inventory AI, demand sensing</div></div>
      <div className="ind-card"><span className="ind-icon">⚡</span><div className="ind-name">Energy</div><div className="ind-desc">Consumption prediction, fault detection, smart metering</div></div>
      <div className="ind-card"><span className="ind-icon">🏗️</span><div className="ind-name">Construction</div><div className="ind-desc">Safety monitoring, project analytics, cost forecasting</div></div>
      <div className="ind-card"><span className="ind-icon">🏛️</span><div className="ind-name">Public Sector Solutions</div><div className="ind-desc">Traffic, waste management, public service AI — future focus</div></div>
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
      <a href="https://github.com/MohanKumar2002" target="_blank" rel="noopener noreferrer" className="btn-ghost" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
        <svg height="20" width="20" viewBox="0 0 16 16" fill="currentColor"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>
        Explore our open-source boilerplates and pipeline structures directly on GitHub.
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
          <strong style={{'color': 'var(--text)'}}>Languages spoken:</strong> English · Tamil · Hindi<br />
          <strong style={{'color': 'var(--text)'}}>Open to clients from:</strong> India, UAE, Saudi Arabia, UK, US, Singapore, Germany, Australia, and more — anywhere with a good internet connection.
        </div>
      </div>
      <div className="engage-card">
        <div className="engage-title">Engagement Options</div>
        <div className="engage-row"><div className="engage-label">Fixed-Price Project</div><div className="engage-val">Custom Quote</div></div>
        <div className="engage-row"><div className="engage-label">Monthly Retainer</div><div className="engage-val">Custom Quote</div></div>
        <div className="engage-row"><div className="engage-label">Dedicated AI Team</div><div className="engage-val">On Request</div></div>
        <div className="engage-row"><div className="engage-label">Consulting / Advisory</div><div className="engage-val">Hourly / Daily</div></div>
        <div className="engage-note">
          💡 Every project starts with a free scoping call. We'll give you an honest estimate — no pressure to proceed.
        </div>
        <div style={{'marginTop': '22px'}}>
          <a href="#contact" className="btn-primary" style={{'width': '100%', 'justifyContent': 'center'}} data-t="hero_btn1">{t('hero_btn1')}</a>
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
          <div style={{'fontSize': '14px', 'color': 'var(--muted)', 'lineHeight': '1.6'}}>We'll review your business challenge, suggest the right AI approach, and give you an honest scope estimate. No sales pressure, no generic pitch.</div>
          <div style={{'marginTop': '16px', 'fontSize': '13px', 'color': 'var(--muted2)'}}>✓ Honest assessment &nbsp; ✓ Technical depth &nbsp; ✓ No commitment required</div>
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

<footer>
  <div className="footer-inner">
    <div className="footer-grid">
      <div>
        <a href="#" className="logo">
          <Image src="/logo.png" alt="Moh-AI Tech Logo" width={100} height={42} style={{ height: "42px", width: "auto", display: "block", objectFit: "contain" }} />
          <span className="grad-text" style={{ marginLeft: "8px", fontWeight: "800", fontSize: "18px", letterSpacing: "1px" }}>MOH-AI TECH</span>
          </a>
        <div className="footer-tagline">Custom AI, ML, and Data Intelligence solutions built honestly — for businesses and institutions worldwide. Based in Namakkal, India.</div>
      </div>
      <div>
        <div className="footer-col-title">Services</div>
        <ul className="footer-links">
          <li><a href="#services">AI Agents</a></li>
          <li><a href="#services">Machine Learning</a></li>
          <li><a href="#services">Computer Vision</a></li>
          <li><a href="#services">PowerBI / BI</a></li>
          <li><a href="#services">NLP & Language AI</a></li>
          <li><a href="#services">Consulting</a></li>
        </ul>
      </div>
      <div>
        <div className="footer-col-title">Solution Architectures</div>
        <ul className="footer-links">
          <li><a href="#solutions">Enterprise AI Brain</a></li>
          <li><a href="#solutions">Vision Inspection</a></li>
          <li><a href="#solutions">Data Intelligence Suite</a></li>
          <li><a href="#solutions">Agriculture AI</a></li>
          <li><a href="#solutions">Medical Imaging AI</a></li>
          <li><a href="#solutions">Customer Service AI</a></li>
        </ul>
      </div>
      <div>
        <div className="footer-col-title">Company & Connect</div>
        <ul className="footer-links">
          <li><a href="#industries">Industries</a></li>
          <li><a href="/products">Upcoming Products</a></li>
          <li><a href="https://www.linkedin.com/company/107518449/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          <li><a href="https://www.instagram.com/moh_ai_tech/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
        </ul>
      </div>
    </div>
    <div className="footer-bottom">
      <div className="footer-copy">© {new Date().getFullYear()} Moh-AI Tech. MSME Registered. Namakkal, Tamil Nadu, India.</div>
      <div className="footer-legal">
        <a href="/privacy">Privacy Policy</a>
        <a href="/terms">Terms of Service</a>
      </div>
    </div>
  </div>
</footer>
    </>
  );
}
