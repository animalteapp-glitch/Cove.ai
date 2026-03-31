'use client';
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import ParticleBackground from '@/components/ParticleBackground';
import GlassCard from '@/components/GlassCard';

export default function EditingPage() {
  const [text, setText] = useState('');
  const [result, setResult] = useState('');

  const improve = () => {
    if (!text) return;
    // Mock improvement
    setResult(`Improved: ${text} (enhanced by Cove.ai)`);
  };

  return (
    <>
      <ParticleBackground />
      <div className="relative min-h-screen p-4 pb-20">
        <h1 className="text-2xl font-bold text-neon-green mb-4">Editing Assistant</h1>
        <GlassCard>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text to improve..."
            className="w-full bg-transparent border border-white/20 rounded-lg p-2"
            rows={5}
          />
          <button onClick={improve} className="mt-2 glass-glow px-4 py-2 rounded-lg w-full">Improve</button>
          {result && (
            <div className="mt-4 p-2 glass rounded-lg">
              <p>{result}</p>
            </div>
          )}
        </GlassCard>
        <Navbar />
      </div>
    </>
  );
}
