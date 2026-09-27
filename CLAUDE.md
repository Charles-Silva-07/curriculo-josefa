# CLAUDE.md — Currículo online de Josefa da Silva Lima

Currículo online (landing page) da costureira **Josefa da Silva Lima**, publicado no GitHub Pages.

- **Site no ar:** https://charles-silva-07.github.io/curriculo-josefa/
- **Repositório:** https://github.com/Charles-Silva-07/curriculo-josefa (público, branch `main`)
- **Idioma do conteúdo:** português do Brasil (`<html lang="pt-BR">`)
- **Dono do projeto:** Charles (sobrinho da Josefa). Converse com ele em português.

---

## Regra mais importante: não inventar informações

Esta página é um currículo real, apresentado a empresas. **Nunca crie dados que não foram fornecidos.** Isso vale para telefone, e-mail, endereço, salário, escolaridade, cursos, certificados, datas, empresas atuais, atividades específicas ou máquinas que não foram informadas. Se algo não está disponível, **oculte** o campo; não o preencha com exemplos.

Informações fornecidas pelo Charles (a única fonte válida):

| Dado | Valor |
|---|---|
| Nome | Josefa da Silva Lima |
| Profissão | Costureira |
| Naturalidade | Juazeiro do Norte – CE |
| Mora em | Rua Dona Amélia – Jardim Mimas, Embu das Artes – SP |
| Telefone / WhatsApp | (11) 98573-2531 (`5511985732531`) |
| Experiência | Mais de 15 anos, em confecção e ajustes |
| Máquinas | Reta, overloque e galoneira |
| Empresa registrada em carteira | TDB Têxtil S/A, cargo Costureira (sem datas) |
| Motivo da mudança | Distância do atual trabalho |
| Objetivo | Oportunidade mais próxima de casa |

Regras de privacidade e tom:
- **Não publicar o número da casa nem o CEP** (e não escrever esses dados em nenhum arquivo do repositório, que é público). O Charles pediu explicitamente para omitir o número; o CEP também foi deixado de fora.
- Não use linguagem negativa sobre o empregador atual.
- A imagem da carteira de trabalho deve ser exibida **original, sem edição** (nada de recortar dados, retocar ou adicionar texto).
- E-mail: ainda não informado, então fica vazio e oculto.

---

## Stack (o mesmo tipo de stack que o Lovable usa)

### Linguagens
- **TypeScript** (`.ts` / `.tsx`), com `strict: true`
- **JSX/TSX** (React)
- **CSS** com diretivas do Tailwind (`@tailwind`, `@apply`, `@layer`)
- **HTML** (`index.html`, que é a entrada do Vite)
- **YAML** (workflow do GitHub Actions)

### Dependências de runtime (`dependencies`)
| Pacote | Versão instalada | Para que serve |
|---|---|---|
| `react` | 18.3.1 | Biblioteca de UI |
| `react-dom` | 18.3.1 | Renderização no navegador (`createRoot`) |
| `framer-motion` | 13.4.4 | Animações: entrada das seções (`whileInView`), parallax da foto (`useScroll`/`useTransform`), menu mobile (`AnimatePresence`), `layoutId` no menu, `MotionConfig reducedMotion="user"` |
| `lucide-react` | 1.48.0 | Ícones (Scissors, Spool, Ruler, Factory, Waves, Shirt, Cog, Award, Gem, Layers, Briefcase, Target, MapPin, Phone, Mail, Download, Printer, Menu, X, ArrowRight/Down/Up, Quote, BadgeCheck, Expand, LoaderCircle) |
| `html2pdf.js` | 0.14.0 | Gera o PDF do currículo no navegador. Usa internamente **html2canvas 1.4.1** e **jsPDF 4.2.1**. É carregado sob demanda (`import()` dinâmico), num chunk separado |

### Dependências de desenvolvimento (`devDependencies`)
| Pacote | Versão | Para que serve |
|---|---|---|
| `vite` | 8.3.1 | Servidor de dev e build (bundler Rolldown) |
| `@vitejs/plugin-react` | 6.1.1 | Suporte a React/JSX no Vite |
| `typescript` | 7.0.2 | Checagem de tipos (`tsc --noEmit` roda antes do build) |
| `tailwindcss` | 3.4.19 | CSS utilitário. **Mantenha na v3**: a v4 usa cores `oklch`, que o html2canvas não entende, e isso quebra o PDF |
| `postcss` | 8.5.28 | Pipeline de CSS |
| `autoprefixer` | 10.6.1 | Prefixos de navegador |
| `@types/react`, `@types/react-dom` | 18.3.x | Tipos do React 18 |

### Fontes (Google Fonts, carregadas no `index.html`)
- **Cormorant Garamond** (500, 600, 700 e itálico 500): títulos, com a classe `font-serif`
- **Manrope** (400–700): textos e botões, com a classe `font-sans`

### Ferramentas de ambiente
- **Node.js** 24 no computador local; o CI usa **Node 22**
- **npm** (lockfile `package-lock.json`, instalação com `npm ci` no CI)
- **Git**, com o remoto `origin` apontando para o GitHub
- **Hospedagem:** GitHub Pages via **GitHub Actions** (Settings → Pages → Source: *GitHub Actions*)
- Não há GitHub CLI (`gh`) instalado. Quando foi preciso usar a API, a autenticação veio da credencial salva no Git Credential Manager (`git credential fill`)

---

## Comandos

```bash
npm install        # instala dependências
npm run dev        # servidor local (http://localhost:5173)
npm run build      # tsc --noEmit && vite build  → gera /dist
npm run preview    # serve o /dist em http://localhost:4173
```

**Publicar:** basta fazer `git push` na `main`. O workflow `.github/workflows/deploy.yml` (nome: "Publicar no GitHub Pages") roda `npm ci`, depois `npm run build`, e em seguida `upload-pages-artifact` e `deploy-pages`. O resultado aparece na aba **Actions**, em cerca de 1 a 2 minutos.

---

## Estrutura de arquivos

```
├── .github/workflows/deploy.yml   # CI/CD para o GitHub Pages
├── public/
│   ├── foto.jpeg                  # foto profissional (hero + PDF)
│   └── carteira.jpeg              # (AINDA NÃO EXISTE) carteira de trabalho
├── src/
│   ├── data.ts                    # ⭐ TODO o conteúdo: textos, contato, endereço, skills
│   ├── main.tsx                   # entrada React (StrictMode + createRoot)
│   ├── App.tsx                    # monta as seções + ResumeSheet + WhatsAppFloat
│   ├── index.css                  # Tailwind + componentes (.btn, .card, .stitch, .fabric) + CSS de impressão
│   └── components/
│       ├── ui.tsx                 # Reveal (animação), SectionHeading, ThreadLine (SVG), WhatsAppIcon (SVG)
│       ├── Navbar.tsx             # menu fixo, seção ativa (IntersectionObserver), menu hambúrguer
│       ├── Hero.tsx               # nome, selo giratório "15+", foto com profundidade/parallax, telefone + WhatsApp
│       ├── About.tsx              # "Sobre mim" + 3 indicadores
│       ├── Experience.tsx         # timeline + card "Experiência comprovada" (carteira)
│       ├── Skills.tsx             # Skills (6 cards) e Differentials (4 itens)
│       ├── Closing.tsx            # Objective, Availability, Contact, Footer, ResumeButtons
│       ├── ResumeSheet.tsx        # folha A4 do PDF/impressão
│       ├── useResume.ts           # hook: download do PDF (html2pdf) e impressão (window.print)
│       └── WhatsAppFloat.tsx      # botão flutuante do WhatsApp
├── index.html                     # SEO (title, description, Open Graph), fontes, favicon SVG inline
├── vite.config.ts                 # base: "./" (funciona em qualquer subcaminho do Pages)
├── tailwind.config.js             # paleta, fontes, sombras, container
├── postcss.config.js
├── tsconfig.json
└── README.md                      # instruções curtas para o Charles
```

---

## Como editar o conteúdo

**Todo o conteúdo fica em `src/data.ts`.** Os componentes só leem desse arquivo.

- `contact.whatsapp`: só dígitos, com 55 e DDD (ex.: `"5511985732531"`). Se ficar vazio, somem o botão flutuante, o botão verde do topo e o card, e "Entrar em contato" volta a rolar até `#contato`.
- `contact.phone`: texto formatado (`"(11) 98573-2531"`). O link `tel:` é montado como `tel:+55` seguido dos dígitos.
- `contact.email`: vazio, então fica oculto.
- `address` / `addressFull`: endereço sem número da casa.
- `images.workCard`: `carteira.jpeg`. Se o arquivo não existir, o `onError` da `<img>` esconde o card e a timeline passa a ocupar a largura toda. Hoje o console mostra um 404 dessa imagem; isso é esperado até alguém adicionar o arquivo.
- `asset(file)`: monta a URL com `import.meta.env.BASE_URL`. Use sempre essa função para imagens de `/public`.

---

## Design

### Paleta (definida em `tailwind.config.js`)
| Token | Hex | Uso |
|---|---|---|
| `cream` | `#FFFDF9` | Fundo principal |
| `white` | `#FFFFFF` | Cards |
| `ink` | `#272727` | Texto principal; fundo da seção Objetivo e do rodapé |
| `muted` | `#666666` | Texto secundário |
| `rose` | `#B86F6F` | Rosa queimado/terracota (detalhes) |
| `rose-deep` | `#9C5A5A` | Botões (mais escuro, para dar contraste com texto branco) |
| `rose-soft` | `#F5E9E6` | Fundos de ícones |
| `beige` / `beige-light` | `#EAD8C8` / `#F6EEE6` | Bordas, seções alternadas |
| `gold` / `gold-deep` | `#C9A66B` / `#A8864C` | Dourado discreto, eyebrows, pespontos |
| WhatsApp | `#25D366` | Só nos botões do WhatsApp |

### Classes próprias (`src/index.css`)
- `.btn`, `.btn-primary`, `.btn-outline`: botões em pílula, caixa alta, com hover que levanta o botão
- `.card`: `rounded-3xl`, borda bege e `shadow-soft`
- `.eyebrow`: rótulo pequeno dourado acima dos títulos
- `.stitch` / `.stitch-v`: linha tracejada horizontal/vertical que imita **pesponto de costura** (precisa de `display:block` ou ser item flex)
- `.fabric`: textura de pontinhos que imita **tecido**
- `.resume-offscreen`: tira a folha A4 da tela (`position:fixed; left:-10000px`)

### Detalhes de identidade visual
- Linhas tracejadas (pesponto), `ThreadLine` (SVG de linha de costura ondulada), textura de tecido
- Selo circular giratório "MAIS DE 15 ANOS • DE EXPERIÊNCIA" (SVG `textPath`)
- Foto com camadas de profundidade: um bloco bege deslocado e uma moldura dourada tracejada, com parallax no scroll
- Tom profissional e sóbrio: **nada infantil nem feminino demais**

### Seções (ids usados no menu)
`#inicio` (Hero), `#sobre`, `#experiencia`, `#habilidades`, Diferenciais (sem id), `#objetivo`, Disponibilidade (sem id), `#contato`, Rodapé.

---

## PDF e impressão (pontos de atenção)

- **`ResumeSheet.tsx`** é uma folha de **794 × 1122 px** (A4 a 96 dpi) com **estilos inline em hex**. Ela fica fora da tela no site e é a única coisa visível no `@media print` (a `.site` fica com `display:none`; `@page { size: A4; margin: 0 }`).
- **Baixar PDF** (`useResume.download`): espera `document.fonts.ready`, carrega o `html2pdf.js` com `import()` dinâmico e captura `#resume-sheet` com `scale: 2`, em A4 retrato, `margin: 0`. O nome do arquivo é `Curriculo - Josefa da Silva Lima.pdf`. Se der erro, cai no `window.print()`.
- **Imprimir** (`useResume.print`): chama `window.print()`. No diálogo, "Salvar como PDF" gera a versão com melhor fidelidade.
- Limitações do **html2canvas** a respeitar:
  - Não suporta `object-fit`, por isso a foto no PDF usa `background-image` + `background-size: cover`.
  - Não entende cores `oklch`, por isso o projeto fica no Tailwind v3 e a folha usa hex.
  - Desloca um pouco o texto verticalmente: os marcadores (bolinhas) ficam levemente desalinhados só no PDF baixado. Na impressão fica perfeito.
  - O html2pdf **clona** o elemento. O posicionamento fora da tela precisa ficar no wrapper (`.resume-offscreen`), nunca no próprio `#resume-sheet`.
- **Tudo precisa caber em 1 página.** Depois de mudar o conteúdo, gere o PDF e confira que ele continua com 1 página.

---

## Convenções

- Os componentes usam export nomeado; só o `App` usa `export default`.
- As animações usam `Reveal` (fade + subida, `once: true`). A curva de easing padrão é `[0.22, 1, 0.36, 1]`.
- **Framer Motion sobrescreve `transform`:** em elementos com `style={{ y }}`, não use as classes `translate-*` do Tailwind; use offsets (`top/left/right/bottom`).
- Responsividade: mobile first. O menu hambúrguer aparece abaixo de `lg`. No celular a foto vem antes do texto. Evite quebras feias com `whitespace-nowrap` (ex.: "Embu das Artes – SP").
- Mantenha a acessibilidade: `aria-label` nos botões de ícone, `alt` descritivo, `:focus-visible` e `prefers-reduced-motion` (via `MotionConfig`).
- Mensagens de commit em português, terminando com `Co-Authored-By`.

---

## Como verificar mudanças

1. Rode `npm run build`. Ele precisa passar sem erros de TypeScript.
2. Rode `npm run preview` e confira em 1440px e em 375px: sem rolagem horizontal e sem texto cortado.
3. Clique em "Baixar currículo em PDF" e confira que gera **1 página A4**.
4. Depois do `git push`, acompanhe o job em **Actions** até ficar verde e abra o site no ar.

Durante o desenvolvimento, a verificação foi feita com **playwright-core** controlando o Chrome instalado (fora do projeto, numa pasta temporária). Os screenshots eram tirados em desktop e mobile, e o PDF era renderizado com `pypdfium2` + Pillow para inspeção.

---

## Pendências

- [ ] Adicionar `public/carteira.jpeg` (foto da carteira de trabalho) para exibir a seção "Experiência comprovada".
- [ ] E-mail (opcional), se ela tiver.
