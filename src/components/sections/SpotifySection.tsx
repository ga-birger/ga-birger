'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';

export function SpotifySection() {
  return (
    <section className="py-12 md:py-20 lg:py-28 bg-gradient-to-b from-[#5C6652] to-[#4A5243]">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <p className="text-sm tracking-[0.25em] uppercase text-[var(--terracota)] mb-3">
              Podcast
            </p>
            <h2 className="text-[var(--creme)] font-serif text-3xl md:text-4xl lg:text-5xl mb-6">
              com.verso
            </h2>
            <p className="text-base md:text-lg text-[var(--creme)]/70 leading-relaxed max-w-xl mx-auto">
              É podcast de psicanálise. Mas não é análise! Ouça onde preferir.
            </p>
          </div>

          <div className="rounded-xl overflow-hidden">
            <iframe
              style={{ borderRadius: '12px' }}
              src="https://open.spotify.com/embed/show/3NZGaOQD79tO12wuOhLZf9?utm_source=generator&theme=0"
              width="100%"
              height="352"
              frameBorder="0"
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            />
          </div>

          <div className="text-center mt-8">
            <Link
              href="/podcast"
              className="inline-block text-[var(--creme)] text-sm tracking-wide border-b border-[var(--creme)]/30 hover:border-[var(--terracota)] transition-colors pb-1"
            >
              Saiba mais sobre o podcast →
            </Link>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

