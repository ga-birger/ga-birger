'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function BioSection() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
      {/* Imagem */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="order-first"
      >
        <div className="relative aspect-[3/4] w-full overflow-hidden rounded-sm sticky top-32">
          <Image
            src="/images/gabriela-birger.jpg"
            alt="Gabriela Birger - Psicanalista"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>
      </motion.div>

      {/* Texto Bio */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
        className="space-y-6"
      >
        <p className="font-sans text-lg md:text-xl text-preto/80 leading-relaxed">
          Gabriela Birger é psicanalista, formada em Filosofia e em Direito pela
          Universidade de São Paulo (USP) e pela Université Paris 1 –
          Panthéon-Sorbonne.
        </p>
        <p className="font-sans text-lg md:text-xl text-preto/80 leading-relaxed">
          Formou-se em psicanálise pelo Centro de Estudos Psicanalíticos, pelo
          Instituto Sedes Sapientiae e pelo Instituto de Psiquiatria da USP.
        </p>
        <p className="font-sans text-lg md:text-xl text-preto/80 leading-relaxed">
          É Associate Coach certificada pelo NeuroLeadership Institute, em Nova
          York.
        </p>
        <p className="font-sans text-lg md:text-xl text-preto/80 leading-relaxed">
          Atende como psicanalista em consultório particular, além de prestar
          consultoria em saúde mental e liderança para organizações.
        </p>
        <p className="font-sans text-lg md:text-xl text-preto/80 leading-relaxed">
          Além disso, é a idealizadora do com.verso.
        </p>
      </motion.div>
    </div>
  );
}

