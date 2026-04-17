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
// 6. Cooldowns + Streak Incentives

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
    },
    cooldowns: {
      '!tour': 3600 // seconds = 1 hour
    }
  },
  pro: {
    allowedCommands: 'all',
    maxPersonas: 'unlimited',
    memoryAccess: true,
    journaling: true,
    behaviorModes: true,
    usageLimits: null,
    cooldowns: null
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

// ---------- 6. Cooldowns + Streak Incentives ----------
function isCooldownActive(command) {
  const tier = localStorage.getItem('elos_user_tier') || 'free';
  const rules = GATING_RULES[tier];
  if (!rules.cooldowns || !rules.cooldowns[command]) return false;

  const lastUseKey = `elos_cooldown_${command}`;
  const lastTimestamp = parseInt(localStorage.getItem(lastUseKey) || '0');
  const now = Math.floor(Date.now() / 1000);

  return now - lastTimestamp < rules.cooldowns[command];
}

function setCooldown(command) {
  const now = Math.floor(Date.now() / 1000);
  localStorage.setItem(`elos_cooldown_${command}`, now);
}

function incrementStreak() {
  const today = new Date().toISOString().slice(0, 10);
  const lastDay = localStorage.getItem('elos_last_active_day');
  let streak = parseInt(localStorage.getItem('elos_streak') || '0');

  if (lastDay === today) return streak; // already counted today
  const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);

  if (lastDay === yesterday) {
    streak++;
  } else {
    streak = 1;
  }

  localStorage.setItem('elos_last_active_day', today);
  localStorage.setItem('elos_streak', streak);
  return streak;
}

// ---------- Usage Example ----------
// if (!isFeatureAllowed('memoryAccess')) showUpgradePrompt('Accessing memory simulation');
// if (!gateCommand('!plan')) showUpgradePrompt('Using !plan command');
// if (!checkUsageLimit('commandsPerDay')) showUpgradePrompt('Daily command limit reached');
// if (isCooldownActive('!tour')) showUpgradePrompt('You can only use !tour once per hour');
// incrementUsageCounter('commandsPerDay');
// setCooldown('!tour');
// const streak = incrementStreak(); // Optional: show bonus for active streak