'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';

export default function CallToAction() {
  return (
    <section className="py-20 md:py-28 bg-[#C4836D]">
      <Container className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl font-light text-white mb-6">
            Vamos conversar?
          </h2>
          <p className="font-sans text-lg md:text-xl text-white/90 leading-relaxed mb-10">
            Entre em contato para saber mais sobre o consultório ou os encontros do
            com.verso
          </p>
          <Link
            href="/contato"
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white rounded-full text-base font-sans font-medium text-white hover:bg-white hover:text-[#C4836D] transition-all duration-500 group"
          >
            Entrar em contato
            <ArrowRight size={20} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </Container>
    </section>
  );
}
