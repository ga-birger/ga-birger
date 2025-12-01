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
    <section className="py-12 md:py-20 lg:py-28 bg-creme">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <p className="text-sm tracking-[0.25em] uppercase text-terracota mb-3">
            Publicações
          </p>
          <h2 className="font-serif text-3xl md:text-4xl">
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
                className="flex items-center gap-4 p-5 bg-white rounded-lg hover:shadow-md transition-all group"
              >
                <div className="w-12 h-12 rounded-lg bg-rosa-claro flex items-center justify-center flex-shrink-0">
                  <FileText className="w-5 h-5 text-terracota" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium group-hover:text-terracota transition-colors">
                    {mono.title}
                  </p>
                  <p className="text-preto/60 text-sm">{mono.subtitle}</p>
                </div>
                <Download className="w-4 h-4 text-preto/30 group-hover:text-terracota transition-colors" />
              </a>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Link
              href="/publicacoes"
              className="inline-flex items-center gap-2 text-terracota text-sm font-medium hover:gap-3 transition-all"
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

