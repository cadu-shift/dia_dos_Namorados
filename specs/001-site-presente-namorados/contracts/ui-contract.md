# UI Contract: Site Presente dos Namorados

## Route Contract

- Empty hash or empty route MUST redirect to `#/home`.
- `#/home` MUST lazy-load the home screen.
- Refreshing the production URL on GitHub Pages MUST render the app shell and route to home without 404.
- No history-based router is allowed for this feature.

## Unlock Screen

- Title text MUST be exactly: "Eduardo decidiu criar algo especial para você".
- Primary button text MUST be exactly: "ver presente".
- Activating the button by tap, click, Enter, or Space MUST reveal the gift cards.
- The same interaction MUST request playback for the configured local MP3.
- Audio failure MUST leave the cards accessible and show a clear textual message.

## Card Order

The home screen MUST render these cards after unlock:

1. Music player card.
2. Sobre o casal card.
3. Mensagem especial card.
4. Nossos Momentos card.

## Music Player Card

- Visual style SHOULD evoke a compact Spotify-like player card.
- Cover image MUST be one supplied photo and use `object-fit: cover`.
- UI MUST contain only one media control: play/pause.
- Play/pause control MUST have an accessible name that reflects current state.
- The configured track MUST be `Foi assim - Sotam.mp3`.
- Audio MUST loop.

## Sobre o Casal Card

- MUST display a supplied photo different from the music cover when possible.
- MUST display a real-time relationship timer based on `2023-11-13`.
- Timer MUST not show negative units.
- Photo MUST use `object-fit: cover` and rounded corners.

## Mensagem Especial Card

- MUST display a title and placeholder Lorem Ipsum until final text is supplied.
- Text MUST wrap without horizontal scroll at 360px.
- The visual tone SHOULD read as a personal message/card, without requiring a new font beyond Montserrat.

## Nossos Momentos Card

- MUST include a custom carousel showing all supplied photo assets.
- MUST include previous/next controls with accessible names.
- MUST support keyboard operation for the controls.
- MUST include a complementary CSS grid/masonry-style view of the same moments.
- Media MUST use rounded corners and `object-fit: cover`.
- Missing media MUST preserve layout and expose fallback text or alt text.

## Visual Contract

- Global font family MUST be Montserrat with a sans-serif fallback.
- Page background MUST use a gradient from `#ff00ff` to `#400040`.
- No background image assets may be added.
- Images MUST have rounded corners.
- Layout MUST avoid horizontal scroll from 360px through 430px wide.
- Focus states MUST be visible.
