import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Playbook | Stress-Free AI Revolution — Moh-AI Tech',
  description: 'The Moh-AI Tech Playbook: our cultural framework for stress-free AI engineering. Learn how we build enterprise AI with peace of mind, progress, and prosperity.',
  alternates: {
    canonical: '/playbook',
  },
  openGraph: {
    title: 'The Playbook | Stress-Free AI Revolution — Moh-AI Tech',
    description: 'Learn, Earn, and Lead with AI — the official cultural framework of Moh-AI Tech. Peace in mind, Progress through AI, Prosperity in life.',
    url: 'https://moh-ai-tech.com/playbook',
    siteName: 'Moh-AI Tech',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Playbook | Stress-Free AI Revolution — Moh-AI Tech',
    description: 'Learn, Earn, and Lead with AI — the official cultural framework of Moh-AI Tech.',
  },
};

export default function PlaybookLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
