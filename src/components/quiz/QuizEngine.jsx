// File: /src/components/quiz/QuizEngine.jsx
import { useQuiz } from '@hooks/useQuiz'
import MultipleChoice from './MultipleChoice'
import QuizResults from './QuizResults'

export default function QuizEngine({ questions = [], onComplete }) {
  const quiz = useQuiz(questions)
  if (!quiz.current) return <p>No questions available.</p>
  if (quiz.submitted) return <QuizResults quiz={quiz} onReset={quiz.reset} onComplete={onComplete} />
  return (
    <div>
      <p style={{ color: 'var(--color-text-muted)', marginBottom: 'var(--space-sm)' }}>
        Question {quiz.currentIndex + 1} of {questions.length}
      </p>
      {quiz.current.type === 'multiple-choice' && <MultipleChoice question={quiz.current} answer={quiz.answer} selected={quiz.answers[quiz.current.id]} />}
      <div style={{ display: 'flex', gap: 'var(--space-md)', marginTop: 'var(--space-lg)' }}>
        {quiz.currentIndex > 0 && <button onClick={quiz.prev}>← Back</button>}
        {quiz.currentIndex < questions.length - 1
          ? <button onClick={quiz.next} disabled={!quiz.answers[quiz.current.id]}>Next →</button>
          : <button onClick={quiz.submit} disabled={!quiz.answers[quiz.current.id]}>Submit</button>}
      </div>
    </div>
  )
}
