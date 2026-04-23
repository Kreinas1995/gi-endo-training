// File: /src/utils/markdownParser.js
// Utility for loading module .md files — content loaded via Vite's ?raw import
export function extractTitle(markdown) {
  const match = markdown.match(/^#\s+(.+)/m)
  return match ? match[1] : 'Module'
}
