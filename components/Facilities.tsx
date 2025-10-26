'use client';

import { motion } from 'framer-motion';
import { AlertCircle, Bed, Activity, Baby, Pill, FlaskConical, Clock } from 'lucide-react';

export default function Facilities() {
  const facilities = [
    {
      icon: AlertCircle,
      title: 'Emergency Unit',
      description: '24/7 emergency services with immediate medical attention and advanced life support.',
      gradient: 'from-red-500 to-orange-600',
    },
    {
      icon: Bed,
      title: 'General Wards',
      description: 'Comfortable and well-equipped general wards with round-the-clock nursing care.',
      gradient: 'from-blue-500 to-cyan-600',
    },
    {
      icon: Activity,
      title: 'Intensive Care Unit',
      description: 'State-of-the-art ICU with advanced monitoring and critical care facilities.',
      gradient: 'from-purple-500 to-pink-600',
    },
    {
      icon: Baby,
      title: 'Labour Ward',
      description: 'Modern labor ward with experienced obstetricians and neonatal care support.',
      gradient: 'from-pink-500 to-rose-600',
    },
    {
      icon: Pill,
      title: 'Pharmacy',
      description: 'In-house pharmacy providing quality medicines and pharmaceutical care.',
      gradient: 'from-emerald-500 to-teal-600',
    },
    {
      icon: FlaskConical,
      title: 'Laboratory',
      description: 'Advanced diagnostic laboratory with accurate and timely test results.',
      gradient: 'from-amber-500 to-orange-600',
    },
  ];

  return (
    <section id="facilities" className="py-24 bg-gradient-to-b from-black via-emerald-950/30 to-black relative overflow-hidden">
      {/* Ambient lighting */}
      <div className="absolute top-20 right-20 w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-3xl z-0 animate-pulse" style={{ animationDuration: '5s' }} />
      <div className="absolute bottom-20 left-20 w-[400px] h-[400px] bg-teal-500/10 rounded-full blur-3xl z-0 animate-pulse" style={{ animationDuration: '6s' }} />

      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #10b981 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4">
            <span className="text-6xl font-bold text-emerald-400 drop-shadow-lg" style={{ filter: 'drop-shadow(0 0 20px rgba(16, 185, 129, 0.6))' }}>+</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg"
            style={{ 
              filter: 'drop-shadow(0 0 30px rgba(16, 185, 129, 0.4))',
            }}
          >
            Our Facilities
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Modern medical facilities equipped with advanced technology for comprehensive healthcare
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((facility, index) => {
            const Icon = facility.icon;
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
                <div className="glass-effect rounded-3xl p-8 shadow-xl hover:shadow-2xl hover:shadow-emerald-500/20 transition-all duration-300 border-2 border-emerald-500/20 h-full backdrop-blur-xl">
                  {/* Icon with Gradient Background */}
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${facility.gradient} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}
                    style={{ filter: 'drop-shadow(0 0 20px rgba(16, 185, 129, 0.3))' }}
                  >
                    <Icon className="w-10 h-10 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {facility.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {facility.description}
                  </p>

                  {/* Hover Glow Effect */}
                  <div className={`absolute top-0 right-0 w-20 h-20 rounded-bl-full rounded-tr-3xl bg-gradient-to-br ${facility.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur-xl`} />
                  
                  {/* Medical Plus Corner */}
                  <div className="absolute bottom-4 right-4 text-emerald-400 opacity-0 group-hover:opacity-30 transition-opacity duration-300 text-4xl font-bold">
                    +
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* 24/7 Services Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20"
        >
          <div className="glass-effect rounded-3xl p-12 border-2 border-emerald-500/20 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-teal-500/10" />
            
            <div className="relative z-10">
              <Clock className="w-16 h-16 text-emerald-400 mx-auto mb-6" style={{ filter: 'drop-shadow(0 0 20px rgba(16, 185, 129, 0.6))' }} />
              <h3 className="text-4xl font-bold text-white mb-4">24x7 Services Available</h3>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Round-the-clock medical services ensuring immediate care whenever you need it. 
                Our dedicated team is always ready to serve you with emergency care, diagnostic services, 
                and pharmaceutical support at any time of the day or night.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-emerald-400 font-medium">
                <span className="glass-effect px-6 py-3 rounded-full border border-emerald-500/30">Emergency Services</span>
                <span className="glass-effect px-6 py-3 rounded-full border border-emerald-500/30">ICU Care</span>
                <span className="glass-effect px-6 py-3 rounded-full border border-emerald-500/30">Pharmacy</span>
                <span className="glass-effect px-6 py-3 rounded-full border border-emerald-500/30">Laboratory</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
