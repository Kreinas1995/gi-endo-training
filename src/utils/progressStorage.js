// File: /src/utils/progressStorage.js
const KEY = 'gi-endo-progress'
export const loadProgress = () => { try { return JSON.parse(localStorage.getItem(KEY)) || {} } catch { return {} } }
export const saveProgress = (data) => { try { localStorage.setItem(KEY, JSON.stringify(data)) } catch {} }
