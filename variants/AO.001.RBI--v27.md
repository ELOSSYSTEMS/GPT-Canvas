// ==UserScript==
// @name         ELOS Sidebar Drawer [Canvas Index Loaded]
// @namespace    http://tampermonkey.net/
// @version      0.4
// @description  Injects ELOS Sidebar with canvas index from AO.001.RBI
// @match        *://chatgpt.com/*
// @run-at       document-idle
// @grant        none
// ==/UserScript==

(function () {
  'use strict';
  console.log("✅ ELOS script started");

  function createCanvasSection() {
    const index = JSON.parse(localStorage.getItem('elos.index') || '{}');
    const canvases = JSON.parse(localStorage.getItem('elos.canvases') || '{}');

    if (!Object.keys(index).length) {
      return '<div>No canvases found in AO.001.RBI</div>';
    }

    return Object.entries(index).map(([category, list]) => {
      const rendered = list.map(c => {
        const preview = canvases[c.id]?.content || 'No preview available';
        const sanitized = preview.replace(/</g, '&lt;').replace(/>/g, '&gt;');
        return `
          <li style="margin-bottom: 6px;">
            <div style="font-weight: bold; cursor: pointer;" onclick="
              const next = this.nextElementSibling;
              next.style.display = next.style.display === 'block' ? 'none' : 'block';">
              📘 ${c.title} (${c.id})
            </div>
            <div style="display:none; background:#222; color:#ccc; font-size:12px; padding:6px; margin-top:4px; white-space:pre-wrap; border-left:2px solid #555;">
              ${sanitized}
            </div>
          </li>
        `;
      }).join('');

      return `
        <details style="padding: 10px 15px; border-top: 1px solid #333;">
          <summary style="font-weight: bold; font-size: 14px;">📂 ${category}</summary>
          <ul style="margin-top: 10px; padding-left: 15px;">
            ${rendered}
          </ul>
        </details>
      `;
    }).join('');
  }

  function injectELOS() {
    if (document.getElementById('elos-sidebar')) return;

    const elosSidebar = document.createElement('div');
    elosSidebar.id = 'elos-sidebar';
    elosSidebar.style = `
      position: fixed;
      top: 0;
      right: 0;
      width: 300px;
      height: 100vh;
      background-color: #171717;
      color: white;
      border-left: 1px solid #444;
      box-shadow: -2px 0 5px rgba(0,0,0,0.5);
      z-index: 9999;
      overflow-y: auto;
      font-family: inherit;
      transform: translateX(100%);
      transition: transform 0.3s ease-in-out;
    `;

    const createSection = (title, content) => `
      <details style="padding: 10px 15px; border-top: 1px solid #333;">
        <summary>${title}</summary>
        <div style="margin-top: 8px;">${content}</div>
      </details>
    `;

    elosSidebar.innerHTML = `
      <div style="padding: 12px; font-weight: bold; font-size: 16px;">🧬 ELOS SYSTEM</div>
      ${createCanvasSection()}
      ${createSection('📚 Prompt Library', 'Loading from elos.prompts...')}
      ${createSection('🧠 Prompt Protocol', 'Prompt rewriting explanation')}
      ${createSection('🌐 Translate Protocol', 'Translate flow info')}
      ${createSection('🎓 ELOS Academy', 'Usage guide + onboarding')}
    `;

    const toggleBtn = document.createElement('div');
    toggleBtn.id = 'elos-toggle';
    toggleBtn.innerText = '🧬';
    toggleBtn.style = `
      position: fixed;
      bottom: 20px;
      right: 20px;
      width: 40px;
      height: 40px;
      background: #171717;
      color: white;
      font-size: 24px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      z-index: 10000;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
    `;

    toggleBtn.addEventListener('click', () => {
      const isOpen = elosSidebar.style.transform === 'translateX(0%)';
      elosSidebar.style.transform = isOpen ? 'translateX(100%)' : 'translateX(0%)';
    });

    document.body.appendChild(elosSidebar);
    document.body.appendChild(toggleBtn);
    console.log("📦 ELOS Sidebar with Canvas Index successfully injected");
  }

  if (document.readyState === "complete") {
    injectELOS();
  } else {
    window.addEventListener("load", injectELOS);
  }
})();