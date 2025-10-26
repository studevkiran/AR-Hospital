'use client';

import { motion } from 'framer-motion';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
            Patient Testimonials
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Hear from our satisfied patients about their experiences at AR Hospital
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="glass-effect rounded-3xl p-8 border-2 border-emerald-500/20">
            <div className="flex items-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-400 text-xl">★</span>
              ))}
            </div>
            <p className="text-gray-300 mb-4">
              "Excellent orthopedic surgery and post-operative care. The staff was very attentive and professional."
            </p>
            <p className="text-emerald-400 font-semibold">- Sabiram Sutradhar, Assam</p>
          </div>
          
          <div className="glass-effect rounded-3xl p-8 border-2 border-emerald-500/20">
            <div className="flex items-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-400 text-xl">★</span>
              ))}
            </div>
            <p className="text-gray-300 mb-4">
              "Outstanding gynecology care with compassionate doctors. Highly recommend AR Hospital!"
            </p>
            <p className="text-emerald-400 font-semibold">- Kalyani, Mysore</p>
          </div>
        </div>
      </div>
    </section>
  );
}
