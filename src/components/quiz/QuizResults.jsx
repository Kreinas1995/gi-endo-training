// File: /src/components/quiz/QuizResults.jsx
export default function QuizResults({ quiz, onReset, onComplete }) {
  const pct = Math.round((quiz.score / quiz.current?.length ?? 1) * 100)
  const passed = pct >= 80
  return (
    <div style={{ textAlign: 'center', padding: 'var(--space-2xl)' }}>
      <h2 style={{ color: passed ? 'var(--color-success)' : 'var(--color-danger)' }}>
        {passed ? '✅ Passed!' : '❌ Not yet'}
      </h2>
      <p style={{ fontSize: '2rem', margin: 'var(--space-md) 0' }}>{pct}%</p>
      <div style={{ display: 'flex', gap: 'var(--space-md)', justifyContent: 'center', marginTop: 'var(--space-lg)' }}>
        <button onClick={onReset}>Try Again</button>
        {passed && onComplete && <button onClick={onComplete} style={{ background: 'var(--color-success)', color: '#fff' }}>Mark Complete</button>}
      </div>
    </div>
  )
}
