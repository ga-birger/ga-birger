import { Metadata } from 'next'
import { Container } from '@/components/ui/Container'
import { FileText, ExternalLink } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Publicações',
  description: 'Artigos e monografias de Gabriela Birger sobre psicanálise, saúde mental e temas contemporâneos.',
}

const monografias = [
  { 
    subtitle: 'A importância do sintoma para o tratamento psicanalítico como elemento constituinte da personalidade do sujeito',
    file: '/docs/monografia-1.pdf' 
  },
  { 
    subtitle: 'A queda da racionalidade com a descoberta do inconsciente',
    file: '/docs/monografia-2.pdf' 
  },
  { 
    subtitle: 'O eu entendido como colcha de retalhos de precipitados identificatórios',
    file: '/docs/monografia-3.pdf' 
  },
  { 
    subtitle: 'Projeto e projeções: a dificuldade integrativa frente à ambivalência pulsional',
    file: '/docs/monografia-4.pdf' 
  },
  { 
    subtitle: 'Onde a mente emudece, o corpo soçobra – a importância da elaboração psíquica',
    file: '/docs/monografia-5.pdf' 
  },
  { 
    subtitle: 'O analista é aquele que (sobre)vive',
    file: '/docs/monografia-6.pdf' 
  },
]

export default function PublicacoesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-8 md:pt-12 pb-12 md:pb-16 bg-[var(--creme)]">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm tracking-[0.25em] uppercase text-[var(--terracota)] mb-4">
              Textos
            </p>
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-4">
              Publicações
            </h1>
            <p className="text-[var(--preto)]/60">
              Artigos, monografias e textos sobre psicanálise, filosofia e cultura contemporânea.
            </p>
          </div>
        </Container>
      </section>
      
      {/* Monografias */}
      <section className="py-12 md:py-16 bg-[var(--creme-escuro)]">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-2xl md:text-3xl text-center mb-10">
              Monografias
            </h2>
            <div className="space-y-4">
              {monografias.map((mono, index) => (
                <a
                  key={index}
                  href={mono.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block p-6 bg-white rounded-lg hover:shadow-md transition-all border-l-4 border-transparent hover:border-[var(--terracota)]"
                >
                  <div className="flex items-center justify-between gap-4">
                    <p className="text-[var(--preto)]/80 leading-relaxed group-hover:text-[var(--terracota)] transition-colors">
                      {mono.subtitle}
                    </p>
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[var(--rosa-claro)] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <FileText className="w-5 h-5 text-[var(--terracota)]" />
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </Container>
      </section>
      
      {/* Artigos DEPOIS */}
      <section className="py-12 md:py-16 bg-[var(--creme)]">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-2xl md:text-3xl text-center mb-10">
              Artigos
            </h2>
            <a
              href="https://www.conjur.com.br/2023-jan-21/gabriela-birger-hora-pautar-saude-mental-julgamento/"
              target="_blank"
              rel="noopener noreferrer"
              className="block p-6 bg-white rounded-lg hover:shadow-md transition-all group"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-[var(--terracota)]/10 flex items-center justify-center flex-shrink-0">
                  <ExternalLink className="w-5 h-5 text-[var(--terracota)]" />
                </div>
                <div>
                  <p className="font-medium mb-2 group-hover:text-[var(--terracota)] transition-colors">
                    É hora de pautar a saúde mental no julgamento
                  </p>
                  <p className="text-[var(--preto)]/60 text-sm mb-2">
                    Artigo publicado no ConJur sobre a importância da saúde mental no sistema judiciário.
                  </p>
                  <p className="text-[var(--terracota)] text-sm">ConJur • Janeiro 2023</p>
                </div>
              </div>
            </a>
          </div>
        </Container>
      </section>
    </>
  )
}
