'use client';

import { useState, useRef } from 'react';
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

  const formRef = useRef<HTMLDivElement>(null);

  const scrollToForm = () => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Get today's date in YYYY-MM-DD format for min attribute
  const getTodayString = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
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
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[60]"
          />

          {/* 3D Book Container */}
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-2 sm:p-4 pointer-events-none overflow-y-auto">
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
              className="pointer-events-auto relative w-full max-w-4xl my-auto"
              style={{ perspective: '2000px' }}
            >
              {/* Book */}
              <div className="relative w-full" style={{ transformStyle: 'preserve-3d' }}>
                {/* Book Cover Shadow */}
                <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-br from-emerald-900/20 to-black/40 blur-xl rounded-2xl" />

                {/* Open Book */}
                <div className="relative bg-gradient-to-br from-amber-100 to-yellow-50 rounded-lg sm:rounded-2xl shadow-2xl border-4 sm:border-8 border-amber-800/60 overflow-hidden max-h-[90vh]">
                  {/* Book Spine Effect */}
                  <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-8 bg-gradient-to-r from-amber-800/40 via-amber-900/60 to-amber-800/40 transform -translate-x-1/2 shadow-inner" />

                  {/* Close Button */}
                  <button
                    onClick={onClose}
                    className="absolute top-2 right-2 sm:top-4 sm:right-4 z-20 p-2 sm:p-3 bg-red-500/90 hover:bg-red-600 text-white rounded-full shadow-lg transition-all hover:scale-110 min-w-[44px] min-h-[44px]"
                  >
                    <X className="w-5 h-5 sm:w-6 sm:h-6" />
                  </button>

                  {/* Book Content */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-0 max-h-[85vh] overflow-y-auto">
                    {/* Left Page - Title & Info */}
                    <div className="p-6 sm:p-8 md:p-12 relative bg-gradient-to-br from-amber-50 to-yellow-100/50">
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
                          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-amber-900 mb-2 drop-shadow-sm">
                            Appointment
                          </h2>
                          <h3 className="text-2xl sm:text-2xl md:text-3xl font-serif italic text-amber-800 mb-4">
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
                          <p className="font-serif leading-relaxed text-base sm:text-lg">
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

                          {/* Mobile Scroll Button */}
                          <motion.button
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7 }}
                            onClick={scrollToForm}
                            className="md:hidden mt-8 w-full py-3 px-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg shadow-lg flex items-center justify-center gap-2 font-bold active:scale-95 transition-transform"
                          >
                            <span>Book Now</span>
                            <motion.div
                              animate={{ y: [0, 4, 0] }}
                              transition={{ repeat: Infinity, duration: 1.5 }}
                            >
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                              </svg>
                            </motion.div>
                          </motion.button>
                        </motion.div>
                      </div>
                    </div>

                    {/* Right Page - Form */}
                    <div ref={formRef} className="p-6 sm:p-8 md:p-12 relative bg-gradient-to-br from-yellow-50 to-amber-100/50">
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
                            className="w-full px-3 py-3 sm:px-4 sm:py-3 bg-white/80 border-2 border-amber-300 rounded-lg focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all font-serif text-amber-900 text-base min-h-[44px]"
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
                            className="w-full px-3 py-3 sm:px-4 sm:py-3 bg-white/80 border-2 border-amber-300 rounded-lg focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all font-serif text-amber-900 text-base min-h-[44px]"
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
                            className="w-full px-3 py-3 sm:px-4 sm:py-3 bg-white/80 border-2 border-amber-300 rounded-lg focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all font-serif text-amber-900 text-base min-h-[44px]"
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
                            min={getTodayString()}
                            className="w-full px-3 py-3 sm:px-4 sm:py-3 bg-white/80 border-2 border-amber-300 rounded-lg focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all font-serif text-amber-900 text-base min-h-[44px]"
                          />
                        </div>

                        {/* Submit Button */}
                        <motion.button
                          type="submit"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="w-full py-3 sm:py-4 bg-gradient-to-r from-emerald-600 to-emerald-500 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 text-base sm:text-lg min-h-[44px]"
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
