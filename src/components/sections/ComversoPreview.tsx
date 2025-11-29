'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';

export default function ComversoPreview() {
  return (
    <section className="py-12 md:py-20 lg:py-28 bg-[#1A1A1A] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[300px] md:text-[400px] font-serif text-white/5 pointer-events-none select-none">
        *
      </div>
      
      <Container className="text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl mx-auto"
        >
          <p className="text-sm tracking-[0.25em] uppercase text-[var(--terracota)] mb-3">
            Projeto
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white mb-6">
            com.verso
          </h2>
          <p className="text-base md:text-lg text-white/70 leading-relaxed mb-8">
            Um espaço dedicado à reflexão e ao diálogo qualificado sobre temas
            contemporâneos, cultura e comportamento.
          </p>
          <Link
            href="/comverso"
            className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-sm tracking-wider rounded-lg text-white hover:bg-white hover:text-[#1A1A1A] hover:border-white transition-all duration-300 group"
          >
            Saiba mais
            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </Container>
    </section>
  );
}
