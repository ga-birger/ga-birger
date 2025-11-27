'use client';

import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface MagneticButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'outline';
}

export default function MagneticButton({
  children,
  href,
  onClick,
  className = '',
  variant = 'primary',
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = (clientX - (left + width / 2)) * 0.3;
    const y = (clientY - (top + height / 2)) * 0.3;
    setPosition({ x, y });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  const variantClasses = {
    primary: 'bg-terracota text-branco hover:bg-terracota/90',
    outline: 'border-2 border-current text-current',
  };

  const content = (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.1 }}
      className={`
        relative overflow-hidden
        px-8 py-4 rounded-full
        font-sans font-medium
        inline-flex items-center gap-3
        transition-colors duration-300
        group
        ${variantClasses[variant]}
        ${className}
      `}
    >
      {/* Background fill animation */}
      {variant === 'primary' && (
        <motion.div
          className="absolute inset-0 bg-preto"
          initial={{ x: '-100%' }}
          whileHover={{ x: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        />
      )}
      {variant === 'outline' && (
        <motion.div
          className="absolute inset-0 bg-current"
          initial={{ x: '-100%' }}
          whileHover={{ x: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        />
      )}
      <span className={`relative z-10 transition-colors duration-300 ${variant === 'outline' ? 'group-hover:text-branco mix-blend-difference' : 'group-hover:text-branco'}`}>
        {children}
      </span>
    </motion.div>
  );

  if (href) {
    return (
      <Link href={href} className="inline-block">
        {content}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className="inline-block">
      {content}
    </button>
  );
}

