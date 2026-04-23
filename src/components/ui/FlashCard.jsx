// File: /src/components/ui/FlashCard.jsx
import { useState } from 'react'

export default function FlashCard({ front, back }) {
  const [flipped, setFlipped] = useState(false)
  return (
    <div onClick={() => setFlipped(f => !f)} style={{ cursor: 'pointer', background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', padding: 'var(--space-xl)', minHeight: 120, display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', userSelect: 'none' }}>
      <p>{flipped ? back : front}</p>
    </div>
  )
}
