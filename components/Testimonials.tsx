'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const Testimonials = () => {
     const testimonials = [
     {
       name: 'Sarah Johnson',
       position: 'Sales Director',
       company: 'TechCorp Global',
       content: 'Stealth Rev transformed our lead generation. Their pay-per-lead model increased our conversion rate by 300% while reducing our cost per acquisition.',
       rating: 5,
       avatar: 'SJ',
     },
     {
       name: 'Michael Chen',
       position: 'Marketing Manager',
       company: 'InnovateTech Solutions',
       content: 'The quality of leads from Stealth Rev is exceptional. We only pay for qualified prospects that actually convert into customers.',
       rating: 5,
       avatar: 'MC',
     },
     {
       name: 'Emily Rodriguez',
       position: 'VP of Sales',
       company: 'Future Systems Inc',
       content: 'Outstanding lead quality and real-time delivery. Stealth Rev has been instrumental in scaling our sales pipeline.',
       rating: 5,
       avatar: 'ER',
     },
   ]

  return (
         <section className="py-20 bg-dark-900">
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
             What Our{' '}
             <span className="text-gradient">Clients Say</span>
           </h2>
           <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Trusted by Fortune 500 companies worldwide. Here's what our clients 
            have to say about their experience with Stealth Rev.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="card p-8 relative"
            >
                             {/* Quote Icon */}
               <div className="absolute top-6 right-6 text-primary-600">
                 <Quote className="w-8 h-8" />
               </div>

              {/* Rating */}
              <div className="flex items-center mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

                             {/* Content */}
               <p className="text-gray-300 mb-6 leading-relaxed">
                 "{testimonial.content}"
               </p>

               {/* Author */}
               <div className="flex items-center">
                 <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-red-600 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                   {testimonial.avatar}
                 </div>
                 <div>
                   <div className="font-semibold text-white">{testimonial.name}</div>
                   <div className="text-sm text-gray-400">{testimonial.position}</div>
                   <div className="text-sm text-primary-500">{testimonial.company}</div>
                 </div>
               </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8 text-center"
        >
                     <div>
             <div className="text-3xl font-bold text-primary-500 mb-2">98%</div>
             <div className="text-gray-400">Client Satisfaction</div>
           </div>
           <div>
             <div className="text-3xl font-bold text-primary-500 mb-2">50K+</div>
             <div className="text-gray-400">Leads Delivered</div>
           </div>
           <div>
             <div className="text-3xl font-bold text-primary-500 mb-2">8+</div>
             <div className="text-gray-400">Years Experience</div>
           </div>
           <div>
             <div className="text-3xl font-bold text-primary-500 mb-2">95%</div>
             <div className="text-gray-400">Lead Quality Score</div>
           </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials 