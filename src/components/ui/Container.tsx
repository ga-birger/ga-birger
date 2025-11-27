'use client';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function Container({ children, className = '' }: ContainerProps) {
  return (
    <div className={`w-full max-w-6xl mx-auto px-8 md:px-12 lg:px-16 ${className}`}>
      {children}
    </div>
  );
}
