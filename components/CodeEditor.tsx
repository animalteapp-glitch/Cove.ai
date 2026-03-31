'use client';
import { useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { FiCopy, FiDownload, FiInfo } from 'react-icons/fi';

export default function CodeEditor({ code, onChange, language }: { code: string; onChange: (c: string) => void; language: string }) {
  const [editing, setEditing] = useState(false);

  return (
    <div className="glass rounded-lg overflow-hidden">
      <div className="flex justify-between p-2 border-b border-white/10">
        <div className="flex gap-2">
          <FiCopy className="cursor-pointer" />
          <FiDownload className="cursor-pointer" />
          <FiInfo className="cursor-pointer" />
        </div>
        <button onClick={() => setEditing(!editing)} className="text-xs">
          {editing ? 'Preview' : 'Edit'}
        </button>
      </div>
      {editing ? (
        <textarea
          value={code}
          onChange={(e) => onChange(e.target.value)}
          className="w-full h-64 bg-black/50 p-4 font-mono text-sm"
        />
      ) : (
        <SyntaxHighlighter language={language} style={atomOneDark} customStyle={{ margin: 0, padding: '1rem' }}>
          {code}
        </SyntaxHighlighter>
      )}
    </div>
  );
}
