# Data Model: Site Presente dos Namorados

## GiftContent

Local configuration object for the complete gift page.

**Fields**:
- `unlockTitle`: string. Exact value: "Eduardo decidiu criar algo especial para você".
- `unlockButtonLabel`: string. Exact value: "ver presente".
- `relationshipStartDate`: ISO date string. Exact value: `2023-11-13`.
- `messageTitle`: string for the special message card title.
- `messageBody`: string. Placeholder Lorem Ipsum until the final personal text is supplied.
- `music`: `MusicTrack`.
- `coupleCard`: `CoupleCardContent`.
- `moments`: `MemoryItem[]`.

**Validation rules**:
- `relationshipStartDate` MUST be parseable as a valid local date.
- `messageBody` MUST be non-empty; Lorem Ipsum is allowed only before final content.
- `moments` SHOULD include all provided photo assets and MAY include videos.

## MusicTrack

Local metadata for the music player card.

**Fields**:
- `title`: string. Displayed in the Spotify-style card.
- `artist`: string. Displayed if available.
- `audioSrc`: public asset path. Must reference `Foi assim - Sotam.mp3`.
- `coverSrc`: public asset path. Must reference one supplied photo.
- `coverAlt`: string accessible description for the cover image.

**Validation rules**:
- `audioSrc` MUST resolve under `/dia_dos_Namorados/assets/` in production.
- The player UI MUST expose only one play/pause control.
- Missing or blocked audio MUST set an explicit error state.

## CoupleCardContent

Local content for the couple card.

**Fields**:
- `title`: string.
- `photoSrc`: public asset path for a different supplied photo from the music cover when possible.
- `photoAlt`: string accessible description.
- `durationLabel`: derived display text from `RelationshipDuration`.

**Validation rules**:
- `photoSrc` MUST use `object-fit: cover` in the UI.
- Timer display MUST update in real time and never show negative units.

## RelationshipDuration

Derived value produced from `relationshipStartDate` and the current date.

**Fields**:
- `years`: non-negative integer.
- `months`: non-negative integer, 0-11.
- `days`: non-negative integer, valid for the current month boundary.
- `displayText`: string in the format `X anos, Y meses e Z dias`.
- `isValid`: boolean.

**State transitions**:
- `valid`: current date is on or after `2023-11-13`; show `displayText`.
- `invalid`: current date is before start date or input is invalid; show safe textual error.

## MemoryItem

Local photo or short video shown in the moments card.

**Fields**:
- `id`: stable string unique within `moments`.
- `type`: `photo` or `video`.
- `src`: public asset path.
- `alt`: accessible description for images or videos.
- `caption`: optional string.

**Validation rules**:
- `id` MUST be unique.
- `src` MUST resolve in production.
- Photo/video elements MUST preserve layout on load failure.
- Images MUST use `object-fit: cover` and rounded corners.

## UIState

Runtime UI state owned by containers/hooks.

**Fields**:
- `route`: `home`.
- `isUnlocked`: boolean.
- `audioStatus`: `idle`, `playing`, `paused`, or `error`.
- `carouselIndex`: integer.
- `mediaStatus`: `loading`, `success`, or `error`.

**State transitions**:
- Empty route -> `home`.
- Unlock button -> `isUnlocked = true`, route `home`, request audio playback.
- Play/pause button toggles `audioStatus` between `playing` and `paused`.
- Audio failure -> `audioStatus = error` with visible text.
- Carousel previous/next wraps within `moments`.
