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
    title: 'Monografia I', 
    subtitle: 'A importância do sintoma para o tratamento psicanalítico como elemento constituinte da personalidade do sujeito',
    file: '/docs/monografia-1.pdf' 
  },
  { 
    id: 2,
    title: 'Monografia II', 
    subtitle: 'A queda da racionalidade com a descoberta do inconsciente',
    file: '/docs/monografia-2.pdf' 
  },
  { 
    id: 3,
    title: 'Monografia III', 
    subtitle: 'O eu entendido como colcha de retalhos de precipitados identificatórios',
    file: '/docs/monografia-3.pdf' 
  },
  { 
    id: 4,
    title: 'Monografia IV', 
    subtitle: 'Projeto e projeções: a dificuldade integrativa frente à ambivalência pulsional',
    file: '/docs/monografia-4.pdf' 
  },
  { 
    id: 5,
    title: 'Monografia V', 
    subtitle: 'Onde a mente emudece, o corpo soçobra – a importância da elaboração psíquica',
    file: '/docs/monografia-5.pdf' 
  },
  { 
    id: 6,
    title: 'Monografia VI', 
    subtitle: 'O analista é aquele que (sobre)vive',
    file: '/docs/monografia-6.pdf' 
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
                className="flex items-center gap-4 p-6 bg-white rounded-lg hover:shadow-md transition-shadow group"
              >
                <div className="w-12 h-12 rounded-lg bg-verde-oliva/10 flex items-center justify-center flex-shrink-0">
                  <FileText className="w-5 h-5 text-verde-oliva" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium group-hover:text-terracota transition-colors">
                    {mono.title}
                  </p>
                  <p className="text-preto/60 text-sm line-clamp-2">
                    {mono.subtitle}
                  </p>
                </div>
                <Download className="w-4 h-4 text-preto/30 group-hover:text-terracota transition-colors flex-shrink-0" />
              </a>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}

