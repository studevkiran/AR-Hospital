'use client';

import { motion } from 'framer-motion';
import { Heart, Brain, Wind, Bone, Activity, Ear, Baby, Stethoscope, AlertCircle, Bed, Pill, FlaskConical, Clock } from 'lucide-react';

export default function Services() {
  const specializations = [
    {
      icon: Heart,
      title: 'Cardiology',
      description: 'Advanced cardiac care and diagnostics with state-of-the-art equipment.',
      gradient: 'from-[#00ff88] to-[#00ffaa]',
    },
    {
      icon: Brain,
      title: 'Neurology',
      description: 'Expert neurological treatment and comprehensive brain health services.',
      gradient: 'from-[#00d66f] to-[#00ff88]',
    },
    {
      icon: Wind,
      title: 'Pulmonology',
      description: 'Comprehensive respiratory care and advanced lung disease management.',
      gradient: 'from-[#00ffaa] to-[#00d66f]',
    },
    {
      icon: Bone,
      title: 'Orthopedics',
      description: 'Expert bone, joint, and muscle care with modern surgical techniques.',
      gradient: 'from-[#00ff88] to-[#00ffaa]',
    },
    {
      icon: Activity,
      title: 'General Medicine',
      description: 'Comprehensive medical care for all age groups with experienced physicians.',
      gradient: 'from-[#00d66f] to-[#00ff88]',
    },
    {
      icon: Ear,
      title: 'ENT',
      description: 'Specialized ear, nose, and throat treatments with advanced procedures.',
      gradient: 'from-[#00ffaa] to-[#00d66f]',
    },
    {
      icon: Baby,
      title: 'Pediatrics',
      description: 'Dedicated child healthcare with compassionate and expert medical attention.',
      gradient: 'from-[#00ff88] to-[#00ffaa]',
    },
    {
      icon: Stethoscope,
      title: 'General Surgery',
      description: 'Advanced surgical care with minimally invasive techniques.',
      gradient: 'from-[#00d66f] to-[#00ff88]',
    },
    {
      icon: AlertCircle,
      title: 'Emergency Care',
      description: '24/7 emergency services with rapid response and critical care.',
      gradient: 'from-[#00ffaa] to-[#00d66f]',
    },
  ];

  const services = [
    { icon: Bed, title: 'In-Patient Services', description: 'Comfortable rooms with 24x7 nursing care', gradient: 'from-[#00ff88] to-[#00ffaa]' },
    { icon: Pill, title: 'Pharmacy', description: 'In-house pharmacy with all essential medicines', gradient: 'from-[#00d66f] to-[#00ff88]' },
    { icon: FlaskConical, title: 'Laboratory', description: 'Advanced diagnostic and pathology services', gradient: 'from-[#00ffaa] to-[#00d66f]' },
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3 md:mb-4 text-gray-900">
            Our Services
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Comprehensive healthcare solutions available 24/7
          </p>
        </motion.div>

        {/* Single column on mobile, grid on desktop */}
        <div className="space-y-5 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-6 md:space-y-0">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-white rounded-2xl p-6 md:p-7 shadow-md border border-gray-200 active:scale-[0.98] transition-transform"
              >
                {/* Icon */}
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl bg-blue-600 flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7 md:w-8 md:h-8 text-white" strokeWidth={2} />
                </div>

                {/* Content */}
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 leading-tight">
                  {service.title}
                </h3>
                <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* 24/7 Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-10 md:mt-16 bg-blue-50 rounded-2xl p-8 md:p-10 border border-blue-200 text-center"
        >
          <Clock className="w-12 h-12 md:w-14 md:h-14 text-blue-600 mx-auto mb-4" strokeWidth={2} />
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">24/7 Services</h3>
          <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto mb-6 leading-relaxed">
            Round-the-clock emergency care, ICU, pharmacy, and laboratory services.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
