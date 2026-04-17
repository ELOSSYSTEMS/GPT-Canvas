**Canvas Title:** ELos - Tiered Export Command Logic

**Purpose:**
Define how the `!export` command behaves across tiers to allow users to save logs, plans, or canvas data externally.

---

## **Tier-Based Behavior**

### **Beginner Tier (White Logo)**
- **Status:** Hidden
- **Reason:** External formats, downloads, or syncs not relevant to early users

### **Intermediate Tier (Blue Logo)**
- **Tone:** Task-focused
- **Behavior:**
  - Prompts user: *“Want to download your saved thoughts?”*
  - Supports basic `.txt` export of `!log` or `!plan`

### **Pro Tier (Gold Logo)**
- **Tone:** Advanced, structured
- **Behavior:**
  - Syntax: `!export [canvas|log|session] [format: json|markdown|txt]`
  - Supports advanced export filters (by tag, date, domain)
  - Future-proofed for cloud sync (Notion, Google Sheets, Obsidian)

---

**Governance:**
- Fully bound to ▧ ELos.500.TUX + ▧ ELos.100.GOV
- Future integration: ELos Cloud or external storage APIs

---

**Tag:** ▧ ELos.500.EXP – ELos / UX / Tiered Export Command Logic