'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Trail {
  id: number;
  x: number;
  y: number;
}

export default function BloodCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [trails, setTrails] = useState<Trail[]>([]);
  const [isMobile, setIsMobile] = useState(false);
  const trailIdRef = useRef(0);

  // Detect mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    // Don't run cursor on mobile
    if (isMobile) return;

    let lastX = 0;
    let lastY = 0;
    let lastTrailTime = 0;
    let rafId: number;

    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;
      
      // Use RAF for smooth, optimized updates
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
      
      rafId = requestAnimationFrame(() => {
        setPosition({ x, y });

        // Optimized trail creation - less frequent, better performance
        const distance = Math.sqrt((x - lastX) ** 2 + (y - lastY) ** 2);
        const now = Date.now();
        
        // Throttle trail creation: min distance 10px, min time 60ms
        if (distance > 10 && now - lastTrailTime > 60) {
          const newId = trailIdRef.current++;
          lastTrailTime = now;
          
          setTrails(prev => {
            const newTrail = { id: newId, x, y };
            // Reduced from 15 to 8 trails for better performance
            const updated = [...prev, newTrail];
            return updated.slice(-8);
          });
        }

        lastX = x;
        lastY = y;
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
    };
  }, [isMobile]);

  // Auto-remove old trails - optimized interval
  useEffect(() => {
    if (trails.length > 0) {
      const timeout = setTimeout(() => {
        setTrails(prev => prev.slice(1));
      }, 120);
      return () => clearTimeout(timeout);
    }
  }, [trails]);

  // Don't render cursor on mobile - AFTER all hooks
  if (isMobile) return null;

  return (
    <>
      {/* OPTIMIZED RED NEON TRAIL - NO LAG */}
      <AnimatePresence mode="popLayout">
        {trails.map((trail, index) => {
          const opacity = 0.7 - (index / trails.length) * 0.5;
          const size = 24 - (index * 2);
          
          return (
            <motion.div
              key={trail.id}
              initial={{ opacity: 0.7, scale: 1 }}
              animate={{ 
                opacity: 0,
                scale: 1.6,
                y: 18,
              }}
              exit={{ opacity: 0 }}
              transition={{ 
                duration: 0.5,
                ease: "easeOut"
              }}
              className="fixed pointer-events-none z-[9999]"
              style={{
                left: trail.x,
                top: trail.y,
                transform: 'translate(-50%, -50%)',
                willChange: 'transform, opacity',
              }}
            >
              {/* Optimized Red Neon Effect */}
              <div 
                className="rounded-full"
                style={{
                  width: `${size}px`,
                  height: `${size}px`,
                  background: `radial-gradient(circle, 
                    rgba(255, 50, 50, ${opacity * 0.65}) 0%,
                    rgba(255, 30, 30, ${opacity * 0.45}) 25%,
                    rgba(220, 38, 38, ${opacity * 0.3}) 50%,
                    transparent 80%)`,
                  boxShadow: `
                    0 0 ${size * 0.5}px rgba(255, 50, 50, ${opacity * 0.4}),
                    0 0 ${size * 0.8}px rgba(220, 38, 38, ${opacity * 0.25})
                  `,
                  filter: `blur(3px)`,
                }}
              />
            </motion.div>
          );
        })}
      </AnimatePresence>

      {/* Main Blood Drop Cursor */}
      <motion.div
        className="fixed pointer-events-none z-[10000]"
        style={{
          left: position.x,
          top: position.y,
          transform: 'translate(-50%, -10px)',
        }}
        animate={{
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        {/* Blood Drop SVG */}
        <svg width="28" height="32" viewBox="0 0 28 32" fill="none" className="drop-shadow-lg">
          {/* Glow Effect */}
          <defs>
            <filter id="glow">
              <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          
          {/* Main Blood Drop */}
          <path 
            d="M14 3C14 3 6 11 6 17C6 21.4183 9.58172 25 14 25C18.4183 25 22 21.4183 22 17C22 11 14 3 14 3Z" 
            fill="#DC2626"
            stroke="#991B1B"
            strokeWidth="1.5"
            filter="url(#glow)"
          />
          
          {/* 3D Highlight */}
          <ellipse 
            cx="11" 
            cy="13" 
            rx="3" 
            ry="4.5" 
            fill="white" 
            opacity="0.35"
          />
          
          {/* Bottom shine */}
          <ellipse 
            cx="14" 
            cy="23" 
            rx="4" 
            ry="1" 
            fill="white" 
            opacity="0.15"
          />
        </svg>
      </motion.div>
    </>
  );
}
