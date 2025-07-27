'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
         <section id="contact" className="py-20 bg-dark-950">
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
             Ready to{' '}
             <span className="text-gradient">Scale</span>
           </h2>
           <p className="text-xl text-gray-300 max-w-3xl mx-auto">
             Let's discuss how Stealth Rev can help fill your sales pipeline with 
             high-quality leads that convert into customers.
           </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                                   <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                   Full Name
                 </label>
                 <input
                   type="text"
                   id="name"
                   name="name"
                   value={formData.name}
                   onChange={handleChange}
                   className="w-full px-4 py-3 border border-dark-700 bg-dark-900 text-white rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                   placeholder="John Doe"
                   required
                 />
               </div>
               <div>
                 <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                   Email Address
                 </label>
                 <input
                   type="email"
                   id="email"
                   name="email"
                   value={formData.email}
                   onChange={handleChange}
                   className="w-full px-4 py-3 border border-dark-700 bg-dark-900 text-white rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                   placeholder="john@company.com"
                   required
                 />
               </div>
             </div>
             <div>
               <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                 Company
               </label>
               <input
                 type="text"
                 id="company"
                 name="company"
                 value={formData.company}
                 onChange={handleChange}
                 className="w-full px-4 py-3 border border-dark-700 bg-dark-900 text-white rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                 placeholder="Your Company"
               />
             </div>
             <div>
               <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                 Message
               </label>
               <textarea
                 id="message"
                 name="message"
                 value={formData.message}
                 onChange={handleChange}
                 rows={6}
                 className="w-full px-4 py-3 border border-dark-700 bg-dark-900 text-white rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors resize-none"
                 placeholder="Tell us about your project..."
                 required
               />
              </div>
              <button
                type="submit"
                className="btn-primary w-full group"
              >
                Send Message
                <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
                                      <div>
               <h3 className="text-2xl font-bold text-white mb-6">
                 Get in Touch
               </h3>
               <p className="text-gray-300 mb-8 leading-relaxed">
                 Ready to start generating high-quality leads? Our team of experts 
                 is here to help you build a scalable sales pipeline with verified prospects.
               </p>
             </div>

            <div className="space-y-6">
                             <div className="flex items-start">
                 <div className="w-12 h-12 bg-primary-900/20 rounded-lg flex items-center justify-center mr-4">
                   <Mail className="w-6 h-6 text-primary-500" />
                 </div>
                 <div>
                   <h4 className="font-semibold text-white mb-1">Email</h4>
                   <p className="text-gray-400">hello@stealthrev.com</p>
                 </div>
               </div>

               <div className="flex items-start">
                 <div className="w-12 h-12 bg-primary-900/20 rounded-lg flex items-center justify-center mr-4">
                   <Phone className="w-6 h-6 text-primary-500" />
                 </div>
                 <div>
                   <h4 className="font-semibold text-white mb-1">Phone</h4>
                   <p className="text-gray-400">+1 (555) 123-4567</p>
                 </div>
               </div>

               <div className="flex items-start">
                 <div className="w-12 h-12 bg-primary-900/20 rounded-lg flex items-center justify-center mr-4">
                   <MapPin className="w-6 h-6 text-primary-500" />
                 </div>
                 <div>
                   <h4 className="font-semibold text-white mb-1">Office</h4>
                   <p className="text-gray-400">
                     123 Innovation Drive<br />
                     San Francisco, CA 94105
                   </p>
                 </div>
               </div>
            </div>

                         {/* CTA Card */}
             <div className="bg-gradient-to-br from-primary-600 to-red-600 rounded-xl p-8 text-white">
               <h4 className="text-xl font-bold mb-4">Ready to Get Started?</h4>
               <p className="mb-6 leading-relaxed">
                 Schedule a free consultation and discover how 
                 we can fill your sales pipeline with qualified leads.
               </p>
               <button className="bg-white text-primary-600 font-semibold py-3 px-6 rounded-lg hover:bg-gray-50 transition-colors">
                 Schedule Consultation
               </button>
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact 