'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function ERPLogin() {
  const [username, setUsername] = useState('');
  const [userId, setUserId] = useState('');
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
    <div style={{ display: 'flex', minHeight: '100vh', width: '100vw', backgroundColor: 'var(--bg)', overflow: 'hidden' }}>
      
      {/* LEFT SIDE: Branding & Graphic */}
      <div className="erp-left">
        {/* Background glow */}
        <div className="hero-glow hero-glow-1" style={{ top: '-10%', left: '-10%', width: '700px', height: '700px', opacity: 0.8 }}></div>
        
        <div style={{ zIndex: 10 }}>
          <a href="/" style={{ display: 'inline-flex', alignItems: 'center', textDecoration: 'none' }}>
            <div style={{ background: 'var(--bg)', padding: '12px', borderRadius: '14px', border: '1px solid var(--border)' }}>
              <Image src="/logo.png" alt="Logo" width={48} height={48} style={{ objectFit: 'contain' }} />
            </div>
            <span className="grad-text" style={{ marginLeft: '16px', fontSize: '26px', fontWeight: '800', letterSpacing: '1px' }}>MOH-AI TECH</span>
          </a>
        </div>
        
        <div style={{ zIndex: 10, maxWidth: '540px' }}>
          <h1 style={{ fontFamily: 'var(--syne)', fontSize: 'clamp(38px, 4vw, 56px)', fontWeight: '800', lineHeight: 1.1, marginBottom: '28px', color: 'var(--text)', letterSpacing: '-1.5px' }}>
            Enterprise Resource <br /><em className="grad-text" style={{ fontStyle: 'normal' }}>Planning Portal</em>
          </h1>
          <p style={{ fontSize: '17px', color: 'var(--muted)', lineHeight: 1.7, fontWeight: '400' }}>
            Internal management system for Moh-AI Tech staff, developers, and administrators. 
            Access securely monitored knowledge bases, HR workflows, and task assignments.
          </p>
        </div>
        
        <div style={{ zIndex: 10, fontSize: '14px', color: 'var(--muted2)' }}>
          &copy; {new Date().getFullYear()} Moh-AI Tech. Internal Use Only.
        </div>
      </div>

      {/* RIGHT SIDE: Login Form */}
      <div style={{ 
        flex: 1, 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        padding: '40px',
        background: 'var(--bg2)',
        position: 'relative'
      }}>
        {/* Subtle glow on right side for dark mode */}
        <div className="hero-glow hero-glow-2" style={{ bottom: '0', right: '0', width: '500px', height: '500px', opacity: 0.3 }}></div>

        <div style={{ width: '100%', maxWidth: '440px', zIndex: 10 }}>
          
          <div style={{ marginBottom: '44px' }}>
            <h2 style={{ fontFamily: 'var(--syne)', fontSize: '32px', fontWeight: '800', color: 'var(--text)', marginBottom: '10px', letterSpacing: '-0.5px' }}>Staff Login</h2>
            <p style={{ fontSize: '16px', color: 'var(--muted)' }}>Enter your designated Username and User ID to access the dashboard.</p>
          </div>

          <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', color: 'var(--text)', marginBottom: '10px' }}>Username</label>
              <input 
                type="text" 
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="e.g. jdoe_dev"
                style={{ width: '100%', padding: '16px 20px', borderRadius: '12px', border: '1px solid var(--border)', background: 'var(--bg)', color: 'var(--text)', fontSize: '15px', outline: 'none', transition: 'border-color 0.2s', boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.02)' }}
              />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', color: 'var(--text)', marginBottom: '10px' }}>User ID (Password)</label>
              <input 
                type="password" 
                required
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                placeholder="••••••••••••"
                style={{ width: '100%', padding: '16px 20px', borderRadius: '12px', border: '1px solid var(--border)', background: 'var(--bg)', color: 'var(--text)', fontSize: '15px', outline: 'none', transition: 'border-color 0.2s', boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.02)' }}
              />
            </div>
            
            <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: '16px', padding: '18px', fontSize: '16px', borderRadius: '12px', fontWeight: '600', letterSpacing: '0.5px' }}>
              {isLoading ? 'Authenticating...' : 'Access Portal →'}
            </button>
          </form>

          <div style={{ marginTop: '56px', fontSize: '13px', color: 'var(--muted)', textAlign: 'left', lineHeight: '1.65', background: 'rgba(239, 68, 68, 0.04)', padding: '24px', borderRadius: '16px', border: '1px solid rgba(239, 68, 68, 0.15)' }}>
            <strong style={{ color: '#ef4444', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px', fontSize: '14px' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
              Strictly Confidential & Monitored
            </strong>
            Accounts are provisioned exclusively by administration. If your contract ends, your profile and access will be immediately revoked. 
            <br /><br />
            <strong>Terms & Conditions (NDA Active):</strong> No screenshots, screen recordings, or unauthorized data exports are allowed on this portal. Violations will result in immediate termination and legal action.
          </div>
          
        </div>
      </div>
      
    </div>
  );
}
