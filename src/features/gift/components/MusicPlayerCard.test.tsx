import { render, screen, fireEvent } from '@testing-library/react'
import { MusicPlayerCard } from './MusicPlayerCard'

describe('MusicPlayerCard', () => {
  const defaultProps = {
    title: 'Foi Assim',
    artist: 'Sotam',
    coverSrc: '/cover.jpg',
    coverAlt: 'Capa do álbum',
    onToggle: vi.fn(),
    errorMessage: null,
  }

  it('renders music info and play button', () => {
    render(<MusicPlayerCard {...defaultProps} status="idle" />)
    expect(screen.getByText('Foi Assim')).toBeInTheDocument()
    expect(screen.getByText('Sotam')).toBeInTheDocument()
    expect(screen.getByLabelText('Tocar música')).toBeInTheDocument()
  })

  it('shows pause label when playing', () => {
    render(<MusicPlayerCard {...defaultProps} status="playing" />)
    expect(screen.getByLabelText('Pausar música')).toBeInTheDocument()
  })

  it('calls onToggle on button click', () => {
    render(<MusicPlayerCard {...defaultProps} status="idle" />)
    fireEvent.click(screen.getByLabelText('Tocar música'))
    expect(defaultProps.onToggle).toHaveBeenCalledTimes(1)
  })

  it('displays error message when in error status', () => {
    render(<MusicPlayerCard {...defaultProps} status="error" errorMessage="Áudio indisponível" />)
    expect(screen.getByText('Áudio indisponível')).toBeInTheDocument()
    expect(screen.getByLabelText('Tocar música')).toBeDisabled()
  })
})
