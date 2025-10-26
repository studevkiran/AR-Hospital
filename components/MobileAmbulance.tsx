'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function MobileAmbulance() {
  return (
    <div className="lg:hidden fixed bottom-4 left-0 right-0 z-30 pointer-events-none">
      <div className="container mx-auto px-4">
        <motion.div
          animate={{
            x: [0, 50, 0, -50, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="relative w-32 mx-auto"
        >
          <Image
            src="/rbg removed ambulance.png"
            alt="Ambulance"
            width={128}
            height={96}
            className="object-contain drop-shadow-2xl brightness-110"
            style={{ width: 'auto', height: 'auto', maxWidth: '128px', maxHeight: '96px' }}
            unoptimized
          />
        </motion.div>
      </div>
    </div>
  );
}
