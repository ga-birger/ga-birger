'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';

export default function ComversoPreview() {
  return (
    <section className="py-20 md:py-28 bg-[#1A1A1A] relative overflow-hidden">
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
          <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl font-light tracking-wide text-white mb-8">
            com.verso
          </h2>
          <p className="font-sans text-lg md:text-xl text-white/80 leading-relaxed mb-10">
            Um espaço dedicado à reflexão e ao diálogo qualificado sobre temas
            contemporâneos, cultura e comportamento.
          </p>
          <Link
            href="/comverso"
            className="inline-flex items-center gap-2 px-6 py-3 border border-white/30 rounded-full text-sm font-sans font-medium text-white hover:bg-white hover:text-[#1A1A1A] hover:border-white transition-all duration-500 group"
          >
            Saiba mais
            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </Container>
    </section>
  );
}
