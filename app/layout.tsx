import React from 'react';

import type { Metadata } from 'next';
import { Raleway, Source_Sans_3 } from 'next/font/google';

import GoogleAnalytics from '@/components/Template/GoogleAnalytics';
import Navigation from '@/components/Template/Navigation';
import '@/static/css/main.scss';

const sourceSans = Source_Sans_3({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-source-sans',
  display: 'swap',
});

const raleway = Raleway({
  weight: ['400', '800', '900'],
  subsets: ['latin'],
  variable: '--font-raleway',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Aashish Arora',
    template: '%s | Aashish Arora',
  },
  description:
    "Aashish Arora's personal website. Full-stack developer, information security specialist, cybersecurity solutions specialist",
  keywords: [
    'Aashish Arora',
    'full-stack developer',
    'information security',
    'secure web applications',
    'software development',
    'cybersecurity solutions',
  ],
  authors: [{ name: 'Aashish Arora' }],
  creator: 'Aashish Arora',
  metadataBase: new URL('https://aashisharora.onrender.com/'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '',
    siteName: 'Aashish Arora',
    title: 'Aashish Arora',
    description:
      'Full-stack developer, information security specialist, cybersecurity solutions specialist',
    images: [
      {
        url: '/images/me.jpg',
        width: 1200,
        height: 630,
        alt: 'Aashish Arora',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sourceSans.variable} ${raleway.variable}`}>
      <body>
        <div id="wrapper">
          <Navigation />
          {children}
        </div>
        <GoogleAnalytics />
      </body>
    </html>
  );
}
