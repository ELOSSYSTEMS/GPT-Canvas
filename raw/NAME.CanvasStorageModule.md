// 🧠 CanvasStorage.js — Local Canvas Saver for ELos Extension

const CANVAS_STORAGE_KEY = 'elos_canvas_storage';

/**
 * Save a canvas to localStorage
 * @param {string} id - Unique ID of the canvas
 * @param {string} content - The full stringified content of the canvas
 */
export function saveCanvas(id, content) {
  const all = loadAllCanvases();
  all[id] = content;
  localStorage.setItem(CANVAS_STORAGE_KEY, JSON.stringify(all));
}

/**
 * Load a specific canvas by ID
 * @param {string} id
 * @returns {string|null}
 */
export function loadCanvas(id) {
  const all = loadAllCanvases();
  return all[id] || null;
}

/**
 * Load all canvases from localStorage
 * @returns {Object}
 */
export function loadAllCanvases() {
  const raw = localStorage.getItem(CANVAS_STORAGE_KEY);
  return raw ? JSON.parse(raw) : {};
}

/**
 * Delete a canvas by ID
 * @param {string} id
 */
export function deleteCanvas(id) {
  const all = loadAllCanvases();
  delete all[id];
  localStorage.setItem(CANVAS_STORAGE_KEY, JSON.stringify(all));
}

/**
 * Export all canvases as downloadable .json
 */
export function exportCanvases() {
  const blob = new Blob([JSON.stringify(loadAllCanvases(), null, 2)], {
    type: 'application/json'
  });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'elos_canvases_backup.json';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

/**
 * Import canvases from a .json file
 * @param {File} file
 * @returns {Promise<void>}
 */
export async function importCanvases(file) {
  const text = await file.text();
  localStorage.setItem(CANVAS_STORAGE_KEY, text);
}
