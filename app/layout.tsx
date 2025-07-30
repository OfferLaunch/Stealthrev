import React from 'react'
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Stealth Rev - Premium Pay Per Lead Solutions | High-Quality B2B Leads',
  description: 'Get high-quality, verified B2B leads delivered directly to your CRM. Pay only for qualified prospects that match your exact criteria. Performance-based lead generation.',
  keywords: 'pay per lead, lead generation, verified leads, performance marketing, lead quality, ROI, B2B leads, qualified prospects, CRM leads, business leads',
  authors: [{ name: 'Stealth Rev' }],
  creator: 'Stealth Rev',
  publisher: 'Stealth Rev',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  alternates: {
    canonical: 'https://stealthrev.co/',
  },
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
    description: 'Get high-quality, verified B2B leads delivered directly to your CRM. Pay only for qualified prospects that match your exact criteria.',
    url: 'https://stealthrev.co/',
    siteName: 'Stealth Rev',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: '/images/stealthrev white.png',
        width: 1200,
        height: 630,
        alt: 'Stealth Rev - Premium Pay Per Lead Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Stealth Rev - Premium Pay Per Lead Solutions',
    description: 'Get high-quality, verified B2B leads delivered directly to your CRM. Pay only for qualified prospects.',
    images: ['/images/stealthrev white.png'],
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
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
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://stealthrev.co/" />
        
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
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Stealth Rev",
              "url": "https://stealthrev.co",
              "logo": "https://stealthrev.co/images/stealthrev white.png",
              "description": "Premium pay-per-lead solutions delivering high-quality, verified B2B leads",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "163 NE 24th Street",
                "addressLocality": "Miami",
                "addressRegion": "FL",
                "postalCode": "33137",
                "addressCountry": "US"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-786-509-9198",
                "contactType": "customer service",
                "email": "info@stealthrev.co"
              },
              "sameAs": [
                "https://www.facebook.com/profile.php?id=61573990739885"
              ]
            })
          }}
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
        
        {/* Typeform Script */}
        <script src="//embed.typeform.com/next/embed.js" async></script>
      </head>
      <body className="antialiased bg-brand-black text-brand-white">
        {children}
      </body>
    </html>
  )
} 