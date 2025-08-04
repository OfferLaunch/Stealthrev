'use client'

import React from 'react'
import { motion } from 'framer-motion'


const About = () => {

  return (
         <section id="about" className="py-20 bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 1, x: 0 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
                         <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
               Leading the Future of{' '}
               <span className="text-gradient">Lead Generation</span>
             </h2>
             <p className="text-lg text-gray-300 mb-8 leading-relaxed">
               The traditional marketing agency model is dead. Instead of paying large retainers to agencies that can't get results, our team ONLY gets paid for the leads that we drive.
             </p>
          </motion.div>

          {/* Image/Visual */}
          <motion.div
            initial={{ opacity: 1, x: 0 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
                         <div className="relative bg-gradient-to-br from-primary-600 to-red-600 rounded-2xl p-8 text-white">
               <div className="absolute inset-0 bg-black/20 rounded-2xl"></div>
              <div className="relative z-10">
                                 <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                 <p className="text-lg mb-6 leading-relaxed">
                   To revolutionize lead generation by delivering high-quality, verified prospects 
                   that drive real business growth through our performance-based model.
                 </p>
                 <div className="space-y-4">
                   <div className="flex items-center">
                     <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                     <span>Pre-qualified and verified leads</span>
                   </div>
                   <div className="flex items-center">
                     <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                     <span>Performance-based pricing model</span>
                   </div>
                   <div className="flex items-center">
                     <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                     <span>Real-time delivery and tracking</span>
                   </div>
                 </div>
              </div>
            </div>
            
                         {/* Floating Elements */}
             <div className="absolute -top-4 -right-4 w-20 h-20 bg-red-900 rounded-full opacity-60 animate-float"></div>
             <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary-900 rounded-full opacity-60 animate-float" style={{ animationDelay: '2s' }}></div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About 