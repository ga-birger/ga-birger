# ✅ HERO COM VÍDEO ANIMADO - IMPLEMENTADA

## 🎬 NOVA HERO COM VÍDEO DE FUNDO

**Arquivo:** `src/components/sections/Hero.tsx`

---

## 🎨 CONCEITO

A Hero agora apresenta um **vídeo animado dos rabiscos** que representa visualmente o processo da psicanálise: do emaranhado (caos) à clareza (organização).

---

## 📐 ESTRUTURA

### Layout Grid 2 Colunas:

```
┌─────────────────────────────────────┐
│  [Texto]           [Vídeo Animado]  │
│  - Tag             - MP4 Loop       │
│  - Título          - Fallback PNG   │
│  - Descrição       - Legenda        │
│  - 2 Botões                         │
└─────────────────────────────────────┘
```

- ✅ Desktop: 2 colunas lado a lado
- ✅ Mobile: Stack vertical (texto em cima, vídeo embaixo)

---

## 📝 CONTEÚDO

### Coluna Esquerda - Texto:

#### 1. Tag Superior:
```tsx
<p className="text-[var(--terracota)] text-sm tracking-[0.3em] uppercase mb-4">
  Psicanalista
</p>
```
- ✅ Cor terracota
- ✅ Uppercase + tracking wide
- ✅ Animação: fade + slide up (delay 0.2s)

#### 2. Título Principal:
```tsx
<h1 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1.1] mb-6">
  Gabriela<br />Birger
</h1>
```
- ✅ Responsivo: 36px → 48px → 60px → 72px
- ✅ Line-height apertado (1.1)
- ✅ Quebra de linha entre nome e sobrenome
- ✅ Animação: fade + slide up (delay 0.3s)

#### 3. Descrição:
```tsx
<p className="text-lg md:text-xl text-[var(--preto)]/60 max-w-md mb-8 leading-relaxed">
  Do emaranhado à clareza. Psicanálise, filosofia e reflexão para
  atravessar os desafios da vida contemporânea.
</p>
```
- ✅ Texto grande (18px → 20px)
- ✅ Cor: preto 60% opacidade
- ✅ Max-width: 448px
- ✅ Leading relaxed
- ✅ Animação: fade + slide up (delay 0.4s)

#### 4. Botões CTA:
```tsx
<div className="flex flex-wrap gap-4">
  <Link href="/sobre" className="px-8 py-4 bg-[var(--preto)] text-white...">
    Conheça mais
  </Link>
  <Link href="/contato" className="px-8 py-4 border border-[var(--preto)]...">
    Entre em contato
  </Link>
</div>
```
- ✅ **Botão 1**: Fundo preto, hover terracota
- ✅ **Botão 2**: Outline, hover preenchido preto
- ✅ Flex-wrap para mobile
- ✅ Gap 16px
- ✅ Animação: fade + slide up (delay 0.5s)

---

### Coluna Direita - Vídeo:

#### Container do Vídeo:
```tsx
<div className="relative aspect-[16/9] md:aspect-[4/3] lg:aspect-square rounded-2xl overflow-hidden">
  <video
    autoPlay
    loop
    muted
    playsInline
    className="absolute inset-0 w-full h-full object-contain"
    poster="/images/hero-image.png"
  >
    <source src="/videos/hero-animation.mp4" type="video/mp4" />
    <img src="/images/hero-image.png" alt="..." />
  </video>
</div>
```

**Características:**
- ✅ **autoPlay**: Inicia automaticamente
- ✅ **loop**: Reproduz infinitamente
- ✅ **muted**: Sem som (necessário para autoplay)
- ✅ **playsInline**: Reproduz inline em iOS
- ✅ **poster**: Imagem de preview antes do vídeo carregar
- ✅ **Fallback**: Tag `<img>` para browsers sem suporte

**Aspect Ratios:**
- Mobile: 16:9 (landscape)
- Tablet: 4:3 (mais quadrado)
- Desktop: 1:1 (square)

**Bordas:**
- ✅ `rounded-2xl` (16px)
- ✅ `overflow-hidden` para cortar cantos

#### Legenda:
```tsx
<p className="text-center mt-4 text-sm text-[var(--preto)]/40 italic">
  Do caos à clareza
</p>
```
- ✅ Texto pequeno (14px)
- ✅ Cor: preto 40% opacidade
- ✅ Itálico
- ✅ Centralizado
- ✅ Animação: fade in (delay 1.2s)

---

## 🎥 ARQUIVOS DE MÍDIA

### Vídeo Principal:
- **Path**: `/videos/hero-animation.mp4`
- **Formato**: MP4 (H.264)
- **Características**:
  - Loop infinito
  - Sem som
  - Autoplay
  - Otimizado para web

### Imagem Fallback:
- **Path**: `/images/hero-image.png`
- **Uso**:
  - Poster do vídeo (preview)
  - Fallback se vídeo não carregar
  - Browsers sem suporte a vídeo

---

## 🎭 ANIMAÇÕES

### Sequência de Entrada:

1. **Texto (esquerda)**: Slide da esquerda (x: -40 → 0)
   - Delay 0s, duration 0.8s

2. **Tag "Psicanalista"**: Fade + slide up
   - Delay 0.2s, duration 0.6s

3. **Título "Gabriela Birger"**: Fade + slide up
   - Delay 0.3s, duration 0.6s

4. **Descrição**: Fade + slide up
   - Delay 0.4s, duration 0.6s

5. **Botões**: Fade + slide up
   - Delay 0.5s, duration 0.6s

6. **Vídeo (direita)**: Fade + scale (0.95 → 1)
   - Delay 0s, duration 1s

7. **Legenda "Do caos à clareza"**: Fade in
   - Delay 1.2s, duration 0.6s

8. **Scroll indicator**: Fade in + pulse
   - Delay 1.5s, loop infinito

### Easing:
- ✅ Cubic-bezier customizado: `[0.22, 1, 0.36, 1]`
- ✅ Suave e profissional

---

## 📱 RESPONSIVIDADE

### Mobile (< 768px):
- ✅ Stack vertical
- ✅ Texto primeiro, vídeo depois
- ✅ Título: 36px
- ✅ Vídeo: aspect 16:9
- ✅ Botões: flex-wrap
- ✅ Scroll indicator: hidden

### Tablet (768px - 1024px):
- ✅ Grid 2 colunas
- ✅ Gap: 48px
- ✅ Título: 48px → 60px
- ✅ Vídeo: aspect 4:3

### Desktop (> 1024px):
- ✅ Grid 2 colunas
- ✅ Gap: 64px
- ✅ Título: 72px
- ✅ Vídeo: aspect 1:1 (square)
- ✅ Scroll indicator: visible

---

## 🎨 BACKGROUND

### Gradiente:
```tsx
<div className="absolute inset-0 bg-gradient-to-b from-[var(--creme)] via-[var(--rosa-claro)]/10 to-[var(--creme)]" />
```
- ✅ Vertical: creme → rosa-claro (10%) → creme
- ✅ Sutil e elegante
- ✅ Não interfere no vídeo

---

## 🔧 CONFIGURAÇÃO NEXT.JS

### Vídeos na Pasta Public:
```
public/
  videos/
    hero-animation.mp4
  images/
    hero-image.png
```

**Não precisa configurar nada no `next.config.ts`!**

O Next.js serve automaticamente arquivos da pasta `public/`.

---

## ✅ CHECKLIST

### Estrutura:
- [x] Grid 2 colunas (texto + vídeo)
- [x] Responsivo (stack em mobile)
- [x] Container centralizado
- [x] Background gradient

### Texto:
- [x] Tag "Psicanalista"
- [x] Título "Gabriela Birger"
- [x] Descrição "Do emaranhado à clareza..."
- [x] 2 botões CTA
- [x] Animações sequenciais

### Vídeo:
- [x] Tag `<video>` com autoPlay, loop, muted
- [x] Source MP4
- [x] Poster (preview)
- [x] Fallback `<img>`
- [x] Aspect ratios responsivos
- [x] Rounded-2xl
- [x] Legenda "Do caos à clareza"

### Animações:
- [x] Slide da esquerda (texto)
- [x] Fade + slide up (elementos)
- [x] Scale (vídeo)
- [x] Scroll indicator pulsante

### Arquivos:
- [x] `/videos/hero-animation.mp4`
- [x] `/images/hero-image.png`

---

## 🎯 RESULTADO FINAL

**Acesse:** http://localhost:3000

### O que você verá:

1. **Hero Full-Screen**
   - ✅ Grid 2 colunas
   - ✅ Texto à esquerda com animações sequenciais
   - ✅ Vídeo à direita com rabiscos animados
   - ✅ Gradient sutil no background

2. **Vídeo Animado**
   - ✅ Loop infinito dos rabiscos
   - ✅ Representação visual do processo terapêutico
   - ✅ Do caos (emaranhado) à clareza (organização)

3. **CTAs Claros**
   - ✅ "Conheça mais" → /sobre
   - ✅ "Entre em contato" → /contato

4. **Scroll Indicator**
   - ✅ Linha pulsante no bottom
   - ✅ Convida a explorar mais

---

## 💡 CONCEITO VISUAL

**Metáfora do Processo Terapêutico:**

O vídeo dos rabiscos representa visualmente o trabalho da psicanálise:
- **Início**: Linhas emaranhadas, caóticas (confusão mental)
- **Processo**: Gradualmente se organizam
- **Resultado**: Clareza, ordem, compreensão

Essa metáfora visual reforça a mensagem "Do emaranhado à clareza" e torna o conceito abstrato da psicanálise mais tangível e compreensível.

---

**Hero com vídeo implementada com sucesso!** 🎉

**Visual premium, animações suaves e metáfora poderosa!** ✨

**Última atualização:** 27 de novembro de 2025

