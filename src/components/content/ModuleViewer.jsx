// File: /src/components/content/ModuleViewer.jsx
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

export default function ModuleViewer({ content }) {
  if (!content) return <p>Loading content...</p>
  return (
    <div className="module-content" style={{ maxWidth: 'var(--content-max-width)', margin: '0 auto', padding: 'var(--space-xl)' }}>
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
    </div>
  )
}
