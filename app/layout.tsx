import './globals.css';
import type { Metadata } from 'next';
import { Sora } from 'next/font/google';

const sora = Sora({ 
  subsets: ['latin'],
  variable: '--font-sora',
});

export const metadata: Metadata = {
  title: 'Redefynd.ai | AI Startup Incubator',
  description: 'We orchestrate autonomous agents to transform ideas into AI-native ventures — from zero to scale.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${sora.variable} font-sans`}>{children}</body>
    </html>
  );
}
