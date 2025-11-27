'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Container } from '@/components/ui/Container';

export default function Hero() {
  const scrollToContent = () => {
    const nextSection = document.getElementById('sobre-preview');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-[#F5EDE8]">
      <Container className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl font-light tracking-[0.2em] text-[#1A1A1A] mb-8">
            com.verso
          </h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="text-sm md:text-base tracking-[0.3em] uppercase text-[#1A1A1A]/60 font-sans font-light"
          >
            conexões • psicanálise • bons vinhos
          </motion.p>
        </motion.div>
      </Container>

      <motion.button
        onClick={scrollToContent}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 group"
        aria-label="Rolar para o conteúdo"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-[1px] h-12 bg-[#1A1A1A]/30"
        />
        <span className="text-xs font-sans text-[#1A1A1A]/40 tracking-widest uppercase">
          Scroll
        </span>
        <ChevronDown size={16} className="text-[#1A1A1A]/40" />
      </motion.button>
    </section>
  );
}
