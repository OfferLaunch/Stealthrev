'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'
import Link from 'next/link'

const ApplyPage = () => {
  return (
    <main className="min-h-screen bg-brand-black text-brand-white">


      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center gradient-bg overflow-hidden pt-16 pb-8">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-900 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-red-900 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary-800 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: '4s' }}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 1, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="mb-4"
            >
              <Link href="/">
                <img
                  src="/images/stealthrev white.png"
                  alt="Stealth Rev - Premium Pay Per Lead Solutions Logo"
                  className="mx-auto h-10 w-auto cursor-pointer hover:opacity-80 transition-opacity"
                />
              </Link>
            </motion.div>

            {/* Badge */}
            <motion.div
              initial={{ opacity: 1, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-primary-900/20 border border-primary-600 text-primary-400 text-sm font-medium mb-8"
            >
              <CheckCircle className="w-4 h-4 mr-2" />
              Verified Leads • Pay Per Performance
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 1, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
            >
              Want unlimited leads sent to you on a{' '}
              <span className="text-gradient">performance basis?</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 1, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
            >
              Get high-quality, verified leads delivered directly to your CRM. Pay only for qualified prospects that match your exact criteria.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Typeform Section */}
      <section className="py-12 bg-dark-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">


          {/* Typeform Embed */}
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-xl shadow-2xl overflow-hidden border-4 border-brand-red"
          >
            <div 
              data-tf-live="01K1EFESYN60904FFVQ0J638S8"
              className="w-full"
              style={{ height: '500px' }}
            ></div>
          </motion.div>
        </div>
      </section>

      {/* Footer Info */}
      <section className="py-12 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Contact Info</h3>
              <p className="text-gray-400">info@stealthrev.co</p>
              <p className="text-gray-400">(786) 509-9198</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Office</h3>
              <p className="text-gray-400">163 NE 24th Street</p>
              <p className="text-gray-400">Miami, FL 33137</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Response Time</h3>
              <p className="text-gray-400">Within 24 hours</p>
              <p className="text-gray-400">Monday - Friday</p>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}

export default ApplyPage 