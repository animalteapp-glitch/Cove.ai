import { motion } from 'framer-motion';
import { FiCopy, FiShare, FiRefreshCw } from 'react-icons/fi';

export default function MessageBubble({ role, content }: { role: 'user' | 'assistant'; content: string }) {
  const isUser = role === 'user';
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}
    >
      <div className={`max-w-[80%] ${isUser ? 'bg-neon-green/20 border border-neon-green/30 rounded-l-2xl rounded-br-2xl' : 'glass rounded-r-2xl rounded-bl-2xl'} p-3`}>
        <p className="text-sm">{content}</p>
        {!isUser && (
          <div className="flex gap-2 mt-2 text-gray-400">
            <FiCopy className="cursor-pointer hover:text-white" size={14} />
            <FiShare className="cursor-pointer hover:text-white" size={14} />
            <FiRefreshCw className="cursor-pointer hover:text-white" size={14} />
          </div>
        )}
      </div>
    </motion.div>
  );
}
