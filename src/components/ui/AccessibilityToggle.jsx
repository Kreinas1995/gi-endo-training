// File: /src/components/ui/AccessibilityToggle.jsx
import { useAccessibility } from '@hooks/useAccessibility'

export default function AccessibilityToggle() {
  const { highContrast, toggleHighContrast } = useAccessibility()
  return (
    <button onClick={toggleHighContrast} aria-label="Toggle high contrast mode" title="Toggle high contrast mode"
      style={{ background: 'none', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)', padding: '4px 8px', cursor: 'pointer' }}>
      {highContrast ? '☀️ Standard' : '🌙 High Contrast'}
    </button>
  )
}
