// File: /src/pages/EquipmentRef.jsx
import { useState } from 'react'
import equipment from '@data/equipment.json'

export default function EquipmentRef() {
  const [search, setSearch] = useState('')
  const items = equipment.items?.filter(e =>
    e.name.toLowerCase().includes(search.toLowerCase()) ||
    (e.model || '').toLowerCase().includes(search.toLowerCase())
  ) || []

  return (
    <div style={{ maxWidth: 'var(--content-max-width)', margin: '0 auto', padding: 'var(--space-xl)' }}>
      <h1 style={{ marginBottom: 'var(--space-lg)' }}>Olympus Equipment Reference</h1>
      <input type="search" placeholder="Search equipment..." value={search} onChange={e => setSearch(e.target.value)}
        style={{ width: '100%', padding: 'var(--space-md)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', fontSize: '1rem', marginBottom: 'var(--space-xl)' }} />
      {items.length === 0 ? <p style={{ color: 'var(--color-text-muted)' }}>No equipment listed yet.</p> : (
        <div style={{ display: 'grid', gap: 'var(--space-md)' }}>
          {items.map((item, i) => (
            <div key={i} style={{ background: 'var(--color-surface)', padding: 'var(--space-lg)', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }}>
              <h3 style={{ color: 'var(--color-primary)' }}>{item.name}</h3>
              {item.model && <p style={{ fontFamily: 'var(--font-mono)', color: 'var(--color-text-muted)', fontSize: '0.85rem' }}>Model: {item.model}</p>}
              {item.description && <p style={{ marginTop: 'var(--space-sm)', color: 'var(--color-text-secondary)' }}>{item.description}</p>}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
