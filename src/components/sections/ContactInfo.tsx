'use client';

import { Mail, Instagram, MapPin, Phone } from 'lucide-react';

const contactMethods = [
  {
    icon: Phone,
    label: 'WhatsApp',
    value: '+55 11 98292-5279',
    href: 'https://wa.me/5511982925279',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'gabibirger@gmail.com',
    href: 'mailto:gabibirger@gmail.com',
  },
  {
    icon: Instagram,
    label: 'Instagram',
    value: '@_com.verso_',
    href: 'https://www.instagram.com/_com.verso_',
  },
  {
    icon: MapPin,
    label: 'Consultório',
    value: 'Rua Dr. Guilherme Bannitz, 126 - CJ 82\nVila Nova Conceição\nSão Paulo - SP, 04532-010\nAtendimento presencial e online',
    href: null,
  },
];

export function ContactInfo() {
  return (
    <div>
      <h3 className="font-serif text-2xl md:text-3xl font-light text-[#1A1A1A] mb-8">
        Outras formas de contato
      </h3>
      <div className="space-y-6">
        {contactMethods.map((method) => {
          const Icon = method.icon;
          const content = (
            <div className="flex items-start gap-4 group">
              <div className="w-12 h-12 rounded-full border border-[#1A1A1A]/10 flex items-center justify-center flex-shrink-0 group-hover:border-[#1A1A1A]/30 group-hover:bg-[#1A1A1A]/5 transition-all duration-300">
                <Icon size={20} className="text-[#1A1A1A]/60" />
              </div>
              <div>
                <p className="text-sm font-sans font-medium text-[#1A1A1A]/50 mb-1">
                  {method.label}
                </p>
                <p className="text-base font-sans text-[#1A1A1A] group-hover:text-[#C4836D] transition-colors whitespace-pre-line">
                  {method.value}
                </p>
              </div>
            </div>
          );

          if (method.href) {
            return (
              <a
                key={method.label}
                href={method.href}
                target={method.href.startsWith('http') ? '_blank' : undefined}
                rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              >
                {content}
              </a>
            );
          }

          return <div key={method.label}>{content}</div>;
        })}
      </div>
    </div>
  );
}

