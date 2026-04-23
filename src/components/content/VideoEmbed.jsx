// File: /src/components/content/VideoEmbed.jsx
export default function VideoEmbed({ youtubeId, title }) {
  return (
    <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: 'var(--radius-md)' }}>
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${youtubeId}`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
      />
    </div>
  )
}
