import { motion } from 'framer-motion'
import { GiftCard } from './GiftCard'

interface CoupleCardProps {
  title: string
  photoSrc: string
  photoAlt: string
  durationText: string
}

export function CoupleCard({ title, photoSrc, photoAlt, durationText }: CoupleCardProps) {
  return (
    <GiftCard title={title}>
      <motion.div
        className="flex flex-col items-center gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <img
          src={photoSrc}
          alt={photoAlt}
          className="w-32 h-32 rounded-full object-cover"
        />
        <p className="text-lg text-center font-medium">{durationText}</p>
      </motion.div>
    </GiftCard>
  )
}
