import '@/styles/globals.css';

import { PropsWithChildren } from 'react';
import { AnimatePresence } from 'framer-motion';
import type { Metadata } from 'next';

import { ActiveSectionProvider } from '@/components/active-section-provider';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/toaster';
import { fonts } from '@/lib/fonts';
import { siteConfig } from '@/lib/site-config';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.title}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.title,
    images: [
      {
        url: 'https://i.imgur.com/l2GI8HX.png',
        width: 1200,
        height: 630,
        alt: siteConfig.title,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  robots: { index: true, follow: true },
  icons: {
    icon: '/favicon/favicon.ico',
    shortcut: '/favicon/favicon-16x16.png',
    apple: '/favicon/apple-touch-icon.png',
  },
  verification: {
    google: siteConfig.googleSiteVerificationId,
  },
};

const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta property="og:site_name" content="Forhan" />
        <meta property="og:title" content="Forhan" />
        <meta
          property="og:description"
          content="From Visual Concepts to Functional Code.Crafting seamless experiences and bold visuals. Developer by day, creative thinker, and aspiring innovator by night."
        />
        <meta property="og:image" content="https://i.imgur.com/l2GI8HX.png" />
        <meta property="og:url" content="https://forhan.vercel.app/" />
      </head>
      <body className={cn('min-h-screen font-sans', fonts)}>
        <ThemeProvider attribute="class">
          <ActiveSectionProvider>
            <AnimatePresence>{children}</AnimatePresence>
            <Toaster position="bottom-left" />
          </ActiveSectionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
