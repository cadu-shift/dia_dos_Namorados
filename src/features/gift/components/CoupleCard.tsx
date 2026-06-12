import { motion, AnimatePresence } from 'framer-motion'
import { GiftCard } from './GiftCard'
import type { RelationshipDuration } from '../utils/relationshipDuration'

interface CoupleCardProps {
  title: string
  photoSrc: string
  photoAlt: string
  duration: RelationshipDuration
}

interface AnimatedNumberProps {
  value: number
  label: string
  pad?: boolean
}

function AnimatedNumber({ value, label, pad = false }: AnimatedNumberProps) {
  const display = pad ? String(value).padStart(2, '0') : String(value)
  return (
    <div className="flex flex-col items-center min-w-[3.5rem]">
      <div className="relative h-10 overflow-hidden w-full">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={display}
            className="absolute inset-0 flex items-center justify-center text-3xl font-bold tabular-nums text-[#1B4F5C]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            {display}
          </motion.div>
        </AnimatePresence>
      </div>
      <span className="text-xs uppercase tracking-widest text-[#1B4F5C]/60 mt-1">{label}</span>
    </div>
  )
}

export function CoupleCard({ title, photoSrc, photoAlt, duration }: CoupleCardProps) {
  if (!duration) return null

  return (
    <GiftCard title={title}>
      <motion.div
        className="flex flex-col items-center gap-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <img
          src={photoSrc}
          alt={photoAlt}
          className="w-32 h-32 rounded-full object-cover"
        />

        {duration.isValid && (
          <>
            {/* Anos, Meses, Dias */}
            <div className="flex items-center gap-4">
              <AnimatedNumber value={duration.years} label={duration.years === 1 ? 'ano' : 'anos'} />
              <span className="text-2xl font-light text-[#1B4F5C]/40 mb-4">·</span>
              <AnimatedNumber value={duration.months} label={duration.months === 1 ? 'mês' : 'meses'} />
              <span className="text-2xl font-light text-[#1B4F5C]/40 mb-4">·</span>
              <AnimatedNumber value={duration.days} label={duration.days === 1 ? 'dia' : 'dias'} />
            </div>

            {/* Divisor */}
            <div className="w-full border-t border-[#1B4F5C]/20" />

            {/* Horas, Minutos, Segundos */}
            <div className="flex items-center gap-3">
              <AnimatedNumber value={duration.hours} label="horas" pad />
              <span className="text-2xl font-bold text-[#1B4F5C]/40 mb-4">:</span>
              <AnimatedNumber value={duration.minutes} label="min" pad />
              <span className="text-2xl font-bold text-[#1B4F5C]/40 mb-4">:</span>
              <AnimatedNumber value={duration.seconds} label="seg" pad />
            </div>
          </>
        )}

        {!duration.isValid && (
          <p className="text-lg text-center font-medium text-[#1B4F5C]/60">Data inválida</p>
        )}
      </motion.div>
    </GiftCard>
  )
}
