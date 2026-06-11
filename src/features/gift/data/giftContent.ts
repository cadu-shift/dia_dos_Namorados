export interface MusicTrack {
  title: string
  artist: string
  audioSrc: string
  coverSrc: string
  coverAlt: string
}

export interface CoupleCardContent {
  title: string
  photoSrc: string
  photoAlt: string
}

export interface MemoryItem {
  id: string
  type: 'photo' | 'video'
  src: string
  alt: string
  caption?: string
}

export interface GiftContent {
  unlockTitle: string
  unlockButtonLabel: string
  relationshipStartDate: string
  messageTitle: string
  messageBody: string
  music: MusicTrack
  coupleCard: CoupleCardContent
  moments: MemoryItem[]
}

export const giftContent: GiftContent = {
  unlockTitle: 'Eduardo decidiu criar algo especial para você',
  unlockButtonLabel: 'ver presente',
  relationshipStartDate: '2023-11-13',
  messageTitle: 'Mensagem especial',
  messageBody:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  music: {
    title: 'Foi Assim',
    artist: 'Sotam',
    audioSrc: '/dia_dos_Namorados/assets/Foi assim - Sotam.mp3',
    coverSrc: '/dia_dos_Namorados/assets/placeholder-cover.jpg',
    coverAlt: 'Capa do álbum',
  },
  coupleCard: {
    title: 'Sobre o casal',
    photoSrc: '/dia_dos_Namorados/assets/placeholder-couple.jpg',
    photoAlt: 'Foto do casal',
  },
  moments: [],
}
