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
- **Status:** *Unresolved*
- **Risk:** Medium
- **Details:** Divergence between command-based UX and Wizard/visual UI for beginners.
- **Next Step:** Approve dual-mode onboarding system with toggled visibility or simplify.

#### 5. **Naming Sweep Gaps (GPTOS → ELos)**
- **Status:** *Partially Resolved*
- **Risk:** Low-Medium
- **Details:** Some lingering GPTOS references in mid-tier documentation.
- **Next Step:** Trigger full naming sweep validation.

---

### **LOW PRIORITY**

#### 6. **Canvas Save Gaps**
- **Status:** *Unresolved*
- **Risk:** Low
- **Details:** Several logic changes were implemented without canvas log entries.
- **Next Step:** Backfill system canvases (Toggle, Command, Tier UX, Onboarding).

---

### Update Protocol
- When a conflict is resolved or overridden, status will be changed to **Resolved**, with a timestamp.
- New conflicts discovered during build phases will be added under appropriate priority.
- Auditor auto-triggers if similar conflict patterns are detected.

---

**Maintained by:** The Consistency Auditor
**Synced to:** Librarian Index