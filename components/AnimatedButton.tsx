'use client';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

export default function AnimatedButton({
  children,
  onClick,
  className = '',
}: {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
}) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`transition-all duration-200 ${className}`}
    >
      {children}
    </motion.button>
  );
}
