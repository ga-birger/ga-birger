import { Metadata } from 'next'
import { Container } from '@/components/ui/Container'
import Image from 'next/image'
import { MapPin } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Sobre',
  description: 'Conheça Gabriela Birger - Psicanalista formada pela USP e Sorbonne, idealizadora do com.verso. Atendimento em São Paulo e online.',
}

export default function SobrePage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-8 md:pt-12 pb-12 md:pb-16 bg-[var(--creme)]">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <p className="text-sm tracking-[0.25em] uppercase text-[var(--terracota)] mb-3">
                Sobre
              </p>
              <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-4">
                Gabriela Birger
              </h1>
              <p className="text-[var(--preto)]/60">
                Psicanalista • Filósofa • Idealizadora do com.verso
              </p>
            </div>
            
            {/* Foto */}
            <div className="flex justify-center mb-10">
              <div className="relative w-56 md:w-64 aspect-[3/4] rounded-xl overflow-hidden">
                <Image
                  src="/images/gabriela-birger.jpg"
                  alt="Gabriela Birger"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            
            {/* Bio completa */}
            <div className="max-w-2xl mx-auto space-y-4 text-center">
              <p className="text-[var(--preto)]/70 leading-relaxed">
                Gabriela Birger é psicanalista, formada em Filosofia e em Direito pela Universidade de São Paulo (USP) e pela Université Paris 1 – Panthéon-Sorbonne.
              </p>
              <p className="text-[var(--preto)]/70 leading-relaxed">
                Formou-se em psicanálise pelo Centro de Estudos Psicanalíticos, pelo Instituto Sedes Sapientiae e pelo Instituto de Psiquiatria da USP. É Associate Coach certificada pelo NeuroLeadership Institute, em Nova York.
              </p>
              <p className="text-[var(--preto)]/70 leading-relaxed">
              Atende adolescentes, adultos, casais e famílias em consultório particular, além de prestar consultoria em saúde mental e liderança para organizações. 
              Além disso, é a idealizadora do com.verso, um espaço dedicado à promoção de encontros e discussões de temas da atualidade.
              </p>
            </div>
          </div>
        </Container>
      </section>
      
      {/* Formação */}
      <section className="py-12 md:py-16 bg-[var(--creme-escuro)]">
        <Container>
          <div className="max-w-2xl mx-auto">
            <h2 className="font-serif text-2xl md:text-3xl text-center mb-8">
              Formação
            </h2>
            <div className="space-y-4">
              <div className="bg-white p-5 rounded-lg">
                <p className="font-medium mb-1">Psicanálise</p>
                <p className="text-[var(--preto)]/60 text-sm">Centro de Estudos Psicanalíticos, Instituto Sedes Sapientiae e Instituto de Psiquiatria da USP</p>
              </div>
              <div className="bg-white p-5 rounded-lg">
                <p className="font-medium mb-1">Filosofia</p>
                <p className="text-[var(--preto)]/60 text-sm">Universidade de São Paulo (USP)</p>
              </div>
              <div className="bg-white p-5 rounded-lg">
                <p className="font-medium mb-1">Direito</p>
                <p className="text-[var(--preto)]/60 text-sm">Universidade de São Paulo (USP) e Université Paris 1 – Panthéon-Sorbonne</p>
              </div>
              <div className="bg-white p-5 rounded-lg">
                <p className="font-medium mb-1">Associate Coach</p>
                <p className="text-[var(--preto)]/60 text-sm">NeuroLeadership Institute, Nova York</p>
              </div>
            </div>
          </div>
        </Container>
      </section>
      
      {/* Consultório */}
      <section className="py-12 md:py-16 bg-[var(--creme)]">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-2xl md:text-3xl text-center mb-4">
              Consultório
            </h2>
            <div className="flex flex-col items-center gap-1 text-[var(--preto)]/60 mb-8">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <p className="text-sm">
                  Rua Dr. Guilherme Bannitz, 126 - CJ 82 - Vila Nova Conceição
                </p>
              </div>
              <p className="text-sm">São Paulo - SP, 04532-010</p>
            </div>
            
            <div className="grid grid-cols-2 gap-4 max-w-xl mx-auto">
              {[1, 2].map((num) => (
                <div 
                  key={num} 
                  className="relative aspect-[3/4] rounded-lg overflow-hidden"
                >
                  <Image
                    src={`/images/consultorio/consultorio-${num}.jpg`}
                    alt={`Consultório - Imagem ${num}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <p className="text-[var(--preto)]/60 text-sm mb-4">
                Atendimento presencial e online
              </p>
              <a
                href="https://wa.me/5511982925279"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--preto)] text-white text-sm tracking-wider rounded-lg hover:bg-[var(--terracota)] transition-all duration-300"
              >
                Agendar consulta
              </a>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
