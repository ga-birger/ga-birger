'use client';

import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

interface FormacaoItem {
  curso: string;
  instituicao: string;
}

const formacoes: FormacaoItem[] = [
  {
    curso: 'Filosofia e Direito',
    instituicao: 'USP',
  },
  {
    curso: 'Filosofia e Direito',
    instituicao: 'Université Paris 1 – Panthéon-Sorbonne',
  },
  {
    curso: 'Psicanálise',
    instituicao: 'Centro de Estudos Psicanalíticos',
  },
  {
    curso: 'Psicanálise',
    instituicao: 'Instituto Sedes Sapientiae',
  },
  {
    curso: 'Psicanálise',
    instituicao: 'Instituto de Psiquiatria da USP',
  },
  {
    curso: 'Associate Coach',
    instituicao: 'NeuroLeadership Institute, NY',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

export default function FormacaoList() {
  return (
    <div>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="font-serif text-4xl md:text-5xl font-semibold text-preto mb-12"
      >
        Formação
      </motion.h2>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="space-y-6 max-w-4xl"
      >
        {formacoes.map((item, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="flex gap-6 items-start group"
          >
            {/* Ícone customizado */}
            <div className="flex-shrink-0 mt-1">
              <div className="w-10 h-10 rounded-full bg-verde-oliva/10 flex items-center justify-center group-hover:bg-verde-oliva/20 transition-colors duration-300">
                <GraduationCap size={20} className="text-verde-oliva" />
              </div>
            </div>

            {/* Conteúdo */}
            <div className="flex-1 pt-1">
              <h3 className="font-serif text-xl md:text-2xl font-medium text-preto mb-1">
                {item.curso}
              </h3>
              <p className="font-sans text-base md:text-lg text-preto/60">
                {item.instituicao}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

