import { motion } from 'framer-motion'

interface UnlockScreenProps {
  title: string
  buttonLabel: string
  onUnlock: () => void
}

export function UnlockScreen({ title, buttonLabel, onUnlock }: UnlockScreenProps) {
  return (
    <motion.div
      className="flex flex-col items-center justify-center min-h-screen px-6 text-center"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-2xl font-semibold mb-8 leading-relaxed">
        {title}
      </h1>
      <button
        onClick={onUnlock}
        className="px-8 py-4 rounded-full bg-white/20 backdrop-blur-sm text-lg font-medium
                   hover:bg-white/30 focus-visible:outline-2 focus-visible:outline-white
                   transition-colors"
        aria-label={buttonLabel}
      >
        {buttonLabel}
      </button>
    </motion.div>
  )
}
