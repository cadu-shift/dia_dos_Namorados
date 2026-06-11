import { render, screen } from '@testing-library/react'
import { CoupleCard } from './CoupleCard'

describe('CoupleCard', () => {
  it('renders title and duration text', () => {
    render(
      <CoupleCard
        title="Sobre o casal"
        photoSrc="/couple.jpg"
        photoAlt="Foto do casal"
        durationText="2 anos, 7 meses e 0 dias"
      />
    )
    expect(screen.getByText('Sobre o casal')).toBeInTheDocument()
    expect(screen.getByText('2 anos, 7 meses e 0 dias')).toBeInTheDocument()
  })

  it('renders image with correct alt text', () => {
    render(
      <CoupleCard
        title="Sobre o casal"
        photoSrc="/couple.jpg"
        photoAlt="Foto do casal"
        durationText="1 ano, 0 meses e 0 dias"
      />
    )
    const img = screen.getByAltText('Foto do casal')
    expect(img).toBeInTheDocument()
    expect(img).toHaveAttribute('src', '/couple.jpg')
  })
})
