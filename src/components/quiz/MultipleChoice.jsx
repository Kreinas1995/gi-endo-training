// File: /src/components/quiz/MultipleChoice.jsx
export default function MultipleChoice({ question, answer, selected }) {
  return (
    <div>
      <p style={{ fontWeight: 500, marginBottom: 'var(--space-md)' }}>{question.stem}</p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)' }}>
        {question.options.map((opt, i) => (
          <label key={i} style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-sm)', cursor: 'pointer', padding: 'var(--space-sm)', background: selected === opt ? 'var(--color-surface-alt)' : 'transparent', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)' }}>
            <input type="radio" name={question.id} value={opt} checked={selected === opt} onChange={() => answer(question.id, opt)} />
            {opt}
          </label>
        ))}
      </div>
    </div>
  )
}
