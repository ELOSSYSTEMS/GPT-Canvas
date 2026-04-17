// == ELos content.js ==
// Phase 1: Toggle in Sidebar, Wizard in Chat Input

const STORAGE_KEY = 'elos-active';
const TIER_KEY = 'elos-tier';

// Default tier fallback
const getCurrentTier = () => sessionStorage.getItem(TIER_KEY) || 'beginner';

// -------------------- INIT --------------------
function initELos() {
  injectSidebarToggle(); // Inject toggle + logo into sidebar
  observeChatInput();    // Watch chat input area for Wizard injection
}

// -------------------- SIDEBAR TOGGLE --------------------
function injectSidebarToggle() {
  const sidebar = document.querySelector('nav');
  if (!sidebar || document.getElementById('elos-sidebar-toggle')) return;

  const container = document.createElement('div');
  container.id = 'elos-sidebar-toggle';
  container.style.display = 'flex';
  container.style.alignItems = 'center';
  container.style.justifyContent = 'space-between';
  container.style.padding = '8px 12px';
  container.style.cursor = 'pointer';

  const logo = document.createElement('img');
  logo.src = chrome.runtime.getURL('icons/elos-logo.png');
  logo.alt = 'ELos Logo';
  logo.style.width = '20px';

  const label = document.createElement('span');
  label.innerText = isELosActive() ? 'ELos Active' : 'ELos Off';
  label.style.marginLeft = '8px';
  label.style.color = '#ffffff';
  label.style.fontSize = '13px';

  container.appendChild(logo);
  container.appendChild(label);
  sidebar.prepend(container);

  container.onclick = () => {
    const newState = !isELosActive();
    sessionStorage.setItem(STORAGE_KEY, newState);
    label.innerText = newState ? 'ELos Active' : 'ELos Off';
    if (newState) injectWizardInline(); else removeWizard();
  };
}

function isELosActive() {
  return sessionStorage.getItem(STORAGE_KEY) === 'true';
}

// -------------------- CHAT INPUT: WIZARD --------------------
function injectWizardInline() {
  const inputArea = document.querySelector('[class*="text-input-area"]');
  if (!inputArea || document.getElementById('elos-wizard-inline')) return;

  const tier = getCurrentTier();
  const wizard = document.createElement('div');
  wizard.id = 'elos-wizard-inline';
  wizard.className = 'elos-wizard-inline';
  wizard.title = 'Click to open ELos command menu';

  const icon = document.createElement('img');
  icon.src = getIconForTier(tier);
  icon.style.width = '20px';
  icon.style.height = '20px';

  wizard.appendChild(icon);
  wizard.onclick = () => showCommandMenuForTier(tier); // placeholder

  inputArea.appendChild(wizard);
}

function removeWizard() {
  const el = document.getElementById('elos-wizard-inline');
  if (el) el.remove();
}

// -------------------- TIER ICON --------------------
function getIconForTier(tier) {
  return {
    beginner: chrome.runtime.getURL('icons/wizard-white.png'),
    intermediate: chrome.runtime.getURL('icons/wizard-blue.png'),
    pro: chrome.runtime.getURL('icons/wizard-gold.png')
  }[tier] || chrome.runtime.getURL('icons/wizard-white.png');
}

// -------------------- OBSERVER --------------------
function observeChatInput() {
  const observer = new MutationObserver(() => {
    if (isELosActive()) injectWizardInline();
  });
  observer.observe(document.body, { childList: true, subtree: true });
}

// -------------------- START --------------------
window.addEventListener('load', () => {
  setTimeout(initELos, 1000); // allow DOM to settle
});