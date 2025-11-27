'use client';

import { motion } from 'framer-motion';
import Pilares from '@/components/sections/Pilares';
import SectionWrapper from '@/components/ui/SectionWrapper';
import Button from '@/components/Button';
import { Instagram } from 'lucide-react';

export default function ComVerso() {
  return (
    <div className="overflow-x-hidden">
      {/* Seção 1: Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-creme overflow-hidden">
        {/* Asterisco decorativo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
          animate={{ opacity: 0.05, scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-preto text-[300px] md:text-[400px] font-serif pointer-events-none"
          aria-hidden="true"
        >
          *
        </motion.div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
          >
            <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl font-semibold text-preto mb-6">
              com.verso
            </h1>
            <p className="font-sans text-xl md:text-2xl lg:text-3xl text-preto/70 tracking-wide">
              conexões • psicanálise • bons vinhos
            </p>
          </motion.div>
        </div>
      </section>

      {/* Seção 2: O que é */}
      <SectionWrapper background="transparent">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-preto mb-8 text-center">
            O que é o com.verso?
          </h2>

          <div className="space-y-6">
            <p className="font-sans text-lg md:text-xl text-preto/80 leading-relaxed text-center">
              Idealizado em 2023, o com.verso é um espaço dedicado à reflexão e
              ao diálogo qualificado sobre temas contemporâneos, cultura e
              comportamento, integrando referências da filosofia e da
              psicanálise.
            </p>
            <p className="font-sans text-lg md:text-xl text-preto/80 leading-relaxed text-center">
              Diferentemente de aulas ou palestras tradicionais, o com.verso
              propõe encontros presenciais que incentivam a troca, a escuta e o
              pensamento crítico em um ambiente acolhedor e descontraído — onde
              uma taça de vinho costuma acompanhar as conversas.
            </p>
            <p className="font-sans text-lg md:text-xl text-preto/80 leading-relaxed text-center">
              Os encontros são realizados mensalmente em São Paulo, e a
              programação completa pode ser consultada no Instagram do projeto,
              que também reúne textos, reflexões e ensaios produzidos ao longo
              das discussões.
            </p>
          </div>
        </motion.div>
      </SectionWrapper>

      {/* Seção 3: Pilares */}
      <SectionWrapper background="creme">
        <Pilares />
      </SectionWrapper>

      {/* Seção 4: CTA Instagram */}
      <SectionWrapper background="preto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="mb-8">
            <Instagram size={64} className="mx-auto mb-6 text-branco/80" />
          </div>

          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold mb-6">
            Acompanhe a programação
          </h2>
          <p className="font-sans text-lg md:text-xl text-branco/90 leading-relaxed mb-10">
            Os próximos encontros e conteúdos exclusivos estão no Instagram.
          </p>
          <Button
            href="https://www.instagram.com/_com.verso_"
            target="_blank"
            variant="outline"
            size="lg"
          >
            <Instagram size={24} />
            Seguir @_com.verso_
          </Button>
        </motion.div>
      </SectionWrapper>
    </div>
  );
}
