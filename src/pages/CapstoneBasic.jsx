// File: /src/pages/CapstoneBasic.jsx
import { Link } from 'react-router-dom'

export default function CapstoneBasic() {
  return (
    <div style={{ maxWidth: 700, margin: '0 auto', padding: 'var(--space-xl)' }}>
      <Link to="/">← Home</Link>
      <h1 style={{ margin: 'var(--space-lg) 0' }}>🎓 Basic Tier Capstone</h1>
      <p style={{ color: 'var(--color-text-secondary)' }}>30-question image identification assessment covering Tier 1 & 2 material.</p>
      <p style={{ color: 'var(--color-text-muted)', fontStyle: 'italic', marginTop: 'var(--space-xl)' }}>[Capstone assessment — coming soon]</p>
    </div>
  )
}
