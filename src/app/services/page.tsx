// src/app/services/page.tsx
'use client';

import React from 'react';

export default function ServicesPage() {
  return (
    <div className="pt-16 min-h-screen">
      {/* ===== SERVICES ===== */}
      <section id="services">
        <div className="inner">
          <div className="tag">Our Services</div>
          <h2 className="h2">Comprehensive AI Engineering</h2>
          <p className="lead">From initial prototypes to production-ready platforms, we build intelligent technology designed for real-world impact.</p>
          
          <div className="services-grid">
            <div className="svc-card">
              <div className="svc-icon">💬</div>
              <div className="svc-title">AI Chatbot Development</div>
              <div className="svc-desc">Secure, enterprise-grade conversational AI that understands your company data without hallucinating.</div>
              <div className="svc-tags">
                <span className="svc-tag">LangChain</span>
                <span className="svc-tag">OpenAI</span>
                <span className="svc-tag">VectorDB</span>
              </div>
            </div>
            <div className="svc-card">
              <div className="svc-icon">🤖</div>
              <div className="svc-title">AI Agent Development</div>
              <div className="svc-desc">Autonomous workflow agents capable of complex tasks, from research synthesis to automated email outreach.</div>
              <div className="svc-tags">
                <span className="svc-tag">CrewAI</span>
                <span className="svc-tag">AutoGPT</span>
                <span className="svc-tag">Python</span>
              </div>
            </div>
            <div className="svc-card">
              <div className="svc-icon">🧠</div>
              <div className="svc-title">Custom AI Applications</div>
              <div className="svc-desc">Bespoke machine learning models specifically trained on your data for predictive analytics and computer vision.</div>
              <div className="svc-tags">
                <span className="svc-tag">PyTorch</span>
                <span className="svc-tag">TensorFlow</span>
                <span className="svc-tag">Scikit</span>
              </div>
            </div>
            <div className="svc-card">
              <div className="svc-icon">⚛️</div>
              <div className="svc-title">Web App Development</div>
              <div className="svc-desc">Modern, highly-responsive web platforms powered by React, Next.js, and scalable cloud architectures.</div>
              <div className="svc-tags">
                <span className="svc-tag">React</span>
                <span className="svc-tag">Next.js</span>
                <span className="svc-tag">Tailwind</span>
              </div>
            </div>
            <div className="svc-card">
              <div className="svc-icon">⚙️</div>
              <div className="svc-title">Business Process Automation</div>
              <div className="svc-desc">Replace manual data entry and repetitive admin work with intelligent scripting and background automation.</div>
              <div className="svc-tags">
                <span className="svc-tag">FastAPI</span>
                <span className="svc-tag">Python</span>
                <span className="svc-tag">Cron</span>
              </div>
            </div>
            <div className="svc-card">
              <div className="svc-icon">📄</div>
              <div className="svc-title">Document Intelligence</div>
              <div className="svc-desc">Smart OCR pipelines that extract structured data from unstructured invoices, receipts, and medical forms.</div>
              <div className="svc-tags">
                <span className="svc-tag">OCR</span>
                <span className="svc-tag">LLMs</span>
                <span className="svc-tag">JSON</span>
              </div>
            </div>
            <div className="svc-card">
              <div className="svc-icon">📊</div>
              <div className="svc-title">Data Dashboards & Analytics</div>
              <div className="svc-desc">Transform raw databases into clean, interactive PowerBI and web-based business intelligence hubs.</div>
              <div className="svc-tags">
                <span className="svc-tag">PowerBI</span>
                <span className="svc-tag">Tableau</span>
                <span className="svc-tag">SQL</span>
              </div>
            </div>
            <div className="svc-card">
              <div className="svc-icon">🔌</div>
              <div className="svc-title">API & System Integrations</div>
              <div className="svc-desc">Connect disjointed enterprise software ecosystems into unified, seamless data workflows.</div>
              <div className="svc-tags">
                <span className="svc-tag">REST API</span>
                <span className="svc-tag">Webhooks</span>
                <span className="svc-tag">PostgreSQL</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== INDUSTRIES ===== */}
      <section id="industries">
        <div className="inner">
          <div className="tag">Domains We Support</div>
          <h2 className="h2">Industries We Serve</h2>
          <p className="lead">Our expertise translates across multiple sectors, bringing intelligent automation to wherever operational bottlenecks exist.</p>
          
          <div className="industry-grid">
            <div className="ind-card">
              <span className="ind-icon">🏛️</span>
              <div className="ind-name">Government & Public Sector</div>
            </div>
            <div className="ind-card">
              <span className="ind-icon">🎓</span>
              <div className="ind-name">Education</div>
            </div>
            <div className="ind-card">
              <span className="ind-icon">🏥</span>
              <div className="ind-name">Healthcare</div>
            </div>
            <div className="ind-card">
              <span className="ind-icon">🏭</span>
              <div className="ind-name">Manufacturing</div>
            </div>
            <div className="ind-card">
              <span className="ind-icon">🌾</span>
              <div className="ind-name">Agriculture</div>
            </div>
            <div className="ind-card">
              <span className="ind-icon">🛒</span>
              <div className="ind-name">Retail & E-Commerce</div>
            </div>
            <div className="ind-card">
              <span className="ind-icon">📦</span>
              <div className="ind-name">Logistics</div>
            </div>
            <div className="ind-card">
              <span className="ind-icon">🚀</span>
              <div className="ind-name">Startups</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
