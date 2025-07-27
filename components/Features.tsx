'use client'

import React from 'react'
import { Shield, Zap, Target, TrendingUp, Users, Lock } from 'lucide-react'

const Features = () => {
  const features = [
    {
      icon: Shield,
      title: 'Verified Leads',
      description: 'Every lead is pre-qualified and verified before delivery to ensure quality.',
      gradient: 'from-red-500 to-red-600',
    },
    {
      icon: Zap,
      title: 'Instant Delivery',
      description: 'Leads delivered directly to your CRM in real-time with instant notifications.',
      gradient: 'from-yellow-500 to-orange-500',
    },
    {
      icon: Target,
      title: 'Targeted Campaigns',
      description: 'Reach your exact audience with precision targeting and custom criteria.',
      gradient: 'from-green-500 to-teal-500',
    },
    {
      icon: TrendingUp,
      title: 'Performance Tracking',
      description: 'Real-time analytics and conversion tracking to optimize your ROI.',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: Users,
      title: 'Quality Guarantee',
      description: 'Our quality assurance process ensures only qualified prospects reach you.',
      gradient: 'from-indigo-500 to-purple-500',
    },
    {
      icon: Lock,
      title: 'No Setup Fees',
      description: 'Start immediately with zero upfront costs and pay only for results.',
      gradient: 'from-red-500 to-pink-500',
    },
  ]

  return (
    <section className="py-20 bg-dark-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Why Choose <span className="text-gradient">Pay Per Lead</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our performance-based model ensures you only pay for qualified leads that meet your exact criteria and conversion standards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="card p-8 group hover:shadow-2xl">
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
              <p className="text-gray-300 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <a href="#contact" className="btn-primary">
            Start Getting Leads
          </a>
        </div>
      </div>
    </section>
  )
}

export default Features 