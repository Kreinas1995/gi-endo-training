// File: /src/pages/CapstoneAdvanced.jsx
import { Link } from 'react-router-dom'

export default function CapstoneAdvanced() {
  return (
    <div style={{ maxWidth: 700, margin: '0 auto', padding: 'var(--space-xl)' }}>
      <Link to="/">← Home</Link>
      <h1 style={{ margin: 'var(--space-lg) 0' }}>🎓 Advanced Capstone</h1>
      <p style={{ color: 'var(--color-text-secondary)' }}>Comprehensive assessment covering all tiers including EUS, ERCP, and EBUS.</p>
      <p style={{ color: 'var(--color-text-muted)', fontStyle: 'italic', marginTop: 'var(--space-xl)' }}>[Capstone assessment — coming soon]</p>
    </div>
  )
}
