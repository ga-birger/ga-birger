# 🎨 Guia Visual da Página Home

## Layout Completo

```
┌─────────────────────────────────────────────────────────┐
│                                                         │
│                     SEÇÃO 1: HERO                       │
│                   (min-h-screen)                        │
│                                                         │
│                    com.verso                            │
│         conexões • psicanálise • bons vinhos           │
│                                                         │
│                       ↓ (animado)                       │
│                                                         │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│                                                         │
│              SEÇÃO 2: APRESENTAÇÃO                      │
│                  (bg: creme)                            │
│                                                         │
│  ┌──────────────────┐  ┌─────────────────┐            │
│  │                  │  │                 │            │
│  │  Gabriela Birger │  │   [Foto         │            │
│  │                  │  │   Gabriela]     │            │
│  │  Texto sobre...  │  │                 │            │
│  │                  │  │   3:4 ratio     │            │
│  │  [Conheça mais]  │  │   rosa-claro    │            │
│  │                  │  │                 │            │
│  └──────────────────┘  └─────────────────┘            │
│                                                         │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│                                                         │
│           SEÇÃO 3: GALERIA DE ARTE                      │
│                 (Inspirações)                           │
│                                                         │
│  ┌─────────────────────────────┐  ┌────────────┐      │
│  │                             │  │            │      │
│  │                             │  │  Schiele   │      │
│  │      Morning Sun            │  │   1910     │      │
│  │      Edward Hopper          │  │            │      │
│  │         1952                │  └────────────┘      │
│  │                             │  ┌────────────┐      │
│  │                             │  │            │      │
│  └─────────────────────────────┘  │  Kirchner  │      │
│                                    │   1909     │      │
│                                    │            │      │
│                                    └────────────┘      │
│                                                         │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│                                                         │
│          SEÇÃO 4: COM.VERSO PREVIEW                     │
│                 (bg: preto)                             │
│                                                         │
│                   *  (decorativo)                       │
│                                                         │
│                  com.verso                              │
│                                                         │
│        Um espaço dedicado à reflexão...                │
│                                                         │
│              [Saiba mais]                               │
│                                                         │
│                                    C·V (decorativo)     │
│                                                         │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│                                                         │
│          SEÇÃO 5: INSTAGRAM FEED                        │
│                 (bg: creme)                             │
│                                                         │
│           Acompanhe no Instagram                        │
│              @_com.verso_                               │
│                                                         │
│  ┌────┐  ┌────┐  ┌────┐                               │
│  │ 1  │  │ 2  │  │ 3  │                               │
│  └────┘  └────┘  └────┘                               │
│  ┌────┐  ┌────┐  ┌────┐                               │
│  │ 4  │  │ 5  │  │ 6  │                               │
│  └────┘  └────┘  └────┘                               │
│                                                         │
│         Ver mais no Instagram →                         │
│                                                         │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│                                                         │
│             SEÇÃO 6: CTA FINAL                          │
│              (bg: terracota)                            │
│                                                         │
│              Vamos conversar?                           │
│                                                         │
│    Entre em contato para saber mais sobre...          │
│                                                         │
│           [Entrar em contato]                           │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

---

## 🎨 Paleta de Cores por Seção

| Seção | Background | Texto | Botão |
|-------|-----------|-------|-------|
| Hero | Creme (#F5EDE8) | Preto | - |
| Apresentação | Creme (#F5EDE8) | Preto | Terracota |
| Galeria | Creme (body) | Preto | - |
| com.verso | Preto (#1A1A1A) | Branco | Outline Branco |
| Instagram | Creme (#F5EDE8) | Preto | Link Terracota |
| CTA | Terracota (#C4836D) | Branco | Outline Branco |

---

## 📐 Dimensões e Espaçamento

### Container Padrão
```css
max-width: 1280px (max-w-7xl)
padding-x: 24px (px-6) → 48px (md:px-12) → 80px (lg:px-20)
```

### Espaçamento Vertical
```css
padding-y: 80px (py-20) → 128px (md:py-32)
```

### Elementos
- **Hero**: min-h-screen
- **Foto Gabriela**: aspect-ratio 3:4
- **Cards Arte**: 
  - Grande: aspect-ratio 4:3 (lg: 3:2)
  - Pequenos: aspect-ratio 3:4
- **Posts Instagram**: aspect-ratio 1:1 (quadrados)

---

## 🎭 Animações por Seção

### 1. Hero
```
Logo: fade + slide up (y: 30)
Tagline: fade + slide up (y: 30) com delay
Seta: fade in + bounce infinito
Stagger: 0.3s entre elementos
```

### 2. Apresentação
```
Texto: fade + slide up (y: 20)
Imagem: fade + slide up (y: 20) com delay 0.2s
Trigger: scroll (margin: -100px)
```

### 3. Galeria
```
Título: fade + slide up (y: 20)
Cards: fade + slide up (y: 30) com stagger 0.2s
Hover: scale 1.02 + sombra
```

### 4. com.verso
```
Asterisco: fade + scale (0.8 → 1)
Conteúdo: fade + slide up (y: 20)
C·V: fade in com delay 0.3s
```

### 5. Instagram
```
Título: fade + slide up (y: 20)
Posts: fade + scale (0.9 → 1) com stagger 0.1s
Hover: scale 1.05 + overlay escuro
Link: fade + slide up com delay 0.3s
```

### 6. CTA
```
Todo conteúdo: fade + slide up (y: 20)
Botão: hover scale 1.02
```

---

## 📱 Layout Responsivo

### Mobile (< 768px)
```
Hero:
- Texto: text-6xl
- Tagline: text-xl

Apresentação:
- Stack vertical
- Imagem primeiro, texto depois

Galeria:
- Stack vertical
- Todos os cards em coluna única

Instagram:
- Grid 2 colunas

Padding:
- px-6 (24px)
- py-20 (80px)
```

### Tablet (768px - 1024px)
```
Hero:
- Texto: text-8xl
- Tagline: text-2xl

Apresentação:
- Grid 2 colunas (ainda empilhado)

Galeria:
- Grid 2 colunas

Instagram:
- Grid 3 colunas

Padding:
- px-12 (48px)
- py-32 (128px)
```

### Desktop (> 1024px)
```
Hero:
- Texto: text-9xl
- Tagline: text-3xl

Apresentação:
- Grid 2 colunas (lado a lado)

Galeria:
- Grid 3 colunas assimétrico
- Card 1: 2 cols x 2 rows

Instagram:
- Grid 3 colunas

Padding:
- px-20 (80px)
- py-32 (128px)
```

---

## 🎯 Hierarquia Tipográfica

```
Hero Logo:
- Mobile: text-6xl (3.75rem / 60px)
- Tablet: text-8xl (6rem / 96px)
- Desktop: text-9xl (8rem / 128px)
- Font: Cormorant Garamond, semibold

Títulos de Seção:
- Mobile: text-4xl (2.25rem / 36px)
- Desktop: text-5xl (3rem / 48px)
- Font: Cormorant Garamond, semibold

Texto Corpo:
- Mobile: text-lg (1.125rem / 18px)
- Desktop: text-xl (1.25rem / 20px)
- Font: DM Sans, regular

Botões:
- text-base (1rem / 16px)
- Font: DM Sans, medium
```

---

## 🔄 Interações

### Botões
```
Default: scale 1
Hover: scale 1.02
Tap: scale 0.98
Transition: 300ms
```

### Cards (Galeria)
```
Default: scale 1, shadow-none
Hover: scale 1.02, shadow-xl
Transition: 300ms
```

### Posts Instagram
```
Default: scale 1, overlay opacity 0
Hover: scale 1.05, overlay opacity 100
Transition: 300ms
```

### Links
```
Default: color normal
Hover: color terracota
Transition: 300ms
```

---

## ✨ Detalhes de Design

### Textura Grain
- Aplicada no Hero via pseudo-elemento
- Opacidade: 3%
- SVG noise pattern
- Fixed position

### Elementos Decorativos
- Asterisco (*) no com.verso: opacidade 10%, text-[200px]
- C·V no com.verso: opacidade 5%, text-[150px], apenas desktop

### Bordas
- Cards: `rounded-sm` (2px)
- Botões: `rounded-full`

### Sombras
- Hover em cards: `shadow-xl`
- Transição: 300ms

---

## 📊 Checklist de Qualidade

- ✅ Todas as seções implementadas
- ✅ Layout nunca grudado nas bordas
- ✅ Espaçamento generoso entre seções
- ✅ 100% responsivo (375px, 768px, 1440px)
- ✅ Animações suaves e profissionais
- ✅ Scroll-triggered animations
- ✅ Hover effects em todos os elementos interativos
- ✅ Acessibilidade (aria-labels, alt texts)
- ✅ Performance otimizada
- ✅ Código limpo e organizado
- ✅ TypeScript sem erros
- ✅ Design system consistente

---

## 🎉 Resultado Final

A página Home é uma experiência visual elegante e sofisticada que:

1. **Impacta** com o hero minimalista e poderoso
2. **Apresenta** Gabriela de forma pessoal e profissional
3. **Inspira** com referências artísticas refinadas
4. **Convida** para conhecer o projeto com.verso
5. **Conecta** através do Instagram
6. **Converte** com CTA claro e direto

**Acesse agora:** http://localhost:3000

---

**Última atualização:** 26 de novembro de 2025

