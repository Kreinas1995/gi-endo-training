// File: /src/components/layout/Sidebar.jsx
export default function Sidebar({ children }) {
  return <aside style={{ width: 'var(--sidebar-width)', padding: 'var(--space-lg)' }}>{children}</aside>
}
