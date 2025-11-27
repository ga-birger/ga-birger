import { ReactNode } from 'react';
import Container from './Container';

interface SectionProps {
  children: ReactNode;
  className?: string;
  containerSize?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  spacing?: 'sm' | 'md' | 'lg';
}

const spacingClasses = {
  sm: 'py-12',
  md: 'py-24',
  lg: 'py-32',
};

export default function Section({
  children,
  className = '',
  containerSize = 'xl',
  spacing = 'md',
}: SectionProps) {
  return (
    <section className={`${spacingClasses[spacing]} ${className}`}>
      <Container size={containerSize}>{children}</Container>
    </section>
  );
}

