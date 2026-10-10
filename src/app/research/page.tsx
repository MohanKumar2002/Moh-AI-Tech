'use client';

import React from 'react';
import Footer from '@/components/layout/footer';
import { Microscope, Code, Sparkles, BookOpen, Layers } from 'lucide-react';

export default function Research() {
  const researchPapers = [
    {
      title: 'Adaptive AI Prompt Correction in Local Inferences',
      topic: 'Contextual Alignment Systems',
      desc: 'Investigating real-time corrections to LLM instructions on-device to match exact machinery SOP variables without retraining models.',
      icon: <Sparkles size={28} className="text-blue-600" />
    },
    {
      title: 'Human-Aware AI Gestures on Production Lines',
      topic: 'Multi-Modal Operators Interfaces',
      desc: 'Developing lightweight spatial classifiers to parse video feeds, translating operator hand gestures into system commands offline.',
      icon: <Microscope size={28} className="text-blue-600" />
    },
    {
      title: 'Energy-Efficient Edge Deep Learning',
      topic: 'Optimized Edge Embeddings',
      desc: 'Compressing vision checking models to execute on low-power chips (e.g. Raspberry Pi, Jetson Nano) directly on-site.',
      icon: <BookOpen size={28} className="text-blue-600" />
    }
  ];

  const auxiliaryProofs = [
    {
      title: 'Resume AI Parser POC',
      tech: 'Python · NLP · PyPDF',
      desc: 'A parser script that automatically extracts candidate job credentials, contact variables, and formatting summaries from PDFs.'
    },
    {
      title: 'Recruiter Chatbot Prototype',
      tech: 'React · FastAPI · WebSockets',
      desc: 'An automated websocket conversational interface that handles interview scheduling and candidate pre-screening checks.'
    },
    {
      title: 'Telemetry Trading Script',
      tech: 'Python · Scikit-Learn · pandas',
      desc: 'A telemetry trading script analyzing daily stock metrics and outputting simple regression-based support levels.'
    }
  ];

  return (
    <main className="min-h-screen bg-[var(--bg)] pt-32 pb-12 flex flex-col justify-between">
      <div className="inner" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 5%' }}>
        
        {/* Header Section */}
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <span className="tag" style={{ background: 'rgba(0, 102, 204, 0.08)', color: 'var(--accent-l)' }}>R&D Projects</span>
          <h1 className="h2" style={{ fontFamily: 'var(--syne)', fontSize: 'clamp(32px, 4.5vw, 48px)', fontWeight: '800', marginTop: '12px', letterSpacing: '-1px' }}>
            Research Lab & Technical Proofs
          </h1>
          <p className="lead" style={{ margin: '12px auto 0', maxWidth: '640px', color: 'var(--muted)' }}>
            We invest in machine learning research to solve complex physical-world alignment challenges and edge-compute resource limitations.
          </p>
        </div>

        {/* Research Initiatives Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px', marginBottom: '80px' }}>
          {researchPapers.map((paper, idx) => (
            <div key={idx} className="card fu" style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: '16px', padding: '36px', boxShadow: 'var(--shadow)', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ background: 'var(--bg2)', width: '56px', height: '56px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {paper.icon}
              </div>
              <div>
                <h3 style={{ fontFamily: 'var(--syne)', fontSize: '18px', fontWeight: '800', color: 'var(--text)' }}>{paper.title}</h3>
                <div style={{ fontSize: '12px', color: 'var(--accent-l)', fontWeight: '600', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>{paper.topic}</div>
                <p style={{ fontSize: '13px', color: 'var(--muted)', lineHeight: '1.6' }}>{paper.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Auxiliary Engineering Proofs (Previous Projects) */}
        <div style={{ background: 'var(--bg2)', border: '1px solid var(--border)', borderRadius: '16px', padding: '40px', marginBottom: '80px' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <span className="tag" style={{ background: 'rgba(10,37,64,0.05)', color: 'var(--text)' }}>Technical Depth</span>
            <h2 style={{ fontFamily: 'var(--syne)', fontSize: '28px', fontWeight: '800', marginTop: '8px' }}>Auxiliary Engineering Proofs</h2>
            <p style={{ color: 'var(--muted)', fontSize: '14px', marginTop: '4px', maxWidth: '600px', margin: '0 auto' }}>
              To prove our technical capability outside industrial B2B boundaries, we host a repository of non-industrial prototypes engineered by our team.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            {auxiliaryProofs.map((proof, idx) => (
              <div key={idx} style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: '12px', padding: '28px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <h4 style={{ fontFamily: 'var(--syne)', fontSize: '16px', fontWeight: '800' }}>{proof.title}</h4>
                  <span style={{ fontSize: '10px', background: 'var(--bg2)', padding: '2px 6px', borderRadius: '4px', border: '1px solid var(--border2)', fontWeight: '600', color: 'var(--muted)', whiteSpace: 'nowrap' }}>POC Code</span>
                </div>
                <p style={{ fontSize: '13px', color: 'var(--muted)', lineHeight: '1.5', flexGrow: 1 }}>{proof.desc}</p>
                <div style={{ fontSize: '11px', color: 'var(--accent-l)', fontWeight: '600', borderTop: '1px solid var(--border)', paddingTop: '10px', marginTop: '4px' }}>
                  Tech: {proof.tech}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
      <Footer />
    </main>
  );
}
