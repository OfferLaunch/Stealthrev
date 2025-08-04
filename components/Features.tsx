'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { BarChart3, Globe, TrendingUp, DollarSign } from 'lucide-react'

const Features = () => {
  const features = [
    {
      icon: BarChart3,
      title: 'Track',
      description: 'We\'ve profitably spent over $250M on ads over the last few years',
      gradient: 'from-blue-500 to-blue-600',
    },
    {
      icon: Globe,
      title: 'Omni-Channel',
      description: 'We run ads on Meta, Google, TikTok, LinkedIn, and any other channel you need',
      gradient: 'from-green-500 to-green-600',
    },
    {
      icon: TrendingUp,
      title: 'Performance Tracking',
      description: 'Our proprietary browser side tracking system helps to ensure the quality of our metrics',
      gradient: 'from-purple-500 to-purple-600',
    },
    {
      icon: DollarSign,
      title: 'No Setup Fee',
      description: 'We only charge for the results that we get',
      gradient: 'from-red-500 to-red-600',
    },
  ]

  return (
    <section className="py-20 bg-dark-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16 animate-slide-up"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            We're aligned with you every step of the way:
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our proven track record and comprehensive approach ensure your success in lead generation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card p-8 group hover:shadow-2xl animate-slide-up"
            >
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16 animate-slide-up"
        >
          <a href="/apply" className="btn-primary">
            Start Getting Leads
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Features 