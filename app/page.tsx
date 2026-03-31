'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ParticleBackground from '@/components/ParticleBackground';
import AnimatedButton from '@/components/AnimatedButton';
import FeatureCard from '@/components/FeatureCard';
import { useRouter } from 'next/navigation';
import { FiCommand, FiImage, FiVideo, FiCode, FiEdit, FiTrendingUp, FiCalendar, FiZap } from 'react-icons/fi';

export default function HomePage() {
  const [showSplash, setShowSplash] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  const suggestionButtons = [
    { label: 'Generate Image', action: () => router.push('/image') },
    { label: 'Create Video', action: () => router.push('/video') },
    { label: 'Build Website', action: () => router.push('/coding') },
    { label: 'Write Script', action: () => router.push('/editing') },
    { label: 'Code Project', action: () => router.push('/coding') },
    { label: 'Create Story', action: () => router.push('/chat') },
    { label: 'AI Editing', action: () => router.push('/editing') },
    { label: 'Marketing Ideas', action: () => router.push('/chat') },
  ];

  const features = [
    { icon: FiCommand, title: 'AI Chat', desc: 'Smart conversations', link: '/chat' },
    { icon: FiImage, title: 'Image Generator', desc: 'Create stunning visuals', link: '/image' },
    { icon: FiVideo, title: 'Video Creator', desc: 'Generate cinematic clips', link: '/video' },
    { icon: FiCode, title: 'Coding Assistant', desc: 'Write code faster', link: '/coding' },
    { icon: FiEdit, title: 'Script Writer', desc: 'Perfect your text', link: '/editing' },
    { icon: FiZap, title: 'Editing Assistant', desc: 'Polish content', link: '/editing' },
    { icon: FiTrendingUp, title: 'Business Ideas', desc: 'Innovate and grow', link: '/chat' },
    { icon: FiCalendar, title: 'Content Planner', desc: 'Plan your posts', link: '/chat' },
  ];

  if (showSplash) {
    return (
      <motion.div
        className="fixed inset-0 flex flex-col items-center justify-center bg-black z-50"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <ParticleBackground />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            boxShadow: ['0 0 20px #39ff14', '0 0 40px #39ff14', '0 0 20px #39ff14'],
          }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="text-6xl font-bold text-neon-green mb-4"
        >
          Cove.ai
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-white/80 text-lg"
        >
          Cove.ai is listening...
        </motion.p>
      </motion.div>
    );
  }

  return (
    <main className="min-h-screen p-4 pb-20">
      <ParticleBackground />
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Greeting */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-white to-neon-green bg-clip-text text-transparent">
            Hi, Alex!
          </h1>
          <p className="text-gray-300 mt-1">How can I help you today?</p>
          <p className="text-sm text-neon-green/70 mt-1">Your creative AI assistant is ready</p>
        </div>

        {/* Suggestion Buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-12">
          {suggestionButtons.map((btn, idx) => (
            <AnimatedButton
              key={idx}
              onClick={btn.action}
              className="glass-glow text-sm py-2 px-3 rounded-xl hover:scale-105 transition-all"
            >
              {btn.label}
            </AnimatedButton>
          ))}
        </div>

        {/* Popular Features */}
        <h2 className="text-xl font-semibold mb-4 text-neon-green">Popular Features</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {features.map((feature, idx) => (
            <FeatureCard
              key={idx}
              icon={feature.icon}
              title={feature.title}
              description={feature.desc}
              onClick={() => router.push(feature.link)}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
