import { motion } from 'framer-motion'
import { GiftCard } from './GiftCard'

interface MessageCardProps {
  title: string
  body: string
}

export function MessageCard({ title, body }: MessageCardProps) {
  return (
    <GiftCard title={title}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-base leading-relaxed whitespace-pre-line break-words">
          {body}
        </p>
      </motion.div>
    </GiftCard>
  )
}
