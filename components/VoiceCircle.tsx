'use client';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function VoiceCircle({ isListening }: { isListening: boolean }) {
  const [waveAmplitude, setWaveAmplitude] = useState(1);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isListening) {
      interval = setInterval(() => {
        setWaveAmplitude(Math.random() * 20 + 10);
      }, 100);
    } else {
      setWaveAmplitude(1);
    }
    return () => clearInterval(interval);
  }, [isListening]);

  return (
    <div className="relative flex items-center justify-center">
      <motion.div
        animate={{
          scale: isListening ? [1, 1.2, 1] : 1,
          boxShadow: isListening ? ['0 0 20px #39ff14', '0 0 40px #39ff14', '0 0 20px #39ff14'] : 'none',
        }}
        transition={{ repeat: isListening ? Infinity : 0, duration: 1.5 }}
        className="w-40 h-40 rounded-full bg-neon-green/20 border-2 border-neon-green flex items-center justify-center"
      >
        <svg width="80" height="80" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="40" fill="none" stroke="#39ff14" strokeWidth="2" />
          {[...Array(3)].map((_, i) => (
            <circle
              key={i}
              cx="50"
              cy="50"
              r={20 + i * 10 + (isListening ? waveAmplitude / 2 : 0)}
              fill="none"
              stroke="#39ff14"
              strokeWidth="1"
              opacity={0.3}
            />
          ))}
        </svg>
      </motion.div>
    </div>
  );
}
