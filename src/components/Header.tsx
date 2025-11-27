'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Container } from '@/components/ui/Container';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/sobre', label: 'Sobre' },
  { href: '/comverso', label: 'com.verso' },
  { href: '/podcast', label: 'Podcast' },
  { href: '/contato', label: 'Contato' },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full bg-[#F5EDE8]/90 backdrop-blur-md border-b border-black/5">
      <Container>
        <div className="h-20 flex items-center justify-between">
          <Link href="/" className="font-serif text-xl tracking-wide hover:opacity-80 transition-opacity">
            com.verso
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm tracking-wide transition-opacity ${
                  pathname === link.href ? 'opacity-100' : 'opacity-60 hover:opacity-100'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </Container>
    </header>
  );
}
