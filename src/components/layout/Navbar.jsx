// File: /src/components/layout/Navbar.jsx
import { Link, NavLink } from 'react-router-dom'
import { useAccessibility } from '@hooks/useAccessibility'
import styles from './Navbar.module.css'

export default function Navbar() {
  const { highContrast, toggleHighContrast } = useAccessibility()
  return (
    <nav className={styles.navbar}>
      <Link to="/" className={styles.brand}>🏥 GI Endo Training</Link>
      <div className={styles.links}>
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/glossary">Glossary</NavLink>
        <NavLink to="/equipment">Equipment</NavLink>
        <button onClick={toggleHighContrast} aria-label="Toggle high contrast">
          {highContrast ? '☀️' : '🌙'}
        </button>
      </div>
    </nav>
  )
}
