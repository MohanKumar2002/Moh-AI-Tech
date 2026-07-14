'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { LayoutDashboard, CheckSquare, Users, BookOpen, LogOut, Menu, X } from 'lucide-react';

export default function ERPlayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const navItems = [
    { name: 'Overview', href: '/erp/dashboard', icon: LayoutDashboard },
    { name: 'Tasks & Projects', href: '/erp/tasks', icon: CheckSquare },
    { name: 'HR & Onboarding', href: '/erp/hr', icon: Users },
    { name: 'Knowledge Base', href: '/erp/knowledge', icon: BookOpen },
  ];

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: 'var(--bg)' }}>
      
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
            <div style={{ fontSize: '12px', color: 'var(--accent)' }}>Staff Portal</div>
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
              JD
            </div>
            <div>
              <div style={{ fontSize: '14px', fontWeight: '600', color: 'var(--text)' }}>John Doe</div>
              <div style={{ fontSize: '12px', color: 'var(--muted)' }}>Intern - AI Engineer</div>
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
