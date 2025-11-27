'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { ContactForm } from '@/components/sections/ContactForm';
import { ContactInfo } from '@/components/sections/ContactInfo';
import { MessageCircle } from 'lucide-react';

export default function Contato() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 md:py-28 bg-[#F5EDE8]">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="font-serif text-4xl md:text-6xl font-light text-[#1A1A1A] mb-6">
              Vamos conversar?
            </h1>
            <p className="font-sans text-lg md:text-xl text-[#1A1A1A]/70 leading-relaxed">
              Entre em contato para saber mais sobre o consultório ou o com.verso
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Formulário + Info */}
      <section className="py-20 md:py-28 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">
            {/* Formulário */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <ContactForm />
            </motion.div>

            {/* Informações */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            >
              <ContactInfo />
            </motion.div>
          </div>
        </Container>
      </section>

      {/* CTA WhatsApp */}
      <section className="py-20 md:py-28 bg-[#C4836D]">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="font-serif text-4xl md:text-5xl font-light text-white mb-6">
              Prefere WhatsApp?
            </h2>
            <p className="font-sans text-lg text-white/90 mb-8">
              Envie uma mensagem diretamente e retornarei assim que possível
            </p>
            <a
              href="https://wa.me/5511982925279"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-[#C4836D] rounded-full font-sans font-medium hover:bg-white/90 transition-all duration-500 group"
            >
              <MessageCircle size={24} />
              Abrir WhatsApp
            </a>
          </motion.div>
        </Container>
      </section>
    </>
  );
}
