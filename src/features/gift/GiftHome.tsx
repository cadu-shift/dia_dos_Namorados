import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { giftContent } from './data/giftContent'
import { useAudioPlayer } from './hooks/useAudioPlayer'
import { useRelationshipTimer } from './hooks/useRelationshipTimer'
import { UnlockScreen } from './components/UnlockScreen'
import { MusicPlayerCard } from './components/MusicPlayerCard'
import { CoupleCard } from './components/CoupleCard'
import { MessageCard } from './components/MessageCard'
import { MomentsCard } from './components/MomentsCard'

export default function GiftHome() {
  const [isUnlocked, setIsUnlocked] = useState(false)
  const { status, toggle, errorMessage } = useAudioPlayer(giftContent.music.audioSrc)
  const duration = useRelationshipTimer(giftContent.relationshipStartDate)

  const handleUnlock = () => {
    setIsUnlocked(true)
    const audio = new Audio(giftContent.music.audioSrc)
    audio.play().catch(() => {})
  }

  return (
    <AnimatePresence mode="wait">
      {!isUnlocked ? (
        <UnlockScreen
          key="unlock"
          title={giftContent.unlockTitle}
          buttonLabel={giftContent.unlockButtonLabel}
          onUnlock={handleUnlock}
        />
      ) : (
        <div key="home" className="py-8">
          <MusicPlayerCard
            title={giftContent.music.title}
            artist={giftContent.music.artist}
            coverSrc={giftContent.music.coverSrc}
            coverAlt={giftContent.music.coverAlt}
            status={status}
            onToggle={toggle}
            errorMessage={errorMessage}
          />
          <CoupleCard
            title={giftContent.coupleCard.title}
            photoSrc={giftContent.coupleCard.photoSrc}
            photoAlt={giftContent.coupleCard.photoAlt}
            durationText={duration.displayText}
          />
          <MessageCard
            title={giftContent.messageTitle}
            body={giftContent.messageBody}
          />
          <MomentsCard
            title="Nossos Momentos"
            moments={giftContent.moments}
          />
        </div>
      )}
    </AnimatePresence>
  )
}
