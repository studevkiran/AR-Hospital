'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Award, Stethoscope } from 'lucide-react';

export default function Doctors() {
  const featuredDoctors = [
    {
      name: 'Dr. Madhuram Chowdary',
      qualification: 'MBBS',
      specialization: 'Orthopedic',
      image: '/Dr Chandan KR MBBS,MS,MCH CONSULTANT VASCULAR & ENDOVASCULAR SURGEON.png',
      gradient: 'from-blue-500 to-cyan-600',
    },
    {
      name: 'Dr. Keerthi MS',
      qualification: 'MBBS, MS (OBG), DNB, FMAS, DMAS, MRCOG (UK)',
      specialization: 'Gynecologist - Consultant Obstetrician and Gynaecologist, Laparoscopic Surgeon, Infertility Specialist',
      image: '/Dr Keerthi MS MBBS, MS (OBG), DNB, FMAS, DMAS, MRCOG (UK)  CONSULTANT OBSTETRICIAN AND GYNAECOLOGIST, LAPAROSCOPIC SURGEON, INFERTILITY SPECIALIST..png',
      gradient: 'from-pink-500 to-rose-600',
    },
    {
      name: 'Dr. Sachin HM',
      qualification: 'General Surgeon',
      specialization: 'General Surgeon & Laparoscopy Surgeon',
      image: '/Dr Sachin HM GENERAL SURGEON &  LAPROSCOPY SURGEON.png',
      gradient: 'from-emerald-500 to-teal-600',
    },
  ];

  const allDoctors = [
    { name: 'Dr. Madhuram Chowdary', specialization: 'Orthopedic', icon: '🦴' },
    { name: 'Dr. Keerthi MS', specialization: 'Gynaecologist', icon: '👶' },
    { name: 'Dr. Lokesh', specialization: 'General Surgeon', icon: '⚕️' },
    { name: 'Dr. Geetha', specialization: 'Gynaecologist', icon: '👶' },
    { name: 'Dr. Vijay Kumar', specialization: 'Plastic Surgeon', icon: '💉' },
    { name: 'Dr. Chethan', specialization: 'Plastic Surgeon', icon: '💉' },
    { name: 'Dr. Ramya', specialization: 'General Physician', icon: '🩺' },
    { name: 'Dr. Arun', specialization: 'Physician', icon: '🩺' },
    { name: 'Dr. Chandan', specialization: 'Vascular', icon: '🫀' },
    { name: 'Dr. Harsha Huliappa', specialization: 'Neurologist', icon: '🧠' },
    { name: 'Dr. Punith', specialization: 'Neurologist', icon: '🧠' },
    { name: 'Dr. Madhuri', specialization: 'Dermatologist', icon: '🔬' },
    { name: 'Dr. Manjushree', specialization: 'Psychiatrist', icon: '🧘' },
    { name: 'Dr. Lakshmi Narayan', specialization: 'Pulmonologist', icon: '🫁' },
    { name: 'Dr. Abhilash', specialization: 'Physician', icon: '🩺' },
    { name: 'Dr. Pooja', specialization: 'Ophthalmologist', icon: '👁️' },
    { name: 'Dr. Nitish', specialization: 'Intensivist', icon: '🏥' },
    { name: 'Dr. Mohan', specialization: 'Urologist', icon: '⚕️' },
    { name: 'Dr. Abhilash', specialization: 'ENT Specialist', icon: '👂' },
    { name: 'Dr. Yogesh', specialization: 'Physician', icon: '🩺' },
  ];

  return (
    <section id="doctors" className="py-24 bg-gradient-to-b from-black via-emerald-950/30 to-black relative overflow-hidden">
      {/* Ambient lighting */}
      <div className="absolute top-20 left-20 w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-3xl z-0 animate-pulse" style={{ animationDuration: '5s' }} />
      <div className="absolute bottom-20 right-20 w-[400px] h-[400px] bg-teal-500/10 rounded-full blur-3xl z-0 animate-pulse" style={{ animationDuration: '6s' }} />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4">
            <Award className="w-16 h-16 text-emerald-400 mx-auto" style={{ filter: 'drop-shadow(0 0 20px rgba(16, 185, 129, 0.6))' }} />
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg"
            style={{ 
              filter: 'drop-shadow(0 0 30px rgba(16, 185, 129, 0.4))',
            }}
          >
            Our Expert Doctors
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Meet our team of highly qualified and experienced medical professionals
          </p>
        </motion.div>

        {/* Featured Doctors with Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {featuredDoctors.map((doctor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative"
            >
              <div className="glass-effect rounded-3xl p-6 border-2 border-emerald-500/20 hover:border-emerald-500/40 transition-all h-full">
                {/* Doctor Image */}
                <div className="relative h-[350px] rounded-2xl overflow-hidden mb-6">
                  <Image
                    src={doctor.image}
                    alt={doctor.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                </div>

                {/* Doctor Info */}
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-white">{doctor.name}</h3>
                  <p className="text-emerald-400 text-sm font-medium">{doctor.qualification}</p>
                  <p className="text-gray-300 text-sm">{doctor.specialization}</p>
                </div>

                {/* Hover Glow Effect */}
                <div className={`absolute top-0 right-0 w-20 h-20 rounded-bl-full rounded-tr-3xl bg-gradient-to-br ${doctor.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur-xl`} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Complete Medical Team Photo */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="text-center mb-6">
            <h3 className="text-3xl md:text-4xl font-bold text-white"
              style={{ 
                filter: 'drop-shadow(0 0 20px rgba(16, 185, 129, 0.3))',
              }}
            >
              Complete Medical Team
            </h3>
          </div>
          <div className="relative w-full h-[450px] rounded-3xl overflow-hidden shadow-2xl border-2 border-emerald-500/20">
            <Image
              src="/staff-bg_removed_all-removebg-preview.png"
              alt="AR Hospital Complete Medical Team"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
              className="object-contain object-center hover:scale-105 transition-transform duration-500"
              loading="eager"
              priority
            />
          </div>
        </motion.div>

        {/* All Doctors Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-4xl font-bold text-white mb-10 text-center">Our Specialists</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {allDoctors.map((doctor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass-effect rounded-2xl p-5 border-2 border-emerald-500/20 hover:border-emerald-500/40 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="text-3xl flex-shrink-0">{doctor.icon}</div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-white font-bold text-lg mb-1 truncate">{doctor.name}</h4>
                    <p className="text-emerald-400 text-sm">{doctor.specialization}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
