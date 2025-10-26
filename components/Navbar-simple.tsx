'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';

type NavSection = 'default' | 'home' | 'about' | 'services' | 'contact';

export default function Navbar() {
  // ALL HOOKS AT THE TOP - ALWAYS RUN IN SAME ORDER
  const [activeSection, setActiveSection] = useState<NavSection>('default');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState('');
  const ambulanceControls = useAnimation();
  
  const homeRef = useRef<HTMLButtonElement>(null);
  const aboutRef = useRef<HTMLButtonElement>(null);
  const servicesRef = useRef<HTMLButtonElement>(null);
  const contactRef = useRef<HTMLButtonElement>(null);
  const defaultRef = useRef<HTMLDivElement>(null);

  // HOOK 1: Update time every second
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

  // HOOK 2: Ambulance position animation
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

  // HOOK 3: Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      
      const homeSection = document.getElementById('home');
      const aboutSection = document.getElementById('about');
      const servicesSection = document.getElementById('services');
      const contactSection = document.getElementById('contact');

      if (contactSection && scrollPosition >= contactSection.offsetTop) {
        setActiveSection('contact');
      } else if (servicesSection && scrollPosition >= servicesSection.offsetTop) {
        setActiveSection('services');
      } else if (aboutSection && scrollPosition >= aboutSection.offsetTop) {
        setActiveSection('about');
      } else if (homeSection && scrollPosition >= homeSection.offsetTop && scrollPosition > 50) {
        setActiveSection('home');
      } else {
        setActiveSection('default');
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', () => {
      const position = getAmbulancePosition(activeSection);
      ambulanceControls.set({ x: position });
    });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [activeSection, ambulanceControls]);

  const navLinks = [
    { name: 'Home', href: '#home', ref: homeRef, section: 'home' as NavSection },
    { name: 'About', href: '#about', ref: aboutRef, section: 'about' as NavSection },
    { name: 'Services', href: '#services', ref: servicesRef, section: 'services' as NavSection },
    { name: 'Contact', href: '#contact', ref: contactRef, section: 'contact' as NavSection },
  ];

  const getAmbulancePosition = (section: NavSection) => {
    let targetElement: HTMLElement | null = null;
    
    switch (section) {
      case 'home':
        targetElement = homeRef.current;
        break;
      case 'about':
        targetElement = aboutRef.current;
        break;
      case 'services':
        targetElement = servicesRef.current;
        break;
      case 'contact':
        targetElement = contactRef.current;
        break;
      default:
        targetElement = defaultRef.current;
    }

    if (targetElement) {
      const rect = targetElement.getBoundingClientRect();
      const navbarRect = targetElement.closest('nav')?.getBoundingClientRect();
      if (navbarRect) {
        return rect.left - navbarRect.left;
      }
    }
    return 0;
  };

  const handleNavClick = (section: NavSection) => {
    setActiveSection(section);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Emergency Beacon at Browser Top Edge */}
      <motion.div
        animate={ambulanceControls}
        initial={{ x: 0 }}
        className="fixed top-0 left-0 w-[120px] h-[3px] flex items-start justify-center pointer-events-none z-[60]"
      >
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

      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-xl border-b border-emerald-500/20">
        <div className="hidden lg:block">
          <div className="relative">
            <div className="container mx-auto px-4">
              <div className="flex items-center h-20 gap-0">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="flex items-center gap-3 pr-6 flex-shrink-0"
                >
                  <div className="relative w-12 h-12">
                    <Image
                      src="/A-R-Hospital-logobg-300x300.png"
                      alt="AR Hospital Logo"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h1 className="text-xl font-bold text-white leading-tight whitespace-nowrap">AR Hospital</h1>
                    <p className="text-emerald-400 text-xs whitespace-nowrap">Healing Hands</p>
                  </div>
                </motion.div>

                <div
                  ref={defaultRef}
                  className="w-[120px] h-20 flex items-center justify-center border-x border-emerald-500/20 flex-shrink-0"
                />

                {navLinks.map((link) => (
                  <button
                    key={link.name}
                    ref={link.ref}
                    onClick={() => handleNavClick(link.section)}
                    className={'w-[120px] h-20 flex items-center justify-center border-r border-emerald-500/20 font-medium transition-all flex-shrink-0 ' + (
                      activeSection === link.section
                        ? 'text-emerald-400 bg-emerald-500/10'
                        : 'text-gray-300 hover:text-emerald-400 hover:bg-emerald-500/5'
                    )}
                  >
                    <a href={link.href} className="w-full h-full flex items-center justify-center">
                      {link.name}
                    </a>
                  </button>
                ))}

                {/* ECG Clock with Live Time */}
                <div className="w-[180px] h-20 border-r border-emerald-500/20 flex items-center justify-center flex-shrink-0 relative overflow-hidden bg-black/30">
                  <div className="relative z-10 text-center">
                    <div className="text-emerald-400 text-sm font-mono font-bold tracking-wider drop-shadow-[0_0_8px_rgba(16,185,129,0.6)]">
                      {currentTime || '00:00:00'}
                    </div>
                    <div className="text-gray-400 text-xs mt-0.5">Live Time</div>
                  </div>
                  
                  {/* ECG Wave Animation */}
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
                </div>

                <div className="ml-auto pl-6">
                  <motion.a
                    href="https://wa.me/919008994827"
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-full font-medium hover:shadow-lg hover:shadow-emerald-500/50 transition-all whitespace-nowrap"
                  >
                    Book Appointment
                  </motion.a>
                </div>
              </div>
            </div>

            {/* Ambulance WITHOUT Beacon (beacon is at top edge now) */}
            <motion.div
              animate={ambulanceControls}
              initial={{ x: 0 }}
              className="absolute top-0 left-0 w-[120px] h-20 flex items-center justify-center pointer-events-none z-10"
            >
              <div className="relative w-20 h-14">
                <Image
                  src="/rbg removed ambulance.png"
                  alt="Emergency Ambulance"
                  fill
                  className="object-contain brightness-110 drop-shadow-[0_0_15px_rgba(16,185,129,0.6)]"
                  unoptimized
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className="lg:hidden">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center gap-2">
                <div className="relative w-10 h-10">
                  <Image
                    src="/A-R-Hospital-logobg-300x300.png"
                    alt="AR Hospital Logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <div>
                  <h1 className="text-lg font-bold text-white">AR Hospital</h1>
                  <p className="text-emerald-400 text-xs">Healing Hands</p>
                </div>
              </div>

              {/* Time Display on Mobile */}
              <div className="text-emerald-400 text-sm font-mono font-bold mr-4">
                {currentTime || '00:00:00'}
              </div>

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-white hover:text-emerald-400 transition-colors"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <span className="text-2xl">×</span> : <span className="text-xl">☰</span>}
              </button>
            </div>
          </div>

          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="border-t border-emerald-500/20 bg-black/98"
            >
              <div className="container mx-auto px-4 py-4 space-y-3">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => handleNavClick(link.section)}
                    className={'block py-3 px-4 rounded-lg font-medium transition-colors ' + (
                      activeSection === link.section
                        ? 'text-emerald-400 bg-emerald-500/10'
                        : 'text-gray-300 hover:text-emerald-400 hover:bg-emerald-500/5'
                    )}
                  >
                    {link.name}
                  </a>
                ))}
                <a
                  href="https://wa.me/919008994827"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-6 py-3 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-full font-medium text-center"
                >
                  Book Appointment
                </a>
              </div>
            </motion.div>
          )}
        </div>
      </nav>
    </>
  );
}
