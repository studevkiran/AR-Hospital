'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Quote, Award, Heart, Users } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 relative overflow-hidden bg-gradient-to-b from-white via-teal-50/30 to-white">
      {/* Ambient lighting */}
      <div className="absolute top-20 right-20 w-48 h-48 md:w-[300px] md:h-[300px] bg-emerald-400/8 rounded-full blur-3xl z-0 animate-pulse" style={{ animationDuration: '5s' }} />
      <div className="absolute bottom-20 left-20 w-48 h-48 md:w-[300px] md:h-[300px] bg-teal-400/8 rounded-full blur-3xl z-0 animate-pulse" style={{ animationDuration: '6s' }} />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header - Simple Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12 md:mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 drop-shadow-sm px-4"
            style={{ 
              background: 'linear-gradient(145deg, #00d66f 0%, #00ffaa 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'drop-shadow(0 0 25px rgba(0, 214, 111, 0.7))',
            }}
          >
            About AR Hospital
          </h2>
          <p className="text-base md:text-xl text-gray-700 max-w-2xl mx-auto px-4">
            5+ years of dedicated service, 2500+ patients treated with compassion and excellence
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center mb-12 md:mb-20">
          {/* Chairman's Message */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-3xl p-6 md:p-8 border-2 border-emerald-200 shadow-xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-24 h-24 md:w-32 md:h-32 bg-emerald-400/5 rounded-full blur-2xl" />
            
            {/* Quote Icon */}
            <div className="absolute top-4 left-4 md:top-6 md:left-6 opacity-10">
              <Quote className="w-12 h-12 md:w-16 md:h-16 text-emerald-600" />
            </div>

            <div className="relative z-10">
              <div className="mb-4 md:mb-6">
                <h3 className="text-2xl md:text-3xl font-bold text-emerald-700 mb-2">Chairman's Message</h3>
                <div className="h-1 w-16 md:w-20 bg-gradient-to-r from-emerald-600 to-teal-500 rounded-full" />
              </div>

              <div className="mb-4 md:mb-6">
                <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
                  "It gives me immense pride and profound gratitude to welcome you to AR Hospital, Mysore. 
                  As the Chairman, my vision is to provide world-class healthcare with compassion, innovation, 
                  and integrity at the core of everything we do. At AR Hospital, we believe that every patient 
                  deserves not only the most advanced medical care but also attention, dignity, and respect. 
                  Our team of expert doctors and dedicated staff collaborate across various specialties to 
                  deliver personalized treatment and ensure the highest standards of safety, quality, and comfort."
                </p>
              </div>

              <div className="flex flex-col pt-4 md:pt-6 border-t border-emerald-200">
                <div>
                  <p className="text-emerald-700 font-bold text-lg md:text-xl mb-1">
                    Dr. Madhuram Chowdry <span className="text-amber-600 text-sm md:text-base font-normal">MBBS</span>
                  </p>
                  <p className="text-gray-600 text-xs md:text-sm">Chairman</p>
                  <p className="text-gray-500 text-xs">AR Hospital, Mysuru</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Hospital Desk Photo Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* Main Image */}
            <div className="bg-white rounded-3xl p-3 md:p-4 border-2 border-emerald-200 shadow-xl overflow-hidden group">
              <div className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden">
                {/* Chairman Desk Photo */}
                <Image
                  src="/Chairman's Desk phooto.png"
                  alt="Chairman at AR Hospital Desk"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-3xl p-8 md:p-12 max-w-4xl mx-auto border-2 border-emerald-200 shadow-xl text-center mb-12 md:mb-20"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-emerald-700 mb-4 md:mb-6">Our Mission</h3>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed">
            At AR Hospital, we believe that every patient deserves not only the most advanced medical care 
            but also attention, dignity, and respect. Our mission is to provide comprehensive healthcare 
            with a personal touch, combining modern medical technology with compassionate care.
          </p>
        </motion.div>

        {/* Why Choose Us Section */}
        <div className="space-y-6 md:space-y-8">
          {/* Why Choose Us Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h3 className="text-2xl md:text-4xl font-bold text-emerald-700 mb-2 px-4">Why Choose AR Hospital?</h3>
          </motion.div>

          {/* Three Benefits in Horizontal Row */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            <div className="bg-white rounded-2xl p-6 border-2 border-emerald-200 shadow-xl hover:border-emerald-400 hover:shadow-2xl transition-all">
              <div className="flex flex-col items-center text-center gap-4">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center flex-shrink-0">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h4 className="text-lg md:text-xl font-bold text-emerald-700 mb-2">Compassionate Care</h4>
                  <p className="text-gray-700 text-sm">
                    We treat every patient with dignity, respect, and personalized attention to ensure comfort and trust.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border-2 border-emerald-200 shadow-xl hover:border-emerald-400 hover:shadow-2xl transition-all">
              <div className="flex flex-col items-center text-center gap-4">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center flex-shrink-0">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h4 className="text-lg md:text-xl font-bold text-emerald-700 mb-2">Expert Medical Team</h4>
                  <p className="text-gray-700 text-sm">
                    Our team of experienced doctors and healthcare professionals deliver world-class medical expertise.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border-2 border-emerald-200 shadow-xl hover:border-emerald-400 hover:shadow-2xl transition-all">
              <div className="flex flex-col items-center text-center gap-4">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center flex-shrink-0">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h4 className="text-lg md:text-xl font-bold text-emerald-700 mb-2">Patient-Centered Approach</h4>
                  <p className="text-gray-700 text-sm">
                    We prioritize patient safety, quality care, and ensure the highest standards in every treatment.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
