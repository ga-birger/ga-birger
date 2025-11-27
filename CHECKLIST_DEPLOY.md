# ✅ Checklist para Deploy

## Antes do Deploy

### 1. Conteúdo
- [ ] Adicionar conteúdo em todas as páginas
- [ ] Adicionar imagens (logo, fotos, etc.)
- [ ] Revisar todos os textos
- [ ] Verificar links externos (Instagram, etc.)
- [ ] Adicionar favicon personalizado

### 2. SEO e Metadata
- [ ] Atualizar `metadata` em cada `page.tsx`
- [ ] Adicionar `robots.txt`
- [ ] Adicionar `sitemap.xml`
- [ ] Criar imagem Open Graph (`og-image.jpg`)
- [ ] Verificar meta descriptions em todas as páginas

### 3. Configurações
- [ ] Atualizar email em `src/lib/constants.ts`
- [ ] Atualizar links de redes sociais
- [ ] Configurar variáveis de ambiente (se necessário)
- [ ] Testar formulário de contato

### 4. Performance
- [ ] Otimizar todas as imagens (WebP, tamanhos adequados)
- [ ] Testar performance no Lighthouse
- [ ] Verificar carregamento em 3G
- [ ] Adicionar lazy loading em imagens

### 5. Testes
- [ ] Testar em Chrome, Firefox, Safari
- [ ] Testar em dispositivos móveis (iOS e Android)
- [ ] Testar navegação completa
- [ ] Testar formulários
- [ ] Verificar console para erros

### 6. Acessibilidade
- [ ] Adicionar `alt` text em todas as imagens
- [ ] Verificar contraste de cores
- [ ] Testar navegação por teclado
- [ ] Adicionar `aria-labels` onde necessário
- [ ] Testar com leitor de tela

## Deploy na Vercel (Recomendado)

### Passo 1: Preparar Repositório
```bash
git add .
git commit -m "Preparar para deploy"
git push origin main
```

### Passo 2: Conectar na Vercel
1. Acesse [vercel.com](https://vercel.com)
2. Faça login com GitHub
3. Clique em "New Project"
4. Selecione o repositório `ga-birger`
5. Configure:
   - Framework Preset: Next.js
   - Root Directory: ./
   - Build Command: `npm run build`
   - Output Directory: `.next`

### Passo 3: Variáveis de Ambiente (se necessário)
Se você usar API keys ou secrets:
1. Vá em Settings > Environment Variables
2. Adicione as variáveis necessárias

### Passo 4: Deploy
1. Clique em "Deploy"
2. Aguarde o build (2-3 minutos)
3. Acesse o link fornecido

### Passo 5: Domínio Personalizado
1. Vá em Settings > Domains
2. Adicione seu domínio (ex: gabrielabirger.com)
3. Configure DNS conforme instruções
4. Aguarde propagação (pode levar até 48h)

## Deploy Alternativo (Netlify)

```bash
npm run build
```

1. Acesse [netlify.com](https://netlify.com)
2. Arraste a pasta `.next` para o Netlify Drop
3. Configure domínio personalizado

## Após o Deploy

### Verificações Finais
- [ ] Testar site em produção
- [ ] Verificar todas as páginas
- [ ] Testar formulário de contato
- [ ] Verificar analytics (se configurado)
- [ ] Testar compartilhamento em redes sociais
- [ ] Verificar certificado SSL (https)

### Monitoramento
- [ ] Configurar Google Analytics (opcional)
- [ ] Configurar Google Search Console
- [ ] Monitorar erros com Sentry (opcional)

### SEO Pós-Deploy
- [ ] Submeter sitemap ao Google Search Console
- [ ] Verificar indexação no Google
- [ ] Testar snippet de busca
- [ ] Compartilhar em redes sociais

## Manutenção

### Atualizações Regulares
```bash
# Atualizar dependências
npm update

# Verificar vulnerabilidades
npm audit

# Corrigir vulnerabilidades
npm audit fix
```

### Backup
- [ ] Fazer backup regular do código
- [ ] Documentar mudanças importantes
- [ ] Manter histórico de versões no Git

## Comandos Úteis

```bash
# Build local para testar
npm run build
npm start

# Verificar erros de build
npm run build 2>&1 | tee build.log

# Limpar cache
rm -rf .next
npm run build
```

## Troubleshooting

### Build falha
1. Verificar erros no console
2. Testar build local: `npm run build`
3. Verificar versões das dependências
4. Limpar cache: `rm -rf .next node_modules && npm install`

### Imagens não carregam
1. Verificar se estão em `public/`
2. Usar caminhos relativos: `/imagem.jpg`
3. Verificar extensões (case-sensitive)

### Estilos não aplicados
1. Verificar se `globals.css` está importado
2. Limpar cache do Tailwind
3. Verificar classes do Tailwind

## Recursos

- [Next.js Deployment](https://nextjs.org/docs/deployment)
- [Vercel Docs](https://vercel.com/docs)
- [Lighthouse CI](https://github.com/GoogleChrome/lighthouse-ci)
- [Web.dev](https://web.dev/measure/)

---

**Lembre-se:** Sempre teste localmente antes de fazer deploy!

