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
    <section id="doctors" className="py-16 md:py-24 bg-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
            Our Expert Doctors
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Experienced medical professionals dedicated to your health
          </p>
        </motion.div>

        {/* Featured Doctors - Single column on mobile */}
        <div className="space-y-6 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-6 md:space-y-0 mb-12 md:mb-16">
          {featuredDoctors.map((doctor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-200"
            >
              {/* Doctor Image */}
              <div className="relative h-72 md:h-80 bg-gray-100">
                <Image
                  src={doctor.image}
                  alt={doctor.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>

              {/* Doctor Info */}
              <div className="p-6">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 leading-tight">
                  {doctor.name}
                </h3>
                <p className="text-base md:text-lg text-blue-600 font-medium mb-2">
                  {doctor.specialization}
                </p>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  {doctor.qualification}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* All Doctors List - Clean, scannable */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl p-6 md:p-8 shadow-md border border-gray-200"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
            All Doctors
          </h3>
          
          {/* Grid layout - 1 column on mobile, 2 on tablet, 3 on desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {allDoctors.map((doctor, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-200"
              >
                <span className="text-2xl flex-shrink-0">{doctor.icon}</span>
                <div>
                  <h4 className="font-bold text-gray-900 text-base md:text-lg leading-tight">
                    {doctor.name}
                  </h4>
                  <p className="text-sm md:text-base text-gray-600">
                    {doctor.specialization}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
