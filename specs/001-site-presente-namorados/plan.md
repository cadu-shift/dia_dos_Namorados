# Implementation Plan: Site Presente dos Namorados

**Branch**: `001-site-presente-namorados` | **Date**: 2026-06-11 | **Spec**: [spec.md](./spec.md)

**Input**: Feature specification from `/specs/001-site-presente-namorados/spec.md`

## Summary

Build a mobile-first romantic gift SPA with React + Vite, Tailwind CSS, and
Framer Motion. The app opens with an unlock screen titled "Eduardo decidiu criar
algo especial para você" and a "ver presente" button. After interaction, it
loads the `home` route lazily and shows the gift cards: music player, couple
timer, special message, and moments carousel/gallery. The site is static,
uses local assets, avoids extra carousel/router libraries, and deploys to
GitHub Pages with Vite base `/dia_dos_Namorados/`.

## Technical Context

**Language/Version**: TypeScript + React + Vite

**Primary Dependencies**: React, Vite, Tailwind CSS, Framer Motion, Vitest,
React Testing Library

**Storage**: Local constants/modules for text, dates, and media metadata;
runtime media in `public/assets`; no database or remote content source

**Testing**: Vitest + React Testing Library in headless mode

**Target Platform**: Mobile-first browsers at 360px-430px, desktop browsers for
keyboard validation, GitHub Pages static hosting

**Project Type**: React + Vite static SPA

**Performance Goals**: Unlock screen visible within 2 seconds on a typical 4G
mobile connection; no horizontal scroll at 360px-430px; no production 404s for
media, CSS, JS, or font resources

**Constraints**: Use `base: '/dia_dos_Namorados/'`; route empty state to `home`;
lazy-load the `home` screen; use no history router; use no carousel library; no
new background assets; use `object-fit: cover`; rounded images; public media has
no access restriction; no sensitive data

**Scale/Scope**: One SPA route (`home`), one unlock screen, four primary cards,
one manual carousel, one complementary moments grid/masonry, one local audio
file, all supplied photos in `/assets` migrated or copied to `public/assets`
during implementation

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

- **React/Vite structure**: PASS. Files are planned under `src/features/gift/`
  with `components`, `data`, `hooks`, and `utils`, plus app shell files.
- **Component boundaries**: PASS. Presentational cards receive props/callbacks;
  `HomePage` and hooks orchestrate unlock, audio, timer, and carousel state.
- **State/data boundaries**: PASS. Relationship date, message placeholder,
  music metadata, and media items live in local data modules; date math lives in
  utils; browser audio lives in a hook.
- **State/reactivity**: PASS. `useState` handles unlock, audio status, and
  carousel index; pure date calculation handles derived relationship duration;
  `useEffect` is limited to audio/timer/browser events.
- **Tests/CI**: PASS. Plan includes tests for date utility, hash routing fallback,
  audio hook behavior, card rendering, carousel navigation, and build.
- **Accessibility/UX**: PASS. Cards and controls require accessible labels,
  visible focus, keyboard activation, textual loading/error states, and mobile
  layout checks.
- **Assets/global styles**: PASS. Montserrat and global gradient are centralized;
  media is served from `public/assets`; no generated background assets.
- **Static deploy**: PASS. Vite base path is fixed to `/dia_dos_Namorados/`;
  route handling is hash-based/manual and safe on refresh; deploy uses GitHub
  Actions to avoid a deploy library.
- **Documentation scope**: PASS. This plan records behavior-impacting technical
  decisions and feeds downstream tasks.

## Project Structure

### Documentation (this feature)

```text
specs/001-site-presente-namorados/
├── plan.md
├── research.md
├── data-model.md
├── quickstart.md
├── contracts/
│   └── ui-contract.md
└── tasks.md
```

### Source Code (repository root)

```text
index.html
vite.config.ts
package.json
tsconfig.json
tailwind.config.js
postcss.config.js
.github/
└── workflows/
    └── pages.yml

src/
├── main.tsx
├── styles.css
├── app/
│   ├── App.tsx
│   └── App.test.tsx
└── features/
    └── gift/
        ├── GiftHome.tsx
        ├── GiftHome.test.tsx
        ├── components/
        │   ├── UnlockScreen.tsx
        │   ├── MusicPlayerCard.tsx
        │   ├── CoupleCard.tsx
        │   ├── MessageCard.tsx
        │   ├── MomentsCard.tsx
        │   └── GiftCard.tsx
        ├── data/
        │   └── giftContent.ts
        ├── hooks/
        │   ├── useAudioPlayer.ts
        │   └── useRelationshipTimer.ts
        └── utils/
            ├── relationshipDuration.ts
            └── relationshipDuration.test.ts

public/
└── assets/
    ├── Foi assim - Sotam.mp3
    └── photos and short videos supplied by the project owner
```

**Structure Decision**: Use a single `gift` feature because all cards share the
same local content and presentation surface. Keep routing in `src/app/App.tsx`
with manual hash handling so the empty route redirects to `#/home` and the home
screen is loaded via `React.lazy`.

## Complexity Tracking

> **Fill ONLY if Constitution Check has violations that must be justified**

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
| None | N/A | N/A |

## Phase 0 Research Summary

See [research.md](./research.md). All implementation choices are resolved:
manual hash routing, Tailwind for styling, Framer Motion limited to requested
card transitions, custom carousel, GitHub Actions deploy, and `public/assets`
for media.

## Phase 1 Design Summary

See [data-model.md](./data-model.md) for local data shapes and validation rules.
See [contracts/ui-contract.md](./contracts/ui-contract.md) for UI behavior
contracts. See [quickstart.md](./quickstart.md) for validation commands and
manual acceptance checks.

## Post-Design Constitution Check

- **React/Vite structure**: PASS. Design artifacts use the `src/features/gift`
  structure.
- **Component boundaries**: PASS. UI contract separates cards from hooks and
  utilities.
- **State/data boundaries**: PASS. Data model defines local config and derived
  duration separately.
- **State/reactivity**: PASS. Timer/audio/carousel state is explicit.
- **Tests/CI**: PASS. Quickstart includes headless test and build validation.
- **Accessibility/UX**: PASS. UI contract includes labels, focus, keyboard, and
  mobile no-horizontal-scroll requirements.
- **Assets/global styles**: PASS. Media path strategy and global typography are
  defined.
- **Static deploy**: PASS. Base path, refresh behavior, and asset validation are
  part of quickstart.
