'use client';
import { motion } from 'framer-motion';
import { IconType } from 'react-icons';

export default function FeatureCard({
  icon: Icon,
  title,
  description,
  onClick,
}: {
  icon: IconType;
  title: string;
  description: string;
  onClick: () => void;
}) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      onClick={onClick}
      className="glass p-4 rounded-2xl cursor-pointer transition-all hover:border-neon-green/50"
    >
      <Icon className="text-neon-green text-2xl mb-2" />
      <h3 className="font-semibold">{title}</h3>
      <p className="text-xs text-gray-400">{description}</p>
    </motion.div>
  );
}
