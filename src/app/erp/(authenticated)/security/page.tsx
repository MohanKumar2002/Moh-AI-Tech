'use client';
import React, { useState } from 'react';
import { ShieldAlert, AlertTriangle, CheckCircle, Ban, Search, MonitorSmartphone, KeySquare } from 'lucide-react';

export default function SecurityIncidents() {
  const [incidents, setIncidents] = useState([
    { id: 'INC-901', user: 'jdoe_dev', type: 'Concurrent Login', device: 'MacBook Pro & Windows PC', ip: '192.168.1.14 / 10.0.0.5', time: '10 mins ago', status: 'Active', severity: 'High' },
    { id: 'INC-902', user: 'intern_aj', type: 'Screenshot Attempt', device: 'Windows PC (Browser)', ip: '192.168.1.22', time: '1 hour ago', status: 'Blocked', severity: 'Medium' },
    { id: 'INC-903', user: 'm_admin', type: 'Unusual Geo-Location', device: 'Unknown Mobile', ip: '45.132.xx.xx', time: '2 days ago', status: 'Resolved', severity: 'Low' },
  ]);

  const handleAction = (id: string, action: string) => {
    alert(`Admin Action Executed: [${action}] for incident ${id}`);
    if (action === 'Dismiss') {
      setIncidents(incidents.map(i => i.id === id ? { ...i, status: 'Resolved' } : i));
    }
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
        <div>
          <h1 style={{ fontSize: '28px', fontWeight: '700', color: 'var(--text)', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <ShieldAlert color="#ef4444" /> Security & Compliance
          </h1>
          <p style={{ color: 'var(--muted)' }}>Master oversight for unauthorized access, leaks, and policy violations.</p>
        </div>
        <div style={{ display: 'flex', gap: '12px' }}>
          <div style={{ background: 'rgba(239, 68, 68, 0.1)', color: '#ef4444', padding: '10px 16px', borderRadius: '12px', border: '1px solid rgba(239, 68, 68, 0.2)', fontSize: '14px', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <AlertTriangle size={16} /> {incidents.filter(i => i.status === 'Active').length} Active Threats
          </div>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', marginBottom: '32px' }}>
        <div style={{ background: 'var(--card)', padding: '24px', borderRadius: '16px', border: '1px solid var(--border)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
            <div style={{ background: 'rgba(59, 130, 246, 0.1)', padding: '12px', borderRadius: '12px', color: '#3b82f6' }}><MonitorSmartphone size={24} /></div>
            <div>
              <div style={{ fontSize: '14px', color: 'var(--muted)', fontWeight: '600' }}>Active Sessions</div>
              <div style={{ fontSize: '24px', fontWeight: '700', color: 'var(--text)' }}>14 Devices</div>
            </div>
          </div>
          <p style={{ fontSize: '13px', color: 'var(--muted2)' }}>System is currently enforcing 1 device per user ID.</p>
        </div>
        
        <div style={{ background: 'var(--card)', padding: '24px', borderRadius: '16px', border: '1px solid var(--border)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
            <div style={{ background: 'rgba(168, 85, 247, 0.1)', padding: '12px', borderRadius: '12px', color: '#a855f7' }}><KeySquare size={24} /></div>
            <div>
              <div style={{ fontSize: '14px', color: 'var(--muted)', fontWeight: '600' }}>Auth Blocks (24h)</div>
              <div style={{ fontSize: '24px', fontWeight: '700', color: 'var(--text)' }}>7 Attempts</div>
            </div>
          </div>
          <p style={{ fontSize: '13px', color: 'var(--muted2)' }}>Failed logins and concurrent session blocks.</p>
        </div>
      </div>

      <div style={{ background: 'var(--card)', borderRadius: '16px', border: '1px solid var(--border)', overflow: 'hidden' }}>
        <div style={{ padding: '20px 24px', borderBottom: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'var(--bg2)' }}>
          <h3 style={{ fontSize: '16px', fontWeight: '600', color: 'var(--text)' }}>Recent Incidents</h3>
          <div style={{ position: 'relative' }}>
            <Search size={16} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--muted)' }} />
            <input type="text" placeholder="Search user ID or IP..." style={{ background: 'var(--bg)', border: '1px solid var(--border)', padding: '8px 12px 8px 36px', borderRadius: '8px', fontSize: '13px', color: 'var(--text)', outline: 'none' }} />
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr 2fr 1.5fr 1fr 2fr', padding: '16px 24px', background: 'var(--bg2)', borderBottom: '1px solid var(--border)', fontSize: '12px', fontWeight: '600', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
          <div>ID</div>
          <div>User ID</div>
          <div>Violation Type</div>
          <div>IP / Device</div>
          <div>Status</div>
          <div style={{ textAlign: 'right' }}>Admin Actions</div>
        </div>

        {incidents.map(inc => (
          <div key={inc.id} style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr 2fr 1.5fr 1fr 2fr', padding: '20px 24px', borderBottom: '1px solid var(--border)', alignItems: 'center', transition: 'background 0.2s', opacity: inc.status === 'Resolved' ? 0.6 : 1 }} className="hover:bg-[var(--bg2)]">
            <div style={{ fontSize: '13px', fontWeight: '600', color: 'var(--muted)' }}>{inc.id}</div>
            <div style={{ fontSize: '14px', fontWeight: '700', color: 'var(--text)' }}>{inc.user}</div>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              {inc.severity === 'High' ? <AlertTriangle size={16} color="#ef4444" /> : <ShieldAlert size={16} color="#f59e0b" />}
              <span style={{ fontSize: '14px', fontWeight: '500', color: 'var(--text)' }}>{inc.type}</span>
            </div>
            
            <div>
              <div style={{ fontSize: '13px', color: 'var(--text)' }}>{inc.ip}</div>
              <div style={{ fontSize: '12px', color: 'var(--muted2)' }}>{inc.device}</div>
            </div>
            
            <div>
              <span style={{ padding: '4px 10px', borderRadius: '20px', fontSize: '11px', fontWeight: '700', textTransform: 'uppercase', 
                background: inc.status === 'Active' ? 'rgba(239, 68, 68, 0.1)' : inc.status === 'Blocked' ? 'rgba(245, 158, 11, 0.1)' : 'rgba(34, 197, 94, 0.1)', 
                color: inc.status === 'Active' ? '#ef4444' : inc.status === 'Blocked' ? '#f59e0b' : '#22c55e' }}>
                {inc.status}
              </span>
            </div>
            
            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '8px' }}>
              {inc.status !== 'Resolved' && (
                <>
                  <button onClick={() => handleAction(inc.id, 'Suspend Account')} style={{ background: 'rgba(239, 68, 68, 0.1)', color: '#ef4444', border: '1px solid rgba(239, 68, 68, 0.2)', padding: '6px 12px', borderRadius: '8px', cursor: 'pointer', fontSize: '12px', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '6px', transition: 'all 0.2s' }}>
                    <Ban size={14} /> Suspend User
                  </button>
                  <button onClick={() => handleAction(inc.id, 'Dismiss')} style={{ background: 'var(--bg)', color: 'var(--text)', border: '1px solid var(--border)', padding: '6px 12px', borderRadius: '8px', cursor: 'pointer', fontSize: '12px', fontWeight: '500', transition: 'all 0.2s' }}>
                    Dismiss
                  </button>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
