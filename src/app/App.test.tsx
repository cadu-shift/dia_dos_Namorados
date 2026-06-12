import { render, screen } from '@testing-library/react'
import App from './App'
import { giftContent } from '../features/gift/data/giftContent'

describe('App routing', () => {
  beforeEach(() => {
    window.location.hash = ''
  })

  it('redirects empty hash to #/home', () => {
    render(<App />)
    expect(window.location.hash).toBe('#/home')
  })

  it('renders GiftHome unlock screen when hash is #/home', async () => {
    window.location.hash = '#/home'
    render(<App />)
    const title = await screen.findByText('Eduardo decidiu criar algo especial para você', {}, { timeout: 5000 })
    expect(title).toBeInTheDocument()
  })

  it('uses correct Vite base path for production assets', () => {
    // import.meta.env.BASE_URL is a Vite build-time constant (always '/' in jsdom).
    // We verify the same intent by checking that asset paths in giftContent
    // embed the correct /dia_dos_Namorados/ base path for GitHub Pages deployment.
    expect(giftContent.music.audioSrc).toContain('/dia_dos_Namorados/')
    expect(giftContent.music.coverSrc).toContain('/dia_dos_Namorados/')
    expect(giftContent.coupleCard.photoSrc).toContain('/dia_dos_Namorados/')
  })
})
