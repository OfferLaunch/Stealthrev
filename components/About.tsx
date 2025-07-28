'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Award, TrendingUp, Users, Globe } from 'lucide-react'

const About = () => {
     const stats = [
     { icon: Award, value: '8+', label: 'Years Experience' },
     { icon: TrendingUp, value: '500%', label: 'Average ROI' },
     { icon: Users, value: '2K+', label: 'Active Clients' },
     { icon: Globe, value: '25+', label: 'Industries Served' },
   ]

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
               Stealth Rev has revolutionized the pay-per-lead industry with our performance-based model. 
               We've helped thousands of businesses scale their sales pipelines by delivering 
               high-quality, verified leads that convert into customers.
             </p>
             <p className="text-lg text-gray-300 mb-8 leading-relaxed">
               Our advanced targeting and verification systems ensure you only pay for leads 
               that meet your exact criteria and have genuine interest in your products or services.
             </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 1, y: 0 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                                     <div className="w-12 h-12 bg-primary-900/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                     <stat.icon className="w-6 h-6 text-primary-500" />
                   </div>
                   <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                   <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
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