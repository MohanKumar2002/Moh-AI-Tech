import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sign Up - DocuMind AI',
  description: 'Create your DocuMind AI account to start chatting with your documents for free.',
  alternates: {
    canonical: '/documind/signup',
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function SignupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
