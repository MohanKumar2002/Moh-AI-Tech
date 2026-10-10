'use client';

import React from 'react';
import Link from 'next/link';
import Footer from '@/components/layout/footer';
import { Bot, Sparkles, Database, FileText, Eye, Cpu, Activity, ArrowRight } from 'lucide-react';

export default function AIProductEngineering() {
  const capabilities = [
    {
      title: 'Generative AI Applications',
      desc: 'Build customizable chat interfaces, structured content generation flows, and localized language model tools tailored for specific business domains.',
      icon: <Sparkles size={28} className="text-blue-600" />
    },
    {
      title: 'AI Agents',
      desc: 'Deploy autonomous software loops that integrate tool calls, read local filesystem parameters, and run multi-agent scripts to complete complex tasks.',
      icon: <Bot size={28} className="text-blue-600" />
    },
    {
      title: 'Retrieval-Augmented Generation (RAG)',
      desc: 'Establish high-fidelity semantic document indexing databases using local vector stores (e.g. pgvector) for instant offline knowledge access.',
      icon: <Database size={28} className="text-blue-600" />
    },
    {
      title: 'Document Intelligence',
      desc: 'Automate the ingestion and parsing of printed machinery files, handwritten logs, and custom PDFs into structured JSON schemas.',
      icon: <FileText size={28} className="text-blue-600" />
    },
    {
      title: 'Computer Vision Systems',
      desc: 'Engineer customized object detection, spatial analysis, and pass/fail classification models for non-factory visual contexts.',
      icon: <Eye size={28} className="text-blue-600" />
    },
    {
      title: 'Automation Systems',
      desc: 'Design background task schedulers and secure webhook APIs that link telemetry signals to CRM interfaces (e.g. HubSpot, email updates).',
      icon: <Cpu size={28} className="text-blue-600" />
    },
    {
      title: 'Machine Learning Models',
      desc: 'Train custom regression, classification, and forecast models on time-series telemetry data to optimize operational parameters.',
      icon: <Activity size={28} className="text-blue-600" />
    }
  ];

  return (
    <main className="min-h-screen bg-[var(--bg)] pt-32 pb-12 flex flex-col justify-between">
      <div className="inner" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 5%' }}>
        
        {/* Hero Section */}
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <span className="tag" style={{ background: 'rgba(0, 102, 204, 0.08)', color: 'var(--accent-l)' }}>Development Services</span>
          <h1 className="h2" style={{ fontFamily: 'var(--syne)', fontSize: 'clamp(32px, 4.5vw, 48px)', fontWeight: '800', marginTop: '12px', letterSpacing: '-1px' }}>
            Custom AI Product Engineering
          </h1>
          <p className="lead" style={{ margin: '12px auto 0', maxWidth: '640px', color: 'var(--muted)' }}>
            We design, train, and deploy custom intelligent software systems, offline models, and agent architectures for global startups and businesses.
          </p>
        </div>

        {/* Capabilities Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px', marginBottom: '80px' }}>
          {capabilities.map((cap, idx) => (
            <div key={idx} className="card fu" style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: '16px', padding: '36px', boxShadow: 'var(--shadow)', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ background: 'var(--bg2)', width: '56px', height: '56px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {cap.icon}
              </div>
              <h3 style={{ fontSize: '18px', fontWeight: '800', color: 'var(--text)', fontFamily: 'var(--syne)' }}>{cap.title}</h3>
              <p style={{ fontSize: '14px', color: 'var(--muted)', lineHeight: '1.6', flexGrow: 1 }}>{cap.desc}</p>
            </div>
          ))}
        </div>

        {/* Engagement Philosophy Row */}
        <div style={{ background: 'var(--bg2)', border: '1px solid var(--border)', borderRadius: '16px', padding: '40px', marginBottom: '80px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '48px', alignItems: 'center' }}>
            <div>
              <span className="tag">Flexible Engagement Models</span>
              <h2 style={{ fontFamily: 'var(--syne)', fontSize: '28px', fontWeight: '800', marginTop: '8px', marginBottom: '16px' }}>Technical Partnership Architecture</h2>
              <p style={{ fontSize: '15px', color: 'var(--muted)', lineHeight: '1.6', marginBottom: '20px' }}>
                We believe in simple, milestone-based outcomes instead of long-term lock-in retainers. We define scope limits clearly, build prototypes quickly, and deliver full ownership rights.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                <div style={{ fontSize: '13px', background: 'var(--card)', padding: '6px 12px', borderRadius: '6px', border: '1px solid var(--border2)', fontWeight: '600' }}>✓ Full IP Ownership</div>
                <div style={{ fontSize: '13px', background: 'var(--card)', padding: '6px 12px', borderRadius: '6px', border: '1px solid var(--border2)', fontWeight: '600' }}>✓ Milestone-based Billing</div>
                <div style={{ fontSize: '13px', background: 'var(--card)', padding: '6px 12px', borderRadius: '6px', border: '1px solid var(--border2)', fontWeight: '600' }}>✓ Direct Technical Support</div>
              </div>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', borderLeft: '2px solid var(--accent-l)', paddingLeft: '32px' }}>
              <div>
                <h4 style={{ fontWeight: '700', fontSize: '15px' }}>Project-Based POCs</h4>
                <p style={{ fontSize: '13px', color: 'var(--muted)' }}>Ideal for starting quickly with limited budget parameters. Fixed pricing, direct milestones.</p>
              </div>
              <div>
                <h4 style={{ fontWeight: '700', fontSize: '15px' }}>Dedicated AI Sprint</h4>
                <p style={{ fontSize: '13px', color: 'var(--muted)' }}>Iterative custom software design sprint, reviewing updates weekly.</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Banner */}
        <div style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: '16px', padding: '48px', textAlign: 'center', boxShadow: 'var(--shadow)' }}>
          <h2 style={{ fontFamily: 'var(--syne)', fontSize: '28px', fontWeight: '800', marginBottom: '12px' }}>Need a Custom AI Product?</h2>
          <p style={{ color: 'var(--muted)', fontSize: '15px', maxWidth: '540px', margin: '0 auto 24px', lineHeight: '1.6' }}>
            Let’s discuss your technical requirements, vectors dataset integrations, or agent flow architectures.
          </p>
          <Link href="/contact?path=solutions" className="btn-primary" style={{ background: 'var(--grad)', color: '#fff', padding: '14px 28px', borderRadius: '8px', textDecoration: 'none', fontWeight: '600', fontSize: '15px', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
            Request AI Assessment <ArrowRight size={16} />
          </Link>
        </div>

      </div>
      <Footer />
    </main>
  );
}
