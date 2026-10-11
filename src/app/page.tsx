'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/components/i18n-provider';
import { ContactForm } from '@/components/ContactForm';
import Footer from '@/components/layout/footer';
import { Check, ArrowRight, Shield, Layers, HelpCircle, User, Cpu, BarChart3, Settings, Factory, Bot, Zap, Briefcase, FileText } from 'lucide-react';

export default function Home() {
  const { t } = useLanguage();

  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('vis');
      });
    }, { threshold: 0.05 });
    
    document.querySelectorAll('.fu').forEach(el => obs.observe(el));
    setTimeout(() => {
      document.querySelectorAll('.hero-content .fu').forEach(el => el.classList.add('vis'));
    }, 100);
  }, []);

  return (
    <>
      {/* ===== HERO SECTION ===== */}
      <section id="hero" style={{ background: 'var(--bg)', minHeight: '90vh', display: 'flex', alignItems: 'center', paddingTop: '120px', paddingBottom: '60px', overflow: 'hidden' }}>
        <div className="hero-glow hero-glow-1"></div>
        <div className="hero-glow hero-glow-2"></div>
        <div className="hero-inner" style={{ maxWidth: '1400px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '48px', alignItems: 'center', padding: '0 5%' }}>
          <div className="hero-content">
            <div className="hero-badge fu" style={{ background: 'rgba(0, 102, 204, 0.08)', border: '1px solid rgba(0, 102, 204, 0.15)', padding: '6px 14px', borderRadius: '50px', fontSize: '13px', color: 'var(--accent-l)', display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '24px', fontWeight: '600' }}>
              <span className="badge-pulse" style={{ width: '7px', height: '7px', background: '#0066CC', borderRadius: '50%', display: 'inline-block' }}></span>
              <span>{t('hero_badge')}</span>
            </div>
            <h1 className="hero-h1 fu d1" style={{ fontFamily: 'var(--syne)', fontSize: 'clamp(36px, 4.5vw, 52px)', fontWeight: '800', lineHeight: '1.15', color: 'var(--text)', marginBottom: '24px', letterSpacing: '-1.5px' }}>
              {t('hero_h1')}
            </h1>
            <p className="hero-sub fu d2" style={{ fontSize: '17px', color: 'var(--muted)', lineHeight: '1.65', marginBottom: '32px', maxWidth: '620px' }}>
              {t('hero_sub')}
            </p>
            
            <div className="hero-btns fu d3" style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '32px' }}>
              <Link href="/contact" className="btn-primary" style={{ background: 'var(--grad)', color: '#fff', padding: '14px 28px', borderRadius: '8px', textDecoration: 'none', fontWeight: '600', fontSize: '15px', display: 'inline-flex', alignItems: 'center', gap: '8px', transition: 'all 0.2s', boxShadow: '0 4px 12px rgba(0, 102, 204, 0.15)' }}>
                {t('hero_cta1')} <ArrowRight size={16} />
              </Link>
              <Link href="/technology" className="btn-ghost" style={{ border: '1px solid var(--border2)', color: 'var(--text)', padding: '14px 28px', borderRadius: '8px', textDecoration: 'none', fontWeight: '500', fontSize: '15px', display: 'inline-flex', alignItems: 'center', transition: 'all 0.2s' }}>
                {t('hero_cta2')}
              </Link>
            </div>

            {/* Trust Signals */}
            <div className="hero-chips fu d4" style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', borderTop: '1px solid var(--border)', paddingTop: '24px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: 'var(--muted)', fontWeight: '500' }}>
                <Check size={14} className="text-blue-600" style={{ color: 'var(--accent-l)' }} />
                <span>{t('trust_msme')}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: 'var(--muted)', fontWeight: '500' }}>
                <Check size={14} className="text-blue-600" style={{ color: 'var(--accent-l)' }} />
                <span>{t('trust_founder')}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: 'var(--muted)', fontWeight: '500' }}>
                <Check size={14} className="text-blue-600" style={{ color: 'var(--accent-l)' }} />
                <span>{t('trust_stack')}</span>
              </div>
            </div>
          </div>
          
          <div className="hero-visual fu d2" style={{ display: 'flex', justifyContent: 'center', position: 'relative' }}>
            <div style={{ background: 'var(--bg2)', border: '1px solid var(--border2)', borderRadius: '16px', padding: '12px', boxShadow: 'var(--shadow)', width: '100%', overflow: 'hidden' }}>
              <Image 
                src="/images/general/industrial_hero.png" 
                alt="Smart Factory Industrial AI Dashboard" 
                width={700} 
                height={400} 
                style={{ width: '100%', height: 'auto', borderRadius: '8px', display: 'block', objectFit: 'cover' }}
                priority 
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== TWO PATHWAYS SECTION ===== */}
      <section id="pathways" style={{ background: 'var(--bg2)', padding: '80px 0', borderTop: '1px solid var(--border)' }}>
        <div className="inner" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 5%' }}>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <span className="tag">{t('solutions_title')}</span>
            <h2 className="h2" style={{ fontFamily: 'var(--syne)', fontWeight: '700', letterSpacing: '-1px', color: 'var(--text)' }}>
              {t('solutions_subtitle')}
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '32px', alignItems: 'stretch' }}>
            {/* Pathway 1: Industrial AI (Primary Focus - visually dominant) */}
            <div className="card fu" style={{ background: 'var(--card)', border: '2px solid var(--accent-l)', borderRadius: '16px', padding: '40px', boxShadow: '0 8px 30px rgba(0, 102, 204, 0.06)', display: 'flex', flexDirection: 'column', position: 'relative' }}>
              <div style={{ position: 'absolute', top: '20px', right: '20px', background: 'var(--accent-l)', color: '#FFFFFF', fontSize: '11px', fontWeight: '800', padding: '4px 10px', borderRadius: '4px', letterSpacing: '1px' }}>
                PRIMARY FOCUS
              </div>
              <div style={{ background: 'rgba(0, 102, 204, 0.06)', width: '64px', height: '64px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>
                <Factory size={32} className="text-blue-600" style={{ color: 'var(--accent-l)' }} />
              </div>
              <h3 style={{ fontSize: '24px', fontWeight: '800', fontFamily: 'var(--syne)', marginBottom: '12px' }}>Industrial AI Solutions</h3>
              <p style={{ color: 'var(--muted)', fontSize: '15px', lineHeight: '1.6', marginBottom: '24px' }}>
                AI-powered systems helping manufacturing companies detect product defects, predict equipment wear, and make smarter telemetry-driven operational decisions.
              </p>
              
              <div style={{ borderTop: '1px solid var(--border)', paddingTop: '20px', marginBottom: '32px', flexGrow: 1 }}>
                <h4 style={{ fontSize: '14px', fontWeight: '700', textTransform: 'uppercase', color: 'var(--text)', marginBottom: '12px', letterSpacing: '0.5px' }}>Core Capabilities:</h4>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <li style={{ fontSize: '14px', display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text)' }}>
                    <Check size={14} style={{ color: 'var(--accent-l)' }} /> <span>AI Vision Systems (Quality Control Defect Checking)</span>
                  </li>
                  <li style={{ fontSize: '14px', display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text)' }}>
                    <Check size={14} style={{ color: 'var(--accent-l)' }} /> <span>Predictive Maintenance (Sensor telemetry forecasting)</span>
                  </li>
                  <li style={{ fontSize: '14px', display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text)' }}>
                    <Check size={14} style={{ color: 'var(--accent-l)' }} /> <span>Factory Knowledge Retrieval (Private SOP local LLMs)</span>
                  </li>
                </ul>
              </div>

              <Link href="/industrial-ai" className="btn-primary" style={{ background: 'var(--grad)', color: '#fff', padding: '14px', borderRadius: '8px', textDecoration: 'none', fontWeight: '600', fontSize: '15px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                Explore Industrial AI <ArrowRight size={16} />
              </Link>
            </div>

            {/* Pathway 2: AI Product Engineering (Secondary Focus) */}
            <div className="card fu" style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: '16px', padding: '40px', boxShadow: 'var(--shadow)', display: 'flex', flexDirection: 'column', position: 'relative' }}>
              <div style={{ position: 'absolute', top: '20px', right: '20px', background: 'var(--bg3)', color: 'var(--text)', fontSize: '11px', fontWeight: '700', padding: '4px 10px', borderRadius: '4px', letterSpacing: '0.5px' }}>
                AI DEVELOPMENT SERVICES
              </div>
              <div style={{ background: 'var(--bg2)', width: '64px', height: '64px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>
                <Bot size={32} style={{ color: 'var(--text)' }} />
              </div>
              <h3 style={{ fontSize: '24px', fontWeight: '800', fontFamily: 'var(--syne)', marginBottom: '12px' }}>AI Product Engineering</h3>
              <p style={{ color: 'var(--muted)', fontSize: '15px', lineHeight: '1.6', marginBottom: '24px' }}>
                Design and development of secure, production-ready custom AI software, agents, and local language models to accelerate business workflows.
              </p>

              <div style={{ borderTop: '1px solid var(--border)', paddingTop: '20px', marginBottom: '32px', flexGrow: 1 }}>
                <h4 style={{ fontSize: '14px', fontWeight: '700', textTransform: 'uppercase', color: 'var(--text)', marginBottom: '12px', letterSpacing: '0.5px' }}>Capabilities Blueprints:</h4>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <li style={{ fontSize: '14px', display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text)' }}>
                    <Check size={14} style={{ color: 'var(--accent-l)' }} /> <span>AI Agents & Multi-Agent systems</span>
                  </li>
                  <li style={{ fontSize: '14px', display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text)' }}>
                    <Check size={14} style={{ color: 'var(--accent-l)' }} /> <span>Retrieval-Augmented Generation (RAG)</span>
                  </li>
                  <li style={{ fontSize: '14px', display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text)' }}>
                    <Check size={14} style={{ color: 'var(--accent-l)' }} /> <span>Custom Computer Vision & OCR</span>
                  </li>
                </ul>
              </div>

              <Link href="/ai-product-engineering" className="btn-ghost" style={{ border: '1px solid var(--border2)', color: 'var(--text)', padding: '14px', borderRadius: '8px', textDecoration: 'none', fontWeight: '600', fontSize: '15px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                Explore AI Engineering <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== WHY START WITH INDUSTRIAL AI SECTION ===== */}
      <section id="why-industrial-ai" style={{ background: 'var(--bg)', padding: '80px 0', borderTop: '1px solid var(--border)' }}>
        <div className="inner" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 5%' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'center' }}>
            <div className="fu">
              <span className="tag">Strategic Rationale</span>
              <h2 className="h2" style={{ fontFamily: 'var(--syne)', fontWeight: '700', letterSpacing: '-1px', color: 'var(--text)', marginBottom: '16px' }}>
                Why Industrial AI?
              </h2>
              <p style={{ fontSize: '16px', color: 'var(--muted)', lineHeight: '1.7', marginBottom: '24px' }}>
                Manufacturing is one of the largest opportunities for practical AI adoption. Unlike purely transactional software sectors, factories already run physical, data-rich processes that are prime for optimization.
              </p>
              <div style={{ background: 'var(--bg2)', border: '1px solid var(--border)', borderRadius: '12px', padding: '24px' }}>
                <h4 style={{ fontWeight: '700', marginBottom: '8px' }}>The Opportunity</h4>
                <p style={{ fontSize: '14px', color: 'var(--muted)' }}>
                  By applying targeted computer vision and time-series model architectures to existing shop-floor infrastructure, factories can achieve immediate, measurable cost drops without requiring large-scale hardware replacement.
                </p>
              </div>
            </div>

            <div className="fu d1" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              {[
                { title: 'Machines', icon: <Settings size={20} />, text: 'Existing automated units produce rich telemetry feeds.' },
                { title: 'Production Data', icon: <BarChart3 size={20} />, text: 'Factories collect sensory and inspection logs already.' },
                { title: 'Quality Processes', icon: <Shield size={20} />, text: 'SOP specifications define precise check boundaries.' },
                { title: 'Repetitive Tasks', icon: <Cpu size={20} />, text: 'Highly repetitive inspection points benefit from visual AI.' }
              ].map((item, idx) => (
                <div key={idx} style={{ padding: '24px', background: 'var(--bg2)', border: '1px solid var(--border)', borderRadius: '12px' }}>
                  <div style={{ color: 'var(--accent-l)', marginBottom: '12px' }}>{item.icon}</div>
                  <h4 style={{ fontSize: '15px', fontWeight: '700', color: 'var(--text)', marginBottom: '6px' }}>{item.title}</h4>
                  <p style={{ fontSize: '13px', color: 'var(--muted)', lineHeight: '1.5' }}>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== WHO WE WORK WITH COMPARISON ===== */}
      <section id="who-we-work-with" style={{ background: 'var(--bg2)', padding: '80px 0', borderTop: '1px solid var(--border)' }}>
        <div className="inner" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 5%' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <span className="tag">{t('who_we_help_title')}</span>
            <h2 className="h2" style={{ fontFamily: 'var(--syne)', fontWeight: '700', letterSpacing: '-1px', color: 'var(--text)', margin: 0 }}>
              Tailored Customer Journeys
            </h2>
            <p className="lead" style={{ margin: '8px auto 0', color: 'var(--muted)' }}>
              {t('who_we_help_subtitle')}
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>
            {/* Target A: Industrial AI */}
            <div className="card fu" style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: '16px', padding: '36px', boxShadow: 'var(--shadow)' }}>
              <h3 style={{ fontSize: '20px', fontWeight: '800', color: 'var(--text)', borderBottom: '1px solid var(--border)', paddingBottom: '16px', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Factory size={20} className="text-blue-600" style={{ color: 'var(--accent-l)' }} /> For Industrial Sectors
              </h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <li style={{ display: 'flex', gap: '12px' }}>
                  <span style={{ fontSize: '14px', background: 'var(--bg2)', width: '28px', height: '28px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700', flexShrink: 0 }}>✓</span>
                  <div>
                    <h4 style={{ fontWeight: '700', fontSize: '15px' }}>B2B Manufacturers & SME Factories</h4>
                    <p style={{ fontSize: '13px', color: 'var(--muted)', marginTop: '2px' }}>Companies looking to reduce inspection scrap rates and automate defect checks.</p>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '12px' }}>
                  <span style={{ fontSize: '14px', background: 'var(--bg2)', width: '28px', height: '28px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700', flexShrink: 0 }}>✓</span>
                  <div>
                    <h4 style={{ fontWeight: '700', fontSize: '15px' }}>CNC Machining & Component Suppliers</h4>
                    <p style={{ fontSize: '13px', color: 'var(--muted)', marginTop: '2px' }}>Automating structural inspections and dimensional validation loops.</p>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '12px' }}>
                  <span style={{ fontSize: '14px', background: 'var(--bg2)', width: '28px', height: '28px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700', flexShrink: 0 }}>✓</span>
                  <div>
                    <h4 style={{ fontWeight: '700', fontSize: '15px' }}>Automotive Component Manufacturers</h4>
                    <p style={{ fontSize: '13px', color: 'var(--muted)', marginTop: '2px' }}>Running visual pass/fail check models inline to meet strict tier-1 specs.</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Target B: AI Product Engineering */}
            <div className="card fu" style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: '16px', padding: '36px', boxShadow: 'var(--shadow)' }}>
              <h3 style={{ fontSize: '20px', fontWeight: '800', color: 'var(--text)', borderBottom: '1px solid var(--border)', paddingBottom: '16px', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Bot size={20} style={{ color: 'var(--text)' }} /> For Business & Tech Teams
              </h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <li style={{ display: 'flex', gap: '12px' }}>
                  <span style={{ fontSize: '14px', background: 'var(--bg2)', width: '28px', height: '28px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700', flexShrink: 0 }}>✓</span>
                  <div>
                    <h4 style={{ fontWeight: '700', fontSize: '15px' }}>Startups & Software Ventures</h4>
                    <p style={{ fontSize: '13px', color: 'var(--muted)', marginTop: '2px' }}>Teams requiring high-performance RAG indexing, custom OCR pipelines, or AI Agents.</p>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '12px' }}>
                  <span style={{ fontSize: '14px', background: 'var(--bg2)', width: '28px', height: '28px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700', flexShrink: 0 }}>✓</span>
                  <div>
                    <h4 style={{ fontWeight: '700', fontSize: '15px' }}>Private Enterprise & Institutions</h4>
                    <p style={{ fontSize: '13px', color: 'var(--muted)', marginTop: '2px' }}>Sovereign organisations looking to train private localized model databases on-premises.</p>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '12px' }}>
                  <span style={{ fontSize: '14px', background: 'var(--bg2)', width: '28px', height: '28px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700', flexShrink: 0 }}>✓</span>
                  <div>
                    <h4 style={{ fontWeight: '700', fontSize: '15px' }}>R&D Teams & Labs</h4>
                    <p style={{ fontSize: '13px', color: 'var(--muted)', marginTop: '2px' }}>Building specialized computer vision algorithms and offline prompt engineering systems.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PROBLEMS WE SOLVE ===== */}
      <section id="problems" style={{ background: 'var(--bg)', padding: '80px 0', borderTop: '1px solid var(--border)' }}>
        <div className="inner" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 5%' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '48px', alignItems: 'center' }}>
            <div className="fu">
              <span className="tag">Factory Friction</span>
              <h2 className="h2" style={{ fontFamily: 'var(--syne)', fontWeight: '700', letterSpacing: '-1px', color: 'var(--text)' }}>
                {t('problems_title')}
              </h2>
              <p className="lead" style={{ color: 'var(--muted)', marginBottom: '32px', fontSize: '16px' }}>
                {t('problems_subtitle')}
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ display: 'flex', gap: '12px' }}>
                  <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'rgba(0, 102, 204, 0.1)', color: 'var(--accent-l)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontWeight: '700' }}>!</div>
                  <div>
                    <h4 style={{ fontWeight: '700', color: 'var(--text)' }}>Quality Control Inspection Gaps</h4>
                    <p style={{ fontSize: '14px', color: 'var(--muted)' }}>Manual optical testing misses minor anomalies, driving up factory scrap rates.</p>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '12px' }}>
                  <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'rgba(0, 102, 204, 0.1)', color: 'var(--accent-l)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontWeight: '700' }}>!</div>
                  <div>
                    <h4 style={{ fontWeight: '700', color: 'var(--text)' }}>Reactive Machine Downtime</h4>
                    <p style={{ fontSize: '14px', color: 'var(--muted)' }}>Waiting for components to fail results in costly production stalls.</p>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '12px' }}>
                  <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'rgba(0, 102, 204, 0.1)', color: 'var(--accent-l)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontWeight: '700' }}>!</div>
                  <div>
                    <h4 style={{ fontWeight: '700', color: 'var(--text)' }}>Unused Operational Data</h4>
                    <p style={{ fontSize: '14px', color: 'var(--muted)' }}>Machinery log files and sensor telemetry remain archived without adding value.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="fu d1" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {[
                { label: 'Optical Sorting Defects', text: 'Quality sorting relies on slow manual oversight.', solution: 'Moh-AI Vision inspection checks defects in under 80ms.' },
                { label: 'Unplanned Telemetry Stalls', text: 'Wear is undetected until machinery breaks.', solution: 'Moh-AI Predict outputs early alerts from time-series models.' },
                { label: 'Manual PDF Manual Queries', text: 'Operators waste hours searching manuals during failures.', solution: 'Moh-AI Factory Intelligence RAG extracts answers instantly.' }
              ].map((item, idx) => (
                <div key={idx} style={{ background: 'var(--bg2)', padding: '24px', borderRadius: '12px', border: '1px solid var(--border)', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <span style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--muted)', fontWeight: '600' }}>{item.label}</span>
                  <p style={{ fontSize: '15px', color: 'var(--text)', fontWeight: '500' }}>{item.text}</p>
                  <div style={{ fontSize: '14px', color: 'var(--accent-l)', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '6px', borderTop: '1px solid var(--border)', paddingTop: '10px', marginTop: '4px' }}>
                    <span>✓</span> <span>{item.solution}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== BUSINESS OUTCOMES SECTION ===== */}
      <section id="outcomes" style={{ background: 'var(--bg2)', padding: '80px 0', borderTop: '1px solid var(--border)' }}>
        <div className="inner" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 5%' }}>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <span className="tag">Business Impact</span>
            <h2 className="h2" style={{ fontFamily: 'var(--syne)', fontWeight: '700', letterSpacing: '-1px', color: 'var(--text)' }}>
              Business Outcomes
            </h2>
            <p className="lead" style={{ margin: '8px auto 0', color: 'var(--muted)' }}>
              We design software to drive tangible metrics for your operations.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px', marginBottom: '56px' }}>
            {[
              {
                title: 'Reduce Quality Inspection Time',
                desc: 'AI vision systems automatically check components and products on assembly conveyors, sorting pass/fail defects instantly.',
                icon: <Check size={24} style={{ color: 'var(--accent-l)' }} />
              },
              {
                title: 'Reduce Machine Downtime',
                desc: 'Time-series sensor telemetry models identify early mechanical abnormalities, scheduling maintenance before failure stops assembly.',
                icon: <Zap size={24} style={{ color: 'var(--accent-l)' }} />
              },
              {
                title: 'Improve Operational Decisions',
                desc: 'Consolidate shop-floor sensor readings and manual logs into secure databases to locate performance bottlenecks automatically.',
                icon: <BarChart3 size={24} style={{ color: 'var(--accent-l)' }} />
              }
            ].map((outcome, idx) => (
              <div key={idx} className="card fu" style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: '12px', padding: '36px', boxShadow: 'var(--shadow)', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ background: 'var(--bg2)', width: '48px', height: '48px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {outcome.icon}
                </div>
                <h3 style={{ fontSize: '18px', fontWeight: '800', color: 'var(--text)' }}>{outcome.title}</h3>
                <p style={{ fontSize: '14px', color: 'var(--muted)', lineHeight: '1.6' }}>{outcome.desc}</p>
              </div>
            ))}
          </div>

          {/* Potential Impact Areas Checklist */}
          <div className="fu" style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: '16px', padding: '36px' }}>
            <h4 style={{ fontSize: '16px', fontWeight: '800', color: 'var(--text)', marginBottom: '24px', textAlign: 'center' }}>Potential Impact Areas:</h4>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
              {[
                'Less manual inspection effort',
                'Faster defect identification',
                'Better maintenance planning',
                'Reduced operational delays'
              ].map((area, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '14px', fontWeight: '600', color: 'var(--text)' }}>
                  <span style={{ color: 'var(--accent-l)', fontSize: '18px' }}>✓</span> <span>{area}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== PILOT PROGRAM SECTION ===== */}
      <section id="pilot" style={{ background: 'var(--bg)', padding: '80px 0', borderTop: '1px solid var(--border)' }}>
        <div className="inner" style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 5%' }}>
          <div style={{ background: 'var(--card)', border: '1px solid var(--border2)', borderRadius: '20px', padding: '48px', textAlign: 'center', boxShadow: 'var(--shadow)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }} className="fu">
            <span className="tag" style={{ background: 'rgba(0, 102, 204, 0.08)', color: 'var(--accent-l)' }}>Co-Innovation</span>
            <h2 className="h2" style={{ fontFamily: 'var(--syne)', fontWeight: '700', letterSpacing: '-1px', color: 'var(--text)', margin: 0 }}>
              {t('pilot_program_title')}
            </h2>
            <p className="lead" style={{ maxWidth: '720px', margin: 0, color: 'var(--muted)', fontSize: '15px' }}>
              We partner with selected manufacturing companies to solve one real operational problem using custom AI. Develop, test, and measure ROI before deployment.
            </p>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '16px', width: '100%', margin: '24px 0' }}>
              {[
                { title: '1. Factory Assessment', text: 'Identify inspection or telemetry bottlenecks.' },
                { title: '2. Data Evaluation', text: 'Evaluate image files or sensor logs.' },
                { title: '3. AI Prototype', text: 'Train specialized custom models.' },
                { title: '4. Pilot Deployment', text: 'Test offline on your factory floor.' },
                { title: '5. ROI Performance', text: 'Analyze defect sorting and downtime drop.' }
              ].map((step, idx) => (
                <div key={idx} style={{ padding: '16px', border: '1px solid var(--border)', borderRadius: '8px', background: 'var(--bg2)' }}>
                  <h4 style={{ fontWeight: '700', fontSize: '14px', color: 'var(--text)' }}>{step.title}</h4>
                  <p style={{ fontSize: '12px', color: 'var(--muted)', marginTop: '4px', lineHeight: '1.4' }}>{step.text}</p>
                </div>
              ))}
            </div>

            <Link href="/contact?path=industrial" className="btn-primary" style={{ background: 'var(--grad)', color: '#fff', padding: '14px 28px', borderRadius: '8px', textDecoration: 'none', fontWeight: '600', fontSize: '15px' }}>
              Apply for Industrial AI Pilot
            </Link>
          </div>
        </div>
      </section>

      {/* ===== ENGINEERING DEMONSTRATIONS SECTION ===== */}
      <section id="demos" style={{ background: 'var(--bg2)', padding: '80px 0', borderTop: '1px solid var(--border)' }}>
        <div className="inner" style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 5%' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <span className="tag">Proof Before Claims</span>
            <h2 className="h2" style={{ fontFamily: 'var(--syne)', fontWeight: '700', letterSpacing: '-1px', color: 'var(--text)' }}>
              {t('demos_title')}
            </h2>
            <p className="lead" style={{ margin: '0 auto', color: 'var(--muted)' }}>
              {t('demos_subtitle')}
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px', marginBottom: '48px' }}>
            {[
              {
                title: 'Computer Vision Inspection',
                status: 'Prototype',
                tech: 'PyTorch · OpenCV · FastAPI',
                desc: 'Defect checking system checking pass/fail optical samples. Processes frames and flags anomalies in under 80ms.'
              },
              {
                title: 'Document Intelligence',
                status: 'Research Prototype',
                tech: 'Python · OCR · NLP',
                desc: 'Automates tabular data extraction from printouts and scanned operational logs into structured database entries.'
              },
              {
                title: 'Industrial RAG Assistant',
                status: 'Prototype',
                tech: 'RAG · pgvector · FastAPI',
                desc: 'Allows line operators to search local manuals and machinery SOP manuals via voice queries without internet access.'
              }
            ].map((demo, idx) => (
              <div key={idx} className="card fu" style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: '12px', padding: '28px', boxShadow: 'var(--shadow)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                  <h4 style={{ fontWeight: '800', fontSize: '18px', color: 'var(--text)' }}>{demo.title}</h4>
                  <span style={{ fontSize: '11px', background: 'var(--bg2)', padding: '3px 8px', borderRadius: '4px', border: '1px solid var(--border2)', fontWeight: '600', color: 'var(--muted)' }}>{demo.status}</span>
                </div>
                <p style={{ fontSize: '14px', color: 'var(--muted)', lineHeight: '1.6', marginBottom: '20px' }}>{demo.desc}</p>
                <div style={{ fontSize: '12px', color: 'var(--accent-l)', fontWeight: '600' }}>Tech: {demo.tech}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHY MOH-AI TECH SECTION ===== */}
      <section id="why-us" style={{ background: 'var(--bg)', padding: '80px 0', borderTop: '1px solid var(--border)' }}>
        <div className="inner" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 5%' }}>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <span className="tag">Strategic Engineering</span>
            <h2 className="h2" style={{ fontFamily: 'var(--syne)', fontWeight: '700', letterSpacing: '-1px', color: 'var(--text)' }}>
              Why Moh-AI Tech?
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px' }}>
            {[
              {
                title: 'Founder-Led Advantage',
                desc: 'Direct architectural design and execution without communication layers, sales overhead, or project managers.',
                icon: <User size={24} className="text-blue-600" />
              },
              {
                title: 'Practical AI Focus',
                desc: 'We reject abstract AI hype. We focus on physical telemetry systems, custom RAG integrations, and local vision loops.',
                icon: <Settings size={24} className="text-blue-600" />
              },
              {
                title: 'Custom Architectures',
                desc: 'We do not wrap expensive third-party tools. We engineer private, local model stacks from OpenCV to database schemas.',
                icon: <Cpu size={24} className="text-blue-600" />
              },
              {
                title: 'Secure Air-Gapped Deployments',
                desc: 'Designed for on-premises hosting. Your proprietary data and machinery manuals never leave your physical facility.',
                icon: <Shield size={24} className="text-blue-600" />
              }
            ].map((why, idx) => (
              <div key={idx} className="card fu" style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: '12px', padding: '32px', boxShadow: 'var(--shadow)', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ background: 'var(--bg2)', width: '48px', height: '48px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {why.icon}
                </div>
                <h3 style={{ fontSize: '18px', fontWeight: '800', color: 'var(--text)' }}>{why.title}</h3>
                <p style={{ fontSize: '14px', color: 'var(--muted)', lineHeight: '1.6' }}>{why.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TECHNOLOGY SECTION ===== */}
      <section id="technology" style={{ background: 'var(--bg2)', padding: '80px 0', borderTop: '1px solid var(--border)' }}>
        <div className="inner" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 5%' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <span className="tag">{t('tech_title')}</span>
            <h2 className="h2" style={{ fontFamily: 'var(--syne)', fontWeight: '700', letterSpacing: '-1px', color: 'var(--text)' }}>
              {t('tech_subtitle')}
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '16px', textAlign: 'center' }}>
            {[
              { name: 'Python', role: 'Data Core' },
              { name: 'PyTorch', role: 'Model Training' },
              { name: 'OpenCV', role: 'Computer Vision' },
              { name: 'FastAPI', role: 'APIs' },
              { name: 'React / Next.js', role: 'UIs' },
              { name: 'PostgreSQL', role: 'Databases' },
              { name: 'pgvector', role: 'Vector Search' },
              { name: 'Docker', role: 'Deployments' }
            ].map((tech, idx) => (
              <div key={idx} style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: '10px', padding: '20px', boxShadow: 'var(--shadow)' }}>
                <div style={{ fontWeight: '700', fontSize: '16px', color: 'var(--text)' }}>{tech.name}</div>
                <div style={{ fontSize: '12px', color: 'var(--muted)', marginTop: '4px' }}>{tech.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TAMIL NADU IDENTITY SECTION ===== */}
      <section id="tamil-nadu-identity" style={{ background: 'var(--bg)', padding: '80px 0', borderTop: '1px solid var(--border)' }}>
        <div className="inner" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 5%' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '48px', alignItems: 'center' }}>
            <div className="fu">
              <span className="tag">Global Delivery</span>
              <h2 className="h2" style={{ fontFamily: 'var(--syne)', fontWeight: '700', letterSpacing: '-1px', color: 'var(--text)', marginBottom: '16px' }}>
                Built in Tamil Nadu.<br/>Designed for Global Industry.
              </h2>
              <p style={{ fontSize: '16px', color: 'var(--muted)', lineHeight: '1.7', marginBottom: '24px' }}>
                We combine the rigorous engineering talent pool of Tamil Nadu with cost-effective, secure product delivery structures to support factories and startups globally.
              </p>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', fontWeight: '500', color: 'var(--text)' }}>
                  <Check size={16} style={{ color: 'var(--accent-l)' }} /> <span>Engineering talent from India</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', fontWeight: '500', color: 'var(--text)' }}>
                  <Check size={16} style={{ color: 'var(--accent-l)' }} /> <span>Cost-effective AI development</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', fontWeight: '500', color: 'var(--text)' }}>
                  <Check size={16} style={{ color: 'var(--accent-l)' }} /> <span>Remote global collaboration</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', fontWeight: '500', color: 'var(--text)' }}>
                  <Check size={16} style={{ color: 'var(--accent-l)' }} /> <span>MSME registered company</span>
                </div>
              </div>
            </div>

            <div className="fu d1" style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
              <div style={{ border: '1px solid var(--border2)', borderRadius: '16px', padding: '36px', background: 'var(--bg2)', textAlign: 'center', width: '100%' }}>
                <div style={{ fontSize: '48px', marginBottom: '16px' }}>📍</div>
                <h4 style={{ fontWeight: '800', fontSize: '18px', color: 'var(--text)' }}>Namakkal Office</h4>
                <p style={{ fontSize: '14px', color: 'var(--muted)', marginTop: '8px', lineHeight: '1.6' }}>
                  Moh-AI Tech, Namakkal District,<br/>
                  Tamil Nadu, India.<br/>
                  MSME Reg: UDYAM-TN-14-0088280.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== RESEARCH LAB PREVIEW ===== */}
      <section id="research" style={{ background: 'var(--bg2)', padding: '80px 0', borderTop: '1px solid var(--border)' }}>
        <div className="inner" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 5%' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '0.8fr 1.2fr', gap: '48px', alignItems: 'center' }}>
            <div className="fu">
              <span className="tag">{t('research_title')}</span>
              <h2 className="h2" style={{ fontFamily: 'var(--syne)', fontWeight: '700', letterSpacing: '-1px', color: 'var(--text)', marginBottom: '16px' }}>
                Long-Term R&D Credibility
              </h2>
              <p style={{ fontSize: '15px', color: 'var(--muted)', lineHeight: '1.7', marginBottom: '24px' }}>
                While we deliver practical systems today, we invest in foundational machine learning research to shape the future of edge compute and human-aware models.
              </p>
              <Link href="/research" className="btn-ghost" style={{ border: '1px solid var(--border2)', color: 'var(--text)', padding: '10px 20px', borderRadius: '8px', textDecoration: 'none', fontWeight: '600', fontSize: '14px', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                Explore Research Papers <ArrowRight size={14} />
              </Link>
            </div>

            <div className="fu d1" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {[
                { title: 'Adaptive AI Prompt Correction', desc: 'Improving localized model prompt alignments dynamically without fine-tuning overheads.' },
                { title: 'Human-Aware AI Systems', desc: 'Researching multi-modal model architectures to interpret natural operator gestures on factory lines.' },
                { title: 'Energy-Efficient Edge deep learning', desc: 'Running visual checking neural networks locally on low-voltage edge processor chips.' }
              ].map((item, idx) => (
                <div key={idx} style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: '10px', padding: '24px' }}>
                  <h4 style={{ fontWeight: '700', fontSize: '16px', color: 'var(--text)', marginBottom: '4px' }}>{item.title}</h4>
                  <p style={{ fontSize: '13px', color: 'var(--muted)', lineHeight: '1.5' }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== FOUNDER CORNER ===== */}
      <section id="founder" style={{ background: 'var(--bg)', padding: '80px 0', borderTop: '1px solid var(--border)' }}>
        <div className="inner" style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 5%' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.8fr', gap: '48px', alignItems: 'center' }} className="fu">
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
              <div style={{ width: '160px', height: '160px', borderRadius: '50%', background: 'var(--bg2)', border: '4px solid var(--border2)', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                <Image 
                  src="/images/general/founder.jpg" 
                  alt="Mohan Kumar S" 
                  width={160} 
                  height={160} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                />
              </div>
              <h3 style={{ fontSize: '18px', fontWeight: '800', margin: 0, color: 'var(--text)' }}>Mohan Kumar S</h3>
              <span style={{ fontSize: '13px', color: 'var(--accent-l)', fontWeight: '600' }}>Founder & CEO</span>
            </div>
            <div>
              <span className="tag">Founder Story</span>
              <h2 className="h2" style={{ fontFamily: 'var(--syne)', fontWeight: '700', letterSpacing: '-1px', color: 'var(--text)', margin: '8px 0 16px' }}>
                Building from Tamil Nadu
              </h2>
              <p style={{ fontSize: '15px', color: 'var(--muted)', lineHeight: '1.7', marginBottom: '20px' }}>
                "We reject general SaaS frameworks to build deep technical AI systems for physical industrial sectors. By controlling the direct architecture, training loops, and local databases, we deliver reliable and practical solutions for factories globally."
              </p>
              <p style={{ fontSize: '14px', color: 'var(--muted)', fontStyle: 'italic', marginBottom: '24px' }}>
                "Building practical AI systems today while working toward advanced AI technology for tomorrow."
              </p>
              <a href="https://www.linkedin.com/in/mohan-kumar-subramanian/" target="_blank" rel="noopener noreferrer" className="btn-ghost" style={{ border: '1px solid var(--border2)', padding: '10px 20px', borderRadius: '8px', fontSize: '14px', fontWeight: '600', color: 'var(--text)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                Connect on LinkedIn <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== INTAKE CONTACT FORM ===== */}
      <section id="contact" style={{ background: 'var(--bg2)', padding: '80px 0', borderTop: '1px solid var(--border)' }}>
        <div className="inner" style={{ maxWidth: '800px', margin: '0 auto', padding: '0 5%' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <span className="tag">Get Started</span>
            <h2 className="h2" style={{ fontFamily: 'var(--syne)', fontWeight: '700', letterSpacing: '-1px', color: 'var(--text)' }}>
              {t('contact_title')}
            </h2>
            <p className="lead" style={{ margin: '8px auto 0', color: 'var(--muted)' }}>
              {t('contact_subtitle')}
            </p>
          </div>
          <div style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: '16px', padding: '40px', boxShadow: 'var(--shadow)' }}>
            <ContactForm />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
