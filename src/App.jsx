// File: /src/App.jsx
import { Routes, Route } from 'react-router-dom'
import Home from '@pages/Home'
import ModulePage from '@pages/ModulePage'
import QuizPage from '@pages/QuizPage'
import GlossaryPage from '@pages/GlossaryPage'
import EquipmentRef from '@pages/EquipmentRef'
import CapstoneBasic from '@pages/CapstoneBasic'
import CapstoneAdvanced from '@pages/CapstoneAdvanced'
import NotFound from '@pages/NotFound'
import Navbar from '@components/layout/Navbar'
import { useAccessibility } from '@hooks/useAccessibility'

export default function App() {
  const { highContrast } = useAccessibility()
  return (
    <div className={`app-root${highContrast ? ' high-contrast' : ''}`}>
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/module/:moduleId" element={<ModulePage />} />
          <Route path="/quiz/:moduleId" element={<QuizPage />} />
          <Route path="/glossary" element={<GlossaryPage />} />
          <Route path="/equipment" element={<EquipmentRef />} />
          <Route path="/capstone/basic" element={<CapstoneBasic />} />
          <Route path="/capstone/advanced" element={<CapstoneAdvanced />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  )
}
