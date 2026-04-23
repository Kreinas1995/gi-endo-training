// File: /src/hooks/useQuiz.js
import { useState } from 'react'

export function useQuiz(questions = []) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [answers, setAnswers] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const answer = (questionId, value) => setAnswers(prev => ({ ...prev, [questionId]: value }))
  const next = () => setCurrentIndex(i => Math.min(i + 1, questions.length - 1))
  const prev = () => setCurrentIndex(i => Math.max(i - 1, 0))
  const submit = () => setSubmitted(true)
  const reset = () => { setCurrentIndex(0); setAnswers({}); setSubmitted(false) }

  const score = questions.filter(q => answers[q.id] === q.correct).length

  return { currentIndex, answers, submitted, score, answer, next, prev, submit, reset, current: questions[currentIndex] }
}
