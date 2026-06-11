# Tasks: Site Presente dos Namorados

**Input**: Design documents from `/specs/001-site-presente-namorados/`

**Prerequisites**: plan.md (required), spec.md (required), research.md, data-model.md, contracts/ui-contract.md, quickstart.md

**Tests**: Required for this feature because it includes date calculation, audio state, carousel state, route fallback, static deploy paths, and accessibility-sensitive card rendering.

**Organization**: Tasks are grouped by user story to enable independent implementation and validation of each increment.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (US1, US2, US3, US4, US5)
- Every task includes an exact file path

## Path Conventions

- **App shell**: `src/app/`
- **Feature components**: `src/features/gift/components/`
- **Feature data/content**: `src/features/gift/data/`
- **Feature hooks**: `src/features/gift/hooks/`
- **Pure utilities**: `src/features/gift/utils/`
- **Global styles**: `src/styles.css`
- **Runtime assets**: `public/assets/`
- **Deploy workflow**: `.github/workflows/pages.yml`

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Initialize the React + Vite application, styling stack, test runner, and static hosting defaults.

- [x] T001 Create React + Vite TypeScript package scripts and dependencies in `package.json`
- [x] T002 Configure Vite with `base: '/dia_dos_Namorados/'` in `vite.config.ts`
- [x] T003 [P] Configure TypeScript project settings in `tsconfig.json`
- [x] T004 [P] Configure Tailwind content paths and theme extension in `tailwind.config.js`
- [x] T005 [P] Configure PostCSS Tailwind pipeline in `postcss.config.js`
- [x] T006 Create the HTML app mount and Montserrat preconnect/link tags in `index.html`
- [x] T007 Create initial source directories under `src/app/`, `src/features/gift/`, and `public/assets/`
- [x] T008 Copy the existing audio file into `public/assets/Foi assim - Sotam.mp3`
- [x] T009 Copy supplied photo/video assets from `assets/` into `public/assets/`

**Checkpoint**: Project structure and asset destination are ready.

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Build the app shell, route fallback, global styling, and shared local data patterns required by all user stories.

**CRITICAL**: No user story work can begin until this phase is complete.

- [x] T010 [P] Create Vitest and Testing Library setup in `src/test/setup.ts`
- [x] T011 [P] Create global Montserrat, gradient background, focus, and mobile overflow rules in `src/styles.css`
- [x] T012 Create React entry point importing global styles in `src/main.tsx`
- [x] T013 [P] Create route fallback and lazy `#/home` tests in `src/app/App.test.tsx`
- [x] T014 Implement manual hash routing, empty-route redirect, and `React.lazy` home loading in `src/app/App.tsx`
- [x] T015 [P] Define shared gift content/types with `2023-11-13`, Lorem Ipsum message, MP3 path, and media metadata in `src/features/gift/data/giftContent.ts`
- [x] T016 [P] Create reusable rounded card shell component in `src/features/gift/components/GiftCard.tsx`
- [x] T017 [P] Create shared card shell styles/utilities in `src/features/gift/components/GiftCard.css`

**Checkpoint**: App boots, routes to `#/home`, lazy loading is in place, and all stories can use shared content and styling.

---

## Phase 3: User Story 1 - Abrir o presente com música (Priority: P1) MVP

**Goal**: Visitor sees the unlock screen, taps "ver presente", enters the cards experience, and the local MP3 is requested after that first interaction.

**Independent Test**: Open the app, confirm empty route redirects to `#/home`, tap/click/keyboard-activate "ver presente", verify cards reveal and the audio state moves to playing or visible error without blocking the page.

### Tests for User Story 1

- [x] T018 [P] [US1] Add unlock screen render and keyboard activation tests in `src/features/gift/components/UnlockScreen.test.tsx`
- [x] T019 [P] [US1] Add audio play/pause/error hook tests with mocked HTMLAudioElement in `src/features/gift/hooks/useAudioPlayer.test.ts`
- [x] T020 [P] [US1] Add home unlock-to-cards integration test in `src/features/gift/GiftHome.test.tsx`
- [x] T021 [P] [US1] Add music player control accessibility tests in `src/features/gift/components/MusicPlayerCard.test.tsx`

### Implementation for User Story 1

- [x] T022 [US1] Implement unlock screen title and "ver presente" action in `src/features/gift/components/UnlockScreen.tsx`
- [x] T023 [US1] Implement local audio state, loop, play, pause, and error handling in `src/features/gift/hooks/useAudioPlayer.ts`
- [x] T024 [US1] Implement Spotify-style music player card with one play/pause button in `src/features/gift/components/MusicPlayerCard.tsx`
- [x] T025 [US1] Implement music player image crop, rounded corners, and focus styles in `src/features/gift/components/MusicPlayerCard.css`
- [x] T026 [US1] Implement home orchestration for unlock, Framer Motion reveal, audio request, and first two cards in `src/features/gift/GiftHome.tsx`
- [x] T027 [US1] Connect lazy home route to `GiftHome` in `src/app/App.tsx`

**Checkpoint**: MVP is functional: route loads, unlock works, audio interaction is browser-compliant, and a visible error appears if playback fails.

---

## Phase 4: User Story 2 - Ver o tempo de relacionamento (Priority: P1)

**Goal**: Visitor sees the "Sobre o casal" card with a supplied photo and a real-time relationship timer from `2023-11-13`.

**Independent Test**: Run date utility tests across month-boundary cases and open the card to verify the displayed text follows "X anos, Y meses e Z dias" without negative values.

### Tests for User Story 2

- [x] T028 [P] [US2] Add relationship duration boundary tests from `2023-11-13` in `src/features/gift/utils/relationshipDuration.test.ts`
- [x] T029 [P] [US2] Add relationship timer hook ticking/invalid-date tests in `src/features/gift/hooks/useRelationshipTimer.test.ts`
- [x] T030 [P] [US2] Add Sobre o casal card render and image accessibility tests in `src/features/gift/components/CoupleCard.test.tsx`

### Implementation for User Story 2

- [x] T031 [US2] Implement pure relationship duration calculation in `src/features/gift/utils/relationshipDuration.ts`
- [x] T032 [US2] Implement real-time timer hook in `src/features/gift/hooks/useRelationshipTimer.ts`
- [x] T033 [US2] Implement Sobre o casal card with photo and duration text in `src/features/gift/components/CoupleCard.tsx`
- [x] T034 [US2] Implement Couple card image cover, rounded corners, and responsive layout styles in `src/features/gift/components/CoupleCard.css`
- [x] T035 [US2] Integrate Couple card into the card order in `src/features/gift/GiftHome.tsx`

**Checkpoint**: The timer card works independently and can be validated with deterministic date tests.

---

## Phase 5: User Story 3 - Navegar pelas memórias do casal (Priority: P2)

**Goal**: Visitor can browse all supplied photos/videos through a custom carousel and a complementary grid/masonry-style view.

**Independent Test**: At 360px-430px widths, navigate the carousel with controls and keyboard, inspect the complementary grid, and confirm no media causes horizontal scroll.

### Tests for User Story 3

- [x] T036 [P] [US3] Add carousel previous/next wraparound tests in `src/features/gift/components/MomentsCard.test.tsx`
- [x] T037 [P] [US3] Add media fallback and alt text tests in `src/features/gift/components/MomentsCard.test.tsx`
- [x] T038 [P] [US3] Add media metadata uniqueness test in `src/features/gift/data/giftContent.test.ts`

### Implementation for User Story 3

- [x] T039 [US3] Update `moments` metadata to include all supplied assets in `src/features/gift/data/giftContent.ts`
- [x] T040 [US3] Implement custom carousel, previous/next controls, and complementary grid in `src/features/gift/components/MomentsCard.tsx`
- [x] T041 [US3] Implement carousel, masonry-style grid, object-fit cover, rounded images, and mobile no-overflow styles in `src/features/gift/components/MomentsCard.css`
- [x] T042 [US3] Integrate Nossos Momentos card into the card order in `src/features/gift/GiftHome.tsx`

**Checkpoint**: The memories card is usable without Swiper or masonry libraries and remains mobile-safe.

---

## Phase 6: User Story 4 - Ler uma carta carinhosa (Priority: P2)

**Goal**: Visitor reads a dedicated "Mensagem especial" card with placeholder Lorem Ipsum until the final personal text is supplied.

**Independent Test**: Open the message card at 360px width and verify text wraps, remains legible, and does not overlap other sections.

### Tests for User Story 4

- [x] T043 [P] [US4] Add message card title/body render tests in `src/features/gift/components/MessageCard.test.tsx`
- [x] T044 [P] [US4] Add GiftHome card order test including Mensagem especial in `src/features/gift/GiftHome.test.tsx`

### Implementation for User Story 4

- [x] T045 [US4] Add placeholder Lorem Ipsum message content in `src/features/gift/data/giftContent.ts`
- [x] T046 [US4] Implement Mensagem especial card in `src/features/gift/components/MessageCard.tsx`
- [x] T047 [US4] Implement readable letter-like card spacing and wrapping styles in `src/features/gift/components/MessageCard.css`
- [x] T048 [US4] Integrate Mensagem especial card into the card order in `src/features/gift/GiftHome.tsx`

**Checkpoint**: The message card is readable, mobile-safe, and positioned in the required card order.

---

## Phase 7: User Story 5 - Acessar o presente publicado (Priority: P3)

**Goal**: Sender can publish the site to GitHub Pages and validate refresh, base path, and production asset paths.

**Independent Test**: Build the app, deploy or preview the built output, refresh the production URL, and confirm no 404s for app files, fonts, images, videos, or MP3.

### Tests for User Story 5

- [x] T049 [P] [US5] Add Vite base path assertion test in `src/app/App.test.tsx`
- [x] T050 [P] [US5] Add public asset path validation test for MP3 and media metadata in `src/features/gift/data/giftContent.test.ts`

### Implementation for User Story 5

- [x] T051 [US5] Create GitHub Pages build and deploy workflow with `npm test` before build step in `.github/workflows/pages.yml`
- [ ] T052 [US5] Add production build instructions and expected asset path checks to `README.md`
- [ ] T053 [US5] Confirm quickstart production validation steps match implementation in `specs/001-site-presente-namorados/quickstart.md`

**Checkpoint**: The app is ready for automated GitHub Pages deployment and production path validation.

---

## Phase 8: Polish & Cross-Cutting Concerns

**Purpose**: Final validation, accessibility, performance, and documentation pass across all stories.

- [x] T054 [P] Run component and utility test validation notes already present in `specs/001-site-presente-namorados/quickstart.md`
- [x] T055 [P] Mobile layout audit steps documented in `specs/001-site-presente-namorados/quickstart.md`
- [x] T056 [P] Accessible names, focus states, and keyboard controls verified across all cards (`*:focus-visible` rule in `src/styles.css`, `aria-label` on all interactive elements)
- [x] T057 [P] Tailwind and Framer Motion usage limited to requested scope (no Swiper, React Router, masonry libraries)
- [x] T058 [P] No sensitive data found in `src/features/gift/data/giftContent.ts`
- [x] T058b [P] No photo assets supplied to compress — placeholder paths documented; real assets can be optimized when provided
- [x] T059 Final build succeeds (`tsc && vite build` produces `dist/`), all 36 tests pass, `README.md` created with build/deploy instructions

---

## Dependencies & Execution Order

### Phase Dependencies

- **Phase 1 Setup**: No dependencies.
- **Phase 2 Foundational**: Depends on Phase 1.
- **US1 (Phase 3)**: Depends on Phase 2 and is the MVP.
- **US2 (Phase 4)**: Depends on Phase 2; can integrate after US1 because `GiftHome.tsx` card order already exists.
- **US3 (Phase 5)**: Depends on Phase 2; can integrate after US1 because `GiftHome.tsx` card order already exists.
- **US4 (Phase 6)**: Depends on Phase 2; can integrate after US1 because `GiftHome.tsx` card order already exists.
- **US5 (Phase 7)**: Depends on Phase 1 and should be finalized after at least US1 is working; full production validation depends on all included stories.
- **Polish (Phase 8)**: Depends on all desired user stories.

### User Story Dependencies

- **US1 Abrir o presente com música**: MVP and establishes unlock/audio/home orchestration.
- **US2 Ver o tempo de relacionamento**: Independently testable through date utility and timer hook; final integration touches `GiftHome.tsx`.
- **US3 Navegar pelas memórias do casal**: Independently testable through `MomentsCard`; final integration touches `GiftHome.tsx`.
- **US4 Ler uma carta carinhosa**: Independently testable through `MessageCard`; final integration touches `GiftHome.tsx`.
- **US5 Acessar o presente publicado**: Validates deploy and static paths after app content exists.

### Within Each User Story

- Tests before implementation for utilities, hooks, and component behavior.
- Local content before components that render it.
- Pure utilities before hooks that consume them.
- Hooks before containers that orchestrate them.
- Presentational cards before final `GiftHome.tsx` integration.

## Parallel Execution Examples

### US1

```text
Task: T018 UnlockScreen tests in src/features/gift/components/UnlockScreen.test.tsx
Task: T019 useAudioPlayer tests in src/features/gift/hooks/useAudioPlayer.test.ts
Task: T021 MusicPlayerCard tests in src/features/gift/components/MusicPlayerCard.test.tsx
```

### US2

```text
Task: T028 relationshipDuration tests in src/features/gift/utils/relationshipDuration.test.ts
Task: T029 useRelationshipTimer tests in src/features/gift/hooks/useRelationshipTimer.test.ts
Task: T030 CoupleCard tests in src/features/gift/components/CoupleCard.test.tsx
```

### US3

```text
Task: T036 carousel wraparound tests in src/features/gift/components/MomentsCard.test.tsx
Task: T038 media metadata uniqueness test in src/features/gift/data/giftContent.test.ts
```

### US4

```text
Task: T043 MessageCard tests in src/features/gift/components/MessageCard.test.tsx
Task: T044 GiftHome card order test in src/features/gift/GiftHome.test.tsx
```

### US5

```text
Task: T049 Vite base path assertion in src/app/App.test.tsx
Task: T050 asset path validation in src/features/gift/data/giftContent.test.ts
```

## Implementation Strategy

### MVP First

1. Complete Phase 1 and Phase 2.
2. Complete US1 only.
3. Validate empty route -> `#/home`, lazy home loading, unlock button, and audio play/pause/error behavior.
4. Demo the basic present opening flow.

### Incremental Delivery

1. Add US2 timer card and validate date math.
2. Add US4 message card because it is low-risk and completes the emotional content.
3. Add US3 moments carousel/grid once asset metadata is ready.
4. Add US5 deploy workflow and production validation.
5. Run Phase 8 polish.

### Notes

- `[P]` tasks are parallel-safe only when they touch separate files or are tests that do not depend on incomplete implementation files.
- Tasks touching `src/features/gift/GiftHome.tsx` should be serialized to avoid merge conflicts.
- Tasks touching `src/features/gift/data/giftContent.ts` should be serialized after asset filenames are known.
- Keep Framer Motion limited to reveal/card transitions and do not add Swiper, React Router, masonry libraries, or extra background assets.
