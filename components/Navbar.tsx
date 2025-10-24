'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Phone, Menu, X, MessageCircle } from 'lucide-react'
import Link from 'next/link'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-lg shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="bg-gradient-to-r from-gray-900 to-gray-700 text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4" />
            <span className="font-medium">Emergency: 0821-3501645</span>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <span>Hours: 9 AM - 5 PM</span>
            <Link href="https://wa.me/919008994827" target="_blank" className="flex items-center gap-1 hover:text-green-400 transition-colors">
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-gray-800 to-gray-600 rounded-lg flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-xl">AR</span>
            </div>
            <div>
              <h1 className={`font-bold text-xl ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
                AR Hospital
              </h1>
              <p className={`text-xs ${isScrolled ? 'text-gray-600' : 'text-gray-300'}`}>
                Healing Hands
              </p>
            </div>
          </motion.div>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`font-medium transition-colors relative group ${
                  isScrolled ? 'text-gray-700 hover:text-gray-900' : 'text-white hover:text-gray-200'
                }`}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-gray-700 to-gray-500 group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </div>

          <div className="hidden lg:block">
            <motion.a
              href="https://wa.me/919008994827"
              target="_blank"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-gradient-to-r from-gray-800 to-gray-600 text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all flex items-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              Book Appointment
            </motion.a>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 rounded-lg ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="lg:hidden bg-white/95 backdrop-blur-lg border-t border-gray-200"
        >
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-gray-700 hover:text-gray-900 font-medium py-2"
              >
                {link.name}
              </Link>
            ))}
            <a
              href="https://wa.me/919008994827"
              target="_blank"
              className="px-6 py-3 bg-gradient-to-r from-gray-800 to-gray-600 text-white rounded-full font-medium text-center flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              Book Appointment
            </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  )
}
