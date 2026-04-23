// File: /src/components/content/ImageViewer.jsx
// OpenSeadragon wrapper for zoomable annotated images
import { useEffect, useRef } from 'react'
import OpenSeadragon from 'openseadragon'

export default function ImageViewer({ src, alt }) {
  const containerRef = useRef(null)
  const viewerRef = useRef(null)

  useEffect(() => {
    if (!containerRef.current || !src) return
    viewerRef.current = OpenSeadragon({
      element: containerRef.current,
      tileSources: { type: 'image', url: src },
      showNavigator: false,
      showRotationControl: false,
    })
    return () => viewerRef.current?.destroy()
  }, [src])

  return <div ref={containerRef} style={{ width: '100%', height: 400 }} aria-label={alt} />
}
