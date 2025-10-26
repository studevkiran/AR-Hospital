'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function ScrollSpyAmbulance() {
  const [activeSection, setActiveSection] = useState('home');
  
  const sections = ['home', 'about', 'services', 'testimonials', 'contact'];
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getAmbulancePosition = () => {
    const positions: { [key: string]: string } = {
      home: '8%',
      about: '28%',
      services: '48%',
      testimonials: '68%',
      contact: '88%',
    };
    return positions[activeSection] || '8%';
  };

  return (
    <motion.div
      className="fixed right-0 z-[100] pointer-events-none"
      style={{
        top: '1rem', // Align with navbar - navbar top bar is ~40px, main nav is ~72px, total ~112px
        width: '200px',
        height: '80px' // Full navbar height coverage
      }}
      animate={{
        left: getAmbulancePosition(),
      }}
      transition={{
        type: 'spring',
        stiffness: 100,
        damping: 20,
        mass: 0.8,
      }}
    >
      {/* Visual Container with Border */}
      <div className="relative w-full h-full bg-white/20 backdrop-blur-sm rounded-2xl p-3 border-4 border-emerald-500 shadow-2xl shadow-emerald-500/50">
        {/* Ambulance Image */}
        <div className="relative w-full h-full flex items-center justify-center">
          <Image
            src="/rbg removed ambulance.png"
            alt="AR Hospital Emergency Ambulance"
            width={180}
            height={90}
            className="object-contain"
            priority
          />
          
          {/* Red Beacon Removed as per user request */}
        </div>
        
        {/* Section Label */}
        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap">
          <div className="bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full text-white text-xs font-medium">
            {activeSection.charAt(0).toUpperCase() + activeSection.slice(1)}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
