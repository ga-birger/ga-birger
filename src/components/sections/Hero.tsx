'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-[var(--creme)]">
      <Container>
        <div className="flex flex-col items-center text-center">
          {/* Imagem dos rabiscos - um pouco menor */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-3xl mb-10"
          >
            <motion.div
              animate={{
                y: [0, -8, 0],
                rotate: [0, 0.5, 0, -0.5, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <Image
                src="/images/hero-image.png"
                alt="Do caos à clareza - processo terapêutico"
                width={1200}
                height={400}
                className="w-full h-auto"
                priority
              />
            </motion.div>
          </motion.div>

          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="max-w-2xl"
          >
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-4">
              Gabriela Birger
            </h1>

            <p className="text-[var(--terracota)] tracking-[0.25em] uppercase text-sm mb-6">
              Psicanalista • Filósofa • Idealizadora do com.verso
            </p>

            <p className="text-lg text-[var(--preto)]/60 mb-10 leading-relaxed">
              Do emaranhado à clareza. Psicanálise e filosofia para atravessar os
              desafios da vida contemporânea.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/sobre"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--preto)] text-white text-sm tracking-wider rounded-lg hover:bg-[var(--terracota)] transition-all duration-300"
              >
                Conheça mais
              </Link>
              <Link
                href="/contato"
                className="inline-flex items-center gap-2 px-6 py-3 border border-[var(--preto)]/20 text-sm tracking-wider rounded-lg hover:border-[var(--preto)] hover:bg-[var(--preto)] hover:text-white transition-all duration-300"
              >
                Entre em contato
              </Link>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
