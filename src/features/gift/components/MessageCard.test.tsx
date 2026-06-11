import { render, screen } from '@testing-library/react'
import { MessageCard } from './MessageCard'

describe('MessageCard', () => {
  it('renders title and body', () => {
    render(<MessageCard title="Mensagem especial" body="Querida, esta é minha declaração." />)
    expect(screen.getByText('Mensagem especial')).toBeInTheDocument()
    expect(screen.getByText('Querida, esta é minha declaração.')).toBeInTheDocument()
  })
})
