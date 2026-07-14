'use client';
import React from 'react';
import { Activity, Clock, CheckCircle2, AlertCircle } from 'lucide-react';

export default function ERPDashboard() {
  return (
    <div>
      <div style={{ marginBottom: '32px' }}>
        <h1 style={{ fontSize: '28px', fontWeight: '700', color: 'var(--text)', marginBottom: '8px' }}>Dashboard Overview</h1>
        <p style={{ color: 'var(--muted)' }}>Welcome back, John. Here's what's happening with your projects today.</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px', marginBottom: '32px' }}>
        <div style={{ background: 'var(--card)', padding: '24px', borderRadius: '16px', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(59, 130, 246, 0.1)', color: '#3b82f6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Activity size={24} />
          </div>
          <div>
            <div style={{ fontSize: '13px', color: 'var(--muted)', fontWeight: '600', marginBottom: '4px' }}>Active Projects</div>
            <div style={{ fontSize: '24px', fontWeight: '700', color: 'var(--text)' }}>3</div>
          </div>
        </div>
        
        <div style={{ background: 'var(--card)', padding: '24px', borderRadius: '16px', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(34, 197, 94, 0.1)', color: '#22c55e', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <CheckCircle2 size={24} />
          </div>
          <div>
            <div style={{ fontSize: '13px', color: 'var(--muted)', fontWeight: '600', marginBottom: '4px' }}>Tasks Completed</div>
            <div style={{ fontSize: '24px', fontWeight: '700', color: 'var(--text)' }}>12</div>
          </div>
        </div>

        <div style={{ background: 'var(--card)', padding: '24px', borderRadius: '16px', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(168, 85, 247, 0.1)', color: '#a855f7', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Clock size={24} />
          </div>
          <div>
            <div style={{ fontSize: '13px', color: 'var(--muted)', fontWeight: '600', marginBottom: '4px' }}>Hours Logged (Week)</div>
            <div style={{ fontSize: '24px', fontWeight: '700', color: 'var(--text)' }}>34.5</div>
          </div>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '24px' }}>
        <div style={{ background: 'var(--card)', borderRadius: '16px', border: '1px solid var(--border)', padding: '24px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
            <h2 style={{ fontSize: '18px', fontWeight: '700', color: 'var(--text)' }}>Recent Activity</h2>
            <button className="btn-ghost" style={{ padding: '8px 12px', fontSize: '13px' }}>View All</button>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {[
              { title: 'Updated API Documentation', project: 'Enterprise AI Brain', time: '2 hours ago', type: 'doc' },
              { title: 'Pushed code for OCR pipeline', project: 'Vision Inspection', time: '5 hours ago', type: 'code' },
              { title: 'Completed weekly sync', project: 'Internal', time: '1 day ago', type: 'meeting' },
            ].map((act, i) => (
              <div key={i} style={{ display: 'flex', gap: '16px', paddingBottom: '16px', borderBottom: i !== 2 ? '1px solid var(--border)' : 'none' }}>
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: 'var(--accent)', marginTop: '6px' }}></div>
                <div>
                  <div style={{ fontSize: '14px', fontWeight: '600', color: 'var(--text)', marginBottom: '4px' }}>{act.title}</div>
                  <div style={{ fontSize: '12px', color: 'var(--muted)' }}>{act.project} • {act.time}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ background: 'var(--card)', borderRadius: '16px', border: '1px solid var(--border)', padding: '24px' }}>
          <h2 style={{ fontSize: '18px', fontWeight: '700', color: 'var(--text)', marginBottom: '24px' }}>Pending Approvals</h2>
          
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', background: 'rgba(239, 68, 68, 0.05)', padding: '16px', borderRadius: '12px', border: '1px solid rgba(239, 68, 68, 0.2)' }}>
            <AlertCircle size={20} color="#ef4444" style={{ marginTop: '2px' }} />
            <div>
              <div style={{ fontSize: '14px', fontWeight: '600', color: 'var(--text)', marginBottom: '4px' }}>Timesheet Review</div>
              <div style={{ fontSize: '12px', color: 'var(--muted)', lineHeight: '1.5' }}>Your timesheet for last week is pending manager approval. No action needed.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
