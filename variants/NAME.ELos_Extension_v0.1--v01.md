// ==UserScript==
// @name         ELOS Extension v0.1 (Base)
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Injects ELOS Sidebar into ChatGPT with Canvas, Prompt Library, Academy, and Protocol Info
// @author       Allon
// @match        https://chat.openai.com/*
// @grant        none
// ==/UserScript==

(function() {
  'use strict';

  // Check if already injected
  if (document.getElementById('elos-sidebar')) return;

  const elosSidebar = document.createElement('div');
  elosSidebar.id = 'elos-sidebar';
  elosSidebar.style.position = 'fixed';
  elosSidebar.style.top = '0';
  elosSidebar.style.right = '0';
  elosSidebar.style.height = '100%';
  elosSidebar.style.width = '300px';
  elosSidebar.style.backgroundColor = '#f9f9f9';
  elosSidebar.style.borderLeft = '1px solid #ddd';
  elosSidebar.style.zIndex = '9999';
  elosSidebar.style.overflowY = 'auto';
  elosSidebar.style.fontFamily = 'sans-serif';
  elosSidebar.style.padding = '16px';
  elosSidebar.style.boxShadow = '0 0 10px rgba(0,0,0,0.1)';
  elosSidebar.innerHTML = `
    <h2>ELOS OS</h2>
    <details>
      <summary><strong>📂 Canvases</strong></summary>
      <p>All user-defined system canvases appear here. Activated via Bootloader.</p>
    </details>
    <details>
      <summary><strong>📚 Prompt Library</strong></summary>
      <p>Fireproofed prompts sorted by category. Search and inject manually.</p>
    </details>
    <details>
      <summary><strong>🎓 ELOS Academy</strong></summary>
      <p>Learn the philosophy and function of ELOS. Onboarding and protocol deep dives.</p>
    </details>
    <details>
      <summary><strong>🧠 ELOS Prompt Protocol</strong></summary>
      <p>This protocol rewrites, audits, and fireproofs any prompt. Auto-activated when using canvases via Bootloader.</p>
    </details>
    <details>
      <summary><strong>🌐 ELOS Translate Protocol</strong></summary>
      <p>Analyzes non-English prompts, rewrites in English, and returns fluent output in original language. Auto-runs inside Bootloader.</p>
    </details>
  `;

  document.body.appendChild(elosSidebar);
})();