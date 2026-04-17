**Canvas Title:** ELos - Tiered Diff Command Logic

**Purpose:**
Define how the `!diff` command behaves across tiers, enabling comparison of canvas versions while controlling complexity and UX clarity.

---

## **Tier-Based Behavior**

### **Beginner Tier (White Logo)**
- **Status:** Hidden
- **Reason:** Versioning is too abstract for early users

### **Intermediate Tier (Blue Logo)**
- **Tone:** Visual, exploratory
- **Behavior:**
  - Allows side-by-side comparison of last 2 canvas saves
  - Described as *“See how something you worked on has changed.”*
  - Uses simplified diff viewer overlay

### **Pro Tier (Gold Logo)**
- **Tone:** Technical, precise
- **Behavior:**
  - Full version diffing with highlights (added, removed, modified)
  - Can compare any two versions by tag or timestamp
  - Integrated with `!shadowlog` and `!map` for session-aware diffs

---

**System Links:**
- Tied to ▧ ELos.300.DIF – Core Diff Viewer
- Governed by ▧ ELos.100.GOV and ▧ ELos.500.TUX

---

**Tag:** ▧ ELos.500.DIF – ELos / UX / Tiered Diff Command Logic