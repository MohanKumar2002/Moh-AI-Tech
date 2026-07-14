'use client';
import React from 'react';
import { FileText, Download, UserCheck, ShieldCheck } from 'lucide-react';

export default function ERPHR() {
  return (
    <div>
      <div style={{ marginBottom: '32px' }}>
        <h1 style={{ fontSize: '28px', fontWeight: '700', color: 'var(--text)', marginBottom: '8px' }}>HR & Onboarding</h1>
        <p style={{ color: 'var(--muted)' }}>Access your employee documents and policies.</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
        
        {/* Profile Card */}
        <div style={{ background: 'var(--card)', borderRadius: '16px', border: '1px solid var(--border)', padding: '32px', textAlign: 'center' }}>
          <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'linear-gradient(135deg, var(--accent), #5C3EE8)', color: '#fff', fontSize: '28px', fontWeight: 'bold', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
            JD
          </div>
          <h2 style={{ fontSize: '20px', fontWeight: '700', color: 'var(--text)', marginBottom: '4px' }}>John Doe</h2>
          <div style={{ fontSize: '14px', color: 'var(--accent)', marginBottom: '16px' }}>AI Engineering Intern</div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', textAlign: 'left', marginTop: '24px', paddingTop: '24px', borderTop: '1px solid var(--border)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ color: 'var(--muted)', fontSize: '13px' }}>Employee ID</span>
              <span style={{ color: 'var(--text)', fontSize: '13px', fontWeight: '600' }}>MOH-2041</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ color: 'var(--muted)', fontSize: '13px' }}>Start Date</span>
              <span style={{ color: 'var(--text)', fontSize: '13px', fontWeight: '600' }}>Jun 1, 2025</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ color: 'var(--muted)', fontSize: '13px' }}>Status</span>
              <span style={{ color: '#22c55e', fontSize: '13px', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '4px' }}><UserCheck size={14}/> Active</span>
            </div>
          </div>
        </div>

        {/* Documents */}
        <div style={{ background: 'var(--card)', borderRadius: '16px', border: '1px solid var(--border)', padding: '32px' }}>
          <h2 style={{ fontSize: '18px', fontWeight: '700', color: 'var(--text)', marginBottom: '24px' }}>My Documents</h2>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px', background: 'var(--bg2)', borderRadius: '12px', border: '1px solid var(--border)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <FileText size={24} color="var(--accent)" />
                <div>
                  <div style={{ fontSize: '14px', fontWeight: '600', color: 'var(--text)' }}>Internship Offer Letter.pdf</div>
                  <div style={{ fontSize: '12px', color: 'var(--muted)' }}>Signed on May 15, 2025</div>
                </div>
              </div>
              <button style={{ background: 'none', border: 'none', color: 'var(--muted)', cursor: 'pointer' }}><Download size={18} /></button>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px', background: 'var(--bg2)', borderRadius: '12px', border: '1px solid var(--border)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <ShieldCheck size={24} color="#22c55e" />
                <div>
                  <div style={{ fontSize: '14px', fontWeight: '600', color: 'var(--text)' }}>Non-Disclosure Agreement (NDA)</div>
                  <div style={{ fontSize: '12px', color: 'var(--muted)' }}>Active</div>
                </div>
              </div>
              <button style={{ background: 'none', border: 'none', color: 'var(--muted)', cursor: 'pointer' }}><Download size={18} /></button>
            </div>
            
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px', background: 'var(--bg2)', borderRadius: '12px', border: '1px solid var(--border)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <FileText size={24} color="var(--muted)" />
                <div>
                  <div style={{ fontSize: '14px', fontWeight: '600', color: 'var(--text)' }}>Company Policy Handbook 2025</div>
                  <div style={{ fontSize: '12px', color: 'var(--muted)' }}>Updated Jan 2025</div>
                </div>
              </div>
              <button style={{ background: 'none', border: 'none', color: 'var(--muted)', cursor: 'pointer' }}><Download size={18} /></button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
