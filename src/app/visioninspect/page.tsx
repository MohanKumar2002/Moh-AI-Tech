'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Eye, 
  Cpu, 
  Factory, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Activity, 
  Sparkles, 
  Server, 
  Layers, 
  Zap, 
  Sliders, 
  AlertTriangle,
  Play
} from 'lucide-react';
import Footer from '@/components/layout/footer';

export default function VisionInspectProductPage() {
  const [activeDefect, setActiveDefect] = useState<'scratch' | 'dimension' | 'assembly' | 'solder'>('scratch');

  const defects = {
    scratch: {
      title: 'Surface Scratches & Pinhole Burrs',
      tolerance: '0.08 mm',
      speed: '45 ms inference',
      description: 'Detects microscopic hairline scratches, surface porosity, and tooling burrs on machined aluminum, steel castings, and injection molded plastics.',
      camera: 'GigE Vision Monochrome Line Scan (5MP)',
      rejectionMethod: 'Pneumatic air-jet solenoid trigger via 24V PLC digital output.'
    },
    dimension: {
      title: 'Sub-Millimeter Dimensional Verification',
      tolerance: '±0.05 mm',
      speed: '30 ms inference',
      description: 'Performs sub-pixel edge detection to measure critical tolerances: bore diameter, chamfer angles, pitch distance, and thread integrity before packing.',
      camera: 'Telecentric Lens with Coaxial LED Illumination',
      rejectionMethod: 'Pneumatic diverter gate with encoder track index.'
    },
    assembly: {
      title: 'Missing Component & Fastener Check',
      tolerance: '100% presence check',
      speed: '25 ms inference',
      description: 'Verifies presence of O-rings, screws, washers, and wire clips on complex multi-part subassemblies before final casing closure.',
      camera: 'Multi-angle Dual USB3 Vision Cameras',
      rejectionMethod: 'Conveyor interlock stop & visual inspection station alarm.'
    },
    solder: {
      title: 'PCB Solder Bridging & Component Misalignment',
      tolerance: '0.1 mm placement',
      speed: '50 ms inference',
      description: 'Automated Optical Inspection (AOI) for surface-mount components (SMD), tombstoning, solder bridges, and polarity orientation.',
      camera: 'High-Resolution 12MP Global Shutter Sensor with Ring Light',
      rejectionMethod: 'Inline SMEMA stop signal to pick-and-place conveyor.'
    }
  };

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)', color: 'var(--text)' }}>

      {/* ── HERO SECTION ── */}
      <section style={{ padding: '140px 5% 70px', background: 'radial-gradient(ellipse at 50% 0%, rgba(2, 132, 199, 0.12) 0%, transparent 70%)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto', textAlign: 'center' }}>
          
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', borderRadius: '9999px', background: 'rgba(2, 132, 199, 0.1)', border: '1px solid rgba(2, 132, 199, 0.3)', color: '#0284c7', fontSize: '13px', fontWeight: '700', marginBottom: '24px', letterSpacing: '0.04em' }}>
            <Sparkles size={15} />
            MOH-AI VISIONINSPECT · EDGE MACHINE VISION & PLC AUTOMATION
          </div>

          <h1 style={{ fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: '900', lineHeight: 1.15, letterSpacing: '-0.03em', maxWidth: '1000px', margin: '0 auto 24px' }}>
            Sub-Millimeter Machine Vision & Defect Detection at{' '}
            <span style={{ background: 'linear-gradient(135deg, #0284c7, #2563eb, #10b981)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Full Production Line Speed
            </span>
          </h1>

          <p style={{ fontSize: 'clamp(16px, 2vw, 20px)', color: 'var(--text2)', maxWidth: '820px', margin: '0 auto 40px', lineHeight: 1.6 }}>
            Replace unreliable manual eye inspections with deterministic edge AI. Runs 100% air-gapped on NVIDIA Jetson or industrial IPCs, integrating directly with your factory cameras and PLC rejection solenoids in under 50 milliseconds.
          </p>

          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '40px' }}>
            <Link
              href="/contact?service=visioninspect"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: 'var(--accent)', color: '#fff', padding: '16px 32px', borderRadius: '12px', fontWeight: '800', fontSize: '15px', textDecoration: 'none', boxShadow: '0 10px 25px rgba(2, 132, 199, 0.3)' }}
            >
              Request Plant Feasibility Assessment
              <ArrowRight size={18} />
            </Link>

            <Link
              href="/industrial-ai"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: 'var(--bg2)', color: 'var(--text)', border: '1px solid var(--border)', padding: '16px 28px', borderRadius: '12px', fontWeight: '700', fontSize: '15px', textDecoration: 'none' }}
            >
              Explore Full Industrial AI Architecture
            </Link>
          </div>

          {/* Real Industrial Benchmarks */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', maxWidth: '960px', margin: '0 auto' }}>
            <div style={{ background: 'var(--card)', padding: '20px', borderRadius: '14px', border: '1px solid var(--border)' }}>
              <div style={{ fontSize: '32px', fontWeight: '900', color: '#0284c7' }}>&lt; 50ms</div>
              <div style={{ fontSize: '13px', color: 'var(--text2)', marginTop: '4px' }}>Real-Time Inference Latency</div>
            </div>
            <div style={{ background: 'var(--card)', padding: '20px', borderRadius: '14px', border: '1px solid var(--border)' }}>
              <div style={{ fontSize: '32px', fontWeight: '900', color: '#10b981' }}>0.05 mm</div>
              <div style={{ fontSize: '13px', color: 'var(--text2)', marginTop: '4px' }}>Measurable Tolerance Limit</div>
            </div>
            <div style={{ background: 'var(--card)', padding: '20px', borderRadius: '14px', border: '1px solid var(--border)' }}>
              <div style={{ fontSize: '32px', fontWeight: '900', color: '#6366f1' }}>100%</div>
              <div style={{ fontSize: '13px', color: 'var(--text2)', marginTop: '4px' }}>Air-Gapped On-Premise (No Cloud)</div>
            </div>
            <div style={{ background: 'var(--card)', padding: '20px', borderRadius: '14px', border: '1px solid var(--border)' }}>
              <div style={{ fontSize: '32px', fontWeight: '900', color: '#f59e0b' }}>PLC Ready</div>
              <div style={{ fontSize: '13px', color: 'var(--text2)', marginTop: '4px' }}>Modbus TCP / OPC-UA / Digital 24V</div>
            </div>
          </div>

        </div>
      </section>

      {/* ── INTERACTIVE DEFECT DETECTION SIMULATOR ── */}
      <section style={{ padding: '80px 5%', background: 'var(--bg2)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1160px', margin: '0 auto' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '36px' }}>
            <span style={{ color: '#0284c7', fontSize: '12px', fontWeight: '800', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              Interactive Inspection Scenarios
            </span>
            <h2 style={{ fontSize: 'clamp(26px, 4vw, 36px)', fontWeight: '900', marginTop: '8px' }}>
              Select a Manufacturing Quality Control Scenario
            </h2>
            <p style={{ color: 'var(--text2)', fontSize: '15px', maxWidth: '640px', margin: '8px auto 0' }}>
              Explore how VisionInspect configures lighting, optic parameters, and rejection mechanisms for specific industrial parts.
            </p>
          </div>

          {/* Scenario Tabs */}
          <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '32px' }}>
            {(Object.keys(defects) as Array<keyof typeof defects>).map((key) => (
              <button
                key={key}
                onClick={() => setActiveDefect(key)}
                style={{
                  background: activeDefect === key ? '#0284c7' : 'var(--card)',
                  color: activeDefect === key ? '#fff' : 'var(--text)',
                  border: `1px solid ${activeDefect === key ? '#0284c7' : 'var(--border)'}`,
                  padding: '12px 20px',
                  borderRadius: '12px',
                  fontSize: '14px',
                  fontWeight: '700',
                  cursor: 'pointer',
                  transition: 'all 0.2s'
                }}
              >
                {defects[key].title}
              </button>
            ))}
          </div>

          {/* Interactive Inspection Card */}
          <div style={{ background: 'var(--card)', borderRadius: '20px', border: '1px solid var(--border)', padding: '40px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}>
            
            <div>
              <div style={{ color: '#0284c7', fontSize: '12px', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '8px' }}>
                Inspection Details
              </div>
              <h3 style={{ fontSize: '26px', fontWeight: '900', marginBottom: '16px' }}>
                {defects[activeDefect].title}
              </h3>
              <p style={{ color: 'var(--text2)', fontSize: '15px', lineHeight: 1.7, marginBottom: '24px' }}>
                {defects[activeDefect].description}
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', background: 'var(--bg)', padding: '20px', borderRadius: '12px', border: '1px solid var(--border)' }}>
                <div>
                  <div style={{ fontSize: '12px', color: 'var(--text2)', fontWeight: '600' }}>Detection Threshold</div>
                  <div style={{ fontSize: '18px', fontWeight: '800', color: '#10b981', marginTop: '4px' }}>{defects[activeDefect].tolerance}</div>
                </div>
                <div>
                  <div style={{ fontSize: '12px', color: 'var(--text2)', fontWeight: '600' }}>Inference Duration</div>
                  <div style={{ fontSize: '18px', fontWeight: '800', color: '#0284c7', marginTop: '4px' }}>{defects[activeDefect].speed}</div>
                </div>
              </div>
            </div>

            <div style={{ background: 'var(--bg)', padding: '30px', borderRadius: '14px', border: '1px solid var(--border)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <h4 style={{ fontSize: '15px', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '16px', color: 'var(--text)' }}>
                  Hardware & Integration Profile
                </h4>

                <div style={{ marginBottom: '16px' }}>
                  <div style={{ fontSize: '12px', color: 'var(--text2)', fontWeight: '700' }}>Camera & Optic Setup</div>
                  <div style={{ fontSize: '14px', color: 'var(--text)', fontWeight: '600', marginTop: '4px' }}>{defects[activeDefect].camera}</div>
                </div>

                <div>
                  <div style={{ fontSize: '12px', color: 'var(--text2)', fontWeight: '700' }}>PLC & Rejection Interface</div>
                  <div style={{ fontSize: '14px', color: 'var(--text)', fontWeight: '600', marginTop: '4px' }}>{defects[activeDefect].rejectionMethod}</div>
                </div>
              </div>

              <div style={{ marginTop: '24px', paddingTop: '20px', borderTop: '1px solid var(--border)' }}>
                <Link
                  href="/contact?service=visioninspect"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#0284c7', color: '#fff', padding: '12px 20px', borderRadius: '10px', fontWeight: '700', fontSize: '14px', textDecoration: 'none', width: '100%', justifyContent: 'center' }}
                >
                  Test Sample Parts in Our Namakkal Lab
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ── PRODUCTION HARDWARE PIPELINE ── */}
      <section style={{ padding: '90px 5%', background: 'var(--bg)' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>

          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <span style={{ color: '#0284c7', fontSize: '12px', fontWeight: '800', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              End-to-End Pipeline
            </span>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: '900', marginTop: '8px' }}>
              From Camera Shutter to Solenoid Ejection in 45ms
            </h2>
            <p style={{ color: 'var(--text2)', fontSize: '16px', maxWidth: '680px', margin: '12px auto 0' }}>
              Real-world industrial automation requires deterministic timing. Here is how our hardware stack delivers continuous factory operation.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px' }}>

            <div style={{ background: 'var(--card)', borderRadius: '16px', border: '1px solid var(--border)', padding: '28px' }}>
              <div style={{ fontSize: '32px', fontWeight: '900', color: 'rgba(2, 132, 199, 0.3)', marginBottom: '8px' }}>01</div>
              <h4 style={{ fontSize: '18px', fontWeight: '800', marginBottom: '8px' }}>Sensor Optical Trigger</h4>
              <p style={{ color: 'var(--text2)', fontSize: '14px', lineHeight: 1.6 }}>
                Part presence triggers an optical retroreflective sensor or rotary encoder pulse, firing high-intensity strobe LEDs and the global shutter camera synchronously in microseconds.
              </p>
            </div>

            <div style={{ background: 'var(--card)', borderRadius: '16px', border: '1px solid var(--border)', padding: '28px' }}>
              <div style={{ fontSize: '32px', fontWeight: '900', color: 'rgba(2, 132, 199, 0.3)', marginBottom: '8px' }}>02</div>
              <h4 style={{ fontSize: '18px', fontWeight: '800', marginBottom: '8px' }}>GigE Image Acquisition</h4>
              <p style={{ color: 'var(--text2)', fontSize: '14px', lineHeight: 1.6 }}>
                Image buffer is transferred directly to the edge computer via GigE Vision DMA without CPU throttling, ensuring zero dropped frames up to 60 parts per minute.
              </p>
            </div>

            <div style={{ background: 'var(--card)', borderRadius: '16px', border: '1px solid var(--border)', padding: '28px' }}>
              <div style={{ fontSize: '32px', fontWeight: '900', color: 'rgba(2, 132, 199, 0.3)', marginBottom: '8px' }}>03</div>
              <h4 style={{ fontSize: '18px', fontWeight: '800', marginBottom: '8px' }}>TensorRT Edge Inference</h4>
              <p style={{ color: 'var(--text2)', fontSize: '14px', lineHeight: 1.6 }}>
                Custom fine-tuned YOLO / Segment Anything neural models compiled with FP16 TensorRT execute on onboard NVIDIA CUDA cores in 25-45ms, classifying defects.
              </p>
            </div>

            <div style={{ background: 'var(--card)', borderRadius: '16px', border: '1px solid var(--border)', padding: '28px' }}>
              <div style={{ fontSize: '32px', fontWeight: '900', color: 'rgba(2, 132, 199, 0.3)', marginBottom: '8px' }}>04</div>
              <h4 style={{ fontSize: '18px', fontWeight: '800', marginBottom: '8px' }}>PLC Ejector Actuation</h4>
              <p style={{ color: 'var(--text2)', fontSize: '14px', lineHeight: 1.6 }}>
                If pass threshold fails, an instant 24V digital signal is triggered to the Siemens, Mitsubishi, or Allen-Bradley PLC to actuate the pneumatic reject cylinder.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ── PILOT CTA ── */}
      <section style={{ padding: '90px 5%', background: 'radial-gradient(ellipse at 50% 100%, rgba(2, 132, 199, 0.15) 0%, transparent 70%)', borderTop: '1px solid var(--border)', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          
          <h2 style={{ fontSize: 'clamp(30px, 4.5vw, 44px)', fontWeight: '900', marginBottom: '16px' }}>
            Validate Your Parts Before Factory Deployment
          </h2>

          <p style={{ fontSize: '17px', color: 'var(--text2)', lineHeight: 1.6, marginBottom: '36px' }}>
            Send us 20 sample parts (good and defective). We will image them in our Namakkal optical testing rig, train a prototype detection model, and demonstrate accuracy before you commit to any hardware.
          </p>

          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link
              href="/contact?service=visioninspect"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: 'var(--accent)', color: '#fff', padding: '16px 36px', borderRadius: '12px', fontWeight: '800', fontSize: '16px', textDecoration: 'none' }}
            >
              Book a Lab Feasibility Study
              <ArrowRight size={18} />
            </Link>

            <Link
              href="/products"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: 'transparent', color: 'var(--text)', border: '1px solid var(--border)', padding: '16px 28px', borderRadius: '12px', fontWeight: '700', fontSize: '15px', textDecoration: 'none' }}
            >
              Back to Product Catalog
            </Link>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
