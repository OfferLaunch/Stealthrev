import React from 'react'
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Stealth Rev - Premium Pay Per Lead Solutions',
  description: 'High-quality, verified leads delivered on a pay-per-lead basis. Boost your ROI with our performance-based lead generation platform.',
  keywords: 'pay per lead, lead generation, verified leads, performance marketing, lead quality, ROI, B2B leads',
  authors: [{ name: 'Stealth Rev' }],
  robots: 'index, follow',
  icons: {
    icon: [
      { url: '/favicons/16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicons/32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    shortcut: '/favicons/32x32.png',
    apple: '/favicons/32x32.png',
  },
  openGraph: {
    title: 'Stealth Rev - Premium Pay Per Lead Solutions',
    description: 'High-quality, verified leads delivered on a pay-per-lead basis. Boost your ROI with our performance-based lead generation platform.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Stealth Rev - Premium Pay Per Lead Solutions',
    description: 'High-quality, verified leads delivered on a pay-per-lead basis. Boost your ROI with our performance-based lead generation platform.',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Favicon */}
        <link rel="icon" type="image/png" sizes="16x16" href="/favicons/16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicons/32x32.png" />
        <link rel="shortcut icon" type="image/png" href="/favicons/32x32.png" />
        <link rel="apple-touch-icon" href="/favicons/32x32.png" />
        
        {/* Preload critical fonts */}
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
          crossOrigin="anonymous"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* Ensure animations work in static export */}
        <script dangerouslySetInnerHTML={{
          __html: `
            // Ensure Framer Motion works in static export
            window.addEventListener('load', function() {
              // Force visibility of animated elements
              setTimeout(function() {
                const animatedElements = document.querySelectorAll('[data-framer-motion]');
                animatedElements.forEach(el => {
                  if (el.style.opacity === '0') {
                    el.style.opacity = '1';
                    el.style.transform = 'none';
                  }
                });
              }, 100);
            });
          `
        }} />
      </head>
      <body className="antialiased bg-brand-black text-brand-white">
        {children}
      </body>
    </html>
  )
} 