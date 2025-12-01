'use client'

import { motion } from 'framer-motion'
import { Container } from '../ui/Container'
import Image from 'next/image'
import { MapPin } from 'lucide-react'

const consultorioImages = [
  '/images/consultorio/consultorio-1.jpg',
  '/images/consultorio/consultorio-2.jpg',
  '/images/consultorio/consultorio-3.jpg',
  '/images/consultorio/consultorio-4.jpg',
  '/images/consultorio/consultorio-5.jpg',
  '/images/consultorio/consultorio-6.jpg',
]

export function ConsultorioSection() {
  return (
    <section className="py-12 md:py-20 lg:py-28 bg-creme-escuro">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <p className="text-sm tracking-[0.25em] uppercase text-terracota mb-3">
            Atendimento
          </p>
          <h2 className="font-serif text-3xl md:text-4xl mb-4">
            Consultório
          </h2>
          <div className="flex flex-col items-center gap-1 text-preto/60">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <p className="text-sm">
                Rua Dr. Guilherme Bannitz, 126 - CJ 82 - Vila Nova Conceição
              </p>
            </div>
            <p className="text-sm">São Paulo - SP, 04532-010</p>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 max-w-4xl mx-auto"
        >
          {consultorioImages.map((src, index) => (
            <div 
              key={index} 
              className="relative aspect-[3/4] rounded-lg overflow-hidden group"
            >
              <Image
                src={src}
                alt={`Consultório Gabriela Birger - Imagem ${index + 1}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          ))}
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-10"
        >
          <p className="text-preto/60 text-sm mb-4">
            Atendimento presencial e online
          </p>
          <a
            href="https://wa.me/5511982925279"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-preto text-white text-sm tracking-wider rounded-lg hover:bg-terracota transition-all duration-300"
          >
            Agendar consulta
          </a>
        </motion.div>
      </Container>
    </section>
  )
}

