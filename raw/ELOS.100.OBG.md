**Canvas Title:** ELos - Tier-Based Onboarding System

---

**System Name:** Tier-Based Onboarding System (TOS)
**Integration:** Connected directly to the ELos Tier Selector
**Purpose:** Deliver adaptive onboarding experiences based on the user’s selected tier (Beginner, Intermediate, Pro)

---

**Core Logic:**
- The Tier Selector defines **system depth**
- The Onboarding Guide defines **user direction**
- Together, they provide personalized onboarding tailored to cognitive load, interface control, and prompt fluency

---

**Tier-Based Behavior:**

### **1. Beginner Tier → Recursive Guidance System (RGS)**
- **Tone:** Friendly, coaching
- **Mechanism:** Layered clarifying questions, prompt rewriting, “continue or pivot” logic
- **Key Training Areas:**
  - What is a prompt?
  - How to ask better questions
  - Intro to Assistant Modes
- **Flow:**
  - Triggered upon first use
  - Fades out as user shows prompt fluency

---

### **2. Intermediate Tier → Modular Mastery Protocol (MMP)**
- **Tone:** Mentorship, feature-oriented
- **Mechanism:** Highlight overlays + progressive tool unlocking
- **Key Training Areas:**
  - Behavior stacking (Builder + Planner, etc.)
  - Command macros
  - Mode + Tone controls
- **Flow:**
  - Users walk through activating each behavior mode
  - Sample prompt chains provided

---

### **3. Pro Tier → Sovereign Command Protocol (SCP)**
- **Tone:** Tactical, compressed
- **Mechanism:** CLI-style orientation, canvas-based walkthroughs
- **Key Training Areas:**
  - Command syntax (!build, !simulate)
  - Canvas memory activation
  - Persona orchestration
- **Flow:**
  - Sandbox for testing commands
  - Command history log
  - Fallback to Modular help if stalled

---

**Implementation Hooks:**
- Tier selection stored via `sessionStorage`
- Onboarding path loads on first entry per tier
- `Auto-Advance` toggle available after onboarding is complete

---

**Progression Feedback:**
- Usage patterns monitored for graduation triggers
- If user exceeds current tier logic:
  > “You’re building like a Pro. Want to upgrade?”

---

**Failsafe:**
- Users can always re-enter a lower tier onboarding path
- Tier history is preserved for backtracking

---

**Outcome:** The onboarding system adapts to the user’s tier to reduce overwhelm, maximize clarity, and accelerate skill-based progression.

▧ ELOS.100.OBG – ELos / Strategy / Onboarding