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
    image: '/images/art/morning-sun-hopper.jpg',
  },
  {
    id: 2,
    title: 'Self-portrait with Hands',
    artist: 'Egon Schiele',
    year: '1910',
    image: '/images/art/self-portrait-schiele.jpg',
  },
  {
    id: 3,
    title: 'Girl on a Divan',
    artist: 'Ernst Ludwig Kirchner',
    year: '1909',
    image: '/images/art/girl-on-divan-kirchner.jpg',
  },
];

export default function ArtGallery() {
  return (
    <section className="py-20 md:py-28 bg-[#F5EDE8]">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-6 mb-4">
            <div className="w-16 h-[1px] bg-[#1A1A1A]/20" />
            <h2 className="font-serif text-4xl md:text-5xl font-light text-[#1A1A1A]">
              Inspirações
            </h2>
            <div className="w-16 h-[1px] bg-[#1A1A1A]/20" />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="md:row-span-2"
          >
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm group">
              <Image
                src={artworks[0].image}
                alt={`${artworks[0].title} - ${artworks[0].artist}`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <p className="text-white font-serif text-lg md:text-xl mb-1">
                  {artworks[0].title}
                </p>
                <p className="text-white/80 text-sm">
                  {artworks[0].artist}, {artworks[0].year}
                </p>
              </div>
            </div>
          </motion.div>

          {artworks.slice(1).map((artwork, index) => (
            <motion.div
              key={artwork.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.2 + index * 0.1,
              }}
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm group">
                <Image
                  src={artwork.image}
                  alt={`${artwork.title} - ${artwork.artist}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <p className="text-white font-serif text-lg mb-1">
                    {artwork.title}
                  </p>
                  <p className="text-white/80 text-sm">
                    {artwork.artist}, {artwork.year}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
