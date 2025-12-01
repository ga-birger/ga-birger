'use client'

import { motion } from 'framer-motion'
import { Container } from '../ui/Container'
import Image from 'next/image'
import Link from 'next/link'
import { Instagram } from 'lucide-react'

export default function ComversoPreview() {
  return (
    <section className="py-12 md:py-20 lg:py-28 bg-[var(--preto)] text-white">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Símbolo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <Image
              src="/images/brand/simbolos-02.png"
              alt="com.verso - comFILOSOFIA, comPSICANÁLISE, comVINHO"
              width={350}
              height={350}
              className="w-64 md:w-80 h-auto opacity-90 invert"
            />
          </motion.div>
          
          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center lg:text-left"
          >
            <p className="text-sm tracking-[0.25em] uppercase text-[var(--mostarda)] mb-3">
              Projeto
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-6">
              com.verso
            </h2>
            <p className="text-white/70 leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0">
              Um espaço dedicado à reflexão e ao diálogo qualificado sobre temas contemporâneos, cultura e comportamento. Integrando filosofia, psicanálise e vinho.
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <Link
                href="/comverso"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[var(--preto)] text-sm tracking-wider rounded-lg hover:bg-[var(--mostarda)] transition-all duration-300"
              >
                Saiba mais
              </Link>
              <a
                href="https://www.instagram.com/_com.verso_"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border border-white/30 text-sm tracking-wider rounded-lg hover:bg-white/10 transition-all duration-300"
              >
                <Instagram className="w-4 h-4" />
                Instagram
              </a>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
