import { Metadata } from 'next'
import { Container } from '@/components/ui/Container'

export const metadata: Metadata = {
  title: 'Podcast',
  description: 'Ouça o podcast com.verso - conversas sobre psicanálise, filosofia e cultura contemporânea.',
}

const SpotifyIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
  </svg>
)

export default function PodcastPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-8 md:pt-12 pb-12 md:pb-16 bg-verde-oliva text-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm tracking-[0.25em] uppercase text-white/60 mb-4">
              Podcast
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6">
              com.verso
            </h1>
            <p className="text-lg text-white/80 leading-relaxed mb-8">
              Conversas sobre psicanálise, filosofia e cultura contemporânea. 
              Disponível no Spotify, Amazon Music e Apple Podcasts.
            </p>
            
            {/* Botões das plataformas */}
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href="https://open.spotify.com/show/3NZGaOQD79tO12wuOhLZf9"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 bg-white text-preto text-sm tracking-wider rounded-lg hover:bg-mostarda transition-all duration-300"
              >
                <SpotifyIcon />
                Spotify
              </a>
              <a
                href="https://music.amazon.com.br/podcasts/753d7100-fcf0-4017-85f8-103067fdabf8/com-verso"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 bg-white/20 text-white text-sm tracking-wider rounded-lg hover:bg-white hover:text-preto transition-all duration-300"
              >
                Amazon Music
              </a>
              <a
                href="https://podcasts.apple.com/us/podcast/com-verso/id1841503656"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 bg-white/20 text-white text-sm tracking-wider rounded-lg hover:bg-white hover:text-preto transition-all duration-300"
              >
                Apple Podcasts
              </a>
            </div>
          </div>
        </Container>
      </section>
      
      {/* Player principal - mostra o show completo */}
      <section className="py-12 md:py-16 bg-creme">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-2xl md:text-3xl text-center mb-8">
              Últimos episódios
            </h2>
            <div className="rounded-lg overflow-hidden shadow-lg">
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
          </div>
        </Container>
      </section>
      
      {/* Participações */}
      <section className="py-12 md:py-16 bg-creme-escuro">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-2xl md:text-3xl text-center mb-8">
              Participações especiais
            </h2>
            <p className="text-preto/70 leading-relaxed mb-8 text-center">
              Além do com.verso, Gabriela participou de outros podcasts e apareceu na mídia.
            </p>
            
            <div className="space-y-4">
              {/* Reportagem CLAUDIA - Vídeo YouTube */}
              <a
                href="https://www.youtube.com/watch?v=km9toqWcMsE"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-6 bg-white rounded-lg hover:shadow-md transition-all group"
              >
                <div className="w-14 h-14 rounded-lg bg-red-500/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-red-500" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </div>
                <div>
                  <p className="font-medium mb-1 group-hover:text-terracota transition-colors">
                    Revista CLAUDIA
                  </p>
                  <p className="text-preto/60 text-sm">
                    Entrevista em vídeo sobre o com.verso
                  </p>
                </div>
              </a>
              
              {/* Participação em podcast */}
              <a
                href="https://open.spotify.com/episode/2Kw8m6wBaI3isK9TDvRWOR"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-6 bg-white rounded-lg hover:shadow-md transition-all group"
              >
                <div className="w-14 h-14 rounded-lg bg-[#1DB954]/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-[#1DB954]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                  </svg>
                </div>
                <div>
                  <p className="font-medium mb-1 group-hover:text-terracota transition-colors">
                    Participação em Podcast
                  </p>
                  <p className="text-preto/60 text-sm">
                    Episódio especial sobre psicanálise e cultura
                  </p>
                </div>
              </a>
              
              {/* Filó Podcast */}
              <a
                href="https://www.youtube.com/watch?v=igExyjGKLNc"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-6 bg-white rounded-lg hover:shadow-md transition-all group"
              >
                <div className="w-14 h-14 rounded-lg bg-red-500/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-red-500" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </div>
                <div>
                  <p className="font-medium mb-1 group-hover:text-terracota transition-colors">
                    Filó Podcast
                  </p>
                  <p className="text-preto/60 text-sm">
                    Conversa sobre psicanálise e filosofia
                  </p>
                </div>
              </a>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
