// ELos: Initial Buildout (No API Calls)
// Core functionality using content scripts, UI injection, local/sessionStorage, and system message logic.

//////////////////////////////////////
// 1. Manifest.json (Manifest V3)
//////////////////////////////////////

// Place in public/manifest.json
{
  "manifest_version": 3,
  "name": "ELos",
  "version": "0.1",
  "description": "The God OS for governing ChatGPT behavior via command UI",
  "permissions": ["storage", "scripting", "activeTab"],
  "host_permissions": ["https://chat.openai.com/*"],
  "action": { "default_popup": "popup.html", "default_icon": "icon.png" },
  "background": { "service_worker": "background.js" },
  "content_scripts": [
    {
      "matches": ["https://chat.openai.com/*"],
      "js": ["content.js"],
      "css": ["styles.css"]
    }
  ]
}

//////////////////////////////////////
// 2. content.js
//////////////////////////////////////

// Injects ! command listener and UI overlay logic
const insertCommandUI = () => {
  if (document.getElementById('elos-command-ui')) return;

  const input = document.querySelector('textarea');
  if (!input) return;

  const ui = document.createElement('div');
  ui.id = 'elos-command-ui';
  ui.style.position = 'absolute';
  ui.style.bottom = '60px';
  ui.style.left = '10px';
  ui.style.zIndex = '9999';
  ui.style.background = '#111';
  ui.style.color = '#fff';
  ui.style.padding = '8px';
  ui.style.borderRadius = '8px';
  ui.style.fontFamily = 'monospace';
  ui.style.display = 'none';

  const suggestions = document.createElement('div');
  suggestions.id = 'elos-suggestions';
  ui.appendChild(suggestions);

  document.body.appendChild(ui);

  const showSuggestions = (commandPrefix) => {
    const commands = ['!help', '!mode', '!memory', '!canvas', '!onboard'];
    const filtered = commands.filter(cmd => cmd.startsWith(commandPrefix));
    suggestions.innerHTML = filtered.map(cmd => `<div>${cmd}</div>`).join('');
    ui.style.display = filtered.length ? 'block' : 'none';
  };

  document.addEventListener('keyup', (e) => {
    const textarea = document.querySelector('textarea');
    const val = textarea?.value;
    if (val?.startsWith('!')) showSuggestions(val);
    else ui.style.display = 'none';
  });
};

const observer = new MutationObserver(() => insertCommandUI());
observer.observe(document.body, { childList: true, subtree: true });

//////////////////////////////////////
// 3. popup.html (for tier setting)
//////////////////////////////////////

/*
<!DOCTYPE html>
<html>
  <head><style>body{font-family:sans-serif;padding:10px}</style></head>
  <body>
    <h2>ELos Control Panel</h2>
    <label>Tier:
      <select id="tier">
        <option value="beginner">Beginner</option>
        <option value="intermediate">Intermediate</option>
        <option value="pro">Pro</option>
      </select>
    </label>
    <script>
      const select = document.getElementById('tier');
      select.value = localStorage.getItem('elos-tier') || 'beginner';
      select.onchange = () => localStorage.setItem('elos-tier', select.value);
    </script>
  </body>
</html>
*/

//////////////////////////////////////
// 4. styles.css
//////////////////////////////////////

#elos-command-ui div:hover {
  background-color: #333;
  cursor: pointer;
}

//////////////////////////////////////
// 5. background.js
//////////////////////////////////////

// (Empty for now, no API calls needed)

//////////////////////////////////////
// 6. Optional Logic: Tier-Based Suggestions
//////////////////////////////////////

// In content.js, augment showSuggestions():
const tier = localStorage.getItem('elos-tier') || 'beginner';
const tieredCommands = {
  beginner: ['!help', '!onboard'],
  intermediate: ['!help', '!onboard', '!mode', '!canvas'],
  pro: ['!help', '!onboard', '!mode', '!canvas', '!memory']
};
const filtered = tieredCommands[tier].filter(cmd => cmd.startsWith(commandPrefix));