// File: /src/hooks/useAccessibility.js
import { useState, useEffect } from 'react'

const STORAGE_KEY = 'gi-endo-accessibility'

export function useAccessibility() {
  const [highContrast, setHighContrast] = useState(false)

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      if (saved) setHighContrast(JSON.parse(saved).highContrast ?? false)
    } catch (e) {}
  }, [])

  const toggleHighContrast = () => {
    setHighContrast(prev => {
      const next = !prev
      try {
        const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}')
        localStorage.setItem(STORAGE_KEY, JSON.stringify({ ...saved, highContrast: next }))
      } catch (e) {}
      return next
    })
  }

  return { highContrast, toggleHighContrast }
}
