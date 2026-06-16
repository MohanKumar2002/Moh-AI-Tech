import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'DocuMind AI — Chat with your documents',
  description: 'Upload any document and chat with it instantly. Summarize, extract insights, generate quizzes. For students and companies worldwide.',
};

export default function DocuMindLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{ minHeight: '100vh', background: '#0a0a0f', color: '#f0f0ff', fontFamily: "-apple-system, BlinkMacSystemFont, 'Inter', 'Segoe UI', sans-serif" }}>
      {children}
    </div>
  );
}
