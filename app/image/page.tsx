'use client';
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import ParticleBackground from '@/components/ParticleBackground';
import GlassCard from '@/components/GlassCard';

export default function ImagePage() {
  const [prompt, setPrompt] = useState('');
  const [style, setStyle] = useState('Realistic');
  const [aspect, setAspect] = useState('1:1');
  const [generating, setGenerating] = useState(false);
  const [result, setResult] = useState('');

  const generate = async () => {
    if (!prompt) return;
    setGenerating(true);
    // Mock generation
    setTimeout(() => {
      setResult('https://via.placeholder.com/512x512?text=Generated+Image');
      setGenerating(false);
    }, 2000);
  };

  return (
    <>
      <ParticleBackground />
      <div className="relative min-h-screen p-4 pb-20">
        <h1 className="text-2xl font-bold text-neon-green mb-4">Image Generator</h1>
        <GlassCard className="mb-4">
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Describe the image you want..."
            className="w-full bg-transparent border border-white/20 rounded-lg p-2 text-white"
            rows={3}
          />
          <div className="flex flex-wrap gap-2 mt-2">
            {['Realistic', 'Anime', 'Cinematic', 'Fantasy', '3D', 'Minimal', 'Cyberpunk'].map((s) => (
              <button
                key={s}
                onClick={() => setStyle(s)}
                className={`px-3 py-1 rounded-full text-sm ${style === s ? 'bg-neon-green text-black' : 'glass'}`}
              >
                {s}
              </button>
            ))}
          </div>
          <select value={aspect} onChange={(e) => setAspect(e.target.value)} className="mt-2 glass p-2 rounded-lg">
            <option>1:1</option>
            <option>16:9</option>
            <option>9:16</option>
          </select>
          <button
            onClick={generate}
            disabled={generating}
            className="mt-4 w-full glass-glow py-2 rounded-lg disabled:opacity-50"
          >
            {generating ? 'Generating...' : 'Generate'}
          </button>
        </GlassCard>
        {result && (
          <img src={result} alt="Generated" className="rounded-xl w-full mt-4" />
        )}
        <Navbar />
      </div>
    </>
  );
}
