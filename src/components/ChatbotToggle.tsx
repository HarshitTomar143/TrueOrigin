'use client';

import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

interface ChatbotToggleProps {
  onClick: () => void;
}

export default function ChatbotToggle({ onClick }: ChatbotToggleProps) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-r from-[#3A5B22] to-[#4A7C59] text-white rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 z-40 flex items-center justify-center group"
      title="Chat with True Origin Guide"
    >
      <MessageCircle className="w-7 h-7 group-hover:scale-110 transition-transform duration-300" />
      
      {/* Pulse animation */}
      <motion.div
        className="absolute inset-0 rounded-full bg-[#3A5B22] opacity-20"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0, 0.2],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </motion.button>
  );
}
