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
        className="px-8 py-4 rounded-full bg-[#1B4F5C]/15 backdrop-blur-sm text-lg font-medium text-[#1B4F5C]
                   hover:bg-[#1B4F5C]/25 focus-visible:outline-2 focus-visible:outline-[#1B4F5C]
                   transition-colors"
        aria-label={buttonLabel}
      >
        {buttonLabel}
      </button>
    </motion.div>
  )
}
