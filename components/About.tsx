'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Quote, Award, Heart, Users } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-gradient-to-b from-white via-green-50/30 to-white">
      {/* Ambient lighting */}
      <div className="absolute top-20 right-20 w-[300px] h-[300px] bg-green-400/8 rounded-full blur-3xl z-0 animate-pulse" style={{ animationDuration: '5s' }} />
      <div className="absolute bottom-20 left-20 w-[300px] h-[300px] bg-yellow-400/8 rounded-full blur-3xl z-0 animate-pulse" style={{ animationDuration: '6s' }} />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header - Simple Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-[#008A3A] mb-4 drop-shadow-sm"
            style={{ 
              filter: 'drop-shadow(0 0 30px rgba(0, 138, 58, 0.3))',
            }}
          >
            About AR Hospital
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            5+ years of dedicated service, 2500+ patients treated with compassion and excellence
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Chairman's Message */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-3xl p-8 border-2 border-green-200 shadow-xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-green-400/5 rounded-full blur-2xl" />
            
            {/* Quote Icon */}
            <div className="absolute top-6 left-6 opacity-10">
              <Quote className="w-16 h-16 text-[#008A3A]" />
            </div>

            <div className="relative z-10">
              <div className="mb-6">
                <h3 className="text-3xl font-bold text-[#008A3A] mb-2">Chairman's Message</h3>
                <div className="h-1 w-20 bg-gradient-to-r from-[#008A3A] to-[#FFD700] rounded-full" />
              </div>

              <div className="mb-6">
                <p className="text-gray-700 leading-relaxed mb-4 text-base">
                  "It gives me immense pride and profound gratitude to welcome you to AR Hospital, Mysore. 
                  As the Chairman, my vision is to provide world-class healthcare with compassion, innovation, 
                  and integrity at the core of everything we do. At AR Hospital, we believe that every patient 
                  deserves not only the most advanced medical care but also attention, dignity, and respect. 
                  Our team of expert doctors and dedicated staff collaborate across various specialties to 
                  deliver personalized treatment and ensure the highest standards of safety, quality, and comfort."
                </p>
              </div>

              <div className="flex flex-col pt-6 border-t border-green-200">
                <div>
                  <p className="text-[#008A3A] font-bold text-xl mb-1">
                    Dr. Madhuram Chowdry <span className="text-[#FFD700] text-base font-normal">MBBS</span>
                  </p>
                  <p className="text-gray-600 text-sm">Chairman</p>
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
            <div className="bg-white rounded-3xl p-4 border-2 border-green-200 shadow-xl overflow-hidden group">
              <div className="relative h-[400px] rounded-2xl overflow-hidden">
                {/* Chairman Desk Photo */}
                <Image
                  src="/Chairman's Desk phooto.png"
                  alt="Chairman at AR Hospital Desk"
                  fill
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
          className="bg-white rounded-3xl p-12 max-w-4xl mx-auto border-2 border-green-200 shadow-xl text-center mb-20"
        >
          <h3 className="text-3xl font-bold text-[#008A3A] mb-6">Our Mission</h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            At AR Hospital, we believe that every patient deserves not only the most advanced medical care 
            but also attention, dignity, and respect. Our mission is to provide comprehensive healthcare 
            with a personal touch, combining modern medical technology with compassionate care.
          </p>
        </motion.div>

        {/* Why Choose Us Section */}
        <div className="space-y-8">
          {/* Why Choose Us Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h3 className="text-4xl font-bold text-[#008A3A] mb-2">Why Choose AR Hospital?</h3>
          </motion.div>

          {/* Three Benefits in Horizontal Row */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            <div className="bg-white rounded-2xl p-6 border-2 border-green-200 shadow-xl hover:border-green-400 hover:shadow-2xl transition-all">
              <div className="flex flex-col items-center text-center gap-4">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#008A3A] to-[#14532D] flex items-center justify-center flex-shrink-0">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-[#008A3A] mb-2">Compassionate Care</h4>
                  <p className="text-gray-700 text-sm">
                    We treat every patient with dignity, respect, and personalized attention to ensure comfort and trust.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border-2 border-green-200 shadow-xl hover:border-green-400 hover:shadow-2xl transition-all">
              <div className="flex flex-col items-center text-center gap-4">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#008A3A] to-[#14532D] flex items-center justify-center flex-shrink-0">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-[#008A3A] mb-2">Expert Medical Team</h4>
                  <p className="text-gray-700 text-sm">
                    Our team of experienced doctors and healthcare professionals deliver world-class medical expertise.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border-2 border-green-200 shadow-xl hover:border-green-400 hover:shadow-2xl transition-all">
              <div className="flex flex-col items-center text-center gap-4">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#008A3A] to-[#14532D] flex items-center justify-center flex-shrink-0">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-[#008A3A] mb-2">Patient-Centered Approach</h4>
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
