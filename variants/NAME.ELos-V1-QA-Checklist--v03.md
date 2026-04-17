// Folder Structure:
// /elos-v1/
// ├── manifest.json
// ├── content.js
// ├── styles.css
// ├── popup.html
// ├── popup.js
// ├── background.js (stub)
// ├── storage.js

/* ========================= */
/* manifest.json */
/* ========================= */
{
  "manifest_version": 3,
  "name": "ELos – Chrome OS for ChatGPT",
  "version": "1.0",
  "description": "Tiered assistant OS layer with personas, commands, and UI injection.",
  "permissions": ["storage", "scripting", "activeTab"],
  "host_permissions": ["https://chatgpt.com/*", "https://chat.com/*"],
  "action": {
    "default_popup": "popup.html",
    "default_icon": {
      "16": "icons/elos16.png",
      "48": "icons/elos48.png",
      "128": "icons/elos128.png"
    }
  },
  "background": {
    "service_worker": "background.js"
  },
  "content_scripts": [
    {
      "matches": ["https://chatgpt.com/*", "https://chat.com/*"],
      "js": ["content.js"],
      "css": ["styles.css"]
    }
  ]
}

/* ========================= */
/* content.js */
/* ========================= */
const tier = sessionStorage.getItem("elos-tier") || "beginner";
const personas = {
  beginner: ["Librarian", "Scribe", "Auditor", "Guide", "Governor"],
  intermediate: [...],
  pro: [...]
};

function injectToggleAndWizard() {
  const sidebar = document.querySelector("nav");
  if (!sidebar || document.querySelector("#elos-toggle")) return;

  const toggle = document.createElement("div");
  toggle.id = "elos-toggle";
  toggle.innerText = `ELos (${tier})`;
  toggle.className = `elos-toggle-${tier}`;
  toggle.onclick = () => alert("Toggle activated");
  sidebar.prepend(toggle);

  const inputBar = document.querySelector("form textarea");
  if (!inputBar) return;

  const wizard = document.createElement("div");
  wizard.id = "elos-wizard";
  wizard.title = "Wizard Help";
  wizard.innerText = "🧙‍♂️";
  wizard.onclick = () => alert("Wizard open");
  inputBar.parentElement.appendChild(wizard);

  const academy = document.createElement("div");
  academy.id = "elos-academy";
  academy.innerText = "ELos Academy";
  academy.className = "elos-academy-entry";
  academy.onclick = () => alert("Academy UI Launch");
  sidebar.appendChild(academy);
}

const observer = new MutationObserver(injectToggleAndWizard);
observer.observe(document.body, { childList: true, subtree: true });

/* ========================= */
/* styles.css */
/* ========================= */
#elos-toggle {
  padding: 6px;
  margin-bottom: 10px;
  cursor: pointer;
  border-radius: 4px;
  font-weight: bold;
  text-align: center;
}
.elos-toggle-beginner {
  background: white;
  color: black;
}
.elos-toggle-intermediate {
  background: lightblue;
  color: black;
}
.elos-toggle-pro {
  background: gold;
  color: black;
}
#elos-wizard {
  position: absolute;
  right: 50px;
  bottom: 8px;
  font-size: 20px;
  cursor: pointer;
}
.elos-academy-entry {
  margin-top: 12px;
  padding: 5px;
  font-size: 14px;
  background: #f4f4f4;
  color: #333;
  text-align: center;
  cursor: pointer;
  border-radius: 4px;
  font-weight: 500;
}

/* ========================= */
/* popup.html */
/* ========================= */
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: sans-serif; padding: 10px; }
    button { display: block; margin: 10px 0; }
  </style>
</head>
<body>
  <h2>ELos Tier Select</h2>
  <button onclick="setTier('beginner')">Beginner</button>
  <button onclick="setTier('intermediate')">Intermediate</button>
  <button onclick="setTier('pro')">Pro</button>
  <hr>
  <button onclick="launchAcademy()">Launch ELos Academy</button>
  <script src="popup.js"></script>
</body>
</html>

/* ========================= */
/* popup.js */
/* ========================= */
function setTier(tier) {
  chrome.storage.local.set({ "elos-tier": tier }, () => {
    alert(`Tier set to ${tier}`);
  });
}

function launchAcademy() {
  alert("ELos Academy UI coming soon...");
}

/* ========================= */
/* background.js (stub) */
/* ========================= */
// Reserved for future API interactions, cloud sync, usage tracking, etc.

/* ========================= */
/* storage.js */
/* ========================= */
export function getTier(callback) {
  chrome.storage.local.get("elos-tier", (result) => {
    callback(result["elos-tier"] || "beginner");
  });
}

export function setTier(tier) {
  chrome.storage.local.set({ "elos-tier": tier });
}