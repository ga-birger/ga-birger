'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';

export default function About() {
  return (
    <section className="py-20 md:py-28 lg:py-32 bg-white">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-lg"
          >
            <p className="text-sm tracking-[0.25em] uppercase text-[var(--terracota)] mb-3">
              Sobre
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-6">
              Gabriela Birger
            </h2>
            <p className="text-base md:text-lg text-[var(--preto)]/70 leading-relaxed mb-8">
              Psicanalista, formada em Filosofia e em Direito pela USP e pela
              Université Paris 1. Idealizadora do com.verso, um espaço de reflexão
              que integra psicanálise, filosofia e bons vinhos.
            </p>
            <Link
              href="/sobre"
              className="inline-flex items-center gap-2 px-6 py-3 border border-[var(--preto)]/20 text-sm tracking-wider rounded-lg hover:border-[var(--preto)] hover:bg-[var(--preto)] hover:text-white transition-all duration-300 group"
            >
              Conheça mais
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="order-first lg:order-last"
          >
            <div className="relative w-full max-w-sm mx-auto lg:mx-0">
              <div className="aspect-[3/4] relative rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/gabriela-birger.jpg"
                  alt="Gabriela Birger - Psicanalista"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 400px"
                  priority
                />
                {/* Borda decorativa */}
                <div className="absolute inset-0 rounded-2xl border border-[var(--preto)]/10" />
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
