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
    audioSrc: '/dia_dos_Namorados/assets/foi-assim-sotam.mp3',
    coverSrc: '/dia_dos_Namorados/assets/img3.jpg',
    coverAlt: 'Capa do álbum',
  },
  coupleCard: {
    title: 'Sobre o casal',
    photoSrc: '/dia_dos_Namorados/assets/img1.jpg',
    photoAlt: 'Foto do casal',
  },
  moments: [
    {
      id: 'moment-1',
      type: 'photo',
      src: '/dia_dos_Namorados/assets/img2.jpg',
      alt: 'Momento especial 1',
    },
    {
      id: 'moment-2',
      type: 'photo',
      src: '/dia_dos_Namorados/assets/img4.jpg',
      alt: 'Momento especial 2',
    },
    {
      id: 'moment-3',
      type: 'photo',
      src: '/dia_dos_Namorados/assets/img5.jpg',
      alt: 'Momento especial 3',
    },
    {
      id: 'moment-4',
      type: 'photo',
      src: '/dia_dos_Namorados/assets/img6.jpg',
      alt: 'Momento especial 4',
    },
  ],
}

