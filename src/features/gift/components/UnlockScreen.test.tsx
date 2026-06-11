import { render, screen, fireEvent } from '@testing-library/react'
import { UnlockScreen } from './UnlockScreen'

describe('UnlockScreen', () => {
  it('renders title and button', () => {
    render(<UnlockScreen title="Test Title" buttonLabel="ver presente" onUnlock={() => {}} />)
    expect(screen.getByText('Test Title')).toBeInTheDocument()
    expect(screen.getByText('ver presente')).toBeInTheDocument()
  })

  it('calls onUnlock when button is clicked', () => {
    const onUnlock = vi.fn()
    render(<UnlockScreen title="Test" buttonLabel="ver presente" onUnlock={onUnlock} />)
    fireEvent.click(screen.getByText('ver presente'))
    expect(onUnlock).toHaveBeenCalledTimes(1)
  })
})
