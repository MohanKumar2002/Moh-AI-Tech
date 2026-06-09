// src/app/contact/page.tsx
'use client';

import React from 'react';
import Link from 'next/link';
import ContactForm from '@/components/features/contact/contact-form';

export default function ContactPage() {
  return (
    <div className="pt-16 min-h-screen">
      {/* ===== PRICING ===== */}
      <section id="pricing">
        <div className="inner">
          <div className="tag">Engagement Models</div>
          <h2 className="h2">Transparent Pricing. No Surprises.</h2>
          <p className="lead">Straightforward engagement models. Every business is different, so we provide custom quotations based strictly on your project scope.</p>
          
          <div className="pricing-grid">
            <div className="price-card">
              <div className="price-tier">Starter</div>
              <div className="price-amount">Custom<span> quote</span></div>
              <div className="price-sub">Best for small businesses, pilots, and Proof of Concepts (POC).</div>
              <ul className="price-feats">
                <li>1 focused AI model or dashboard</li>
                <li>Defined data integrations</li>
                <li>Clear timeline delivery</li>
                <li>30-day post-delivery support</li>
              </ul>
              <div style={{marginTop:'24px'}}>
                <Link href="/contact" className="btn-ghost" style={{width:'100%', justifyContent:'center'}}>Get a Quote</Link>
              </div>
            </div>
            <div className="price-card featured">
              <div className="price-pop">Popular</div>
              <div className="price-tier">Business</div>
              <div className="price-amount">Custom<span> quote</span></div>
              <div className="price-sub">Monthly retainer model for ongoing, agile AI development.</div>
              <ul className="price-feats">
                <li>Dedicated engineering support</li>
                <li>Bi-weekly sprint deliverables</li>
                <li>Priority support response</li>
                <li>Continuous model refinement</li>
              </ul>
              <div style={{marginTop:'24px'}}>
                <Link href="/contact" className="btn-primary" style={{width:'100%', justifyContent:'center'}}>Book a Call</Link>
              </div>
            </div>
            <div className="price-card">
              <div className="price-tier">Enterprise</div>
              <div className="price-amount">Custom<span> quote</span></div>
              <div className="price-sub">For large organizations requiring comprehensive architecture builds.</div>
              <ul className="price-feats">
                <li>Full project management included</li>
                <li>Complex system integrations</li>
                <li>SLA-based support agreement</li>
                <li>Formal training & handover</li>
              </ul>
              <div style={{marginTop:'24px'}}>
                <Link href="/contact" className="btn-ghost" style={{width:'100%', justifyContent:'center'}}>Contact Us</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CONTACT ===== */}
      <section id="contact">
        <div className="inner">
          <div className="tag">Contact</div>
          <h2 className="h2">Let's Build Something Intelligent Together</h2>
          <p className="lead">Whether you have a clear spec or just a problem that needs solving, reach out. We'll give you an honest technical assessment.</p>
          
          <div className="contact-grid">
            <div>
              <div className="contact-method">
                <div className="cmethod-icon">📧</div>
                <div>
                  <div className="cmethod-lbl">Email Us</div>
                  <div className="cmethod-val">info@mohaitech.in</div>
                </div>
              </div>
              <div className="contact-method">
                <div className="cmethod-icon">📞</div>
                <div>
                  <div className="cmethod-lbl">Call / WhatsApp</div>
                  <div className="cmethod-val">+91 (956)-685-2700</div>
                </div>
              </div>
              <div className="contact-method">
                <div className="cmethod-icon">📍</div>
                <div>
                  <div className="cmethod-lbl">Location</div>
                  <div className="cmethod-val">Namakkal, Tamil Nadu, India</div>
                </div>
              </div>
              
              <div className="cta-banner">
                <div className="cta-h">Ready to explore AI?</div>
                <div className="cta-sub">Start with a free conversation. No pitch deck. Just honest talk about your goals.</div>
                <div className="cta-btns">
                  <a href="https://wa.me/919566852700" target="_blank" rel="noopener noreferrer" className="btn-primary">WhatsApp Us</a>
                  <a href="mailto:info@mohaitech.in" className="btn-ghost">Email Us</a>
                </div>
              </div>
            </div>
            
            <div className="contact-form-card">
              <div className="form-title">Send a Project Inquiry</div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
