'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { Play } from 'lucide-react';

const videos = [
  {
    id: 1,
    title: 'Filó Podcast',
    description: 'Conversa sobre psicanálise, filosofia e vida contemporânea',
    thumbnail: 'https://img.youtube.com/vi/igExyjGKLNc/maxresdefault.jpg',
    url: 'https://www.youtube.com/watch?v=igExyjGKLNc',
  },
  {
    id: 2,
    title: 'Revista CLAUDIA',
    description: 'Participação especial discutindo saúde mental e comportamento',
    thumbnail: 'https://img.youtube.com/vi/km9toqWcMsE/maxresdefault.jpg',
    url: 'https://www.youtube.com/watch?v=km9toqWcMsE',
  },
];

export function VideoSection() {
  return (
    <section className="py-12 md:py-20 lg:py-28 bg-white">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-sm tracking-[0.25em] uppercase text-[var(--terracota)] mb-3">
            Participações
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-6">Em vídeo</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {videos.map((video, index) => (
            <motion.a
              key={video.id}
              href={video.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative aspect-video overflow-hidden rounded-xl"
            >
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play
                    className="w-6 h-6 text-[var(--preto)] ml-1"
                    fill="currentColor"
                  />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                <h3 className="text-white font-serif text-xl mb-1">
                  {video.title}
                </h3>
                <p className="text-white/70 text-sm">{video.description}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </Container>
    </section>
  );
}

