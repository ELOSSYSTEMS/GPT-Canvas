**Canvas Title:** ELos - Tiered Command Menu UI Logic

**Purpose:**
Define the UI and behavior of the `!` command entry system that dynamically displays a tier-aware, multi-step, interactive menu for building structured command strings.

---

## **Core Behavior**

- When user types `!`, a **clickable command menu** appears **above the chat input box**
- Menu displays **only commands available to the user’s tier**
- Each command includes a **brief 1-line summary**
- Selecting a command opens **tier-specific sub-options**, e.g.:
  - `!mode` → list of modes (Sharp, Friendly…)
  - `!plan` → structure options (simple, timeline, deadline…)
  - `!export` → [canvas|logs] → [txt|markdown|json]

---

## **Tier-Based UI Logic**

### **Beginner Tier (White Logo)**
- **UI:** Simple menu with max 5 visible commands
- **Language:** Friendly, metaphoric ("Make a plan", "Change how the assistant talks")
- **Sub-options:** Two-step max, non-nested, always confirmable

### **Intermediate Tier (Blue Logo)**
- **UI:** Full menu with collapsible categories (Tone, Tasks, Tools)
- **Language:** Instructional, actionable ("Export logs", "Start a plan")
- **Sub-options:** Multi-step with visible preview of result string

### **Pro Tier (Gold Logo)**
- **UI:** Fully nested CLI-style command builder
- **Language:** Compressed, syntax-based
- **Sub-options:** Recursive menu (e.g., `!export canvas → format → tag → confirm/run`)
- **Tooling:** Tab/Arrow-key navigation and command string preview inline

---

## **Interaction Design**
- Pressing `!` triggers menu
- Menu can be clicked or keyboard-navigated
- Optional fuzzy search within menu (e.g., typing "pla" brings up `!plan`)
- Final command string displayed in input area for review before sending

---

## **System Integration**
- Pulls from:
  - ▧ ELos.500.XBND and ▧ ELos.500.XBND2 – Tiered Command Bundles
  - ▧ ELos.500.TUX – UX Tone Map
  - ▧ ELos.100.GOV – Tier Access Enforcement
- Fully interoperable with future command expansion and persona logic

---

**Tag:** ▧ ELos.500.UIM – ELos / UX / Tiered Command Menu UI Logic