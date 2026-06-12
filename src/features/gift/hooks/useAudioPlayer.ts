import { useState, useRef, useCallback, useEffect } from 'react'

export type AudioStatus = 'idle' | 'playing' | 'paused' | 'error'

interface UseAudioPlayerReturn {
  status: AudioStatus
  play: () => void
  pause: () => void
  toggle: () => void
  errorMessage: string | null
}

export function useAudioPlayer(src: string): UseAudioPlayerReturn {
  const [status, setStatus] = useState<AudioStatus>('idle')
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    const audio = new Audio()
    audio.preload = 'none'
    audio.loop = true
    audio.src = src
    audioRef.current = audio

    return () => {
      audio.pause()
      audio.src = ''
    }
  }, [src])

  const play = useCallback(() => {
    const audio = audioRef.current
    if (!audio) return

    audio.play()
      .then(() => {
        setStatus('playing')
        setErrorMessage(null)
      })
      .catch((err) => {
        console.error('Audio play error:', err)
        setStatus('error')
        setErrorMessage('Não foi possível reproduzir o áudio. Tente novamente.')
      })
  }, [])

  const pause = useCallback(() => {
    audioRef.current?.pause()
    setStatus('paused')
  }, [])

  const toggle = useCallback(() => {
    if (status === 'playing') {
      pause()
    } else {
      play()
    }
  }, [status, play, pause])

  return { status, play, pause, toggle, errorMessage }
}

