'use client';

import { motion } from 'framer-motion';
import BioSection from '@/components/sections/BioSection';
import FormacaoList from '@/components/sections/FormacaoList';
import SectionWrapper from '@/components/ui/SectionWrapper';
import Button from '@/components/Button';
import { ArrowRight } from 'lucide-react';

export default function Sobre() {
  return (
    <div className="overflow-x-hidden">
      {/* Seção 1: Hero */}
      <section className="min-h-[60vh] flex items-center justify-center bg-creme">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-semibold text-preto mb-4">
              Gabriela Birger
            </h1>
            <p className="font-sans text-2xl md:text-3xl text-preto/60">
              Psicanalista
            </p>
          </motion.div>
        </div>
      </section>

      {/* Seção 2: Bio Completa */}
      <SectionWrapper background="transparent">
        <BioSection />
      </SectionWrapper>

      {/* Seção 3: Formação */}
      <SectionWrapper background="creme">
        <FormacaoList />
      </SectionWrapper>

      {/* Seção 4: Consultório */}
      <SectionWrapper background="transparent">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
          style={{ backgroundColor: 'var(--rosa-claro)' }}
        >
          <div className="p-12 md:p-16 rounded-lg">
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-preto mb-6">
              Consultório
            </h2>
            <p className="font-sans text-lg md:text-xl text-preto/80 leading-relaxed mb-4">
              Atendimento presencial em São Paulo e online para todo o Brasil.
            </p>
            <p className="font-sans text-base md:text-lg text-preto/60 mb-8">
              Para agendar uma conversa inicial, entre em contato.
            </p>
            <Button href="/contato" variant="primary" size="lg">
              Entrar em contato
              <ArrowRight size={24} />
            </Button>
          </div>
        </motion.div>
      </SectionWrapper>
    </div>
  );
}
