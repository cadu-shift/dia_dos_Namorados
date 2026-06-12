export interface RelationshipDuration {
  years: number
  months: number
  days: number
  hours: number
  minutes: number
  seconds: number
  displayText: string
  isValid: boolean
}

export function calculateRelationshipDuration(startDateStr: string): RelationshipDuration {
  const start = new Date(startDateStr)
  const now = new Date()

  const invalid: RelationshipDuration = {
    years: 0, months: 0, days: 0, hours: 0, minutes: 0, seconds: 0,
    displayText: 'Data inválida', isValid: false,
  }

  if (isNaN(start.getTime())) return invalid
  if (now < start) return invalid

  let years = now.getFullYear() - start.getFullYear()
  let months = now.getMonth() - start.getMonth()
  let days = now.getDate() - start.getDate()

  if (days < 0) {
    months--
    const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0)
    days += prevMonth.getDate()
  }

  if (months < 0) {
    years--
    months += 12
  }

  const hours = now.getHours()
  const minutes = now.getMinutes()
  const seconds = now.getSeconds()

  const displayText = `${years} ${years === 1 ? 'ano' : 'anos'}, ${months} ${months === 1 ? 'mês' : 'meses'} e ${days} ${days === 1 ? 'dia' : 'dias'}`

  return { years, months, days, hours, minutes, seconds, displayText, isValid: true }
}
