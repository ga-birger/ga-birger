'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';

export default function CallToAction() {
  return (
    <section className="py-12 md:py-20 lg:py-28 bg-[#C4836D]">
      <Container className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white mb-6">
            Vamos conversar?
          </h2>
          <p className="text-base md:text-lg text-white/70 leading-relaxed mb-8">
            Entre em contato para saber mais sobre o consultório ou os encontros do
            com.verso
          </p>
          <Link
            href="/contato"
            className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-sm tracking-wider rounded-lg text-white hover:bg-white hover:text-[#C4836D] hover:border-white transition-all duration-300 group"
          >
            Entrar em contato
            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </Container>
    </section>
  );
}
