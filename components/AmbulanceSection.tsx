'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Phone, MapPin, Clock, AlertCircle } from 'lucide-react';

export default function AmbulanceSection() {
  const [activeButton, setActiveButton] = useState<number | null>(null);

  const buttons = [
    {
      id: 1,
      icon: Phone,
      title: 'Emergency Call',
      description: 'Call our 24/7 emergency hotline',
      action: 'tel:08213501645',
      color: 'from-red-500 to-red-600',
      content: 'Our emergency response team is available 24/7. Call now for immediate assistance.',
    },
    {
      id: 2,
      icon: MapPin,
      title: 'Track Ambulance',
      description: 'Real-time ambulance tracking',
      action: '#',
      color: 'from-emerald-500 to-emerald-600',
      content: 'Track your ambulance in real-time with our GPS-enabled tracking system.',
    },
    {
      id: 3,
      icon: Clock,
      title: 'Average Response',
      description: 'Quick emergency response time',
      action: '#',
      color: 'from-blue-500 to-blue-600',
      content: 'Average response time: 8-12 minutes. We prioritize your safety and health.',
    },
    {
      id: 4,
      icon: AlertCircle,
      title: 'Emergency Tips',
      description: 'First aid & emergency guidance',
      action: '#',
      color: 'from-orange-500 to-orange-600',
      content: 'Learn essential first aid tips while waiting for the ambulance to arrive.',
    },
  ];

  return (
    <section id="ambulance" className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #10b981 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4">
            <span className="text-6xl font-bold text-emerald-400 drop-shadow-lg">+</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
            Emergency Ambulance
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            24/7 emergency medical services with rapid response and state-of-the-art ambulances
          </p>
        </motion.div>

        {/* Main Container Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <div className="glass-effect rounded-3xl p-8 md:p-12 border-2 border-emerald-500/20 shadow-2xl shadow-emerald-500/10">
            {/* Ambulance Animation Display */}
            <div className="mb-12 relative">
              <div className="relative h-[200px] md:h-[250px] overflow-hidden rounded-2xl bg-gradient-to-r from-emerald-950/30 to-teal-950/30 border border-emerald-500/20">
                {/* Animated Ambulance */}
                <motion.div
                  animate={{
                    x: ['0%', '100%'],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear",
                    repeatType: "loop"
                  }}
                  className="absolute top-1/2 -translate-y-1/2 w-[150px] md:w-[180px]"
                  style={{ left: '-180px' }}
                >
                  <div className="relative w-full">
                    <Image
                      src="/rbg removed ambulance.png"
                      alt="Emergency Ambulance"
                      width={180}
                      height={135}
                      className="object-contain drop-shadow-2xl brightness-110"
                      unoptimized
                    />
                    
                    {/* Emergency Light Animation */}
                    <motion.div
                      className="absolute top-[15%] left-1/2 -translate-x-1/2 w-3 h-3 bg-red-500 rounded-full shadow-lg shadow-red-500/50"
                      animate={{
                        opacity: [1, 0.3, 1],
                        scale: [1, 1.4, 1],
                      }}
                      transition={{
                        duration: 0.6,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  </div>
                </motion.div>

                {/* Road Lines */}
                <div className="absolute bottom-[45%] left-0 right-0 h-1 border-b-2 border-dashed border-emerald-400/30" />
                
                {/* Status Text Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <AnimatePresence mode="wait">
                    {activeButton !== null ? (
                      <motion.div
                        key={activeButton}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        className="glass-effect px-6 py-3 rounded-full border border-emerald-500/30"
                      >
                        <p className="text-white font-semibold">
                          {buttons[activeButton - 1].content}
                        </p>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="default"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="text-center"
                      >
                        <p className="text-emerald-400 text-lg font-semibold mb-2">🚨 Ready for Emergency Response 🚨</p>
                        <p className="text-gray-300 text-sm">Click a button below for more information</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>

            {/* Four Interactive Buttons */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {buttons.map((button) => {
                const Icon = button.icon;
                const isActive = activeButton === button.id;
                
                return (
                  <motion.button
                    key={button.id}
                    onClick={() => {
                      if (button.action.startsWith('tel:')) {
                        window.location.href = button.action;
                      } else {
                        setActiveButton(isActive ? null : button.id);
                      }
                    }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className={`relative group text-left transition-all duration-300 ${
                      isActive ? 'ring-2 ring-emerald-400' : ''
                    }`}
                  >
                    <div className={`glass-effect rounded-2xl p-6 border-2 transition-all duration-300 h-full ${
                      isActive 
                        ? 'border-emerald-400 bg-emerald-500/10' 
                        : 'border-emerald-500/20 hover:border-emerald-500/40'
                    }`}>
                      {/* Icon with Gradient Background */}
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${button.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                        <Icon className="w-7 h-7 text-white" />
                      </div>

                      {/* Content */}
                      <h3 className="text-white font-bold text-lg mb-2">
                        {button.title}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {button.description}
                      </p>

                      {/* Active Indicator */}
                      {isActive && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="absolute -top-2 -right-2 w-6 h-6 bg-emerald-400 rounded-full flex items-center justify-center shadow-lg shadow-emerald-400/50"
                        >
                          <span className="text-black text-xs font-bold">✓</span>
                        </motion.div>
                      )}

                      {/* Hover Glow */}
                      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${button.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 blur-xl`} />
                    </div>
                  </motion.button>
                );
              })}
            </div>

            {/* Emergency Contact Banner */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-8 text-center"
            >
              <div className="glass-effect rounded-2xl p-6 border border-emerald-500/20 inline-block">
                <p className="text-gray-300 mb-2">Emergency Hotline</p>
                <a 
                  href="tel:08213501645"
                  className="text-3xl md:text-4xl font-bold text-emerald-400 hover:text-emerald-300 transition-colors"
                >
                  0821-3501645
                </a>
                <p className="text-gray-400 text-sm mt-2">Available 24/7 • Average Response: 8-12 min</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
