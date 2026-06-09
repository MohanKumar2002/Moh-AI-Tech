// src/app/agents/page.tsx
'use client';

import React from 'react';
import Link from 'next/link';

export default function AgentsPage() {
  return (
    <div className="pt-16 min-h-screen">
      {/* ===== AI AGENTS ===== */}
      <section id="agents">
        <div className="inner">
          <div className="tag">Workflow Automation</div>
          <h2 className="h2">Custom-Built AI Agents</h2>
          <p className="lead">We deploy tailored autonomous agents designed to handle your specific business workflows, freeing up your team for high-leverage work.</p>
          
          <div className="agents-grid">
            <div className="agent-card">
              <div className="agent-status">
                <span className="agent-dot"></span>
                <span>Custom Implementation</span>
              </div>
              <div className="agent-name">ReportBot</div>
              <div className="agent-desc">Automatically compiles end-of-day operations data into executive summaries delivered via Slack or Email.</div>
            </div>
            <div className="agent-card">
              <div className="agent-status">
                <span className="agent-dot"></span>
                <span>Custom Implementation</span>
              </div>
              <div className="agent-name">InvoiceAI</div>
              <div className="agent-desc">Monitors a dedicated inbox, extracts structured data from PDF invoices, and syncs directly to your accounting software.</div>
            </div>
            <div className="agent-card">
              <div className="agent-status">
                <span className="agent-dot"></span>
                <span>Custom Implementation</span>
              </div>
              <div className="agent-name">SupportMind</div>
              <div className="agent-desc">Trained strictly on your help desk tickets to draft highly accurate replies for human review.</div>
            </div>
            <div className="agent-card">
              <div className="agent-status">
                <span className="agent-dot"></span>
                <span>Custom Implementation</span>
              </div>
              <div className="agent-name">HRAssist</div>
              <div className="agent-desc">An internal HR agent that answers employee policy questions instantly based on your company handbook.</div>
            </div>
            <div className="agent-card">
              <div className="agent-status">
                <span className="agent-dot"></span>
                <span>Custom Implementation</span>
              </div>
              <div className="agent-name">ComplianceWatch</div>
              <div className="agent-desc">Scans internal documents and communications to ensure adherence to predefined compliance and safety guidelines.</div>
            </div>
            <div className="agent-card">
              <div className="agent-status">
                <span className="agent-dot"></span>
                <span>Custom Implementation</span>
              </div>
              <div className="agent-name">TenderBot</div>
              <div className="agent-desc">Monitors public procurement portals and summarizes relevant RFPs matching your company capabilities.</div>
            </div>
            <div className="agent-card">
              <div className="agent-status">
                <span className="agent-dot"></span>
                <span>Custom Implementation</span>
              </div>
              <div className="agent-name">SalesOracle</div>
              <div className="agent-desc">Analyzes prospect data to draft hyper-personalized cold outreach messages for your sales team.</div>
            </div>
            <div className="agent-card">
              <div className="agent-status">
                <span className="agent-dot"></span>
                <span>Custom Implementation</span>
              </div>
              <div className="agent-name">InventoryAI</div>
              <div className="agent-desc">Predicts stock depletion rates based on historical sales data and automatically flags reorder requirements.</div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PUBLIC SECTOR ===== */}
      <section id="public-sector">
        <div className="inner">
          <div className="tag">Civic Tech</div>
          <h2 className="h2">Public Sector & Government Solutions</h2>
          <p className="lead">We have the capabilities to build robust, scalable platforms tailored for civic administration and large-scale public initiatives.</p>
          
          <div className="global-grid" style={{marginTop: '40px'}}>
            <div className="global-text">
              <h3 style={{fontFamily:'var(--syne)', fontSize:'24px', fontWeight:'700', marginBottom:'20px'}}>Engineering for Scale</h3>
              <p style={{fontSize:'16px', color:'var(--muted)', lineHeight:'1.6', marginBottom:'24px'}}>
                Public sector projects require a different level of architecture—focusing heavily on scalability, accessibility, and strict data security. We are equipped to handle complex civic intelligence requirements without exaggerated claims of pre-compliance.
              </p>
              <ul className="why-list">
                <li>Smart City Analytics dashboards for traffic and resource management.</li>
                <li>e-Governance Automation for digitized administrative workflows.</li>
                <li>Agriculture Intelligence for crop yield and resource allocation models.</li>
                <li>Citizen Service Platforms that are highly accessible and scalable.</li>
                <li>Policy Analytics Dashboards for data-driven decision making.</li>
              </ul>
            </div>
            
            <div className="engage-card">
              <div className="engage-title">Institutional Engagement</div>
              <div className="engage-row">
                <div className="engage-label">Security Focus</div>
                <div className="engage-val">On-Premise Deployments</div>
              </div>
              <div className="engage-row">
                <div className="engage-label">Development Focus</div>
                <div className="engage-val">High Accessibility</div>
              </div>
              <div className="engage-row">
                <div className="engage-label">Data Privacy</div>
                <div className="engage-val">Strict NDA Compliance</div>
              </div>
              <div className="engage-note">
                💡 Note: All public sector development proposals are evaluated individually to ensure we meet specific regional data compliance requirements. Focus is on capability.
              </div>
              <div style={{marginTop:'24px'}}>
                <Link href="/contact" className="btn-primary" style={{width:'100%', justifyContent:'center'}}>
                  Discuss Institutional Projects
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
