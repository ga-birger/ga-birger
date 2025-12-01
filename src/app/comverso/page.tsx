import { Metadata } from 'next'
import { Container } from '@/components/ui/Container'
import Image from 'next/image'
import { Instagram } from 'lucide-react'

export const metadata: Metadata = {
  title: 'com.verso',
  description: 'O com.verso é um espaço de reflexão que integra filosofia, psicanálise e vinho. Encontros mensais em São Paulo.',
}

export default function ComversoPage() {
  return (
    <>
      {/* Hero com símbolo */}
      <section className="pt-8 md:pt-12 pb-12 md:pb-20 bg-[var(--preto)] text-white">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            {/* Símbolo 02 */}
            <div className="flex justify-center mb-8">
              <Image
                src="/images/brand/simbolos-02.png"
                alt="com.verso"
                width={200}
                height={200}
                className="w-32 md:w-40 h-auto invert opacity-90"
              />
            </div>
            
            <p className="text-sm tracking-[0.25em] uppercase text-[var(--mostarda)] mb-4">
              Projeto
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6">
              com.verso
            </h1>
            <p className="text-lg text-white/70 leading-relaxed mb-8 max-w-2xl mx-auto">
              Um espaço dedicado à reflexão e ao diálogo qualificado sobre temas contemporâneos, cultura e comportamento. Integrando filosofia, psicanálise e vinho.
            </p>
            <a
              href="https://www.instagram.com/_com.verso_"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[var(--preto)] text-sm tracking-wider rounded-lg hover:bg-[var(--mostarda)] transition-all duration-300"
            >
              <Instagram className="w-4 h-4" />
              Acompanhe no Instagram
            </a>
          </div>
        </Container>
      </section>
      
      {/* Símbolo 04 - comFILOSOFIA etc */}
      <section className="py-12 md:py-20 bg-[var(--creme)]">
        <Container>
          <div className="flex justify-center">
            <Image
              src="/images/brand/simbolos-04.png"
              alt="comFILOSOFIA, comPSICANÁLISE, comVINHO, com.verso"
              width={600}
              height={400}
              className="w-full max-w-md md:max-w-lg h-auto"
            />
          </div>
        </Container>
      </section>
      
      {/* Sobre o projeto */}
      <section className="py-12 md:py-20 bg-[var(--creme-escuro)]">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-2xl md:text-3xl text-center mb-8">
              Sobre o projeto
            </h2>
            <div className="space-y-6 text-[var(--preto)]/70 leading-relaxed">
              <p>
                O com.verso nasceu em 2023 como um espaço de encontro e reflexão. Mensalmente, reunimos um público qualificado em São Paulo para conversas que atravessam a psicanálise, a filosofia e a cultura contemporânea — sempre acompanhadas de bons vinhos.
              </p>
              <p>
                Cada edição aborda um tema específico, convidando os participantes a pensar sobre questões que atravessam a vida cotidiana: relações, trabalho, corpo, desejo, tempo e tantas outras.
              </p>
              <p>
                Mais do que um evento, o com.verso é uma experiência de escuta e diálogo, um espaço para pausar e refletir em meio à aceleração do mundo contemporâneo.
              </p>
            </div>
          </div>
        </Container>
      </section>
      
      {/* Os três pilares com símbolo 03 */}
      <section className="py-12 md:py-20 bg-[var(--creme)]">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-2xl md:text-3xl text-center mb-12">
              Os três pilares
            </h2>
            
            {/* Símbolo do triângulo */}
            <div className="flex justify-center mb-12">
              <Image
                src="/images/brand/simbolos-03.png"
                alt="Filosofia, Psicanálise e Vinho"
                width={500}
                height={400}
                className="w-full max-w-sm md:max-w-md h-auto"
              />
            </div>
            
            {/* Descrições */}
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <h3 className="font-serif text-xl mb-3">Filosofia</h3>
                <p className="text-[var(--preto)]/60 text-sm">
                  O pensamento crítico como ferramenta de compreensão do mundo e de nós mesmos.
                </p>
              </div>
              <div>
                <h3 className="font-serif text-xl mb-3">Psicanálise</h3>
                <p className="text-[var(--preto)]/60 text-sm">
                  A escuta do inconsciente e suas manifestações na vida cotidiana.
                </p>
              </div>
              <div>
                <h3 className="font-serif text-xl mb-3">Vinho</h3>
                <p className="text-[var(--preto)]/60 text-sm">
                  O ritual do encontro, a celebração da conversa e do convívio.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
      
      {/* CTA Final */}
      <section className="py-12 md:py-20 bg-[var(--terracota)] text-white">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-serif text-2xl md:text-3xl mb-4">
              Participe do próximo encontro
            </h2>
            <p className="text-white/80 mb-8">
              Acompanhe o Instagram para saber das próximas edições e garantir sua vaga.
            </p>
            <a
              href="https://www.instagram.com/_com.verso_"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[var(--preto)] text-sm tracking-wider rounded-lg hover:bg-[var(--mostarda)] transition-all duration-300"
            >
              <Instagram className="w-4 h-4" />
              @_com.verso_
            </a>
          </div>
        </Container>
      </section>
    </>
  )
}
