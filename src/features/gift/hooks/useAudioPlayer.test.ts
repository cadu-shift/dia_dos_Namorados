import { renderHook, act } from '@testing-library/react'
import { useAudioPlayer } from './useAudioPlayer'

describe('useAudioPlayer', () => {
  beforeEach(() => {
    HTMLAudioElement.prototype.play = vi.fn().mockResolvedValue(undefined)
    HTMLAudioElement.prototype.pause = vi.fn()
  })

  it('starts with idle status', () => {
    const { result } = renderHook(() => useAudioPlayer('/test.mp3'))
    expect(result.current.status).toBe('idle')
  })

  it('transitions to playing on play()', async () => {
    const { result } = renderHook(() => useAudioPlayer('/test.mp3'))
    await act(async () => {
      result.current.play()
    })
    expect(result.current.status).toBe('playing')
  })

  it('transitions to paused on pause()', async () => {
    const { result } = renderHook(() => useAudioPlayer('/test.mp3'))
    await act(async () => { result.current.play() })
    await act(async () => { result.current.pause() })
    expect(result.current.status).toBe('paused')
  })

  it('toggles between playing and paused', async () => {
    const { result } = renderHook(() => useAudioPlayer('/test.mp3'))
    await act(async () => { result.current.toggle() })
    expect(result.current.status).toBe('playing')

    await act(async () => { result.current.toggle() })
    expect(result.current.status).toBe('paused')
  })

  it('sets error status when play fails', async () => {
    HTMLAudioElement.prototype.play = vi.fn().mockRejectedValue(new Error('blocked'))
    const { result } = renderHook(() => useAudioPlayer('/test.mp3'))
    await act(async () => { result.current.play() })
    expect(result.current.status).toBe('error')
    expect(result.current.errorMessage).toBeTruthy()
  })
})
