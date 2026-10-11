'use client';

import React, { useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  FileText, 
  CheckCircle2, 
  AlertTriangle, 
  ArrowRight, 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  Maximize2, 
  ShieldCheck, 
  Clock, 
  Zap, 
  Layers, 
  BarChart3, 
  MessageSquare, 
  FolderSync, 
  Database,
  Building2,
  FileCheck,
  Send,
  Sparkles,
  HelpCircle,
  ExternalLink
} from 'lucide-react';
import { Navbar } from '@/components/layout/navbar';
import Footer from '@/components/layout/footer';

export default function TaxFlowProductPage() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [activeChapter, setActiveChapter] = useState(0);

  const chapters = [
    { title: 'Full Suite Overview', time: 0, tag: 'Architecture' },
    { title: 'Demo 01: AI Invoice Extraction', time: 15, tag: 'Invoice AI' },
    { title: 'Demo 02: GST Reco (2B ↔ Books)', time: 50, tag: 'Reconciliation' },
    { title: 'Demo 03: Client Document Organizer', time: 80, tag: 'Doc AI' },
    { title: 'Demo 04: Compliance & WhatsApp Notices', time: 110, tag: 'Automation' },
    { title: 'Demo 05: Audit Risk Intelligence', time: 145, tag: 'Statutory Audit' },
  ];

  const handlePlayPause = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleMuteToggle = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  const jumpToChapter = (time: number, index: number) => {
    if (!videoRef.current) return;
    videoRef.current.currentTime = time;
    videoRef.current.play();
    setIsPlaying(true);
    setActiveChapter(index);
  };

  const handleFullScreen = () => {
    if (!videoRef.current) return;
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  };

  return (
    <main style={{ minHeight: '100vh', background: 'var(--bg)', color: 'var(--text)' }}>
      <Navbar />

      {/* ── HERO SECTION ── */}
      <section style={{ padding: '140px 5% 70px', background: 'radial-gradient(ellipse at 50% 0%, rgba(14, 165, 233, 0.12) 0%, transparent 70%)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto', textAlign: 'center' }}>
          
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', borderRadius: '9999px', background: 'rgba(14, 165, 233, 0.1)', border: '1px solid rgba(14, 165, 233, 0.3)', color: '#0284c7', fontSize: '13px', fontWeight: '700', marginBottom: '24px', letterSpacing: '0.04em' }}>
            <Sparkles size={15} />
            MOH-AI TAXFLOW · CA & TAX CONSULTANCY AUTOMATION SUITE
          </div>

          <h1 style={{ fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: '900', lineHeight: 1.15, letterSpacing: '-0.03em', maxWidth: '980px', margin: '0 auto 24px' }}>
            Autonomous Tax & Accounting Intelligence for{' '}
            <span style={{ background: 'linear-gradient(135deg, #0284c7, #2563eb, #4f46e5)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Chartered Accountants & CFOs
            </span>
          </h1>

          <p style={{ fontSize: 'clamp(16px, 2vw, 20px)', color: 'var(--text2)', maxWidth: '780px', margin: '0 auto 40px', lineHeight: 1.6 }}>
            Don’t replace your current accounting software like Tally, Zoho Books, or Winman. 
            <strong> Moh-AI TaxFlow</strong> automates the high-friction manual work around it: GSTR-2B matching, invoice extraction, client follow-ups, and statutory risk audits.
          </p>

          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '48px' }}>
            <a 
              href="#video-demo"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: 'var(--accent)', color: '#fff', padding: '14px 28px', borderRadius: '10px', fontWeight: '700', fontSize: '15px', textDecoration: 'none', boxShadow: '0 10px 25px -5px rgba(2, 132, 199, 0.4)', transition: 'transform 0.2s' }}
            >
              <Play size={18} fill="#fff" />
              Watch 3-Min Live Demo
            </a>
            
            <Link 
              href="/contact?service=taxflow"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: 'var(--card)', color: 'var(--text)', border: '1px solid var(--border)', padding: '14px 28px', borderRadius: '10px', fontWeight: '700', fontSize: '15px', textDecoration: 'none', transition: 'all 0.2s' }}
            >
              Request Custom Firm Pilot
              <ArrowRight size={18} />
            </Link>
          </div>

          {/* Quick Metrics Bar */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', maxWidth: '1020px', margin: '0 auto', textAlign: 'left' }}>
            <div style={{ background: 'var(--card)', padding: '20px 24px', borderRadius: '12px', border: '1px solid var(--border)' }}>
              <div style={{ color: '#0284c7', fontSize: '28px', fontWeight: '900', marginBottom: '4px' }}>90%</div>
              <div style={{ fontSize: '13px', color: 'var(--text2)', fontWeight: '600' }}>Reduction in Manual Invoice Entry Time</div>
            </div>

            <div style={{ background: 'var(--card)', padding: '20px 24px', borderRadius: '12px', border: '1px solid var(--border)' }}>
              <div style={{ color: '#10b981', fontSize: '28px', fontWeight: '900', marginBottom: '4px' }}>100%</div>
              <div style={{ fontSize: '13px', color: 'var(--text2)', fontWeight: '600' }}>Sec 16(2)(aa) ITC Recovery Accuracy</div>
            </div>

            <div style={{ background: 'var(--card)', padding: '20px 24px', borderRadius: '12px', border: '1px solid var(--border)' }}>
              <div style={{ color: '#8b5cf6', fontSize: '28px', fontWeight: '900', marginBottom: '4px' }}>500+</div>
              <div style={{ fontSize: '13px', color: 'var(--text2)', fontWeight: '600' }}>Invoices Processed in Under 60s</div>
            </div>

            <div style={{ background: 'var(--card)', padding: '20px 24px', borderRadius: '12px', border: '1px solid var(--border)' }}>
              <div style={{ color: '#f59e0b', fontSize: '28px', fontWeight: '900', marginBottom: '4px' }}>0 APIs</div>
              <div style={{ fontSize: '13px', color: 'var(--text2)', fontWeight: '600' }}>Replaced — Plugs Directly into Tally & Excel</div>
            </div>
          </div>

        </div>
      </section>

      {/* ── VIDEO DEMONSTRATION SECTION ── */}
      <section id="video-demo" style={{ padding: '80px 5%', background: 'var(--bg2)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <div style={{ color: '#0284c7', fontSize: '13px', fontWeight: '800', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '8px' }}>
              Interactive Demonstration
            </div>
            <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 40px)', fontWeight: '900', letterSpacing: '-0.02em', margin: '0 0 16px' }}>
              Watch Moh-AI TaxFlow In Real Action
            </h2>
            <p style={{ color: 'var(--text2)', fontSize: '16px', maxWidth: '680px', margin: '0 auto' }}>
              See live batch invoice parsing, GSTR-2B ledger reconciliation, 1-click WhatsApp notice generation, and statutory audit risk detection.
            </p>
          </div>

          {/* Chapter Quick-Jump Pills */}
          <div style={{ display: 'flex', gap: '10px', overflowX: 'auto', paddingBottom: '16px', marginBottom: '24px', justifyContent: 'flex-start', flexWrap: 'wrap' }}>
            {chapters.map((ch, idx) => (
              <button
                key={idx}
                onClick={() => jumpToChapter(ch.time, idx)}
                style={{
                  padding: '8px 16px',
                  borderRadius: '9999px',
                  fontSize: '13px',
                  fontWeight: '700',
                  border: activeChapter === idx ? '1px solid #0284c7' : '1px solid var(--border)',
                  background: activeChapter === idx ? 'rgba(2, 132, 199, 0.15)' : 'var(--card)',
                  color: activeChapter === idx ? '#0284c7' : 'var(--text2)',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  transition: 'all 0.15s'
                }}
              >
                <Clock size={12} />
                <span>{ch.title}</span>
              </button>
            ))}
          </div>

          {/* Video Container */}
          <div style={{ position: 'relative', borderRadius: '16px', overflow: 'hidden', background: '#000', border: '1px solid var(--border)', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.35)' }}>
            <video 
              ref={videoRef}
              src="/videos/taxproductdemo.mp4"
              poster="/images/products/taxflow-poster.jpg"
              playsInline
              muted={isMuted}
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              style={{ width: '100%', display: 'block', maxHeight: '680px', objectFit: 'contain', background: '#0a0a0f' }}
            />

            {/* Video Controls Overlay */}
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '20px 24px', background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 100%)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', zIndex: 10 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <button 
                  onClick={handlePlayPause}
                  aria-label={isPlaying ? 'Pause' : 'Play'}
                  style={{ width: '42px', height: '42px', borderRadius: '50%', background: '#0284c7', border: 'none', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', boxShadow: '0 4px 12px rgba(2, 132, 199, 0.4)' }}
                >
                  {isPlaying ? <Pause size={18} fill="#fff" /> : <Play size={18} fill="#fff" style={{ marginLeft: '2px' }} />}
                </button>

                <button 
                  onClick={handleMuteToggle}
                  aria-label={isMuted ? 'Unmute' : 'Mute'}
                  style={{ width: '38px', height: '38px', borderRadius: '50%', background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(10px)', border: 'none', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}
                >
                  {isMuted ? <VolumeX size={17} /> : <Volume2 size={17} />}
                </button>

                <div style={{ color: '#fff', fontSize: '13px', fontWeight: '600' }}>
                  Moh-AI TaxFlow Enterprise Demo · 1080p
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <button
                  onClick={handleFullScreen}
                  aria-label="Full Screen"
                  style={{ width: '38px', height: '38px', borderRadius: '50%', background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(10px)', border: 'none', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}
                >
                  <Maximize2 size={17} />
                </button>
              </div>
            </div>
          </div>

          <div style={{ marginTop: '20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
            <div style={{ fontSize: '13px', color: 'var(--text2)' }}>
              💡 <em>Click any chapter pill above to jump directly to specific features like GSTR-2B matching or WhatsApp follow-ups.</em>
            </div>
            <Link 
              href="/contact?service=taxflow"
              style={{ fontSize: '13px', fontWeight: '700', color: '#0284c7', display: 'inline-flex', alignItems: 'center', gap: '6px', textDecoration: 'none' }}
            >
              Need a live pilot with your firm’s sample invoices? Book a session →
            </Link>
          </div>

        </div>
      </section>

      {/* ── THE 5 CORE AUTOMATION MODULES ── */}
      <section style={{ padding: '90px 5%', background: 'var(--bg)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <div style={{ color: '#0284c7', fontSize: '13px', fontWeight: '800', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '8px' }}>
              Modular Suite Architecture
            </div>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: '900', letterSpacing: '-0.02em', margin: '0 0 16px' }}>
              The 5 Practical Pillars of TaxFlow
            </h2>
            <p style={{ color: 'var(--text2)', fontSize: '17px', maxWidth: '720px', margin: '0 auto' }}>
              Engineered specifically for Indian CA firms, tax advocates, and corporate controllers facing heavy statutory filing volumes every month.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '32px' }}>
            
            {/* MODULE 1 */}
            <div style={{ background: 'var(--card)', borderRadius: '16px', border: '1px solid var(--border)', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
              <div style={{ height: '220px', position: 'relative', borderBottom: '1px solid var(--border)', background: 'var(--bg2)' }}>
                <Image 
                  src="/images/products/taxflow-invoice-ai.jpg" 
                  alt="Invoice Data Extraction Pipeline"
                  fill 
                  style={{ objectFit: 'cover' }} 
                />
                <div style={{ position: 'absolute', top: '16px', left: '16px', background: 'rgba(2, 132, 199, 0.9)', color: '#fff', fontSize: '11px', fontWeight: '800', padding: '4px 10px', borderRadius: '6px', textTransform: 'uppercase' }}>
                  DEMO 01 · CORE PIPELINE
                </div>
              </div>
              <div style={{ padding: '28px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ fontSize: '22px', fontWeight: '800', marginBottom: '10px' }}>
                  AI Invoice Data Extraction & Tally/Excel Pipeline
                </h3>
                <p style={{ color: 'var(--text2)', fontSize: '14px', lineHeight: 1.6, marginBottom: '20px' }}>
                  Extract GSTINs, Line Items, HSN/SAC codes, Taxable Amounts, and CGST/SGST/IGST breakdowns from up to 500 invoice PDFs and images in seconds with deterministic audit rule checks.
                </p>
                <div style={{ marginTop: 'auto', borderTop: '1px solid var(--border)', paddingTop: '16px' }}>
                  <div style={{ fontSize: '12px', fontWeight: '700', color: '#0284c7', textTransform: 'uppercase', marginBottom: '8px' }}>Key Capabilities:</div>
                  <ul style={{ margin: 0, paddingLeft: '18px', fontSize: '13px', color: 'var(--text2)', lineHeight: 1.7 }}>
                    <li>Handles skewed scans, crumpled paper, and thermal receipts</li>
                    <li>Automatic mathematical validation (Taxable + Tax = Total)</li>
                    <li>One-click export directly to Tally XML and standardized Excel</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* MODULE 2 */}
            <div style={{ background: 'var(--card)', borderRadius: '16px', border: '1px solid var(--border)', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
              <div style={{ height: '220px', position: 'relative', borderBottom: '1px solid var(--border)', background: 'var(--bg2)' }}>
                <Image 
                  src="/images/products/taxflow-overview.jpg" 
                  alt="GST Reconciliation AI"
                  fill 
                  style={{ objectFit: 'cover' }} 
                />
                <div style={{ position: 'absolute', top: '16px', left: '16px', background: 'rgba(16, 185, 129, 0.9)', color: '#fff', fontSize: '11px', fontWeight: '800', padding: '4px 10px', borderRadius: '6px', textTransform: 'uppercase' }}>
                  DEMO 02 · ITC RECOVERY
                </div>
              </div>
              <div style={{ padding: '28px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ fontSize: '22px', fontWeight: '800', marginBottom: '10px' }}>
                  GST Reconciliation AI (GSTR-2B ↔ Purchase Books)
                </h3>
                <p style={{ color: 'var(--text2)', fontSize: '14px', lineHeight: 1.6, marginBottom: '20px' }}>
                  Matches internal purchase registers against government GSTR-2B portal downloads. Instantly flags Section 16(2)(aa) blocked tax credits, unclaimed ITC, and vendor invoice number drift.
                </p>
                <div style={{ marginTop: 'auto', borderTop: '1px solid var(--border)', paddingTop: '16px' }}>
                  <div style={{ fontSize: '12px', fontWeight: '700', color: '#10b981', textTransform: 'uppercase', marginBottom: '8px' }}>Key Capabilities:</div>
                  <ul style={{ margin: 0, paddingLeft: '18px', fontSize: '13px', color: 'var(--text2)', lineHeight: 1.7 }}>
                    <li>Fuzzy matching for typoed invoice numbers (e.g. INV-01 vs INV/001)</li>
                    <li>Pinpoints vendor non-filers causing ITC reversals</li>
                    <li>Generates itemized vendor discrepancy claims in seconds</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* MODULE 3 */}
            <div style={{ background: 'var(--card)', borderRadius: '16px', border: '1px solid var(--border)', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
              <div style={{ height: '220px', position: 'relative', borderBottom: '1px solid var(--border)', background: 'var(--bg2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ textAlign: 'center', padding: '20px' }}>
                  <FolderSync size={48} style={{ color: '#f59e0b', margin: '0 auto 12px' }} />
                  <div style={{ fontWeight: '800', fontSize: '18px' }}>Client Document AI Organizer</div>
                  <div style={{ fontSize: '12px', color: 'var(--text2)' }}>Zero-Manual Sorting</div>
                </div>
                <div style={{ position: 'absolute', top: '16px', left: '16px', background: 'rgba(245, 158, 11, 0.9)', color: '#fff', fontSize: '11px', fontWeight: '800', padding: '4px 10px', borderRadius: '6px', textTransform: 'uppercase' }}>
                  DEMO 03 · INTAKE
                </div>
              </div>
              <div style={{ padding: '28px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ fontSize: '22px', fontWeight: '800', marginBottom: '10px' }}>
                  Client Document AI Organizer
                </h3>
                <p style={{ color: 'var(--text2)', fontSize: '14px', lineHeight: 1.6, marginBottom: '20px' }}>
                  CAs receive hundreds of unorganized files via WhatsApp, Google Drive, and email. TaxFlow classifies scattered PDFs, scans, and spreadsheets into structured client & financial year trees.
                </p>
                <div style={{ marginTop: 'auto', borderTop: '1px solid var(--border)', paddingTop: '16px' }}>
                  <div style={{ fontSize: '12px', fontWeight: '700', color: '#f59e0b', textTransform: 'uppercase', marginBottom: '8px' }}>Key Capabilities:</div>
                  <ul style={{ margin: 0, paddingLeft: '18px', fontSize: '13px', color: 'var(--text2)', lineHeight: 1.7 }}>
                    <li>Detects PAN, GST Certificates, Form 16, 26AS, and Bank Statements</li>
                    <li>Renames files deterministically (e.g., [Client]_[FY25-26]_[Type].pdf)</li>
                    <li>Eliminates hours spent manually sorting client tax folders</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* MODULE 4 */}
            <div style={{ background: 'var(--card)', borderRadius: '16px', border: '1px solid var(--border)', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
              <div style={{ height: '220px', position: 'relative', borderBottom: '1px solid var(--border)', background: 'var(--bg2)' }}>
                <Image 
                  src="/images/products/taxflow-compliance.jpg" 
                  alt="Client Compliance Tracker"
                  fill 
                  style={{ objectFit: 'cover' }} 
                />
                <div style={{ position: 'absolute', top: '16px', left: '16px', background: 'rgba(139, 92, 246, 0.9)', color: '#fff', fontSize: '11px', fontWeight: '800', padding: '4px 10px', borderRadius: '6px', textTransform: 'uppercase' }}>
                  DEMO 04 · CLIENT ENGAGEMENT
                </div>
              </div>
              <div style={{ padding: '28px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ fontSize: '22px', fontWeight: '800', marginBottom: '10px' }}>
                  Client Compliance & Automated Follow-Up Notices
                </h3>
                <p style={{ color: 'var(--text2)', fontSize: '14px', lineHeight: 1.6, marginBottom: '20px' }}>
                  Tracks statutory filing milestones (GSTR-1, GSTR-3B, TDS Challans, Advance Tax, Bank Statements) across all clients and generates 1-click tailored WhatsApp notices and emails.
                </p>
                <div style={{ marginTop: 'auto', borderTop: '1px solid var(--border)', paddingTop: '16px' }}>
                  <div style={{ fontSize: '12px', fontWeight: '700', color: '#8b5cf6', textTransform: 'uppercase', marginBottom: '8px' }}>Key Capabilities:</div>
                  <ul style={{ margin: 0, paddingLeft: '18px', fontSize: '13px', color: 'var(--text2)', lineHeight: 1.7 }}>
                    <li>Real-time traffic light status (Compliant, Attention, High Risk)</li>
                    <li>1-Click pre-composed WhatsApp notices ready for client phone dispatch</li>
                    <li>Automated audit trail of reminders sent before statutory due dates</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* MODULE 5 */}
            <div style={{ background: 'var(--card)', borderRadius: '16px', border: '1px solid var(--border)', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
              <div style={{ height: '220px', position: 'relative', borderBottom: '1px solid var(--border)', background: 'var(--bg2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ textAlign: 'center', padding: '20px' }}>
                  <AlertTriangle size={48} style={{ color: '#ef4444', margin: '0 auto 12px' }} />
                  <div style={{ fontWeight: '800', fontSize: '18px' }}>Statutory Audit & Tax Intelligence</div>
                  <div style={{ fontSize: '12px', color: 'var(--text2)' }}>Disallowance & Anomaly Detection</div>
                </div>
                <div style={{ position: 'absolute', top: '16px', left: '16px', background: 'rgba(239, 68, 68, 0.9)', color: '#fff', fontSize: '11px', fontWeight: '800', padding: '4px 10px', borderRadius: '6px', textTransform: 'uppercase' }}>
                  DEMO 05 · AUDIT DEFENSE
                </div>
              </div>
              <div style={{ padding: '28px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ fontSize: '22px', fontWeight: '800', marginBottom: '10px' }}>
                  Tax & Statutory Audit Anomaly Intelligence
                </h3>
                <p style={{ color: 'var(--text2)', fontSize: '14px', lineHeight: 1.6, marginBottom: '20px' }}>
                  Autonomous compliance scan detecting Section 40A(3) cash expense breaches (&gt; ₹10,000), Section 194C / 194J TDS threshold violations, duplicate vendor payouts, and round-sum spikes.
                </p>
                <div style={{ marginTop: 'auto', borderTop: '1px solid var(--border)', paddingTop: '16px' }}>
                  <div style={{ fontSize: '12px', fontWeight: '700', color: '#ef4444', textTransform: 'uppercase', marginBottom: '8px' }}>Key Capabilities:</div>
                  <ul style={{ margin: 0, paddingLeft: '18px', fontSize: '13px', color: 'var(--text2)', lineHeight: 1.7 }}>
                    <li>Flag disallowances before the client files their tax audit report</li>
                    <li>Uncovers high-risk transactions likely to trigger IT/GST notices</li>
                    <li>Protects the signing CA with algorithmic verification logs</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* MODULE 6: COPILOT */}
            <div style={{ background: 'var(--card)', borderRadius: '16px', border: '1px solid var(--border)', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
              <div style={{ height: '220px', position: 'relative', borderBottom: '1px solid var(--border)', background: 'linear-gradient(135deg, rgba(2, 132, 199, 0.15), rgba(99, 102, 241, 0.2))', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ textAlign: 'center', padding: '20px' }}>
                  <MessageSquare size={48} style={{ color: '#0284c7', margin: '0 auto 12px' }} />
                  <div style={{ fontWeight: '800', fontSize: '18px' }}>AI Tax & Financial Copilot</div>
                  <div style={{ fontSize: '12px', color: 'var(--text2)' }}>Natural Language Ledger Analysis</div>
                </div>
                <div style={{ position: 'absolute', top: '16px', left: '16px', background: 'rgba(99, 102, 241, 0.9)', color: '#fff', fontSize: '11px', fontWeight: '800', padding: '4px 10px', borderRadius: '6px', textTransform: 'uppercase' }}>
                  COPILOT · INTERACTIVE AI
                </div>
              </div>
              <div style={{ padding: '28px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ fontSize: '22px', fontWeight: '800', marginBottom: '10px' }}>
                  Tax & Financial Copilot Assistant
                </h3>
                <p style={{ color: 'var(--text2)', fontSize: '14px', lineHeight: 1.6, marginBottom: '20px' }}>
                  Ask natural language questions across all client batch data: “Which vendors have missing GSTINs over ₹50k?”, “Draft a dispute notice for Vendor X’s mismatch”, and get instant statutory citations.
                </p>
                <div style={{ marginTop: 'auto', borderTop: '1px solid var(--border)', paddingTop: '16px' }}>
                  <div style={{ fontSize: '12px', fontWeight: '700', color: '#6366f1', textTransform: 'uppercase', marginBottom: '8px' }}>Key Capabilities:</div>
                  <ul style={{ margin: 0, paddingLeft: '18px', fontSize: '13px', color: 'var(--text2)', lineHeight: 1.7 }}>
                    <li>Cites relevant GST and Income Tax Act sections directly</li>
                    <li>Generates professional email and legal dispute drafts in seconds</li>
                    <li>Zero training required — handles everyday accountants’ English</li>
                  </ul>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ── SEAMLESS ZERO-REPLACEMENT INTEGRATION ── */}
      <section style={{ padding: '80px 5%', background: 'var(--bg2)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', textAlign: 'center' }}>
          
          <div style={{ color: '#0284c7', fontSize: '13px', fontWeight: '800', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '8px' }}>
            Zero Disruption Philosophy
          </div>
          <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 38px)', fontWeight: '900', letterSpacing: '-0.02em', margin: '0 0 16px' }}>
            Works Seamlessly With Your Existing Ecosystem
          </h2>
          <p style={{ color: 'var(--text2)', fontSize: '16px', maxWidth: '720px', margin: '0 auto 48px' }}>
            You do not need to retrain your team on a new accounting package. TaxFlow works upstream and downstream from your existing software.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '20px' }}>
            {[
              { name: 'TallyPrime / Tally ERP', desc: 'Direct XML / Excel Import' },
              { name: 'Zoho Books', desc: 'REST API & CSV Sync' },
              { name: 'Winman Software', desc: 'Audit Schedule Matching' },
              { name: 'SAP & Oracle ERP', desc: 'Enterprise Batch Integrations' },
              { name: 'ClearTax / Govt Portals', desc: '2B JSON Matrix Parsing' },
            ].map((tool, idx) => (
              <div key={idx} style={{ background: 'var(--card)', padding: '24px 16px', borderRadius: '12px', border: '1px solid var(--border)' }}>
                <Database size={28} style={{ color: '#0284c7', margin: '0 auto 10px' }} />
                <div style={{ fontWeight: '800', fontSize: '15px', marginBottom: '4px' }}>{tool.name}</div>
                <div style={{ fontSize: '12px', color: 'var(--text2)' }}>{tool.desc}</div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── COMPARISON TABLE ── */}
      <section style={{ padding: '80px 5%', background: 'var(--bg)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2 style={{ fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: '900', margin: '0 0 12px' }}>
              Manual Accounting vs. Moh-AI TaxFlow
            </h2>
            <p style={{ color: 'var(--text2)', fontSize: '15px' }}>
              How modern CA firms eliminate end-of-the-month filing crunch.
            </p>
          </div>

          <div style={{ overflowX: 'auto', borderRadius: '14px', border: '1px solid var(--border)', background: 'var(--card)' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '14px' }}>
              <thead>
                <tr style={{ background: 'var(--bg2)', borderBottom: '1px solid var(--border)' }}>
                  <th style={{ padding: '16px 20px', fontWeight: '800', color: 'var(--text)' }}>Workflow Task</th>
                  <th style={{ padding: '16px 20px', fontWeight: '800', color: '#ef4444' }}>Traditional Manual Process</th>
                  <th style={{ padding: '16px 20px', fontWeight: '800', color: '#10b981' }}>With Moh-AI TaxFlow</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid var(--border)' }}>
                  <td style={{ padding: '16px 20px', fontWeight: '700' }}>100 Scanned Invoices Entry</td>
                  <td style={{ padding: '16px 20px', color: 'var(--text2)' }}>4 to 6 hours of manual typing & line item entry</td>
                  <td style={{ padding: '16px 20px', color: 'var(--text)', fontWeight: '600' }}>⚡ Under 45 seconds with 100% rule checks</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--border)' }}>
                  <td style={{ padding: '16px 20px', fontWeight: '700' }}>GSTR-2B ITC Reconciliation</td>
                  <td style={{ padding: '16px 20px', color: 'var(--text2)' }}>Manual VLOOKUP in Excel, misses subtle invoice typos</td>
                  <td style={{ padding: '16px 20px', color: 'var(--text)', fontWeight: '600' }}>⚡ Automated fuzzy matching & Sec 16(2)(aa) flags</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--border)' }}>
                  <td style={{ padding: '16px 20px', fontWeight: '700' }}>Client Deadline Follow-ups</td>
                  <td style={{ padding: '16px 20px', color: 'var(--text2)' }}>Articled clerks manually calling & texting 50+ clients</td>
                  <td style={{ padding: '16px 20px', color: 'var(--text)', fontWeight: '600' }}>⚡ 1-Click personalized WhatsApp notices & email logs</td>
                </tr>
                <tr>
                  <td style={{ padding: '16px 20px', fontWeight: '700' }}>Statutory Audit Disallowance</td>
                  <td style={{ padding: '16px 20px', color: 'var(--text2)' }}>Sample testing; easily misses ₹10k+ cash breaches</td>
                  <td style={{ padding: '16px 20px', color: 'var(--text)', fontWeight: '600' }}>⚡ 100% ledger scan for Sec 40A(3) & TDS thresholds</td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>
      </section>

      {/* ── CTA / INTAKE SECTION ── */}
      <section style={{ padding: '90px 5%', background: 'radial-gradient(ellipse at 50% 100%, rgba(2, 132, 199, 0.15) 0%, transparent 70%)' }}>
        <div style={{ maxWidth: '840px', margin: '0 auto', textAlign: 'center', background: 'var(--card)', padding: '56px 40px', borderRadius: '20px', border: '1px solid var(--border)', boxShadow: '0 20px 40px -15px rgba(0,0,0,0.2)' }}>
          
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 14px', borderRadius: '9999px', background: 'rgba(16, 185, 129, 0.1)', color: '#10b981', fontSize: '13px', fontWeight: '800', marginBottom: '20px' }}>
            <ShieldCheck size={16} />
            ENTERPRISE PROOF OF CONCEPT AVAILABLE
          </div>

          <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: '900', letterSpacing: '-0.02em', margin: '0 0 16px' }}>
            Ready to Automate Your Firm’s Tax Pipeline?
          </h2>

          <p style={{ color: 'var(--text2)', fontSize: '16px', lineHeight: 1.6, maxWidth: '640px', margin: '0 auto 36px' }}>
            Whether you manage an independent CA practice with 100+ clients or lead internal corporate finance at a growing manufacturing group, we can deploy a customized TaxFlow pilot in under 7 days.
          </p>

          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link
              href="/contact?service=taxflow"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: 'var(--accent)', color: '#fff', padding: '16px 36px', borderRadius: '10px', fontWeight: '800', fontSize: '16px', textDecoration: 'none', boxShadow: '0 10px 25px -5px rgba(2, 132, 199, 0.4)' }}
            >
              Book a Firm Walkthrough
              <ArrowRight size={18} />
            </Link>

            <Link
              href="/ai-product-engineering"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: 'transparent', color: 'var(--text)', border: '1px solid var(--border)', padding: '16px 28px', borderRadius: '10px', fontWeight: '700', fontSize: '15px', textDecoration: 'none' }}
            >
              View Other AI Systems
            </Link>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
