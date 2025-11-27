import { ReactNode } from 'react';

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  background?: 'creme' | 'preto' | 'terracota' | 'verde-oliva' | 'transparent';
  id?: string;
}

const backgroundClasses = {
  creme: 'bg-creme',
  preto: 'bg-preto text-branco',
  terracota: 'bg-terracota text-branco',
  'verde-oliva': 'bg-verde-oliva text-branco',
  transparent: 'bg-transparent',
};

export default function SectionWrapper({
  children,
  className = '',
  background = 'transparent',
  id,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={`py-20 md:py-32 ${backgroundClasses[background]} ${className}`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        {children}
      </div>
    </section>
  );
}

