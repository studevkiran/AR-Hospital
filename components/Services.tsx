'use client';

import { motion } from 'framer-motion';
import { Heart, Brain, Wind, Bone, Activity, Ear, Baby, Stethoscope, AlertCircle, Bed, Pill, FlaskConical, Clock } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Heart,
      title: 'Cardiology',
      description: 'Advanced cardiac care with expert cardiologists for heart health and cardiovascular diseases.',
      gradient: 'from-red-500 to-pink-600',
      category: 'service'
    },
    {
      icon: Brain,
      title: 'Neurology',
      description: 'Specialized neurological care for brain, spine, and nervous system disorders.',
      gradient: 'from-purple-500 to-indigo-600',
      category: 'service'
    },
    {
      icon: Wind,
      title: 'Pulmonary',
      description: 'Comprehensive respiratory care for lung diseases and breathing disorders.',
      gradient: 'from-cyan-500 to-blue-600',
      category: 'service'
    },
    {
      icon: Bone,
      title: 'Orthopedic',
      description: 'Expert orthopedic surgery and treatment for bone, joint, and muscle conditions.',
      gradient: 'from-orange-500 to-amber-600',
      category: 'service'
    },
    {
      icon: Activity,
      title: 'Gastroenterology',
      description: 'Specialized care for digestive system, liver, and gastrointestinal disorders.',
      gradient: 'from-emerald-500 to-teal-600',
      category: 'service'
    },
    {
      icon: Ear,
      title: 'ENT',
      description: 'Comprehensive ear, nose, and throat care with experienced ENT specialists.',
      gradient: 'from-yellow-500 to-orange-600',
      category: 'service'
    },
    {
      icon: Baby,
      title: 'Pediatric',
      description: 'Dedicated pediatric care for infants, children, and adolescents with compassion.',
      gradient: 'from-pink-500 to-rose-600',
      category: 'service'
    },
    {
      icon: Stethoscope,
      title: 'General Medicine',
      description: 'Comprehensive primary care with experienced physicians for overall health and wellness.',
      gradient: 'from-emerald-600 to-emerald-800',
      category: 'service'
    },
    {
      icon: AlertCircle,
      title: 'Emergency Unit',
      description: '24/7 emergency services with immediate medical attention and advanced life support.',
      gradient: 'from-red-500 to-orange-600',
      category: 'facility'
    },
    {
      icon: Bed,
      title: 'General Wards',
      description: 'Comfortable and well-equipped general wards with round-the-clock nursing care.',
      gradient: 'from-blue-500 to-cyan-600',
      category: 'facility'
    },
    {
      icon: Activity,
      title: 'ICU',
      description: 'State-of-the-art intensive care unit with advanced monitoring and critical care.',
      gradient: 'from-purple-500 to-pink-600',
      category: 'facility'
    },
    {
      icon: Pill,
      title: 'Pharmacy',
      description: 'In-house pharmacy providing quality medicines and pharmaceutical care.',
      gradient: 'from-emerald-500 to-teal-600',
      category: 'facility'
    },
    {
      icon: FlaskConical,
      title: 'Laboratory',
      description: 'Advanced diagnostic laboratory with accurate and timely test results.',
      gradient: 'from-amber-500 to-orange-600',
      category: 'facility'
    },
  ];

  return (
    <section id="services" className="py-24 bg-white relative overflow-hidden">
      {/* Background Pattern with green glow */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #008A3A 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>
      
      {/* Floating orbs */}
      <div className="absolute top-40 right-20 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-40 left-20 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-6">
            <motion.span 
              className="text-7xl font-bold text-emerald-400"
              style={{ 
                filter: 'drop-shadow(0 0 30px rgba(16, 185, 129, 0.6)) drop-shadow(0 0 60px rgba(16, 185, 129, 0.4))',
                textShadow: '0 0 40px rgba(16, 185, 129, 0.8)'
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
          <h2 className="text-5xl md:text-6xl font-bold text-[#008A3A] mb-4 drop-shadow-sm"
            style={{ filter: 'drop-shadow(0 0 20px rgba(0, 138, 58, 0.2))' }}
          >
            Our Services & Facilities
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Comprehensive healthcare solutions and modern facilities available 24x7 for your medical needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-green-200 hover:border-green-400 h-full relative overflow-hidden">
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-green-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Icon with Gradient Background */}
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 relative z-10`}
                    style={{ 
                      boxShadow: '0 0 20px rgba(0, 138, 58, 0.3)'
                    }}
                  >
                    <Icon className="w-10 h-10 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-[#008A3A] mb-3 relative z-10">
                    {service.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed relative z-10">
                    {service.description}
                  </p>

                  {/* Medical Plus Corner */}
                  <div className="absolute bottom-6 right-6 text-green-300/40 group-hover:text-green-400/70 transition-all duration-300 text-5xl font-bold">
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
          className="mt-20"
        >
          <div className="bg-white rounded-3xl p-12 border-2 border-green-200 shadow-xl text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-green-400/5 to-yellow-400/5" />
            
            <div className="relative z-10">
              <Clock className="w-16 h-16 text-[#008A3A] mx-auto mb-6" style={{ filter: 'drop-shadow(0 0 15px rgba(0, 138, 58, 0.4))' }} />
              <h3 className="text-4xl font-bold text-[#008A3A] mb-4">24x7 Services Available</h3>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
                Round-the-clock medical services ensuring immediate care whenever you need it. 
                Our dedicated team is always ready to serve you with emergency care, diagnostic services, 
                and pharmaceutical support at any time of the day or night.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-[#008A3A] font-medium">
                <span className="bg-green-50 px-6 py-3 rounded-full border-2 border-green-200">Emergency Services</span>
                <span className="bg-green-50 px-6 py-3 rounded-full border-2 border-green-200">ICU Care</span>
                <span className="bg-green-50 px-6 py-3 rounded-full border-2 border-green-200">Pharmacy</span>
                <span className="bg-green-50 px-6 py-3 rounded-full border-2 border-green-200">Laboratory</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
