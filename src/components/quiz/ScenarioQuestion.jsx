// File: /src/components/quiz/ScenarioQuestion.jsx
export default function ScenarioQuestion({ question, answer, selected }) {
  return (
    <div>
      <p style={{ fontWeight: 500 }}>{question.stem}</p>
      <p style={{ color: 'var(--color-text-muted)', fontStyle: 'italic' }}>[Scenario question — extend MultipleChoice with context panel]</p>
    </div>
  )
}
