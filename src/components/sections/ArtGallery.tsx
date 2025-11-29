'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';

const artworks = [
  {
    id: 1,
    title: 'Morning Sun',
    artist: 'Edward Hopper',
    year: '1952',
    description:
      'Uma mulher sentada na cama olha pela janela em direção à luz do sol. A obra explora temas de solidão e introspecção.',
    image: '/images/art/morning-sun-hopper.jpg',
  },
  {
    id: 2,
    title: 'Self-portrait with Hands',
    artist: 'Egon Schiele',
    year: '1910',
    description:
      'Autorretrato expressionista que revela a intensidade emocional e a vulnerabilidade do artista.',
    image: '/images/art/self-portrait-schiele.jpg',
  },
  {
    id: 3,
    title: 'Girl on a Divan',
    artist: 'Ernst Ludwig Kirchner',
    year: '1909',
    description:
      'Obra do movimento Die Brücke que captura a tensão entre o corpo e o espaço interior.',
    image: '/images/art/girl-on-divan-kirchner.jpg',
  },
  {
    id: 4,
    title: 'The Mystery of the Ordinary',
    artist: 'René Magritte',
    year: '1926-1938',
    description:
      'O surrealismo de Magritte questiona a realidade e convida à reflexão sobre o que vemos e o que está oculto.',
    image: '/images/art/magritte-the-mystery.jpg',
  },
];

export default function ArtGallery() {
  return (
    <section className="py-12 md:py-20 lg:py-28 bg-[var(--creme)] overflow-hidden">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-sm tracking-[0.25em] uppercase text-[var(--terracota)] mb-3">
            Referências
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-6">Inspirações</h2>
        </motion.div>
      </Container>

      {/* Carrossel infinito */}
      <div className="relative">
        <motion.div
          className="flex gap-6 px-6"
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            x: {
              duration: 30,
              repeat: Infinity,
              ease: 'linear',
            },
          }}
        >
          {/* Duplicar para loop infinito */}
          {[...artworks, ...artworks].map((artwork, index) => (
            <div
              key={`${artwork.id}-${index}`}
              className="flex-shrink-0 w-80 md:w-96 group"
            >
              <div className="relative aspect-[4/5] rounded-xl overflow-hidden mb-4 shadow-sm hover:shadow-md transition-shadow duration-300">
                <Image
                  src={artwork.image}
                  alt={`${artwork.title} - ${artwork.artist}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="400px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              </div>
              <div className="px-2">
                <h3 className="font-serif text-lg">{artwork.title}</h3>
                <p className="text-sm text-[var(--terracota)]">
                  {artwork.artist}, {artwork.year}
                </p>
                <p className="text-sm text-gray-600 mt-2 line-clamp-2">
                  {artwork.description}
                </p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Fade nas bordas */}
        <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[var(--creme)] to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[var(--creme)] to-transparent pointer-events-none" />
      </div>
    </section>
  );
}
