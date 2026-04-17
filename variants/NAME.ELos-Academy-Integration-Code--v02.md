**Title**: *ELos v1 – QA & Debug Checklist*

---

### Purpose:
Ensure the first working version of ELos functions correctly before adding command logic and tier-based persona systems. All testing is done locally in Chrome.

---

## QA Checklist (Local Build)

### ✅ 1. Extension Load
- [ ] `Load unpacked` in Chrome → `/elos-v1/`
- [ ] No errors in **Extensions panel**
- [ ] No red flags in **Console logs**

---

### ✅ 2. Toggle Injection
- [ ] ELos toggle appears **top-left of sidebar**
- [ ] Label reads: `ELos (beginner)` by default
- [ ] Styling matches `elos-toggle-beginner` (white/black)
- [ ] Toggle click triggers alert (`Toggle activated`)

---

### ✅ 3. Wizard Placement
- [ ] Wizard icon (🧙‍♂️) injected **left of mic icon** in input bar
- [ ] Clicking triggers alert (`Wizard open`)
- [ ] Placement persists across navigation/chat switches
- [ ] No duplication on reinjection

---

### ✅ 4. Tier Switching (Popup)
- [ ] Chrome extension popup loads correctly
- [ ] Can select Beginner / Intermediate / Pro tiers
- [ ] Confirmation alert appears (`Tier set to...`)
- [ ] ChatGPT reload updates toggle style correctly
- [ ] `chrome.storage.local` properly retains tier

---

### ✅ 5. MutationObserver
- [ ] Elements reinject on:
  - New chat
  - Navigating away and returning
- [ ] No duplicated toggle/wizard elements

---

### ✅ 6. CSS Visual QA
- [ ] Toggle has proper padding, radius, margin
- [ ] Wizard does not interfere with mic/input
- [ ] Ready for future grayed-out elements (selectors scoped)

---

### ✅ 7. Storage Check
- [ ] Tier persists across page reloads
- [ ] `content.js` reads and styles correctly from `chrome.storage.local`

---

**Next Step After QA:**
Trigger: “Ready to add commands” → Begin phase 2 (command engine buildout with tier logic).