**▧ ELos.300.AUD – ELos Build Conflict Audit**

---

### Overview
This dynamic canvas tracks active and resolved conflicts in the ELos Chrome Extension build process. Conflicts are classified by priority, risk, and fixability. Updates to this canvas will reflect Allon’s approvals, resolutions, or overrides in future sessions.

---

### **HIGH PRIORITY**

#### 1. **Version Overwrites – `content.js` Logic**
- **Status:** *Unresolved*
- **Risk:** Very High
- **Details:** Multiple conflicting implementations (chat input toggle vs. sidebar toggle) without version control.
- **Next Step:** Archive both versions, reestablish `v1` and `v2`, lock in preferred default.

#### 2. **Wizard vs. Persona System (Beginner Tier)**
- **Status:** *Unresolved*
- **Risk:** High
- **Details:** Conflicting logic between Wizard-based onboarding vs. core persona-only tier.
- **Next Step:** Approve canonical model for Beginner tier (Wizard = Yes or No).

#### 3. **Toggle Placement Conflict**
- **Status:** *Unresolved*
- **Risk:** Medium-High
- **Details:** Flip-flop between sidebar and chat input bar placement.
- **Next Step:** Lock in preferred placement and apply to all UI tiers.

---

### **MEDIUM PRIORITY**

#### 4. **Command Registry vs. Beginner Usability**
- **Status:** *Resolved (2025-05-24)*
- **Risk:** Medium
- **Details:** Divergence between command-based UX and Wizard/visual UI for beginners.
- **Action Taken:** Approved dual-path model:
  - **Beginner Tier:** Uses Wizard + visual UI only (no !commands)
  - **Intermediate & Pro Tiers:** Command-first UX (with toggles, auto-complete, and mode selectors)
- **Next Step:** Implement tier-detection logic to conditionally expose UX path.

#### 5. **Naming Sweep Gaps (GPTOS → ELos)**
- **Status:** *Resolved (2025-05-24)*
- **Risk:** Low-Medium
- **Details:** All references to legacy names (`GPTOS`, `AI OS`) have been replaced with `ELos`, including:
  - Mode selector: `ELos Sharp Mode`
  - Onboarding: “Welcome to ELos.”
  - Archived logs updated to reflect ELos naming.

---

### **LOW PRIORITY**

#### 6. **Canvas Save Gaps**
- **Status:** *Resolved (2025-05-24)*
- **Risk:** Low
- **Details:** Several logic changes were implemented without corresponding canvas logs.
- **Action Taken:** All key subsystems have been backfilled into dedicated version-controlled canvases with rollback-ready snapshots:
  - **▧ ELos.300.TGL.v1** – Chat Input Toggle Logic
  - **▧ ELos.300.TGL.v2** – Sidebar Toggle Logic
  - **▧ ELos.300.CMD** – Command Registry + Tier Scaling
  - **▧ ELos.500.UX** – Tier-Based UX Interface Logic
  - **▧ ELos.100.ONB** – Tiered Onboarding System
- **Next Step:** All future changes will branch or overwrite from these reference points as needed.

---

### Update Protocol
- When a conflict is resolved or overridden, status will be changed to **Resolved**, with a timestamp.
- New conflicts discovered during build phases will be added under appropriate priority.
- Auditor auto-triggers if similar conflict patterns are detected.

---

**Maintained by:** The Consistency Auditor
**Synced to:** Librarian Index