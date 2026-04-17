// Root Directory: /elos-extension/

// ========================
// manifest.json
// ========================
{
  "manifest_version": 3,
  "name": "ELos Cognitive OS",
  "version": "1.0",
  "description": "Tiered recursive cognitive operating system",
  "permissions": ["storage", "activeTab", "scripting"],
  "action": {
    "default_popup": "popup.html",
    "default_icon": "icons/elos-logo.svg"
  },
  "background": {
    "service_worker": "background.js"
  },
  "content_scripts": [
    {
      "matches": ["*://chat.openai.com/*", "*://chatgpt.com/*"],
      "js": ["content.js"]
    }
  ],
  "icons": {
    "16": "icons/elos-logo.svg",
    "48": "icons/elos-logo.svg",
    "128": "icons/elos-logo.svg"
  }
}

// ========================
// content.js
// ========================
import { injectWand } from './ui/wandToggle.js';
document.addEventListener('DOMContentLoaded', injectWand);

// ========================
// background.js
// ========================
chrome.runtime.onInstalled.addListener(() => {
  console.log("ELos Cognitive OS Installed");
});

// ========================
// popup.html
// ========================
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="styles/popup.css">
</head>
<body>
  <h1>ELos</h1>
  <p>Welcome to your Cognitive OS</p>
  <div id="command-menu"></div>
  <script type="module" src="popup.js"></script>
</body>
</html>

// ========================
// popup.js
// ========================
import { COMMANDS } from './commands/commandRegistry.js';

const menu = document.getElementById('command-menu');
for (const [cmd, data] of Object.entries(COMMANDS)) {
  const el = document.createElement('div');
  el.textContent = `${cmd}: ${data.description}`;
  menu.appendChild(el);
}

// ========================
// styles/popup.css
// ========================
body {
  font-family: sans-serif;
  padding: 10px;
}
#command-menu div {
  margin-bottom: 6px;
  cursor: pointer;
}

// ========================
// commands/commandRegistry.js
// ========================
export const COMMANDS = {
  "!overview": {
    description: "Get system overview",
    tier: "beginner",
    handler: () => alert("System Overview")
  },
  "!persona.load": {
    description: "Load a persona by name",
    tier: "intermediate",
    handler: (args) => alert(`Loaded persona: ${args}`)
  }
};

// ========================
// personas/librarian.js
// ========================
export function activate() {
  console.log("Librarian activated");
}
export function respond(input) {
  return `Librarian logs: ${input}`;
}
export function log(entry) {
  console.log(`Librarian log: ${entry}`);
}

// ========================
// Repeat for other personas
// personas/guide.js
export function activate() { console.log("Guide activated"); }
export function respond(input) { return `Guide says: ${input}`; }
export function log(entry) { console.log(`Guide log: ${entry}`); }

// personas/auditor.js
export function activate() { console.log("Auditor activated"); }
export function respond(input) { return `Auditor audits: ${input}`; }
export function log(entry) { console.log(`Audit: ${entry}`); }

// personas/scribe.js
export function activate() { console.log("Scribe activated"); }
export function respond(input) { return `Scribe writes: ${input}`; }
export function log(entry) { console.log(`Scribe log: ${entry}`); }

// personas/governor.js
export function activate() { console.log("Governor active"); }
export function respond(input) { return `Governor commands: ${input}`; }
export function log(entry) { console.log(`Governor log: ${entry}`); }

// ========================
// ui/wandToggle.js
// ========================
export function injectWand() {
  const TIER_COLORS = {
    beginner: '#FFFFFF',
    intermediate: '#007BFF',
    pro: '#FFD700'
  };

  const tier = sessionStorage.getItem('elosTier') || 'beginner';
  const wand = document.createElement('div');
  wand.id = 'elos-wand-toggle';
  wand.style.cssText = `
    width: 28px;
    height: 28px;
    margin-right: 8px;
    border-radius: 4px;
    background-color: ${TIER_COLORS[tier]};
    background-image: url('icons/elos-logo.svg');
    background-repeat: no-repeat;
    background-size: 18px;
    background-position: center;
    cursor: pointer;
  `;
  wand.title = `ELos – ${tier} tier`;
  wand.addEventListener('click', () => alert(`ELos Panel Opened – Tier: ${tier}`));

  const chatBar = document.querySelector('form textarea')?.parentElement;
  if (chatBar) {
    chatBar.insertBefore(wand, chatBar.querySelector('button'));
  }
}

// ========================
// ui/tierOverlay.js [stub]
// ========================
export function showTierOverlay() {
  // Future: overlay for tier transitions
}

// ========================
// ui/commandMenu.js [stub]
// ========================
export function openCommandMenu() {
  // Future: advanced command UI
}

// ========================
// utils/tierUtils.js
// ========================
export function getCurrentTier() {
  return sessionStorage.getItem('elosTier') || 'beginner';
}

export function setTier(tier) {
  sessionStorage.setItem('elosTier', tier);
}