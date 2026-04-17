// =====================================================
// ELos – Visual Tier Preview System (No Hard Gating)
// Phase 1: Free Tier fully unlocked, Pro features styled only
// =====================================================

// ---------- Purpose ----------
// Show Pro features as grayed out or styled UI without blocking access
// Provide visual cues and tooltips
// Passive usage tracking for future monetization

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

// ---------- 2. Passive Usage Tracking ----------
function incrementUsageCounter(key) {
  const today = new Date().toISOString().slice(0, 10);
  const usageKey = `elos_usage_${today}_${key}`;
  let count = parseInt(localStorage.getItem(usageKey) || '0');
  count++;
  localStorage.setItem(usageKey, count);
  return count;
}

function incrementStreak() {
  const today = new Date().toISOString().slice(0, 10);
  const lastDay = localStorage.getItem('elos_last_active_day');
  let streak = parseInt(localStorage.getItem('elos_streak') || '0');

  if (lastDay === today) return streak;
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

// ---------- 3. Styles (styles.css) ----------
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
*/

// ---------- 4. Future-Proofing ----------
// All pro-labeled features remain usable
// You can later activate gating logic using usage counters + streaks
// No upgrade prompts appear in this version

// ---------- Usage Example ----------
// styleProFeature(document.getElementById('motherly-mode-btn'), 'Pro');
// incrementUsageCounter('commandsUsed');
// const streak = incrementStreak();