'use client';
import React from 'react';
import { Plus, MoreHorizontal, Clock, Calendar } from 'lucide-react';

export default function ERPTasks() {
  const tasks = [
    { id: 1, title: 'Fine-tune OCR Model', project: 'Smart Document Pipeline', status: 'In Progress', priority: 'High', due: 'Today' },
    { id: 2, title: 'Design Database Schema', project: 'Enterprise AI Brain', status: 'To Do', priority: 'Medium', due: 'Tomorrow' },
    { id: 3, title: 'Fix API Authentication Bug', project: 'Vision Analytics', status: 'Review', priority: 'High', due: 'Today' },
    { id: 4, title: 'Draft Weekly Report', project: 'Internal', status: 'Done', priority: 'Low', due: 'Yesterday' },
  ];

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'To Do': return { bg: 'rgba(107, 114, 128, 0.1)', color: '#9ca3af' };
      case 'In Progress': return { bg: 'rgba(59, 130, 246, 0.1)', color: '#3b82f6' };
      case 'Review': return { bg: 'rgba(168, 85, 247, 0.1)', color: '#a855f7' };
      case 'Done': return { bg: 'rgba(34, 197, 94, 0.1)', color: '#22c55e' };
      default: return { bg: 'transparent', color: 'var(--text)' };
    }
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
        <div>
          <h1 style={{ fontSize: '28px', fontWeight: '700', color: 'var(--text)', marginBottom: '8px' }}>Tasks & Projects</h1>
          <p style={{ color: 'var(--muted)' }}>Manage your deliverables and log time.</p>
        </div>
        <button className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Plus size={18} /> New Task
        </button>
      </div>

      <div style={{ background: 'var(--card)', borderRadius: '16px', border: '1px solid var(--border)', overflow: 'hidden' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '3fr 2fr 1fr 1fr 1fr', padding: '16px 24px', background: 'var(--bg2)', borderBottom: '1px solid var(--border)', fontSize: '13px', fontWeight: '600', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
          <div>Task Name</div>
          <div>Project</div>
          <div>Status</div>
          <div>Due Date</div>
          <div style={{ textAlign: 'right' }}>Actions</div>
        </div>

        {tasks.map(task => {
          const statusStyle = getStatusColor(task.status);
          return (
            <div key={task.id} style={{ display: 'grid', gridTemplateColumns: '3fr 2fr 1fr 1fr 1fr', padding: '20px 24px', borderBottom: '1px solid var(--border)', alignItems: 'center', transition: 'background 0.2s' }} className="hover:bg-[var(--bg2)]">
              <div style={{ fontSize: '14px', fontWeight: '600', color: 'var(--text)' }}>{task.title}</div>
              <div style={{ fontSize: '13px', color: 'var(--muted)' }}>{task.project}</div>
              <div>
                <span style={{ padding: '6px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: '600', background: statusStyle.bg, color: statusStyle.color }}>
                  {task.status}
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', color: 'var(--muted)' }}>
                <Calendar size={14} /> {task.due}
              </div>
              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px' }}>
                <button style={{ background: 'none', border: 'none', color: 'var(--muted)', cursor: 'pointer' }} title="Log Time">
                  <Clock size={18} />
                </button>
                <button style={{ background: 'none', border: 'none', color: 'var(--muted)', cursor: 'pointer' }}>
                  <MoreHorizontal size={18} />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
