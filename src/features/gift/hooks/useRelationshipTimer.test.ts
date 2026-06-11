import { renderHook } from '@testing-library/react'
import { useRelationshipTimer } from './useRelationshipTimer'

describe('useRelationshipTimer', () => {
  it('returns duration for valid date', () => {
    const { result } = renderHook(() => useRelationshipTimer('2023-11-13'))
    expect(result.current.isValid).toBe(true)
    expect(result.current.displayText).toMatch(/\d+ anos?, \d+ meses? e \d+ dias?/)
  })

  it('returns invalid for future date', () => {
    const { result } = renderHook(() => useRelationshipTimer('2099-01-01'))
    expect(result.current.isValid).toBe(false)
    expect(result.current.displayText).toBe('Data inválida')
  })
})
