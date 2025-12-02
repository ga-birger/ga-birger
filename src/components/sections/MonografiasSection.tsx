'use client'

import { motion } from 'framer-motion'
import { Container } from '../ui/Container'
import Link from 'next/link'
import { FileText, ArrowRight, Download } from 'lucide-react'

const monografias = [
  { 
    subtitle: 'A importância do sintoma para o tratamento psicanalítico como elemento constituinte da personalidade do sujeito',
    file: '/docs/monografia-1.pdf' 
  },
  { 
    subtitle: 'A queda da racionalidade com a descoberta do inconsciente',
    file: '/docs/monografia-2.pdf' 
  },
  { 
    subtitle: 'O eu entendido como colcha de retalhos de precipitados identificatórios',
    file: '/docs/monografia-3.pdf' 
  },
  { 
    subtitle: 'Projeto e projeções: a dificuldade integrativa frente à ambivalência pulsional',
    file: '/docs/monografia-4.pdf' 
  },
  { 
    subtitle: 'Onde a mente emudece, o corpo soçobra – a importância da elaboração psíquica',
    file: '/docs/monografia-5.pdf' 
  },
  { 
    subtitle: 'O analista é aquele que (sobre)vive',
    file: '/docs/monografia-6.pdf' 
  },
]

export function MonografiasSection() {
  return (
    <section className="py-12 md:py-20 lg:py-28 bg-preto">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <p className="text-sm tracking-[0.25em] uppercase text-mostarda mb-3">
            Publicações
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-white">
            Monografias
          </h2>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-5xl mx-auto"
        >
          <div className="grid md:grid-cols-2 gap-4">
            {monografias.map((mono, index) => (
              <a
                key={index}
                href={mono.file}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-4 p-5 bg-white/10 rounded-lg hover:bg-white/20 transition-all border-l-2 border-transparent hover:border-[var(--mostarda)]"
              >
                <div className="w-10 h-10 rounded-lg bg-[var(--mostarda)]/20 flex items-center justify-center flex-shrink-0">
                  <FileText className="w-5 h-5 text-[var(--mostarda)]" />
                </div>
                <p className="text-white/80 text-sm leading-relaxed group-hover:text-[var(--mostarda)] transition-colors line-clamp-2">
                  {mono.subtitle}
                </p>
              </a>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Link
              href="/publicacoes"
              className="inline-flex items-center gap-2 text-[var(--mostarda)] text-sm font-medium hover:gap-3 transition-all"
            >
              Ver todas as publicações
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}

