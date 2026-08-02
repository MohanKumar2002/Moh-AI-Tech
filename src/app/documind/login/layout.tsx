import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Login - DocuMind AI',
  description: 'Log in to your DocuMind AI account to chat with your documents.',
  alternates: {
    canonical: '/documind/login',
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
