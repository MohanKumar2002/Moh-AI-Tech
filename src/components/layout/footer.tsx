'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="premium-footer">
      <div className="footer-inner">
        <div className="footer-grid">
          <div>
            <Link href="/" className="logo mb-4 inline-block" style={{ gap: 0 }}>
              <Image
                src="/images/general/logo.png"
                alt="Moh-AI Tech Logo"
                width={130}
                height={40}
                className="h-auto w-auto"
                priority
              />
            </Link>
            <p className="footer-tagline">
              Custom AI applications, intelligent automation, AI agents, and business platforms. Built honestly for businesses and institutions worldwide. <br/><br/>Based in Vasanthapuram, Namakkal, Tamil Nadu, India.
            </p>
          </div>

          <div>
            <div className="footer-col-title">Services</div>
            <ul className="footer-links">
              <li><Link href="/#services">AI Chatbot Development</Link></li>
              <li><Link href="/#agents">AI Agent Development</Link></li>
              <li><Link href="/#services">Custom AI Applications</Link></li>
              <li><Link href="/#services">Web App Development</Link></li>
              <li><Link href="/#services">Business Process Automation</Link></li>
              <li><Link href="/#services">Data Dashboards</Link></li>
            </ul>
          </div>

          <div>
            <div className="footer-col-title">Company Overview</div>
            <ul className="footer-links">
              <li><Link href="/#industries">Industries</Link></li>
              <li><Link href="/#process">Development Process</Link></li>
              <li><Link href="/#tech">Technology Stack</Link></li>
              <li><Link href="/#featured">Featured Projects</Link></li>
              <li><Link href="/#public-sector">Public Sector Solutions</Link></li>
              <li><Link href="/#pricing">Pricing</Link></li>
            </ul>
          </div>

          <div>
            <div className="footer-col-title">Quick Links</div>
            <ul className="footer-links">
              <li><Link href="/#founder">About the Founder</Link></li>
              <li><Link href="/#solutions">Solution Architectures</Link></li>
              <li><Link href="/#contact">Contact Us</Link></li>
              <li><Link href="https://wa.me/919566852700" target="_blank" rel="noopener noreferrer">WhatsApp Chat</Link></li>
              <li><a href="mailto:info@mohaitech.in">Email Support</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom mt-12 pt-8 border-t border-[var(--border2)] flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="footer-copy text-sm text-[var(--muted)]">
            © {new Date().getFullYear()} Moh-AI Tech. <strong>MSME Registered Enterprise</strong>. Vasanthapuram, Namakkal, Tamil Nadu, India.
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
