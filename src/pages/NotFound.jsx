// File: /src/pages/NotFound.jsx
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div style={{ maxWidth: 500, margin: '0 auto', padding: 'var(--space-2xl)', textAlign: 'center' }}>
      <p style={{ fontSize: '3rem' }}>🔭</p>
      <h1 style={{ margin: 'var(--space-md) 0' }}>404 — Not Found</h1>
      <p style={{ color: 'var(--color-text-secondary)', marginBottom: 'var(--space-xl)' }}>This page doesn't exist.</p>
      <Link to="/" style={{ color: 'var(--color-accent)' }}>← Back to Curriculum</Link>
    </div>
  )
}
