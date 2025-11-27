# 📄 Como Criar Novas Páginas

## Template Básico de Página

Copie e cole este template para criar novas páginas:

```tsx
'use client';

import PageTransition from '@/components/PageTransition';
import Section from '@/components/Section';
import { motion } from 'framer-motion';

export default function NomeDaPagina() {
  return (
    <PageTransition>
      <div className="min-h-screen pt-32 pb-24">
        {/* Hero Section */}
        <Section spacing="md">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-serif text-5xl md:text-6xl font-semibold text-preto mb-8">
              Título da Página
            </h1>
            <p className="font-sans text-xl text-preto/70 leading-relaxed max-w-2xl">
              Descrição introdutória da página.
            </p>
          </motion.div>
        </Section>

        {/* Conteúdo Principal */}
        <Section spacing="md" containerSize="md">
          <div className="prose prose-lg max-w-none">
            {/* Seu conteúdo aqui */}
          </div>
        </Section>
      </div>
    </PageTransition>
  );
}
```

## Exemplo: Página "Sobre"

```tsx
'use client';

import PageTransition from '@/components/PageTransition';
import Section from '@/components/Section';
import Button from '@/components/Button';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export default function Sobre() {
  return (
    <PageTransition>
      <div className="min-h-screen pt-32 pb-24">
        {/* Hero com Foto */}
        <Section spacing="lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="font-serif text-5xl md:text-6xl font-semibold text-preto mb-6">
                Gabriela Birger
              </h1>
              <p className="font-sans text-xl text-preto/70 leading-relaxed mb-8">
                Psicanalista formada pela [Instituição], com especialização em
                [Área]. Atuo há [X] anos no campo da psicanálise, dedicando-me
                à escuta clínica e à reflexão sobre a subjetividade contemporânea.
              </p>
              <Button variant="primary">
                Entre em contato
                <ArrowRight size={20} />
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative h-[500px] rounded-2xl overflow-hidden"
            >
              <Image
                src="/foto-perfil.jpg"
                alt="Gabriela Birger"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </Section>

        {/* Formação */}
        <Section spacing="lg" containerSize="md">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="font-serif text-4xl font-semibold text-preto mb-8">
              Formação
            </h2>
            <div className="space-y-6">
              {[
                {
                  titulo: 'Graduação em Psicologia',
                  instituicao: 'Universidade X',
                  ano: '20XX',
                },
                {
                  titulo: 'Formação em Psicanálise',
                  instituicao: 'Instituição Y',
                  ano: '20XX',
                },
                {
                  titulo: 'Especialização em Z',
                  instituicao: 'Instituição W',
                  ano: '20XX',
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="p-6 bg-creme-escuro rounded-xl border-l-4 border-terracota"
                >
                  <h3 className="font-serif text-xl font-semibold text-preto mb-2">
                    {item.titulo}
                  </h3>
                  <p className="font-sans text-preto/70">
                    {item.instituicao} • {item.ano}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </Section>

        {/* Abordagem */}
        <Section spacing="lg" containerSize="md">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h2 className="font-serif text-4xl font-semibold text-preto mb-8">
              Abordagem Clínica
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="font-sans text-lg text-preto/70 leading-relaxed mb-6">
                Minha prática clínica se fundamenta na teoria psicanalítica,
                privilegiando a escuta singular de cada sujeito. Acredito que o
                processo analítico oferece um espaço de reflexão e transformação,
                onde é possível elaborar questões que atravessam a vida de cada um.
              </p>
              <p className="font-sans text-lg text-preto/70 leading-relaxed">
                O trabalho analítico se dá através da palavra, em um encontro que
                respeita o tempo e o ritmo de cada pessoa, acolhendo suas questões
                e acompanhando seu percurso de descoberta e mudança.
              </p>
            </div>
          </motion.div>
        </Section>
      </div>
    </PageTransition>
  );
}
```

## Exemplo: Página com Grid de Cards

```tsx
'use client';

import PageTransition from '@/components/PageTransition';
import Section from '@/components/Section';
import { motion } from 'framer-motion';
import Link from 'next/link';

const items = [
  {
    titulo: 'Item 1',
    descricao: 'Descrição do item 1',
    link: '/item-1',
  },
  {
    titulo: 'Item 2',
    descricao: 'Descrição do item 2',
    link: '/item-2',
  },
  // ... mais items
];

export default function GridPage() {
  return (
    <PageTransition>
      <div className="min-h-screen pt-32 pb-24">
        <Section spacing="md">
          <h1 className="font-serif text-5xl md:text-6xl font-semibold text-preto mb-8">
            Título da Página
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {items.map((item, index) => (
              <motion.div
                key={item.titulo}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  href={item.link}
                  className="group block p-8 bg-creme-escuro rounded-2xl hover:shadow-lg transition-all duration-300 h-full"
                >
                  <h3 className="font-serif text-2xl font-semibold text-preto mb-3 group-hover:text-terracota transition-colors">
                    {item.titulo}
                  </h3>
                  <p className="font-sans text-preto/70 leading-relaxed">
                    {item.descricao}
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>
        </Section>
      </div>
    </PageTransition>
  );
}
```

## Exemplo: Formulário de Contato

```tsx
'use client';

import PageTransition from '@/components/PageTransition';
import Section from '@/components/Section';
import Button from '@/components/Button';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useState } from 'react';
import { motion } from 'framer-motion';

const schema = z.object({
  nome: z.string().min(2, 'Nome muito curto'),
  email: z.string().email('Email inválido'),
  telefone: z.string().optional(),
  mensagem: z.string().min(10, 'Mensagem muito curta'),
});

type FormData = z.infer<typeof schema>;

export default function Contato() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    // Aqui você implementaria o envio do formulário
    // Por exemplo, usando uma API route do Next.js
    try {
      const response = await fetch('/api/contato', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitSuccess(true);
        reset();
      }
    } catch (error) {
      console.error('Erro ao enviar:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <PageTransition>
      <div className="min-h-screen pt-32 pb-24">
        <Section spacing="md" containerSize="md">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-serif text-5xl md:text-6xl font-semibold text-preto mb-8">
              Entre em Contato
            </h1>
            <p className="font-sans text-xl text-preto/70 leading-relaxed mb-12">
              Preencha o formulário abaixo e entrarei em contato em breve.
            </p>

            {submitSuccess && (
              <div className="mb-8 p-6 bg-verde-oliva/10 border-l-4 border-verde-oliva rounded-lg">
                <p className="font-sans text-verde-oliva">
                  Mensagem enviada com sucesso! Retornarei em breve.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label className="block font-sans font-medium text-preto mb-2">
                  Nome *
                </label>
                <input
                  {...register('nome')}
                  type="text"
                  className="w-full px-4 py-3 bg-creme-escuro border-2 border-transparent focus:border-terracota rounded-lg font-sans text-preto outline-none transition-colors"
                  placeholder="Seu nome completo"
                />
                {errors.nome && (
                  <p className="mt-2 text-sm text-terracota">
                    {errors.nome.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block font-sans font-medium text-preto mb-2">
                  Email *
                </label>
                <input
                  {...register('email')}
                  type="email"
                  className="w-full px-4 py-3 bg-creme-escuro border-2 border-transparent focus:border-terracota rounded-lg font-sans text-preto outline-none transition-colors"
                  placeholder="seu@email.com"
                />
                {errors.email && (
                  <p className="mt-2 text-sm text-terracota">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block font-sans font-medium text-preto mb-2">
                  Telefone
                </label>
                <input
                  {...register('telefone')}
                  type="tel"
                  className="w-full px-4 py-3 bg-creme-escuro border-2 border-transparent focus:border-terracota rounded-lg font-sans text-preto outline-none transition-colors"
                  placeholder="(00) 00000-0000"
                />
              </div>

              <div>
                <label className="block font-sans font-medium text-preto mb-2">
                  Mensagem *
                </label>
                <textarea
                  {...register('mensagem')}
                  rows={6}
                  className="w-full px-4 py-3 bg-creme-escuro border-2 border-transparent focus:border-terracota rounded-lg font-sans text-preto outline-none transition-colors resize-none"
                  placeholder="Escreva sua mensagem..."
                />
                {errors.mensagem && (
                  <p className="mt-2 text-sm text-terracota">
                    {errors.mensagem.message}
                  </p>
                )}
              </div>

              <Button
                type="submit"
                variant="primary"
                disabled={isSubmitting}
                className="w-full md:w-auto"
              >
                {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
              </Button>
            </form>
          </motion.div>
        </Section>
      </div>
    </PageTransition>
  );
}
```

## Dicas Importantes

1. **Sempre use `'use client'`** no topo de páginas com interatividade
2. **Envolva com `PageTransition`** para animações de entrada
3. **Use `Section` e `Container`** para espaçamento consistente
4. **Adicione animações com Framer Motion** para uma experiência suave
5. **Mantenha a hierarquia de títulos** (h1 > h2 > h3)
6. **Use as cores do design system** (terracota, verde-oliva, etc.)
7. **Teste em mobile** - sempre use classes responsivas (md:, lg:)

## Estrutura de Pastas

```
src/app/
  ├── nome-da-pagina/
  │   └── page.tsx
  └── outra-pagina/
      └── page.tsx
```

Cada pasta dentro de `app/` se torna automaticamente uma rota!

