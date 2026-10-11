'use client';

import React from 'react';
import Link from 'next/link';
import Footer from '@/components/layout/footer';
import { 
  Factory, 
  Settings2, 
  Cpu, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  MapPin, 
  Eye, 
  Activity, 
  FileCheck2 
} from 'lucide-react';

export default function CoimbatoreClusterPage() {
  return (
    <main className="min-h-screen bg-[var(--bg)] pt-28 pb-16 text-[var(--text)]">
      <div className="inner" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 5%' }}>
        
        {/* Breadcrumb / Region Tag */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: 'var(--muted)', marginBottom: '16px' }}>
          <MapPin size={14} style={{ color: 'var(--accent)' }} />
          <span>Tamil Nadu Industrial Corridors</span>
          <span>/</span>
          <span style={{ color: 'var(--text)', fontWeight: '700' }}>Coimbatore Foundry & Machining Cluster</span>
        </div>

        {/* Hero Section */}
        <div style={{ marginBottom: '56px' }}>
          <span className="tag" style={{ background: 'rgba(0, 102, 204, 0.08)', color: 'var(--accent-l)' }}>
            CODISSIA & SIDCO INDUSTRIAL BELT
          </span>
          <h1 style={{ fontFamily: 'var(--syne)', fontSize: 'clamp(32px, 4.5vw, 48px)', fontWeight: '800', marginTop: '12px', letterSpacing: '-1px', lineHeight: 1.15 }}>
            Sub-Millimeter Optical Inspection for Coimbatore Pump, Valve & Machining Clusters
          </h1>
          <p style={{ margin: '16px 0 24px', maxWidth: '780px', color: 'var(--muted)', fontSize: '16px', lineHeight: 1.65 }}>
            Engineered specifically for Coimbatore’s foundries, motor stator winding units, and CNC machining plants. Moh-AI VisionInspect deploys 100% on-premise edge cameras to catch surface porosities, burrs, and dimensional defects before shipment.
          </p>

          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <Link 
              href="/contact?service=coimbatore-pilot" 
              style={{ background: 'var(--accent)', color: '#fff', padding: '14px 28px', borderRadius: '8px', fontWeight: '700', fontSize: '15px', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px', boxShadow: '0 8px 20px rgba(0, 102, 204, 0.25)' }}
            >
              Book Plant Feasibility Pilot in Coimbatore <ArrowRight size={16} />
            </Link>
            <Link 
              href="/tools/roi-calculator" 
              style={{ background: 'var(--card)', color: 'var(--text)', border: '1px solid var(--border2)', padding: '14px 24px', borderRadius: '8px', fontWeight: '700', fontSize: '15px', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
            >
              Calculate Scrap Savings
            </Link>
          </div>
        </div>

        {/* Localized Engineering Solved Problems */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '28px', marginBottom: '64px' }}>
          
          <div style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: '16px', padding: '32px', boxShadow: 'var(--shadow)' }}>
            <div style={{ background: 'var(--bg2)', width: '50px', height: '50px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
              <Factory size={26} style={{ color: 'var(--accent)' }} />
            </div>
            <h3 style={{ fontSize: '18px', fontWeight: '800', fontFamily: 'var(--syne)', marginBottom: '10px' }}>
              Cast Iron & SG Iron Porosity Detection
            </h3>
            <p style={{ fontSize: '14px', color: 'var(--muted)', lineHeight: 1.6, marginBottom: '16px' }}>
              Detect microscopic blowholes, shrinkage cavities, and sand inclusions on raw castings before machining hours are wasted on defective blanks.
            </p>
            <ul style={{ listStyle: 'none', fontSize: '13px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <li style={{ display: 'flex', gap: '8px', color: 'var(--text)' }}><CheckCircle2 size={16} style={{ color: 'var(--accent)' }} /> 0.1mm optical defect threshold</li>
              <li style={{ display: 'flex', gap: '8px', color: 'var(--text)' }}><CheckCircle2 size={16} style={{ color: 'var(--accent)' }} /> Eliminates tool chipping caused by hidden hard spots</li>
            </ul>
          </div>

          <div style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: '16px', padding: '32px', boxShadow: 'var(--shadow)' }}>
            <div style={{ background: 'var(--bg2)', width: '50px', height: '50px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
              <Settings2 size={26} style={{ color: 'var(--accent)' }} />
            </div>
            <h3 style={{ fontSize: '18px', fontWeight: '800', fontFamily: 'var(--syne)', marginBottom: '10px' }}>
              Pump Impeller & Casing Inspection
            </h3>
            <p style={{ fontSize: '14px', color: 'var(--muted)', lineHeight: 1.6, marginBottom: '16px' }}>
              Multi-angle optical inspection of open and closed impellers, verifying vane geometry, balancing boss dimensions, and center bore concentricity.
            </p>
            <ul style={{ listStyle: 'none', fontSize: '13px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <li style={{ display: 'flex', gap: '8px', color: 'var(--text)' }}><CheckCircle2 size={16} style={{ color: 'var(--accent)' }} /> Sub-pixel dimensional accuracy</li>
              <li style={{ display: 'flex', gap: '8px', color: 'var(--text)' }}><CheckCircle2 size={16} style={{ color: 'var(--accent)' }} /> Instant 24V PLC rejection pulse for line sorting</li>
            </ul>
          </div>

          <div style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: '16px', padding: '32px', boxShadow: 'var(--shadow)' }}>
            <div style={{ background: 'var(--bg2)', width: '50px', height: '50px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
              <Activity size={26} style={{ color: 'var(--accent)' }} />
            </div>
            <h3 style={{ fontSize: '18px', fontWeight: '800', fontFamily: 'var(--syne)', marginBottom: '10px' }}>
              Submersible Motor Stator & Rotor Check
            </h3>
            <p style={{ fontSize: '14px', color: 'var(--muted)', lineHeight: 1.6, marginBottom: '16px' }}>
              Automated visual verification of copper winding overhang, slot wedge presence, insulation paper tearing, and rotor shaft keyway tolerances.
            </p>
            <ul style={{ listStyle: 'none', fontSize: '13px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <li style={{ display: 'flex', gap: '8px', color: 'var(--text)' }}><CheckCircle2 size={16} style={{ color: 'var(--accent)' }} /> Replaces unreliable human end-of-line checking</li>
              <li style={{ display: 'flex', gap: '8px', color: 'var(--text)' }}><CheckCircle2 size={16} style={{ color: 'var(--accent)' }} /> Historical CSV & image defect logging for ISO audits</li>
            </ul>
          </div>

        </div>

        {/* Why On-Premise Matters for Coimbatore Factories */}
        <div style={{ background: 'var(--bg2)', border: '1px solid var(--border)', borderRadius: '16px', padding: '40px', marginBottom: '56px' }}>
          <h2 style={{ fontFamily: 'var(--syne)', fontSize: '26px', fontWeight: '800', marginBottom: '16px', color: 'var(--text)' }}>
            Engineered for Industrial Realities: Zero Cloud Lock-in
          </h2>
          <p style={{ color: 'var(--muted)', fontSize: '15px', lineHeight: 1.65, maxWidth: '850px', marginBottom: '28px' }}>
            We understand that factory floors in Kurichi, Ganapathy, or Arasur cannot depend on public internet bandwidth. Our edge models run locally on ruggedized NVIDIA Jetson computers installed inside your plant enclosure.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
            <div style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: '12px', padding: '20px' }}>
              <div style={{ fontWeight: '800', fontSize: '16px', color: 'var(--text)', marginBottom: '4px' }}>&lt; 50ms Inference</div>
              <div style={{ fontSize: '13px', color: 'var(--muted)' }}>Matches conveyor line speeds without bottlenecking cycle times.</div>
            </div>
            <div style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: '12px', padding: '20px' }}>
              <div style={{ fontWeight: '800', fontSize: '16px', color: 'var(--text)', marginBottom: '4px' }}>Air-Gapped Privacy</div>
              <div style={{ fontSize: '13px', color: 'var(--muted)' }}>Proprietary tool designs and defect telemetry never leave your plant.</div>
            </div>
            <div style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: '12px', padding: '20px' }}>
              <div style={{ fontWeight: '800', fontSize: '16px', color: 'var(--text)', marginBottom: '4px' }}>Local Tamil Nadu Engineers</div>
              <div style={{ fontSize: '13px', color: 'var(--muted)' }}>Direct hardware mounting and commissioning from our Namakkal lab.</div>
            </div>
          </div>
        </div>

        {/* Local CTA */}
        <div style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: '16px', padding: '48px', textAlign: 'center', boxShadow: 'var(--shadow)' }}>
          <h2 style={{ fontFamily: 'var(--syne)', fontSize: '28px', fontWeight: '800', marginBottom: '12px' }}>
            Schedule an On-Site Engineering Audit in Coimbatore
          </h2>
          <p style={{ color: 'var(--muted)', fontSize: '15px', maxWidth: '600px', margin: '0 auto 24px', lineHeight: 1.6 }}>
            Our lead engineers visit plants across Peelamedu, Thudiyalur, and Malumichampatti to review lighting geometry and camera placements.
          </p>
          <Link 
            href="/contact?service=coimbatore-plant-audit" 
            style={{ background: 'var(--accent)', color: '#fff', padding: '14px 32px', borderRadius: '8px', fontWeight: '700', fontSize: '15px', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
          >
            Request Factory Visit <ArrowRight size={16} />
          </Link>
        </div>

      </div>
      <Footer />
    </main>
  );
}
