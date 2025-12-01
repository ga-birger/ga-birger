'use client'

import { motion } from 'framer-motion'
import { Container } from '../ui/Container'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useState } from 'react'

const SpotifyIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
  </svg>
)

const AmazonIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M.045 18.02c.072-.116.187-.124.348-.022 3.636 2.11 7.594 3.166 11.87 3.166 2.852 0 5.668-.533 8.447-1.595l.315-.14c.138-.06.234-.1.293-.13.226-.088.39-.046.525.13.12.174.09.336-.12.48-.256.19-.6.41-1.006.654-1.244.743-2.64 1.316-4.185 1.726-1.544.406-3.045.61-4.502.61-2.602 0-5.124-.477-7.564-1.43-2.44-.95-4.428-2.16-5.966-3.62-.12-.14-.15-.25-.1-.36zm1.1-1.85c-.09-.14-.06-.27.1-.39.18-.13.37-.09.57.13 1.63 1.89 3.59 3.35 5.88 4.38 2.29 1.03 4.67 1.54 7.14 1.54 2.09 0 4.09-.35 6-.95 1.91-.6 3.58-1.49 5.01-2.67.18-.14.33-.16.45-.06.12.1.13.24.03.42-.1.18-.29.37-.57.57-1.54 1.28-3.36 2.26-5.46 2.94-2.1.68-4.24 1.02-6.42 1.02-2.73 0-5.37-.53-7.92-1.59-2.55-1.06-4.7-2.49-6.45-4.29-.12-.12-.15-.23-.09-.35z"/>
  </svg>
)

const AppleIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
  </svg>
)

// Lista de episódios embed do Spotify (IDs dos episódios)
const episodios = [
  '2Kw8m6wBaI3isK9TDvRWOR', // Substitua pelos IDs reais dos episódios
  // Adicione mais IDs de episódios aqui
]

export function PodcastSection() {
  const [currentEpisode, setCurrentEpisode] = useState(0)

  const nextEpisode = () => {
    setCurrentEpisode((prev) => (prev + 1) % episodios.length)
  }

  const prevEpisode = () => {
    setCurrentEpisode((prev) => (prev - 1 + episodios.length) % episodios.length)
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
        
        {/* Player com navegação */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <div className="relative">
            {/* Setas de navegação */}
            {episodios.length > 1 && (
              <>
                <button
                  onClick={prevEpisode}
                  className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 md:-translate-x-16 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
                  aria-label="Episódio anterior"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextEpisode}
                  className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 md:translate-x-16 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
                  aria-label="Próximo episódio"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </>
            )}
            
            {/* Embed do Spotify */}
            <div className="rounded-lg overflow-hidden shadow-xl">
              <iframe
                src={`https://open.spotify.com/embed/episode/${episodios[currentEpisode]}?utm_source=generator&theme=0`}
                width="100%"
                height="352"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                className="w-full"
              />
            </div>
            
            {/* Indicadores */}
            {episodios.length > 1 && (
              <div className="flex justify-center gap-2 mt-4">
                {episodios.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentEpisode(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentEpisode ? 'bg-white' : 'bg-white/30'
                    }`}
                    aria-label={`Episódio ${index + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
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
            <AmazonIcon />
            Amazon Music
          </a>
          <a
            href="LINK_APPLE_PODCASTS"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#9933CC] text-white text-sm rounded-lg hover:opacity-90 transition-opacity"
          >
            <AppleIcon />
            Apple Podcasts
          </a>
        </motion.div>
      </Container>
    </section>
  )
}

