# Design System - Gabriela Birger

## 🎨 Paleta de Cores

### Cores Principais
```css
--verde-oliva: #7D8B6F   /* Natureza, equilíbrio, acolhimento */
--terracota: #C4836D     /* Calor, humanidade, conexão */
--rosa-claro: #F0D9D5    /* Suavidade, delicadeza */
--mostarda: #D4A84B      /* Energia, criatividade */
```

### Cores de Base
```css
--creme: #F5EDE8         /* Background principal */
--creme-escuro: #EDE4DD  /* Background secundário */
--preto: #1A1A1A         /* Texto principal */
--branco: #FDFCFB        /* Texto em fundos escuros */
```

### Uso no Tailwind
```tsx
// Classes disponíveis:
bg-verde-oliva
bg-terracota
bg-rosa-claro
bg-mostarda
bg-creme
bg-creme-escuro
bg-preto
bg-branco

text-verde-oliva
text-terracota
// ... etc
```

## 📝 Tipografia

### Fontes
- **Cormorant Garamond** (serif) - Títulos
  - Pesos: 400, 500, 600, 700
  - Uso: `font-serif`
  
- **DM Sans** (sans-serif) - Corpo de texto
  - Pesos: 300, 400, 500
  - Uso: `font-sans`

### Hierarquia de Títulos
```tsx
// H1 - Hero
<h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-semibold">

// H2 - Seções principais
<h2 className="font-serif text-4xl md:text-5xl font-semibold">

// H3 - Subsections
<h3 className="font-serif text-2xl md:text-3xl font-semibold">

// Corpo de texto
<p className="font-sans text-base md:text-lg text-preto/70">
```

## 🎭 Animações

### Transições de Página
```tsx
import PageTransition from '@/components/PageTransition';

<PageTransition>
  {/* Conteúdo da página */}
</PageTransition>
```

### Hover Effects
```tsx
// Escala suave
<motion.div whileHover={{ scale: 1.02 }}>

// Underline animado (já implementado no Header)
<motion.div
  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-terracota origin-left"
  initial={{ scaleX: 0 }}
  whileHover={{ scaleX: 1 }}
  transition={{ duration: 0.3 }}
/>
```

## 📐 Espaçamento

### Containers
```tsx
import Container from '@/components/Container';

// Tamanhos disponíveis
<Container size="sm">  {/* max-w-3xl */}
<Container size="md">  {/* max-w-4xl */}
<Container size="lg">  {/* max-w-5xl */}
<Container size="xl">  {/* max-w-7xl (padrão) */}
<Container size="full"> {/* max-w-full */}
```

### Padding e Margin
- Seções: `py-24` ou `py-32`
- Containers: `px-6 lg:px-8`
- Espaçamento entre elementos: `mb-8`, `mb-12`, `gap-8`

## 🎨 Estética

### Princípios
1. **Editorial sofisticado** - Tipografia elegante, espaços generosos
2. **Acolhedor** - Cores quentes, transições suaves
3. **Intelectual** - Layout limpo, hierarquia clara

### Textura Grain
Aplicada automaticamente no `body::before` do `globals.css`
- Opacidade: 3%
- Sempre presente em todas as páginas

### Bordas e Sombras
```tsx
// Bordas sutis
border border-preto/5

// Sombras suaves no hover
hover:shadow-lg

// Bordas arredondadas
rounded-2xl  // Cards
rounded-full // Botões
```

## 🔘 Componentes

### Botões

#### Primário (CTA)
```tsx
<Link
  href="/caminho"
  className="inline-flex items-center gap-2 px-8 py-4 bg-terracota text-branco font-sans font-medium rounded-full hover:bg-terracota/90 transition-all duration-300"
>
  Texto do Botão
</Link>
```

#### Secundário (Outline)
```tsx
<Link
  href="/caminho"
  className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-verde-oliva text-verde-oliva font-sans font-medium rounded-full hover:bg-verde-oliva hover:text-branco transition-all duration-300"
>
  Texto do Botão
</Link>
```

### Cards
```tsx
<div className="p-8 bg-creme-escuro rounded-2xl hover:shadow-lg transition-all duration-300">
  {/* Conteúdo */}
</div>
```

## 📱 Responsividade

### Breakpoints (Tailwind padrão)
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

### Padrão de uso
```tsx
// Mobile first
<h1 className="text-5xl md:text-7xl lg:text-8xl">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
```

## 🎯 Boas Práticas

1. **Sempre use as variáveis de cor** definidas no design system
2. **Mantenha espaçamento generoso** entre seções (py-24 ou py-32)
3. **Use animações sutis** - duração entre 200-500ms
4. **Priorize legibilidade** - contraste adequado, tamanhos de fonte confortáveis
5. **Mobile first** - sempre teste em dispositivos móveis primeiro
6. **Acessibilidade** - use aria-labels, contraste adequado, navegação por teclado

## 📦 Constantes

Importe de `@/lib/constants`:
```tsx
import { COLORS, NAV_LINKS, SITE_CONFIG } from '@/lib/constants';
```

