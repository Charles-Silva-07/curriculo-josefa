# Currículo online — Josefa da Silva Lima

Feito com Vite + React + TypeScript + Tailwind CSS + Framer Motion + Lucide (o mesmo stack do Lovable).

## Editar conteúdo
Tudo fica em `src/data.ts` (textos, habilidades e **contato**).
Preencha `whatsapp`, `phone` ou `email` quando tiver os dados. Campos vazios não aparecem no site nem no PDF.

## Imagens
- `public/foto.jpeg`: foto principal
- `public/carteira.jpeg`: carteira de trabalho (a seção "Experiência comprovada" só aparece se esse arquivo existir)

## Rodar no computador
```
npm install
npm run dev
```

## Publicar no GitHub Pages
1. Crie um repositório no GitHub e envie esta pasta (branch `main`).
2. No repositório: **Settings → Pages → Source: GitHub Actions**.
3. Cada `git push` publica automaticamente (veja a aba **Actions**).
O site fica em `https://SEU-USUARIO.github.io/NOME-DO-REPOSITORIO/`.
