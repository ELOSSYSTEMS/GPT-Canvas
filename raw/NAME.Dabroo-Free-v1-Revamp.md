/* manifest.json */
{
  "manifest_version": 3,
  "name": "Dabroo Free",
  "version": "1.0.1",
  "description": "Injects Eden prompt via Dabroo toggle",
  "permissions": [
    "storage",
    "scripting",
    "activeTab"
  ],
  "host_permissions": [
    "https://chatgpt.com/*",
    "https://chat.com/*"
  ],
  "background": {
    "service_worker": "background.js"
  },
  "content_scripts": [
    {
      "matches": [
        "https://chatgpt.com/*",
        "https://chat.com/*"
      ],
      "js": ["content.js"],
      "css": ["style.css"]
    }
  ],
  "icons": {
    "16": "icons/icon16.png",
    "48": "icons/icon48.png",
    "128": "icons/icon128.png"
  }
}

/* background.js */
chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.local.set({ dabroo_active: false });
});

// Relay storage changes to all tabs
chrome.storage.onChanged.addListener((changes, area) => {
  if (area === 'local' && 'dabroo_active' in changes) {
    chrome.tabs.query({ url: ['https://chatgpt.com/*', 'https://chat.com/*'] }, tabs => {
      for (let tab of tabs) {
        chrome.tabs.sendMessage(tab.id, { type: 'TOGGLE_UPDATE', value: changes.dabroo_active.newValue });
      }
    });
  }
});

/* content.js */
(() => {
  const STORAGE_KEY = 'dabroo_active';
  let toggleBtn = null;
  let originalSendSVG = null;

  async function init() {
    // Capture initial state and send button
    const on = await readState();
    captureOriginalIcon();
    injectToggle(on);
    updateSendButton(on);
    listenForMutations();
    listenForMessages();
  }

  function captureOriginalIcon() {
    const sendBtn = document.querySelector('button[aria-label="Send"] svg');
    if (sendBtn) {
      originalSendSVG = sendBtn.cloneNode(true);
    }
  }

  function injectToggle(on) {
    if (toggleBtn) return;
    toggleBtn = document.createElement('button');
    toggleBtn.id = 'dabroo-toggle';
    toggleBtn.textContent = on ? 'דברו פעיל' : 'דברו לא פעיל';
    toggleBtn.classList.toggle('active', on);
    toggleBtn.addEventListener('click', toggleHandler);
    const container = document.body;
    container.appendChild(toggleBtn);
  }

  async function toggleHandler() {
    const on = !(await readState());
    await writeState(on);
    toggleBtn.textContent = on ? 'דברו פעיל' : 'דברו לא פעיל';
    toggleBtn.classList.toggle('active', on);
    updateSendButton(on);
  }

  async function updateSendButton(on) {
    const url = chrome.runtime.getURL('icons/logo-white-black-send.png');
    const sendBtn = document.querySelector('button[aria-label="Send"]');
    if (!sendBtn) return;
    // Replace icon
    const svg = sendBtn.querySelector('svg');
    if (on) {
      svg.remove();
      const img = document.createElement('img');
      img.src = url;
      img.alt = 'Dabroo';
      img.style.width = '16px';
      sendBtn.prepend(img);
    } else if (originalSendSVG) {
      const img = sendBtn.querySelector('img');
      if (img) img.remove();
      sendBtn.prepend(originalSendSVG.cloneNode(true));
    }
  }

  function listenForMutations() {
    const obs = new MutationObserver(() => {
      // Re-inject toggle if missing
      if (!document.getElementById('dabroo-toggle')) {
        readState().then(injectToggle);
      }
    });
    obs.observe(document.body, { childList: true, subtree: true });
  }

  function listenForMessages() {
    chrome.runtime.onMessage.addListener((msg) => {
      if (msg.type === 'TOGGLE_UPDATE') {
        const on = msg.value;
        toggleBtn.textContent = on ? 'דברו פעיל' : 'דברו לא פעיל';
        toggleBtn.classList.toggle('active', on);
        updateSendButton(on);
      }
    });
  }

  function readState() {
    return new Promise(resolve => {
      chrome.storage.local.get(STORAGE_KEY, res => {
        resolve(res[STORAGE_KEY] || false);
      });
    });
  }

  function writeState(value) {
    return new Promise(resolve => {
      chrome.storage.local.set({ [STORAGE_KEY]: value }, resolve);
    });
  }

  // Kickoff
  init();
})();

/* style.css */
#dabroo-toggle {
  position: fixed;
  bottom: 20px;
  right: 20px;
  padding: 8px 12px;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  background: #eee;
  color: #333;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0,0,0,0.2);
  z-index: 9999;
}

#dabroo-toggle.active {
  background: #0077cc;
  color: #fff;
}

button[aria-label="Send"] img {
  pointer-events: none;
}