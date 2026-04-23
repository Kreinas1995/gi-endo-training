// File: /src/components/layout/ProgressBar.jsx
export default function ProgressBar({ value = 0, max = 100, label }) {
  const pct = Math.round((value / max) * 100)
  return (
    <div role="progressbar" aria-valuenow={pct} aria-valuemin={0} aria-valuemax={100} aria-label={label}>
      <div style={{ background: 'var(--color-surface-alt)', borderRadius: 'var(--radius-sm)', height: 8, overflow: 'hidden' }}>
        <div style={{ width: `${pct}%`, height: '100%', background: 'var(--color-accent)', transition: 'width 0.3s ease' }} />
      </div>
      {label && <span style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>{label}: {pct}%</span>}
    </div>
  )
}
