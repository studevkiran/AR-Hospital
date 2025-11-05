'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Phone, Mail, MapPin, MessageCircle, Clock, Facebook, Youtube } from 'lucide-react';

export default function Footer() {
  const quickLinks = [
    { name: 'About AR Hospital', href: '#about' },
    { name: 'Our Services', href: '#services' },
    { name: 'Our Doctors', href: '#doctors' },
    { name: 'Book Appointment', href: 'https://wa.me/919008994827' },
  ];

  return (
    <footer className="bg-white relative overflow-hidden border-t border-emerald-200">
      {/* Background Effects */}
      <div className="absolute top-0 left-1/4 w-48 h-48 md:w-[300px] md:h-[300px] bg-emerald-500/5 rounded-full blur-3xl z-0" />
      <div className="absolute bottom-0 right-1/4 w-48 h-48 md:w-[300px] md:h-[300px] bg-teal-500/5 rounded-full blur-3xl z-0" />

      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16 relative z-10">
        {/* Main Content - Centered with better spacing */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 mb-8 md:mb-12">
            {/* About Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-3 mb-4 md:mb-6">
                <div className="relative w-10 h-10 md:w-12 md:h-12">
                  <Image
                    src="/A-R-Hospital-logobg-300x300.png"
                    alt="AR Hospital Logo"
                    fill
                    sizes="(max-width: 768px) 40px, 48px"
                    className="object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold" style={{ color: '#00d66f' }}>AR Hospital</h3>
                  <p className="text-xs md:text-sm" style={{ color: '#00ff88' }}>Healing Hands</p>
                </div>
              </div>
              
              <p className="text-sm md:text-base text-gray-700 mb-4 md:mb-6 leading-relaxed">
                5+ years of dedicated service providing world-class healthcare with compassion, 
                innovation, and integrity at the core of everything we do.
              </p>
            </motion.div>

            {/* Quick Links - Right Aligned */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="md:text-right"
            >
              <h4 className="text-lg md:text-xl font-bold text-emerald-700 mb-4 md:mb-6 flex items-center md:justify-end gap-2">
                <span className="text-emerald-600 text-xl md:text-2xl">+</span>
                Quick Links
              </h4>
              <ul className="space-y-2 md:space-y-3 mb-6 md:mb-8">
                {quickLinks.map((link, index) => (
                  <li key={index} className="flex md:justify-end">
                    <a
                      href={link.href}
                      className="text-sm md:text-base text-gray-700 hover:text-emerald-700 transition-colors flex items-center gap-2 group min-h-[44px] md:min-h-0"
                    >
                      {link.name}
                      <span className="w-1 h-1 rounded-full bg-emerald-600 group-hover:w-2 transition-all" />
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-emerald-200 pt-6 md:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 text-xs md:text-sm text-center md:text-left">
              © {new Date().getFullYear()} AR Hospital, Mysuru. All rights reserved.
            </p>
            <div className="flex items-center gap-4 md:gap-6 text-xs md:text-sm flex-wrap justify-center">
              <a href="#" className="text-gray-600 hover:text-emerald-700 transition-colors min-h-[44px] md:min-h-0 flex items-center">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-600 hover:text-emerald-700 transition-colors min-h-[44px] md:min-h-0 flex items-center">
                Terms of Service
              </a>
              <a href="#" className="text-gray-600 hover:text-emerald-700 transition-colors min-h-[44px] md:min-h-0 flex items-center">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
