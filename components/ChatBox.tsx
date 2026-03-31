'use client';
import { useState, useRef, useEffect } from 'react';
import MessageBubble from './MessageBubble';
import PromptInput from './PromptInput';
import { motion } from 'framer-motion';

export default function ChatBox() {
  const [messages, setMessages] = useState<{ role: 'user' | 'assistant'; content: string }[]>([
    { role: 'assistant', content: "Hello! I'm Cove, your AI assistant. How can I help?" }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async (text: string) => {
    if (!text.trim()) return;
    const userMsg = { role: 'user', content: text };
    setMessages(prev => [...prev, userMsg]);
    setIsTyping(true);
    // Mock AI response
    setTimeout(() => {
      const aiMsg = { role: 'assistant', content: `You said: ${text}. This is a demo response.` };
      setMessages(prev => [...prev, aiMsg]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <div className="flex flex-col h-full pb-20">
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg, idx) => (
          <MessageBubble key={idx} role={msg.role} content={msg.content} />
        ))}
        {isTyping && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center space-x-1 text-gray-400"
          >
            <span>Cove is typing</span>
            <span className="animate-pulse">...</span>
          </motion.div>
        )}
        <div ref={messagesEndRef} />
      </div>
      <PromptInput onSend={sendMessage} />
    </div>
  );
}
