'use client'

import { motion } from 'framer-motion'
import { Container } from '../ui/Container'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'

const reportagens = [
  {
    logo: '/images/press/logo-claudia.png',
    logoAlt: 'Revista CLAUDIA',
    image: '/images/press/reportagem-claudia.png',
    title: 'Mentalidade de dieta e padrões de beleza são temas da 4ª edição com.verso',
    description: 'Encontro acontece em São Paulo, com debates sobre feminismo, autoimagem e vinhos.',
    link: 'https://claudia.abril.com.br/cultura/mentalidade-de-dieta-e-padroes-de-beleza-sao-temas-da-4a-edicao-com-verso/',
  },
  {
    logo: '/images/press/logo-conjur.png',
    logoAlt: 'ConJur',
    image: '/images/press/reportagem-conjur.png',
    title: 'É hora de pautar a saúde mental no julgamento',
    description: 'Artigo sobre a importância da saúde mental no sistema judiciário brasileiro.',
    link: 'https://www.conjur.com.br/2023-jan-21/gabriela-birger-hora-pautar-saude-mental-julgamento/',
  },
]

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
          <p className="text-sm tracking-[0.25em] uppercase text-terracota mb-3">
            Na mídia
          </p>
          <h2 className="font-serif text-3xl md:text-4xl">
            Imprensa
          </h2>
        </motion.div>
        
        <div className="flex flex-col gap-6 max-w-4xl mx-auto">
          {reportagens.map((item, index) => (
            <motion.a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="block bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 group"
            >
              {/* Header com logo */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
                <Image
                  src={item.logo}
                  alt={item.logoAlt}
                  width={120}
                  height={40}
                  className="h-7 md:h-8 w-auto object-contain"
                />
                <span className="flex items-center gap-1 text-xs text-preto/40 group-hover:text-terracota transition-colors">
                  Ler matéria
                  <ArrowUpRight className="w-3 h-3" />
                </span>
              </div>
              
              {/* Imagem - formato banner largo */}
              <div className="relative w-full overflow-hidden bg-gray-50">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={1096}
                  height={205}
                  className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-[1.02]"
                />
              </div>
              
              {/* Texto */}
              <div className="p-5 md:p-6">
                <h3 className="font-serif text-lg md:text-xl lg:text-2xl mb-2 group-hover:text-terracota transition-colors leading-tight">
                  {item.title}
                </h3>
                <p className="text-preto/60 text-sm md:text-base">
                  {item.description}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </Container>
    </section>
  )
}
