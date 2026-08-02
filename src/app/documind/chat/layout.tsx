import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Chat - DocuMind AI',
  robots: {
    index: false,
    follow: false,
  },
};

export default function ChatLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
