# @erickArita · pixel profile

Retro **pixel-art portfolio** built with **Next.js 16 + React 19 + Tailwind 4**, plus
**live GitHub metric SVG endpoints** you can embed anywhere — including your GitHub
profile README. The portfolio and the README read from the **same data source**
(`lib/github.ts`), so there's a single source of truth.

![Next.js](https://img.shields.io/badge/Next.js-16-000?style=flat-square&logo=nextdotjs)
![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=black)
![Tailwind](https://img.shields.io/badge/Tailwind-4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)

## Features

- 🎮 Retro game-style profile: HUD, clickable **asteroid mini-game** (persistent score),
  parallax stars, animated pixel **coder avatar**, Konami-code easter egg.
- 🌐 **ES ⇄ EN** language toggle with a massive pixel transition.
- 📊 **Live GitHub data** — commits, PRs, repos, stars, streak, top languages and a
  52-week contribution heatmap, fetched via the GitHub GraphQL API (cached 1h).
- 🖼️ **SVG endpoints** for your GitHub profile README:
  - `/api/og/stats.svg` — compact one-row banner (720×80)
  - `/api/og/metrics.svg` — 2×3 metric cards (720×220)
  - `/api/og/languages.svg` — top-language pixel bars (560×260)

## Getting started

```bash
bun install
cp .env.example .env.local   # add your GH_TOKEN (optional — sample data otherwise)
bun run dev                  # http://localhost:3000
```

Without `GH_TOKEN` everything still renders using sample data (`FALLBACK_STATS`).

## Environment variables

| Name          | Description                                                      |
| ------------- | ---------------------------------------------------------------- |
| `GH_TOKEN`    | Fine-grained PAT — read-only `Public Repositories` + `Followers` |
| `GH_USERNAME` | GitHub username to fetch (default `erickArita`)                  |

Create the token at <https://github.com/settings/personal-access-tokens/new>.
On Vercel: **Project → Settings → Environment Variables**.

## Embedding in your GitHub profile

Put the contents of [`github-profile/README.md`](./github-profile/README.md) in your
`erickArita/erickArita` repo and replace `YOUR-DOMAIN.vercel.app` with your deployed
domain. GitHub's image proxy caches the SVGs ~5 min; the data itself refreshes ~hourly.

## Project structure

```
app/
  page.tsx                  # server component → fetches stats → <PixelProfile/>
  layout.tsx                # fonts (Press Start 2P + VT323), metadata
  globals.css               # pixel-art design system
  api/og/
    stats.svg/route.ts
    metrics.svg/route.ts
    languages.svg/route.ts
components/pixel/            # PixelProfile + interactive client components, i18n
lib/
  github.ts                 # GraphQL fetcher + fallback (single source of truth)
  pixel-svg.ts              # tiny SVG drawing primitives
```
