import { render, screen, fireEvent } from '@testing-library/react'
import { MomentsCard } from './MomentsCard'
import type { MemoryItem } from '../data/giftContent'

const mockMoments: MemoryItem[] = [
  { id: '1', type: 'photo', src: '/photo1.jpg', alt: 'Foto 1', caption: 'Primeira foto' },
  { id: '2', type: 'photo', src: '/photo2.jpg', alt: 'Foto 2' },
  { id: '3', type: 'photo', src: '/photo3.jpg', alt: 'Foto 3' },
]

describe('MomentsCard', () => {
  it('shows empty message when no moments', () => {
    render(<MomentsCard title="Nossos Momentos" moments={[]} />)
    expect(screen.getByText('Nenhum momento cadastrado ainda.')).toBeInTheDocument()
  })

  it('renders first moment and navigation', () => {
    render(<MomentsCard title="Nossos Momentos" moments={mockMoments} />)
    const images = screen.getAllByAltText('Foto 1')
    expect(images.length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('1 / 3')).toBeInTheDocument()
    expect(screen.getByLabelText('Momento anterior')).toBeInTheDocument()
    expect(screen.getByLabelText('Próximo momento')).toBeInTheDocument()
  })

  it('navigates to next moment', () => {
    render(<MomentsCard title="Nossos Momentos" moments={mockMoments} />)
    fireEvent.click(screen.getByLabelText('Próximo momento'))
    expect(screen.getByText('2 / 3')).toBeInTheDocument()
  })

  it('wraps around from last to first', () => {
    render(<MomentsCard title="Nossos Momentos" moments={mockMoments} />)
    fireEvent.click(screen.getByLabelText('Próximo momento'))
    fireEvent.click(screen.getByLabelText('Próximo momento'))
    fireEvent.click(screen.getByLabelText('Próximo momento'))
    expect(screen.getByText('1 / 3')).toBeInTheDocument()
  })

  it('navigates to previous moment', () => {
    render(<MomentsCard title="Nossos Momentos" moments={mockMoments} />)
    fireEvent.click(screen.getByLabelText('Próximo momento'))
    fireEvent.click(screen.getByLabelText('Momento anterior'))
    expect(screen.getByText('1 / 3')).toBeInTheDocument()
  })
})
