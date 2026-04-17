**Canvas Title:** ELos - Tier Selector UI Hierarchy

---

**System Component:** ELos Tier Selector
**Placement:** Persistent UI Element (Top-left panel)
**Purpose:** Allow users to select and transition between ELos tiers (Beginner, Intermediate, Pro) through a clean, progressive, and visually distinct interface.

---

**Primary Panel**
- **Label:** `ELos Tier: [Current Tier]`
- **Icon:** Tree of Knowledge (grows visually per tier)
- **Interaction:** Click → expands into **Tier Control Panel (TCP)**

---

**Tier Control Panel (TCP) Layout**

### **Header Section:**
- **Title:** Choose Your Interface Depth
- **Subtext:** "Select how much control and complexity you want"

### **Tier Grid (3-Column Layout)**

**1. Beginner – Guided Mode**
- **Icon:** Compass
- **Features:**
  - Step-by-step guidance
  - Clarifying questions
  - Recursive prompt support
- **Button:** `Enter Guided Mode`
- **Tooltip:** “Perfect if you’re just starting out”

**2. Intermediate – Modular Mode**
- **Icon:** Puzzle Pieces
- **Features:**
  - Behavior stacking (mode + tone + domain)
  - Prompt macros
  - Output format options
- **Button:** `Enter Modular Mode`
- **Tooltip:** “Build with more precision and control”

**3. Pro – Command Mode**
- **Icon:** Terminal window / Full-grown Tree of Knowledge
- **Features:**
  - CLI-style command syntax
  - Persona multiplexing
  - Memory simulation + tool chaining
- **Button:** `Enter Command Mode`
- **Tooltip:** “For builders, strategists, and power users”

---

**Additional UI Components**

- **Progress Tracker:**
  - Shows current tier and unlocked abilities
  - Option: `Auto-Advance When Ready` toggle

- **Tier Customizer:**
  - Opens detail panel to configure:
    - Active behavior modes
    - Default personas
    - Prompt syntax format
    - UI overlay visibility

- **Keyboard Shortcut:** `Ctrl + Shift + E` or `⌘ + Shift + E`
  - Instantly opens Tier Selector from any state

---

**Visual Differentiation by Tier:**
- **Beginner:** soft UI, rounded corners, calming palette
- **Intermediate:** clean grid layout, bolder accents
- **Pro:** dark system theme, monospaced typography, minimal UI

---

**Whisper Mode System Effects:**
- Tier changes trigger silent backend adjustments:
  - Prompt scaffolding logic
  - System message injection patterns
  - Assistant intervention frequency

---

**Outcome:** The Tier Selector is not just a UI element — it’s a **cognitive interface gateway** that governs user access to ELos’ evolving power.

▧ ELOS.500.UIX – ELos / UX/UI / Tier Selector