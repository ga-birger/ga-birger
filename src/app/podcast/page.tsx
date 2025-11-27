'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { Music, ExternalLink } from 'lucide-react';

export default function Podcast() {
  const platforms = [
    {
      name: 'Spotify',
      url: 'https://open.spotify.com/show/3NZGaOQD79tO12wuOhLZf9',
      icon: Music,
    },
    {
      name: 'Apple Podcasts',
      url: '#',
      icon: Music,
    },
    {
      name: 'YouTube Music',
      url: '#',
      icon: Music,
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="py-20 md:py-28 bg-[#F5EDE8]">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="font-serif text-4xl md:text-6xl font-light text-[#1A1A1A] mb-6">
              Podcast com.verso
            </h1>
            <p className="font-serif text-lg md:text-xl text-[#1A1A1A]/70 italic">
              É podcast de psicanálise. Mas não é análise!
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Sobre o Podcast */}
      <section className="py-20 md:py-28 bg-white">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl mx-auto space-y-6 text-center"
          >
            <p className="font-sans text-lg md:text-xl text-[#1A1A1A]/80 leading-relaxed">
              O podcast com.verso amplia as conversas do projeto para além dos
              encontros presenciais. Falamos sobre cultura, comportamento e saúde
              mental a partir da psicanálise e da filosofia, sempre de forma
              acessível e conectada ao dia a dia.
            </p>
            <p className="font-sans text-lg md:text-xl text-[#1A1A1A]/80 leading-relaxed">
              Embora tenha a psicanálise como referência, o podcast não é um espaço
              clínico. Seu propósito é lateralizar a transferência — ou seja, levar
              o interesse pela psicanálise para um lugar de reflexão pública, onde
              quem escuta pode pensar junto.
            </p>
            <p className="font-sans text-lg md:text-xl text-[#1A1A1A]/80 leading-relaxed">
              Cada episódio aborda temas atuais que atravessam nosso tempo e nossas
              relações, com o objetivo de ampliar repertório e provocar boas
              perguntas.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Player Spotify */}
      <section className="py-20 md:py-28 bg-[#F5EDE8]">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-2xl mx-auto"
          >
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
          </motion.div>
        </Container>
      </section>

      {/* Onde Ouvir */}
      <section className="py-20 md:py-28 bg-white">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="font-serif text-3xl md:text-4xl font-light text-[#1A1A1A] mb-12 text-center">
              Ouça nas plataformas
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              {platforms.map((platform, index) => (
                <motion.a
                  key={platform.name}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1],
                    delay: index * 0.1,
                  }}
                  className="group flex flex-col items-center gap-4 p-8 border border-[#1A1A1A]/10 rounded-lg hover:border-[#1A1A1A]/30 hover:shadow-lg transition-all duration-500"
                >
                  <platform.icon size={40} className="text-[#1A1A1A]/60 group-hover:text-[#1A1A1A] transition-colors" />
                  <span className="font-sans text-base font-medium text-[#1A1A1A]">
                    {platform.name}
                  </span>
                  <ExternalLink size={16} className="text-[#1A1A1A]/40 group-hover:text-[#1A1A1A] transition-colors" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </Container>
      </section>
    </>
  );
}
