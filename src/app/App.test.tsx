import { render, screen } from '@testing-library/react'
import App from './App'

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
    expect(import.meta.env.BASE_URL).toBe('/dia_dos_Namorados/')
  })
})
