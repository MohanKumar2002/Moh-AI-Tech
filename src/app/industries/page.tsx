'use client';

import React from 'react';
import Link from 'next/link';
import Footer from '@/components/layout/footer';
import { Factory, Settings, Eye, Zap, Shield, ArrowRight } from 'lucide-react';

export default function Industries() {
  const sectors = [
    {
      title: 'CNC Precision Machining',
      subtitle: 'Tool wear & dimensional inspection checking',
      icon: <Settings size={28} className="text-blue-600" />,
      desc: 'Precision machining requires strict compliance with dimensions. We deploy computer vision cameras inside machining enclosures to automate part alignment and check surface finish parameters.',
      impacts: ['Automate optical inspections', 'Reduce component scrap counts', 'Detect tool chipping early']
    },
    {
      title: 'Automotive Component Assembly',
      subtitle: 'Conveyor sorting & visual verification',
      icon: <Factory size={28} className="text-blue-600" />,
      desc: 'Verify that seals, bolts, and visual features are correct on assemblies before shipment. Our models integrate directly with PLC systems to trigger air-jet sorting nozzles instantly.',
      impacts: ['Zero customer-received defects', 'Reduce physical inspection labor', 'Faster production cycles']
    },
    {
      title: 'PCB Assembly & Electronics',
      subtitle: 'Solder joints and orientations validation',
      icon: <Eye size={28} className="text-blue-600" />,
      desc: 'Detect misaligned capacitors, bridging, and dry joints on circuit boards using sub-millimeter vision models trained on custom PCB libraries.',
      impacts: ['High-speed optical inspection', 'Detect faults under 100ms', 'Lower warranty claim rates']
    },
    {
      title: 'Textile Manufacturing',
      subtitle: 'Weave and yarn consistency monitoring',
      icon: <Zap size={28} className="text-blue-600" />,
      desc: 'Run thread-defect checker models on high-speed weaving machines. Detect broken yarns, color consistency deviations, and surface holes in real time.',
      impacts: ['Continuous loom monitoring', 'Reduce fabric waste yards', 'Automate grade classifications']
    }
  ];

  const expansionRoadmap = [
    { sector: 'Warehousing & Logistics', timeline: 'Phase 2 (1-3 years)', desc: 'AI-driven optical package dimensioning and automated pallet sorting.' },
    { sector: 'Agriculture & Food Processing', timeline: 'Phase 2 (1-3 years)', desc: 'Fruit grading models and high-speed food color classification systems.' },
    { sector: 'Healthcare & Biotech', timeline: 'Phase 3 (3-5 years)', desc: 'Medical imaging classifiers and automated lab telemetry database consolidations.' },
    { sector: 'Robotics & Edge Hardware', timeline: 'Phase 4 (5-10 years)', desc: 'Custom processor nodes and robotics trajectory controllers built in India.' }
  ];

  return (
    <main className="min-h-screen bg-[var(--bg)] pt-28 pb-16">
      <div className="inner" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 5%' }}>
        
        {/* Header Section */}
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <span className="tag" style={{ background: 'rgba(0, 102, 204, 0.08)', color: 'var(--accent-l)' }}>Market Focus</span>
          <h1 className="h2" style={{ fontFamily: 'var(--syne)', fontSize: 'clamp(32px, 4.5vw, 48px)', fontWeight: '800', marginTop: '12px', letterSpacing: '-1px' }}>
            Industries We Serve
          </h1>
          <p className="lead" style={{ margin: '12px auto 0', maxWidth: '640px', color: 'var(--muted)' }}>
            We focus our deep-tech engineering capabilities on sectors with physical assets, telemetry sensor datasets, and strict quality requirements.
          </p>
        </div>

        {/* Sectors Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px', marginBottom: '80px' }}>
          {sectors.map((sec, idx) => (
            <div key={idx} className="card" style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: '16px', padding: '36px', boxShadow: 'var(--shadow)', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ background: 'var(--bg2)', width: '56px', height: '56px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {sec.icon}
              </div>
              <div>
                <h3 style={{ fontFamily: 'var(--syne)', fontSize: '20px', fontWeight: '800', color: 'var(--text)' }}>{sec.title}</h3>
                <div style={{ fontSize: '12px', color: 'var(--accent-l)', fontWeight: '600', marginBottom: '12px' }}>{sec.subtitle}</div>
                <p style={{ fontSize: '14px', color: 'var(--muted)', lineHeight: '1.6', marginBottom: '20px' }}>{sec.desc}</p>
                
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', borderTop: '1px solid var(--border)', paddingTop: '16px' }}>
                  {sec.impacts.map((imp, impIdx) => (
                    <li key={impIdx} style={{ fontSize: '13px', color: 'var(--text)', display: 'flex', alignItems: 'center', gap: '6px', fontWeight: '500' }}>
                      <span style={{ color: 'var(--accent-l)' }}>✓</span> <span>{imp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Long Term Sectors Roadmap */}
        <div style={{ background: 'var(--bg2)', border: '1px solid var(--border)', borderRadius: '16px', padding: '40px', marginBottom: '80px' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <span className="tag">Expansion Roadmap</span>
            <h2 style={{ fontFamily: 'var(--syne)', fontSize: '28px', fontWeight: '800', marginTop: '8px' }}>Future Sector Roadmaps</h2>
            <p style={{ color: 'var(--muted)', fontSize: '14px', marginTop: '4px' }}>
              While our immediate focus remains manufacturing intelligence, our architecture is built for long-term horizontal deep-tech expansions.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
            {expansionRoadmap.map((road, idx) => (
              <div key={idx} style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: '12px', padding: '24px' }}>
                <div style={{ fontSize: '11px', background: 'var(--bg2)', color: 'var(--accent-l)', display: 'inline-block', padding: '2px 8px', borderRadius: '4px', fontWeight: '700', marginBottom: '12px' }}>
                  {road.timeline}
                </div>
                <h4 style={{ fontFamily: 'var(--syne)', fontSize: '15px', fontWeight: '700', marginBottom: '6px' }}>{road.sector}</h4>
                <p style={{ fontSize: '12px', color: 'var(--muted)', lineHeight: '1.5' }}>{road.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Banner */}
        <div style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: '16px', padding: '48px', textAlign: 'center', boxShadow: 'var(--shadow)' }}>
          <h2 style={{ fontFamily: 'var(--syne)', fontSize: '28px', fontWeight: '800', marginBottom: '12px' }}>Request a Readiness Audit</h2>
          <p style={{ color: 'var(--muted)', fontSize: '15px', maxWidth: '540px', margin: '0 auto 24px', lineHeight: '1.6' }}>
            Let’s discuss if your machinery, camera networks, or historical defect logs are ready for AI integration.
          </p>
          <Link href="/contact" className="btn-primary" style={{ background: 'var(--grad)', color: '#fff', padding: '14px 28px', borderRadius: '8px', textDecoration: 'none', fontWeight: '600', fontSize: '15px', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
            Request AI Assessment <ArrowRight size={16} />
          </Link>
        </div>

      </div>
      <Footer />
    </main>
  );
}
