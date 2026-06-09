// src/app/architectures/page.tsx
'use client';

import React from 'react';
import Link from 'next/link';

export default function ArchitecturesPage() {
  return (
    <div className="pt-16 min-h-screen">
      {/* ===== AI SOLUTION ARCHITECTURES ===== */}
      <section id="solutions">
        <div className="inner">
          <div className="tag">Solution Architectures</div>
          <h2 className="h2">Proven AI Frameworks</h2>
          <p className="lead">These are not generic off-the-shelf SaaS products. They are tested solution architectures we customize, train, and build directly into your environment.</p>
          
          <div className="solutions-grid">
            <div className="sol-card">
              <div className="sol-icon">🧠</div>
              <div className="sol-name">MohMind</div>
              <div className="sol-tagline">Customizable RAG Framework</div>
              <div className="sol-desc">A foundational architecture for building highly-accurate internal knowledge bots grounded entirely in your secure company manuals and documents.</div>
              <Link href="/contact" className="sol-link">Discuss Customization →</Link>
            </div>
            <div className="sol-card">
              <div className="sol-icon">👁️</div>
              <div className="sol-name">VisionGuard</div>
              <div className="sol-tagline">Computer Vision Pipeline</div>
              <div className="sol-desc">Real-time object detection and segmentation framework tailored for manufacturing quality control and retail analytics.</div>
              <Link href="/contact" className="sol-link">Discuss Customization →</Link>
            </div>
            <div className="sol-card">
              <div className="sol-icon">📊</div>
              <div className="sol-name">DataPulse</div>
              <div className="sol-tagline">Business Intelligence Hub</div>
              <div className="sol-desc">An interactive analytics architecture that unifies multiple disjointed databases into a single pane of glass for executives.</div>
              <Link href="/contact" className="sol-link">Discuss Customization →</Link>
            </div>
            <div className="sol-card">
              <div className="sol-icon">🌱</div>
              <div className="sol-name">AgriSense</div>
              <div className="sol-tagline">Predictive Agriculture</div>
              <div className="sol-desc">Specialized models designed to analyze soil health, crop imagery, and yield predictions for the agricultural sector.</div>
              <Link href="/contact" className="sol-link">Discuss Customization →</Link>
            </div>
            <div className="sol-card">
              <div className="sol-icon">🏥</div>
              <div className="sol-name">MedVision</div>
              <div className="sol-tagline">Healthcare Data Parser</div>
              <div className="sol-desc">A secure data extraction framework that digitizes handwritten prescriptions and unstructured medical records.</div>
              <Link href="/contact" className="sol-link">Discuss Customization →</Link>
            </div>
            <div className="sol-card">
              <div className="sol-icon">💬</div>
              <div className="sol-name">OmniBot</div>
              <div className="sol-tagline">Multi-channel Support</div>
              <div className="sol-desc">An intelligent support architecture deployed across WhatsApp, Website, and Email to handle tier-1 customer inquiries autonomously.</div>
              <Link href="/contact" className="sol-link">Discuss Customization →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TECHNOLOGY ===== */}
      <section id="tech">
        <div className="inner">
          <div className="tag">Engineering</div>
          <h2 className="h2">Technology Stack</h2>
          <p className="lead">We strictly use modern, production-grade tools. No hype—just the right stack for scalability and long-term maintainability.</p>
          
          <div className="tech-grid">
            <div className="tech-pill"><span className="tech-dot bg-cyan-400"></span>React</div>
            <div className="tech-pill"><span className="tech-dot" style={{backgroundColor: '#000'}}></span>Next.js</div>
            <div className="tech-pill"><span className="tech-dot bg-teal-400"></span>Tailwind CSS</div>
            <div className="tech-pill"><span className="tech-dot bg-teal-500"></span>FastAPI</div>
            <div className="tech-pill"><span className="tech-dot bg-yellow-500"></span>Python</div>
            <div className="tech-pill"><span className="tech-dot bg-indigo-500"></span>PostgreSQL</div>
            <div className="tech-pill"><span className="tech-dot bg-emerald-500"></span>OpenAI</div>
            <div className="tech-pill"><span className="tech-dot bg-blue-500"></span>Gemini</div>
            <div className="tech-pill"><span className="tech-dot bg-green-500"></span>LangChain</div>
            <div className="tech-pill"><span className="tech-dot bg-purple-500"></span>RAG Systems</div>
            <div className="tech-pill"><span className="tech-dot bg-blue-400"></span>Docker</div>
            <div className="tech-pill"><span className="tech-dot" style={{backgroundColor: '#000'}}></span>Vercel Deployment</div>
          </div>
        </div>
      </section>

      {/* ===== PROCESS ===== */}
      <section id="process">
        <div className="inner">
          <div className="tag">Our Methodology</div>
          <h2 className="h2">Development Process</h2>
          <p className="lead">A transparent, structured 6-step framework designed to align technical delivery with your business objectives.</p>
          
          <div className="steps">
            <div className="step">
              <div className="step-num-row"><span className="step-circle">1</span> Discover</div>
              <div className="step-title">Discovery</div>
              <div className="step-desc">We begin with a deep dive into your business workflows to identify high-impact AI opportunities.</div>
            </div>
            <div className="step">
              <div className="step-num-row"><span className="step-circle">2</span> Plan</div>
              <div className="step-title">Planning</div>
              <div className="step-desc">Defining the exact architecture, data requirements, and technical scope required for the solution.</div>
            </div>
            <div className="step">
              <div className="step-num-row"><span className="step-circle">3</span> Design</div>
              <div className="step-title">Design</div>
              <div className="step-desc">Creating wireframes, user interfaces, and the data pipeline blueprints before any code is written.</div>
            </div>
            <div className="step">
              <div className="step-num-row"><span className="step-circle">4</span> Build</div>
              <div className="step-title">Development</div>
              <div className="step-desc">Agile development cycles with regular demos, ensuring the product evolves exactly as expected.</div>
            </div>
            <div className="step">
              <div className="step-num-row"><span className="step-circle">5</span> QA</div>
              <div className="step-title">Testing</div>
              <div className="step-desc">Rigorous edge-case testing, security audits, and user acceptance testing to ensure robustness.</div>
            </div>
            <div className="step">
              <div className="step-num-row"><span className="step-circle">6</span> Launch</div>
              <div className="step-title">Deployment & Support</div>
              <div className="step-desc">Seamless integration into your production environment followed by active maintenance and updates.</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
