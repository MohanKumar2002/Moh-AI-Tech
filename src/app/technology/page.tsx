'use client';

import React from 'react';
import Footer from '@/components/layout/footer';
import { Cpu, Terminal, Database, Server, Workflow, Check } from 'lucide-react';

export default function Technology() {
  const stack = [
    {
      title: 'Machine Learning Models & Logic',
      desc: 'We train convolutional neural networks and time-series forecasting models using industry-standard machine learning libraries.',
      icon: <Cpu size={28} className="text-blue-600" />,
      items: ['PyTorch (Model training)', 'TensorFlow (Inferences)', 'Scikit-Learn (Analytics models)', 'Python (Core backend)']
    },
    {
      title: 'Computer Vision & Optical Ingestion',
      desc: 'Process visual frames locally inside enclosures or assembly lines at sub-100ms latency limits.',
      icon: <Terminal size={28} className="text-blue-600" />,
      items: ['OpenCV (Optical streams parsing)', 'PIL & NumPy (Array processing)', 'Fast CV (High-speed filters)', 'IP camera RTSP parsing']
    },
    {
      title: 'Vector Stores & Telemetry Databases',
      desc: 'Integrate telemetry logging and vector embeddings tables securely on-site.',
      icon: <Database size={28} className="text-blue-600" />,
      items: ['PostgreSQL (Primary operational tables)', 'pgvector (Local vector databases)', 'Redis (In-memory telemetry caching)', 'Prisma (ORM mappings)']
    },
    {
      title: 'Private API Server & Deployment',
      desc: 'Air-gapped compute structures to process datasets locally without external API requirements.',
      icon: <Server size={28} className="text-blue-600" />,
      items: ['FastAPI & Uvicorn (Private APIs)', 'Docker (Local container builds)', 'Ubuntu Server (Compute nodes)', 'On-premise secure firewalls']
    }
  ];

  const engineeringCapabilities = [
    { cap: 'Generative AI Applications', status: 'Full Production Capability', desc: 'Deploying custom LLM integrations, parsing tools, and domain-specific content APIs.' },
    { cap: 'Autonomous AI Agents', status: 'Active Development & Deployment', desc: 'Engineering multi-agent orchestration files, recursive task loops, and tool integrations.' },
    { cap: 'RAG Systems & Embeddings', status: 'Full Production Capability', desc: 'Building semantic database indexes using local pgvector search queries.' },
    { cap: 'Natural Language Processing', status: 'Full Production Capability', desc: 'Tabular extraction, custom OCR parsing, classification, and text segmentation.' },
    { cap: 'Computer Vision Systems', status: 'Core Competency', desc: 'Deploying conveyor cameras, pass/fail visual inspectors, and defect sorting checks.' },
    { cap: 'Data Intelligence platforms', status: 'Core Competency', desc: 'Integrating SCADA sensor outputs, vibration readings, and automated CSV logs.' },
    { cap: 'Full-stack AI Integrations', status: 'Full Production Capability', desc: 'Creating React dashboards, FastAPI services, and local container orchestration.' }
  ];

  return (
    <main className="min-h-screen bg-[var(--bg)] pt-32 pb-12 flex flex-col justify-between">
      <div className="inner" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 5%' }}>
        
        {/* Header Section */}
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <span className="tag" style={{ background: 'rgba(0, 102, 204, 0.08)', color: 'var(--accent-l)' }}>Technical Framework</span>
          <h1 className="h2" style={{ fontFamily: 'var(--syne)', fontSize: 'clamp(32px, 4.5vw, 48px)', fontWeight: '800', marginTop: '12px', letterSpacing: '-1px' }}>
            Technology & Engineering Stack
          </h1>
          <p className="lead" style={{ margin: '12px auto 0', maxWidth: '640px', color: 'var(--muted)' }}>
            We build on production-grade, reliable libraries and air-gapped container configurations to ensure your industrial data remains secure.
          </p>
        </div>

        {/* Tech Stack Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginBottom: '80px' }}>
          {stack.map((tech, idx) => (
            <div key={idx} className="card fu" style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: '12px', padding: '32px', boxShadow: 'var(--shadow)' }}>
              <div style={{ background: 'var(--bg2)', width: '56px', height: '56px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                {tech.icon}
              </div>
              <h3 style={{ fontSize: '18px', fontWeight: '800', color: 'var(--text)', fontFamily: 'var(--syne)', marginBottom: '8px' }}>{tech.title}</h3>
              <p style={{ fontSize: '13px', color: 'var(--muted)', lineHeight: '1.6', marginBottom: '20px' }}>{tech.desc}</p>
              
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', borderTop: '1px solid var(--border)', paddingTop: '16px' }}>
                {tech.items.map((item, itemIdx) => (
                  <li key={itemIdx} style={{ fontSize: '13px', color: 'var(--text)', display: 'flex', alignItems: 'center', gap: '8px', fontWeight: '500' }}>
                    <span style={{ color: 'var(--accent-l)' }}>✓</span> <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Broad Engineering Capabilities Matrix */}
        <div style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: '16px', padding: '40px', boxShadow: 'var(--shadow)', marginBottom: '80px' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <span className="tag">Engineering Scope</span>
            <h2 style={{ fontFamily: 'var(--syne)', fontSize: '28px', fontWeight: '800', marginTop: '8px' }}>Engineering Capabilities Matrix</h2>
            <p style={{ color: 'var(--muted)', fontSize: '14px', marginTop: '4px' }}>
              Our broad technical competence enables us to design full-scale digital systems alongside core industrial telemetry models.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {engineeringCapabilities.map((item, idx) => (
              <div key={idx} style={{ display: 'grid', gridTemplateColumns: '260px 180px 1fr', gap: '24px', alignItems: 'center', borderBottom: '1px solid var(--border)', paddingBottom: '16px', paddingTop: idx === 0 ? '0' : '16px' }}>
                <h4 style={{ fontFamily: 'var(--syne)', fontSize: '15px', fontWeight: '800', color: 'var(--text)' }}>{item.cap}</h4>
                <div style={{ fontSize: '12px', background: 'var(--bg2)', color: 'var(--accent-l)', padding: '4px 10px', borderRadius: '4px', fontWeight: '600', textTransform: 'uppercase', textAlign: 'center', border: '1px solid var(--border2)' }}>
                  {item.status}
                </div>
                <p style={{ fontSize: '13px', color: 'var(--muted)', margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
      <Footer />
    </main>
  );
}
