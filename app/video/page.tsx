'use client';
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import ParticleBackground from '@/components/ParticleBackground';
import GlassCard from '@/components/GlassCard';

export default function VideoPage() {
  const [prompt, setPrompt] = useState('');
  const [duration, setDuration] = useState('3s');
  const [style, setStyle] = useState('Realistic');
  const [generating, setGenerating] = useState(false);

  const generate = () => {
    if (!prompt) return;
    setGenerating(true);
    setTimeout(() => {
      alert('Video generation would happen here (mock)');
      setGenerating(false);
    }, 3000);
  };

  return (
    <>
      <ParticleBackground />
      <div className="relative min-h-screen p-4 pb-20">
        <h1 className="text-2xl font-bold text-neon-green mb-4">Video Creator</h1>
        <GlassCard>
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Describe your video..."
            className="w-full bg-transparent border border-white/20 rounded-lg p-2"
            rows={3}
          />
          <div className="flex gap-2 mt-2">
            <select value={duration} onChange={(e) => setDuration(e.target.value)} className="glass p-2 rounded-lg">
              <option>3s</option>
              <option>5s</option>
              <option>10s</option>
            </select>
            <select value={style} onChange={(e) => setStyle(e.target.value)} className="glass p-2 rounded-lg">
              <option>Realistic</option>
              <option>Anime</option>
              <option>Cinematic</option>
            </select>
          </div>
          <button
            onClick={generate}
            disabled={generating}
            className="mt-4 w-full glass-glow py-2 rounded-lg"
          >
            {generating ? 'Creating...' : 'Generate Video'}
          </button>
        </GlassCard>
        <Navbar />
      </div>
    </>
  );
}
