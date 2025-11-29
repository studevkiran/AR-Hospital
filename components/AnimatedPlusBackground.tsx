'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function AnimatedPlusBackground() {
  const [plusSymbols, setPlusSymbols] = useState<Array<{
    id: number;
    left: string;
    delay: number;
    duration: number;
    size: number;
    rotation: number;
  }>>([]);

  useEffect(() => {
    // Enhanced plus symbols: BIGGER, MORE VIBRANT, with rotation
    const symbols = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: Math.random() * 8,
      duration: 15 + Math.random() * 10, // 15-25 seconds
      size: 40 + Math.random() * 60, // 40-100px (much bigger)
      rotation: Math.random() * 360, // Random rotation
    }));
    setPlusSymbols(symbols);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-10">
      {plusSymbols.map((symbol) => (
        <motion.div
          key={symbol.id}
          initial={{
            y: '110vh',
            opacity: 0,
            scale: 0.5,
            rotate: symbol.rotation
          }}
          animate={{
            y: '-110vh',
            opacity: [0, 0.4, 0.7, 0.4, 0],
            scale: [0.5, 1, 1.2, 1, 0.5],
            rotate: [symbol.rotation, symbol.rotation + 180, symbol.rotation + 360],
          }}
          transition={{
            duration: symbol.duration,
            delay: symbol.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{
            position: 'absolute',
            left: symbol.left,
            fontSize: `${symbol.size}px`,
            fontSize: `${symbol.size}px`,
            color: '#00C853', // Vibrant Medical Green
            fontWeight: 'bold',
            textShadow: `
              0 0 20px rgba(0, 200, 83, 0.9),
              0 0 40px rgba(0, 200, 83, 0.6),
              0 0 60px rgba(0, 200, 83, 0.4),
              0 0 80px rgba(0, 200, 83, 0.2)
            `,
            filter: 'drop-shadow(0 0 20px rgba(0, 200, 83, 0.8))',
            willChange: 'transform, opacity',
            zIndex: 10, // Visible but behind high-priority elements
          }}
          className="font-bold"
        >
          +
        </motion.div>
      ))}
    </div>
  );
}
