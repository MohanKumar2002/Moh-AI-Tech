import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dashboard - DocuMind AI',
  robots: {
    index: false,
    follow: false,
  },
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
