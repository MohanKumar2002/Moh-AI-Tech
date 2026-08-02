import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Refund & Cancellation Policy | Moh-AI Tech',
  description: 'Our refund and cancellation policies for digital AI tools and services.',
  alternates: {
    canonical: '/refund',
  },
};

export default function RefundLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
