import type { Metadata } from 'next';
import { IBM_Plex_Sans, Space_Grotesk } from 'next/font/google';
import './globals.css';

const bodyFont = IBM_Plex_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

const displayFont = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  weight: ['500', '700'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://vaughnprice.com'),
  title: {
    default: 'Vaughn Price Limited | Systems For The Next Generation Of Business',
    template: '%s | Vaughn Price Limited',
  },
  description:
    'Vaughn Price builds websites, mobile apps, enterprise systems, cloud platforms, data products, and AI-enabled software for ambitious businesses.',
  openGraph: {
    title: 'Vaughn Price Limited | Systems For The Next Generation Of Business',
    description:
      'A systems-led digital partner building products, platforms, infrastructure, and intelligent software for modern growth.',
    url: 'https://vaughnprice.com',
    siteName: 'Vaughn Price Limited',
    type: 'website',
    images: ['/og-image.svg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vaughn Price Limited',
    description: 'Products, platforms, and systems built for what is next.',
    images: ['/og-image.svg'],
  },
  icons: {
    icon: ['/brand-mark.svg'],
    shortcut: ['/brand-mark.svg'],
    apple: '/brand-mark.svg',
  },
  alternates: {
    canonical: '/',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${bodyFont.variable} ${displayFont.variable} antialiased`}>
        {children}
        <div className="grain-overlay" aria-hidden />
      </body>
    </html>
  );
}
