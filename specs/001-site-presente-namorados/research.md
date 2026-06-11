# Research: Site Presente dos Namorados

## Decision: React + Vite with TypeScript

**Rationale**: The feature is a static, client-only gift page with local state,
local media, and GitHub Pages deployment. React + Vite keeps startup and build
simple while matching the clarified project constitution.

**Alternatives considered**:
- Angular: rejected because clarification selected React + Vite as final stack.
- Plain HTML/CSS/JS: rejected because route lazy loading, card composition, and
  tests are cleaner with React components.

## Decision: Tailwind CSS for styling

**Rationale**: Tailwind was explicitly requested and fits the card-based mobile
layout. Global styles remain centralized in `src/styles.css` for Montserrat,
body reset, focus defaults, and the magenta-to-dark-purple gradient.

**Alternatives considered**:
- CSS Modules only: fewer dependencies, but does not follow the requested
  styling stack.
- Component libraries: rejected by the minimum-scope requirement.

## Decision: Framer Motion only for lightweight card/section transitions

**Rationale**: Framer Motion was requested for animation. Usage is limited to
unlock/home reveal and card entrance transitions so the implementation does not
grow beyond the card experience.

**Alternatives considered**:
- CSS-only transitions: lower dependency count, but does not follow the requested
  animation stack.
- Additional animation libraries: rejected by minimum scope.

## Decision: Manual hash route with lazy-loaded `home`

**Rationale**: The app needs a `home` route, empty route redirect, lazy loading,
and GitHub Pages refresh safety. A small manual hash router in `App.tsx` can set
empty hash to `#/home` and lazy-load `GiftHome` with `React.lazy` and
`Suspense`, avoiding React Router.

**Alternatives considered**:
- BrowserRouter/history routing: rejected because GitHub Pages refresh can 404.
- React Router HashRouter: works, but adds a dependency not needed for one route.
- Scroll-only navigation: does not satisfy the requested `home` route.

## Decision: Custom carousel, no Swiper or carousel library

**Rationale**: Scope is minimal and the carousel only needs all local photos,
previous/next controls, keyboard support, and clear labels. A custom index-based
carousel avoids extra dependencies.

**Alternatives considered**:
- Swiper.js: useful for advanced gestures, but unnecessary for the requested
  simple card.
- Masonry library: rejected; complementary grid/masonry can be CSS-based.

## Decision: Use `public/assets` for runtime media

**Rationale**: The music and photos need stable public URLs under Vite base
`/dia_dos_Namorados/`. Files currently supplied in root `/assets` should be
copied or migrated to `public/assets` during implementation without changing
the media content.

**Alternatives considered**:
- Import from `src/assets`: works for known files imported by code, but harder
  for "all photos from assets" unless metadata is maintained.
- Keep root `/assets`: rejected because Vite will not serve arbitrary root
  folders as public runtime assets.

## Decision: GitHub Actions for GitHub Pages deploy

**Rationale**: GitHub Actions avoids adding `gh-pages` as a deploy dependency
and supports repeatable build/publish from the repository.

**Alternatives considered**:
- `gh-pages` package script: acceptable per spec, but adds a dependency.
- Manual upload: rejected because deploy should be automated.

## Decision: Relationship timer uses pure date utility plus ticking hook

**Rationale**: The duration from `2023-11-13` must handle month/day boundaries
without negative values and update in real time. Pure date math is testable;
the hook only schedules periodic updates.

**Alternatives considered**:
- Date library: rejected by minimum-scope requirement.
- Inline component calculation: rejected because boundary tests would be harder.
