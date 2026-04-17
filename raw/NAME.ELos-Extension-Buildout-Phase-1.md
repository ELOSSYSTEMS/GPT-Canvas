// ====================================================
// ELos Chrome Extension – Phase 1 (Beginner Tier Build)
// No API. Local build for behavior + UI test
// ====================================================

// ---------- manifest.json ----------
{
  "manifest_version": 3,
  "name": "ELos",
  "version": "1.0",
  "description": "Beginner Tier of ELos OS – Onboarding, Commands & Core Personas",
  "action": {
    "default_popup": "popup.html",
    "default_icon": {
      "16": "icons/icon16.png",
      "48": "icons/icon48.png",
      "128": "icons/icon128.png"
    }
  },
  "permissions": ["scripting", "activeTab", "storage"],
  "host_permissions": ["https://chat.openai.com/*", "https://chatgpt.com/*", "https://chat.com/*"],
  "background": {
    "service_worker": "background.js"
  },
  "content_scripts": [
    {
      "matches": ["https://chat.openai.com/*", "https://chatgpt.com/*", "https://chat.com/*"],
      "js": ["content.js"],
      "css": ["styles.css"]
    }
  ]
}

// ---------- content.js ----------
(function () {
  const COMMANDS = ['!help', '!overview', '!tour'];
  const wandId = 'elos-magic-wand';

  function injectWandButton() {
    if (document.getElementById(wandId)) return;

    const target = document.querySelector('form textarea');
    if (!target) return;

    const wandBtn = document.createElement('button');
    wandBtn.id = wandId;
    wandBtn.textContent = '✦';
    wandBtn.title = 'ELos Magic Wand';
    wandBtn.className = 'elos-wand-btn';

    wandBtn.onclick = (e) => {
      e.preventDefault();
      showCommandMenu();
    };

    target.parentElement.appendChild(wandBtn);
  }

  function showCommandMenu() {
    const menu = document.createElement('div');
    menu.className = 'elos-command-menu';
    COMMANDS.forEach(cmd => {
      const btn = document.createElement('button');
      btn.className = 'elos-command';
      btn.textContent = cmd;
      btn.onclick = () => injectCommand(cmd);
      menu.appendChild(btn);
    });
    document.body.appendChild(menu);
  }

  function injectCommand(cmd) {
    const textarea = document.querySelector('form textarea');
    if (textarea) {
      textarea.value = cmd;
      textarea.dispatchEvent(new Event('input', { bubbles: true }));
    }
  }

  const observer = new MutationObserver(() => {
    injectWandButton();
  });

  observer.observe(document.body, { childList: true, subtree: true });
})();

// ---------- styles.css ----------
#elos-magic-wand {
  position: absolute;
  right: 40px;
  top: 10px;
  font-size: 18px;
  background: white;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 4px 8px;
  cursor: pointer;
}

.elos-command-menu {
  position: fixed;
  bottom: 80px;
  right: 20px;
  background: white;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
  padding: 8px;
  z-index: 9999;
}

.elos-command {
  display: block;
  margin: 6px 0;
  padding: 6px 12px;
  background: #f4f4f4;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

// ---------- popup.html ----------
<!DOCTYPE html>
<html>
  <head>
    <style>
      body {
        font-family: sans-serif;
        padding: 10px;
      }
    </style>
  </head>
  <body>
    <h3>ELos OS – Beginner Mode</h3>
    <p>Use the Magic Wand ✦ in the ChatGPT input to explore commands.</p>
  </body>
</html>

// ---------- background.js ----------
chrome.runtime.onInstalled.addListener(() => {
  console.log('ELos Extension installed');
});