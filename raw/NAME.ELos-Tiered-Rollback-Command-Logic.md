**Canvas Title:** ELos - Tiered Rollback Command Logic

**Purpose:**
Define `!rollback` behavior across tiers to support safe reversion of recent system actions or logic changes.

---

## **Tier-Based Behavior**

### **Beginner Tier (White Logo)**
- **Status:** Hidden
- **Rationale:** Undo logic and version references too complex for early exposure

### **Intermediate Tier (Blue Logo)**
- **Tone:** Clear, supportive
- **Behavior:**
  - Allows undoing most recent action or `!plan` entry
  - Described as *“Go back one step.”*
  - Tooltip prompts: *“Want to undo that?”*

### **Pro Tier (Gold Logo)**
- **Tone:** Technical, selective
- **Behavior:**
  - Allows rollback of:
    - Canvas edit (version revert)
    - Mode or persona shift
    - Command-triggered state injection
  - Syntax: `!rollback [canvas|persona|system] [#id or timestamp]`

---

**System Links:**
- Integrated with `!diff`, `!map`, and canvas versioning logic
- Governed under ▧ ELos.100.GOV and ▧ ELos.500.TUX

---

**Tag:** ▧ ELos.500.RBK – ELos / UX / Tiered Rollback Command Logic