'use client';
import React, { useState } from 'react';
import { CheckCircle2, Clock, Calendar, CheckSquare } from 'lucide-react';

export default function ERPTasks() {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Fine-tune OCR Model', project: 'Smart Document Pipeline', status: 'In Progress', priority: 'High', due: 'Today' },
    { id: 2, title: 'Design Database Schema', project: 'Enterprise AI Brain', status: 'To Do', priority: 'Medium', due: 'Tomorrow' },
    { id: 3, title: 'Fix API Authentication Bug', project: 'Vision Analytics', status: 'Review', priority: 'High', due: 'Today' },
    { id: 4, title: 'Draft Weekly Report', project: 'Internal', status: 'Done', priority: 'Low', due: 'Yesterday' },
  ]);

  const handleComplete = (id: number) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, status: 'Done' } : t));
  };

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
          <h1 style={{ fontSize: '28px', fontWeight: '700', color: 'var(--text)', marginBottom: '8px' }}>My Assigned Tasks</h1>
          <p style={{ color: 'var(--muted)' }}>Manage your deliverables. Mark completed items before the daily sync.</p>
        </div>
        <div style={{ display: 'flex', gap: '12px' }}>
          <div style={{ background: 'var(--card)', padding: '10px 16px', borderRadius: '12px', border: '1px solid var(--border)', fontSize: '14px', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <CheckSquare size={16} color="#3b82f6" /> {tasks.filter(t => t.status === 'Done').length} / {tasks.length} Completed
          </div>
        </div>
      </div>

      <div className="erp-card-premium" style={{ padding: 0 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '3fr 2fr 1fr 1fr 1.5fr', padding: '16px 24px', background: 'rgba(0,0,0,0.02)', borderBottom: '1px solid var(--border)', fontSize: '13px', fontWeight: '600', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
          <div>Task Name</div>
          <div>Project</div>
          <div>Status</div>
          <div>Due Date</div>
          <div style={{ textAlign: 'right' }}>Action</div>
        </div>

        {tasks.map(task => {
          const statusStyle = getStatusColor(task.status);
          const isDone = task.status === 'Done';
          return (
            <div key={task.id} className="erp-table-row" style={{ gridTemplateColumns: '3fr 2fr 1fr 1fr 1.5fr', opacity: isDone ? 0.6 : 1 }}>
              <div style={{ fontSize: '14px', fontWeight: '600', color: 'var(--text)', textDecoration: isDone ? 'line-through' : 'none' }}>{task.title}</div>
              <div style={{ fontSize: '13px', color: 'var(--muted)' }}>{task.project}</div>
              <div>
                <span className="erp-pill-badge" style={{ background: statusStyle.bg, color: statusStyle.color }}>
                  {task.status}
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', color: 'var(--muted)' }}>
                <Calendar size={14} /> {task.due}
              </div>
              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px' }}>
                {!isDone ? (
                  <button onClick={() => handleComplete(task.id)} style={{ background: 'rgba(34, 197, 94, 0.1)', color: '#22c55e', border: '1px solid rgba(34, 197, 94, 0.2)', padding: '6px 12px', borderRadius: '8px', cursor: 'pointer', fontSize: '12px', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '6px', transition: 'all 0.2s' }}>
                    <CheckCircle2 size={14} /> Mark Complete
                  </button>
                ) : (
                  <span style={{ fontSize: '12px', fontWeight: '600', color: '#22c55e', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <CheckCircle2 size={14} /> Completed
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
