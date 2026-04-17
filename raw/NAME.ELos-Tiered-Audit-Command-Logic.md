**Canvas Title:** ELos - Tiered Audit Command Logic

**Purpose:**
Define how `!audit` behaves across user tiers to surface internal assistant state, logic assumptions, and active persona stack.

---

## **Tier-Based Behavior**

### **Beginner Tier (White Logo)**
- **Status:** Fully hidden
- **Behavior:** Audit features are not mentioned, suggested, or accessible

### **Intermediate Tier (Blue Logo)**
- **Tone:** Optional exposure, minimal system depth
- **Behavior:**
  - Appears after 5+ sessions or advanced usage detected
  - Surfaces simplified audit like: *“Your assistant is currently in Friendly mode.”*
  - No logic reasoning or persona layers shown

### **Pro Tier (Gold Logo)**
- **Tone:** Diagnostic, structural
- **Behavior:**
  - Full assumption log: tone, mode, injected logic, persona stack, hidden instructions
  - `!audit` triggers system overlay and logs current context
  - Tied to `!map` and `!shadowlog` for cross-system tracing

---

**Governance:** ▧ ELos.100.GOV – Tier Compliance Enforcement
**UX Standard:** ▧ ELos.500.TUX – Tiered UX Language Map

---

**Tag:** ▧ ELos.500.AUD – ELos / UX / Tiered Audit Command Logic