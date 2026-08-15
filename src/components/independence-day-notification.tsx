'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { X, ExternalLink } from 'lucide-react';

export function IndependenceDayNotification() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Open modal on page load unless user dismissed it in this session
    const dismissed = sessionStorage.getItem('moh_independence_day_popup_dismissed_2026');
    if (!dismissed) {
      // Small timeout for smooth entrance after page hydration
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 400);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem('moh_independence_day_popup_dismissed_2026', 'true');
  };

  if (!mounted || !isOpen) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '16px',
        background: 'rgba(0, 0, 0, 0.82)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        animation: 'fadeIn 0.3s ease-out',
      }}
      onClick={handleClose}
    >
      <div
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '560px',
          borderRadius: '20px',
          overflow: 'hidden',
          background: '#0a0d14',
          border: '1px solid rgba(255, 153, 51, 0.4)',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.8), 0 0 30px rgba(255, 153, 51, 0.25)',
          animation: 'scaleUp 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top-Right Circular Close Button */}
        <button
          onClick={handleClose}
          aria-label="Close modal"
          style={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            zIndex: 10,
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            background: 'rgba(0, 0, 0, 0.65)',
            border: '1px solid rgba(255, 255, 255, 0.25)',
            color: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            backdropFilter: 'blur(4px)',
            transition: 'all 0.2s ease',
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.background = 'rgba(0, 0, 0, 0.9)';
            e.currentTarget.style.transform = 'scale(1.08)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.background = 'rgba(0, 0, 0, 0.65)';
            e.currentTarget.style.transform = 'scale(1)';
          }}
        >
          <X className="w-5 h-5 text-white" />
        </button>

        {/* Poster Image Container */}
        <Link
          href="/blog/happy-independence-day-2026"
          onClick={handleClose}
          style={{ display: 'block', textDecoration: 'none', position: 'relative' }}
        >
          <div style={{ width: '100%', position: 'relative', background: '#000' }}>
            <Image
              src="/images/independence-day-2026.png"
              alt="Happy 80th Independence Day Moh-AI Tech Poster"
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

          {/* Bottom Action Strip */}
          <div
            style={{
              padding: '14px 20px',
              background: 'linear-gradient(180deg, #0d1322 0%, #060911 100%)',
              borderTop: '1px solid rgba(255, 153, 51, 0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '12px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontSize: '16px' }}>🇮🇳</span>
              <span
                style={{
                  fontSize: '13px',
                  fontWeight: 600,
                  color: '#f3f4f6',
                  fontFamily: "'Space Grotesk', sans-serif",
                }}
              >
                Happy 80th Independence Day
              </span>
            </div>
            <span
              style={{
                fontSize: '12px',
                fontWeight: 700,
                color: '#FF9933',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px',
                fontFamily: "'Space Grotesk', sans-serif",
              }}
            >
              Read Article <ExternalLink className="w-3.5 h-3.5" />
            </span>
          </div>
        </Link>
      </div>

      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleUp {
          from { opacity: 0; transform: scale(0.92); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
}
