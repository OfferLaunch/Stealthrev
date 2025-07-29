'use client'

import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send } from 'lucide-react'

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const formRef = useRef<HTMLFormElement>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    const formData = new FormData(e.currentTarget)
    
    try {
      const response = await fetch('https://formspree.io/f/xdkdzjap', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json',
        },
      })

      console.log('Response status:', response.status)
      console.log('Response ok:', response.ok)
      console.log('Response statusText:', response.statusText)

      // Formspree returns 200 for successful submissions
      if (response.status === 200 || response.status === 302 || response.ok) {
        setSubmitStatus('success')
        if (formRef.current) {
          formRef.current.reset()
        }
      } else {
        console.error('Form submission failed:', response.status, response.statusText)
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
         <section id="contact" className="py-20 bg-dark-950">
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
            initial={{ opacity: 1, x: 0 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                                   <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                   Full Name
                 </label>
                 <input
                   type="text"
                   id="name"
                   name="name"
                   className="w-full px-4 py-3 border border-dark-700 bg-dark-900 text-white rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                   placeholder="John Doe"
                   required
                   disabled={isSubmitting}
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
                   className="w-full px-4 py-3 border border-dark-700 bg-dark-900 text-white rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                   placeholder="john@company.com"
                   required
                   disabled={isSubmitting}
                 />
               </div>
             </div>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               <div>
                 <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                   Company
                 </label>
                 <input
                   type="text"
                   id="company"
                   name="company"
                   className="w-full px-4 py-3 border border-dark-700 bg-dark-900 text-white rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                   placeholder="Your Company"
                   disabled={isSubmitting}
                 />
               </div>
               <div>
                 <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                   Phone Number
                 </label>
                 <input
                   type="tel"
                   id="phone"
                   name="phone"
                   className="w-full px-4 py-3 border border-dark-700 bg-dark-900 text-white rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                   placeholder="(555) 123-4567"
                   disabled={isSubmitting}
                 />
               </div>
             </div>
             <div>
               <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                 Message
               </label>
               <textarea
                 id="message"
                 name="message"
                 rows={6}
                 className="w-full px-4 py-3 border border-dark-700 bg-dark-900 text-white rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors resize-none"
                 placeholder="Tell us about your project..."
                 required
                 disabled={isSubmitting}
               />
              </div>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="bg-green-900/20 border border-green-600 text-green-400 px-4 py-3 rounded-lg">
                  Thank you! Your message has been sent successfully. We'll get back to you soon.
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="bg-red-900/20 border border-red-600 text-red-400 px-4 py-3 rounded-lg">
                  Sorry, there was an error sending your message. Please try again or contact us directly at info@stealthrev.co
                </div>
              )}

              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-primary-600 hover:bg-primary-700 disabled:bg-gray-600 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 flex items-center disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 1, x: 0 }}
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
                   <p className="text-gray-400">info@stealthrev.co</p>
                 </div>
               </div>

               <div className="flex items-start">
                 <div className="w-12 h-12 bg-primary-900/20 rounded-lg flex items-center justify-center mr-4">
                   <Phone className="w-6 h-6 text-primary-500" />
                 </div>
                 <div>
                   <h4 className="font-semibold text-white mb-1">Phone</h4>
                   <p className="text-gray-400">(786) 509-9198</p>
                 </div>
               </div>

               <div className="flex items-start">
                 <div className="w-12 h-12 bg-primary-900/20 rounded-lg flex items-center justify-center mr-4">
                   <MapPin className="w-6 h-6 text-primary-500" />
                 </div>
                 <div>
                   <h4 className="font-semibold text-white mb-1">Office</h4>
                   <p className="text-gray-400">
                     163 NE 24th Street<br />
                     Miami, FL 33137
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