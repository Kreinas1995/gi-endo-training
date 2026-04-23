// File: /src/components/ui/Badge.jsx
const TIER_COLORS = { 1: 'var(--tier-1)', 2: 'var(--tier-2)', 3: 'var(--tier-3)', 4: 'var(--tier-4)', 5: 'var(--tier-5)' }

export default function Badge({ label, tier, variant = 'tier' }) {
  const bg = variant === 'tier' ? TIER_COLORS[tier] || 'var(--color-accent)' : 'var(--color-accent)'
  return (
    <span style={{ display: 'inline-block', background: bg, color: '#fff', borderRadius: 'var(--radius-sm)', padding: '2px 10px', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.03em' }}>
      {label}
    </span>
  )
}
