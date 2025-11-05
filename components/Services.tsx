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
    <section id="services" className="py-16 md:py-24 bg-gradient-to-b from-white via-emerald-50/30 to-white relative overflow-hidden">
      {/* Background Pattern with green glow */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #10b981 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>
      
      {/* Floating orbs */}
      <div className="absolute top-40 right-20 w-64 h-64 md:w-96 md:h-96 bg-emerald-400/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-40 left-20 w-64 h-64 md:w-96 md:h-96 bg-teal-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="inline-block mb-6">
            <motion.span 
              className="text-5xl md:text-7xl font-bold"
              style={{ 
                color: '#00ff88',
                filter: 'drop-shadow(0 0 30px rgba(0, 255, 136, 0.8))',
                textShadow: '0 0 40px rgba(0, 255, 170, 0.9)'
              }}
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              +
            </motion.span>
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 drop-shadow-sm px-4"
            style={{
              background: 'linear-gradient(145deg, #00d66f 0%, #00ffaa 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'drop-shadow(0 0 25px rgba(0, 214, 111, 0.7))',
            }}
          >
            Our Services & Facilities
          </h2>
          <p className="text-base md:text-xl text-gray-700 max-w-2xl mx-auto px-4">
            Comprehensive healthcare solutions and modern facilities available 24x7 for your medical needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative"
              >
                <div className="bg-white rounded-3xl p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-emerald-200 hover:border-emerald-400 h-full relative overflow-hidden min-h-[200px]">
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Icon with Gradient Background */}
                  <div className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 relative z-10`}
                    style={{ 
                      boxShadow: '0 0 20px rgba(16, 185, 129, 0.2)'
                    }}
                  >
                    <Icon className="w-8 h-8 md:w-10 md:h-10 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl md:text-2xl font-bold text-emerald-800 mb-2 md:mb-3 relative z-10">
                    {service.title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed relative z-10">
                    {service.description}
                  </p>

                  {/* Medical Plus Corner */}
                  <div className="absolute bottom-4 md:bottom-6 right-4 md:right-6 text-emerald-200/40 group-hover:text-emerald-400/70 transition-all duration-300 text-4xl md:text-5xl font-bold">
                    +
                  </div>

                  {/* Hover Effect Line */}
                  <div className={`absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r ${service.gradient} group-hover:w-full transition-all duration-500 rounded-b-3xl`} 
                    style={{ boxShadow: '0 0 15px currentColor' }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* 24x7 Services Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-12 md:mt-20"
        >
          <div className="bg-white rounded-3xl p-8 md:p-12 border-2 border-emerald-200 shadow-xl text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/5 to-teal-400/5" />
            
            <div className="relative z-10">
              <Clock className="w-12 h-12 md:w-16 md:h-16 text-emerald-600 mx-auto mb-4 md:mb-6" style={{ filter: 'drop-shadow(0 0 15px rgba(16, 185, 129, 0.3))' }} />
              <h3 className="text-2xl md:text-4xl font-bold text-emerald-700 mb-3 md:mb-4">24x7 Services Available</h3>
              <p className="text-base md:text-xl text-gray-700 max-w-3xl mx-auto mb-6 md:mb-8 px-4">
                Round-the-clock medical services ensuring immediate care whenever you need it. 
                Our dedicated team is always ready to serve you with emergency care, diagnostic services, 
                and pharmaceutical support at any time of the day or night.
              </p>
              <div className="flex flex-wrap justify-center gap-3 md:gap-4 text-emerald-700 font-medium px-4">
                <span className="bg-emerald-50 px-4 py-2 md:px-6 md:py-3 rounded-full border-2 border-emerald-200 text-sm md:text-base">Emergency Services</span>
                <span className="bg-emerald-50 px-4 py-2 md:px-6 md:py-3 rounded-full border-2 border-emerald-200 text-sm md:text-base">ICU Care</span>
                <span className="bg-emerald-50 px-4 py-2 md:px-6 md:py-3 rounded-full border-2 border-emerald-200 text-sm md:text-base">Pharmacy</span>
                <span className="bg-emerald-50 px-4 py-2 md:px-6 md:py-3 rounded-full border-2 border-emerald-200 text-sm md:text-base">Laboratory</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
