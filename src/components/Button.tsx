'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import Link from 'next/link';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  href?: string;
  target?: '_blank' | '_self';
}

const variantClasses = {
  primary:
    'bg-terracota text-branco hover:bg-terracota/90 border-2 border-terracota',
  secondary:
    'bg-transparent border-2 border-verde-oliva text-verde-oliva hover:bg-verde-oliva hover:text-branco',
  outline:
    'bg-transparent border-2 border-branco text-branco hover:bg-branco hover:text-preto',
  ghost: 'bg-transparent text-preto hover:bg-preto/5 border-2 border-transparent',
};

const sizeClasses = {
  sm: 'px-6 py-2 text-sm',
  md: 'px-8 py-4 text-base',
  lg: 'px-10 py-5 text-lg',
};

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  type = 'button',
  disabled = false,
  href,
  target = '_self',
}: ButtonProps) {
  const baseClasses = `
    inline-flex items-center justify-center gap-2
    font-sans font-medium rounded-full
    transition-all duration-300
    ${variantClasses[variant]}
    ${sizeClasses[size]}
    ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
    ${className}
  `;

  if (href) {
    return (
      <Link href={href} target={target}>
        <motion.span
          whileHover={{ scale: disabled ? 1 : 1.02 }}
          whileTap={{ scale: disabled ? 1 : 0.98 }}
          className={baseClasses}
        >
          {children}
        </motion.span>
      </Link>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={baseClasses}
    >
      {children}
    </motion.button>
  );
}

