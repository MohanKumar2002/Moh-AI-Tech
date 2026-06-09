'use client';

import React, { useEffect } from 'react';
import { useLanguage } from '@/components/i18n-provider';
import { ContactForm } from '@/components/ContactForm';

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
          <div className="hv-row"><span className="hv-label">AI / ML</span><span className="hv-badge hv-green">✓ Ready</span></div>
          <div className="hv-row"><span className="hv-label">PowerBI</span><span className="hv-badge hv-green">✓ Ready</span></div>
          <div className="hv-row"><span className="hv-label">Custom LLM</span><span className="hv-badge hv-blue">✓ Ready</span></div>
          <div className="hv-row"><span className="hv-label">IoT Edge</span><span className="hv-badge hv-gray">On Request</span></div>
        </div>
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
      <div className="trust-pill"><span className="trust-pill-icon">🤖</span> AI Development</div>
      <div className="trust-pill"><span className="trust-pill-icon">⚛️</span> React + FastAPI Experts</div>
      <div className="trust-pill"><span className="trust-pill-icon">🧠</span> Custom AI Solutions</div>
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
    <div className="services-grid fu d3">
      <div className="svc-card">
        <div className="svc-icon">🤖</div>
        <div className="svc-title">AI Agents & Automation</div>
        <div className="svc-desc">Autonomous intelligent agents that handle complex workflows — data processing, reporting, customer interactions — built to your exact requirements.</div>
        <div className="svc-tags">
          <span className="svc-tag">LLM Integration</span>
          <span className="svc-tag">RAG Systems</span>
          <span className="svc-tag">Multi-Agent</span>
          <span className="svc-tag">Workflow Automation</span>
        </div>
      </div>
      <div className="svc-card">
        <div className="svc-icon">📈</div>
        <div className="svc-title">Machine Learning</div>
        <div className="svc-desc">Custom ML models for prediction, classification, clustering, and anomaly detection — trained on your data, evaluated rigorously.</div>
        <div className="svc-tags">
          <span className="svc-tag">Predictive Models</span>
          <span className="svc-tag">Classification</span>
          <span className="svc-tag">Anomaly Detection</span>
          <span className="svc-tag">Forecasting</span>
        </div>
      </div>
      <div className="svc-card">
        <div className="svc-icon">🧠</div>
        <div className="svc-title">Deep Learning</div>
        <div className="svc-desc">Neural architectures for speech, text, time series, and multi-modal data. Transformers, CNNs, and fine-tuning of foundation models.</div>
        <div className="svc-tags">
          <span className="svc-tag">Transformers</span>
          <span className="svc-tag">CNN / RNN</span>
          <span className="svc-tag">Fine-tuning</span>
          <span className="svc-tag">Transfer Learning</span>
        </div>
      </div>
      <div className="svc-card">
        <div className="svc-icon">👁️</div>
        <div className="svc-title">Computer Vision</div>
        <div className="svc-desc">Object detection, OCR, face recognition, defect inspection, video analytics — real-world vision AI for production environments.</div>
        <div className="svc-tags">
          <span className="svc-tag">Object Detection</span>
          <span className="svc-tag">OCR</span>
          <span className="svc-tag">Video Analytics</span>
          <span className="svc-tag">Quality Inspection</span>
        </div>
      </div>
      <div className="svc-card">
        <div className="svc-icon">📊</div>
        <div className="svc-title">PowerBI & Data Intelligence</div>
        <div className="svc-desc">We ingest your raw company data, model it properly, and deliver interactive PowerBI dashboards and data pipelines your team will actually use.</div>
        <div className="svc-tags">
          <span className="svc-tag">PowerBI</span>
          <span className="svc-tag">ETL Pipelines</span>
          <span className="svc-tag">Data Modeling</span>
          <span className="svc-tag">KPI Dashboards</span>
        </div>
      </div>
      <div className="svc-card">
        <div className="svc-icon">💬</div>
        <div className="svc-title">NLP & Language AI</div>
        <div className="svc-desc">Chatbots, document intelligence, sentiment analysis, and summarization — with multilingual support including Tamil, Hindi, and Arabic.</div>
        <div className="svc-tags">
          <span className="svc-tag">Chatbots</span>
          <span className="svc-tag">Document AI</span>
          <span className="svc-tag">Multilingual</span>
          <span className="svc-tag">Sentiment Analysis</span>
        </div>
      </div>
      <div className="svc-card">
        <div className="svc-icon">🌐</div>
        <div className="svc-title">IoT & Edge AI</div>
        <div className="svc-desc">AI inference on devices and sensors — for smart manufacturing, agriculture monitoring, and real-time edge processing.</div>
        <div className="svc-tags">
          <span className="svc-tag">Edge Inference</span>
          <span className="svc-tag">IoT Integration</span>
          <span className="svc-tag">Real-time Processing</span>
          <span className="svc-tag">Embedded AI</span>
        </div>
      </div>
      <div className="svc-card">
        <div className="svc-icon">🔧</div>
        <div className="svc-title">AI Consulting & Upskilling</div>
        <div className="svc-desc">Not sure where to start? We help you assess your data landscape, identify the right AI approach, and upskill your internal team to manage it.</div>
        <div className="svc-tags">
          <span className="svc-tag">AI Strategy</span>
          <span className="svc-tag">Data Audit</span>
          <span className="svc-tag">Team Training</span>
          <span className="svc-tag">Roadmap Planning</span>
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
      <div className="ind-card"><span className="ind-icon">🌆</span><div className="ind-name">Urban Infrastructure</div><div className="ind-desc">Traffic, waste management, public service AI — future focus</div></div>
    </div>
  </div>
</section>

{/* ===== TECH STACK ===== */}
<section id="tech">
  <div className="inner">
    <div className="tag fu" data-t="tag_tech">{t('tag_tech')}</div>
    <h2 className="h2 fu d1" data-t="h2_tech">{t('h2_tech')}</h2>
    <p className="lead fu d2" data-t="lead_tech">{t('lead_tech')}</p>
    <div className="tech-grid fu d3">
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

{/* ===== PRICING ===== */}
<section id="pricing">
  <div className="inner">
    <div className="tag fu" data-t="tag_pricing">{t('tag_pricing')}</div>
    <h2 className="h2 fu d1" data-t="h2_pricing">{t('h2_pricing')}</h2>
    <p className="lead fu d2" data-t="lead_pricing">{t('lead_pricing')}</p>
    <div className="pricing-grid fu d3">
      <div className="price-card">
        <div className="price-tier">Starter</div>
        <div className="price-amount">Custom<span> quote</span></div>
        <div className="price-sub">Best for small businesses, pilots, and MVPs</div>
        <ul className="price-feats">
          <li>1 focused AI model or dashboard</li>
          <li>Up to 3 data sources</li>
          <li>3–5 week typical delivery</li>
          <li>2 revision rounds included</li>
          <li>30-day post-delivery support</li>
          <li>Video handover session</li>
        </ul>
        <a href="#contact" className="btn-ghost" style={{'width': '100%', 'justifyContent': 'center'}}>Get a Quote</a>
      </div>
      <div className="price-card featured">
        <div className="price-pop">Popular</div>
        <div className="price-tier">Business</div>
        <div className="price-amount">Custom<span> quote</span></div>
        <div className="price-sub">Monthly retainer — ongoing AI development</div>
        <ul className="price-feats">
          <li>Dedicated 2-person AI team</li>
          <li>Multiple parallel workstreams</li>
          <li>Bi-weekly sprint demos</li>
          <li>Unlimited revision rounds</li>
          <li>Priority support response</li>
          <li>Monthly strategy review</li>
        </ul>
        <a href="#contact" className="btn-primary" style={{'width': '100%', 'justifyContent': 'center'}}>Book a Call</a>
      </div>
      <div className="price-card">
        <div className="price-tier">Enterprise</div>
        <div className="price-amount">Custom<span> quote</span></div>
        <div className="price-sub">For larger organizations and long-term partnerships</div>
        <ul className="price-feats">
          <li>Dedicated extended team</li>
          <li>Full project management included</li>
          <li>On-site visits possible (India)</li>
          <li>SLA-based support agreement</li>
          <li>Full compliance documentation</li>
          <li>Training & knowledge transfer</li>
        </ul>
        <a href="#contact" className="btn-ghost" style={{'width': '100%', 'justifyContent': 'center'}}>Contact Us</a>
      </div>
    </div>
    <div style={{'textAlign': 'center', 'marginTop': '28px', 'fontSize': '14px', 'color': 'var(--muted)'}}>
      All prices depend on scope, complexity, and timeline. We'll give you a detailed, honest estimate after the free scoping call.
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
            <div className="cmethod-val">info@mohaitech.com</div>
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
      <ContactForm />
    </div>

    <div className="cta-banner fu">
      <div className="cta-h" data-t="cta_h">{t('cta_h')}</div>
      <div className="cta-sub" data-t="cta_sub">{t('cta_sub')}</div>
      <div className="cta-btns">
        <a href="#contact" className="btn-primary" data-t="cta_btn1">{t('cta_btn1')}</a>
        <a href="mailto:info@mohaitech.com" className="btn-ghost" data-t="cta_btn2">{t('cta_btn2')}</a>
      </div>
    </div>
  </div>
</section>

<footer>
  <div className="footer-inner">
    <div className="footer-grid">
      <div>
        <a href="#" className="logo">
          <img src="/logo.png" alt="Moh-AI Tech Logo" style={{ height: "42px", width: "auto", display: "block", objectFit: "contain" }} />
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
        <div className="footer-col-title">Solutions</div>
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
          <li><a href="#pricing">Pricing</a></li>
          <li><a href="https://www.linkedin.com/company/107518449/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          <li><a href="https://www.instagram.com/moh_ai_tech/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
          <li><a href="https://github.com/MohanKumar2002/Moh-AI-Tech" target="_blank" rel="noopener noreferrer">GitHub</a></li>
        </ul>
      </div>
    </div>
    <div className="footer-bottom">
      <div className="footer-copy">© 2025 Moh-AI Tech. MSME Registered. Namakkal, Tamil Nadu, India.</div>
      <div className="footer-legal">
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Service</a>
      </div>
    </div>
  </div>
</footer>
    </>
  );
}
