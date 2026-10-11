import React from 'react';
import Footer from '@/components/layout/footer';
import { ContactForm } from '@/components/ContactForm';
import { ShieldCheck, Mail, Phone, MapPin } from 'lucide-react';

export const metadata = {
  title: 'Request Assessment | Moh-AI Tech',
  description: 'Request a Manufacturing AI Assessment for your factory operations from Moh-AI Tech in Tamil Nadu, India.',
};

export default function ContactPage() {
  const trustPoints = [
    { title: '✓ Remote Global Delivery', text: 'Proven asynchronous workflows and milestone updates for international clients.' },
    { title: '✓ English Communication', text: 'Discuss technical parameters directly with the engineering founder without layers.' },
    { title: '✓ NDA & IP Protection', text: 'All contracts secure intellectual property rights and lock proprietary manufacturing parameters.' },
    { title: '✓ Private Deployments', text: 'Tailored options for on-premise localized edge hosting to prevent public cloud leaks.' }
  ];

  return (
    <main className="min-h-screen bg-[var(--bg)] pt-28 pb-16">
      <div className="inner" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 5%' }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <span className="tag">Project Intake</span>
          <h1 className="h2" style={{ fontFamily: 'var(--syne)', fontSize: '36px', fontWeight: '800', marginTop: '8px' }}>Request AI Assessment</h1>
          <p className="lead" style={{ margin: '8px auto 0', maxWidth: '600px', color: 'var(--muted)' }}>
            Discuss your automation roadmaps, factory telemetry, or custom product requirements directly with the engineering founder.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '48px', alignItems: 'start', marginBottom: '48px' }}>
          {/* Form */}
          <div>
            <ContactForm />
          </div>

          {/* Sidebar */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            {/* Trust Signal Box */}
            <div style={{ background: 'var(--bg2)', border: '1px solid var(--border)', borderRadius: '16px', padding: '32px' }}>
              <h3 style={{ fontFamily: 'var(--syne)', fontSize: '18px', fontWeight: '800', color: 'var(--text)', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <ShieldCheck className="text-blue-600" />
                Global Trust & Delivery
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {trustPoints.map((tp, idx) => (
                  <div key={idx}>
                    <h5 style={{ fontWeight: '700', fontSize: '14px', color: 'var(--accent-l)' }}>{tp.title}</h5>
                    <p style={{ fontSize: '12px', color: 'var(--muted)', marginTop: '2px', lineHeight: '1.4' }}>{tp.text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct Contact Details */}
            <div style={{ paddingLeft: '16px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Mail size={18} className="text-blue-600" />
                <div>
                  <div style={{ fontSize: '11px', color: 'var(--muted)' }}>Direct Intake Email</div>
                  <div style={{ fontWeight: '600', fontSize: '14px', color: 'var(--text)' }}>info@moh-ai-tech.com</div>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Phone size={18} className="text-blue-600" />
                <div>
                  <div style={{ fontSize: '11px', color: 'var(--muted)' }}>WhatsApp Line</div>
                  <div style={{ fontWeight: '600', fontSize: '14px', color: 'var(--text)' }}>+91 9566852700</div>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <MapPin size={18} className="text-blue-600" />
                <div>
                  <div style={{ fontSize: '11px', color: 'var(--muted)' }}>Engineering Center</div>
                  <div style={{ fontWeight: '600', fontSize: '14px', color: 'var(--text)' }}>Namakkal, Tamil Nadu, India</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
