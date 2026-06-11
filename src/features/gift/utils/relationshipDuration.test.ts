import { calculateRelationshipDuration } from './relationshipDuration'

describe('calculateRelationshipDuration', () => {
  const startDate = '2023-11-13'

  it('returns invalid for a future start date', () => {
    const result = calculateRelationshipDuration('2099-01-01')
    expect(result.isValid).toBe(false)
    expect(result.displayText).toBe('Data inválida')
  })

  it('returns invalid for unparseable date', () => {
    const result = calculateRelationshipDuration('not-a-date')
    expect(result.isValid).toBe(false)
  })

  it('returns valid result for valid start date', () => {
    const result = calculateRelationshipDuration(startDate)
    expect(result.isValid).toBe(true)
    expect(result.years).toBeGreaterThanOrEqual(0)
    expect(result.months).toBeGreaterThanOrEqual(0)
    expect(result.months).toBeLessThan(12)
    expect(result.days).toBeGreaterThanOrEqual(0)
    expect(result.displayText).toMatch(/\d+ anos?, \d+ meses? e \d+ dias?/)
  })
})
