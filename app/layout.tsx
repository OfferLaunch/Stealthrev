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
            
            /* NUCLEAR FALLBACK - Override ALL Framer Motion styles */
            * { 
              opacity: 1 !important; 
              visibility: visible !important; 
              transform: none !important; 
            }
            
            /* Animation fallbacks for static export */
            .animate-fade-in { animation: fadeIn 0.5s ease-in-out; }
            .animate-slide-up { animation: slideUp 0.5s ease-out; }
            @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
            @keyframes slideUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
            
            /* Force ALL elements to be visible regardless of inline styles */
            [style*="opacity: 0"] { opacity: 1 !important; }
            [style*="transform: translateY(20px)"] { transform: none !important; }
            [style*="transform: translateY(30px)"] { transform: none !important; }
            [style*="transform: translateX(-20px)"] { transform: none !important; }
            [style*="transform: translateX(20px)"] { transform: none !important; }
            [style*="transform: translateX(-50px)"] { transform: none !important; }
            [style*="transform: translateX(50px)"] { transform: none !important; }
            [style*="translateZ(0)"] { transform: none !important; }
            
            /* Ensure all motion elements are visible */
            [data-framer-motion] { opacity: 1 !important; transform: none !important; }
            
            /* Force all content to be visible */
            main * { opacity: 1 !important; visibility: visible !important; transform: none !important; }
            
            /* Override any remaining hidden elements */
            div, section, header, footer, p, h1, h2, h3, h4, h5, h6, span, a, button, form, input, textarea, ul, li {
              opacity: 1 !important;
              visibility: visible !important;
              transform: none !important;
            }
            
            /* HIDE SWEETALERT CSS THAT APPEARS AS TEXT */
            body > *:first-child:not(main):not(header):not(footer):not(section) {
              display: none !important;
            }
            
            /* Hide any CSS that appears as text */
            body > text:first-child,
            body > *:first-child:not(main):not(header):not(footer):not(section):not(div):not(script):not(style) {
              display: none !important;
              visibility: hidden !important;
              opacity: 0 !important;
            }
          `
        }} />
        <script dangerouslySetInnerHTML={{
          __html: `
            // NUCLEAR FALLBACK - Force visibility on ALL elements
            function nuclearFallback() {
              try {
                // Override ALL elements
                const allElements = document.querySelectorAll('*');
                allElements.forEach(el => {
                  el.style.opacity = '1';
                  el.style.visibility = 'visible';
                  el.style.transform = 'none';
                  el.style.display = el.style.display || 'block';
                });
                
                // Force specific elements that might be hidden
                const sections = document.querySelectorAll('section, div, header, footer');
                sections.forEach(el => {
                  el.style.opacity = '1';
                  el.style.visibility = 'visible';
                  el.style.transform = 'none';
                });
                
                // Hide any SweetAlert CSS that appears as text
                const bodyChildren = document.body.children;
                for (let i = 0; i < bodyChildren.length; i++) {
                  const child = bodyChildren[i];
                  if (child.tagName !== 'MAIN' && child.tagName !== 'HEADER' && child.tagName !== 'FOOTER' && child.tagName !== 'SECTION' && child.tagName !== 'SCRIPT' && child.tagName !== 'STYLE') {
                    if (child.textContent && child.textContent.includes('.swal-')) {
                      child.style.display = 'none';
                      child.style.visibility = 'hidden';
                      child.style.opacity = '0';
                    }
                  }
                }
              } catch (error) {
                console.log('Nuclear fallback error:', error);
              }
            }
            
            // Wait for DOM to be ready
            function initNuclearFallback() {
              if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', nuclearFallback);
              } else {
                nuclearFallback();
              }
              
              // Run immediately and continuously
              setTimeout(nuclearFallback, 50);
              setTimeout(nuclearFallback, 100);
              setTimeout(nuclearFallback, 200);
              setTimeout(nuclearFallback, 500);
              setTimeout(nuclearFallback, 1000);
              
              // Also run on DOM changes (with proper error handling)
              try {
                if (document.body) {
                  const observer = new MutationObserver(nuclearFallback);
                  observer.observe(document.body, { 
                    childList: true, 
                    subtree: true, 
                    attributes: true,
                    attributeFilter: ['style']
                  });
                }
              } catch (error) {
                console.log('Observer error:', error);
              }
            }
            
            // Initialize when script loads
            initNuclearFallback();
          `
        }} />
      </head>
      <body className={`${inter.className} antialiased bg-dark-950 text-white`}>
        {children}
      </body>
    </html>
  )
} 