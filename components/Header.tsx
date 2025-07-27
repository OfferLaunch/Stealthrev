'use client'

import React, { useState } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'

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
          <div className="flex-shrink-0">
            <a href="#home" className="flex items-center">
              <div className="w-8 h-8 bg-gradient-to-br from-primary-600 to-accent-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">SR</span>
              </div>
              <span className="ml-2 text-xl font-bold text-white">Stealth Rev</span>
            </a>
          </div>

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
                      <div className="absolute top-full left-0 mt-2 w-48 bg-dark-900 rounded-lg shadow-lg border border-dark-700 py-2">
                        <a href="#cloud" className="block px-4 py-2 text-sm text-gray-300 hover:bg-dark-800">
                          Cloud Solutions
                        </a>
                        <a href="#ai" className="block px-4 py-2 text-sm text-gray-300 hover:bg-dark-800">
                          AI & Machine Learning
                        </a>
                        <a href="#security" className="block px-4 py-2 text-sm text-gray-300 hover:bg-dark-800">
                          Cybersecurity
                        </a>
                      </div>
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
          <div className="hidden md:block">
            <a href="#contact" className="btn-primary">
              Get Started
            </a>
          </div>

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
          <div className="md:hidden">
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
          </div>
        )}
      </div>
    </header>
  )
}

export default Header 