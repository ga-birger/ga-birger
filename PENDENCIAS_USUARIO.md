# 📋 PENDÊNCIAS PARA O USUÁRIO

## ✅ O QUE JÁ FOI FEITO

1. ✅ Fita do topo atualizada com texto genérico "Confira o próximo evento"
2. ✅ Seção Consultório criada e adicionada na Home e página /sobre
3. ✅ Seção Monografias criada e adicionada na Home
4. ✅ Seção Imprensa atualizada com ConJur (2 reportagens em grid)
5. ✅ Seção Podcast reformulada com navegação de episódios e botões de plataformas
6. ✅ Página /podcast atualizada com botões de plataformas
7. ✅ Home reorganizada com nova ordem de seções
8. ✅ Pastas criadas: `public/images/consultorio/` e `public/images/press/`
9. ✅ Imagens movidas de `public/press/` para `public/images/press/`

---

## 🔴 PENDÊNCIAS CRÍTICAS

### 1. IMAGENS DO CONSULTÓRIO

**Faltam 4 imagens:**
- `public/images/consultorio/consultorio-3.jpg`
- `public/images/consultorio/consultorio-4.jpg`
- `public/images/consultorio/consultorio-5.jpg`
- `public/images/consultorio/consultorio-6.jpg`

**Já existem:**
- ✅ `consultorio-1.jpg`
- ✅ `consultorio-2.jpg`

**Onde adicionar:**
- Página `/sobre` - seção Consultório (grid 2x3)
- Componente `ConsultorioSection` na Home (grid 2x3)

**Formato recomendado:**
- Proporção: 3:4 (vertical)
- Resolução: mínimo 800x1066px
- Formato: JPG otimizado

---

### 2. LINKS DAS PLATAFORMAS DE PODCAST

**Substituir nos arquivos:**

#### `src/components/sections/PodcastSection.tsx` (linha ~159 e ~167):
```tsx
// Trocar:
href="LINK_AMAZON_MUSIC"
// Por:
href="https://music.amazon.com.br/podcasts/SEU_ID_AQUI"

// Trocar:
href="LINK_APPLE_PODCASTS"
// Por:
href="https://podcasts.apple.com/br/podcast/SEU_ID_AQUI"
```

#### `src/app/podcast/page.tsx` (linha ~44 e ~52):
```tsx
// Mesmas substituições acima
```

**Como obter os links:**
1. Amazon Music: Acesse https://music.amazon.com.br e procure por "com.verso"
2. Apple Podcasts: Acesse https://podcasts.apple.com e procure por "com.verso"

---

### 3. IDS DOS EPISÓDIOS DO SPOTIFY (OPCIONAL)

**Para o carrossel de episódios na Home:**

Arquivo: `src/components/sections/PodcastSection.tsx` (linha ~42)

```tsx
// Atualmente só tem 1 episódio:
const episodios = [
  '2Kw8m6wBaI3isK9TDvRWOR',
]

// Adicione mais IDs para ativar o carrossel:
const episodios = [
  '2Kw8m6wBaI3isK9TDvRWOR',
  'OUTRO_ID_EPISODIO_1',
  'OUTRO_ID_EPISODIO_2',
  'OUTRO_ID_EPISODIO_3',
]
```

**Como obter os IDs:**
1. Acesse o episódio no Spotify Web
2. Clique em "Compartilhar" > "Copiar link do episódio"
3. O link será: `https://open.spotify.com/episode/ID_DO_EPISODIO`
4. Copie apenas o `ID_DO_EPISODIO`

**Exemplo:**
- Link: `https://open.spotify.com/episode/2Kw8m6wBaI3isK9TDvRWOR`
- ID: `2Kw8m6wBaI3isK9TDvRWOR`

---

## 📝 ORDEM DE PRIORIDADE

1. **CRÍTICO:** Adicionar as 4 imagens faltantes do consultório
2. **IMPORTANTE:** Atualizar links do Amazon Music e Apple Podcasts
3. **OPCIONAL:** Adicionar IDs de mais episódios para o carrossel

---

## 🎯 PRÓXIMOS PASSOS APÓS RESOLVER AS PENDÊNCIAS

1. Adicionar as imagens do consultório
2. Atualizar os links das plataformas
3. (Opcional) Adicionar IDs dos episódios
4. Fazer commit:
   ```bash
   git add .
   git commit -m "feat: adicionar imagens do consultório e links das plataformas"
   git push origin main
   ```

---

## 📊 RESUMO DAS ALTERAÇÕES APLICADAS

### Commit: `61c9509`

**Estatísticas:**
- ✅ 14 arquivos alterados
- ✅ 564 linhas adicionadas
- ✅ 228 linhas removidas
- ✅ 3 novos componentes criados
- ✅ 2 imagens do consultório adicionadas
- ✅ 4 imagens da imprensa movidas/adicionadas

**Novos componentes:**
- `ConsultorioSection.tsx` - Seção do consultório com galeria de fotos
- `MonografiasSection.tsx` - Seção de monografias na Home
- `PodcastSection.tsx` - Seção de podcast com carrossel e plataformas

**Componentes atualizados:**
- `PressSection.tsx` - Agora com 2 reportagens (CLAUDIA + ConJur)
- `Header.tsx` - Fita com texto genérico
- `page.tsx` (Home) - Nova ordem de seções
- `podcast/page.tsx` - Botões de plataformas
- `sobre/page.tsx` - Seção de consultório com galeria

---

## 🚀 DEPLOY VERCEL

**Status:** ✅ Deploy automático iniciado

**Mudanças visíveis em ~2 minutos:**
- ✅ Fita do topo com texto genérico
- ✅ Nova seção Consultório na Home e /sobre
- ✅ Nova seção Monografias na Home
- ✅ Imprensa com 2 reportagens (CLAUDIA + ConJur)
- ✅ Podcast com botões de plataformas
- ⚠️ Consultório com apenas 2 de 6 imagens (até adicionar as faltantes)

---

## ⚠️ AVISOS IMPORTANTES

1. **Imagens do consultório:** O site vai mostrar erro 404 para as 4 imagens faltantes até você adicioná-las.
2. **Links das plataformas:** Os botões "Amazon Music" e "Apple Podcasts" estão com links placeholder.
3. **Carrossel de episódios:** Só vai funcionar quando adicionar mais IDs de episódios (atualmente só tem 1).

---

## 📞 SUPORTE

Se tiver dúvidas sobre como:
- Obter os IDs dos episódios do Spotify
- Encontrar os links das plataformas
- Otimizar as imagens do consultório

É só me avisar! 🚀

