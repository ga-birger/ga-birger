'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Container } from './ui/Container'
import { Instagram, Mail } from 'lucide-react'

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className || "w-5 h-5"}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
)

const SpotifyIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className || "w-5 h-5"}>
    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
  </svg>
)

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/sobre', label: 'Sobre' },
  { href: '/comverso', label: 'com.verso' },
  { href: '/podcast', label: 'Podcast' },
  { href: '/publicacoes', label: 'Publicações' },
  { href: '/contato', label: 'Contato' },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-[var(--preto)] text-white">
      <Container>
        <div className="py-12 md:py-16 lg:py-20">
          
          {/* Mobile: Tudo centralizado */}
          <div className="flex flex-col items-center text-center lg:hidden">
            {/* Logo */}
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/images/brand/logo-gabriela-birger-white.png"
                alt="Gabriela Birger"
                width={280}
                height={90}
                className="h-24 w-auto object-contain"
              />
            </Link>
            
            {/* Descrição */}
            <p className="text-white/60 text-sm leading-relaxed max-w-sm mb-8">
              Psicanalista e idealizadora do com.verso, um espaço dedicado à reflexão e ao diálogo qualificado.
            </p>
            
            {/* Navegação e Contato lado a lado */}
            <div className="grid grid-cols-2 gap-8 w-full max-w-sm mb-8">
              {/* Navegação */}
              <div>
                <h4 className="text-xs font-medium tracking-wider uppercase mb-4 text-white/40">
                  Navegação
                </h4>
                <nav className="flex flex-col gap-2">
                  {navLinks.slice(0, 4).map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-white/70 hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </div>
              
              {/* Contato */}
              <div>
                <h4 className="text-xs font-medium tracking-wider uppercase mb-4 text-white/40">
                  Contato
                </h4>
                <div className="flex flex-col gap-2">
                  <a 
                    href="https://wa.me/5511982925279"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 hover:text-white transition-colors text-sm"
                  >
                    WhatsApp
                  </a>
                  <a 
                    href="mailto:gabibirger@gmail.com"
                    className="text-white/70 hover:text-white transition-colors text-sm"
                  >
                    Email
                  </a>
                  <span className="text-white/70 text-sm">
                    São Paulo, SP
                  </span>
                </div>
              </div>
            </div>
            
            {/* Redes sociais */}
            <div className="flex gap-3 mb-8">
              <a 
                href="https://wa.me/5511982925279"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[var(--terracota)] transition-all duration-300"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon className="w-4 h-4" />
              </a>
              <a 
                href="https://www.instagram.com/_com.verso_"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[var(--terracota)] transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                href="https://open.spotify.com/show/3NZGaOQD79tO12wuOhLZf9"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[var(--terracota)] transition-all duration-300"
                aria-label="Spotify"
              >
                <SpotifyIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Desktop: Layout em colunas */}
          <div className="hidden lg:grid lg:grid-cols-4 gap-8">
            {/* Coluna 1 - Logo e descrição */}
            <div className="lg:col-span-2">
              <Link href="/" className="inline-block mb-6">
                <Image
                  src="/images/brand/logo-gabriela-birger-white.png"
                  alt="Gabriela Birger"
                  width={360}
                  height={120}
                  className="h-28 w-auto object-contain"
                />
              </Link>
              <p className="text-white/60 text-sm leading-relaxed max-w-sm">
                Psicanalista e idealizadora do com.verso, um espaço dedicado à reflexão e ao diálogo qualificado sobre temas contemporâneos, cultura e comportamento.
              </p>
            </div>
            
            {/* Coluna 2 - Navegação */}
            <div>
              <h4 className="text-sm font-medium tracking-wider uppercase mb-6 text-white/40">
                Navegação
              </h4>
              <nav className="flex flex-col gap-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-white/70 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
            
            {/* Coluna 3 - Contato */}
            <div>
              <h4 className="text-sm font-medium tracking-wider uppercase mb-6 text-white/40">
                Contato
              </h4>
              <div className="flex flex-col gap-4">
                <a 
                  href="https://wa.me/5511982925279"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-white/70 hover:text-white transition-colors text-sm"
                >
                  <WhatsAppIcon className="w-5 h-5" />
                  <span>+55 11 98292-5279</span>
                </a>
                <a 
                  href="mailto:gabibirger@gmail.com"
                  className="inline-flex items-center gap-3 text-white/70 hover:text-white transition-colors text-sm"
                >
                  <Mail className="w-5 h-5" />
                  <span>gabibirger@gmail.com</span>
                </a>
                <p className="text-white/70 text-sm">
                  São Paulo, SP
                </p>
              </div>
              
              {/* Redes sociais */}
              <div className="flex gap-3 mt-6">
                <a 
                  href="https://wa.me/5511982925279"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[var(--terracota)] transition-all duration-300"
                  aria-label="WhatsApp"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                </a>
                <a 
                  href="https://www.instagram.com/_com.verso_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[var(--terracota)] transition-all duration-300"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a 
                  href="https://open.spotify.com/show/3NZGaOQD79tO12wuOhLZf9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[var(--terracota)] transition-all duration-300"
                  aria-label="Spotify"
                >
                  <SpotifyIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Barra inferior */}
        <div className="border-t border-white/10 py-6">
          <p className="text-center text-white/40 text-xs">
            © {currentYear} Gabriela Birger. Todos os direitos reservados.
          </p>
        </div>
      </Container>
    </footer>
  )
}
