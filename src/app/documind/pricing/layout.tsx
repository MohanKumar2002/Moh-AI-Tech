import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pricing - DocuMind AI',
  description: 'Simple and honest pricing plans for DocuMind AI. Start for free and upgrade as you need.',
  alternates: {
    canonical: '/documind/pricing',
  },
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
