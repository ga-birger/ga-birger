'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';

export default function About() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-[#1A1A1A] mb-6 leading-tight">
              Gabriela Birger
            </h2>
            <p className="font-sans text-lg md:text-xl text-[#1A1A1A]/70 leading-relaxed mb-8">
              Psicanalista, formada em Filosofia e em Direito pela USP e pela
              Université Paris 1. Idealizadora do com.verso, um espaço de reflexão
              que integra psicanálise, filosofia e bons vinhos.
            </p>
            <Link
              href="/sobre"
              className="inline-flex items-center gap-2 px-6 py-3 border border-[#1A1A1A]/20 rounded-full text-sm font-sans font-medium text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white hover:border-[#1A1A1A] transition-all duration-500 group"
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
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-sm">
              <Image
                src="/images/gabriela-birger.jpg"
                alt="Gabriela Birger - Psicanalista"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
