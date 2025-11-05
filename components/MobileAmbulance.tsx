'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function MobileAmbulance() {
  return (
    <div className="lg:hidden fixed bottom-20 left-0 right-0 z-30 pointer-events-none">
      <div className="container mx-auto px-4">
        <motion.div
          animate={{
            x: [0, 30, 0, -30, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="relative w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 mx-auto"
        >
          <Image
            src="/rbg removed ambulance.png"
            alt="24/7 Ambulance Service"
            fill
            sizes="(max-width: 640px) 112px, (max-width: 768px) 128px, 144px"
            className="object-contain drop-shadow-2xl brightness-110"
            unoptimized
          />
        </motion.div>
      </div>
    </div>
  );
}

