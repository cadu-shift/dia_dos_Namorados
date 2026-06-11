# Quickstart: Site Presente dos Namorados

## Prerequisites

- Node.js installed.
- Local media available in `assets/`, including `Foi assim - Sotam.mp3` and the photos to publish.
- During implementation, copy or migrate runtime media to `public/assets/` without changing the MP3 track.

## Setup

```bash
npm install
```

## Development Run

```bash
npm run dev
```

Expected:
- Empty route redirects to `#/home`.
- `home` screen is lazy-loaded.
- Unlock screen shows "Eduardo decidiu criar algo especial para você".
- Button text is "ver presente".

## Automated Validation

```bash
npm test
npm run build
```

Expected:
- Date utility tests pass for `2023-11-13`, including month-boundary cases.
- Component tests verify unlock, play/pause state, timer display, carousel controls, and route fallback.
- Build succeeds with Vite base `/dia_dos_Namorados/`.

## Manual Mobile Validation

Use browser device emulation at 360px, 390px, 414px, and 430px widths.

Expected:
- No horizontal scrollbar appears.
- Images use cover crop without distortion.
- Buttons and carousel controls are reachable by keyboard and show visible focus.
- Cards render in order: music player, Sobre o casal, Mensagem especial, Nossos Momentos.
- Mensagem especial displays Lorem Ipsum until final text is supplied.

## Audio Validation

On a real mobile device when possible:

1. Open the site.
2. Tap "ver presente".
3. Verify the MP3 starts only after the tap.
4. Verify play/pause is the only player control.
5. Verify the track loops.

Expected:
- If playback is blocked or fails, the page remains usable and shows a textual error.

## Production Validation

After GitHub Pages deployment:

1. Open the published URL.
2. Refresh the page.
3. Inspect the browser console.

Expected:
- No GitHub Pages 404 page appears.
- No 404 appears for JS, CSS, font, images, videos, or `Foi assim - Sotam.mp3`.
- The URL works with the `/dia_dos_Namorados/` base path.
