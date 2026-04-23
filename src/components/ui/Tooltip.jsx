// File: /src/components/ui/Tooltip.jsx
import { useState } from 'react'

export default function Tooltip({ children, text }) {
  const [show, setShow] = useState(false)
  return (
    <span style={{ position: 'relative', display: 'inline-block' }}
      onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
      {children}
      {show && <span style={{ position: 'absolute', bottom: '100%', left: '50%', transform: 'translateX(-50%)', background: '#222', color: '#fff', padding: '4px 8px', borderRadius: 4, fontSize: '0.8rem', whiteSpace: 'nowrap', zIndex: 10 }}>{text}</span>}
    </span>
  )
}
