'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Target, Users, TrendingUp, Shield, Zap, BarChart3 } from 'lucide-react'

const Services = () => {
     const services = [
     {
       title: 'B2B Lead Generation',
      description: 'High-quality business-to-business leads delivered directly to your CRM with full contact information and qualification criteria.',
      icon: Target,
      color: 'from-blue-600 to-blue-700',
      features: ['Pre-qualified prospects', 'Full contact details', 'Industry targeting', 'Real-time delivery']
     },
     {
      title: 'Appointment Setting',
      description: 'We schedule qualified meetings with decision-makers who are ready to discuss your products or services.',
      icon: Users,
      color: 'from-green-600 to-green-700',
      features: ['Calendar integration', 'Meeting confirmations', 'Follow-up scheduling', 'CRM sync']
    },
    {
      title: 'Lead Nurturing',
      description: 'Multi-touch campaigns that keep prospects engaged until they\'re ready to convert into customers.',
      icon: TrendingUp,
      color: 'from-purple-600 to-purple-700',
      features: ['Email sequences', 'Content marketing', 'Social engagement', 'Conversion tracking']
    },
    {
       title: 'Lead Verification',
      description: 'Advanced verification systems ensure every lead meets your exact criteria and has genuine interest.',
      icon: Shield,
      color: 'from-red-600 to-red-700',
      features: ['Phone verification', 'Email validation', 'Company verification', 'Interest confirmation']
     },
     {
      title: 'Performance Tracking',
      description: 'Real-time analytics and reporting to track lead quality, conversion rates, and ROI metrics.',
      icon: BarChart3,
      color: 'from-orange-600 to-orange-700',
      features: ['Conversion tracking', 'ROI reporting', 'Lead scoring', 'Performance dashboards']
     },
     {
      title: 'Custom Solutions',
      description: 'Tailored lead generation strategies designed specifically for your industry and target market.',
       icon: Zap,
      color: 'from-indigo-600 to-indigo-700',
      features: ['Industry expertise', 'Custom targeting', 'Dedicated team', 'Flexible pricing']
    }
   ]

  return (
         <section id="services" className="py-20 bg-dark-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 1, y: 0 }}
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
              initial={{ opacity: 1, y: 0 }}
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
          initial={{ opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <a href="/apply" className="btn-primary">
            Get Your Custom Quote
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Services 