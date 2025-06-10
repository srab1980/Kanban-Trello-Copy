import './globals.css';
import type { ReactNode } from 'react';

export const metadata = {
  title: 'TaskFlow',
  description: 'Trello clone built with Next.js 14'
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-100">{children}</body>
    </html>
  );
}
