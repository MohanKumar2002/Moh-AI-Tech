import React from 'react';

export const metadata = {
  title: 'Privacy Policy | Moh-AI Tech',
  description: 'Learn how Moh-AI Tech collects, uses, and protects your information when you visit our website or engage our AI services.',
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[var(--bg)] py-24">
      <div className="inner max-w-3xl mx-auto">
        <h1 className="h2 mb-8">Privacy Policy</h1>
        <div className="prose prose-invert prose-lg text-[var(--muted)]">
          <p className="mb-8">
            Moh-AI Tech ("we", "us") respects your privacy. This policy explains how we collect, use, and protect information when you visit our website or engage our services.
          </p>

          <h2 className="text-[var(--text)] font-bold text-xl mt-8 mb-4">Information We Collect</h2>
          <ul className="list-disc pl-6 mb-6">
            <li className="mb-2">Contact form submissions (name, email, company, project details)</li>
            <li className="mb-2">Basic analytics (pages visited, general location, device type)</li>
          </ul>

          <h2 className="text-[var(--text)] font-bold text-xl mt-8 mb-4">How We Use It</h2>
          <ul className="list-disc pl-6 mb-6">
            <li className="mb-2">To respond to inquiries and provide quotes</li>
            <li className="mb-2">To improve our website and services</li>
            <li className="mb-2">We do not sell or share your data with third parties</li>
          </ul>

          <h2 className="text-[var(--text)] font-bold text-xl mt-8 mb-4">Data Security</h2>
          <p className="mb-6">
            Client project data is handled under NDA and industry-standard security practices. We do not use client data to train third-party AI models without explicit consent.
          </p>

          <h2 className="text-[var(--text)] font-bold text-xl mt-8 mb-4">Cookies & Analytics</h2>
          <p className="mb-6">
            We use Google Analytics (GA4) to understand how visitors interact with our website. This involves the use of basic cookies. By continuing to use our site, you consent to this basic telemetry. You can disable cookies in your browser settings if preferred.
          </p>

          <h2 className="text-[var(--text)] font-bold text-xl mt-8 mb-4">Governing Law & Compliance</h2>
          <p className="mb-6">
            This policy is governed by the laws of India, specifically in compliance with the Information Technology Act, 2000 and the Digital Personal Data Protection (DPDP) Act, 2023. Any disputes shall be subject to the exclusive jurisdiction of the courts in Namakkal, Tamil Nadu.
          </p>

          <h2 className="text-[var(--text)] font-bold text-xl mt-8 mb-4">Contact</h2>
          <p className="mb-8">
            Questions about this policy: <a href="mailto:info@moh-ai-tech.com" className="text-[var(--accent)] hover:underline">info@moh-ai-tech.com</a>
          </p>
          
          <p className="text-sm">
            Last updated: July 2026
          </p>
        </div>
      </div>
    </main>
  );
}
