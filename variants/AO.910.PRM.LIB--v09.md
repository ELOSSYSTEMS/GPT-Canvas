// ==UserScript==
// @name         ELOS Sidebar Drawer
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  Injects ELOS Sidebar into ChatGPT UI with Prompt Library support
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
      injectToggleButton();
      injectELOS();
    }
  }, 500);

  function injectToggleButton() {
    if (document.getElementById('elos-toggle')) return;

    const button = document.createElement('button');
    button.id = 'elos-toggle';
    button.innerText = '🧬';
    button.style = `
      position: fixed;
      bottom: 20px;
      right: 20px;
      z-index: 99999;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      border: none;
      background: #333;
      color: white;
      font-size: 18px;
      box-shadow: 0 0 10px rgba(0,0,0,0.3);
      cursor: pointer;
    `;

    button.addEventListener('click', () => {
      const sidebar = document.getElementById('elos-sidebar');
      if (sidebar) sidebar.style.display = sidebar.style.display === 'none' ? 'block' : 'none';
    });

    document.body.appendChild(button);
  }

  function injectELOS() {
    if (document.getElementById('elos-sidebar')) return;

    const sidebar = document.createElement('div');
    sidebar.id = 'elos-sidebar';
    sidebar.style = `
      position: fixed;
      top: 0;
      right: 0;
      width: 260px;
      height: 100vh;
      background-color: #f7f7f7;
      border-left: 1px solid #ccc;
      box-shadow: -2px 0 5px rgba(0,0,0,0.1);
      z-index: 9999;
      overflow-y: auto;
      font-family: inherit;
      padding-bottom: 30px;
    `;

    sidebar.innerHTML = `
      <div style="padding: 12px; font-weight: bold; font-size: 16px;">🧬 ELOS SYSTEM</div>
      ${createSection('📂 Canvases', 'Placeholder for canvases')}
      ${buildPromptLibrary()}
      ${createSection('🧠 Prompt Protocol', 'Prompt rewriting explanation')}
      ${createSection('🌐 Translate Protocol', 'Translate flow info')}
      ${createSection('🎓 ELOS Academy', 'Usage guide + onboarding')}
    `;

    document.body.appendChild(sidebar);
    console.log("📦 ELOS Sidebar successfully injected");
  }

  function createSection(title, content) {
    return `
      <details style="padding: 10px 15px; border-top: 1px solid #ddd;">
        <summary>${title}</summary>
        <div style="margin-top: 8px;">${content}</div>
      </details>
    `;
  }

  function buildPromptLibrary() {
    let promptHTML = '';
    try {
      const prompts = JSON.parse(localStorage.getItem("elos.prompts")) || {};
      Object.keys(prompts).forEach(category => {
        promptHTML += `
          <details style="padding: 8px 15px; border-top: 1px solid #eee;">
            <summary><strong>${category}</strong></summary>
            <ul style="list-style:none; padding-left: 10px;">
              ${prompts[category].map(p => `
                <li style="margin: 6px 0;">
                  <div style="font-weight: 500;">${p.title}</div>
                  <button onclick="navigator.clipboard.writeText(\`${p.prompt.replace(/`/g, '\`')}\`)" style="margin-top: 3px; font-size: 12px;">📋 Copy</button>
                </li>
              `).join('')}
            </ul>
          </details>
        `;
      });
    } catch (e) {
      promptHTML = '<div style="color: red;">⚠️ Failed to load prompts.</div>';
    }
    return createSection('📚 Prompt Library', promptHTML);
  }
})();