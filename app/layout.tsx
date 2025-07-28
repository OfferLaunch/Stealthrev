import React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true,
})

export const metadata: Metadata = {
  title: 'Stealth Rev - Premium Pay Per Lead Solutions',
  description: 'High-quality, verified leads delivered on a pay-per-lead basis. Boost your ROI with our performance-based lead generation platform.',
  keywords: 'pay per lead, lead generation, verified leads, performance marketing, lead quality, ROI, B2B leads',
  authors: [{ name: 'Stealth Rev' }],
  robots: 'index, follow',
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
      <body className={`${inter.className} antialiased bg-dark-950 text-white`}>
        {children}
      </body>
    </html>
  )
} 