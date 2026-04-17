**Canvas Title:** ELos - Tiered Command Preview Logic

**Purpose:**
Define the visual and interactive behavior of the real-time command string preview shown as users build commands through the `!` menu interface.

---

## **Core Functionality**

- As users select options from the `!` menu, a **command preview string** builds in real time
- Preview sits inside the input field or just above it, depending on tier and space
- Shows final command before execution (editable for Intermediate+ tiers)

---

## **Tier-Based Preview Behavior**

### **Beginner Tier (White Logo)**
- **Style:** Light grey ghost text inside input
- **Content:** Friendly explanation, e.g.:
  - *“This will log your thought as a note.”*
- **Editability:** None — fixed string preview only

### **Intermediate Tier (Blue Logo)**
- **Style:** Semi-editable command string
- **Content:** Shows actual command syntax (e.g., `!plan today: write, shoot, edit`)
- **Editability:** User can backspace or tweak simple values before confirming

### **Pro Tier (Gold Logo)**
- **Style:** Fully editable full-line CLI-style string
- **Content:** Real command with options, e.g.:
  - `!export logs format:json tag:monthly usage:true`
- **Editability:** User can modify structure or parameters
- **Tools:** Tab key to auto-complete fields, Arrow keys to navigate tokens

---

## **UI & Integration**
- Works with `▧ ELos.500.UIM – Command Menu UI Logic`
- Pulls command metadata from: ▧ ELos.500.XBND, ▧ ELos.500.XBND2
- Syntax-aware per command logic canvas (e.g., `!plan`, `!mode`, etc.)

---

**Tag:** ▧ ELos.500.PRV – ELos / UX / Tiered Command Preview Logic