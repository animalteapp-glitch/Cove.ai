'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FiHome, FiMessageSquare, FiMic, FiImage, FiVideo, FiCode, FiEdit, FiInfo, FiFileText } from 'react-icons/fi';

export default function Navbar() {
  const pathname = usePathname();
  const links = [
    { href: '/', icon: FiHome, label: 'Home' },
    { href: '/chat', icon: FiMessageSquare, label: 'Chat' },
    { href: '/voice', icon: FiMic, label: 'Voice' },
    { href: '/image', icon: FiImage, label: 'Image' },
    { href: '/video', icon: FiVideo, label: 'Video' },
    { href: '/coding', icon: FiCode, label: 'Code' },
    { href: '/editing', icon: FiEdit, label: 'Edit' },
    { href: '/rules', icon: FiInfo, label: 'Rules' },
    { href: '/terms', icon: FiFileText, label: 'Terms' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 glass border-t border-white/10 py-2">
      <div className="flex justify-around items-center">
        {links.map(({ href, icon: Icon, label }) => (
          <Link key={href} href={href}>
            <div className={`flex flex-col items-center p-2 rounded-lg transition-colors ${pathname === href ? 'text-neon-green' : 'text-gray-400 hover:text-white'}`}>
              <Icon size={20} />
              <span className="text-[10px] mt-1">{label}</span>
            </div>
          </Link>
        ))}
      </div>
    </nav>
  );
}
