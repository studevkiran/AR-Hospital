'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, MessageCircle, Facebook, Youtube } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-green-50 to-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-[#008A3A] mb-4 drop-shadow-lg">
            Contact Us
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Get in touch with AR Hospital for appointments and inquiries
          </p>
        </motion.div>
        
        {/* Visit Us Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto mb-12"
        >
          <div className="bg-white rounded-3xl p-8 border-2 border-green-200 shadow-xl">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#008A3A] to-[#14532D] flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-[#008A3A] mb-3">Visit Us</h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  22, New Kantharaj Urs Rd,<br />
                  CFTRI layout, Sharadadevi Nagar,<br />
                  Mysuru, Karnataka 570022
                </p>
                <a
                  href="https://maps.google.com/?q=22+New+Kantharaj+Urs+Rd+CFTRI+layout+Sharadadevi+Nagar+Mysuru+Karnataka+570022"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 px-6 py-2 bg-gradient-to-r from-[#008A3A] to-[#14532D] text-white rounded-full text-sm font-medium hover:shadow-lg hover:shadow-green-500/50 transition-all"
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
          <h3 className="text-3xl font-bold text-[#008A3A] text-center mb-8">Connect With Us</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4">
            {/* Phone */}
            <a href="tel:9008994827" className="group" title="Call Us">
              <div className="bg-white rounded-2xl p-6 border-2 border-green-200 shadow-lg hover:shadow-xl hover:border-green-400 flex flex-col items-center justify-center h-full transition-all">
                <Phone className="w-10 h-10 text-[#008A3A] mb-3 group-hover:scale-110 transition-transform" />
                <p className="text-[#008A3A] font-semibold text-sm">Phone</p>
              </div>
            </a>

            {/* WhatsApp */}
            <a href="https://wa.me/919008994827" target="_blank" rel="noopener noreferrer" className="group" title="WhatsApp">
              <div className="bg-white rounded-2xl p-6 border-2 border-green-200 shadow-lg hover:shadow-xl hover:border-green-400 flex flex-col items-center justify-center h-full transition-all">
                <MessageCircle className="w-10 h-10 text-[#008A3A] mb-3 group-hover:scale-110 transition-transform" />
                <p className="text-[#008A3A] font-semibold text-sm">WhatsApp</p>
              </div>
            </a>

            {/* Gmail */}
            <a href="mailto:info@arhospital.com" className="group" title="Email">
              <div className="bg-white rounded-2xl p-6 border-2 border-green-200 shadow-lg hover:shadow-xl hover:border-green-400 flex flex-col items-center justify-center h-full transition-all">
                <Mail className="w-10 h-10 text-[#008A3A] mb-3 group-hover:scale-110 transition-transform" />
                <p className="text-[#008A3A] font-semibold text-sm">Email</p>
              </div>
            </a>

            {/* Facebook */}
            <a href="https://www.facebook.com/arhospitalmysuru/" target="_blank" rel="noopener noreferrer" className="group" title="Facebook">
              <div className="bg-white rounded-2xl p-6 border-2 border-green-200 shadow-lg hover:shadow-xl hover:border-green-400 flex flex-col items-center justify-center h-full transition-all">
                <Facebook className="w-10 h-10 text-[#008A3A] mb-3 group-hover:scale-110 transition-transform" />
                <p className="text-[#008A3A] font-semibold text-sm">Facebook</p>
              </div>
            </a>

            {/* YouTube */}
            <a href="https://youtube.com/@arhospital-j2m?si=4BhkpkoF4txsKrmU" target="_blank" rel="noopener noreferrer" className="group" title="YouTube">
              <div className="bg-white rounded-2xl p-6 border-2 border-green-200 shadow-lg hover:shadow-xl hover:border-green-400 flex flex-col items-center justify-center h-full transition-all">
                <Youtube className="w-10 h-10 text-[#008A3A] mb-3 group-hover:scale-110 transition-transform" />
                <p className="text-[#008A3A] font-semibold text-sm">YouTube</p>
              </div>
            </a>

            {/* Google Maps */}
            <a href="https://maps.google.com/?q=22+New+Kantharaj+Urs+Rd+CFTRI+layout+Sharadadevi+Nagar+Mysuru+Karnataka+570022" target="_blank" rel="noopener noreferrer" className="group" title="Location">
              <div className="bg-white rounded-2xl p-6 border-2 border-green-200 shadow-lg hover:shadow-xl hover:border-green-400 flex flex-col items-center justify-center h-full transition-all">
                <MapPin className="w-10 h-10 text-[#008A3A] mb-3 group-hover:scale-110 transition-transform" />
                <p className="text-[#008A3A] font-semibold text-sm">Maps</p>
              </div>
            </a>

            {/* JustDial */}
            <a href="https://www.justdial.com/Mysore/A-R-Hospital-Opposite-Nivedita-Nagar-Arch-Sharadadevi-Nagar/0821PX821-X821-220629111932-Q8K5_BZDET" target="_blank" rel="noopener noreferrer" className="group" title="JustDial">
              <div className="bg-white rounded-2xl p-6 border-2 border-green-200 shadow-lg hover:shadow-xl hover:border-green-400 flex flex-col items-center justify-center h-full transition-all">
                <svg className="w-10 h-10 text-[#008A3A] mb-3 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 11l3 3L22 4"/>
                  <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
                </svg>
                <p className="text-[#008A3A] font-semibold text-sm">JustDial</p>
              </div>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
