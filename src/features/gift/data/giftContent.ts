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
    'Você é a melhor conquista da minha vida. Por mais dificeis que estejam sendo os problemas que estamos enfretamos, sei que todos os esforços serão recompensados algum dia e que vamos desfrutar de todos os nossos sonhos que passamos noites e noites planejando. Eu me orgulho do seu esforço diário e da pessoa maravilhosa que você é, do seu espirito apoiador e sou muito sortudo por ter você ao meu lado. Quero que saiba que sempre estarei aqui quando você precisar para sempre, e que nosso amor vai superar todos os obstaculos. Eu te amo mais do que palavras podem expressar ❤️❤️',
  music: {
    title: 'Foi Assim',
    artist: 'Sotam',
    audioSrc: '/dia_dos_Namorados/assets/foi-assim-sotam.mp3',
    coverSrc: '/dia_dos_Namorados/assets/img1.jpg',
    coverAlt: 'Capa do álbum',
  },
  coupleCard: {
    title: 'Sobre o casal',
    photoSrc: '/dia_dos_Namorados/assets/img3.jpg',
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
    {
      id: 'moment-5',
      type: 'photo',
      src: '/dia_dos_Namorados/assets/img7.jpg',
      alt: 'Momento especial 5',
    },
    {
      id: 'moment-6',
      type: 'photo',
      src: '/dia_dos_Namorados/assets/img8.jpg',
      alt: 'Momento especial 6',
    },
    {
      id: 'moment-7',
      type: 'photo',
      src: '/dia_dos_Namorados/assets/img9.jpg',
      alt: 'Momento especial 7',
    },
    {
      id: 'moment-8',
      type: 'photo',
      src: '/dia_dos_Namorados/assets/img10.jpg',
      alt: 'Momento especial 8',
    },
    {
      id: 'moment-9',
      type: 'photo',
      src: '/dia_dos_Namorados/assets/img11.jpg',
      alt: 'Momento especial 9',
    },
    {
      id: 'moment-10',
      type: 'photo',
      src: '/dia_dos_Namorados/assets/img12.jpg',
      alt: 'Momento especial 10',
    }
  ],
}

