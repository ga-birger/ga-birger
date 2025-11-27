# 🛠️ Comandos Úteis

## 🚀 Desenvolvimento

### Iniciar servidor de desenvolvimento
```bash
npm run dev
```
Acesse: http://localhost:3000

### Parar servidor
```
Ctrl + C (no terminal onde está rodando)
```

### Build para produção
```bash
npm run build
```

### Iniciar em modo produção
```bash
npm start
```

### Verificar código (linting)
```bash
npm run lint
```

---

## 📦 Gerenciamento de Dependências

### Instalar todas as dependências
```bash
npm install
```

### Adicionar nova dependência
```bash
npm install nome-do-pacote
```

### Adicionar dependência de desenvolvimento
```bash
npm install -D nome-do-pacote
```

### Atualizar dependências
```bash
npm update
```

### Verificar dependências desatualizadas
```bash
npm outdated
```

### Verificar vulnerabilidades
```bash
npm audit
```

### Corrigir vulnerabilidades
```bash
npm audit fix
```

---

## 🧹 Limpeza

### Limpar cache do Next.js
```bash
# Windows
rmdir /s /q .next
npm run dev

# Mac/Linux
rm -rf .next
npm run dev
```

### Limpar tudo e reinstalar
```bash
# Windows
rmdir /s /q node_modules
rmdir /s /q .next
del package-lock.json
npm install

# Mac/Linux
rm -rf node_modules .next package-lock.json
npm install
```

---

## 🔍 Análise e Debug

### Ver estrutura de build
```bash
npm run build
# Depois verifique a pasta .next/
```

### Analisar bundle (tamanho dos arquivos)
```bash
# Instalar ferramenta
npm install -D @next/bundle-analyzer

# Adicionar ao next.config.ts:
# const withBundleAnalyzer = require('@next/bundle-analyzer')({
#   enabled: process.env.ANALYZE === 'true',
# })

# Executar análise
ANALYZE=true npm run build
```

### Ver logs detalhados
```bash
npm run dev -- --debug
```

---

## 📁 Arquivos e Pastas

### Criar nova página
```bash
# Windows
mkdir src\app\nome-da-pagina
echo. > src\app\nome-da-pagina\page.tsx

# Mac/Linux
mkdir -p src/app/nome-da-pagina
touch src/app/nome-da-pagina/page.tsx
```

### Criar novo componente
```bash
# Windows
echo. > src\components\NomeDoComponente.tsx

# Mac/Linux
touch src/components/NomeDoComponente.tsx
```

### Listar estrutura do projeto
```bash
# Windows
tree /F

# Mac/Linux
tree -L 3
```

---

## 🎨 Tailwind CSS

### Gerar arquivo de configuração (se necessário)
```bash
npx tailwindcss init
```

### Ver classes disponíveis
Acesse: https://tailwindcss.com/docs

---

## 🔧 TypeScript

### Verificar tipos
```bash
npx tsc --noEmit
```

### Gerar tsconfig.json (se necessário)
```bash
npx tsc --init
```

---

## 🌐 Git (Controle de Versão)

### Inicializar repositório (se ainda não fez)
```bash
git init
```

### Ver status
```bash
git status
```

### Adicionar arquivos
```bash
# Adicionar todos
git add .

# Adicionar específico
git add src/app/page.tsx
```

### Fazer commit
```bash
git commit -m "Descrição das mudanças"
```

### Ver histórico
```bash
git log --oneline
```

### Criar branch
```bash
git checkout -b nome-da-branch
```

### Voltar para main
```bash
git checkout main
```

### Push para GitHub
```bash
git push origin main
```

---

## 🚀 Deploy

### Vercel (Recomendado)

#### Via CLI
```bash
# Instalar Vercel CLI
npm install -g vercel

# Fazer login
vercel login

# Deploy
vercel

# Deploy para produção
vercel --prod
```

#### Via GitHub
1. Conecte seu repositório no site da Vercel
2. Push para GitHub
3. Deploy automático!

### Netlify

```bash
# Instalar Netlify CLI
npm install -g netlify-cli

# Fazer login
netlify login

# Deploy
netlify deploy

# Deploy para produção
netlify deploy --prod
```

---

## 📊 Performance

### Lighthouse (Google)
```bash
# Instalar
npm install -g lighthouse

# Executar
lighthouse http://localhost:3000 --view
```

### Verificar tamanho do build
```bash
npm run build
# Verifique o output no terminal
```

---

## 🔐 Variáveis de Ambiente

### Criar arquivo .env.local
```bash
# Windows
echo NEXT_PUBLIC_API_URL=https://api.exemplo.com > .env.local

# Mac/Linux
echo "NEXT_PUBLIC_API_URL=https://api.exemplo.com" > .env.local
```

### Usar no código
```typescript
const apiUrl = process.env.NEXT_PUBLIC_API_URL;
```

---

## 🖼️ Otimização de Imagens

### Converter para WebP (requer ImageMagick)
```bash
# Instalar ImageMagick primeiro
# Depois:
magick convert imagem.jpg imagem.webp
```

### Redimensionar imagem
```bash
magick convert imagem.jpg -resize 1920x1080 imagem-resized.jpg
```

---

## 📝 Formatação de Código

### Instalar Prettier (opcional)
```bash
npm install -D prettier
```

### Criar .prettierrc
```json
{
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5"
}
```

### Formatar código
```bash
npx prettier --write .
```

---

## 🧪 Testes (Para adicionar no futuro)

### Instalar Jest
```bash
npm install -D jest @testing-library/react @testing-library/jest-dom
```

### Rodar testes
```bash
npm test
```

---

## 📱 Testar Responsividade

### Usando navegador
1. Abra http://localhost:3000
2. Pressione F12 (DevTools)
3. Clique no ícone de dispositivo móvel
4. Teste diferentes tamanhos

### Usando ngrok (acesso externo)
```bash
# Instalar ngrok
npm install -g ngrok

# Expor porta 3000
ngrok http 3000

# Use a URL fornecida para testar em qualquer dispositivo
```

---

## 🆘 Troubleshooting

### Porta 3000 já em uso
```bash
# Windows - Matar processo na porta 3000
netstat -ano | findstr :3000
taskkill /PID [PID_NUMBER] /F

# Mac/Linux
lsof -ti:3000 | xargs kill -9

# Ou use outra porta
npm run dev -- -p 3001
```

### Erro de memória
```bash
# Aumentar limite de memória do Node
set NODE_OPTIONS=--max-old-space-size=4096
npm run dev
```

### Cache do navegador
```
Ctrl + Shift + R (hard refresh)
Ou
Ctrl + Shift + Delete (limpar cache)
```

---

## 📚 Documentação Rápida

### Ver versão do Node
```bash
node --version
```

### Ver versão do npm
```bash
npm --version
```

### Ver versão do Next.js
```bash
npx next --version
```

### Ver todas as dependências
```bash
npm list --depth=0
```

---

## 🎯 Atalhos do Projeto

### Abrir no VS Code
```bash
code .
```

### Abrir no navegador
```bash
# Windows
start http://localhost:3000

# Mac
open http://localhost:3000

# Linux
xdg-open http://localhost:3000
```

---

## 💡 Dicas Úteis

1. **Sempre teste localmente antes de fazer deploy**
   ```bash
   npm run build
   npm start
   ```

2. **Use o modo watch para desenvolvimento**
   ```bash
   npm run dev
   # Salve arquivos e veja mudanças instantâneas
   ```

3. **Verifique erros no console do navegador**
   - Pressione F12
   - Vá na aba Console

4. **Use Git para versionar**
   ```bash
   git add .
   git commit -m "Descrição"
   git push
   ```

5. **Mantenha dependências atualizadas**
   ```bash
   npm outdated
   npm update
   ```

---

## 🔗 Links Úteis

- Next.js Docs: https://nextjs.org/docs
- Tailwind CSS: https://tailwindcss.com/docs
- Framer Motion: https://www.framer.com/motion/
- React Hook Form: https://react-hook-form.com/
- Lucide Icons: https://lucide.dev/

---

**Salve este arquivo para referência rápida!**

