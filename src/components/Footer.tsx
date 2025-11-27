'use client';

import Link from 'next/link';
import { Instagram, Mail } from 'lucide-react';
import { Container } from '@/components/ui/Container';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1A1A1A] text-[#F5EDE8] py-16">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Logo e Descrição */}
          <div className="md:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <h2 className="font-serif text-2xl font-light tracking-wide">
                com.verso
              </h2>
            </Link>
            <p className="text-sm text-[#F5EDE8]/60 leading-relaxed max-w-sm">
              Espaço de reflexão, escuta e transformação através da psicanálise,
              filosofia e bons vinhos.
            </p>
          </div>

          {/* Navegação */}
          <div>
            <h3 className="font-sans font-medium mb-4 text-sm uppercase tracking-wide">
              Navegação
            </h3>
            <ul className="space-y-2">
              {[
                { href: '/sobre', label: 'Sobre' },
                { href: '/comverso', label: 'com.verso' },
                { href: '/podcast', label: 'Podcast' },
                { href: '/contato', label: 'Contato' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#F5EDE8]/60 hover:text-[#F5EDE8] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="font-sans font-medium mb-4 text-sm uppercase tracking-wide">
              Contato
            </h3>
            <div className="flex gap-3">
              <a
                href="mailto:contato@gabrielabirger.com"
                className="w-10 h-10 rounded-full border border-[#F5EDE8]/20 flex items-center justify-center hover:bg-[#F5EDE8] hover:text-[#1A1A1A] transition-all"
                aria-label="Email"
              >
                <Mail size={16} />
              </a>
              <a
                href="https://www.instagram.com/_com.verso_"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-[#F5EDE8]/20 flex items-center justify-center hover:bg-[#F5EDE8] hover:text-[#1A1A1A] transition-all"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-[#F5EDE8]/10 text-center">
          <p className="text-xs text-[#F5EDE8]/40 tracking-wide">
            © {currentYear} Gabriela Birger. Todos os direitos reservados.
          </p>
        </div>
      </Container>
    </footer>
  );
}
