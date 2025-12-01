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
                href="LINK_AMAZON_MUSIC"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 bg-white/20 text-white text-sm tracking-wider rounded-lg hover:bg-white hover:text-preto transition-all duration-300"
              >
                Amazon Music
              </a>
              <a
                href="LINK_APPLE_PODCASTS"
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
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-2xl md:text-3xl mb-8">
              Participações especiais
            </h2>
            <p className="text-preto/70 leading-relaxed mb-8">
              Além do com.verso, Gabriela participou de outros podcasts e programas.
            </p>
            <div className="grid gap-4">
              <a
                href="https://www.youtube.com/watch?v=igExyjGKLNc"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-6 bg-white rounded-lg hover:shadow-md transition-all text-left"
              >
                <p className="font-medium mb-1">Filó Podcast</p>
                <p className="text-preto/60 text-sm">Conversa sobre psicanálise e filosofia</p>
              </a>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
