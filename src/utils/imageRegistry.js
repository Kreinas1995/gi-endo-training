// File: /src/utils/imageRegistry.js
let registry = null

export async function getImageRegistry() {
  if (registry) return registry
  const res = await fetch('/gi-endo-training/data/image-registry.json')
  registry = await res.json()
  return registry
}

export async function lookupImage(filename) {
  const reg = await getImageRegistry()
  return reg.images?.find(img => img.filename === filename) || null
}
