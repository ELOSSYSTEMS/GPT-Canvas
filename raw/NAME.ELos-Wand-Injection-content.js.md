// ELos Wand Injection Script (content.js)
// Injects the ELos logo toggle into the chatbox bar, left of mic icon

(function injectWand() {
  const TIER_COLORS = {
    beginner: '#FFFFFF', // white
    intermediate: '#007BFF', // blue
    pro: '#FFD700' // gold
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
    // Placeholder: replace with actual panel rendering logic
    alert(`ELos Panel Opened – Tier: ${getTier()}`);
  };

  const insertWand = () => {
    const interval = setInterval(() => {
      const chatbox = document.querySelector('form textarea')?.parentElement;
      const micIcon = chatbox?.querySelector('button');
      if (chatbox && micIcon && !document.getElementById('elos-wand-toggle')) {
        const wand = createWandButton();
        chatbox.insertBefore(wand, micIcon);
        clearInterval(interval);
      }
    }, 500);
  };

  // Re-inject on route change using MutationObserver
  const observer = new MutationObserver(() => {
    if (!document.getElementById('elos-wand-toggle')) {
      insertWand();
    }
  });

  observer.observe(document.body, { childList: true, subtree: true });

  // Initial inject
  insertWand();
})();