'use client';

import { Phone, MapPin, MessageCircle, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function MobileBottomBar() {
  const actions = [
    {
      icon: Phone,
      label: 'Call',
      href: 'tel:+918217335335',
      color: 'bg-blue-600',
      hoverColor: 'hover:bg-blue-700'
    },
    {
      icon: MapPin,
      label: 'Directions',
      href: 'https://maps.google.com/?q=AR+Hospital+Mysuru',
      color: 'bg-green-600',
      hoverColor: 'hover:bg-green-700'
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      href: 'https://wa.me/918217335335',
      color: 'bg-emerald-600',
      hoverColor: 'hover:bg-emerald-700'
    },
    {
      icon: AlertCircle,
      label: 'Emergency',
      href: 'tel:108',
      color: 'bg-red-600',
      hoverColor: 'hover:bg-red-700'
    }
  ];

  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white border-t-2 border-gray-200 shadow-2xl"
      style={{ 
        paddingBottom: 'env(safe-area-inset-bottom)',
      }}
    >
      <div className="grid grid-cols-4 gap-0">
        {actions.map((action, index) => (
          <a
            key={index}
            href={action.href}
            target={action.href.startsWith('http') ? '_blank' : undefined}
            rel={action.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            className={`flex flex-col items-center justify-center py-3 px-2 ${action.color} ${action.hoverColor} text-white transition-all active:scale-95`}
          >
            <action.icon className="w-6 h-6 mb-1" strokeWidth={2.5} />
            <span className="text-xs font-semibold">{action.label}</span>
          </a>
        ))}
      </div>
    </motion.div>
  );
}
