import ChatBox from '@/components/ChatBox';
import Navbar from '@/components/Navbar';
import ParticleBackground from '@/components/ParticleBackground';

export default function ChatPage() {
  return (
    <>
      <ParticleBackground />
      <div className="relative h-screen flex flex-col">
        <div className="p-4 glass flex justify-between items-center">
          <h1 className="text-xl font-bold text-neon-green">Cove.ai Chat</h1>
          <button className="text-gray-400">Menu</button>
        </div>
        <ChatBox />
        <Navbar />
      </div>
    </>
  );
}
