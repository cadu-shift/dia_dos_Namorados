import { motion } from 'framer-motion'
import { GiftCard } from './GiftCard'
import type { AudioStatus } from '../hooks/useAudioPlayer'

interface MusicPlayerCardProps {
  title: string
  artist: string
  coverSrc: string
  coverAlt: string
  status: AudioStatus
  onToggle: () => void
  errorMessage: string | null
}

export function MusicPlayerCard({
  title,
  artist,
  coverSrc,
  coverAlt,
  status,
  onToggle,
  errorMessage,
}: MusicPlayerCardProps) {
  const isPlaying = status === 'playing'
  const label = isPlaying ? 'Pausar música' : 'Tocar música'

  return (
    <GiftCard title="Música">
      <motion.div
        className="flex items-center gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <img
          src={coverSrc}
          alt={coverAlt}
          className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
        />
        <div className="flex-1 min-w-0">
          <p className="font-medium truncate">{title}</p>
          <p className="text-sm text-white/70 truncate">{artist}</p>
        </div>
        <button
          onClick={onToggle}
          className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center
                     hover:bg-white/30 focus-visible:outline-2 focus-visible:outline-white transition-colors
                     text-lg"
          aria-label={label}
          disabled={status === 'error'}
        >
          {isPlaying ? '⏸' : '▶'}
        </button>
      </motion.div>
      {status === 'error' && errorMessage && (
        <p className="mt-3 text-sm text-red-300" role="alert">
          {errorMessage}
        </p>
      )}
    </GiftCard>
  )
}
