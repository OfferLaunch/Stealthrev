'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, ChevronDown } from 'lucide-react'
import Image from 'next/image'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false)

  const navigation = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Solutions', href: '#solutions', hasDropdown: true },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-dark-950/95 backdrop-blur-md border-b border-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 1, x: 0 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-shrink-0"
          >
            <a href="#home" className="flex items-center">
              <Image
                src="/images/stealthrev white.png"
                alt="Stealth Rev - Premium Pay Per Lead Solutions Logo"
                width={120}
                height={32}
                className="h-8 w-auto"
                priority
              />
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.hasDropdown ? (
                  <div
                    className="flex items-center space-x-1 text-gray-300 hover:text-primary-500 cursor-pointer transition-colors"
                    onMouseEnter={() => setIsSolutionsOpen(true)}
                    onMouseLeave={() => setIsSolutionsOpen(false)}
                  >
                    <span>{item.name}</span>
                    <ChevronDown className="w-4 h-4" />
                    {isSolutionsOpen && (
                      <motion.div
                        initial={{ opacity: 1, y: 0 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute top-full left-0 mt-2 w-48 bg-dark-900 rounded-lg shadow-lg border border-dark-700 py-2"
                      >
                        <a href="#cloud" className="block px-4 py-2 text-sm text-gray-300 hover:bg-dark-800">
                          Cloud Solutions
                        </a>
                        <a href="#ai" className="block px-4 py-2 text-sm text-gray-300 hover:bg-dark-800">
                          AI & Machine Learning
                        </a>
                        <a href="#security" className="block px-4 py-2 text-sm text-gray-300 hover:bg-dark-800">
                          Cybersecurity
                        </a>
                      </motion.div>
                    )}
                  </div>
                ) : (
                  <a
                    href={item.href}
                    className="text-gray-300 hover:text-primary-500 transition-colors"
                  >
                    {item.name}
                  </a>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 1, x: 0 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden md:block"
          >
            <a href="#contact" className="btn-primary">
              Get Started
            </a>
          </motion.div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-primary-500 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 1, height: 'auto' }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 bg-dark-900 border-t border-dark-700">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-primary-500 hover:bg-dark-800 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4">
                <a href="#contact" className="btn-primary w-full text-center block">
                  Get Started
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </header>
  )
}

export default Header 