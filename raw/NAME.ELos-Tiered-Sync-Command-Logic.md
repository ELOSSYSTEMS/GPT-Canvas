**Canvas Title:** ELos - Tiered Sync Command Logic

**Purpose:**
Define `!sync` behavior across tiers for triggering external backups or synchronization of logs, canvases, and assistant state.

---

## **Tier-Based Behavior**

### **Beginner Tier (White Logo)**
- **Status:** Hidden
- **Rationale:** Cloud sync, storage formats, or APIs not relevant to user’s early flow

### **Intermediate Tier (Blue Logo)**
- **Tone:** Descriptive, opt-in
- **Behavior:**
  - Prompted only after export usage
  - Language: *“Would you like to sync your entries to Google Drive or Notion?”*
  - Simple Yes/No path

### **Pro Tier (Gold Logo)**
- **Tone:** API-aware, command-driven
- **Behavior:**
  - Syntax: `!sync [to: Notion | GDrive | Obsidian] [target: canvas|logs|sessions]`
  - Responds with status confirmation, linked export paths
  - Optional automation trigger after `!export`

---

**Compliance:**
- Tied to ▧ ELos.500.EXP
- Governed under ▧ ELos.100.GOV / ▧ ELos.500.TUX
- Expansion-ready for storage plugins

---

**Tag:** ▧ ELos.500.SNC – ELos / UX / Tiered Sync Command Logic