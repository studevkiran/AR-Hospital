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
    <footer className="bg-gradient-to-b from-green-50 to-white relative overflow-hidden border-t border-green-200">
      {/* Background Effects */}
      <div className="absolute top-0 left-1/4 w-[300px] h-[300px] bg-emerald-500/5 rounded-full blur-3xl z-0" />
      <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-amber-500/5 rounded-full blur-3xl z-0" />

      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* Main Content - Centered with better spacing */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-12">
            {/* About Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="relative w-12 h-12">
                  <Image
                    src="/A-R-Hospital-logobg-300x300.png"
                    alt="AR Hospital Logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#008A3A]">AR Hospital</h3>
                  <p className="text-amber-600 text-sm">Healing Hands</p>
                </div>
              </div>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
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
              className="text-right"
            >
              <h4 className="text-xl font-bold text-[#008A3A] mb-6 flex items-center justify-end gap-2">
                <span className="text-amber-600 text-2xl">+</span>
                Quick Links
              </h4>
              <ul className="space-y-3 mb-8">
                {quickLinks.map((link, index) => (
                  <li key={index} className="flex justify-end">
                    <a
                      href={link.href}
                      className="text-gray-700 hover:text-[#008A3A] transition-colors flex items-center gap-2 group"
                    >
                      {link.name}
                      <span className="w-1 h-1 rounded-full bg-[#008A3A] group-hover:w-2 transition-all" />
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-green-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 text-sm text-center md:text-left">
              © {new Date().getFullYear()} AR Hospital, Mysuru. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm">
              <a href="#" className="text-gray-600 hover:text-[#008A3A] transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-600 hover:text-[#008A3A] transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-600 hover:text-[#008A3A] transition-colors">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
