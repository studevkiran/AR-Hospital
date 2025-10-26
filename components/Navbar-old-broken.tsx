'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';

type NavSection = 'default' | 'home' | 'about' | 'services' | 'contact';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState<NavSection>('default');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState('');
  const ambulanceControls = useAnimation();

  const homeRef = useRef<HTMLButtonElement>(null);
  const aboutRef = useRef<HTMLButtonElement>(null);
  const servicesRef = useRef<HTMLButtonElement>(null);
  const doctorsRef = useRef<HTMLButtonElement>(null);
  const contactRef = useRef<HTMLButtonElement>(null);
  const defaultRef = useRef<HTMLDivElement>(null);

  const navLinks = [
    { name: 'Home', href: '#home', ref: homeRef, section: 'home' as NavSection },
    { name: 'About', href: '#about', ref: aboutRef, section: 'about' as NavSection },
    { name: 'Services', href: '#services', ref: servicesRef, section: 'services' as NavSection },
    { name: 'Doctors', href: '#doctors', ref: doctorsRef, section: 'doctors' as NavSection },
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
      const doctorsSection = document.getElementById('doctors');
      const contactSection = document.getElementById('contact');

      if (homeSection) {
        const homeHeight = homeSection.offsetHeight;
        const homeScrollThreshold = homeHeight * 0.1;

        if (scrollY >= homeScrollThreshold) {
          if (contactSection && scrollY >= contactSection.offsetTop - 100) {
            if (activeSection !== 'contact') setActiveSection('contact');
          } else if (doctorsSection && scrollY >= doctorsSection.offsetTop - 100) {
            if (activeSection !== 'doctors') setActiveSection('doctors');
          } else if (servicesSection && scrollY >= servicesSection.offsetTop - 100) {
            if (activeSection !== 'services') setActiveSection('services');
          } else if (aboutSection && scrollY >= aboutSection.offsetTop - 100) {
            if (activeSection !== 'about') setActiveSection('about');
          } else {
            if (activeSection !== 'home') setActiveSection('home');
          }
        } else {
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
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-xl border-b border-emerald-500/20">
      {/* Desktop Navigation */}
      <div className="hidden lg:flex items-center h-20 gap-0 relative">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex items-center gap-3 px-6 pr-6 border-r border-emerald-500/20 bg-black/50"
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
            <p className="text-emerald-400 text-xs font-medium whitespace-nowrap">Healing Hands</p>
          </div>
        </motion.div>

        <div ref={defaultRef} className="w-[120px] h-20 border-r border-emerald-500/20 flex items-center justify-center" />

        {navLinks.map((link) => (
          <button
            key={link.section}
            ref={link.ref}
            onClick={() => handleNavClick(link.section, link.href)}
            className="w-[120px] h-20 border-r border-emerald-500/20 flex items-center justify-center relative group transition-all duration-300 hover:bg-emerald-500/10"
          >
            <span className={`font-medium transition-all duration-300 ${
              activeSection === link.section 
                ? 'text-emerald-400 text-lg' 
                : 'text-gray-300 group-hover:text-white'
            }`}>
              {link.name}
            </span>
          </button>
        ))}

        <div className="ml-auto px-6 flex-shrink-0">
          <a
            href="https://wa.me/919008994827"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-full font-medium shadow-lg hover:shadow-emerald-500/50 hover:scale-105 transition-all whitespace-nowrap inline-flex items-center gap-2"
          >
            <span>📱</span>
            <span>Book Appointment</span>
          </a>
        </div>

        {/* Ambulance Animation */}
        <motion.div
          animate={ambulanceControls}
          initial={{ x: 0 }}
          className="absolute top-0 left-0 w-[120px] h-20 flex items-center justify-center pointer-events-none z-10"
        >
          <div className="relative w-28 h-20 flex items-center justify-center">
            <Image
              src="/rbg removed ambulance.png"
              alt="Ambulance"
              width={112}
              height={80}
              className="object-contain drop-shadow-[0_0_15px_rgba(16,185,129,0.6)] brightness-110"
              priority
            />
          </div>
        </motion.div>
      </div>

      {/* Mobile Navigation */}
      <div className="lg:hidden bg-black/95 backdrop-blur-xl">
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
                <p className="text-emerald-400 text-xs whitespace-nowrap">Healing Hands</p>
              </div>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-white hover:text-emerald-400 transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <span className="text-2xl">✕</span>
              ) : (
                <span className="text-2xl">☰</span>
              )}
            </button>
          </div>
          
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
                  onClick={() => handleNavClick(link.section, link.href)}
                  className={`py-3 px-4 rounded-lg text-center font-medium transition-all ${
                    activeSection === link.section
                      ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                      : 'text-gray-300 hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </a>
              ))}
              
              <a
                href="https://wa.me/919008994827"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 py-3 px-4 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-lg text-center font-medium shadow-lg hover:shadow-emerald-500/50 transition-all"
              >
                📱 Book Appointment
              </a>
            </motion.div>
          )}
        </div>
      </div>
    </nav>
  );
}
