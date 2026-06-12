import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { GiftCard } from './GiftCard'
import type { MemoryItem } from '../data/giftContent'

interface MomentsCardProps {
  title: string
  moments: MemoryItem[]
}

export function MomentsCard({ title, moments }: MomentsCardProps) {
  const [index, setIndex] = useState(0)

  if (moments.length === 0) {
    return (
      <GiftCard title={title}>
        <p className="text-[#1B4F5C]/60">Nenhum momento cadastrado ainda.</p>
      </GiftCard>
    )
  }

  const current = moments[index]

  const prev = () => setIndex((i) => (i === 0 ? moments.length - 1 : i - 1))
  const next = () => setIndex((i) => (i === moments.length - 1 ? 0 : i + 1))

  return (
    <GiftCard title={title}>
      <div className="relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
            className="mb-4"
          >
            {current.type === 'video' ? (
              <video
                src={current.src}
                controls
                className="w-full rounded-xl object-cover max-h-80"
                aria-label={current.alt}
              />
            ) : (
              <img
                src={current.src}
                alt={current.alt}
                className="w-full rounded-xl object-cover max-h-80"
                onError={(e) => {
                  const el = e.currentTarget
                  el.style.display = 'none'
                  el.nextElementSibling?.classList.remove('hidden')
                }}
              />
            )}
            <p className="hidden mt-2 text-sm text-[#1B4F5C]/60" role="alert">
              Mídia indisponível
            </p>
            {current.caption && (
              <p className="mt-2 text-sm text-[#1B4F5C]/70">{current.caption}</p>
            )}
          </motion.div>
        </AnimatePresence>

        <div className="flex justify-between items-center">
          <button
            onClick={prev}
            className="px-4 py-2 rounded-lg bg-[#1B4F5C]/10 hover:bg-[#1B4F5C]/20 focus-visible:outline-2 focus-visible:outline-[#1B4F5C] transition-colors text-[#1B4F5C] font-bold text-xl"
            aria-label="Momento anterior"
          >
            ‹
          </button>
          <span className="text-sm text-[#1B4F5C]/60">
            {index + 1} / {moments.length}
          </span>
          <button
            onClick={next}
            className="px-4 py-2 rounded-lg bg-[#1B4F5C]/10 hover:bg-[#1B4F5C]/20 focus-visible:outline-2 focus-visible:outline-[#1B4F5C] transition-colors text-[#1B4F5C] font-bold text-xl"
            aria-label="Próximo momento"
          >
            ›
          </button>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-3 gap-2">
        {moments.map((m) =>
          m.type === 'video' ? (
            <video
              key={m.id}
              src={m.src}
              className="w-full h-20 rounded-lg object-cover"
              aria-label={m.alt}
            />
          ) : (
            <img
              key={m.id}
              src={m.src}
              alt={m.alt}
              className="w-full h-20 rounded-lg object-cover"
            />
          )
        )}
      </div>
    </GiftCard>
  )
}
