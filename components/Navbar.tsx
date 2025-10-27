'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';

type NavSection = 'default' | 'home' | 'about' | 'services' | 'contact';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState<NavSection>('default');
  const [initialX, setInitialX] = useState(0);
  const [currentTime, setCurrentTime] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const ambulanceControls = useAnimation();

  // Update time every second
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, '0');
      const minutes = now.getMinutes().toString().padStart(2, '0');
      const seconds = now.getSeconds().toString().padStart(2, '0');
      setCurrentTime(`${hours}:${minutes}:${seconds}`);
    };
    
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const homeRef = useRef<HTMLButtonElement>(null);
  const aboutRef = useRef<HTMLButtonElement>(null);
  const servicesRef = useRef<HTMLButtonElement>(null);
  const contactRef = useRef<HTMLButtonElement>(null);
  const defaultRef = useRef<HTMLDivElement>(null);

  const navLinks = [
    { name: 'Home', href: '#home', ref: homeRef, section: 'home' as NavSection },
    { name: 'About', href: '#about', ref: aboutRef, section: 'about' as NavSection },
    { name: 'Services', href: '#services', ref: servicesRef, section: 'services' as NavSection },
    { name: 'Contact', href: '#contact', ref: contactRef, section: 'contact' as NavSection },
  ];

  const getAmbulancePosition = (section: NavSection) => {
    let targetRef;
    
    if (section === 'default') {
      targetRef = defaultRef;
    } else {
      const link = navLinks.find(l => l.section === section);
      targetRef = link?.ref;
    }

    if (targetRef?.current) {
      const navContainer = targetRef.current.parentElement;
      if (navContainer) {
        const containerRect = navContainer.getBoundingClientRect();
        const targetRect = targetRef.current.getBoundingClientRect();
        return targetRect.left - containerRect.left;
      }
    }
    
    return 0;
  };

  useEffect(() => {
    const initPosition = () => {
      const position = getAmbulancePosition('default');
      setInitialX(position);
      ambulanceControls.set({ x: position });
    };

    initPosition();
    const timer = setTimeout(initPosition, 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const position = getAmbulancePosition(activeSection);
    ambulanceControls.start({
      x: position,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 20,
        mass: 1,
      },
    });
  }, [activeSection, ambulanceControls]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      
      const homeSection = document.getElementById('home');
      const aboutSection = document.getElementById('about');
      const servicesSection = document.getElementById('services');
      const contactSection = document.getElementById('contact');

      // Move to Home with just 10% scroll of home section height
      if (homeSection) {
        const homeHeight = homeSection.offsetHeight;
        const homeScrollThreshold = homeHeight * 0.1; // 10% of home section

        if (scrollY >= homeScrollThreshold) {
          // Check which section we're in
          if (contactSection && scrollY >= contactSection.offsetTop - 100) {
            if (activeSection !== 'contact') setActiveSection('contact');
          } else if (servicesSection && scrollY >= servicesSection.offsetTop - 100) {
            if (activeSection !== 'services') setActiveSection('services');
          } else if (aboutSection && scrollY >= aboutSection.offsetTop - 100) {
            if (activeSection !== 'about') setActiveSection('about');
          } else {
            // Still in home section (after 10% scroll)
            if (activeSection !== 'home') setActiveSection('home');
          }
        } else {
          // Less than 10% scroll - stay in default position
          if (activeSection !== 'default') setActiveSection('default');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [activeSection]);

  const handleNavClick = (section: NavSection, href: string) => {
    setActiveSection(section);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Emergency Beacon at Browser Top Edge - Reflection Effect */}
      <motion.div
        animate={ambulanceControls}
        initial={{ x: initialX }}
        className="fixed top-0 left-0 w-[120px] h-[3px] flex items-start justify-center pointer-events-none z-[60]"
      >
        {/* Main Beacon Light */}
        <motion.div
          className="w-8 h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent rounded-full shadow-[0_0_20px_rgba(239,68,68,1),0_0_40px_rgba(239,68,68,0.6)]"
          animate={{
            opacity: [1, 0.3, 1],
            scaleX: [1, 1.5, 1],
          }}
          transition={{
            duration: 0.6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        {/* Reflection Glow */}
        <motion.div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-8 bg-gradient-to-b from-red-500/40 via-red-500/10 to-transparent blur-md"
          animate={{
            opacity: [0.8, 0.2, 0.8],
            scaleY: [1, 1.3, 1],
          }}
          transition={{
            duration: 0.6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>

      <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-[#008A3A] to-[#14532D] backdrop-blur-xl border-b border-green-200/30 shadow-lg">
        <div className="hidden lg:flex items-center h-20 gap-0 relative">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center gap-3 px-6 pr-6 border-r border-yellow-300/20 bg-green-900/50"
          >
            <div className="relative w-12 h-12">
              <Image
                src="/A-R-Hospital-logobg-300x300.png"
                alt="AR Hospital Logo"
                width={48}
                height={48}
                className="rounded-lg"
              />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white tracking-tight whitespace-nowrap">AR Hospital</h1>
              <p className="text-[#FFD700] text-xs font-medium whitespace-nowrap">Healing Hands</p>
            </div>
          </motion.div>

          <div ref={defaultRef} className="w-[120px] h-20 border-r border-yellow-300/20 flex items-center justify-center" />

          {navLinks.map((link) => (
            <button
              key={link.section}
              ref={link.ref}
              onClick={() => handleNavClick(link.section, link.href)}
              className="w-[120px] h-20 border-r border-yellow-300/20 flex items-center justify-center relative group transition-all duration-300 hover:bg-yellow-500/10"
            >
              <span className={`font-medium transition-all duration-300 ${
                activeSection === link.section 
                  ? 'text-[#FFD700] text-lg' 
                  : 'text-white group-hover:text-[#FFD700]'
              }`}>
                {link.name}
              </span>
            </button>
          ))}

        {/* ECG Clock - Real Time Display */}
        <div className="w-[180px] h-20 border-r border-yellow-300/20 flex items-center justify-center flex-shrink-0 relative overflow-hidden bg-[#14532D]/70">
          <div className="relative z-10 text-center">
            <div className="text-[#FFD700] text-sm font-mono font-bold tracking-wider drop-shadow-[0_0_8px_rgba(255,215,0,0.8)]">
              {currentTime}
            </div>
            <div className="text-green-100 text-xs mt-0.5">Live Time</div>
          </div>
          
          {/* Animated ECG Wave Background - More Visible & Realistic */}
          <svg className="absolute inset-0 w-full h-full opacity-70" viewBox="0 0 200 80" preserveAspectRatio="xMidYMid meet">
            <defs>
              <filter id="glow">
                <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            {/* Realistic ECG Pattern: P wave, QRS complex, T wave */}
            <motion.path
              d="M0,40 L30,40 L32,38 L34,40 L36,40 L38,45 L40,15 L42,60 L44,40 L46,40 L50,42 L54,40 L200,40"
              stroke="#10b981"
              strokeWidth="2.5"
              fill="none"
              filter="url(#glow)"
              strokeLinecap="round"
              strokeLinejoin="round"
              animate={{ 
                x: [-200, 0]
              }}
              transition={{ 
                x: { duration: 2, repeat: Infinity, ease: "linear" }
              }}
            />
            {/* Second wave for continuous effect */}
            <motion.path
              d="M0,40 L30,40 L32,38 L34,40 L36,40 L38,45 L40,15 L42,60 L44,40 L46,40 L50,42 L54,40 L200,40"
              stroke="#10b981"
              strokeWidth="2.5"
              fill="none"
              filter="url(#glow)"
              strokeLinecap="round"
              strokeLinejoin="round"
              animate={{ 
                x: [0, 200]
              }}
              transition={{ 
                x: { duration: 2, repeat: Infinity, ease: "linear" }
              }}
            />
          </svg>
          
          {/* Pulsing Heartbeat Dot */}
          <motion.div
            className="absolute right-4 top-1/2 -translate-y-1/2 w-2 h-2 bg-[#FFD700] rounded-full shadow-[0_0_8px_rgba(255,215,0,0.9)]"
            animate={{
              scale: [1, 1.8, 1],
              opacity: [1, 0.4, 1]
            }}
            transition={{
              duration: 0.8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        {/* Book Appointment Button - Desktop */}
        <div className="ml-auto px-6 flex-shrink-0">
          <a
            href="https://wa.me/919008994827"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-gradient-to-r from-[#008A3A] to-[#14532D] text-white rounded-full font-medium shadow-lg hover:shadow-green-500/50 hover:scale-105 transition-all whitespace-nowrap inline-flex items-center gap-2"
          >
            <span>📱</span>
            <span>Book Appointment</span>
          </a>
        </div>

        {/* Ambulance Animation - Without Beacon (Beacon moved to top edge) */}
        <motion.div
          animate={ambulanceControls}
          initial={{ x: initialX }}
          className="absolute top-0 left-0 w-[120px] h-20 flex items-center justify-center pointer-events-none z-10"
        >
          <div className="relative w-28 h-20 flex items-center justify-center">
            <Image
              src="/rbg removed ambulance.png"
              alt="Ambulance"
              width={112}
              height={80}
              className="object-contain drop-shadow-[0_0_15px_rgba(16,185,129,0.7)] brightness-110"
              priority
            />
          </div>
        </motion.div>
      </div>

      {/* Mobile Navigation */}
      <div className="lg:hidden bg-gradient-to-r from-[#008A3A] to-[#14532D] backdrop-blur-xl">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10">
                <Image
                  src="/A-R-Hospital-logobg-300x300.png"
                  alt="AR Hospital Logo"
                  width={40}
                  height={40}
                  className="rounded-lg"
                />
              </div>
              <div>
                <h1 className="text-lg font-bold text-white whitespace-nowrap">AR Hospital</h1>
                <p className="text-[#FFD700] text-xs whitespace-nowrap">Healing Hands</p>
              </div>
            </div>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-white hover:text-[#FFD700] transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <span className="text-2xl">✕</span>
              ) : (
                <span className="text-2xl">☰</span>
              )}
            </button>
          </div>
          
          {/* Mobile Menu - Only show when open */}
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-4 flex flex-col gap-2"
            >
              {navLinks.map((link) => (
                <a
                  key={link.section}
                  href={link.href}
                  onClick={() => {
                    setActiveSection(link.section);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`py-3 px-4 rounded-lg text-center font-medium transition-all ${
                    activeSection === link.section
                      ? 'bg-green-500/20 text-[#FFD700] border border-green-500/30'
                      : 'text-white hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </a>
              ))}
              
              {/* Mobile Book Appointment Button */}
              <a
                href="https://wa.me/919008994827"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 py-3 px-4 bg-gradient-to-r from-[#008A3A] to-[#14532D] text-white rounded-lg text-center font-medium shadow-lg hover:shadow-green-500/50 transition-all"
              >
                📱 Book Appointment
              </a>
            </motion.div>
          )}
        </div>
      </div>
    </nav>
    </>
  );
}
