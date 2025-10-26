'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Calendar, User, Mail, Stethoscope } from 'lucide-react';

interface BookingLedgerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingLedger({ isOpen, onClose }: BookingLedgerProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    department: '',
    date: '',
  });

  const departments = [
    'General Medicine',
    'Emergency Care',
    'Pediatric Care',
    'Surgery',
    'Advanced Imaging',
    'Specialized Care',
    'Cardiology',
    'Orthopedics',
    'Gynecology',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message with clean formatting
    const message = `━━━━━━━━━━━━━━━━━━━━━━━━━━━
    *AR HOSPITAL*
    Appointment Request
━━━━━━━━━━━━━━━━━━━━━━━━━━━

*PATIENT DETAILS*
━━━━━━━━━━━━━━━━━━━━━━━━━━━

*Name:*
${formData.name}

*Email:*
${formData.email}

*Department:*
${formData.department}

*Preferred Date:*
${formData.date}

━━━━━━━━━━━━━━━━━━━━━━━━━━━
*MESSAGE*
━━━━━━━━━━━━━━━━━━━━━━━━━━━

I would like to schedule an appointment at AR Hospital.

Please confirm the availability for the selected date and time.

Thank you for your assistance!

━━━━━━━━━━━━━━━━━━━━━━━━━━━
Priority: Standard
Status: Pending Confirmation
━━━━━━━━━━━━━━━━━━━━━━━━━━━

_Sent via AR Hospital Website_`;

    // Encode message for WhatsApp
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/919008994827?text=${encodedMessage}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
    
    // Reset form and close
    setFormData({ name: '', email: '', department: '', date: '' });
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
          />

          {/* 3D Book Container */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ 
                scale: 0.3, 
                rotateY: -90,
                opacity: 0,
              }}
              animate={{ 
                scale: 1, 
                rotateY: 0,
                opacity: 1,
              }}
              exit={{ 
                scale: 0.3, 
                rotateY: 90,
                opacity: 0,
              }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 20,
              }}
              className="pointer-events-auto relative"
              style={{ perspective: '2000px' }}
            >
              {/* Book */}
              <div className="relative w-full max-w-4xl" style={{ transformStyle: 'preserve-3d' }}>
                {/* Book Cover Shadow */}
                <div className="absolute -inset-4 bg-gradient-to-br from-emerald-900/20 to-black/40 blur-xl rounded-2xl" />
                
                {/* Open Book */}
                <div className="relative bg-gradient-to-br from-amber-100 to-yellow-50 rounded-2xl shadow-2xl border-8 border-amber-800/60 overflow-hidden">
                  {/* Book Spine Effect */}
                  <div className="absolute left-1/2 top-0 bottom-0 w-8 bg-gradient-to-r from-amber-800/40 via-amber-900/60 to-amber-800/40 transform -translate-x-1/2 shadow-inner" />
                  
                  {/* Close Button */}
                  <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-20 p-2 bg-red-500/90 hover:bg-red-600 text-white rounded-full shadow-lg transition-all hover:scale-110"
                  >
                    <X className="w-6 h-6" />
                  </button>

                  {/* Book Content */}
                  <div className="grid md:grid-cols-2 gap-0">
                    {/* Left Page - Title & Info */}
                    <div className="p-12 relative bg-gradient-to-br from-amber-50 to-yellow-100/50">
                      {/* Vintage Paper Texture */}
                      <div className="absolute inset-0 opacity-10" style={{
                        backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(139, 92, 46, 0.1) 2px, rgba(139, 92, 46, 0.1) 4px)`
                      }} />
                      
                      <div className="relative">
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 }}
                          className="mb-8"
                        >
                          <h2 className="text-5xl font-serif font-bold text-amber-900 mb-2 drop-shadow-sm">
                            Appointment
                          </h2>
                          <h3 className="text-3xl font-serif italic text-amber-800 mb-4">
                            Ledger
                          </h3>
                          <div className="h-1 w-24 bg-gradient-to-r from-emerald-600 to-emerald-400 rounded" />
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.5 }}
                          className="space-y-4 text-amber-900/80"
                        >
                          <p className="font-serif leading-relaxed text-lg">
                            Welcome to AR Hospital's appointment booking system.
                          </p>
                          <p className="font-serif leading-relaxed">
                            Please fill in your details on the right page, and we'll confirm your appointment via WhatsApp.
                          </p>
                          
                          <div className="mt-8 p-4 bg-emerald-50 border-l-4 border-emerald-600 rounded">
                            <p className="text-sm font-semibold text-emerald-900 mb-2">
                              📞 Emergency Contact
                            </p>
                            <p className="text-sm text-emerald-800">
                              0821-3501645
                            </p>
                          </div>

                          <div className="mt-4 p-4 bg-blue-50 border-l-4 border-blue-600 rounded">
                            <p className="text-sm font-semibold text-blue-900 mb-2">
                              ⏰ Working Hours
                            </p>
                            <p className="text-sm text-blue-800">
                              9 AM - 5 PM (Mon-Sat)
                            </p>
                          </div>
                        </motion.div>
                      </div>
                    </div>

                    {/* Right Page - Form */}
                    <div className="p-12 relative bg-gradient-to-br from-yellow-50 to-amber-100/50">
                      {/* Vintage Paper Lines */}
                      <div className="absolute inset-0 opacity-10" style={{
                        backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(139, 92, 46, 0.1) 2px, rgba(139, 92, 46, 0.1) 4px)`
                      }} />
                      
                      <motion.form
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        onSubmit={handleSubmit}
                        className="space-y-6 relative"
                      >
                        {/* Name Field */}
                        <div className="space-y-2">
                          <label className="flex items-center gap-2 text-amber-900 font-semibold font-serif">
                            <User className="w-5 h-5 text-emerald-600" />
                            Full Name
                          </label>
                          <input
                            type="text"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full px-4 py-3 bg-white/80 border-2 border-amber-300 rounded-lg focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all font-serif text-amber-900"
                            placeholder="Enter your full name"
                          />
                        </div>

                        {/* Email Field */}
                        <div className="space-y-2">
                          <label className="flex items-center gap-2 text-amber-900 font-semibold font-serif">
                            <Mail className="w-5 h-5 text-emerald-600" />
                            Email Address
                          </label>
                          <input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full px-4 py-3 bg-white/80 border-2 border-amber-300 rounded-lg focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all font-serif text-amber-900"
                            placeholder="your.email@example.com"
                          />
                        </div>

                        {/* Department Field */}
                        <div className="space-y-2">
                          <label className="flex items-center gap-2 text-amber-900 font-semibold font-serif">
                            <Stethoscope className="w-5 h-5 text-emerald-600" />
                            Department
                          </label>
                          <select
                            required
                            value={formData.department}
                            onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                            className="w-full px-4 py-3 bg-white/80 border-2 border-amber-300 rounded-lg focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all font-serif text-amber-900"
                          >
                            <option value="">Select a department</option>
                            {departments.map((dept) => (
                              <option key={dept} value={dept}>
                                {dept}
                              </option>
                            ))}
                          </select>
                        </div>

                        {/* Date Field */}
                        <div className="space-y-2">
                          <label className="flex items-center gap-2 text-amber-900 font-semibold font-serif">
                            <Calendar className="w-5 h-5 text-emerald-600" />
                            Preferred Date
                          </label>
                          <input
                            type="date"
                            required
                            value={formData.date}
                            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                            min={new Date().toISOString().split('T')[0]}
                            className="w-full px-4 py-3 bg-white/80 border-2 border-amber-300 rounded-lg focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all font-serif text-amber-900"
                          />
                        </div>

                        {/* Submit Button */}
                        <motion.button
                          type="submit"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="w-full py-4 bg-gradient-to-r from-emerald-600 to-emerald-500 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 text-lg"
                        >
                          <Send className="w-5 h-5" />
                          Send to WhatsApp
                        </motion.button>
                      </motion.form>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
