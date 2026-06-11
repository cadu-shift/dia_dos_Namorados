# Site Presente dos Namorados

Romantic gift SPA built with React + Vite + TypeScript.

## Quickstart

```bash
npm install
npm run dev
```

## Production Build

```bash
npm test
npm run build
```

Output goes to `dist/` with base path `/dia_dos_Namorados/` for GitHub Pages.

## Deploy

Push to `main` — the GitHub Actions workflow (`.github/workflows/pages.yml`) runs tests, builds, and deploys to GitHub Pages automatically.

## Expected Asset Paths

All runtime assets (MP3, cover image, couple photo, moments media) use the `/dia_dos_Namorados/assets/` base path.

## Tech Stack

- React 18 + Vite 5 + TypeScript
- Tailwind CSS 3
- Framer Motion 11
- Vitest + React Testing Library
- GitHub Pages deployment
