'use client';
import { useState } from 'react';
import { FiSend, FiMic, FiPaperclip, FiImage } from 'react-icons/fi';

export default function PromptInput({ onSend }: { onSend: (text: string) => void }) {
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim()) {
      onSend(input);
      setInput('');
    }
  };

  return (
    <div className="fixed bottom-16 left-0 right-0 p-4 glass border-t border-white/10">
      <div className="flex items-center gap-2 bg-black/50 rounded-full p-2">
        <button className="p-2 text-gray-400 hover:text-white">
          <FiMic size={20} />
        </button>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          placeholder="Message Cove.ai..."
          className="flex-1 bg-transparent outline-none text-white"
        />
        <button className="p-2 text-gray-400 hover:text-white">
          <FiPaperclip size={20} />
        </button>
        <button className="p-2 text-gray-400 hover:text-white">
          <FiImage size={20} />
        </button>
        <button onClick={handleSend} className="p-2 text-neon-green">
          <FiSend size={20} />
        </button>
      </div>
    </div>
  );
}
