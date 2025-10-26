'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function AnimatedAmbulance() {
  return (
    <motion.div
      initial={{ x: -300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
      className="fixed top-16 right-8 z-[60] pointer-events-none"
    >
      <div className="relative w-[180px] h-[180px]">
        {/* Ambulance Image - will be updated when you upload bg-removed version */}
        <Image
          src="/Gemini_Generated_Image_rpwfryrpwfryrpwf.png"
          alt="AR Hospital Emergency Ambulance"
          width={180}
          height={180}
          className="object-contain drop-shadow-2xl"
          priority
        />
        
        {/* Emergency Light Animation */}
        <motion.div
          className="absolute top-[12%] left-1/2 -translate-x-1/2 w-3 h-3 bg-red-500 rounded-full shadow-lg shadow-red-500/50"
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
  );
}
