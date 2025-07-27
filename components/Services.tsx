'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Cloud, Brain, Shield, Database, Globe, Zap } from 'lucide-react'

const Services = () => {
     const services = [
     {
       icon: Cloud,
       title: 'B2B Lead Generation',
       description: 'High-quality business leads for B2B companies and service providers.',
       features: ['Pre-qualified prospects', 'Custom targeting', 'Real-time delivery'],
       color: 'from-red-500 to-red-600',
     },
     {
       icon: Brain,
       title: 'AI-Powered Targeting',
       description: 'Advanced AI algorithms to identify and reach your ideal prospects.',
       features: ['Behavioral analysis', 'Predictive scoring', 'Smart segmentation'],
       color: 'from-purple-500 to-purple-600',
     },
     {
       icon: Shield,
       title: 'Lead Verification',
       description: 'Multi-step verification process to ensure lead quality and authenticity.',
       features: ['Phone verification', 'Email validation', 'Intent confirmation'],
       color: 'from-red-500 to-red-600',
     },
     {
       icon: Database,
       title: 'CRM Integration',
       description: 'Seamless integration with your existing CRM and marketing tools.',
       features: ['Salesforce ready', 'HubSpot compatible', 'Custom webhooks'],
       color: 'from-green-500 to-green-600',
     },
     {
       icon: Globe,
       title: 'Multi-Channel Campaigns',
       description: 'Reach prospects across multiple channels for maximum exposure.',
       features: ['Email campaigns', 'Social media', 'Display advertising'],
       color: 'from-indigo-500 to-indigo-600',
     },
     {
       icon: Zap,
       title: 'Performance Analytics',
       description: 'Comprehensive reporting and analytics to track your ROI.',
       features: ['Conversion tracking', 'ROI analysis', 'Campaign optimization'],
       color: 'from-yellow-500 to-orange-500',
     },
   ]

  return (
         <section id="services" className="py-20 bg-dark-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
                                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
             Our{' '}
             <span className="text-gradient">Lead Solutions</span>
           </h2>
           <p className="text-xl text-gray-300 max-w-3xl mx-auto">
             Comprehensive lead generation solutions designed to fill your sales pipeline 
             with high-quality prospects that convert into customers.
           </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card p-8 group hover:shadow-2xl border border-gray-100"
            >
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>
                             <h3 className="text-xl font-semibold text-white mb-4">
                 {service.title}
               </h3>
               <p className="text-gray-300 mb-6 leading-relaxed">
                 {service.description}
               </p>
               <ul className="space-y-2">
                 {service.features.map((feature) => (
                   <li key={feature} className="flex items-center text-sm text-gray-400">
                     <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-3"></div>
                     {feature}
                   </li>
                 ))}
               </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
                     <a href="#contact" className="btn-primary">
             Get Your Custom Quote
           </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Services 