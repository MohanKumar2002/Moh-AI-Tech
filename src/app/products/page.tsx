'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  FileText, 
  ArrowRight, 
  Sparkles, 
  Bot, 
  Play, 
  ShieldCheck, 
  CheckCircle2, 
  ExternalLink,
  Cpu,
  Layers,
  Eye,
  MessageSquare,
  Activity,
  FileCheck,
  Zap,
  Clock,
  Filter
} from 'lucide-react';
import Footer from '@/components/layout/footer';

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'industrial' | 'finance' | 'agents' | 'tools'>('all');

  const products = [
    {
      id: 'taxflow',
      category: 'finance',
      categoryLabel: 'Accounting & CA Suite',
      badge: '⭐ FLAGSHIP · LIVE VIDEO',
      badgeColor: '#0284c7',
      title: 'Moh-AI TaxFlow',
      description: 'Autonomous tax & compliance automation for Chartered Accountants and corporate controllers. Performs 1-500 invoice batch OCR extraction, GSTR-2B ↔ Books reconciliation, 1-click WhatsApp client notices, and Section 40A(3) cash audit flags.',
      highlights: [
        'Invoice AI: Instant Tally XML & Excel export',
        'GST Reco (2B): Sec 16(2)(aa) ITC at risk recovery',
        'Client Follow-up: 1-click WhatsApp compliance alerts',
        'Audit Intelligence: Cash & TDS threshold scanning'
      ],
      mediaType: 'video',
      videoSrc: '/videos/taxproductdemo.mp4',
      posterSrc: '/images/products/taxflow-poster.jpg',
      primaryLink: '/taxflow',
      primaryText: 'View Product Page & Demo',
      secondaryLink: '/contact?service=taxflow',
      secondaryText: 'Book Pilot'
    },
    {
      id: 'visioninspect',
      category: 'industrial',
      categoryLabel: 'Edge Machine Vision',
      badge: '🏭 INDUSTRIAL EDGE AI',
      badgeColor: '#10b981',
      title: 'VisionInspect Industrial AI',
      description: 'Sub-millimeter optical defect inspection operating at line speed (<50ms inference). Runs 100% on-premise on NVIDIA Jetson / industrial IPCs with GigE cameras and 24V PLC rejection solenoid triggers.',
      highlights: [
        'Hairline scratch, crack & burr detection (<0.08mm)',
        'Sub-pixel dimensional check & thread verification',
        'Direct PLC communication: Modbus TCP / OPC-UA / Digital I/O',
        'Air-gapped operation with zero cloud dependency'
      ],
      mediaType: 'image',
      imageSrc: '/images/general/industrial_hero.png',
      primaryLink: '/visioninspect',
      primaryText: 'Explore VisionInspect',
      secondaryLink: '/contact?service=visioninspect',
      secondaryText: 'Request Feasibility'
    },
    {
      id: 'documind',
      category: 'finance',
      categoryLabel: 'Document AI & OCR',
      badge: '📄 MULTIMODAL INTELLIGENCE',
      badgeColor: '#00B4D8',
      title: 'Docu-Mind AI',
      description: 'Enterprise document intelligence system that reads complex multi-page contracts, freight bills, handwritten forms, and technical datasheets, converting them into structured JSON & database schemas.',
      highlights: [
        'Handwriting & corrupted scan OCR engine',
        'Complex table extraction with multi-tier nested line items',
        'Zero-shot custom document model adaptation',
        'Private cloud and secure on-premise deployment'
      ],
      mediaType: 'image',
      imageSrc: '/images/products/documind.png',
      primaryLink: '/documind',
      primaryText: 'Explore DocuMind',
      secondaryLink: '/documind/pricing',
      secondaryText: 'Pricing'
    },
    {
      id: 'hr-recruiter',
      category: 'agents',
      categoryLabel: 'Autonomous Agent',
      badge: '🤖 AUTONOMOUS HR AGENT',
      badgeColor: '#8B5CF6',
      title: 'Moh-AI Recruiter AI',
      description: 'Autonomous talent acquisition agent that parses resumes semantically, conducts conversational pre-screening interviews, and ranks candidates against job requirements without keyword bias.',
      highlights: [
        'Deep vector skill parsing (beyond brittle keywords)',
        'Natural language ATS command center',
        'Compression of time-to-interview metric by 75%',
        '100% Private BYOK / Air-gapped model isolation'
      ],
      mediaType: 'video',
      videoSrc: '/videos/hr-demo.webm',
      posterSrc: '/images/products/hr-poster.jpg',
      primaryLink: '/hr-recruiter',
      primaryText: 'View Recruiter Agent & Demo',
      secondaryLink: '/contact?service=hr-recruiter',
      secondaryText: 'Request HR Demo'
    },
    {
      id: 'whatsapp-autodesk',
      category: 'tools',
      categoryLabel: 'Plug-and-Play Customer Ops',
      badge: '⚡ 24/7 WHATSAPP BOT',
      badgeColor: '#25D366',
      title: 'Moh-AI WhatsApp AutoDesk',
      description: 'Official Meta WhatsApp Business Cloud API bot that answers inbound customer inquiries, shares catalogs, qualifies quotes, and routes priority buyers to human sales staff in under 3 seconds.',
      highlights: [
        'Zero risk of number ban (Official Meta Cloud API)',
        'Instant product catalog and pricing lookups',
        'Seamless 1-click handover to human agents',
        'Syncs directly to CRM, Google Sheets, or ERP'
      ],
      mediaType: 'image',
      imageSrc: '/images/products/chatbot.png',
      primaryLink: '/whatsapp-autodesk',
      primaryText: 'Test WhatsApp Simulator',
      secondaryLink: '/contact?service=whatsapp-autodesk',
      secondaryText: 'Get Bot Setup'
    },
    {
      id: 'machinaguard',
      category: 'industrial',
      categoryLabel: 'IoT Predictive Maintenance',
      badge: '⚙️ PREDICTIVE MAINTENANCE',
      badgeColor: '#f59e0b',
      title: 'MachinaGuard Predictive IoT',
      description: 'Time-series sensor analytics for industrial motors, CNC spindles, and gearboxes. Analyzes vibration, acoustic emission, and thermal telemetry to forecast bearing failure 72 hours before shutdown.',
      highlights: [
        'Bearing wear & rotor unbalance anomaly models',
        'Local edge processing on vibration accelerometer data',
        'Integration with factory SCADA and Modbus telemetry',
        'Automated preventative maintenance work order tickets'
      ],
      mediaType: 'image',
      imageSrc: '/images/products/ocr.png',
      primaryLink: '/industrial-ai',
      primaryText: 'Explore Industrial Maintenance',
      secondaryLink: '/contact?service=machinaguard',
      secondaryText: 'Request Assessment'
    },
    {
      id: 'lexiguard',
      category: 'finance',
      categoryLabel: 'Legal & Risk Intelligence',
      badge: '⚖️ CONTRACT COMPLIANCE',
      badgeColor: '#ec4899',
      title: 'LexiGuard Contract Risk AI',
      description: 'Autonomous legal risk auditor for vendor MSAs, lease agreements, and NDAs. Scans contracts against Indian Contract Law and standard company playbooks to highlight aggressive liability and indemnity clauses.',
      highlights: [
        'Automated redline clause suggestions and risk tiering',
        'Deviations flagged against approved organizational templates',
        'Unlimited liability and uncapped indemnity alerts',
        'Zero data training retention for absolute confidentiality'
      ],
      mediaType: 'image',
      imageSrc: '/images/products/text_sum.png',
      primaryLink: '/contact?service=lexiguard',
      primaryText: 'Request Legal Pilot',
      secondaryLink: '/contact?service=lexiguard',
      secondaryText: 'Consultation'
    },
    {
      id: 'quickinvoice',
      category: 'tools',
      categoryLabel: 'Plug-and-Play Micro-Tool',
      badge: '⚡ QUICK UTILITY',
      badgeColor: '#0ea5e9',
      title: 'QuickInvoice OCR Lite',
      description: 'Single-purpose, lightning-fast invoice scanner. Drag and drop any supplier bill or receipt to get an instant Excel breakdown or Tally-compliant XML voucher within 5 seconds.',
      highlights: [
        'Drag-and-drop instant invoice parsing',
        'Clean Excel (.xlsx) and Tally XML export',
        'Accurate GSTIN, tax split, and total balance extraction',
        'Runs in browser with secure encrypted backend'
      ],
      mediaType: 'image',
      imageSrc: '/images/products/video.png',
      primaryLink: '/contact?service=quickinvoice',
      primaryText: 'Try QuickInvoice',
      secondaryLink: '/contact?service=quickinvoice',
      secondaryText: 'Get License'
    }
  ];

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)', color: 'var(--text)' }}>

      {/* Header */}
      <section style={{ padding: '140px 5% 60px', textAlign: 'center', background: 'radial-gradient(ellipse at 50% 0%, rgba(2, 132, 199, 0.1) 0%, transparent 70%)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '960px', margin: '0 auto' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', borderRadius: '9999px', background: 'rgba(2, 132, 199, 0.1)', border: '1px solid rgba(2, 132, 199, 0.3)', color: '#0284c7', fontSize: '13px', fontWeight: '700', marginBottom: '20px' }}>
            <Sparkles size={14} />
            MOH-AI TECH · PRACTICAL AI SOFTWARE SUITE
          </div>
          
          <h1 style={{ fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: '900', letterSpacing: '-0.02em', margin: '0 0 20px', lineHeight: 1.15 }}>
            From Plug-and-Play Tools to Industrial Flagships
          </h1>
          
          <p style={{ fontSize: 'clamp(16px, 2vw, 19px)', color: 'var(--text2)', maxWidth: '720px', margin: '0 auto', lineHeight: 1.6 }}>
            Deterministic, secure AI software built from Tamil Nadu for businesses globally. Every system is engineered with strict data sovereignty, verifiable benchmarks, and zero exaggerated claims.
          </p>

          {/* Category Filter Pills */}
          <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '36px' }}>
            <button
              onClick={() => setActiveCategory('all')}
              style={{
                background: activeCategory === 'all' ? 'var(--accent)' : 'var(--card)',
                color: activeCategory === 'all' ? '#fff' : 'var(--text)',
                border: `1px solid ${activeCategory === 'all' ? 'var(--accent)' : 'var(--border)'}`,
                padding: '10px 18px',
                borderRadius: '9999px',
                fontSize: '13px',
                fontWeight: '700',
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
            >
              All Products ({products.length})
            </button>

            <button
              onClick={() => setActiveCategory('industrial')}
              style={{
                background: activeCategory === 'industrial' ? 'var(--accent)' : 'var(--card)',
                color: activeCategory === 'industrial' ? '#fff' : 'var(--text)',
                border: `1px solid ${activeCategory === 'industrial' ? 'var(--accent)' : 'var(--border)'}`,
                padding: '10px 18px',
                borderRadius: '9999px',
                fontSize: '13px',
                fontWeight: '700',
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
            >
              Industrial & Edge AI (2)
            </button>

            <button
              onClick={() => setActiveCategory('finance')}
              style={{
                background: activeCategory === 'finance' ? 'var(--accent)' : 'var(--card)',
                color: activeCategory === 'finance' ? '#fff' : 'var(--text)',
                border: `1px solid ${activeCategory === 'finance' ? 'var(--accent)' : 'var(--border)'}`,
                padding: '10px 18px',
                borderRadius: '9999px',
                fontSize: '13px',
                fontWeight: '700',
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
            >
              Accounting, Tax & Legal (3)
            </button>

            <button
              onClick={() => setActiveCategory('agents')}
              style={{
                background: activeCategory === 'agents' ? 'var(--accent)' : 'var(--card)',
                color: activeCategory === 'agents' ? '#fff' : 'var(--text)',
                border: `1px solid ${activeCategory === 'agents' ? 'var(--accent)' : 'var(--border)'}`,
                padding: '10px 18px',
                borderRadius: '9999px',
                fontSize: '13px',
                fontWeight: '700',
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
            >
              Autonomous Agents (1)
            </button>

            <button
              onClick={() => setActiveCategory('tools')}
              style={{
                background: activeCategory === 'tools' ? 'var(--accent)' : 'var(--card)',
                color: activeCategory === 'tools' ? '#fff' : 'var(--text)',
                border: `1px solid ${activeCategory === 'tools' ? 'var(--accent)' : 'var(--border)'}`,
                padding: '10px 18px',
                borderRadius: '9999px',
                fontSize: '13px',
                fontWeight: '700',
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
            >
              Plug-and-Play Tools (2)
            </button>
          </div>

        </div>
      </section>

      {/* Showcase Grid */}
      <section style={{ padding: '70px 5%', background: 'var(--bg2)' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '36px' }}>
            
            {filteredProducts.map((prod) => (
              <div 
                key={prod.id}
                style={{ 
                  background: 'var(--card)', 
                  borderRadius: '20px', 
                  border: prod.id === 'taxflow' ? '1px solid #0284c7' : '1px solid var(--border)', 
                  overflow: 'hidden', 
                  display: 'flex', 
                  flexDirection: 'column', 
                  position: 'relative', 
                  boxShadow: prod.id === 'taxflow' ? '0 20px 40px -15px rgba(2, 132, 199, 0.2)' : 'var(--shadow)' 
                }}
              >
                
                {/* Top Badge */}
                <div style={{ position: 'absolute', top: '16px', right: '16px', background: prod.badgeColor, color: '#fff', fontSize: '11px', fontWeight: '800', padding: '4px 12px', borderRadius: '9999px', letterSpacing: '0.04em', zIndex: 10 }}>
                  {prod.badge}
                </div>

                {/* Media Preview */}
                <div style={{ position: 'relative', height: '240px', background: '#000', overflow: 'hidden' }}>
                  {prod.mediaType === 'video' ? (
                    <>
                      <video 
                        src={prod.videoSrc}
                        poster={prod.posterSrc}
                        autoPlay
                        loop
                        muted
                        playsInline
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 60%)', pointerEvents: 'none' }} />
                      <div style={{ position: 'absolute', bottom: '16px', left: '16px', color: '#fff', fontSize: '13px', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '8px', pointerEvents: 'none' }}>
                        <Play size={14} fill="#fff" /> Interactive Screencast Video
                      </div>
                    </>
                  ) : (
                    <Image 
                      src={prod.imageSrc!} 
                      alt={prod.title}
                      fill 
                      style={{ objectFit: 'cover', objectPosition: 'top' }}
                    />
                  )}
                </div>

                {/* Card Content */}
                <div style={{ padding: '32px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <div style={{ color: prod.badgeColor, fontSize: '13px', fontWeight: '800', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '8px' }}>
                    {prod.categoryLabel}
                  </div>
                  
                  <h2 style={{ fontSize: '24px', fontWeight: '900', marginBottom: '12px' }}>
                    {prod.title}
                  </h2>

                  <p style={{ color: 'var(--text2)', fontSize: '14px', lineHeight: 1.6, marginBottom: '24px' }}>
                    {prod.description}
                  </p>

                  <div style={{ marginBottom: '28px', borderTop: '1px solid var(--border)', paddingTop: '20px' }}>
                    <div style={{ fontSize: '12px', fontWeight: '800', color: 'var(--text)', textTransform: 'uppercase', marginBottom: '10px' }}>Highlights:</div>
                    <ul style={{ margin: 0, paddingLeft: '18px', fontSize: '13px', color: 'var(--text2)', lineHeight: 1.7 }}>
                      {prod.highlights.map((h, hIdx) => (
                        <li key={hIdx}>{h}</li>
                      ))}
                    </ul>
                  </div>

                  <div style={{ marginTop: 'auto', display: 'flex', gap: '12px', flexWrap: 'wrap', position: 'relative', zIndex: 5 }}>
                    <Link 
                      href={prod.primaryLink}
                      style={{ flex: 1, textAlign: 'center', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '8px', background: 'var(--accent)', color: '#fff', padding: '12px 18px', borderRadius: '10px', fontWeight: '700', fontSize: '14px', textDecoration: 'none', cursor: 'pointer', transition: 'all 0.2s' }}
                    >
                      {prod.primaryText}
                      <ArrowRight size={16} />
                    </Link>

                    <Link 
                      href={prod.secondaryLink}
                      style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', background: 'var(--bg2)', color: 'var(--text)', border: '1px solid var(--border)', padding: '12px 16px', borderRadius: '10px', fontWeight: '600', fontSize: '14px', textDecoration: 'none', cursor: 'pointer', transition: 'all 0.2s' }}
                    >
                      {prod.secondaryText}
                    </Link>
                  </div>
                </div>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* Industrial AI Anchor Banner */}
      <section style={{ padding: '60px 5%', background: 'var(--bg)', borderTop: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', background: 'var(--card)', borderRadius: '16px', border: '1px solid var(--border)', padding: '36px 40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '24px' }}>
          <div>
            <div style={{ color: '#0284c7', fontSize: '12px', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '4px' }}>
              Factory & Manufacturing Automation?
            </div>
            <h3 style={{ fontSize: '24px', fontWeight: '900', margin: 0 }}>
              Need Custom Machine Vision or Edge AI for Your Plant?
            </h3>
            <p style={{ color: 'var(--text2)', fontSize: '14px', margin: '6px 0 0', maxWidth: '600px' }}>
              We design custom optical rigs, train localized neural models, and interface directly with your assembly line PLCs from our lab in Namakkal, Tamil Nadu.
            </p>
          </div>

          <Link 
            href="/contact?service=visioninspect"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'var(--accent)', color: '#fff', padding: '14px 28px', borderRadius: '10px', fontWeight: '700', fontSize: '14px', textDecoration: 'none', cursor: 'pointer', position: 'relative', zIndex: 5 }}
          >
            Request Factory Assessment <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
