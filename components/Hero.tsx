'use client';

import { motion } from 'framer-motion';
import { Phone, MapPin, Calendar } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import BookingLedger from './BookingLedger';

export default function Hero() {
  const [isLedgerOpen, setIsLedgerOpen] = useState(false);

  return (
    <>
      <BookingLedger isOpen={isLedgerOpen} onClose={() => setIsLedgerOpen(false)} />
      <section
        id="home"
        className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-28 pb-24 md:pb-12"
      >
        {/* Video Background Container */}
        <div className="absolute inset-0 w-full h-full">
          {/* Hospital Video Background */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/Video_Generation_Request_Denied.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Darker overlay for better text readability on mobile */}
          <div className="absolute inset-0 bg-black/40 md:bg-black/10" />
        </div>

        {/* Content */}
        <div className="container mx-auto px-6 md:px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl mx-auto"
          >
            {/* Logo - Optimized for mobile */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                type: 'spring',
                stiffness: 200,
                delay: 0.1
              }}
              className="mb-6 md:mb-8 flex justify-center"
            >
              <Image
                src="/A-R-Hospital-logobg-300x300.png"
                alt="AR Hospital Logo"
                width={120}
                height={120}
                className="object-contain drop-shadow-2xl w-[100px] h-[100px] md:w-[160px] md:h-[160px]"
                sizes="(max-width: 768px) 100px, 160px"
                loading="eager"
                priority
              />
            </motion.div>

            {/* Mobile-first short tagline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-3xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4 px-4 leading-tight"
              style={{
                color: '#ffffff',
                textShadow: '0 2px 8px rgba(0, 0, 0, 0.8)',
              }}
            >
              AR Hospital, Mysuru
            </motion.h1>

            {/* Short, clear subtitle */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-lg md:text-2xl font-medium mb-8 md:mb-10 px-4 text-white"
              style={{
                textShadow: '0 2px 6px rgba(0, 0, 0, 0.8)',
              }}
            >
              24/7 Emergency & Specialist Care
            </motion.p>

            {/* Primary Action Buttons - Large tap targets for mobile */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col gap-4 justify-center items-stretch px-4 max-w-md mx-auto w-full"
            >
              {/* Call Now - Largest, most important action */}
              <motion.a
                href="tel:08213501645"
                whileTap={{ scale: 0.97 }}
                className="group relative px-8 py-5 rounded-2xl text-lg font-bold text-white transition-all duration-300 flex items-center justify-center gap-3 min-h-[64px] shadow-xl active:shadow-2xl"
                style={{
                  background: '#2563eb',
                }}
              >
                <Phone className="w-6 h-6" strokeWidth={2.5} />
                <span className="text-xl">Call Now</span>
              </motion.a>

              {/* Two-column for Directions and Book */}
              <div className="grid grid-cols-2 gap-4">
                <motion.a
                  href="https://maps.google.com/?q=AR+Hospital+Mysuru"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileTap={{ scale: 0.97 }}
                  className="px-6 py-4 rounded-2xl text-base font-semibold text-white transition-all flex flex-col items-center justify-center gap-2 min-h-[64px] shadow-lg active:shadow-xl"
                  style={{
                    background: '#059669',
                  }}
                >
                  <MapPin className="w-5 h-5" strokeWidth={2.5} />
                  <span>Directions</span>
                </motion.a>

                <motion.button
                  onClick={() => setIsLedgerOpen(true)}
                  whileTap={{ scale: 0.97 }}
                  className="px-6 py-4 rounded-2xl text-base font-semibold text-white transition-all flex flex-col items-center justify-center gap-2 min-h-[64px] shadow-lg active:shadow-xl"
                  style={{
                    background: '#0891b2',
                  }}
                >
                  <Calendar className="w-5 h-5" strokeWidth={2.5} />
                  <span>Book</span>
                </motion.button>
              </div>
            </motion.div>

            {/* Scroll indicator - hidden on mobile for cleaner look */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-12 hidden md:block"
            >
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="w-6 h-10 border-2 border-white/60 rounded-full flex items-start justify-center p-2"
              >
                <div className="w-1 h-2 bg-white/80 rounded-full" />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent" />
      </section>
    </>
  );
}
