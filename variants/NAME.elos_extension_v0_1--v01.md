// ELOS EXTENSION v0.1 – BASE STRUCTURE
// Manifest v3 + Vanilla JS + DOM Injection

/* === manifest.json === */
{
  "manifest_version": 3,
  "name": "ELOS Extension",
  "version": "0.1",
  "description": "Canvas + Prompt Library sidebar for ChatGPT (no API calls)",
  "permissions": ["storage", "scripting", "activeTab"],
  "action": {
    "default_popup": "popup.html",
    "default_icon": {
      "16": "icons/icon16.png",
      "48": "icons/icon48.png",
      "128": "icons/icon128.png"
    }
  },
  "background": {
    "service_worker": "background.js"
  },
  "content_scripts": [
    {
      "matches": ["*://chat.openai.com/*", "*://chatgpt.com/*"],
      "js": ["content.js"],
      "css": ["styles.css"]
    }
  ],
  "host_permissions": ["*://chat.openai.com/*", "*://chatgpt.com/*"]
}

/* === content.js === */
function waitForElm(selector) {
  return new Promise(resolve => {
    if (document.querySelector(selector)) return resolve(document.querySelector(selector));
    const observer = new MutationObserver(() => {
      if (document.querySelector(selector)) {
        resolve(document.querySelector(selector));
        observer.disconnect();
      }
    });
    observer.observe(document.body, { childList: true, subtree: true });
  });
}

(async () => {
  const target = await waitForElm('body');

  // Insert ELOS button
  const elosBtn = document.createElement('div');
  elosBtn.id = 'elos-btn';
  elosBtn.innerText = '📚';
  elosBtn.title = 'Open ELOS Sidebar';
  target.appendChild(elosBtn);

  // Insert sidebar container
  const sidebar = document.createElement('div');
  sidebar.id = 'elos-sidebar';
  sidebar.innerHTML = `
    <div id="elos-header">ELOS OS v0.1</div>
    <div class="elos-section">📂 Canvases</div>
    <div class="elos-section">🧠 Prompt Library</div>
    <div class="elos-section">🎓 ELOS Academy</div>
  `;
  target.appendChild(sidebar);

  // Toggle logic
  elosBtn.addEventListener('click', () => {
    sidebar.classList.toggle('elos-open');
  });
})();

/* === styles.css === */
#elos-btn {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background: #10a37f;
  color: white;
  padding: 10px;
  border-radius: 50%;
  cursor: pointer;
  z-index: 9999;
  box-shadow: 0 4px 12px rgba(0,0,0,0.2);
}

#elos-sidebar {
  position: fixed;
  top: 0;
  right: -300px;
  width: 300px;
  height: 100vh;
  background: #f9f9f9;
  border-left: 1px solid #ccc;
  transition: right 0.3s ease-in-out;
  z-index: 9998;
  font-family: sans-serif;
}

#elos-sidebar.elos-open {
  right: 0;
}

#elos-header {
  padding: 15px;
  font-weight: bold;
  background: #10a37f;
  color: white;
}

.elos-section {
  padding: 12px 15px;
  border-bottom: 1px solid #ddd;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
}

/* === popup.html (optional launcher) === */
<!DOCTYPE html>
<html>
  <head><title>ELOS Popup</title></head>
  <body><h3>ELOS OS</h3><p>Active</p></body>
</html>

/* === background.js === */
chrome.runtime.onInstalled.addListener(() => {
  console.log('ELOS Extension v0.1 Installed');
});