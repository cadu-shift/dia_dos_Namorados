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
    const audio = new Audio(src)
    audio.loop = true
    audioRef.current = audio

    audio.onerror = () => {
      setStatus('error')
      setErrorMessage('Não foi possível carregar o áudio.')
    }

    return () => {
      audio.pause()
      audio.src = ''
    }
  }, [src])

  const play = useCallback(() => {
    const audio = audioRef.current
    if (!audio) return

    audio.play()
      .then(() => setStatus('playing'))
      .catch(() => {
        setStatus('error')
        setErrorMessage('O áudio não pôde ser iniciado. Verifique as permissões do navegador.')
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
