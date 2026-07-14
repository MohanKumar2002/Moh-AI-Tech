'use client';

import React, { useState } from 'react';
import { submitWaitlist } from '@/app/actions/waitlist';

export function WaitlistForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');
    const result = await submitWaitlist(email);

    if (result.error) {
      setStatus('error');
      setMessage(result.error);
    } else if (result.success) {
      setStatus('success');
      setMessage(result.message || 'Thanks for joining!');
      setEmail('');
    }
  };

  return (
    <div style={{ width: '100%', maxWidth: '480px', margin: '0 auto' }}>
      <form onSubmit={handleSubmit} className="fu vis d4" style={{ display: 'flex', gap: '12px', background: 'var(--card)', padding: '8px', borderRadius: '12px', border: '1px solid var(--border)', boxShadow: 'var(--shadow)', position: 'relative', zIndex: 10 }}>
        <input 
          type="email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your business email..." 
          required
          style={{ flex: 1, background: 'transparent', border: 'none', padding: '12px 16px', outline: 'none', color: 'var(--text)', fontSize: '15px' }}
        />
        <button 
          type="submit"
          disabled={status === 'loading'}
          className="btn-primary" 
          style={{ padding: '12px 24px', opacity: status === 'loading' ? 0.7 : 1 }}
        >
          {status === 'loading' ? 'Joining...' : 'Join Waitlist'}
        </button>
      </form>
      {message && (
        <p style={{ marginTop: '12px', fontSize: '14px', color: status === 'error' ? '#ef4444' : '#10b981' }}>
          {message}
        </p>
      )}
    </div>
  );
}
