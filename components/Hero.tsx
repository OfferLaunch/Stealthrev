'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Play, CheckCircle } from 'lucide-react'

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center gradient-bg overflow-hidden">
             {/* Background Elements */}
       <div className="absolute inset-0 overflow-hidden">
         <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-900 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float"></div>
         <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-red-900 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float" style={{ animationDelay: '2s' }}></div>
         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary-800 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: '4s' }}></div>
       </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="text-center">
          {/* Badge */}
                     <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.5 }}
             className="inline-flex items-center px-4 py-2 rounded-full bg-primary-900/20 border border-primary-600 text-primary-400 text-sm font-medium mb-8"
           >
             <CheckCircle className="w-4 h-4 mr-2" />
             Verified Leads • Pay Per Performance
           </motion.div>

          {/* Main Heading */}
                     <motion.h1
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.7, delay: 0.2 }}
             className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
           >
             Quality Leads{' '}
             <span className="text-gradient">Delivered</span>
           </motion.h1>

          {/* Subtitle */}
                                <motion.p
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.7, delay: 0.4 }}
             className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
           >
             Get high-quality, verified leads delivered directly to your CRM. 
             Pay only for qualified prospects that match your exact criteria.
           </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
                         <a href="#contact" className="btn-primary group">
               Get Started Today
               <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
             </a>
             <button className="btn-secondary group">
               <Play className="w-5 h-5 mr-2" />
               See How It Works
             </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
                         <div className="text-center">
               <div className="text-3xl md:text-4xl font-bold text-primary-500 mb-2">10K+</div>
               <div className="text-gray-400">Leads Delivered</div>
             </div>
             <div className="text-center">
               <div className="text-3xl md:text-4xl font-bold text-primary-500 mb-2">95%</div>
               <div className="text-gray-400">Lead Quality Score</div>
             </div>
             <div className="text-center">
               <div className="text-3xl md:text-4xl font-bold text-primary-500 mb-2">$0</div>
               <div className="text-gray-400">Setup Fees</div>
             </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
                 <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center">
           <motion.div
             animate={{ y: [0, 12, 0] }}
             transition={{ duration: 1.5, repeat: Infinity }}
             className="w-1 h-3 bg-gray-400 rounded-full mt-2"
           />
         </div>
      </motion.div>
    </section>
  )
}

export default Hero 