'use client'

import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'

export function PressSection() {
  return (
    <section className="py-12 md:py-20 lg:py-28 bg-creme">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-sm tracking-[0.25em] uppercase text-(--terracota) mb-3">
            Na mídia
          </p>
          <h2 className="font-serif text-3xl md:text-4xl">
            Imprensa
          </h2>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <a 
            href="https://claudia.abril.com.br/cultura/mentalidade-de-dieta-e-padroes-de-beleza-sao-temas-da-4a-edicao-com-verso/"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 group"
          >
            {/* Header com logo */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
              <Image
                src="/press/logo-claudia.png"
                alt="Revista CLAUDIA"
                width={120}
                height={32}
                className="h-7 md:h-8 w-auto object-contain"
              />
              <span className="flex items-center gap-1 text-sm text-(--preto)/40 group-hover:text-(--terracota) transition-colors">
                Ler matéria
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </span>
            </div>
            
            {/* Imagem da reportagem - banner */}
            <div className="relative w-full overflow-hidden bg-gray-50">
              <Image
                src="/press/reportagem-claudia.png"
                alt="Reportagem sobre com.verso na Revista CLAUDIA"
                width={1096}
                height={205}
                className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-[1.02]"
              />
            </div>
            
            {/* Conteúdo de texto */}
            <div className="p-6 md:p-8">
              <h3 className="font-serif text-xl md:text-2xl lg:text-3xl mb-4 group-hover:text-(--terracota) transition-colors leading-tight">
                Mentalidade de dieta e padrões de beleza são temas da 4ª edição com.verso
              </h3>
              
              <p className="text-(--preto)/60 leading-relaxed">
                Encontro acontece em São Paulo, com debates sobre feminismo, autoimagem e vinhos. Uma experiência que une psicanálise, filosofia e cultura contemporânea.
              </p>
            </div>
          </a>
        </motion.div>
      </Container>
    </section>
  )
}
