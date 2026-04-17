**Canvas Title:** ELos - Tiered Clear Command Logic

**Purpose:**
Define `!clear` behavior across tiers for resetting conversation context without disrupting memory or canvas structure.

---

## **Tier-Based Behavior**

### **Beginner Tier (White Logo)**
- **Tone:** Gentle, cautious
- **Behavior:**
  - Asks: *“Do you want to clear this chat and start fresh?”*
  - Only clears visible messages (local UI wipe simulation)

### **Intermediate Tier (Blue Logo)**
- **Tone:** Confirmatory, instructional
- **Behavior:**
  - Confirms intent
  - Optionally clears conversation summary or session context
  - Leaves canvas memory untouched

### **Pro Tier (Gold Logo)**
- **Tone:** Command-oriented
- **Behavior:**
  - Executes scoped context wipe (`assistant context`, `system prompt`, `overlay memory`, etc.)
  - Allows targeted reset (e.g., clear just personas or mode state)
  - Confirms without tooltip unless overridden

---

**Tag:** ▧ ELos.500.CLR – ELos / UX / Tiered Clear Command Logic