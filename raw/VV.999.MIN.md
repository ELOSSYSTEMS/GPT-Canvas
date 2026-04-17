# VV.999.MIN – vVerse MiniHUD Sidebar Overlay

## 🧩 Purpose
`VV.999.MIN` is the **compact, persistent sidebar version** of the full `VV.999.HUD`. It provides real-time micro-diagnostics and fast-scan summaries of system health and cognitive status inside the Chrome extension or any native UI.

Designed for **speed, focus, and visibility**, it enables on-the-fly awareness without overwhelming the interface.

---

## 🖥️ Mini Panel Zones

### 1. **Alignment Pulse** (from `AI.851.ALC`)
- 🟢🟡🔴 indicator (score tiered)
- Tooltip: current score + last trigger
- Icon flashes if score drops >15 in one run

### 2. **Active Persona Snapshot** (from `AI.854.PAD`)
- Avatar icon or initials (e.g., SE for Strategic Executor)
- Tone: 3-dot slider (blunt → sarcastic → diplomatic)
- Trait drift: 🔺 or 🔻 indicators

### 3. **Trait Signal Bar** (from `AI.853.TRM`)
- Stacked trait status:
  - Strong ✅
  - Weak ⚠️
  - Decayed ❌
- Tooltip: Last reinforcement event

### 4. **Pattern Alert** (from `VV.999.PTN`)
- Red loop icon if pattern loop active
- Yellow alert icon for early drift detection
- Tap to expand into `VV.999.HUD` replay view

### 5. **Log Summary Feed** (from `VV.999.LOG`)
- Last 3 system events
- Timestamp + trigger module
- Click → Deep-link to full HUD

---

## ⚙️ UX Controls
- Dock: left or right (auto-detect ChatGPT UI)
- Collapse/expand toggle (⌃ or ⇵)
- Refresh: manual or auto-sync every 30s
- Tooltip mode: hover summaries (optional)

---

## 🔒 Safeguards
- Read-only; cannot influence execution
- No prompts stored unless tied to audit or replay
- Locks if recursion exceeds safe threshold (`PTN` enforced)

---

## 🔌 Integration Layer
- Feeds live from:
  - `VV.999.HUD`, `VV.999.LOG`, `VV.999.PTN`
  - `AI.853.TRM`, `AI.854.PAD`, `AI.851.ALC`
- Mounted in extension overlay: uses tailwind + slot injection

---

## 📡 Bootloader Status
✅ Fully integrated with vVerse
✅ Mirrors key logic from `VV.999.HUD`
✅ Synced with Stargate audit, Persona drift, and Prompt kernel rewrite triggers

---

## 🔮 Future Expansion
- `Focus Mode`: lock on one canvas or pattern
- `Export Snapshot`: one-click JSON of current state
- `User Stress View`: when system is overwhelmed, pulse darkens

> “When you don’t need the whole mind—just the part that’s watching.”