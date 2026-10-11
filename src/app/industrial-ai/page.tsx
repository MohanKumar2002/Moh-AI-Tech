'use client';

import React from 'react';
import Link from 'next/link';
import Footer from '@/components/layout/footer';
import { Eye, Activity, Layers, ArrowRight, ShieldCheck, Factory, Check } from 'lucide-react';

export default function IndustrialAI() {
  const solutions = [
    {
      id: 'vision',
      title: 'Moh-AI Vision',
      subtitle: 'AI Quality Inspection System',
      icon: <Eye size={36} className="text-blue-600" />,
      desc: 'High-speed computer vision systems designed to run locally on your assembly lines to detect structural defects, anomalies, surface scratches, and check component dimensions in real time.',
      features: ['Optical inspection models (under 80ms latency)', 'Surface scratch and crack detection', 'Orientation and layout checking', 'Industrial camera API integrations'],
      tech: 'PyTorch · OpenCV · Computer Vision'
    },
    {
      id: 'predictive',
      title: 'Moh-AI Predict',
      subtitle: 'Predictive Maintenance Intelligence',
      icon: <Activity size={36} className="text-blue-600" />,
      desc: 'Predictive machine failure forecasting using time-series sensor telemetry data. We train local machine learning models on vibration, temperature, and current outputs to flag early component wear.',
      features: ['Telemetry sensor anomaly detection', 'Tool wear and failure prediction', 'Maintenance scheduling optimization', 'SCADA and PLC data integrations'],
      tech: 'Machine Learning · Data Analytics · Python'
    },
    {
      id: 'intelligence',
      title: 'Moh-AI Factory Intelligence',
      subtitle: 'Industrial Knowledge and Analytics Platform',
      icon: <Layers size={36} className="text-blue-600" />,
      desc: 'Consolidate factory telemetry logs, operator guides, and maintenance SOP manuals into a private local model database. Empower your team with offline chat interfaces to troubleshoot machine faults instantly.',
      features: ['Retrieval-Augmented Generation (RAG)', '100% offline local indexing', 'Fast query responses', 'Actionable operational reports'],
      tech: 'RAG · LLMs · FastAPI · Vector Database'
    }
  ];

  const targetSectors = [
    { title: 'CNC Manufacturers', desc: 'Automating visual check systems for precision-machined component dimensions and tool wear telemetry.' },
    { title: 'Automotive Suppliers', desc: 'Conveyor quality checks checking pass/fail defect parameters before packaging and shipment.' },
    { title: 'Engineering Companies', desc: 'Predictive time-series wear analytics and custom sensor anomaly integrations.' },
    { title: 'Electronics Manufacturers', desc: 'High-speed PCB alignment checks, orientation verification, and solder inspection.' },
    { title: 'Textile Industries', desc: 'Optical surface inspections checking weave consistency and fabric defects in real time.' }
  ];

  return (
    <main className="min-h-screen bg-[var(--bg)] pt-28 pb-16">
      <div className="inner" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 5%' }}>
        
        {/* Hero Section */}
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <span className="tag" style={{ background: 'rgba(0, 102, 204, 0.08)', color: 'var(--accent-l)' }}>Industrial AI Solutions</span>
          <h1 className="h2" style={{ fontFamily: 'var(--syne)', fontSize: 'clamp(32px, 4.5vw, 48px)', fontWeight: '800', marginTop: '12px', letterSpacing: '-1px' }}>
            Transform Manufacturing with Artificial Intelligence
          </h1>
          <p className="lead" style={{ margin: '12px auto 0', maxWidth: '640px', color: 'var(--muted)' }}>
            We build secure, practical, and localized AI systems to help factories reduce manual defect inspections and prevent unplanned machine downtime.
          </p>
        </div>

        {/* Core Solutions Spec */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '48px', marginBottom: '80px' }}>
          {solutions.map((sol) => (
            <div key={sol.id} id={sol.id} style={{ display: 'grid', gridTemplateColumns: '80px 1fr', gap: '24px', background: 'var(--card)', border: '1px solid var(--border)', borderRadius: '16px', padding: '36px', boxShadow: 'var(--shadow)', scrollMarginTop: '100px' }}>
              <div style={{ width: '64px', height: '64px', borderRadius: '12px', background: 'var(--bg2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {sol.icon}
              </div>
              <div>
                <h3 style={{ fontFamily: 'var(--syne)', fontSize: '22px', fontWeight: '800', color: 'var(--text)' }}>{sol.title}</h3>
                <div style={{ fontSize: '13px', color: 'var(--accent-l)', fontWeight: '600', marginBottom: '16px', letterSpacing: '0.5px' }}>{sol.subtitle}</div>
                <p style={{ fontSize: '15px', color: 'var(--muted)', lineHeight: '1.65', marginBottom: '24px' }}>{sol.desc}</p>
                
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '12px', borderTop: '1px solid var(--border)', paddingTop: '20px', marginBottom: '20px' }}>
                  {sol.features.map((feat, fIdx) => (
                    <div key={fIdx} style={{ fontSize: '14px', color: 'var(--text)', display: 'flex', alignItems: 'center', gap: '8px', fontWeight: '500' }}>
                      <span style={{ color: 'var(--accent-l)' }}>✓</span> <span>{feat}</span>
                    </div>
                  ))}
                </div>

                <div style={{ fontSize: '12px', background: 'var(--bg2)', padding: '6px 12px', borderRadius: '6px', color: 'var(--muted)', fontWeight: '600', display: 'inline-block' }}>
                  STACK: {sol.tech}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Problems Solved Row */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', marginBottom: '80px', background: 'var(--bg2)', border: '1px solid var(--border)', borderRadius: '16px', padding: '40px' }}>
          <div>
            <span className="tag">Problems Solved</span>
            <h2 style={{ fontFamily: 'var(--syne)', fontSize: '28px', fontWeight: '800', marginTop: '8px', marginBottom: '16px' }}>Targeted Plant Friction</h2>
            <p style={{ fontSize: '15px', color: 'var(--muted)', lineHeight: '1.6' }}>
              We eliminate traditional manual bottlenecks and operational overheads by deploying reliable edge models directly on the shop floor.
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {[
              { title: 'Manual Inspection Errors', text: 'Visual checks are subjective and suffer from fatigue rate deviations.' },
              { title: 'Reactive Machine Downtime', text: 'Unscheduled component wear causes packaging and order delays.' },
              { title: 'Production Inefficiency', text: 'Legacy SCADA data silos prevent automatic performance summaries.' }
            ].map((prob, idx) => (
              <div key={idx} style={{ display: 'flex', gap: '12px' }}>
                <span style={{ color: '#0066CC', fontWeight: '700' }}>!</span>
                <div>
                  <h4 style={{ fontSize: '15px', fontWeight: '700' }}>{prob.title}</h4>
                  <p style={{ fontSize: '13px', color: 'var(--muted)' }}>{prob.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Designed For Section */}
        <div style={{ marginBottom: '80px' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <span className="tag">Audience</span>
            <h2 style={{ fontFamily: 'var(--syne)', fontSize: '28px', fontWeight: '800', marginTop: '8px' }}>Designed For</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
            {targetSectors.map((sector, idx) => (
              <div key={idx} style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: '12px', padding: '24px', boxShadow: 'var(--shadow)' }}>
                <h4 style={{ fontFamily: 'var(--syne)', fontSize: '16px', fontWeight: '700', marginBottom: '8px', color: 'var(--text)' }}>{sector.title}</h4>
                <p style={{ fontSize: '13px', color: 'var(--muted)', lineHeight: '1.5' }}>{sector.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Co-Innovation Pilot Program Layout */}
        <div style={{ background: 'var(--card)', border: '2px solid var(--accent-l)', borderRadius: '20px', padding: '48px', textAlign: 'center', boxShadow: '0 8px 30px rgba(0, 102, 204, 0.06)' }}>
          <span className="tag" style={{ background: 'rgba(0, 102, 204, 0.08)', color: 'var(--accent-l)' }}>B2B Partnership</span>
          <h2 style={{ fontFamily: 'var(--syne)', fontSize: '32px', fontWeight: '800', marginTop: '12px', marginBottom: '16px' }}>Industrial AI Pilot Program</h2>
          <p style={{ maxWidth: '640px', margin: '0 auto 32px', color: 'var(--muted)', fontSize: '15px' }}>
            We work with selected manufacturing companies to solve one real operational problem using custom AI. Apply today to secure a co-innovation slot.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '16px', textAlign: 'left', marginBottom: '40px' }}>
            {[
              { id: '1', title: 'Factory Assessment', text: 'Identify the visual defects or sensory variables to monitor.' },
              { id: '2', title: 'Data Evaluation', text: 'Evaluate existing sensor readings or sample defect photos.' },
              { id: '3', title: 'AI Prototype', text: 'Train customized neural network models offline.' },
              { id: '4', title: 'Pilot Deployment', text: 'Install the model on-site for real-world validation checks.' },
              { id: '5', title: 'ROI Analysis', text: 'Verify defect catches, sorting accuracy, and downtime metrics.' }
            ].map((pStep) => (
              <div key={pStep.id} style={{ background: 'var(--bg2)', border: '1px solid var(--border)', borderRadius: '8px', padding: '20px' }}>
                <div style={{ fontSize: '20px', fontWeight: '800', color: 'var(--accent-l)', marginBottom: '8px' }}>0{pStep.id}</div>
                <h4 style={{ fontSize: '14px', fontWeight: '700', marginBottom: '6px' }}>{pStep.title}</h4>
                <p style={{ fontSize: '12px', color: 'var(--muted)', lineHeight: '1.4' }}>{pStep.text}</p>
              </div>
            ))}
          </div>

          <Link href="/contact?path=industrial" className="btn-primary" style={{ background: 'var(--grad)', color: '#fff', padding: '14px 28px', borderRadius: '8px', textDecoration: 'none', fontWeight: '600', fontSize: '15px', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
            Apply for Industrial AI Pilot <ArrowRight size={16} />
          </Link>
        </div>

      </div>
      <Footer />
    </main>
  );
}
