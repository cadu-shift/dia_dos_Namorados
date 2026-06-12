import { render, screen } from '@testing-library/react'
import { CoupleCard } from './CoupleCard'

const mockDuration = {
  years: 2,
  months: 7,
  days: 0,
  hours: 10,
  minutes: 30,
  seconds: 0,
  displayText: '2 anos, 7 meses e 0 dias',
  isValid: true,
}

describe('CoupleCard', () => {
  it('renders title and duration', () => {
    render(
      <CoupleCard
        title="Sobre o casal"
        photoSrc="/couple.jpg"
        photoAlt="Foto do casal"
        duration={mockDuration}
      />
    )
    expect(screen.getByText('Sobre o casal')).toBeInTheDocument()
    expect(screen.getByAltText('Foto do casal')).toBeInTheDocument()
  })

  it('renders image with correct alt text', () => {
    render(
      <CoupleCard
        title="Sobre o casal"
        photoSrc="/couple.jpg"
        photoAlt="Foto do casal"
        duration={mockDuration}
      />
    )
    const img = screen.getByAltText('Foto do casal')
    expect(img).toBeInTheDocument()
    expect(img).toHaveAttribute('src', '/couple.jpg')
  })
})
