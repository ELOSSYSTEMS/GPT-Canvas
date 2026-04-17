// ELos Extension – Build Phase 1 Bundle
// This canvas includes core logic for the initial browser extension foundation

///////////////////////////////
// 1. content.js (injection script)
///////////////////////////////

(function injectWand() {
  const TIER_COLORS = {
    beginner: '#FFFFFF',
    intermediate: '#007BFF',
    pro: '#FFD700'
  };

  const getTier = () => {
    return sessionStorage.getItem('elosTier') || 'beginner';
  };

  const createWandButton = () => {
    const wand = document.createElement('div');
    wand.id = 'elos-wand-toggle';
    wand.style.cssText = `
      width: 28px;
      height: 28px;
      margin-right: 8px;
      border-radius: 4px;
      background-color: ${TIER_COLORS[getTier()]};
      background-image: url('https://your-cdn.com/elos-logo.svg');
      background-repeat: no-repeat;
      background-size: 18px;
      background-position: center;
      cursor: pointer;
    `;
    wand.title = `ELos – ${getTier()} tier`;
    wand.addEventListener('click', openTierPanel);
    return wand;
  };

  const openTierPanel = () => {
    alert(`ELos Panel Opened – Tier: ${getTier()}`);
  };

  const interval = setInterval(() => {
    const micIcon = document.querySelector('[data-testid="send-button"]');
    if (micIcon && !document.getElementById('elos-wand-toggle')) {
      const wand = createWandButton();
      micIcon.parentNode.insertBefore(wand, micIcon);
      clearInterval(interval);
    }
  }, 500);
})();


///////////////////////////////
// 2. manifest.json (basic)
///////////////////////////////

/*
{
  "manifest_version": 3,
  "name": "ELos",
  "version": "0.1",
  "description": "ELos Tier-based Assistant UI",
  "permissions": ["storage", "scripting"],
  "host_permissions": ["https://chat.openai.com/*"],
  "action": {
    "default_popup": "popup.html",
    "default_icon": "icon.png"
  },
  "background": {
    "service_worker": "background.js"
  },
  "content_scripts": [
    {
      "matches": ["https://chat.openai.com/*"],
      "js": ["content.js"]
    }
  ]
}
*/