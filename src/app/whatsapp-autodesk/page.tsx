'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  MessageSquare, 
  Send, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Clock, 
  Zap, 
  Users, 
  Bot, 
  Smartphone,
  PhoneCall
} from 'lucide-react';
import Footer from '@/components/layout/footer';

export default function WhatsAppAutoDeskProductPage() {
  const [messages, setMessages] = useState<Array<{ sender: 'user' | 'bot'; text: string; time: string }>>([
    { sender: 'bot', text: 'Hello! Welcome to Coimbatore Precision Tools. How can I help you today?', time: '10:00 AM' },
    { sender: 'user', text: 'Hi, do you have 12mm carbide end mills in stock?', time: '10:01 AM' },
    { sender: 'bot', text: 'Yes, we have 48 units of 12mm 4-flute solid carbide end mills in stock (SKU: CPT-EM-12-4F). Price is ₹1,450/unit + GST. Would you like me to reserve a batch or send the spec sheet?', time: '10:01 AM' }
  ]);
  const [inputMessage, setInputMessage] = useState('');

  const quickPrompts = [
    'Can I talk to a sales manager?',
    'What are your delivery times to Chennai?',
    'Send me your current catalog PDF'
  ];

  const handleSend = (textToSend?: string) => {
    const text = textToSend || inputMessage;
    if (!text.trim()) return;

    const newMsgs = [...messages, { sender: 'user' as const, text, time: 'Just now' }];
    setMessages(newMsgs);
    setInputMessage('');

    // Realistic bot response simulation
    setTimeout(() => {
      let botReply = "Thank you! I've noted your request and forwarded your details to our team.";
      if (text.toLowerCase().includes('manager') || text.toLowerCase().includes('talk')) {
        botReply = "Certainly! I've notified our Sales Head (Mr. S. Rajesh). He has received your chat history and will ping you here directly in 5 minutes.";
      } else if (text.toLowerCase().includes('delivery') || text.toLowerCase().includes('time')) {
        botReply = "Standard dispatch for in-stock tooling to Chennai and Bengaluru is 24-48 hours via professional courier with live tracking.";
      } else if (text.toLowerCase().includes('catalog') || text.toLowerCase().includes('pdf')) {
        botReply = "📄 Here is our 2026 Product Catalog (CPT_Industrial_Tools_2026.pdf - 4.2 MB). Let me know if you need specific dimension tolerances!";
      }

      setMessages(prev => [...prev, { sender: 'bot', text: botReply, time: 'Just now' }]);
    }, 600);
  };

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)', color: 'var(--text)' }}>

      {/* ── HERO SECTION ── */}
      <section style={{ padding: '140px 5% 70px', background: 'radial-gradient(ellipse at 50% 0%, rgba(37, 211, 102, 0.12) 0%, transparent 70%)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto', textAlign: 'center' }}>
          
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', borderRadius: '9999px', background: 'rgba(37, 211, 102, 0.1)', border: '1px solid rgba(37, 211, 102, 0.3)', color: '#25D366', fontSize: '13px', fontWeight: '700', marginBottom: '24px', letterSpacing: '0.04em' }}>
            <Sparkles size={15} />
            MOH-AI WHATSAPP AUTODESK · 24/7 CUSTOMER & ORDER BOT
          </div>

          <h1 style={{ fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: '900', lineHeight: 1.15, letterSpacing: '-0.03em', maxWidth: '980px', margin: '0 auto 24px' }}>
            Turn WhatsApp into an Autonomous{' '}
            <span style={{ background: 'linear-gradient(135deg, #25D366, #10b981, #0284c7)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Sales & Support Machine
            </span>
          </h1>

          <p style={{ fontSize: 'clamp(16px, 2vw, 20px)', color: 'var(--text2)', maxWidth: '820px', margin: '0 auto 40px', lineHeight: 1.6 }}>
            Never miss an inbound customer inquiry again. Built on the official Meta WhatsApp Business Cloud API to answer product questions, qualify sales leads, and route complex orders to your team with zero spam risk.
          </p>

          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '40px' }}>
            <Link
              href="/contact?service=whatsapp-autodesk"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: '#25D366', color: '#000', padding: '16px 32px', borderRadius: '12px', fontWeight: '800', fontSize: '15px', textDecoration: 'none', boxShadow: '0 10px 25px rgba(37, 211, 102, 0.3)' }}
            >
              Get WhatsApp Bot for Your Business
              <ArrowRight size={18} />
            </Link>

            <a
              href="#interactive-demo"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: 'var(--bg2)', color: 'var(--text)', border: '1px solid var(--border)', padding: '16px 28px', borderRadius: '12px', fontWeight: '700', fontSize: '15px', textDecoration: 'none' }}
            >
              Test Live Chat Simulator Below
            </a>
          </div>

          {/* Quick Metrics */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', maxWidth: '960px', margin: '0 auto' }}>
            <div style={{ background: 'var(--card)', padding: '20px', borderRadius: '14px', border: '1px solid var(--border)' }}>
              <div style={{ fontSize: '32px', fontWeight: '900', color: '#25D366' }}>&lt; 3 Sec</div>
              <div style={{ fontSize: '13px', color: 'var(--text2)', marginTop: '4px' }}>Average Response Time</div>
            </div>
            <div style={{ background: 'var(--card)', padding: '20px', borderRadius: '14px', border: '1px solid var(--border)' }}>
              <div style={{ fontSize: '32px', fontWeight: '900', color: '#10b981' }}>Official API</div>
              <div style={{ fontSize: '13px', color: 'var(--text2)', marginTop: '4px' }}>Zero Risk of Number Banning</div>
            </div>
            <div style={{ background: 'var(--card)', padding: '20px', borderRadius: '14px', border: '1px solid var(--border)' }}>
              <div style={{ fontSize: '32px', fontWeight: '900', color: '#0284c7' }}>1-Click</div>
              <div style={{ fontSize: '13px', color: 'var(--text2)', marginTop: '4px' }}>Instant Human Agent Handover</div>
            </div>
            <div style={{ background: 'var(--card)', padding: '20px', borderRadius: '14px', border: '1px solid var(--border)' }}>
              <div style={{ fontSize: '32px', fontWeight: '900', color: '#f59e0b' }}>Multilingual</div>
              <div style={{ fontSize: '13px', color: 'var(--text2)', marginTop: '4px' }}>English, Tamil & Hindi Support</div>
            </div>
          </div>

        </div>
      </section>

      {/* ── INTERACTIVE LIVE CHAT SIMULATOR ── */}
      <section id="interactive-demo" style={{ padding: '80px 5%', background: 'var(--bg2)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>

          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <span style={{ color: '#25D366', fontSize: '12px', fontWeight: '800', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              Hands-On Simulation
            </span>
            <h2 style={{ fontSize: 'clamp(26px, 4vw, 36px)', fontWeight: '900', marginTop: '8px' }}>
              Try the Autonomous WhatsApp Agent
            </h2>
            <p style={{ color: 'var(--text2)', fontSize: '15px', maxWidth: '640px', margin: '8px auto 0' }}>
              Click a sample customer question or type your own to see how natural, fast, and structured the response is.
            </p>
          </div>

          {/* Quick Prompts */}
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '20px' }}>
            {quickPrompts.map((p, idx) => (
              <button
                key={idx}
                onClick={() => handleSend(p)}
                style={{ background: 'var(--card)', border: '1px solid var(--border)', color: 'var(--text)', padding: '8px 14px', borderRadius: '20px', fontSize: '13px', cursor: 'pointer', transition: 'all 0.2s' }}
              >
                💡 &quot;{p}&quot;
              </button>
            ))}
          </div>

          {/* Chat Window Frame */}
          <div style={{ background: '#0b141a', borderRadius: '20px', border: '1px solid var(--border)', overflow: 'hidden', boxShadow: '0 25px 50px rgba(0,0,0,0.3)', maxWidth: '620px', margin: '0 auto' }}>
            
            {/* WhatsApp Header */}
            <div style={{ background: '#202c33', padding: '16px 20px', display: 'flex', alignItems: 'center', gap: '12px', borderBottom: '1px solid #2a3942' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#25D366', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#000', fontWeight: '800' }}>
                <Bot size={22} />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ color: '#e9edef', fontWeight: '700', fontSize: '15px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  Moh-AI AutoDesk Assistant
                  <CheckCircle2 size={14} color="#25D366" />
                </div>
                <div style={{ color: '#8696a0', fontSize: '12px' }}>Verified Business Account · Online</div>
              </div>
            </div>

            {/* Chat Body */}
            <div style={{ padding: '24px 20px', minHeight: '340px', maxHeight: '420px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '14px', background: 'radial-gradient(circle at 50% 50%, #0d1a21 0%, #0b141a 100%)' }}>
              {messages.map((m, idx) => (
                <div
                  key={idx}
                  style={{
                    alignSelf: m.sender === 'user' ? 'flex-end' : 'flex-start',
                    maxWidth: '85%',
                    background: m.sender === 'user' ? '#005c4b' : '#202c33',
                    color: '#e9edef',
                    padding: '12px 16px',
                    borderRadius: '12px',
                    fontSize: '14px',
                    lineHeight: 1.5,
                    boxShadow: '0 2px 5px rgba(0,0,0,0.2)'
                  }}
                >
                  <div>{m.text}</div>
                  <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.5)', textAlign: 'right', marginTop: '4px' }}>
                    {m.time}
                  </div>
                </div>
              ))}
            </div>

            {/* Chat Input */}
            <div style={{ background: '#202c33', padding: '12px 16px', display: 'flex', gap: '10px', alignItems: 'center' }}>
              <input
                type="text"
                placeholder="Type a customer question..."
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                style={{ flex: 1, background: '#2a3942', border: 'none', color: '#e9edef', padding: '12px 16px', borderRadius: '8px', fontSize: '14px', outline: 'none' }}
              />
              <button
                onClick={() => handleSend()}
                style={{ background: '#25D366', color: '#000', border: 'none', width: '42px', height: '42px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}
              >
                <Send size={18} />
              </button>
            </div>

          </div>

        </div>
      </section>

      {/* ── SECURITY & NO-FAKE-PROMISES GUARANTEE ── */}
      <section style={{ padding: '90px 5%', background: 'var(--bg)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <span style={{ color: '#25D366', fontSize: '12px', fontWeight: '800', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              Safe & Compliant Engineering
            </span>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: '900', marginTop: '8px' }}>
              Built for Real Businesses with Zero Policy Risk
            </h2>
            <p style={{ color: 'var(--text2)', fontSize: '16px', maxWidth: '680px', margin: '12px auto 0' }}>
              We don&apos;t use scraping scripts or unofficial WhatsApp Web wrappers that get phone numbers blocked.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
            
            <div style={{ background: 'var(--card)', borderRadius: '16px', border: '1px solid var(--border)', padding: '30px' }}>
              <ShieldCheck size={32} color="#25D366" style={{ marginBottom: '16px' }} />
              <h4 style={{ fontSize: '18px', fontWeight: '800', marginBottom: '8px' }}>Official Meta Cloud API</h4>
              <p style={{ color: 'var(--text2)', fontSize: '14px', lineHeight: 1.6 }}>
                Direct enterprise webhook integration with Meta. Verified green tick business account eligible, high-volume throughput, and 99.9% uptime SLA.
              </p>
            </div>

            <div style={{ background: 'var(--card)', borderRadius: '16px', border: '1px solid var(--border)', padding: '30px' }}>
              <Users size={32} color="#0284c7" style={{ marginBottom: '16px' }} />
              <h4 style={{ fontSize: '18px', fontWeight: '800', marginBottom: '8px' }}>Seamless Human Escalation</h4>
              <p style={{ color: 'var(--text2)', fontSize: '14px', lineHeight: 1.6 }}>
                When high-value customers need personal negotiation or customized pricing, the bot instantly pings your team with full conversation context.
              </p>
            </div>

            <div style={{ background: 'var(--card)', borderRadius: '16px', border: '1px solid var(--border)', padding: '30px' }}>
              <Zap size={32} color="#f59e0b" style={{ marginBottom: '16px' }} />
              <h4 style={{ fontSize: '18px', fontWeight: '800', marginBottom: '8px' }}>CRM & ERP Synced</h4>
              <p style={{ color: 'var(--text2)', fontSize: '14px', lineHeight: 1.6 }}>
                Every captured lead, address, and quotation request pushes automatically to your Google Sheets, Zoho CRM, Tally, or custom database.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ── PILOT CTA ── */}
      <section style={{ padding: '90px 5%', background: 'radial-gradient(ellipse at 50% 100%, rgba(37, 211, 102, 0.15) 0%, transparent 70%)', borderTop: '1px solid var(--border)', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          
          <h2 style={{ fontSize: 'clamp(30px, 4.5vw, 44px)', fontWeight: '900', marginBottom: '16px' }}>
            Ready to Automate Your Customer Inquiries?
          </h2>

          <p style={{ fontSize: '17px', color: 'var(--text2)', lineHeight: 1.6, marginBottom: '36px' }}>
            Set up your custom WhatsApp AI bot in 48 hours with your product catalog and FAQ knowledge base.
          </p>

          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link
              href="/contact?service=whatsapp-autodesk"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: '#25D366', color: '#000', padding: '16px 36px', borderRadius: '12px', fontWeight: '800', fontSize: '16px', textDecoration: 'none' }}
            >
              Start WhatsApp Bot Pilot
              <ArrowRight size={18} />
            </Link>

            <Link
              href="/products"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: 'transparent', color: 'var(--text)', border: '1px solid var(--border)', padding: '16px 28px', borderRadius: '12px', fontWeight: '700', fontSize: '15px', textDecoration: 'none' }}
            >
              Back to Product Catalog
            </Link>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
