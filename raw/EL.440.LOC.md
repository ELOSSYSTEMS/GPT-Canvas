## ELos Feature Map – Local-Only Viable Implementation

### 🧭 Scope
This document defines all features that can be implemented **without external API calls**, allowing full functionality of the **Beginner tier** and most of **Intermediate tier** to operate **offline or locally** within a browser extension.

---

## ✅ Local-Only Feasible Features

### 🔰 Beginner Tier
- Phase-based Tree of Knowledge onboarding (color-shifting leaves)
- Interactive UI panels for each menu item (memory, voice, etc.)
- Access to all Phase 1 and 2 content (loaded locally)
- Local canvas creation via form inputs or prompts
- Beginner Academy content (stored as `.json` / `.txt` assets)
- LocalStorage or IndexedDB-based state persistence
- Leaf unlock tracking (per menu item, per user device)
- Memory simulation prompts (e.g., “remember this preference”)
- Tone setting + behavioral adjustment previewer
- Visual transitions (white → blue → gold) with CSS states

---

### 🪜 Intermediate Tier (Local-Only Scope)
- Canvas Explorer UI: file-style view, create/rename/delete
- Canvas tagging, pinning, and color-labeling
- Drag-and-drop or list view organization
- Read-only persona cards (selectable, non-editable)
- Persona-linked canvases (1:1 association)
- Basic Builder Tools:
  - Tone Builder Lite
  - Prompt-to-Canvas converter
  - Manual “store this chat as canvas” action
- Intermediate Academy access (static, local)
- Persona preview toggles in UI
- Local validation of Intermediate Unlock conditions
- Gating of Pro-level features (visually present, disabled)

---

## ⚠️ Features Requiring API Integration (Not Local-Only)
- Cross-device sync
- Account-based memory persistence
- Persona editing and chaining (requires server state management)
- Collaborative canvas sharing
- Canvas dependency mapping
- Usage analytics and adaptive scaffolding
- Secure payment handling and tier verification
- AI-generated Academy content or recommendations

---

## 🛠 Developer Considerations
- All data stored via `localStorage` or `IndexedDB`
- No external requests during onboarding or daily use
- Updates to Academy content must be bundled into extension updates
- Extension permissions limited to: `activeTab`, `storage`, `scripting`, and UI injection to ChatGPT domain
- All UI overlays should inject **only inside the ChatGPT chat interface**

---

## 🧱 System Integrity Check (What We’ve Built So Far)
| Component                          | Local Viable? | Notes                                   |
|------------------------------------|----------------|-----------------------------------------|
| Tree of Knowledge onboarding       | ✅ Yes         | Fully UI-driven, static content          |
| Phase-based menu unlocks           | ✅ Yes         | Driven by local event logging            |
| Beginner Academy                   | ✅ Yes         | Static docs rendered in-extension        |
| Memory guide + simulation prompts  | ✅ Yes         | Pseudomemory via local storage           |
| Intermediate unlock logic          | ✅ Yes         | Milestone tracking in browser            |
| Canvas creation & explorer UI      | ✅ Yes         | Fully local file simulation              |
| Preset persona usage (read-only)   | ✅ Yes         | Stored locally, non-editable             |
| Pro feature gating (UI only)       | ✅ Yes         | Present but inactive                     |
| Full persona logic & recursion     | ❌ No          | Requires server orchestration            |
| Payment and upgrade verification   | ❌ No          | External Stripe/Auth integration needed  |

---

## ✅ Verdict
The Beginner tier and most of Intermediate tier can be fully implemented in a **local-only architecture**, allowing for:
- Fast rollout
- App store approval
- Offline use
- Zero backend dependency during MVP

System design is on track.
No retroactive rollback required.

---

→ Canvas ID: `EL.440.LOC`
→ Linked from: `EL.400.ARC` (Architect), `EL.420.UNL` (Unlock Logic), `EL.410.UIX` (UX System Map)