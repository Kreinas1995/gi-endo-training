// File: /src/pages/GlossaryPage.jsx
import { useState } from 'react'
import glossary from '@data/glossary.json'

export default function GlossaryPage() {
  const [search, setSearch] = useState('')
  const filtered = glossary.terms?.filter(t =>
    t.term.toLowerCase().includes(search.toLowerCase()) ||
    t.definition.toLowerCase().includes(search.toLowerCase())
  ) || []

  return (
    <div style={{ maxWidth: 'var(--content-max-width)', margin: '0 auto', padding: 'var(--space-xl)' }}>
      <h1 style={{ marginBottom: 'var(--space-lg)' }}>Glossary & Abbreviations</h1>
      <input type="search" placeholder="Search terms..." value={search} onChange={e => setSearch(e.target.value)}
        style={{ width: '100%', padding: 'var(--space-md)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', fontSize: '1rem', marginBottom: 'var(--space-xl)' }} />
      {filtered.length === 0 ? <p style={{ color: 'var(--color-text-muted)' }}>No terms found.</p> : (
        <dl style={{ display: 'grid', gap: 'var(--space-md)' }}>
          {filtered.map((t, i) => (
            <div key={i} style={{ background: 'var(--color-surface)', padding: 'var(--space-md)', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }}>
              <dt style={{ fontWeight: 600, fontFamily: 'var(--font-mono)', color: 'var(--color-primary)' }}>{t.term}</dt>
              <dd style={{ color: 'var(--color-text-secondary)', marginTop: 4 }}>{t.definition}</dd>
            </div>
          ))}
        </dl>
      )}
    </div>
  )
}
