'use client';

import { motion } from 'framer-motion';
import BioSection from '@/components/sections/BioSection';
import FormacaoList from '@/components/sections/FormacaoList';
import SectionWrapper from '@/components/ui/SectionWrapper';
import Button from '@/components/Button';
import { ArrowRight, MapPin } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import Image from 'next/image';

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
      <section className="py-12 md:py-20 bg-creme">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-2xl md:text-3xl text-center mb-4">
              Consultório
            </h2>
            <div className="flex flex-col items-center gap-1 text-preto/60 mb-10">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <p className="text-sm">
                  Rua Dr. Guilherme Bannitz, 126 - CJ 82 - Vila Nova Conceição
                </p>
              </div>
              <p className="text-sm">São Paulo - SP, 04532-010</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
              {[1, 2, 3, 4, 5, 6].map((num) => (
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
            
            <div className="text-center mt-10">
              <p className="text-preto/60 mb-4">
                Atendimento presencial e online
              </p>
              <a
                href="https://wa.me/5511982925279"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-preto text-white text-sm tracking-wider rounded-lg hover:bg-terracota transition-all duration-300"
              >
                Agendar consulta
              </a>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
