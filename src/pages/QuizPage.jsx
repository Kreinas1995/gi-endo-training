// File: /src/pages/QuizPage.jsx
import { useParams, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useProgress } from '@hooks/useProgress'
import QuizEngine from '@components/quiz/QuizEngine'
import curriculum from '@data/curriculum.json'

export default function QuizPage() {
  const { moduleId } = useParams()
  const { markModuleComplete, recordQuizScore } = useProgress()
  const [questions, setQuestions] = useState([])
  const mod = curriculum.modules.find(m => m.id === moduleId)

  useEffect(() => {
    import(`../data/quizzes/quiz-${moduleId}.json`)
      .then(m => setQuestions(m.default.questions || []))
      .catch(() => setQuestions([]))
  }, [moduleId])

  if (!mod) return <div style={{ padding: 'var(--space-xl)' }}>Module not found. <Link to="/">← Home</Link></div>

  return (
    <div style={{ maxWidth: 700, margin: '0 auto', padding: 'var(--space-xl)' }}>
      <Link to={`/module/${moduleId}`} style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>← Back to Module</Link>
      <h1 style={{ margin: 'var(--space-lg) 0', fontSize: '1.4rem' }}>Quiz: {mod.title}</h1>
      {questions.length === 0
        ? <p style={{ color: 'var(--color-text-muted)', fontStyle: 'italic' }}>Quiz questions coming soon for this module.</p>
        : <QuizEngine questions={questions} onComplete={() => markModuleComplete(moduleId)} />}
    </div>
  )
}
