**Canvas Title:** ELos - Tiered Shadowlog Command Logic

**Purpose:**
Define tier-based behavior for `!shadowlog`, the silent session logging tool.

---

## **Tier-Based Behavior**

### **Beginner Tier (White Logo)**
- **Status:** Completely hidden
- **Reason:** Too abstract, risks misunderstanding and user mistrust

### **Intermediate Tier (Blue Logo)**
- **Access:** Optional opt-in after 5+ sessions and only with tooltip explanation
- **Behavior:**
  - Explains: *“Shadow Mode logs what your assistant does behind the scenes.”*
  - Surfaces only when manually activated

### **Pro Tier (Gold Logo)**
- **Tone:** Transparent, diagnostic
- **Behavior:**
  - Displays full timestamped log of internal decisions, state shifts, persona triggers, and message transformations
  - Exportable format (JSON/Markdown)
  - Optionally integrated with `!audit`, `!map`, and diff tracking

---

**UX and Governance:**
- Complies with ▧ ELos.500.TUX and ▧ ELos.100.GOV
- Interoperates with ▧ ELos.300.SHD – Shadow Mode Core Module

---

**Tag:** ▧ ELos.500.SHD – ELos / UX / Tiered Shadowlog Command Logic