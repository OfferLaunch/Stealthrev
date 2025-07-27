import React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

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
        <style dangerouslySetInnerHTML={{
          __html: `
            body { 
              background-color: #020617 !important; 
              color: white !important; 
              font-family: 'Inter', system-ui, sans-serif !important;
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
            /* Animation fallbacks for static export */
            .animate-fade-in { animation: fadeIn 0.5s ease-in-out; }
            .animate-slide-up { animation: slideUp 0.5s ease-out; }
            @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
            @keyframes slideUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
            /* Force visibility for static export - CRITICAL */
            [style*="opacity: 0"] { opacity: 1 !important; }
            [style*="transform: translateY(20px)"] { transform: none !important; }
            [style*="transform: translateY(30px)"] { transform: none !important; }
            [style*="transform: translateX(-20px)"] { transform: none !important; }
            [style*="transform: translateX(20px)"] { transform: none !important; }
            /* Ensure all motion elements are visible */
            [data-framer-motion] { opacity: 1 !important; transform: none !important; }
            /* Force all content to be visible */
            main * { opacity: 1 !important; visibility: visible !important; }
          `
        }} />
        <script dangerouslySetInnerHTML={{
          __html: `
            // Aggressive fallback for static export
            function forceVisibility() {
              // Force all elements to be visible
              const allElements = document.querySelectorAll('*');
              allElements.forEach(el => {
                const style = window.getComputedStyle(el);
                if (style.opacity === '0' || style.visibility === 'hidden') {
                  el.style.opacity = '1';
                  el.style.visibility = 'visible';
                  el.style.transform = 'none';
                }
              });
              
              // Force motion elements
              const motionElements = document.querySelectorAll('[data-framer-motion]');
              motionElements.forEach(el => {
                el.style.opacity = '1';
                el.style.transform = 'none';
                el.style.visibility = 'visible';
              });
            }
            
            // Run immediately and after a delay
            forceVisibility();
            setTimeout(forceVisibility, 100);
            setTimeout(forceVisibility, 500);
            setTimeout(forceVisibility, 1000);
          `
        }} />
      </head>
      <body className={`${inter.className} antialiased bg-dark-950 text-white`}>
        {children}
      </body>
    </html>
  )
} 