'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Bell, X, Share2, Download, Sparkles, Flag, ExternalLink } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';

export function IndependenceDayNotification() {
  const [showBanner, setShowBanner] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setMounted(true);
    const dismissed = localStorage.getItem('moh_independence_day_banner_dismissed_2026');
    if (dismissed === 'true') {
      setShowBanner(false);
    }
  }, []);

  const handleDismissBanner = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowBanner(false);
    localStorage.setItem('moh_independence_day_banner_dismissed_2026', 'true');
  };

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleShare = async () => {
    const shareData = {
      title: 'Happy Independence Day — Moh-AI Tech',
      text: 'Celebrating the freedom that inspires innovation, fuels creativity, and empowers us to build a smarter, stronger, and better India. JAI HIND! 🇮🇳',
      url: window.location.origin + '/blog/happy-independence-day-2026',
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.log('Share error:', err);
      }
    } else {
      await navigator.clipboard.writeText(shareData.url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/images/independence-day-2026.png';
    link.download = 'MOH-AI-Tech-Independence-Day-2026.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (!mounted) return null;

  return (
    <>
      {/* ── Top Announcement Banner ───────────────────────────────────── */}
      {showBanner && (
        <div
          style={{
            position: 'relative',
            zIndex: 99,
            background: 'linear-gradient(90deg, #111827 0%, #1e1b4b 50%, #064e3b 100%)',
            borderBottom: '2px solid transparent',
            borderImage: 'linear-gradient(90deg, #FF9933, #FFFFFF, #138808) 1',
            color: '#ffffff',
            padding: '10px 16px',
            fontSize: '14px',
            fontFamily: "'Space Grotesk', sans-serif",
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 20px rgba(0,0,0,0.4)',
          }}
        >
          <div
            style={{
              maxWidth: '1200px',
              margin: '0 auto',
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '12px',
              flexWrap: 'wrap',
            }}
          >
            <div
              onClick={handleOpenModal}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                cursor: 'pointer',
                flex: '1 1 auto',
              }}
            >
              <span
                style={{
                  background: 'linear-gradient(135deg, #FF9933, #138808)',
                  padding: '3px 8px',
                  borderRadius: '12px',
                  fontSize: '11px',
                  fontWeight: 700,
                  letterSpacing: '0.5px',
                  color: '#fff',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px',
                }}
              >
                🇮🇳 SPECIAL ANNOUNCEMENT
              </span>
              <span style={{ fontWeight: 500, color: '#f3f4f6' }}>
                <strong>Happy 80th Independence Day!</strong> Celebrating Innovation, Freedom &amp; Building for India.
              </span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <button
                onClick={handleOpenModal}
                style={{
                  background: 'linear-gradient(135deg, #FF9933 0%, #e67e22 100%)',
                  color: '#ffffff',
                  border: 'none',
                  padding: '6px 14px',
                  borderRadius: '20px',
                  fontWeight: 600,
                  fontSize: '13px',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  boxShadow: '0 2px 10px rgba(255, 153, 51, 0.4)',
                  transition: 'all 0.2s ease',
                }}
              >
                <Sparkles className="w-3.5 h-3.5" />
                View Post
              </button>
              <button
                onClick={handleDismissBanner}
                aria-label="Dismiss banner"
                style={{
                  background: 'rgba(255,255,255,0.1)',
                  border: 'none',
                  color: '#9ca3af',
                  width: '26px',
                  height: '26px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
                onMouseOver={(e) => (e.currentTarget.style.color = '#fff')}
                onMouseOut={(e) => (e.currentTarget.style.color = '#9ca3af')}
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── Floating Notification Bell Button ─────────────────────────── */}
      <button
        onClick={handleOpenModal}
        aria-label="Open Independence Day Notification"
        style={{
          position: 'fixed',
          bottom: '24px',
          left: '24px',
          zIndex: 90,
          background: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%)',
          border: '2px solid rgba(255, 153, 51, 0.6)',
          borderRadius: '50px',
          padding: '10px 18px',
          color: '#ffffff',
          boxShadow: '0 10px 25px rgba(0,0,0,0.5), 0 0 15px rgba(255, 153, 51, 0.3)',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          cursor: 'pointer',
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: '13px',
          fontWeight: 600,
          transition: 'transform 0.2s ease, box-shadow 0.2s ease',
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.transform = 'scale(1.05)';
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
        }}
      >
        <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
          <Bell className="w-4 h-4 text-orange-400" />
          <span
            style={{
              position: 'absolute',
              top: '-6px',
              right: '-8px',
              width: '10px',
              height: '10px',
              background: '#FF9933',
              borderRadius: '50%',
              boxShadow: '0 0 8px #FF9933',
              animation: 'pulse 2s infinite',
            }}
          />
        </div>
        <span>🇮🇳 Independence Day Post</span>
      </button>

      {/* ── Rich Independence Day Modal Dialog ───────────────────────── */}
      <Dialog open={modalOpen} onOpenChange={setModalOpen}>
        <DialogContent
          className="sm:max-w-[720px] p-0 overflow-hidden border-0 bg-slate-950 text-white rounded-2xl shadow-2xl"
          style={{
            background: 'linear-gradient(180deg, #0b0f19 0%, #030712 100%)',
            border: '1px solid rgba(255, 153, 51, 0.3)',
          }}
        >
          {/* Top Tricolor Decorative Bar */}
          <div
            style={{
              height: '4px',
              width: '100%',
              background: 'linear-gradient(90deg, #FF9933 0%, #FFFFFF 50%, #138808 100%)',
            }}
          />

          <div style={{ padding: '24px', maxHeight: '85vh', overflowY: 'auto' }}>
            <DialogHeader style={{ marginBottom: '16px' }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '8px',
                }}
              >
                <span
                  style={{
                    background: 'linear-gradient(135deg, rgba(255,153,51,0.2), rgba(19,136,8,0.2))',
                    border: '1px solid rgba(255,153,51,0.4)',
                    color: '#FF9933',
                    fontSize: '12px',
                    fontWeight: 700,
                    padding: '4px 10px',
                    borderRadius: '20px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                  }}
                >
                  🇮🇳 15TH AUGUST 2026 • OFFICIAL POST
                </span>
                <span style={{ fontSize: '13px', color: '#9ca3af' }}>Moh-AI Tech</span>
              </div>
              <DialogTitle
                style={{
                  fontSize: '24px',
                  fontWeight: 800,
                  color: '#ffffff',
                  fontFamily: "'Syne', 'Space Grotesk', sans-serif",
                  lineHeight: '1.3',
                }}
              >
                Happy Independence Day from Moh-AI Tech!
              </DialogTitle>
              <DialogDescription style={{ color: '#9ca3af', fontSize: '14px', marginTop: '4px' }}>
                Celebrating freedom, innovation, and building smart AI technology for India.
              </DialogDescription>
            </DialogHeader>

            {/* Poster Image Display */}
            <div
              style={{
                position: 'relative',
                width: '100%',
                borderRadius: '12px',
                overflow: 'hidden',
                border: '1px solid rgba(255,255,255,0.1)',
                boxShadow: '0 12px 30px rgba(0,0,0,0.6)',
                marginBottom: '20px',
                background: '#000',
              }}
            >
              <Image
                src="/images/independence-day-2026.png"
                alt="Happy Independence Day Moh-AI Tech Poster"
                width={1200}
                height={840}
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  objectFit: 'contain',
                }}
                priority
              />
            </div>

            {/* Content Summary Card */}
            <div
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '12px',
                padding: '20px',
                marginBottom: '20px',
              }}
            >
              <p
                style={{
                  fontSize: '15px',
                  lineHeight: '1.6',
                  color: '#e5e7eb',
                  marginBottom: '16px',
                  fontStyle: 'italic',
                }}
              >
                &ldquo;Celebrating the freedom that inspires innovation, fuels creativity, and empowers us to build a smarter, stronger, and better India.&rdquo;
              </p>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
                  gap: '10px',
                  marginBottom: '16px',
                }}
              >
                <div style={{ background: 'rgba(255,153,51,0.1)', border: '1px solid rgba(255,153,51,0.2)', padding: '10px', borderRadius: '8px', textAlign: 'center' }}>
                  <div style={{ fontSize: '18px' }}>🧠</div>
                  <div style={{ fontSize: '11px', fontWeight: 700, color: '#FF9933', marginTop: '4px' }}>AI SOLUTIONS</div>
                </div>
                <div style={{ background: 'rgba(59,130,246,0.1)', border: '1px solid rgba(59,130,246,0.2)', padding: '10px', borderRadius: '8px', textAlign: 'center' }}>
                  <div style={{ fontSize: '18px' }}>⚙️</div>
                  <div style={{ fontSize: '11px', fontWeight: 700, color: '#60a5fa', marginTop: '4px' }}>AUTOMATION</div>
                </div>
                <div style={{ background: 'rgba(168,85,247,0.1)', border: '1px solid rgba(168,85,247,0.2)', padding: '10px', borderRadius: '8px', textAlign: 'center' }}>
                  <div style={{ fontSize: '18px' }}>💻</div>
                  <div style={{ fontSize: '11px', fontWeight: 700, color: '#c084fc', marginTop: '4px' }}>CUSTOM SOFTWARE</div>
                </div>
                <div style={{ background: 'rgba(19,136,8,0.1)', border: '1px solid rgba(19,136,8,0.2)', padding: '10px', borderRadius: '8px', textAlign: 'center' }}>
                  <div style={{ fontSize: '18px' }}>☁️</div>
                  <div style={{ fontSize: '11px', fontWeight: 700, color: '#4ade80', marginTop: '4px' }}>SAAS PRODUCTS</div>
                </div>
              </div>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  background: 'linear-gradient(90deg, rgba(255,153,51,0.15), rgba(19,136,8,0.15))',
                  borderLeft: '4px solid #FF9933',
                  padding: '12px 16px',
                  borderRadius: '0 8px 8px 0',
                }}
              >
                <span style={{ fontSize: '14px', fontWeight: 700, color: '#ffffff' }}>
                  Proud to be Indian. Proud to build for India. 🇮🇳
                </span>
                <span style={{ fontSize: '13px', fontWeight: 800, color: '#FF9933' }}>JAI HIND!</span>
              </div>
            </div>

            {/* Modal Actions */}
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              <Link
                href="/blog/happy-independence-day-2026"
                onClick={() => setModalOpen(false)}
                style={{
                  flex: '1 1 auto',
                  background: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)',
                  color: '#ffffff',
                  textDecoration: 'none',
                  padding: '10px 16px',
                  borderRadius: '8px',
                  fontWeight: 600,
                  fontSize: '14px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '6px',
                }}
              >
                <ExternalLink className="w-4 h-4" />
                Read Full Article
              </Link>
              <button
                onClick={handleDownload}
                style={{
                  background: 'rgba(255,255,255,0.08)',
                  border: '1px solid rgba(255,255,255,0.15)',
                  color: '#ffffff',
                  padding: '10px 16px',
                  borderRadius: '8px',
                  fontWeight: 600,
                  fontSize: '14px',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  transition: 'background 0.2s ease',
                }}
                onMouseOver={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.15)')}
                onMouseOut={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.08)')}
              >
                <Download className="w-4 h-4" />
                Download Poster
              </button>
              <button
                onClick={handleShare}
                style={{
                  background: 'rgba(255,153,51,0.15)',
                  border: '1px solid rgba(255,153,51,0.3)',
                  color: '#FF9933',
                  padding: '10px 16px',
                  borderRadius: '8px',
                  fontWeight: 600,
                  fontSize: '14px',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                }}
              >
                <Share2 className="w-4 h-4" />
                {copied ? 'Link Copied!' : 'Share'}
              </button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
