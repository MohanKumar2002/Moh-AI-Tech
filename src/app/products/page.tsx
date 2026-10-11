'use client';

import React from 'react';
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
  Layers
} from 'lucide-react';
import Footer from '@/components/layout/footer';

export default function ProductsPage() {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)', color: 'var(--text)' }}>

      {/* Header */}
      <section style={{ padding: '140px 5% 60px', textAlign: 'center', background: 'radial-gradient(ellipse at 50% 0%, rgba(2, 132, 199, 0.1) 0%, transparent 70%)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '960px', margin: '0 auto' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', borderRadius: '9999px', background: 'rgba(2, 132, 199, 0.1)', border: '1px solid rgba(2, 132, 199, 0.3)', color: '#0284c7', fontSize: '13px', fontWeight: '700', marginBottom: '20px' }}>
            <Sparkles size={14} />
            MOH-AI TECH · SOFTWARE PRODUCT SUITE
          </div>
          
          <h1 style={{ fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: '900', letterSpacing: '-0.02em', margin: '0 0 20px', lineHeight: 1.15 }}>
            Purpose-Built AI Products & Workflows
          </h1>
          
          <p style={{ fontSize: 'clamp(16px, 2vw, 19px)', color: 'var(--text2)', maxWidth: '680px', margin: '0 auto', lineHeight: 1.6 }}>
            Explore our specialized enterprise platforms designed for high-volume tax & accounting, document intelligence, autonomous HR talent acquisition, and industrial defect detection.
          </p>
        </div>
      </section>

      {/* Showcase Grid */}
      <section style={{ padding: '80px 5%', background: 'var(--bg2)' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '40px' }}>
            
            {/* PRODUCT 1: MOH-AI TAXFLOW (FLAGSHIP WITH VIDEO) */}
            <div style={{ background: 'var(--card)', borderRadius: '20px', border: '1px solid #0284c7', overflow: 'hidden', display: 'flex', flexDirection: 'column', position: 'relative', boxShadow: '0 20px 40px -15px rgba(2, 132, 199, 0.2)' }}>
              
              <div style={{ position: 'absolute', top: '16px', right: '16px', background: '#0284c7', color: '#fff', fontSize: '11px', fontWeight: '800', padding: '4px 12px', borderRadius: '9999px', letterSpacing: '0.04em', zIndex: 10 }}>
                ⭐ NEW RELEASE · WITH LIVE VIDEO
              </div>

              <div style={{ position: 'relative', height: '240px', background: '#000', overflow: 'hidden' }}>
                <video 
                  src="/videos/taxproductdemo.mp4"
                  poster="/images/products/taxflow-poster.jpg"
                  autoPlay
                  loop
                  muted
                  playsInline
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 60%)', pointerEvents: 'none' }} />
                <div style={{ position: 'absolute', bottom: '16px', left: '16px', color: '#fff', fontSize: '13px', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '8px', pointerEvents: 'none' }}>
                  <Play size={14} fill="#fff" /> Includes 3-Minute Live Interactive Demo
                </div>
              </div>

              <div style={{ padding: '32px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <div style={{ color: '#0284c7', fontSize: '13px', fontWeight: '800', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '8px' }}>
                  CA & Accounting Suite
                </div>
                
                <h2 style={{ fontSize: '26px', fontWeight: '900', marginBottom: '12px' }}>
                  Moh-AI TaxFlow
                </h2>

                <p style={{ color: 'var(--text2)', fontSize: '15px', lineHeight: 1.6, marginBottom: '24px' }}>
                  Autonomous tax and compliance automation for Chartered Accountants and corporate controllers. Performs 1-500 invoice batch OCR extraction, GSTR-2B ↔ Books reconciliation, 1-click WhatsApp client notices, and Section 40A(3) cash audit flags.
                </p>

                <div style={{ marginBottom: '28px', borderTop: '1px solid var(--border)', paddingTop: '20px' }}>
                  <div style={{ fontSize: '12px', fontWeight: '800', color: 'var(--text)', textTransform: 'uppercase', marginBottom: '10px' }}>Highlights:</div>
                  <ul style={{ margin: 0, paddingLeft: '18px', fontSize: '13px', color: 'var(--text2)', lineHeight: 1.7 }}>
                    <li><strong>Invoice AI:</strong> Instant Tally XML & Excel export</li>
                    <li><strong>GST Reco (2B):</strong> Sec 16(2)(aa) ITC at risk recovery</li>
                    <li><strong>Client Follow-up:</strong> 1-click WhatsApp compliance alerts</li>
                    <li><strong>Audit Intelligence:</strong> Cash and TDS threshold scanning</li>
                  </ul>
                </div>

                <div style={{ marginTop: 'auto', display: 'flex', gap: '12px', flexWrap: 'wrap', position: 'relative', zIndex: 5 }}>
                  <Link 
                    href="/taxflow"
                    style={{ flex: 1, textAlign: 'center', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '8px', background: 'var(--accent)', color: '#fff', padding: '12px 20px', borderRadius: '10px', fontWeight: '700', fontSize: '14px', textDecoration: 'none', cursor: 'pointer', transition: 'all 0.2s' }}
                  >
                    View Product Page & Demo
                    <ArrowRight size={16} />
                  </Link>

                  <Link 
                    href="/contact?service=taxflow"
                    style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', background: 'var(--bg2)', color: 'var(--text)', border: '1px solid var(--border)', padding: '12px 18px', borderRadius: '10px', fontWeight: '600', fontSize: '14px', textDecoration: 'none', cursor: 'pointer', transition: 'all 0.2s' }}
                  >
                    Book Pilot
                  </Link>
                </div>
              </div>

            </div>

            {/* PRODUCT 2: DOCUMIND */}
            <div style={{ background: 'var(--card)', borderRadius: '20px', border: '1px solid var(--border)', overflow: 'hidden', display: 'flex', flexDirection: 'column', boxShadow: 'var(--shadow)' }}>
              
              <div style={{ position: 'relative', height: '240px', background: 'var(--bg)', borderBottom: '1px solid var(--border)' }}>
                <Image 
                  src="/images/products/documind.png" 
                  alt="DocuMind AI"
                  fill 
                  style={{ objectFit: 'cover', objectPosition: 'top' }}
                />
              </div>

              <div style={{ padding: '32px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <div style={{ color: '#00B4D8', fontSize: '13px', fontWeight: '800', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '8px' }}>
                  Document AI & OCR
                </div>
                
                <h2 style={{ fontSize: '26px', fontWeight: '900', marginBottom: '12px' }}>
                  Docu-Mind
                </h2>

                <p style={{ color: 'var(--text2)', fontSize: '15px', lineHeight: 1.6, marginBottom: '24px' }}>
                  Enterprise document intelligence system that reads complex multi-page contracts, freight bills, handwritten forms, and technical datasheets, converting them into structured schemas.
                </p>

                <div style={{ marginBottom: '28px', borderTop: '1px solid var(--border)', paddingTop: '20px' }}>
                  <div style={{ fontSize: '12px', fontWeight: '800', color: 'var(--text)', textTransform: 'uppercase', marginBottom: '10px' }}>Highlights:</div>
                  <ul style={{ margin: 0, paddingLeft: '18px', fontSize: '13px', color: 'var(--text2)', lineHeight: 1.7 }}>
                    <li>Handwriting & corrupted scan OCR</li>
                    <li>Complex table extraction & multi-tier line items</li>
                    <li>Zero-shot custom document model adaptation</li>
                    <li>Secure on-premise deployment available</li>
                  </ul>
                </div>

                <div style={{ marginTop: 'auto', display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                  <Link 
                    href="/documind"
                    style={{ flex: 1, textAlign: 'center', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '8px', background: 'var(--bg2)', color: 'var(--text)', border: '1px solid var(--border)', padding: '12px 20px', borderRadius: '10px', fontWeight: '700', fontSize: '14px', textDecoration: 'none' }}
                  >
                    Explore DocuMind
                    <ArrowRight size={16} />
                  </Link>

                  <Link 
                    href="/documind/pricing"
                    style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', background: 'var(--bg2)', color: 'var(--text2)', border: '1px solid var(--border)', padding: '12px 18px', borderRadius: '10px', fontWeight: '600', fontSize: '14px', textDecoration: 'none' }}
                  >
                    Pricing
                  </Link>
                </div>
              </div>

            </div>

            {/* PRODUCT 3: HR RECRUITER AI */}
            <div style={{ background: 'var(--card)', borderRadius: '20px', border: '1px solid var(--border)', overflow: 'hidden', display: 'flex', flexDirection: 'column', boxShadow: 'var(--shadow)' }}>
              
              <div style={{ position: 'relative', height: '240px', background: '#000', overflow: 'hidden' }}>
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
                <div style={{ color: '#8B5CF6', fontSize: '13px', fontWeight: '800', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '8px' }}>
                  Autonomous Agent
                </div>
                
                <h2 style={{ fontSize: '26px', fontWeight: '900', marginBottom: '12px' }}>
                  HR Recruiter AI
                </h2>

                <p style={{ color: 'var(--text2)', fontSize: '15px', lineHeight: 1.6, marginBottom: '24px' }}>
                  Autonomous talent acquisition agent that parses resumes semantically, conducts conversational voice/text pre-screening, and ranks candidates against job requirements.
                </p>

                <div style={{ marginBottom: '28px', borderTop: '1px solid var(--border)', paddingTop: '20px' }}>
                  <div style={{ fontSize: '12px', fontWeight: '800', color: 'var(--text)', textTransform: 'uppercase', marginBottom: '10px' }}>Highlights:</div>
                  <ul style={{ margin: 0, paddingLeft: '18px', fontSize: '13px', color: 'var(--text2)', lineHeight: 1.7 }}>
                    <li>Semantic resume skill parsing (beyond keyword matching)</li>
                    <li>Automated conversational pre-screening interview bot</li>
                    <li>Time-to-interview metric compression by 75%</li>
                    <li>Unbiased rubric-based scoring matrix</li>
                  </ul>
                </div>

                <div style={{ marginTop: 'auto' }}>
                  <Link 
                    href="/contact?service=hr-recruiter"
                    style={{ width: '100%', textAlign: 'center', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '8px', background: 'var(--bg2)', color: 'var(--text)', border: '1px solid var(--border)', padding: '12px 20px', borderRadius: '10px', fontWeight: '700', fontSize: '14px', textDecoration: 'none' }}
                  >
                    Request HR Demo
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Industrial AI Anchor Banner */}
      <section style={{ padding: '60px 5%', background: 'var(--bg)', borderTop: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', background: 'var(--card)', borderRadius: '16px', border: '1px solid var(--border)', padding: '36px 40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '24px' }}>
          <div>
            <div style={{ color: '#0284c7', fontSize: '12px', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '4px' }}>
              Factory & Manufacturing Operations?
            </div>
            <h3 style={{ fontSize: '24px', fontWeight: '900', margin: 0 }}>
              Looking for Industrial Computer Vision & Edge AI?
            </h3>
            <p style={{ color: 'var(--text2)', fontSize: '14px', margin: '6px 0 0', maxWidth: '600px' }}>
              Explore our edge-deployed machine vision, PLC integrations, and automated defect detection for automotive, CNC, and electronics manufacturing.
            </p>
          </div>

          <Link 
            href="/industrial-ai"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'var(--accent)', color: '#fff', padding: '14px 28px', borderRadius: '10px', fontWeight: '700', fontSize: '14px', textDecoration: 'none' }}
          >
            Explore Industrial AI <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
