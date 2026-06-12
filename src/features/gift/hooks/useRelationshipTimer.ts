import { useState, useEffect } from 'react'
import { calculateRelationshipDuration, type RelationshipDuration } from '../utils/relationshipDuration'

export function useRelationshipTimer(startDate: string): RelationshipDuration {
  const [duration, setDuration] = useState<RelationshipDuration>(() =>
    calculateRelationshipDuration(startDate)
  )

  useEffect(() => {
    const interval = setInterval(() => {
      setDuration(calculateRelationshipDuration(startDate))
    }, 1000)

    return () => clearInterval(interval)
  }, [startDate])

  return duration
}
