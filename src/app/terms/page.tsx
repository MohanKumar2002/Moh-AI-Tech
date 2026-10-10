import React from 'react';

export const metadata = {
  title: 'Terms of Service | Moh-AI Tech',
  description: 'Terms of service governing the use of Moh-AI Tech website and engagement with our custom AI development services.',
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[var(--bg)] py-24">
      <div className="inner max-w-3xl mx-auto">
        <h1 className="h2 mb-8">Terms of Service</h1>
        <div className="prose prose-invert prose-lg text-[var(--muted)]">
          <p className="mb-8">
            These terms govern your use of the Moh-AI Tech website and engagement with our services. By contacting us or engaging our services, you agree to the following.
          </p>

          <h2 className="text-[var(--text)] font-bold text-xl mt-8 mb-4">1. Services</h2>
          <p className="mb-6">
            Moh-AI Tech provides custom AI, machine learning, computer vision, and data intelligence development services. Specific deliverables, timelines, and pricing are defined in individual project agreements/contracts, not on this website.
          </p>

          <h2 className="text-[var(--text)] font-bold text-xl mt-8 mb-4">2. Quotes & Pricing</h2>
          <p className="mb-6">
            Pricing shown on this website is illustrative. Actual costs are provided after a scoping call and depend on project scope, complexity, and timeline. Quotes are non-binding until a signed project agreement is in place.
          </p>

          <h2 className="text-[var(--text)] font-bold text-xl mt-8 mb-4">3. Intellectual Property</h2>
          <p className="mb-6">
            Unless otherwise agreed in writing, IP ownership of custom-built solutions transfers to the client upon full payment. Any pre-existing frameworks, tools, or reusable components developed independently by Moh-AI Tech remain our property and may be reused across engagements.
          </p>

          <h2 className="text-[var(--text)] font-bold text-xl mt-8 mb-4">4. Confidentiality</h2>
          <p className="mb-6">
            We treat all client data, business information, and project details as confidential. NDAs are available and standard for all engagements upon request.
          </p>

          <h2 className="text-[var(--text)] font-bold text-xl mt-8 mb-4">5. Client Responsibilities</h2>
          <p className="mb-6">
            Clients are responsible for providing accurate data, timely feedback during review cycles, and necessary access/credentials required for integration work.
          </p>

          <h2 className="text-[var(--text)] font-bold text-xl mt-8 mb-4">6. Limitation of Liability</h2>
          <p className="mb-6">
            Moh-AI Tech is not liable for indirect, incidental, or consequential damages arising from use of delivered solutions. Our total liability in any engagement is limited to the fees paid for that engagement.
          </p>

          <h2 className="text-[var(--text)] font-bold text-xl mt-8 mb-4">7. Termination</h2>
          <p className="mb-6">
            Either party may terminate an engagement per the terms outlined in the signed project agreement. Work completed up to termination is billable.
          </p>

          <h2 className="text-[var(--text)] font-bold text-xl mt-8 mb-4">8. Changes to These Terms</h2>
          <p className="mb-6">
            We may update these terms periodically. Continued use of our website or services after changes constitutes acceptance.
          </p>

          <h2 className="text-[var(--text)] font-bold text-xl mt-8 mb-4">9. Governing Law & Jurisdiction</h2>
          <p className="mb-6">
            These terms shall be governed by and construed in accordance with the laws of India, including the Information Technology Act, 2000. Any disputes arising out of or in connection with these terms shall be subject to the exclusive jurisdiction of the competent courts in Namakkal, Tamil Nadu, India.
          </p>

          <h2 className="text-[var(--text)] font-bold text-xl mt-8 mb-4">Contact</h2>
          <p className="mb-8">
            Questions about these terms: <a href="mailto:info@moh-ai-tech.com" className="text-[var(--accent)] hover:underline">info@moh-ai-tech.com</a>
          </p>
          
          <p className="text-sm">
            Last updated: July 2026
          </p>
        </div>
      </div>
    </main>
  );
}
