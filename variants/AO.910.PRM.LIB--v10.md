// ==UserScript==
// @name         ELOS Sidebar Drawer
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  Injects ELOS Sidebar with dynamic prompt library
// @match        *://chatgpt.com/*
// @run-at       document-idle
// @grant        none
// ==/UserScript==

(function () {
  'use strict';
  console.log("✅ ELOS script started");

  const waitForChatGPT = setInterval(() => {
    if (document.querySelector('nav') && document.body) {
      clearInterval(waitForChatGPT);
      injectELOS();
    }
  }, 500);

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

    const promptLibraryHTML = buildPromptLibrary();

    elosSidebar.innerHTML = `
      <div style="padding: 12px; font-weight: bold; font-size: 16px;">🧬 ELOS SYSTEM</div>
      ${createSection('📂 Canvases', '[Placeholder for canvases]')}
      ${createSection('📚 Prompt Library', promptLibraryHTML)}
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
    console.log("📦 ELOS Sidebar successfully injected");
  }

  function buildPromptLibrary() {
    try {
      const prompts = JSON.parse(localStorage.getItem('elos.prompts')) || {};
      return Object.entries(prompts).map(([category, list]) => `
        <div style="margin-bottom: 8px;">
          <strong>${category}</strong>
          <ul style="margin: 5px 0 10px 15px;">
            ${list.map(p => `<li style="margin-bottom: 4px;">${p.title}</li>`).join('')}
          </ul>
        </div>
      `).join('');
    } catch (e) {
      return '<em>Failed to load prompt library.</em>';
    }
  }
})();