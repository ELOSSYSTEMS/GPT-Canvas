// ==UserScript==
// @name         ELOS Sidebar Drawer
// @namespace    http://tampermonkey.net/
// @version      0.4
// @description  Adds a toggleable ELOS sidebar to ChatGPT with dynamic canvas loading
// @match        *://chatgpt.com/*
// @run-at       document-idle
// @grant        none
// ==/UserScript==

(function () {
  const toggleId = "elos-toggle-btn";
  let isOpen = false;

  function createCanvasSection() {
    const container = document.createElement("details");
    container.style.padding = "10px 15px";
    container.style.borderTop = "1px solid #ddd";
    container.open = true;

    const summary = document.createElement("summary");
    summary.textContent = "📂 Canvases";
    summary.style.cursor = "pointer";
    container.appendChild(summary);

    const canvasList = document.createElement("div");
    canvasList.style.marginTop = "8px";
    canvasList.style.fontSize = "13px";

    let canvases = [];
    try {
      canvases = JSON.parse(localStorage.getItem("elos.canvases")) || [];
    } catch (e) {
      canvases = [];
    }

    if (canvases.length === 0) {
      canvases = [
        { id: "AO.001.RBI", title: "Bootloader Index", content: "Canvas for bootloading ELOS modules." },
        { id: "EL.420.HBR", title: "Hebrew Rewrite Engine", content: "Handles Hebrew prompt translation and rewrite logic." },
        { id: "AO.910.PRM.LIB", title: "Prompt Library Master", content: "Structured prompt vault categorized by use case." }
      ];
    }

    canvases.forEach(({ id, title, content }) => {
      const item = document.createElement("div");
      item.style.cursor = "pointer";
      item.style.marginBottom = "6px";
      item.style.fontWeight = "600";
      item.textContent = `📘 ${title}`;

      const preview = document.createElement("div");
      preview.style.display = "none";
      preview.style.padding = "6px";
      preview.style.background = "#eee";
      preview.style.border = "1px solid #ccc";
      preview.style.marginTop = "4px";
      preview.style.whiteSpace = "pre-wrap";
      preview.style.fontSize = "12px";
      preview.textContent = content;

      item.addEventListener("click", () => {
        preview.style.display = preview.style.display === "none" ? "block" : "none";
      });

      canvasList.appendChild(item);
      canvasList.appendChild(preview);
    });

    container.appendChild(canvasList);
    return container;
  }

  function createStaticSection(title, content) {
    return `
      <details style="padding: 10px 15px; border-top: 1px solid #ddd;">
        <summary>${title}</summary>
        <div style="margin-top: 8px;">${content}</div>
      </details>`;
  }

  function mountSidebar() {
    const flexContainer = document.querySelector("div.relative.flex.h-full.w-full.flex-row");
    if (!flexContainer || document.getElementById("elos-sidebar")) return;

    const sidebar = document.createElement("div");
    sidebar.id = "elos-sidebar";
    sidebar.style.cssText = `
      height: 100%;
      width: 0;
      min-width: 0;
      background-color: #f7f7f7;
      color: black;
      font-family: system-ui, sans-serif;
      transition: width 0.3s, min-width 0.3s;
      z-index: 9999;
      display: flex;
      flex-direction: column;
      overflow-y: auto;
      pointer-events: none;
      user-select: none;
    `;

    const content = document.createElement("div");
    content.innerHTML = `<div style="padding: 12px; font-weight: bold; font-size: 16px;">🧬 ELOS SYSTEM</div>`;

    content.appendChild(createCanvasSection());
    content.innerHTML += createStaticSection('📚 Prompt Library', 'Placeholder for prompts');
    content.innerHTML += createStaticSection('🧠 Prompt Protocol', 'Prompt rewriting explanation');
    content.innerHTML += createStaticSection('🌐 Translate Protocol', 'Translate flow info');
    content.innerHTML += createStaticSection('🎓 ELOS Academy', 'Usage guide + onboarding');

    sidebar.appendChild(content);
    flexContainer.appendChild(sidebar);
  }

  function toggleSidebar() {
    const sidebar = document.getElementById("elos-sidebar");
    if (!sidebar) return;
    isOpen = !isOpen;
    sidebar.style.width = isOpen ? "260px" : "0";
    sidebar.style.minWidth = isOpen ? "260px" : "0";
    sidebar.style.pointerEvents = isOpen ? "auto" : "none";
    sidebar.style.userSelect = isOpen ? "auto" : "none";
  }

  function addToggleBtn() {
    if (!document.getElementById(toggleId)) {
      const btn = document.createElement("div");
      btn.id = toggleId;
      btn.innerText = "🌿";
      btn.title = "Toggle ELOS";
      btn.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        font-size: 28px;
        background: white;
        border: 1px solid #ccc;
        border-radius: 50%;
        width: 44px;
        height: 44px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        z-index: 10001;
        box-shadow: 0 2px 8px rgba(0,0,0,0.2);
      `;
      btn.addEventListener("click", toggleSidebar);
      document.body.appendChild(btn);
    }
  }

  const observer = new MutationObserver(() => {
    addToggleBtn();
    mountSidebar();
  });

  observer.observe(document.body, { childList: true, subtree: true });
})();