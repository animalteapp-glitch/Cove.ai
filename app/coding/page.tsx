'use client';
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import ParticleBackground from '@/components/ParticleBackground';
import CodeEditor from '@/components/CodeEditor';

export default function CodingPage() {
  const [code, setCode] = useState('// Write your code here');
  const [language, setLanguage] = useState('javascript');
  const [generated, setGenerated] = useState('');

  const generateCode = async () => {
    // Mock AI generation
    setGenerated('function hello() {\n  console.log("Hello from Cove.ai");\n}');
  };

  return (
    <>
      <ParticleBackground />
      <div className="relative min-h-screen p-4 pb-20">
        <h1 className="text-2xl font-bold text-neon-green mb-4">Coding Assistant</h1>
        <div className="flex gap-2 mb-4">
          <select value={language} onChange={(e) => setLanguage(e.target.value)} className="glass p-2 rounded-lg">
            <option>javascript</option>
            <option>python</option>
            <option>html</option>
            <option>css</option>
          </select>
          <button onClick={generateCode} className="glass-glow px-4 py-2 rounded-lg">Generate</button>
        </div>
        <CodeEditor code={generated || code} onChange={setCode} language={language} />
        <Navbar />
      </div>
    </>
  );
}
