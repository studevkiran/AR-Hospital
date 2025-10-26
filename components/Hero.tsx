'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Phone, MapPin, Heart, Activity } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import BookingLedger from './BookingLedger';

export default function Hero() {
  const [isLedgerOpen, setIsLedgerOpen] = useState(false);

  return (
    <>
      <BookingLedger isOpen={isLedgerOpen} onClose={() => setIsLedgerOpen(false)} />
      <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-32 relative overflow-hidden bg-gradient-to-b from-black via-emerald-950/40 to-black"
    >
      {/* Enhanced lighting with balanced glow effects */}
      <div className="absolute top-10 left-10 w-[400px] h-[400px] bg-gradient-to-br from-emerald-500/20 to-teal-500/15 rounded-full blur-3xl z-0 animate-pulse" style={{ animationDuration: '4s' }} />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-gradient-to-br from-emerald-600/15 to-cyan-500/12 rounded-full blur-3xl z-0 animate-pulse" style={{ animationDuration: '5s' }} />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-br from-emerald-400/12 to-teal-400/10 rounded-full blur-3xl z-0" />
      
      {/* Additional accent lights */}
      <div className="absolute top-1/4 right-1/4 w-[200px] h-[200px] bg-emerald-400/8 rounded-full blur-2xl z-0 animate-pulse" style={{ animationDuration: '6s' }} />
      <div className="absolute bottom-1/4 left-1/4 w-[200px] h-[200px] bg-teal-400/8 rounded-full blur-2xl z-0 animate-pulse" style={{ animationDuration: '7s' }} />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center max-w-5xl mx-auto"
        >
          {/* Logo with Original AR Hospital Logo */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
            className="mb-8 flex justify-center"
          >
            <div className="w-32 h-32 bg-white/10 backdrop-blur-xl rounded-3xl flex items-center justify-center shadow-2xl border-2 border-emerald-400/30 relative overflow-hidden group hover:scale-110 transition-transform duration-300 p-2">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/20 to-transparent group-hover:from-emerald-400/40 transition-all duration-300" />
              <Image
                src="/A-R-Hospital-logobg-300x300.png"
                alt="AR Hospital Logo"
                width={120}
                height={120}
                className="object-contain relative z-10"
                loading="eager"
                priority
              />
            </div>
          </motion.div>

          {/* Main Title with professional styling */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.8, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ 
              delay: 0.4,
              type: "spring",
              stiffness: 100,
              damping: 15
            }}
            className="text-6xl md:text-7xl lg:text-8xl font-black mb-6 relative"
            style={{ 
              fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
              letterSpacing: '-0.02em',
            }}
          >
            <span 
              className="bg-gradient-to-r from-yellow-400 via-yellow-200 to-yellow-400 bg-clip-text text-transparent"
              style={{
                filter: 'drop-shadow(0 0 40px rgba(250, 204, 21, 0.8)) drop-shadow(0 0 70px rgba(250, 204, 21, 0.6))',
                textShadow: `
                  0 0 80px rgba(250, 204, 21, 0.7),
                  0 0 120px rgba(250, 204, 21, 0.5),
                  0 3px 15px rgba(0, 0, 0, 0.2)
                `,
                WebkitTextStroke: '1.5px rgba(250, 204, 21, 0.2)',
              }}
            >
              AR Hospital
            </span>
          </motion.h1>

          {/* Tagline with elegant styling */}
          <motion.p
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ 
              delay: 0.7,
              type: "spring",
              stiffness: 80
            }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-16 relative"
            style={{ 
              fontFamily: "'Georgia', 'Times New Roman', serif",
              fontStyle: 'italic',
              letterSpacing: '0.02em',
            }}
          >
            <span
              className="bg-gradient-to-r from-emerald-300 via-white to-emerald-300 bg-clip-text text-transparent"
              style={{
                filter: 'drop-shadow(0 0 40px rgba(16, 185, 129, 0.6)) drop-shadow(0 0 60px rgba(16, 185, 129, 0.4))',
                textShadow: `
                  0 0 80px rgba(16, 185, 129, 0.5),
                  0 0 100px rgba(16, 185, 129, 0.3),
                  0 3px 15px rgba(0, 0, 0, 0.3)
                `,
                WebkitTextStroke: '1px rgba(16, 185, 129, 0.1)',
              }}
            >
              Healing Hands
            </span>
          </motion.p>

          {/* CTA Question */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.0 }}
            className="text-xl md:text-2xl text-white mb-8 font-medium drop-shadow-lg"
          >
            Need Medical Assistance?
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          >
            {/* 3D BLUE Button - Book Appointment with ALTERNATING GLOW */}
            <motion.button
              onClick={() => setIsLedgerOpen(true)}
              animate={{
                opacity: [1, 0.4, 1],
                scale: [1, 0.98, 1]
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              whileHover={{ 
                scale: 1.05,
                opacity: 1,
                transition: { duration: 0.2 }
              }}
              className="group relative px-10 py-5 rounded-full text-lg font-bold text-white overflow-hidden transform active:scale-95 transition-transform duration-300 flex items-center gap-3"
              style={{
                background: 'linear-gradient(145deg, #3b82f6 0%, #2563eb 100%)',
                boxShadow: `
                  0 8px 16px rgba(59, 130, 246, 0.6),
                  0 4px 8px rgba(59, 130, 246, 0.5),
                  inset 0 -2px 8px rgba(0, 0, 0, 0.2),
                  inset 0 2px 4px rgba(255, 255, 255, 0.3),
                  0 0 40px rgba(59, 130, 246, 0.6)
                `,
              }}
            >
              <span className="relative z-10 drop-shadow-lg">Book Appointment</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10 drop-shadow-lg" />
            </motion.button>

            {/* 3D RED Button - Emergency with OPPOSITE BLINKING */}
            <motion.a
              href="tel:08213501645"
              animate={{
                opacity: [0.4, 1, 0.4],
                scale: [0.98, 1, 0.98]
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              whileHover={{ 
                scale: 1.05,
                opacity: 1,
                transition: { duration: 0.2 }
              }}
              className="group relative px-10 py-5 rounded-full text-lg font-bold text-white overflow-hidden transform active:scale-95 transition-transform duration-300 flex items-center gap-3"
              style={{
                background: 'linear-gradient(145deg, #ef4444 0%, #dc2626 100%)',
                boxShadow: `
                  0 8px 16px rgba(239, 68, 68, 0.6),
                  0 4px 8px rgba(239, 68, 68, 0.5),
                  inset 0 -2px 8px rgba(0, 0, 0, 0.2),
                  inset 0 2px 4px rgba(255, 255, 255, 0.3),
                  0 0 50px rgba(239, 68, 68, 0.7)
                `,
              }}
            >
              <Phone className="w-5 h-5 drop-shadow-lg" />
              <span className="relative z-10 drop-shadow-lg">Emergency: 0821-3501645</span>
            </motion.a>
          </motion.div>

        </motion.div>
      </div>
    </section>
    </>
  );
}
