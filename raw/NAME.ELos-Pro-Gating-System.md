// =====================================================
// ELos – Visual Tier Preview System (No Hard Gating)
// Phase 1: Free Tier fully unlocked, Pro features styled only
// =====================================================

// ---------- Purpose ----------
// Show Pro features as grayed out or styled UI without blocking access
// Provide visual cues and tooltips
// Passive usage tracking (internal use only)

// ---------- 1. Visual Cues for Pro Features ----------
function styleProFeature(element, label = 'Pro') {
  element.classList.add('elos-pro-preview');
  element.setAttribute('data-pro-label', label);
  element.title = `This is a ${label} feature. Available in the Pro tier.`;
}

// Example usage in DOM:
// const btn = document.createElement('button');
// btn.textContent = 'Motherly Mode';
// styleProFeature(btn);
// document.body.appendChild(btn);

// ---------- 2. Passive Usage Tracking (Internal Only) ----------
function incrementUsageCounter(key) {
  const today = new Date().toISOString().slice(0, 10);
  const usageKey = `elos_usage_${today}_${key}`;
  let count = parseInt(localStorage.getItem(usageKey) || '0');
  count++;
  localStorage.setItem(usageKey, count);
  return count;
}

// ---------- 3. Basic "Who I Am" Profile (Free Tier Level) ----------
function getBasicUserProfile() {
  return {
    personalityType: 'Reflective Explorer',
    interactionStyle: 'Curious and directive',
    traits: ['Focused', 'Self-improving', 'Likes control']
  };
}

function displayBasicUserProfile() {
  const profile = getBasicUserProfile();
  const panel = document.createElement('div');
  panel.className = 'elos-profile-basic';
  panel.innerHTML = `
    <h3>Who You Are (ELos Free Tier)</h3>
    <p><strong>Type:</strong> ${profile.personalityType}</p>
    <p><strong>Style:</strong> ${profile.interactionStyle}</p>
    <p><strong>Traits:</strong> ${profile.traits.join(', ')}</p>
  `;
  document.body.appendChild(panel);
}

// ---------- 4. Styles (styles.css) ----------
/*
.elos-pro-preview {
  opacity: 0.5;
  position: relative;
  cursor: default;
}
.elos-pro-preview::after {
  content: attr(data-pro-label);
  position: absolute;
  top: -6px;
  right: -6px;
  background: gold;
  color: black;
  font-size: 10px;
  padding: 2px 4px;
  border-radius: 4px;
  font-weight: bold;
  pointer-events: none;
}

.elos-profile-basic {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background: #fff;
  border: 1px solid #ccc;
  padding: 12px;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.2);
  z-index: 10000;
}
*/

// ---------- 5. Future-Proofing ----------
// All pro-labeled features remain visible but non-functional in Free tier
// Usage counters are for internal monitoring and throttle control only
// No gamification, streaks, rewards, or incentives

// ---------- Usage Example ----------
// styleProFeature(document.getElementById('motherly-mode-btn'), 'Pro');
// incrementUsageCounter('commandsUsed');
// displayBasicUserProfile();