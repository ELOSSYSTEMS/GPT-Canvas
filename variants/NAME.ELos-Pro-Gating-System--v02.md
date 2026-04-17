// =====================================================
// ELos – Pro Gating System (for Chrome Extension)
// Handles feature locking, upgrade prompts, usage limits
// =====================================================

// ---------- Structure ----------
// 1. Gating Rules by Tier
// 2. Gate Check Logic (content.js)
// 3. UI Prompts (Upgrade modal)
// 4. Settings / Tier Persistence
// 5. Dynamic Usage Tracking

// ---------- 1. Gating Rules ----------
const GATING_RULES = {
  free: {
    allowedCommands: ['!help', '!overview', '!tour'],
    maxPersonas: 1,
    memoryAccess: false,
    journaling: false,
    behaviorModes: false,
    usageLimits: {
      commandsPerDay: 10,
      personaSwitchesPerDay: 3
    }
  },
  pro: {
    allowedCommands: 'all',
    maxPersonas: 'unlimited',
    memoryAccess: true,
    journaling: true,
    behaviorModes: true,
    usageLimits: null
  }
};

// ---------- 2. Gate Check Logic ----------
function isFeatureAllowed(featureKey) {
  const tier = localStorage.getItem('elos_user_tier') || 'free';
  const rules = GATING_RULES[tier];
  return rules[featureKey] === true || rules[featureKey] === 'all';
}

function gateCommand(command) {
  const tier = localStorage.getItem('elos_user_tier') || 'free';
  const rules = GATING_RULES[tier];
  if (rules.allowedCommands === 'all') return true;
  return rules.allowedCommands.includes(command);
}

// ---------- 3. UI: Upgrade Modal ----------
function showUpgradePrompt(reason) {
  const modal = document.createElement('div');
  modal.className = 'elos-upgrade-modal';
  modal.innerHTML = `
    <div class="elos-upgrade-content">
      <h2>ELos Pro Feature</h2>
      <p>This feature is part of the Pro tier.</p>
      <p><strong>Reason:</strong> ${reason}</p>
      <button id="upgrade-btn">Upgrade Now</button>
    </div>
  `;
  document.body.appendChild(modal);
  document.getElementById('upgrade-btn').onclick = () => {
    window.open('https://elos.app/upgrade', '_blank');
  };
}

// ---------- 4. Settings & Persistence ----------
// To simulate upgrade
// localStorage.setItem('elos_user_tier', 'pro');
// To reset
// localStorage.removeItem('elos_user_tier');

// ---------- 5. Dynamic Usage Tracking ----------
function incrementUsageCounter(key) {
  const today = new Date().toISOString().slice(0, 10);
  const usageKey = `elos_usage_${today}_${key}`;
  let count = parseInt(localStorage.getItem(usageKey) || '0');
  count++;
  localStorage.setItem(usageKey, count);
  return count;
}

function checkUsageLimit(key) {
  const tier = localStorage.getItem('elos_user_tier') || 'free';
  const rules = GATING_RULES[tier];
  if (!rules.usageLimits || !rules.usageLimits[key]) return true;

  const today = new Date().toISOString().slice(0, 10);
  const usageKey = `elos_usage_${today}_${key}`;
  const count = parseInt(localStorage.getItem(usageKey) || '0');

  return count < rules.usageLimits[key];
}

// ---------- Styles (styles.css) ----------
/*
.elos-upgrade-modal {
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(0,0,0,0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}
.elos-upgrade-content {
  background: white;
  padding: 24px;
  border-radius: 12px;
  text-align: center;
  max-width: 320px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.25);
}
*/

// ---------- Usage Example ----------
// if (!isFeatureAllowed('memoryAccess')) showUpgradePrompt('Accessing memory simulation');
// if (!gateCommand('!plan')) showUpgradePrompt('Using !plan command');
// if (!checkUsageLimit('commandsPerDay')) showUpgradePrompt('Daily command limit reached');
// incrementUsageCounter('commandsPerDay');