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
        {/* Critical CSS fallbacks */}
        <style dangerouslySetInnerHTML={{
          __html: `
            body { 
              background-color: #020617 !important; 
              color: white !important; 
              font-family: 'Inter', system-ui, sans-serif !important;
              margin: 0 !important;
              padding: 0 !important;
            }
            .bg-dark-950 { background-color: #020617 !important; }
            .bg-dark-900 { background-color: #0f172a !important; }
            .bg-dark-800 { background-color: #1e293b !important; }
            .text-white { color: white !important; }
            .text-gray-300 { color: #d1d5db !important; }
            .text-gray-400 { color: #9ca3af !important; }
            .text-primary-500 { color: #ef4444 !important; }
            .text-primary-600 { color: #dc2626 !important; }
            .bg-primary-600 { background-color: #dc2626 !important; }
            .bg-primary-900 { background-color: #7f1d1d !important; }
            .border-dark-700 { border-color: #374151 !important; }
            .border-dark-800 { border-color: #1e293b !important; }
            .border-primary-600 { border-color: #dc2626 !important; }
            .btn-primary { 
              background-color: #dc2626 !important; 
              color: white !important; 
              padding: 12px 24px !important; 
              border-radius: 8px !important; 
              font-weight: 600 !important;
              transition: all 0.2s !important;
            }
            .btn-secondary { 
              background-color: #020617 !important; 
              color: white !important; 
              padding: 12px 24px !important; 
              border-radius: 8px !important; 
              border: 1px solid #dc2626 !important;
              font-weight: 600 !important;
            }
            .card { 
              background-color: #0f172a !important; 
              border-radius: 12px !important; 
              padding: 32px !important;
              border: 1px solid #1e293b !important;
            }
          `
        }} />
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