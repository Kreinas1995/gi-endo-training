// File: /src/components/content/DiagramSVG.jsx
export default function DiagramSVG({ children, title }) {
  return (
    <figure style={{ margin: 'var(--space-xl) 0', textAlign: 'center' }}>
      {children}
      {title && <figcaption style={{ marginTop: 'var(--space-sm)', color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>{title}</figcaption>}
    </figure>
  )
}
