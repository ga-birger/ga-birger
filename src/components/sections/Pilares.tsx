'use client';

import { motion } from 'framer-motion';
import { BookOpen, Brain, Wine } from 'lucide-react';

interface Pilar {
  id: number;
  nome: string;
  tag: string;
  icon: React.ReactNode;
  color: string;
  bgColor: string;
}

const pilares: Pilar[] = [
  {
    id: 1,
    nome: 'Filosofia',
    tag: 'comFILOSOFIA',
    icon: <BookOpen size={32} />,
    color: 'var(--verde-oliva)',
    bgColor: 'var(--verde-oliva)',
  },
  {
    id: 2,
    nome: 'Psicanálise',
    tag: 'comPSICANÁLISE',
    icon: <Brain size={32} />,
    color: 'var(--terracota)',
    bgColor: 'var(--terracota)',
  },
  {
    id: 3,
    nome: 'Vinho',
    tag: 'comVINHO',
    icon: <Wine size={32} />,
    color: 'var(--mostarda)',
    bgColor: 'var(--mostarda)',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

export default function Pilares() {
  return (
    <div>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="font-serif text-4xl md:text-5xl font-semibold text-preto mb-4 text-center"
      >
        Os três pilares
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
        className="font-sans text-lg md:text-xl text-preto/60 text-center mb-16 max-w-2xl mx-auto"
      >
        O com.verso se sustenta na integração de três elementos fundamentais
      </motion.p>

      {/* Grid de Pilares */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12"
      >
        {pilares.map((pilar) => (
          <motion.div
            key={pilar.id}
            variants={itemVariants}
            whileHover={{ y: -8 }}
            transition={{ duration: 0.3 }}
            className="group"
          >
            <div className="bg-creme-escuro rounded-lg p-8 md:p-10 text-center h-full flex flex-col items-center justify-center transition-shadow duration-300 group-hover:shadow-xl">
              {/* Ícone */}
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundColor: `${pilar.bgColor}15` }}
              >
                <div style={{ color: pilar.color }}>{pilar.icon}</div>
              </div>

              {/* Nome */}
              <h3 className="font-serif text-2xl md:text-3xl font-semibold text-preto mb-3">
                {pilar.nome}
              </h3>

              {/* Tag */}
              <p
                className="font-sans text-sm md:text-base font-medium tracking-wide"
                style={{ color: pilar.color }}
              >
                {pilar.tag}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Elemento decorativo - Conexão visual */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 0.1, scale: 1 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.5 }}
        className="mt-16 text-center"
      >
        <svg
          width="200"
          height="100"
          viewBox="0 0 200 100"
          className="mx-auto opacity-20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20 50 L100 20 L180 50 L100 80 Z"
            stroke="var(--verde-oliva)"
            strokeWidth="2"
            strokeDasharray="5,5"
          />
        </svg>
      </motion.div>
    </div>
  );
}

