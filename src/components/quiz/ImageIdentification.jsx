// File: /src/components/quiz/ImageIdentification.jsx
// Stub — click-to-label image quiz type
export default function ImageIdentification({ question, answer, selected }) {
  return (
    <div>
      <p>{question.stem}</p>
      {question.image && <img src={question.image} alt="Identify the structure" style={{ maxWidth: '100%', borderRadius: 'var(--radius-md)' }} />}
      <p style={{ color: 'var(--color-text-muted)', fontStyle: 'italic' }}>[Image identification interaction — coming soon]</p>
    </div>
  )
}
