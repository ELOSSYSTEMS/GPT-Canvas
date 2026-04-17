**Canvas Title:** ELos - UX System Spec v1.0

**Purpose:**
Define the complete user experience specification for ELos across all tiers, commands, interfaces, and interaction layers. This is the governing reference for UI development, tone control, onboarding design, and progressive feature exposure.

---

## **1. UX Philosophy & Tier Doctrine**

- Based on ▧ ELos.500.TUX – Tiered UX & Language Map
- Users progress from **Beginner → Intermediate → Pro**, unlocking:
  - More features
  - More control
  - More compressed language
- Visual identity scales with user:
  - White = Beginner
  - Blue = Intermediate
  - Gold = Pro
- ELos avoids clutter. Every feature appears **only when relevant.**

---

## **2. Tiered UI Systems**

### a. Command Input Layer (▧ ELos.500.UIF)
- `!` triggers dynamic menu above input
- Menu options visible per tier
- Each selection builds a previewable, executable command string (▧ ELos.500.PRV)

### b. Tooltip & Notification System
- Friendly tips for Beginner
- Expandable hints for Intermediate
- Compressed status updates for Pro (e.g., *Mode: Stoic Active*)

### c. Mode & Persona UI
- Mode toggle visible in toolbar (Beginner: 2 options, Pro: full list)
- Persona selector hidden at Beginner, gradual exposure by usage

### d. Canvas Memory Navigation
- Beginner: Hidden
- Intermediate: Guided search
- Pro: Graph view (▧ ELos.300.GPH) + `!map`, search, filters

---

## **3. Onboarding Flow Logic**
- Step-by-step flow on first launch by tier:
  - Beginner: Guided `!whoami`, `!mode`, `!log`
  - Intermediate: Unlock `!plan`, `!review`, `!diff`
  - Pro: Minimal UI, direct to full command interface

- All flows reference tier-specific system overviews:
  - ▧ ELos.100.OVB / OVI / OVP (Beginner / Intermediate / Pro)

---

## **4. Visual Language System**
- Colors: Tier-based (White, Blue, Gold)
- Typography: Sans-serif, high legibility
- Layout: Minimal padding, invisible grid alignment
- Motion: Smooth menu expansion, hover cues, collapsible nodes

---

## **5. Accessibility & Input Support**
- Keyboard navigation across all menus
- Arrow/tab key support for command builder
- Tooltips available with hover/focus across tiers

---

## **6. Tier-Based Feature Visibility Matrix**
- Governed by ▧ ELos.100.GOV – Tier Compliance Layer
- Visibility enforced for:
  - Commands (via ▧ ELos.500.XBND + XBND2)
  - Modules (AUD, MAP, SHD, etc.)
  - UI features (e.g., toggle visibility, preview editor)

---

## **7. Feedback + Logging Layer (Future)**
- Auto-suggest useful commands based on behavior
- Visual logs of user interaction with command menus
- Feedback prompts: *“Want to refine this command?”*

---

**Tag:** ▧ ELos.500.UXS – ELos / UX / System Spec v1.0