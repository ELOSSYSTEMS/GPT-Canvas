**Canvas Title:** ELos - Tiered Mode Command Logic

**Purpose:**
Define how `!mode` and `!toggle` behave across tiers to adjust assistant tone, attitude, and behavior clarity.

---

## **Tier-Based Behavior**

### **Beginner Tier (White Logo)**
- **Tone:** Playful, metaphorical
- **Behavior:**
  - Mode names described simply (e.g., "Sharp = focused mode")
  - Tooltip explains: *“Change how the assistant speaks to better match your mood.”*
  - Menu options limited to 2–3 core modes

### **Intermediate Tier (Blue Logo)**
- **Tone:** Clear, directive
- **Behavior:**
  - More modes exposed
  - Prompts user to try `!mode Friendly`, `!mode Strategic`, etc.
  - Describes how behavior affects responses

### **Pro Tier (Gold Logo)**
- **Tone:** Compressed, system-aware
- **Behavior:**
  - Full mode library with override syntax (`!mode Sharp`, `!mode Stoic`)
  - Optionally layered with persona logic
  - Integrated with `!audit` for active mode state review

---

**Command Aliases:** `!mode`, `!toggle`
**Governance:** Compliant with ▧ ELos.500.TUX + ▧ ELos.100.GOV

---

**Tag:** ▧ ELos.500.MOD – ELos / UX / Tiered Mode Command Logic