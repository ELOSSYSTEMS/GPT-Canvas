**Canvas Title:** ELos - Tiered Command UI Framework

**Purpose:**
Bundle the complete command-building user interface logic — from `!` trigger to command preview — into a single reference system for UI development, testing, and QA.

---

## **Included Components**

| Component | Canvas | Tag |
|-----------|--------|-----|
| `!` Menu System | Tiered Command Menu UI Logic | ▧ ELos.500.UIM |
| Real-Time Preview | Tiered Command Preview Logic | ▧ ELos.500.PRV |

---

## **System Workflow**

1. **User types `!`** → Triggers tier-specific clickable menu overlay
2. **User navigates menu** → Only sees commands permitted at their tier
3. **User selects command** → Live command preview appears (editable if tier allows)
4. **Final command string previewed** → Executed or edited before submission

---

## **Tier Awareness Summary**

| Tier | Menu Style | Preview Behavior |
|------|------------|------------------|
| Beginner | Simple, icon-based | Friendly ghost text only |
| Intermediate | Collapsible categories | Semi-editable preview string |
| Pro | Fully nested CLI structure | Fully editable command with syntax support |

---

## **Compliance & Enforcement**
- Command logic sourced from: ▧ ELos.500.XBND and ▧ ELos.500.XBND2
- UX tone pulled from: ▧ ELos.500.TUX
- Tier compliance enforced by: ▧ ELos.100.GOV

---

**Tag:** ▧ ELos.500.UIF – ELos / UX / Tiered Command UI Framework