'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, MessageCircle, Facebook, Youtube } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-gradient-to-b from-white via-emerald-50/30 to-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 drop-shadow-lg px-4"
            style={{
              background: 'linear-gradient(145deg, #00d66f 0%, #00ffaa 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'drop-shadow(0 0 25px rgba(0, 214, 111, 0.7))',
            }}
          >
            Contact Us
          </h2>
          <p className="text-base md:text-xl text-gray-700 max-w-2xl mx-auto px-4">
            Get in touch with AR Hospital for appointments and inquiries
          </p>
        </motion.div>
        
        {/* Visit Us Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto mb-8 md:mb-12"
        >
          <div className="bg-white rounded-3xl p-6 md:p-8 border-2 border-emerald-200 shadow-xl">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-bold text-emerald-700 mb-3">Visit Us</h3>
                <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                  22, New Kantharaj Urs Rd,<br />
                  CFTRI layout, Sharadadevi Nagar,<br />
                  Mysuru, Karnataka 570022
                </p>
                <a
                  href="https://maps.google.com/?q=22+New+Kantharaj+Urs+Rd+CFTRI+layout+Sharadadevi+Nagar+Mysuru+Karnataka+570022"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 px-6 py-2 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-full text-sm font-medium hover:shadow-lg hover:shadow-emerald-500/50 transition-all min-h-[44px] flex items-center justify-center"
                >
                  Get Directions
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Connect With Us Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-emerald-700 text-center mb-6 md:mb-8 px-4">Connect With Us</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3 md:gap-4">
            {/* Phone */}
            <a href="tel:9008994827" className="group" title="Call Us">
              <div className="bg-white rounded-2xl p-4 md:p-6 border-2 border-emerald-200 shadow-lg hover:shadow-xl hover:border-emerald-400 flex flex-col items-center justify-center h-full transition-all min-h-[120px]">
                <Phone className="w-8 h-8 md:w-10 md:h-10 text-emerald-600 mb-2 md:mb-3 group-hover:scale-110 transition-transform" />
                <p className="text-emerald-700 font-semibold text-xs md:text-sm">Phone</p>
              </div>
            </a>

            {/* WhatsApp */}
            <a href="https://wa.me/919008994827" target="_blank" rel="noopener noreferrer" className="group" title="WhatsApp">
              <div className="bg-white rounded-2xl p-4 md:p-6 border-2 border-emerald-200 shadow-lg hover:shadow-xl hover:border-emerald-400 flex flex-col items-center justify-center h-full transition-all min-h-[120px]">
                <MessageCircle className="w-8 h-8 md:w-10 md:h-10 text-emerald-600 mb-2 md:mb-3 group-hover:scale-110 transition-transform" />
                <p className="text-emerald-700 font-semibold text-xs md:text-sm">WhatsApp</p>
              </div>
            </a>

            {/* Gmail */}
            <a href="mailto:info@arhospital.com" className="group" title="Email">
              <div className="bg-white rounded-2xl p-4 md:p-6 border-2 border-emerald-200 shadow-lg hover:shadow-xl hover:border-emerald-400 flex flex-col items-center justify-center h-full transition-all min-h-[120px]">
                <Mail className="w-8 h-8 md:w-10 md:h-10 text-emerald-600 mb-2 md:mb-3 group-hover:scale-110 transition-transform" />
                <p className="text-emerald-700 font-semibold text-xs md:text-sm">Email</p>
              </div>
            </a>

            {/* Facebook */}
            <a href="https://www.facebook.com/arhospitalmysuru/" target="_blank" rel="noopener noreferrer" className="group" title="Facebook">
              <div className="bg-white rounded-2xl p-4 md:p-6 border-2 border-emerald-200 shadow-lg hover:shadow-xl hover:border-emerald-400 flex flex-col items-center justify-center h-full transition-all min-h-[120px]">
                <Facebook className="w-8 h-8 md:w-10 md:h-10 text-emerald-600 mb-2 md:mb-3 group-hover:scale-110 transition-transform" />
                <p className="text-emerald-700 font-semibold text-xs md:text-sm">Facebook</p>
              </div>
            </a>

            {/* YouTube */}
            <a href="https://youtube.com/@arhospital-j2m?si=4BhkpkoF4txsKrmU" target="_blank" rel="noopener noreferrer" className="group" title="YouTube">
              <div className="bg-white rounded-2xl p-4 md:p-6 border-2 border-emerald-200 shadow-lg hover:shadow-xl hover:border-emerald-400 flex flex-col items-center justify-center h-full transition-all min-h-[120px]">
                <Youtube className="w-8 h-8 md:w-10 md:h-10 text-emerald-600 mb-2 md:mb-3 group-hover:scale-110 transition-transform" />
                <p className="text-emerald-700 font-semibold text-xs md:text-sm">YouTube</p>
              </div>
            </a>

            {/* Google Maps */}
            <a href="https://maps.google.com/?q=22+New+Kantharaj+Urs+Rd+CFTRI+layout+Sharadadevi+Nagar+Mysuru+Karnataka+570022" target="_blank" rel="noopener noreferrer" className="group" title="Location">
              <div className="bg-white rounded-2xl p-4 md:p-6 border-2 border-emerald-200 shadow-lg hover:shadow-xl hover:border-emerald-400 flex flex-col items-center justify-center h-full transition-all min-h-[120px]">
                <MapPin className="w-8 h-8 md:w-10 md:h-10 text-emerald-600 mb-2 md:mb-3 group-hover:scale-110 transition-transform" />
                <p className="text-emerald-700 font-semibold text-xs md:text-sm">Maps</p>
              </div>
            </a>

            {/* JustDial */}
            <a href="https://www.justdial.com/Mysore/A-R-Hospital-Opposite-Nivedita-Nagar-Arch-Sharadadevi-Nagar/0821PX821-X821-220629111932-Q8K5_BZDET" target="_blank" rel="noopener noreferrer" className="group" title="JustDial">
              <div className="bg-white rounded-2xl p-4 md:p-6 border-2 border-emerald-200 shadow-lg hover:shadow-xl hover:border-emerald-400 flex flex-col items-center justify-center h-full transition-all min-h-[120px]">
                <svg className="w-8 h-8 md:w-10 md:h-10 text-emerald-600 mb-2 md:mb-3 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 11l3 3L22 4"/>
                  <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
                </svg>
                <p className="text-emerald-700 font-semibold text-xs md:text-sm">JustDial</p>
              </div>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
