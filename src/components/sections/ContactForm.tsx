'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useState } from 'react';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { Select } from '@/components/ui/Select';

const contactSchema = z.object({
  name: z.string().min(2, 'Nome é obrigatório'),
  email: z.string().email('Email inválido'),
  phone: z.string().optional(),
  subject: z.string().min(1, 'Selecione um assunto'),
  message: z.string().min(10, 'Mensagem muito curta'),
});

type ContactFormData = z.infer<typeof contactSchema>;

const subjectOptions = [
  { value: 'consultorio', label: 'Consultório' },
  { value: 'comverso', label: 'com.verso' },
  { value: 'podcast', label: 'Podcast' },
  { value: 'outro', label: 'Outro' },
];

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error';
    message: string;
  } | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus({
          type: 'success',
          message: 'Mensagem enviada com sucesso! Retornarei em breve.',
        });
        reset();
      } else {
        setSubmitStatus({
          type: 'error',
          message: 'Erro ao enviar mensagem. Tente novamente.',
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Erro ao enviar mensagem. Tente novamente.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      {submitStatus && (
        <div
          className={`mb-6 p-4 rounded-lg ${
            submitStatus.type === 'success'
              ? 'bg-[#7D8B6F]/10 text-[#7D8B6F]'
              : 'bg-[#C4836D]/10 text-[#C4836D]'
          }`}
        >
          {submitStatus.message}
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <Input
          label="Nome *"
          {...register('name')}
          error={errors.name?.message}
          placeholder="Seu nome completo"
        />

        <Input
          label="Email *"
          type="email"
          {...register('email')}
          error={errors.email?.message}
          placeholder="seu@email.com"
        />

        <Input
          label="Telefone"
          type="tel"
          {...register('phone')}
          error={errors.phone?.message}
          placeholder="(00) 00000-0000"
        />

        <Select
          label="Assunto *"
          {...register('subject')}
          error={errors.subject?.message}
          options={subjectOptions}
        />

        <Textarea
          label="Mensagem *"
          {...register('message')}
          error={errors.message?.message}
          placeholder="Escreva sua mensagem..."
        />

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-[#1A1A1A] text-white py-3 px-8 rounded-full hover:bg-[#C4836D] transition-colors duration-500 disabled:opacity-50 disabled:cursor-not-allowed font-sans font-medium"
        >
          {isSubmitting ? 'Enviando...' : 'Enviar mensagem'}
        </button>
      </form>
    </div>
  );
}

