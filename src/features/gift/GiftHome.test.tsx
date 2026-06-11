import { render, screen, fireEvent } from '@testing-library/react'
import GiftHome from './GiftHome'

describe('GiftHome', () => {
  let originalPlay: typeof HTMLAudioElement.prototype.play
  let originalPause: typeof HTMLAudioElement.prototype.pause

  beforeEach(() => {
    originalPlay = HTMLAudioElement.prototype.play
    originalPause = HTMLAudioElement.prototype.pause
    HTMLAudioElement.prototype.play = vi.fn().mockResolvedValue(undefined)
    HTMLAudioElement.prototype.pause = vi.fn()
  })

  afterEach(() => {
    HTMLAudioElement.prototype.play = originalPlay
    HTMLAudioElement.prototype.pause = originalPause
  })

  it('renders unlock screen initially', () => {
    render(<GiftHome />)
    expect(screen.getByText('Eduardo decidiu criar algo especial para você')).toBeInTheDocument()
    expect(screen.getByText('ver presente')).toBeInTheDocument()
  })

  it('transitions to home after unlock button click', async () => {
    render(<GiftHome />)
    fireEvent.click(screen.getByText('ver presente'))
    const musicCard = await screen.findByText('Música')
    expect(musicCard).toBeInTheDocument()
  })

  it('renders all cards in correct order after unlock', async () => {
    render(<GiftHome />)
    fireEvent.click(screen.getByText('ver presente'))

    const musicCard = await screen.findByText('Música')
    expect(musicCard).toBeInTheDocument()

    const coupleCard = await screen.findByText('Sobre o casal')
    expect(coupleCard).toBeInTheDocument()

    const messageCard = await screen.findByText('Mensagem especial')
    expect(messageCard).toBeInTheDocument()
  })
})
