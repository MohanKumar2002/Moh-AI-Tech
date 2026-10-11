'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="premium-footer">
      <div className="footer-inner">
        <div className="footer-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-9 mb-11 w-full">
          <div>
            <Link href="/" className="logo mb-4 inline-block" style={{ gap: 0 }}>
              <Image
                src="/logo.png"
                alt="Moh-AI Tech Logo"
                width={42}
                height={42}
                className="h-auto w-auto"
                priority
              />
              <span className="logo-text" style={{ marginLeft: "10px", fontWeight: "800", fontSize: "17px", letterSpacing: "0.5px", color: "var(--text)", whiteSpace: "nowrap" }}>MOH-AI TECH</span>
            </Link>
            <p className="footer-tagline">
              Building practical AI systems from Tamil Nadu for businesses globally.
              <br/><br/>
              Based in Namakkal, Tamil Nadu, India.
              <br/>
              MSME Reg: UDYAM-TN-14-0088280.
            </p>
          </div>

          <div>
            <div className="footer-col-title">Pathways & Products</div>
            <ul className="footer-links">
              <li><Link href="/products">All Products Catalog</Link></li>
              <li><Link href="/taxflow">Moh-AI TaxFlow (CA Suite)</Link></li>
              <li><Link href="/visioninspect">VisionInspect Edge AI</Link></li>
              <li><Link href="/hr-recruiter">Moh-AI Recruiter AI</Link></li>
              <li><Link href="/whatsapp-autodesk">WhatsApp AutoDesk</Link></li>
              <li><Link href="/industrial-ai">Industrial AI Solutions</Link></li>
            </ul>
          </div>

          <div>
            <div className="footer-col-title">Free Tools & Hubs</div>
            <ul className="footer-links">
              <li><Link href="/tools/quickinvoice">Free Invoice to Excel</Link></li>
              <li><Link href="/tools/roi-calculator">Enterprise ROI Calculator</Link></li>
              <li><Link href="/solutions/coimbatore-pump-valve-inspection">Coimbatore Industrial AI</Link></li>
              <li><Link href="/solutions/chennai-auto-components">Chennai Automotive AI</Link></li>
            </ul>
          </div>

          <div>
            <div className="footer-col-title">Company</div>
            <ul className="footer-links">
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/technology">Technology Stack</Link></li>
              <li><Link href="/research">Research & Labs</Link></li>
              <li><Link href="/contact">Request Assessment</Link></li>
            </ul>
          </div>

          <div>
            <div className="footer-col-title">Connect</div>
            <ul className="footer-links">
              <li><Link href="https://wa.me/919566852700" target="_blank" rel="noopener noreferrer">WhatsApp Support</Link></li>
              <li><a href="mailto:info@moh-ai-tech.com">info@moh-ai-tech.com</a></li>
              <li><a href="https://www.linkedin.com/in/mohan-kumar-subramanian/" target="_blank" rel="noopener noreferrer">Founder LinkedIn</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom mt-12 pt-8 border-t border-[var(--border2)] flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="footer-copy text-sm text-[var(--muted)]">
            © {new Date().getFullYear()} Moh-AI Tech. All rights reserved.
          </div>
          <div className="footer-legal flex gap-6 text-sm text-[var(--muted)]">
            <Link href="/privacy" className="hover:text-[var(--text)] transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-[var(--text)] transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
