'use client';
import React from 'react';
import { Search, Folder, FileText, ChevronRight, Video } from 'lucide-react';

export default function ERPKnowledgeBase() {
  const categories = [
    { name: 'Engineering & Development', count: 24, icon: Folder, color: '#3b82f6' },
    { name: 'Onboarding Guides', count: 8, icon: Folder, color: '#22c55e' },
    { name: 'Standard Operating Procedures (SOPs)', count: 15, icon: Folder, color: '#a855f7' },
    { name: 'Sales & Marketing', count: 12, icon: Folder, color: '#f59e0b' },
  ];

  const recentDocs = [
    { title: 'Setting up the FastAPI Environment', type: 'doc', author: 'Mohan Kumar S', date: '2 days ago' },
    { title: 'CV Pipeline Annotation Guidelines', type: 'doc', author: 'Team CV', date: '1 week ago' },
    { title: 'Weekly Sprint Review (Recording)', type: 'video', author: 'Management', date: '1 week ago' },
    { title: 'Handling Client NDA Requests', type: 'doc', author: 'HR', date: '2 weeks ago' },
  ];

  return (
    <div>
      <div style={{ marginBottom: '32px' }}>
        <h1 style={{ fontSize: '28px', fontWeight: '700', color: 'var(--text)', marginBottom: '8px' }}>Knowledge Base</h1>
        <p style={{ color: 'var(--muted)' }}>Centralized repository for all operational and technical documentation.</p>
      </div>

      <div style={{ background: 'var(--card)', padding: '24px', borderRadius: '16px', border: '1px solid var(--border)', marginBottom: '32px' }}>
        <div style={{ display: 'flex', alignItems: 'center', background: 'var(--bg2)', padding: '12px 16px', borderRadius: '10px', border: '1px solid var(--border)' }}>
          <Search size={20} color="var(--muted)" style={{ marginRight: '12px' }} />
          <input 
            type="text" 
            placeholder="Search for documentation, guides, or policies..." 
            style={{ width: '100%', background: 'transparent', border: 'none', color: 'var(--text)', outline: 'none', fontSize: '15px' }}
          />
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px', marginBottom: '40px' }}>
        {categories.map((cat, i) => {
          const Icon = cat.icon;
          return (
            <div key={i} style={{ background: 'var(--card)', padding: '20px', borderRadius: '12px', border: '1px solid var(--border)', cursor: 'pointer', transition: 'transform 0.2s', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }} className="hover:-translate-y-1 hover:shadow-lg">
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{ color: cat.color }}>
                  <Icon size={32} />
                </div>
                <div>
                  <div style={{ fontSize: '14px', fontWeight: '700', color: 'var(--text)', marginBottom: '4px' }}>{cat.name}</div>
                  <div style={{ fontSize: '12px', color: 'var(--muted)' }}>{cat.count} articles</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div>
        <h2 style={{ fontSize: '18px', fontWeight: '700', color: 'var(--text)', marginBottom: '20px' }}>Recently Added</h2>
        <div style={{ background: 'var(--card)', borderRadius: '16px', border: '1px solid var(--border)', overflow: 'hidden' }}>
          {recentDocs.map((doc, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 24px', borderBottom: i !== recentDocs.length - 1 ? '1px solid var(--border)' : 'none', cursor: 'pointer' }} className="hover:bg-[var(--bg2)]">
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'var(--bg2)', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: doc.type === 'video' ? '#ef4444' : '#3b82f6' }}>
                  {doc.type === 'video' ? <Video size={20} /> : <FileText size={20} />}
                </div>
                <div>
                  <div style={{ fontSize: '15px', fontWeight: '600', color: 'var(--text)', marginBottom: '4px' }}>{doc.title}</div>
                  <div style={{ fontSize: '12px', color: 'var(--muted)' }}>By {doc.author} • {doc.date}</div>
                </div>
              </div>
              <ChevronRight size={20} color="var(--muted)" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
