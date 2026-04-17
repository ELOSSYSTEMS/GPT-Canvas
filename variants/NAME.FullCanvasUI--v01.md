// FullCanvasUI.js – Replaces CanvasStack.js
// Mounts a left sidebar with only "Canvas" section, dynamically listing saved canvases by category

import { loadAllCanvases, loadCanvas } from './canvasStorage.js';

function createSidebar() {
  const sidebar = document.createElement('div');
  sidebar.id = 'elos-canvas-sidebar';
  sidebar.style.cssText = `
    position: fixed;
    left: 0;
    top: 0;
    height: 100vh;
    width: 260px;
    background: #111;
    color: white;
    z-index: 9999;
    overflow-y: auto;
    font-family: sans-serif;
    border-right: 1px solid #333;
  `;

  const header = document.createElement('div');
  header.innerText = '🗂 Canvas';
  header.style.cssText = 'padding: 16px; font-size: 16px; font-weight: bold;';
  sidebar.appendChild(header);

  const canvasList = document.createElement('div');
  canvasList.id = 'elos-canvas-list';
  sidebar.appendChild(canvasList);

  document.body.appendChild(sidebar);
  renderCanvasList(canvasList);
}

function renderCanvasList(container) {
  const all = loadAllCanvases();

  // Group by category
  const grouped = {};
  Object.entries(all).forEach(([id, canvas]) => {
    const cat = canvas.category || 'Uncategorized';
    if (!grouped[cat]) grouped[cat] = [];
    grouped[cat].push({ id, ...canvas });
  });

  container.innerHTML = '';
  for (const category in grouped) {
    const group = grouped[category];

    const catEl = document.createElement('div');
    catEl.style.cssText = 'margin-top: 10px; padding: 8px; font-weight: bold; color: #66f;';
    catEl.textContent = category;
    container.appendChild(catEl);

    group.forEach(canvas => {
      const row = document.createElement('div');
      row.textContent = '📄 ' + canvas.title;
      row.style.cssText = 'padding: 6px 12px; cursor: pointer; font-size: 14px;';
      row.onclick = () => openCanvasActions(canvas);
      container.appendChild(row);
    });
  }
}

function openCanvasActions(canvas) {
  const overlay = document.createElement('div');
  overlay.style.cssText = `
    position: fixed;
    top: 10%;
    left: 20%;
    width: 60%;
    height: 70%;
    background: #1a1a1a;
    color: white;
    padding: 20px;
    z-index: 10000;
    overflow-y: auto;
    border: 2px solid #444;
    border-radius: 8px;
  `;

  const title = document.createElement('h2');
  title.innerText = canvas.title;
  overlay.appendChild(title);

  const area = document.createElement('textarea');
  area.style.cssText = 'width: 100%; height: 70%; background: #111; color: white; border: 1px solid #333; padding: 10px;';
  area.value = canvas.content;
  overlay.appendChild(area);

  const buttons = document.createElement('div');
  buttons.style.cssText = 'margin-top: 10px; text-align: right;';

  const paste = document.createElement('button');
  paste.innerText = '📋 Paste to Chat';
  paste.onclick = () => {
    const chatBox = document.querySelector('textarea');
    if (chatBox) {
      chatBox.value = area.value;
      chatBox.dispatchEvent(new Event('input', { bubbles: true }));
    }
  };

  const save = document.createElement('button');
  save.innerText = '💾 Save Changes';
  save.style.marginLeft = '8px';
  save.onclick = () => {
    window.CanvasStorage.saveCanvas(canvas.id, {
      ...canvas,
      content: area.value,
      lastUpdated: new Date().toISOString(),
    });
    alert('Canvas saved ✅');
  };

  const close = document.createElement('button');
  close.innerText = '❌ Close';
  close.style.marginLeft = '8px';
  close.onclick = () => overlay.remove();

  buttons.appendChild(paste);
  buttons.appendChild(save);
  buttons.appendChild(close);

  overlay.appendChild(buttons);
  document.body.appendChild(overlay);
}

// Mount UI
createSidebar();