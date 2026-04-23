// File: /src/hooks/useProgress.js
import { useState, useEffect } from 'react'

const STORAGE_KEY = 'gi-endo-progress'
const defaultProgress = {
  completedModules: [],
  quizScores: {},
  lastVisited: null,
}

export function useProgress() {
  const [progress, setProgress] = useState(defaultProgress)

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      if (saved) setProgress(JSON.parse(saved))
    } catch (e) {}
  }, [])

  const saveProgress = (updated) => {
    setProgress(updated)
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(updated)) } catch (e) {}
  }

  const markModuleComplete = (moduleId) => {
    if (progress.completedModules.includes(moduleId)) return
    saveProgress({ ...progress, completedModules: [...progress.completedModules, moduleId], lastVisited: moduleId })
  }

  const recordQuizScore = (moduleId, score, total) => {
    saveProgress({ ...progress, quizScores: { ...progress.quizScores, [moduleId]: { score, total, date: new Date().toISOString() } } })
  }

  const setLastVisited = (moduleId) => saveProgress({ ...progress, lastVisited: moduleId })
  const resetProgress = () => saveProgress(defaultProgress)
  const isModuleComplete = (moduleId) => progress.completedModules.includes(moduleId)
  const isModuleUnlocked = (moduleId, prerequisites = []) =>
    prerequisites.length === 0 || prerequisites.every(id => progress.completedModules.includes(id))

  return { progress, markModuleComplete, recordQuizScore, setLastVisited, resetProgress, isModuleComplete, isModuleUnlocked }
}
