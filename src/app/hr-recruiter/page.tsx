'use client';

import React, { useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Users, 
  Sparkles, 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  Maximize2, 
  CheckCircle2, 
  ArrowRight, 
  Clock, 
  ShieldCheck, 
  Search, 
  BarChart3, 
  Bot, 
  FileCheck, 
  Server, 
  HelpCircle,
  Briefcase
} from 'lucide-react';
import Footer from '@/components/layout/footer';

export default function HRRecruiterProductPage() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [activeChapter, setActiveChapter] = useState(0);

  const chapters = [
    { title: 'HR Command Center', time: 0, tag: 'Architecture' },
    { title: 'Chat-Driven Pipeline Actions', time: 18, tag: 'Command AI' },
    { title: 'Semantic Resume Screening', time: 38, tag: 'Screening Studio' },
    { title: 'Bulk Resume Processing', time: 54, tag: 'Batch Import' },
    { title: 'Hiring Funnel & Analytics', time: 68, tag: 'Analytics' },
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
    <div style={{ minHeight: '100vh', background: 'var(--bg)', color: 'var(--text)' }}>

      {/* ── HERO SECTION ── */}
      <section style={{ padding: '140px 5% 70px', background: 'radial-gradient(ellipse at 50% 0%, rgba(139, 92, 246, 0.12) 0%, transparent 70%)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto', textAlign: 'center' }}>
          
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', borderRadius: '9999px', background: 'rgba(139, 92, 246, 0.1)', border: '1px solid rgba(139, 92, 246, 0.3)', color: '#8B5CF6', fontSize: '13px', fontWeight: '700', marginBottom: '24px', letterSpacing: '0.04em' }}>
            <Sparkles size={15} />
            MOH-AI RECRUITER AI · AUTONOMOUS TALENT ACQUISITION AGENT
          </div>

          <h1 style={{ fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: '900', lineHeight: 1.15, letterSpacing: '-0.03em', maxWidth: '980px', margin: '0 auto 24px' }}>
            Autonomous Talent Sourcing & Screening for{' '}
            <span style={{ background: 'linear-gradient(135deg, #8B5CF6, #6366f1, #3b82f6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              High-Velocity Engineering & Operations Teams
            </span>
          </h1>

          <p style={{ fontSize: 'clamp(16px, 2vw, 20px)', color: 'var(--text2)', maxWidth: '820px', margin: '0 auto 40px', lineHeight: 1.6 }}>
            Eliminate resume parsing fatigue with real semantic evaluation. Screen hundreds of inbound profiles against custom technical rubrics, trigger interactive pre-screening bots, and track candidate metrics with zero data leakage.
          </p>

          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '40px' }}>
            <Link
              href="/contact?service=hr-recruiter"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: 'var(--accent)', color: '#fff', padding: '16px 32px', borderRadius: '12px', fontWeight: '800', fontSize: '15px', textDecoration: 'none', boxShadow: '0 10px 25px rgba(99, 102, 241, 0.3)' }}
            >
              Request HR Agent Pilot
              <ArrowRight size={18} />
            </Link>

            <a
              href="#video-demo"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: 'var(--bg2)', color: 'var(--text)', border: '1px solid var(--border)', padding: '16px 28px', borderRadius: '12px', fontWeight: '700', fontSize: '15px', textDecoration: 'none' }}
            >
              <Play size={16} fill="var(--text)" />
              Watch 2:50 Platform Walkthrough
            </a>
          </div>

          {/* Quick Metrics */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', maxWidth: '960px', margin: '0 auto' }}>
            <div style={{ background: 'var(--card)', padding: '20px', borderRadius: '14px', border: '1px solid var(--border)' }}>
              <div style={{ fontSize: '32px', fontWeight: '900', color: '#8B5CF6' }}>75%</div>
              <div style={{ fontSize: '13px', color: 'var(--text2)', marginTop: '4px' }}>Time-to-Shortlist Reduction</div>
            </div>
            <div style={{ background: 'var(--card)', padding: '20px', borderRadius: '14px', border: '1px solid var(--border)' }}>
              <div style={{ fontSize: '32px', fontWeight: '900', color: '#6366f1' }}>100%</div>
              <div style={{ fontSize: '13px', color: 'var(--text2)', marginTop: '4px' }}>Contextual Semantic Matching</div>
            </div>
            <div style={{ background: 'var(--card)', padding: '20px', borderRadius: '14px', border: '1px solid var(--border)' }}>
              <div style={{ fontSize: '32px', fontWeight: '900', color: '#3b82f6' }}>0.0%</div>
              <div style={{ fontSize: '13px', color: 'var(--text2)', marginTop: '4px' }}>Candidate Data Training Leaks</div>
            </div>
            <div style={{ background: 'var(--card)', padding: '20px', borderRadius: '14px', border: '1px solid var(--border)' }}>
              <div style={{ fontSize: '32px', fontWeight: '900', color: '#10b981' }}>BYOK</div>
              <div style={{ fontSize: '13px', color: 'var(--text2)', marginTop: '4px' }}>Bring Your Own Key or On-Premise</div>
            </div>
          </div>

        </div>
      </section>

      {/* ── INTERACTIVE VIDEO DEMO SHOWCASE ── */}
      <section id="video-demo" style={{ padding: '80px 5%', background: 'var(--bg2)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1160px', margin: '0 auto' }}>

          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <span style={{ color: '#8B5CF6', fontSize: '12px', fontWeight: '800', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              Full Interactive Screen Recording
            </span>
            <h2 style={{ fontSize: 'clamp(26px, 4vw, 36px)', fontWeight: '900', marginTop: '8px' }}>
              Watch the Autonomous Recruiter in Action
            </h2>
            <p style={{ color: 'var(--text2)', fontSize: '15px', maxWidth: '640px', margin: '8px auto 0' }}>
              Click any chapter below to jump directly to that workflow module in the video demonstration.
            </p>
          </div>

          {/* Chapter Navigation Buttons */}
          <div style={{ display: 'flex', gap: '10px', overflowX: 'auto', paddingBottom: '16px', marginBottom: '24px', justifyContent: 'center', flexWrap: 'wrap' }}>
            {chapters.map((ch, idx) => (
              <button
                key={idx}
                onClick={() => jumpToChapter(ch.time, idx)}
                style={{
                  background: activeChapter === idx ? '#8B5CF6' : 'var(--card)',
                  color: activeChapter === idx ? '#fff' : 'var(--text)',
                  border: `1px solid ${activeChapter === idx ? '#8B5CF6' : 'var(--border)'}`,
                  padding: '10px 18px',
                  borderRadius: '10px',
                  fontSize: '13px',
                  fontWeight: '700',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  transition: 'all 0.2s ease',
                  whiteSpace: 'nowrap'
                }}
              >
                <span style={{ fontSize: '11px', opacity: 0.8, background: activeChapter === idx ? 'rgba(255,255,255,0.2)' : 'var(--bg)', padding: '2px 6px', borderRadius: '4px' }}>
                  {ch.tag}
                </span>
                {ch.title}
              </button>
            ))}
          </div>

          {/* Video Container */}
          <div style={{ position: 'relative', background: '#000', borderRadius: '20px', overflow: 'hidden', border: '1px solid var(--border)', boxShadow: '0 25px 60px rgba(0,0,0,0.4)' }}>
            
            <video
              ref={videoRef}
              src="/videos/hr-demo.webm"
              poster="/images/products/hr-poster.jpg"
              playsInline
              style={{ width: '100%', height: 'auto', display: 'block', maxHeight: '680px', objectFit: 'contain' }}
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            />

            {/* Custom Video Controls Bar */}
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 100%)', padding: '20px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', zIndex: 10 }}>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <button
                  onClick={handlePlayPause}
                  aria-label={isPlaying ? 'Pause Demo' : 'Play Demo'}
                  style={{ background: '#8B5CF6', color: '#fff', border: 'none', width: '42px', height: '42px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}
                >
                  {isPlaying ? <Pause size={18} /> : <Play size={18} fill="#fff" style={{ marginLeft: '2px' }} />}
                </button>

                <button
                  onClick={handleMuteToggle}
                  aria-label={isMuted ? 'Unmute Audio' : 'Mute Audio'}
                  style={{ background: 'rgba(255,255,255,0.15)', color: '#fff', border: 'none', width: '38px', height: '38px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}
                >
                  {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
                </button>

                <div style={{ color: '#fff', fontSize: '13px', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ display: 'inline-block', width: '8px', height: '8px', borderRadius: '50%', background: '#10b981' }} />
                  Live Screencast Walkthrough (2:52)
                </div>
              </div>

              <button
                onClick={handleFullScreen}
                aria-label="Toggle Fullscreen"
                style={{ background: 'rgba(255,255,255,0.15)', color: '#fff', border: 'none', width: '38px', height: '38px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}
              >
                <Maximize2 size={16} />
              </button>

            </div>

          </div>

        </div>
      </section>

      {/* ── CORE WORKFLOW MODULES ── */}
      <section style={{ padding: '90px 5%', background: 'var(--bg)' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>

          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <span style={{ color: '#8B5CF6', fontSize: '12px', fontWeight: '800', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              Functional Architecture
            </span>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: '900', marginTop: '8px' }}>
              Five Modules of the Moh-AI Recruiter Suite
            </h2>
            <p style={{ color: 'var(--text2)', fontSize: '16px', maxWidth: '680px', margin: '12px auto 0' }}>
              Engineered with human-in-the-loop oversight so recruiters retain 100% hiring authority while automating the manual grind.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '30px' }}>

            {/* Module 1 */}
            <div style={{ background: 'var(--card)', borderRadius: '16px', border: '1px solid var(--border)', padding: '32px', display: 'flex', flexDirection: 'column' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(139, 92, 246, 0.12)', color: '#8B5CF6', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                <Bot size={24} />
              </div>
              <h3 style={{ fontSize: '20px', fontWeight: '800', marginBottom: '10px' }}>
                1. AI Command Center
              </h3>
              <p style={{ color: 'var(--text2)', fontSize: '14px', lineHeight: 1.6, marginBottom: '20px' }}>
                Type naturally in conversational English: &quot;Show me candidates matching Python backend with AWS&quot; or &quot;Schedule interviews for top 3 applicants&quot;. The agent maps natural intent to pipeline state changes instantly.
              </p>
              <ul style={{ margin: 'auto 0 0', paddingLeft: '18px', fontSize: '13px', color: 'var(--text2)', lineHeight: 1.8 }}>
                <li>Natural language queries for ATS data</li>
                <li>Zero complex filter menus or boolean syntax</li>
                <li>Instant pipeline status cards and summaries</li>
              </ul>
            </div>

            {/* Module 2 */}
            <div style={{ background: 'var(--card)', borderRadius: '16px', border: '1px solid var(--border)', padding: '32px', display: 'flex', flexDirection: 'column' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(99, 102, 241, 0.12)', color: '#6366f1', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                <Search size={24} />
              </div>
              <h3 style={{ fontSize: '20px', fontWeight: '800', marginBottom: '10px' }}>
                2. Semantic Screening Studio
              </h3>
              <p style={{ color: 'var(--text2)', fontSize: '14px', lineHeight: 1.6, marginBottom: '20px' }}>
                Traditional ATS systems look for exact keywords like &quot;React&quot;. Our semantic evaluator understands contextual equivalents like &quot;Next.js + Redux architecture&quot; or &quot;FastAPI async microservices&quot; to stop false negatives.
              </p>
              <ul style={{ margin: 'auto 0 0', paddingLeft: '18px', fontSize: '13px', color: 'var(--text2)', lineHeight: 1.8 }}>
                <li>Continuous 0-100% fit score matrix</li>
                <li>Detailed scoring rationale breakdown</li>
                <li>Flags missing non-negotiable requirements</li>
              </ul>
            </div>

            {/* Module 3 */}
            <div style={{ background: 'var(--card)', borderRadius: '16px', border: '1px solid var(--border)', padding: '32px', display: 'flex', flexDirection: 'column' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(59, 130, 246, 0.12)', color: '#3b82f6', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                <FileCheck size={24} />
              </div>
              <h3 style={{ fontSize: '20px', fontWeight: '800', marginBottom: '10px' }}>
                3. Bulk Resume Ingestion
              </h3>
              <p style={{ color: 'var(--text2)', fontSize: '14px', lineHeight: 1.6, marginBottom: '20px' }}>
                Drop a zip folder of 500 PDF or DOCX resumes or paste Google Drive / Dropbox shared folders. The ingestion engine parses layout, extracts candidate contact info, education, and roles without corrupting special characters.
              </p>
              <ul style={{ margin: 'auto 0 0', paddingLeft: '18px', fontSize: '13px', color: 'var(--text2)', lineHeight: 1.8 }}>
                <li>Batch extraction in concurrent threads</li>
                <li>Automatic profile deduplication</li>
                <li>Parses non-standard multi-column resume layouts</li>
              </ul>
            </div>

            {/* Module 4 */}
            <div style={{ background: 'var(--card)', borderRadius: '16px', border: '1px solid var(--border)', padding: '32px', display: 'flex', flexDirection: 'column' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(16, 185, 129, 0.12)', color: '#10b981', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                <BarChart3 size={24} />
              </div>
              <h3 style={{ fontSize: '20px', fontWeight: '800', marginBottom: '10px' }}>
                4. Hiring Funnel Analytics
              </h3>
              <p style={{ color: 'var(--text2)', fontSize: '14px', lineHeight: 1.6, marginBottom: '20px' }}>
                Keep executive leadership informed with live charts of applicant throughput, average screening turnaround times, offer acceptance ratios, and cost-per-hire telemetry.
              </p>
              <ul style={{ margin: 'auto 0 0', paddingLeft: '18px', fontSize: '13px', color: 'var(--text2)', lineHeight: 1.8 }}>
                <li>Real-time stage-by-stage drop-off analytics</li>
                <li>Recruiter velocity and response benchmarks</li>
                <li>Exportable executive summary reports (CSV & PDF)</li>
              </ul>
            </div>

            {/* Module 5 */}
            <div style={{ background: 'var(--card)', borderRadius: '16px', border: '1px solid var(--border)', padding: '32px', display: 'flex', flexDirection: 'column' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(239, 68, 68, 0.12)', color: '#ef4444', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                <Server size={24} />
              </div>
              <h3 style={{ fontSize: '20px', fontWeight: '800', marginBottom: '10px' }}>
                5. Private & On-Premise AI Isolation
              </h3>
              <p style={{ color: 'var(--text2)', fontSize: '14px', lineHeight: 1.6, marginBottom: '20px' }}>
                Candidate PII (Personally Identifiable Information) is never used for public LLM training. Connect directly to your private Azure OpenAI tenant, AWS Bedrock, Anthropic, or an air-gapped on-premise model.
              </p>
              <ul style={{ margin: 'auto 0 0', paddingLeft: '18px', fontSize: '13px', color: 'var(--text2)', lineHeight: 1.8 }}>
                <li>Full Bring-Your-Own-Key (BYOK) support</li>
                <li>Automatic phone/email PII masking option</li>
                <li>Compliance with DPDP Act (India) & GDPR (EU)</li>
              </ul>
            </div>

          </div>

        </div>
      </section>

      {/* ── REALISTIC COMPARISON TABLE ── */}
      <section style={{ padding: '80px 5%', background: 'var(--bg2)', borderTop: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1060px', margin: '0 auto' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 36px)', fontWeight: '900' }}>
              How Moh-AI Recruiter Compares
            </h2>
            <p style={{ color: 'var(--text2)', fontSize: '15px', marginTop: '8px' }}>
              Real capabilities compared to manual hiring overhead and basic keyword search.
            </p>
          </div>

          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '14px', background: 'var(--card)', borderRadius: '14px', overflow: 'hidden', border: '1px solid var(--border)' }}>
              <thead>
                <tr style={{ background: 'var(--bg)', borderBottom: '1px solid var(--border)' }}>
                  <th style={{ padding: '16px 20px', fontWeight: '800' }}>Feature / Capability</th>
                  <th style={{ padding: '16px 20px', fontWeight: '800', color: 'var(--text2)' }}>Manual Staffing</th>
                  <th style={{ padding: '16px 20px', fontWeight: '800', color: 'var(--text2)' }}>Legacy Keyword ATS</th>
                  <th style={{ padding: '16px 20px', fontWeight: '800', color: '#8B5CF6' }}>Moh-AI Recruiter AI</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid var(--border)' }}>
                  <td style={{ padding: '16px 20px', fontWeight: '600' }}>Screening 300 Resumes</td>
                  <td style={{ padding: '16px 20px', color: 'var(--text2)' }}>18-24 hours</td>
                  <td style={{ padding: '16px 20px', color: 'var(--text2)' }}>Keyword match (unranked)</td>
                  <td style={{ padding: '16px 20px', color: '#8B5CF6', fontWeight: '700' }}>Under 4 minutes with rubric</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--border)' }}>
                  <td style={{ padding: '16px 20px', fontWeight: '600' }}>Contextual Skill Comprehension</td>
                  <td style={{ padding: '16px 20px', color: 'var(--text2)' }}>High (fatigues easily)</td>
                  <td style={{ padding: '16px 20px', color: 'var(--text2)' }}>Zero (misses synonyms)</td>
                  <td style={{ padding: '16px 20px', color: '#8B5CF6', fontWeight: '700' }}>Deep vector semantic matching</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--border)' }}>
                  <td style={{ padding: '16px 20px', fontWeight: '600' }}>Data Privacy & Model Training</td>
                  <td style={{ padding: '16px 20px', color: 'var(--text2)' }}>Local human review</td>
                  <td style={{ padding: '16px 20px', color: 'var(--text2)' }}>Vendor cloud lock-in</td>
                  <td style={{ padding: '16px 20px', color: '#8B5CF6', fontWeight: '700' }}>100% Private / BYOK / Zero-retention</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--border)' }}>
                  <td style={{ padding: '16px 20px', fontWeight: '600' }}>Conversational Command Center</td>
                  <td style={{ padding: '16px 20px', color: 'var(--text2)' }}>N/A</td>
                  <td style={{ padding: '16px 20px', color: 'var(--text2)' }}>None (rigid menus)</td>
                  <td style={{ padding: '16px 20px', color: '#8B5CF6', fontWeight: '700' }}>Full natural language control</td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>
      </section>

      {/* ── PILOT CONSULTATION CTA ── */}
      <section style={{ padding: '90px 5%', background: 'radial-gradient(ellipse at 50% 100%, rgba(139, 92, 246, 0.15) 0%, transparent 70%)', borderTop: '1px solid var(--border)', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          
          <h2 style={{ fontSize: 'clamp(30px, 4.5vw, 44px)', fontWeight: '900', marginBottom: '16px' }}>
            Ready to Accelerate Your Recruitment Funnel?
          </h2>

          <p style={{ fontSize: '17px', color: 'var(--text2)', lineHeight: 1.6, marginBottom: '36px' }}>
            Schedule an engineering consultation or start a 14-day production pilot with your own candidate criteria.
          </p>

          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link
              href="/contact?service=hr-recruiter"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: 'var(--accent)', color: '#fff', padding: '16px 36px', borderRadius: '12px', fontWeight: '800', fontSize: '16px', textDecoration: 'none' }}
            >
              Book a Recruitment AI Pilot
              <ArrowRight size={18} />
            </Link>

            <Link
              href="/products"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: 'transparent', color: 'var(--text)', border: '1px solid var(--border)', padding: '16px 28px', borderRadius: '12px', fontWeight: '700', fontSize: '15px', textDecoration: 'none' }}
            >
              View Other AI Systems
            </Link>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
