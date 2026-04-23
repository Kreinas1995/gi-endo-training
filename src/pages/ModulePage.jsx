// File: /src/pages/ModulePage.jsx
import { useParams, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useProgress } from '@hooks/useProgress'
import ModuleViewer from '@components/content/ModuleViewer'
import curriculum from '@data/curriculum.json'

export default function ModulePage() {
  const { moduleId } = useParams()
  const { setLastVisited, markModuleComplete, isModuleComplete } = useProgress()
  const [content, setContent] = useState('')
  const mod = curriculum.modules.find(m => m.id === moduleId)

  useEffect(() => {
    if (moduleId) setLastVisited(moduleId)
    // Modules are loaded as raw text via dynamic import
    import(`../content/modules/${moduleId}.md?raw`)
      .then(m => setContent(m.default))
      .catch(() => setContent(`# ${mod?.title || moduleId}\n\n[MODULE CONTENT — COMING SOON]\n\nThis module is under development. Check back soon.`))
  }, [moduleId])

  if (!mod) return <div style={{ padding: 'var(--space-xl)' }}>Module not found. <Link to="/">← Home</Link></div>

  return (
    <div style={{ maxWidth: 'var(--content-max-width)', margin: '0 auto', padding: 'var(--space-xl)' }}>
      <Link to="/" style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>← Back to Curriculum</Link>
      <ModuleViewer content={content} />
      <div style={{ marginTop: 'var(--space-2xl)', display: 'flex', gap: 'var(--space-md)', flexWrap: 'wrap' }}>
        {!isModuleComplete(moduleId) && (
          <button onClick={() => markModuleComplete(moduleId)} style={{ background: 'var(--color-success)', color: '#fff', border: 'none', padding: 'var(--space-md) var(--space-xl)', borderRadius: 'var(--radius-md)', cursor: 'pointer', fontWeight: 600 }}>
            ✅ Mark as Complete
          </button>
        )}
        <Link to={`/quiz/${moduleId}`} style={{ padding: 'var(--space-md) var(--space-xl)', background: 'var(--color-accent)', color: '#fff', borderRadius: 'var(--radius-md)', fontWeight: 600 }}>
          Take Quiz →
        </Link>
      </div>
    </div>
  )
}
