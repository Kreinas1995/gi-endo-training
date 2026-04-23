// File: /src/pages/Home.jsx
import { Link } from 'react-router-dom'
import { useProgress } from '@hooks/useProgress'
import Badge from '@components/ui/Badge'
import ProgressBar from '@components/layout/ProgressBar'
import curriculum from '@data/curriculum.json'

const TIER_LABELS = { 1: 'Foundation', 2: 'Basic Procedures', 3: 'Intermediate', 4: 'Advanced', 5: 'Mastery' }

export default function Home() {
  const { progress, isModuleComplete, isModuleUnlocked } = useProgress()
  const completed = progress.completedModules.length
  const total = curriculum.modules.length

  const tiers = [1, 2, 3, 4, 5]

  return (
    <div style={{ maxWidth: 'var(--content-max-width)', margin: '0 auto', padding: 'var(--space-xl)' }}>
      <header style={{ marginBottom: 'var(--space-2xl)' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 600, color: 'var(--color-primary)' }}>GI Endoscopy Technician Training</h1>
        <p style={{ color: 'var(--color-text-secondary)', marginTop: 'var(--space-sm)' }}>
          Zero to job-ready. {completed} of {total} modules complete.
        </p>
        <div style={{ marginTop: 'var(--space-md)' }}>
          <ProgressBar value={completed} max={total} label="Overall progress" />
        </div>
      </header>

      {tiers.map(tier => {
        const modules = curriculum.modules.filter(m => m.tier === tier)
        return (
          <section key={tier} style={{ marginBottom: 'var(--space-2xl)' }}>
            <h2 style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-sm)', marginBottom: 'var(--space-lg)', fontSize: '1.1rem', fontWeight: 600, color: 'var(--color-text-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              <Badge label={`Tier ${tier}`} tier={tier} /> {TIER_LABELS[tier]}
            </h2>
            <div style={{ display: 'grid', gap: 'var(--space-md)' }}>
              {modules.map(mod => {
                const complete = isModuleComplete(mod.id)
                const unlocked = isModuleUnlocked(mod.id, mod.prerequisites)
                return (
                  <div key={mod.id} style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', padding: 'var(--space-lg)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', opacity: unlocked ? 1 : 0.5 }}>
                    <div>
                      <span style={{ color: 'var(--color-text-muted)', fontSize: '0.8rem', fontFamily: 'var(--font-mono)' }}>MODULE {String(mod.number).padStart(2, '0')}</span>
                      <h3 style={{ marginTop: 2, fontSize: '1rem' }}>{mod.title}</h3>
                      {complete && <span style={{ color: 'var(--color-success)', fontSize: '0.85rem' }}>✅ Complete</span>}
                      {!unlocked && <span style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem' }}>🔒 Locked</span>}
                    </div>
                    {unlocked && (
                      <div style={{ display: 'flex', gap: 'var(--space-sm)' }}>
                        <Link to={`/module/${mod.id}`} style={{ padding: '6px 14px', background: 'var(--color-primary)', color: '#fff', borderRadius: 'var(--radius-sm)', fontSize: '0.85rem' }}>Study</Link>
                        <Link to={`/quiz/${mod.id}`} style={{ padding: '6px 14px', background: 'var(--color-accent)', color: '#fff', borderRadius: 'var(--radius-sm)', fontSize: '0.85rem' }}>Quiz</Link>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </section>
        )
      })}

      <section style={{ display: 'flex', gap: 'var(--space-md)', flexWrap: 'wrap', marginTop: 'var(--space-xl)' }}>
        <Link to="/capstone/basic" style={{ padding: 'var(--space-md) var(--space-xl)', background: 'var(--tier-2)', color: '#fff', borderRadius: 'var(--radius-md)', fontWeight: 600 }}>🎓 Basic Capstone</Link>
        <Link to="/capstone/advanced" style={{ padding: 'var(--space-md) var(--space-xl)', background: 'var(--tier-4)', color: '#fff', borderRadius: 'var(--radius-md)', fontWeight: 600 }}>🎓 Advanced Capstone</Link>
        <Link to="/glossary" style={{ padding: 'var(--space-md) var(--space-xl)', background: 'var(--color-surface)', color: 'var(--color-text)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)' }}>📖 Glossary</Link>
        <Link to="/equipment" style={{ padding: 'var(--space-md) var(--space-xl)', background: 'var(--color-surface)', color: 'var(--color-text)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)' }}>🔬 Equipment Ref</Link>
      </section>
    </div>
  )
}
