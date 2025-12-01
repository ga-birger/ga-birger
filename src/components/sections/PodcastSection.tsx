'use client'

import { motion } from 'framer-motion'
import { Container } from '../ui/Container'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useState, useRef } from 'react'
import Link from 'next/link'

const SpotifyIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
  </svg>
)

// IDs dos episódios do podcast com.verso no Spotify
// Para pegar o ID: abra o episódio no Spotify > Share > Copy Episode Link > o ID é a parte após /episode/
const episodios = [
  { 
    id: '3NZGaOQD79tO12wuOhLZf9', // Este é o ID do SHOW (mostra episódio mais recente)
    isShow: true 
  },
  // Adicione IDs de episódios específicos aqui quando tiver:
  // { id: 'ID_EPISODIO_1', isShow: false },
  // { id: 'ID_EPISODIO_2', isShow: false },
]

export function PodcastSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const scrollRef = useRef<HTMLDivElement>(null)

  const scrollTo = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 400
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section className="py-12 md:py-20 lg:py-28 bg-verde-oliva">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <p className="text-sm tracking-[0.25em] uppercase text-white/60 mb-3">
            Podcast
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">
            com.verso
          </h2>
          <p className="text-white/70 max-w-xl mx-auto">
            Conversas sobre psicanálise, filosofia e cultura contemporânea.
          </p>
        </motion.div>
        
        {/* Player principal com navegação */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative max-w-4xl mx-auto"
        >
          {/* Setas de navegação */}
          <button
            onClick={() => scrollTo('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-14 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10 hidden md:flex"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => scrollTo('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-14 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10 hidden md:flex"
            aria-label="Próximo"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Container com scroll horizontal */}
          <div 
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {/* Episódio principal (maior) */}
            <div className="flex-shrink-0 w-full md:w-[60%] snap-center">
              <div className="rounded-lg overflow-hidden shadow-xl bg-white/5">
                <iframe
                  src="https://open.spotify.com/embed/show/3NZGaOQD79tO12wuOhLZf9?utm_source=generator&theme=0"
                  width="100%"
                  height="352"
                  frameBorder="0"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                  className="w-full"
                />
              </div>
              <p className="text-center text-white/50 text-sm mt-3">Episódio mais recente</p>
            </div>
            
            {/* Episódios anteriores (menores) - usando lista compacta do show */}
            <div className="flex-shrink-0 w-full md:w-[38%] snap-center">
              <div className="rounded-lg overflow-hidden shadow-xl bg-white/5">
                <iframe
                  src="https://open.spotify.com/embed/show/3NZGaOQD79tO12wuOhLZf9/list?utm_source=generator&theme=0"
                  width="100%"
                  height="352"
                  frameBorder="0"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                  className="w-full"
                />
              </div>
              <p className="text-center text-white/50 text-sm mt-3">Todos os episódios</p>
            </div>
          </div>
          
          {/* Indicador de scroll no mobile */}
          <p className="text-center text-white/40 text-xs mt-2 md:hidden">
            ← Deslize para ver mais →
          </p>
        </motion.div>
        
        {/* Botões das plataformas */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-3 mt-10"
        >
          <a
            href="https://open.spotify.com/show/3NZGaOQD79tO12wuOhLZf9"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#1DB954] text-white text-sm rounded-lg hover:opacity-90 transition-opacity"
          >
            <SpotifyIcon />
            Spotify
          </a>
          <a
            href="LINK_AMAZON_MUSIC"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#00A8E1] text-white text-sm rounded-lg hover:opacity-90 transition-opacity"
          >
            Amazon Music
          </a>
          <a
            href="LINK_APPLE_PODCASTS"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#9933CC] text-white text-sm rounded-lg hover:opacity-90 transition-opacity"
          >
            Apple Podcasts
          </a>
        </motion.div>
        
        {/* Link para página */}
        <div className="text-center mt-6">
          <Link
            href="/podcast"
            className="text-white/60 text-sm hover:text-white transition-colors"
          >
            Ver mais sobre o podcast →
          </Link>
        </div>
      </Container>
    </section>
  )
}
