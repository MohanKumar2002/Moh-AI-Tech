'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { LayoutDashboard, CheckSquare, Users, BookOpen, LogOut, Menu, X, ShieldAlert } from 'lucide-react';

export default function ERPlayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isBlurred, setIsBlurred] = useState(false);

  // Role for mockup (would come from auth context in real app)
  const role = 'admin'; 

  useEffect(() => {
    const handleBlur = () => setIsBlurred(true);
    const handleFocus = () => setIsBlurred(false);
    
    // Anti-inspect & Right Click
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
      alert("SECURITY ALERT: Action blocked due to strict NDA policies.");
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey && e.key === 'p') || (e.ctrlKey && e.key === 'c') || (e.ctrlKey && e.key === 'u')) {
        e.preventDefault();
        alert("SECURITY ALERT: Screen capture and copying are strictly prohibited.");
      }
    };

    window.addEventListener('blur', handleBlur);
    window.addEventListener('focus', handleFocus);
    window.addEventListener('contextmenu', handleContextMenu);
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('blur', handleBlur);
      window.removeEventListener('focus', handleFocus);
      window.removeEventListener('contextmenu', handleContextMenu);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const navItems = [
    { name: 'Overview', href: '/erp/dashboard', icon: LayoutDashboard },
    { name: 'Tasks & Projects', href: '/erp/tasks', icon: CheckSquare },
    { name: 'Security Incidents', href: '/erp/security', icon: ShieldAlert },
    { name: 'HR & Onboarding', href: '/erp/hr', icon: Users },
    { name: 'Knowledge Base', href: '/erp/knowledge', icon: BookOpen },
  ];

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: 'var(--bg)', position: 'relative' }}>
      
      {/* Forensic Watermark Overlay */}
      <div style={{
        position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, pointerEvents: 'none', zIndex: 9999,
        backgroundImage: 'url("data:image/svg+xml;utf8,<svg xmlns=\\\'http://www.w3.org/2000/svg\\\' viewBox=\\\'0 0 300 300\\\' width=\\\'400\\\' height=\\\'400\\\'><text x=\\\'50%\\\' y=\\\'50%\\\' transform=\\\'rotate(-45 150 150)\\\' fill=\\\'rgba(255,255,255,0.03)\\\' font-size=\\\'14\\\' font-family=\\\'monospace\\\' text-anchor=\\\'middle\\\'>CONFIDENTIAL | ID: JDOE_DEV | IP: 192.168.1.1</text></svg>")',
        backgroundRepeat: 'repeat',
      }}></div>

      {/* Unfocus Blur Overlay */}
      {isBlurred && (
        <div style={{
          position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: 10000,
          background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(15px)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: '#fff'
        }}>
          <ShieldAlert size={64} color="#ef4444" style={{ marginBottom: '24px' }} />
          <h2 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '8px' }}>Screen Obscured</h2>
          <p style={{ color: '#aaa', fontSize: '16px' }}>Security policies require window focus to view the portal.</p>
          <p style={{ color: '#aaa', marginTop: '12px', fontSize: '14px', background: 'rgba(255,255,255,0.1)', padding: '8px 16px', borderRadius: '8px' }}>Click anywhere to resume session.</p>
        </div>
      )}
      
      {/* Mobile Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px', background: 'var(--card)', borderBottom: '1px solid var(--border)', position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50 }} className="md:hidden">
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <Image src="/logo.png" alt="Logo" width={32} height={32} />
          <span style={{ fontWeight: '700', fontSize: '16px', color: 'var(--text)' }}>ERP Portal</span>
        </div>
        <button onClick={() => setIsMobileOpen(!isMobileOpen)} style={{ background: 'none', border: 'none', color: 'var(--text)', cursor: 'pointer' }}>
          {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Sidebar */}
      <div className={`erp-sidebar ${isMobileOpen ? 'open' : ''}`} style={{ 
        width: '280px', 
        background: 'var(--card)', 
        borderRight: '1px solid var(--border)', 
        display: 'flex', 
        flexDirection: 'column',
        position: 'fixed',
        top: 0,
        bottom: 0,
        left: 0,
        zIndex: 40,
        transition: 'transform 0.3s ease'
      }}>
        <div style={{ padding: '24px', display: 'flex', alignItems: 'center', gap: '12px', borderBottom: '1px solid var(--border)' }}>
          <Image src="/logo.png" alt="Logo" width={40} height={40} />
          <div>
            <div style={{ fontWeight: '800', fontSize: '16px', color: 'var(--text)', letterSpacing: '0.5px' }}>MOH-AI TECH</div>
            <div style={{ fontSize: '12px', color: 'var(--accent)' }}>Admin Portal</div>
          </div>
        </div>

        <nav style={{ padding: '24px 16px', flex: 1, display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <div style={{ fontSize: '11px', fontWeight: '700', color: 'var(--muted2)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px', paddingLeft: '12px' }}>Menu</div>
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;
            return (
              <Link key={item.name} href={item.href} onClick={() => setIsMobileOpen(false)} style={{ 
                display: 'flex', alignItems: 'center', gap: '12px', padding: '12px', borderRadius: '8px',
                background: isActive ? 'var(--bg2)' : 'transparent',
                color: isActive ? 'var(--accent)' : 'var(--muted)',
                fontWeight: isActive ? '600' : '500',
                textDecoration: 'none', transition: 'all 0.2s'
              }}>
                <Icon size={20} />
                {item.name}
              </Link>
            );
          })}
        </nav>

        <div style={{ padding: '24px 16px', borderTop: '1px solid var(--border)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px', padding: '0 12px' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'linear-gradient(135deg, var(--accent), #5C3EE8)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 'bold' }}>
              M
            </div>
            <div>
              <div style={{ fontSize: '14px', fontWeight: '600', color: 'var(--text)' }}>Mohan Kumar</div>
              <div style={{ fontSize: '12px', color: 'var(--muted)' }}>System Administrator</div>
            </div>
          </div>
          <Link href="/erp/login" style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px', borderRadius: '8px', color: '#ff4d4f', textDecoration: 'none', fontWeight: '500' }}>
            <LogOut size={20} />
            Sign Out
          </Link>
        </div>
      </div>

      {/* Main Content Area */}
      <div style={{ flex: 1, padding: '40px', marginLeft: '280px', marginTop: '0', minHeight: '100vh', background: 'var(--bg)' }} className="erp-main">
        {children}
      </div>

      <style jsx global>{`
        @media (max-width: 768px) {
          .erp-sidebar {
            transform: translateX(-100%);
          }
          .erp-sidebar.open {
            transform: translateX(0);
          }
          .erp-main {
            margin-left: 0 !important;
            padding: 24px !important;
            margin-top: 60px !important;
          }
        }
      `}</style>
    </div>
  );
}
