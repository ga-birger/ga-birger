'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { FileText, ExternalLink, Download } from 'lucide-react';

const artigos = [
  {
    id: 1,
    title: 'É hora de pautar a saúde mental no julgamento',
    source: 'Consultor Jurídico (ConJur)',
    date: 'Janeiro 2023',
    type: 'artigo',
    url: 'https://www.conjur.com.br/2023-jan-21/gabriela-birger-hora-pautar-saude-mental-julgamento/',
  },
];

const monografias = [
  {
    id: 1,
    title: 'Monografia - Ciclo II de Psicanálise',
    file: '/docs/monografia-ciclo-ii.pdf',
  },
  {
    id: 2,
    title: 'Monografia - Ciclo III de Psicanálise',
    file: '/docs/monografia-ciclo-iii.pdf',
  },
  {
    id: 3,
    title: 'Monografia - Ciclo IV de Psicanálise',
    file: '/docs/monografia-ciclo-iv.pdf',
  },
  {
    id: 4,
    title: 'Monografia - Ciclo V de Psicanálise',
    file: '/docs/monografia-ciclo-v.pdf',
  },
];

export default function PublicacoesPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 md:py-28 bg-[var(--creme)]">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="font-serif text-4xl md:text-6xl mb-4">Publicações</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Artigos, monografias e produções acadêmicas
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Artigos */}
      <section className="py-20 bg-white">
        <Container>
          <h2 className="font-serif text-3xl mb-8">Artigos</h2>
          <div className="space-y-4">
            {artigos.map((artigo) => (
              <a
                key={artigo.id}
                href={artigo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-6 bg-[var(--creme)] rounded-lg hover:shadow-md transition-shadow group"
              >
                <div className="flex items-start gap-4">
                  <FileText className="w-6 h-6 text-[var(--terracota)] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium group-hover:text-[var(--terracota)] transition-colors">
                      {artigo.title}
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">
                      {artigo.source} • {artigo.date}
                    </p>
                  </div>
                </div>
                <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-[var(--terracota)]" />
              </a>
            ))}
          </div>
        </Container>
      </section>

      {/* Monografias */}
      <section className="py-20 bg-[var(--creme)]">
        <Container>
          <h2 className="font-serif text-3xl mb-8">Monografias</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {monografias.map((mono) => (
              <a
                key={mono.id}
                href={mono.file}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-6 bg-white rounded-lg hover:shadow-md transition-shadow group"
              >
                <div className="flex items-center gap-4">
                  <FileText className="w-6 h-6 text-[var(--verde-oliva)]" />
                  <span className="font-medium group-hover:text-[var(--terracota)] transition-colors">
                    {mono.title}
                  </span>
                </div>
                <Download className="w-5 h-5 text-gray-400 group-hover:text-[var(--terracota)]" />
              </a>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}

