export const COLORS = {
  verdeOliva: '#7D8B6F',
  terracota: '#C4836D',
  rosaClaro: '#F0D9D5',
  mostarda: '#D4A84B',
  creme: '#F5EDE8',
  cremeEscuro: '#EDE4DD',
  preto: '#1A1A1A',
  branco: '#FDFCFB',
} as const;

export const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/sobre', label: 'Sobre' },
  { href: '/comverso', label: 'com.verso' },
  { href: '/podcast', label: 'Podcast' },
  { href: '/contato', label: 'Contato' },
] as const;

export const SITE_CONFIG = {
  name: 'Gabriela Birger',
  title: 'Gabriela Birger - Psicanálise e com.verso',
  description:
    'Psicanalista e idealizadora do projeto com.verso. Espaço de reflexão, escuta e transformação.',
  url: 'https://gabrielabirger.com',
  email: 'contato@gabrielabirger.com',
  social: {
    instagram: 'https://instagram.com',
  },
} as const;

