**Canvas Title:** ELos - Tiered Log Command Logic

**Purpose:**
Define how `!log` functions across ELos tiers to ensure clarity, appropriate onboarding, and controlled exposure to journaling and memory simulation tools.

---

## **Tier-Based Behaviors**

### **Beginner Tier (White Logo)**
- **Tone:** Simple, affirming
- **Behavior:**
  - Logs user’s input to a private journal
  - Confirmation message: *“Got it. I saved that thought for you.”*
  - No mention of canvases or memory simulation

### **Intermediate Tier (Blue Logo)**
- **Tone:** Instructional
- **Behavior:**
  - Prompts for optional tag (e.g., topic or mood)
  - Shows log destination (e.g., “Saved to: Daily Journal”)
  - Suggests `!review` for future recall

### **Pro Tier (Gold Logo)**
- **Tone:** Structured, systematic
- **Behavior:**
  - Allows log targeting by canvas or domain (e.g., `!log to:DA.500.IDE`)
  - Supports timestamping, threading, and cross-canvas tagging
  - Links logs to persona or prompt sequences if present

---

## **System Details**
- Tier-specific confirmations and prompts
- Always adheres to ▧ ELos.100.GOV (governance) and ▧ ELos.500.TUX (UX language map)

---

**Tag:** ▧ ELos.500.LOG – ELos / UX / Tiered Log Logic