# 🚀 Guia de Início Rápido

## ✅ O que já está pronto

### 1. Configuração Base
- ✅ Next.js 16 com App Router
- ✅ TypeScript configurado
- ✅ Tailwind CSS v4 com design system completo
- ✅ Framer Motion para animações
- ✅ Todas as dependências instaladas

### 2. Design System
- ✅ Paleta de cores completa (8 cores)
- ✅ Tipografia (Cormorant Garamond + DM Sans)
- ✅ Textura grain nos backgrounds
- ✅ Variáveis CSS configuradas

### 3. Componentes
- ✅ **Header** - Navegação responsiva com menu mobile
- ✅ **Footer** - Rodapé com links e redes sociais
- ✅ **PageTransition** - Transições suaves entre páginas
- ✅ **Button** - Botão reutilizável com variantes
- ✅ **Container** - Container responsivo com tamanhos

### 4. Páginas
- ✅ Home (com conteúdo de exemplo)
- ✅ Sobre (estrutura básica)
- ✅ com.verso (estrutura básica)
- ✅ Podcast (estrutura básica)
- ✅ Contato (estrutura básica)

## 🎯 Próximos Passos

### 1. Adicionar Conteúdo
Edite os arquivos em `src/app/`:
- `sobre/page.tsx` - Biografia e formação
- `comverso/page.tsx` - Descrição do projeto
- `podcast/page.tsx` - Lista de episódios
- `contato/page.tsx` - Formulário de contato

### 2. Personalizar Informações
Edite `src/lib/constants.ts`:
```typescript
export const SITE_CONFIG = {
  email: 'seu-email@exemplo.com',
  social: {
    instagram: 'https://instagram.com/seu-usuario',
  },
};
```

### 3. Adicionar Imagens
Coloque suas imagens em `public/`:
- `public/logo.png` - Logo do site
- `public/foto-perfil.jpg` - Foto de perfil
- `public/og-image.jpg` - Imagem para compartilhamento

### 4. Implementar Formulário de Contato
O projeto já tem React Hook Form e Zod instalados:

```tsx
// Exemplo em src/app/contato/page.tsx
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const schema = z.object({
  nome: z.string().min(2, 'Nome muito curto'),
  email: z.string().email('Email inválido'),
  mensagem: z.string().min(10, 'Mensagem muito curta'),
});
```

## 🎨 Como Usar o Design System

### Cores
```tsx
// Use as classes do Tailwind
<div className="bg-creme text-preto">
<div className="bg-terracota text-branco">
<div className="bg-verde-oliva text-branco">
```

### Tipografia
```tsx
// Títulos
<h1 className="font-serif text-5xl font-semibold">

// Texto
<p className="font-sans text-base text-preto/70">
```

### Botões
```tsx
import Button from '@/components/Button';

<Button variant="primary">Botão Primário</Button>
<Button variant="secondary">Botão Secundário</Button>
<Button variant="ghost">Botão Fantasma</Button>
```

### Containers
```tsx
import Container from '@/components/Container';

<Container size="md">
  {/* Seu conteúdo */}
</Container>
```

### Animações
```tsx
import { motion } from 'framer-motion';

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  {/* Seu conteúdo */}
</motion.div>
```

## 📱 Testar o Site

1. **Iniciar servidor de desenvolvimento:**
```bash
npm run dev
```

2. **Acessar no navegador:**
- Local: http://localhost:3000
- Rede: http://192.168.15.26:3000

3. **Testar navegação:**
- Clique nos links do menu
- Teste o menu mobile (redimensione a janela)
- Verifique as animações de hover

## 🔧 Comandos Úteis

```bash
# Desenvolvimento
npm run dev

# Build para produção
npm run build

# Iniciar em produção
npm start

# Linting
npm run lint
```

## 📚 Documentação Adicional

- `README.md` - Visão geral do projeto
- `DESIGN_SYSTEM.md` - Guia completo do design system
- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)

## 💡 Dicas

1. **Mantenha a consistência** - Use sempre os componentes e cores do design system
2. **Mobile first** - Sempre teste em mobile primeiro
3. **Animações sutis** - Menos é mais, mantenha as animações suaves
4. **Espaçamento generoso** - Use bastante espaço em branco
5. **Acessibilidade** - Sempre adicione alt text em imagens e aria-labels em botões

## 🆘 Precisa de Ajuda?

- Verifique o console do navegador (F12) para erros
- Leia os logs do terminal onde o `npm run dev` está rodando
- Consulte a documentação do Next.js e Tailwind CSS
- Verifique o arquivo `DESIGN_SYSTEM.md` para referências de estilo

---

**Status atual:** ✅ Projeto configurado e rodando em http://localhost:3000

