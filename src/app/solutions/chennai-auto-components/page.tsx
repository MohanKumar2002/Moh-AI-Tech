'use client';

import React from 'react';
import Link from 'next/link';
import Footer from '@/components/layout/footer';
import { 
  Factory, 
  Settings2, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  MapPin, 
  Activity, 
  Gauge
} from 'lucide-react';

export default function ChennaiAutoClusterPage() {
  return (
    <main className="min-h-screen bg-[var(--bg)] pt-28 pb-16 text-[var(--text)]">
      <div className="inner" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 5%' }}>
        
        {/* Breadcrumb / Region Tag */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: 'var(--muted)', marginBottom: '16px' }}>
          <MapPin size={14} style={{ color: 'var(--accent)' }} />
          <span>Tamil Nadu Industrial Corridors</span>
          <span>/</span>
          <span style={{ color: 'var(--text)', fontWeight: '700' }}>Chennai Automotive Hub (Sriperumbudur · Oragadam · Ambattur)</span>
        </div>

        {/* Hero Section */}
        <div style={{ marginBottom: '56px' }}>
          <span className="tag" style={{ background: 'rgba(0, 102, 204, 0.08)', color: 'var(--accent-l)' }}>
            TIER 1 & TIER 2 AUTOMOTIVE CORRIDOR
          </span>
          <h1 style={{ fontFamily: 'var(--syne)', fontSize: 'clamp(32px, 4.5vw, 48px)', fontWeight: '800', marginTop: '12px', letterSpacing: '-1px', lineHeight: 1.15 }}>
            Zero-Defect Edge Machine Vision for Chennai Automotive Component Suppliers
          </h1>
          <p style={{ margin: '16px 0 24px', maxWidth: '780px', color: 'var(--muted)', fontSize: '16px', lineHeight: 1.65 }}>
            Automotive OEMs penalize ppm defects heavily. Moh-AI VisionInspect deploys sub-15ms deep learning edge models on NVIDIA Jetson hardware to verify fastener torque marks, O-ring seal seating, and stamped sheet metal burrs before delivery to assembly plants.
          </p>

          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <Link 
              href="/contact?service=chennai-auto-pilot" 
              style={{ background: 'var(--accent)', color: '#fff', padding: '14px 28px', borderRadius: '8px', fontWeight: '700', fontSize: '15px', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px', boxShadow: '0 8px 20px rgba(0, 102, 204, 0.25)' }}
            >
              Book Automotive Feasibility Pilot <ArrowRight size={16} />
            </Link>
            <Link 
              href="/tools/roi-calculator" 
              style={{ background: 'var(--card)', color: 'var(--text)', border: '1px solid var(--border2)', padding: '14px 24px', borderRadius: '8px', fontWeight: '700', fontSize: '15px', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
            >
              Calculate OEM Rejection Cost Savings
            </Link>
          </div>
        </div>

        {/* Automotive Applications */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '28px', marginBottom: '64px' }}>
          
          <div style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: '16px', padding: '32px', boxShadow: 'var(--shadow)' }}>
            <div style={{ background: 'var(--bg2)', width: '50px', height: '50px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
              <Gauge size={26} style={{ color: 'var(--accent)' }} />
            </div>
            <h3 style={{ fontSize: '18px', fontWeight: '800', fontFamily: 'var(--syne)', marginBottom: '10px' }}>
              Rubber O-Ring & Oil Seal Seating Check
            </h3>
            <p style={{ fontSize: '14px', color: 'var(--muted)', lineHeight: 1.6, marginBottom: '16px' }}>
              Confirm presence, orientation, twisting, and pinch damage of elastomeric seals inside transmission housings and hydraulic assemblies before high-pressure testing.
            </p>
            <ul style={{ listStyle: 'none', fontSize: '13px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <li style={{ display: 'flex', gap: '8px', color: 'var(--text)' }}><CheckCircle2 size={16} style={{ color: 'var(--accent)' }} /> Detects 0.05mm pinch deformities</li>
              <li style={{ display: 'flex', gap: '8px', color: 'var(--text)' }}><CheckCircle2 size={16} style={{ color: 'var(--accent)' }} /> Multi-camera 360-degree groove inspection</li>
            </ul>
          </div>

          <div style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: '16px', padding: '32px', boxShadow: 'var(--shadow)' }}>
            <div style={{ background: 'var(--bg2)', width: '50px', height: '50px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
              <Factory size={26} style={{ color: 'var(--accent)' }} />
            </div>
            <h3 style={{ fontSize: '18px', fontWeight: '800', fontFamily: 'var(--syne)', marginBottom: '10px' }}>
              Fastener Presence & Thread Verification
            </h3>
            <p style={{ fontSize: '14px', color: 'var(--muted)', lineHeight: 1.6, marginBottom: '16px' }}>
              Verify bolt torque stripe alignment, thread presence, missing spring washers, and cross-threading on chassis and sub-frame assemblies at conveyor line speeds.
            </p>
            <ul style={{ listStyle: 'none', fontSize: '13px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <li style={{ display: 'flex', gap: '8px', color: 'var(--text)' }}><CheckCircle2 size={16} style={{ color: 'var(--accent)' }} /> 100% assembly verification before dispatch</li>
              <li style={{ display: 'flex', gap: '8px', color: 'var(--text)' }}><CheckCircle2 size={16} style={{ color: 'var(--accent)' }} /> Digital pass/fail trigger to interlocking PLC</li>
            </ul>
          </div>

          <div style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: '16px', padding: '32px', boxShadow: 'var(--shadow)' }}>
            <div style={{ background: 'var(--bg2)', width: '50px', height: '50px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
              <Settings2 size={26} style={{ color: 'var(--accent)' }} />
            </div>
            <h3 style={{ fontSize: '18px', fontWeight: '800', fontFamily: 'var(--syne)', marginBottom: '10px' }}>
              Stamped Sheet Metal Burr & Crack Detection
            </h3>
            <p style={{ fontSize: '14px', color: 'var(--muted)', lineHeight: 1.6, marginBottom: '16px' }}>
              High-speed optical inspection of progressive die stampings. Flags die wear, excessive burr heights, and micro-cracks before components reach the robotic welding cell.
            </p>
            <ul style={{ listStyle: 'none', fontSize: '13px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <li style={{ display: 'flex', gap: '8px', color: 'var(--text)' }}><CheckCircle2 size={16} style={{ color: 'var(--accent)' }} /> Prevents catastrophic weld robot tip damage</li>
              <li style={{ display: 'flex', gap: '8px', color: 'var(--text)' }}><CheckCircle2 size={16} style={{ color: 'var(--accent)' }} /> Edge inference time under 20ms</li>
            </ul>
          </div>

        </div>

        {/* Compliance & OEM Standards */}
        <div style={{ background: 'var(--bg2)', border: '1px solid var(--border)', borderRadius: '16px', padding: '40px', marginBottom: '56px' }}>
          <h2 style={{ fontFamily: 'var(--syne)', fontSize: '26px', fontWeight: '800', marginBottom: '16px', color: 'var(--text)' }}>
            IATF 16949 & Zero-Defect Quality Assurance
          </h2>
          <p style={{ color: 'var(--muted)', fontSize: '15px', lineHeight: 1.65, maxWidth: '850px', marginBottom: '28px' }}>
            Meeting global automotive quality standards requires complete traceability. VisionInspect logs high-resolution defect imagery with timestamped barcodes into your local MES or SCADA system for instantaneous audit retrieval.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
            <div style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: '12px', padding: '20px' }}>
              <div style={{ fontWeight: '800', fontSize: '16px', color: 'var(--text)', marginBottom: '4px' }}>Modbus & OPC-UA</div>
              <div style={{ fontSize: '13px', color: 'var(--muted)' }}>Seamless integration with Siemens, Mitsubishi, and Allen-Bradley PLCs.</div>
            </div>
            <div style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: '12px', padding: '20px' }}>
              <div style={{ fontWeight: '800', fontSize: '16px', color: 'var(--text)', marginBottom: '4px' }}>Automated Reject Gate</div>
              <div style={{ fontSize: '13px', color: 'var(--muted)' }}>Direct 24V isolated optocoupler pulse to pneumatic diverter arms.</div>
            </div>
            <div style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: '12px', padding: '20px' }}>
              <div style={{ fontWeight: '800', fontSize: '16px', color: 'var(--text)', marginBottom: '4px' }}>Traceability Storage</div>
              <div style={{ fontSize: '13px', color: 'var(--muted)' }}>Local encrypted SSD logs of every component inspected with serial tags.</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: '16px', padding: '48px', textAlign: 'center', boxShadow: 'var(--shadow)' }}>
          <h2 style={{ fontFamily: 'var(--syne)', fontSize: '28px', fontWeight: '800', marginBottom: '12px' }}>
            Request Line Feasibility Review in Sriperumbudur / Oragadam
          </h2>
          <p style={{ color: 'var(--muted)', fontSize: '15px', maxWidth: '600px', margin: '0 auto 24px', lineHeight: 1.6 }}>
            Our engineering team conducts on-site line assessments to measure conveyor speeds, lighting requirements, and mounting envelopes.
          </p>
          <Link 
            href="/contact?service=chennai-auto-audit" 
            style={{ background: 'var(--accent)', color: '#fff', padding: '14px 32px', borderRadius: '8px', fontWeight: '700', fontSize: '15px', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
          >
            Schedule Automotive Line Pilot <ArrowRight size={16} />
          </Link>
        </div>

      </div>
      <Footer />
    </main>
  );
}
