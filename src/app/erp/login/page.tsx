'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function ERPLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate auth delay for mockup
    setTimeout(() => {
      setIsLoading(false);
      router.push('/erp/dashboard');
    }, 800);
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--bg)', position: 'relative', overflow: 'hidden' }}>
      {/* Background Orbs */}
      <div className="hero-glow hero-glow-1" style={{ top: '-10%', left: '-10%', width: '500px', height: '500px', opacity: 0.5 }}></div>
      <div className="hero-glow hero-glow-2" style={{ bottom: '-10%', right: '-10%', width: '600px', height: '600px', opacity: 0.4 }}></div>

      <div style={{ zIndex: 10, width: '100%', maxWidth: '420px', padding: '40px', background: 'var(--card)', borderRadius: '20px', border: '1px solid var(--border)', boxShadow: '0 20px 40px rgba(0,0,0,0.1), 0 0 0 1px rgba(255,255,255,0.05) inset', backdropFilter: 'blur(20px)' }}>
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <a href="/" style={{ display: 'inline-flex', alignItems: 'center', textDecoration: 'none', marginBottom: '24px' }}>
            <Image src="/logo.png" alt="Logo" width={40} height={40} style={{ objectFit: 'contain' }} />
            <span className="grad-text" style={{ marginLeft: '12px', fontSize: '20px', fontWeight: '800' }}>MOH-AI TECH ERP</span>
          </a>
          <h1 style={{ fontSize: '24px', fontWeight: '700', color: 'var(--text)', marginBottom: '8px' }}>Welcome Back</h1>
          <p style={{ fontSize: '14px', color: 'var(--muted)' }}>Enter your credentials to access the staff portal</p>
        </div>

        <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div>
            <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: 'var(--text)', marginBottom: '8px' }}>Email Address</label>
            <input 
              type="email" 
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="intern@moh-ai-tech.com"
              style={{ width: '100%', padding: '12px 16px', borderRadius: '10px', border: '1px solid var(--border)', background: 'var(--bg2)', color: 'var(--text)', fontSize: '14px', outline: 'none', transition: 'border-color 0.2s' }}
            />
          </div>
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
              <label style={{ fontSize: '13px', fontWeight: '600', color: 'var(--text)' }}>Password</label>
              <a href="#" style={{ fontSize: '12px', color: 'var(--accent)', textDecoration: 'none' }}>Forgot?</a>
            </div>
            <input 
              type="password" 
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              style={{ width: '100%', padding: '12px 16px', borderRadius: '10px', border: '1px solid var(--border)', background: 'var(--bg2)', color: 'var(--text)', fontSize: '14px', outline: 'none', transition: 'border-color 0.2s' }}
            />
          </div>
          
          <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: '8px', padding: '14px', fontSize: '15px' }}>
            {isLoading ? 'Authenticating...' : 'Sign In'}
          </button>
        </form>

        <div style={{ marginTop: '32px', fontSize: '12px', color: 'var(--muted)', textAlign: 'left', lineHeight: '1.6', background: 'rgba(239, 68, 68, 0.05)', padding: '16px', borderRadius: '12px', border: '1px solid rgba(239, 68, 68, 0.2)' }}>
          <strong style={{ color: '#ef4444', display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '8px' }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
            Strictly Confidential & Monitored Access
          </strong>
          Accounts are provisioned exclusively by administration. If your contract ends, your profile and access will be immediately revoked. 
          <br /><br />
          <strong>Terms & Conditions (NDA Active):</strong> No screenshots, screen recordings, or unauthorized data exports are allowed on this portal. By logging in, you agree to our strict non-disclosure policies preventing any data leaks or intellectual property sharing. Violations will result in immediate termination and legal action.
        </div>
      </div>
    </div>
  );
}
