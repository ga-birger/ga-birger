'use client'

import { motion } from 'framer-motion'
import { Container } from '../ui/Container'
import Link from 'next/link'
import { FileText, ArrowRight, Download } from 'lucide-react'

const monografias = [
  {
    title: 'Monografia Ciclo II',
    subtitle: 'Instituto Sedes Sapientiae',
    file: '/docs/monografia-ciclo-ii.pdf',
  },
  {
    title: 'Monografia Ciclo III',
    subtitle: 'Instituto Sedes Sapientiae',
    file: '/docs/monografia-ciclo-iii.pdf',
  },
  {
    title: 'Monografia Ciclo IV',
    subtitle: 'Instituto Sedes Sapientiae',
    file: '/docs/monografia-ciclo-iv.pdf',
  },
  {
    title: 'Monografia Ciclo V',
    subtitle: 'Instituto Sedes Sapientiae',
    file: '/docs/monografia-ciclo-v.pdf',
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
          className="max-w-3xl mx-auto"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            {monografias.map((mono, index) => (
              <a
                key={index}
                href={mono.file}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 bg-white/10 rounded-lg hover:bg-white/20 transition-all group"
              >
                <div className="w-12 h-12 rounded-lg bg-mostarda/20 flex items-center justify-center flex-shrink-0">
                  <FileText className="w-5 h-5 text-mostarda" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-white group-hover:text-mostarda transition-colors">
                    {mono.title}
                  </p>
                  <p className="text-white/60 text-sm">{mono.subtitle}</p>
                </div>
                <Download className="w-4 h-4 text-white/30 group-hover:text-mostarda transition-colors" />
              </a>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Link
              href="/publicacoes"
              className="inline-flex items-center gap-2 text-mostarda text-sm font-medium hover:gap-3 transition-all"
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

