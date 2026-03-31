'use client';
import { useState } from 'react';
import VoiceCircle from '@/components/VoiceCircle';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import ParticleBackground from '@/components/ParticleBackground';

export default function VoicePage() {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');

  const toggleListening = () => {
    setIsListening(!isListening);
    // Mock recognition
    if (!isListening) {
      setTimeout(() => {
        setTranscript("I'm listening. How can I help?");
      }, 1500);
    } else {
      setTranscript('');
    }
  };

  return (
    <>
      <ParticleBackground />
      <div className="relative h-screen flex flex-col items-center justify-center">
        <VoiceCircle isListening={isListening} />
        <p className="mt-8 text-center text-white/70">
          {isListening ? "Cove.ai is listening..." : "Tap the mic to start"}
        </p>
        {transcript && <p className="mt-4 glass p-2 rounded-lg max-w-xs text-center">{transcript}</p>}
        <div className="fixed bottom-20 flex gap-4">
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={toggleListening}
            className={`p-4 rounded-full ${isListening ? 'bg-red-500' : 'bg-neon-green'} text-black`}
          >
            {isListening ? 'Cancel' : 'Mic'}
          </motion.button>
        </div>
        <Navbar />
      </div>
    </>
  );
}
