'use client';

import React, { useState } from 'react';

export default function WaitlistForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');
    setMessage('');

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setMessage('You have successfully joined the waitlist!');
        setEmail('');
      } else {
        setStatus('error');
        setMessage(data.message || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setStatus('error');
      setMessage('Network error. Please try again later.');
    }
  };

  return (
    <div style={{ width: '100%', maxWidth: '480px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
      <form 
        onSubmit={handleSubmit}
        className="fu vis d4" 
        style={{ 
          display: 'flex', 
          gap: '12px', 
          width: '100%', 
          background: 'var(--card)', 
          padding: '8px', 
          borderRadius: '12px', 
          border: '1px solid var(--border)', 
          boxShadow: 'var(--shadow)' 
        }}
      >
        <input 
          type="email" 
          placeholder="Enter your business email..." 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={status === 'loading'}
          required
          style={{ 
            flex: 1, 
            background: 'transparent', 
            border: 'none', 
            padding: '12px 16px', 
            outline: 'none', 
            color: 'var(--text)', 
            fontSize: '15px' 
          }}
        />
        <button 
          type="submit" 
          className="btn-primary" 
          disabled={status === 'loading'}
          style={{ padding: '12px 24px', opacity: status === 'loading' ? 0.7 : 1 }}
        >
          {status === 'loading' ? 'Joining...' : 'Join Waitlist'}
        </button>
      </form>
      
      {message && (
        <p style={{ 
          marginTop: '12px', 
          fontSize: '14px', 
          color: status === 'success' ? '#10b981' : '#ef4444',
          textAlign: 'center',
          fontWeight: 500
        }}>
          {message}
        </p>
      )}
    </div>
  );
}
