'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function AnimatedStarsBackground() {
  const [plusSymbols, setPlusSymbols] = useState<Array<{
    id: number;
    left: string;
    size: number;
    duration: number;
    delay: number;
    drift: number;
    opacity: number;
  }>>([]);

  useEffect(() => {
    // Generate 40 green medical plus symbols with random properties
    const generatedPlus = Array.from({ length: 40 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      size: 16 + Math.random() * 24, // 16-40px for better visibility
      duration: 3 + Math.random() * 9, // 3-12 seconds
      delay: Math.random() * 5, // 0-5s delay
      drift: (Math.random() - 0.5) * 100, // -50px to +50px horizontal drift
      opacity: 0.4 + Math.random() * 0.5, // 0.4-0.9 opacity
    }));
    setPlusSymbols(generatedPlus);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {plusSymbols.map((plus) => (
        <motion.div
          key={plus.id}
          initial={{ 
            y: '100vh', 
            x: 0,
            opacity: 0,
            rotate: 0,
          }}
          animate={{
            y: '-100px',
            x: [0, plus.drift, 0], // Sine wave horizontal drift
            opacity: [0, plus.opacity, plus.opacity, 0],
            rotate: 360, // Rotate as it rises
          }}
          transition={{
            duration: plus.duration,
            delay: plus.delay,
            repeat: Infinity,
            ease: 'easeOut',
            times: [0, 0.1, 0.9, 1], // Fade in at start, fade out at end
          }}
          style={{
            position: 'absolute',
            left: plus.left,
            fontSize: `${plus.size}px`,
            color: '#24C824', // Bright medical green
            fontWeight: 'bold',
            textShadow: '0 0 10px rgba(36, 200, 36, 0.8), 0 0 20px rgba(36, 200, 36, 0.4)',
            willChange: 'transform, opacity',
          }}
        >
          +
        </motion.div>
      ))}
    </div>
  );
}
