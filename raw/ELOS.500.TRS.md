▧ ELOS.500.TRS – ELos / UX/UI / Tour Branching System

# ELos Tour Branching System

This system governs how the `!tour` command adapts to user tier, behavior, and input patterns. It dynamically routes users into appropriate walkthroughs using decision points, tier detection, and optional expansions.

---

## Core Structure
- Triggered by `!tour`, or during onboarding
- Handled by **The Guide**
- State-aware: adjusts based on user tier, last command, and onboarding completion

---

## Branching Overview

### 1. Beginner Tour
#### Intro by The Guide:
- Welcome to ELos
- “You’ll start with just the essentials.”

#### Steps:
- Demo: `!help`, `!mode`, `!journal`, Magic Wand
- Visual: Pulse on wand, white logo, floating tips
- Micro choice: “Want to try a command now or keep learning?”
- End: “You can access this tour anytime via `!tour`”

---

### 2. Intermediate Tour
#### Trigger: Tier upgrade or manual `!tour`
- Intro by The Guide
- Optional paths:
  - “Want to learn about Personas?” → Governor explains persona toggle
  - “Want to see Memory tools?” → Librarian demo of `!recall`, `!list memory`
- Ends with: Option to jump to Pro preview or explore slowly

---

### 3. Pro Tour
#### Trigger: `!tour` in Pro Tier
- Governor takes over intro
- Paths:
  - Prompt Surgeon walkthrough
  - Persona forging sandbox
  - Command tree exploration (`!debug`, `!trace`, `!audit`)
- Optional fast-path: “Skip to full access overview”
- Concludes with: “You are now your own architect.”

---

## Notes:
- Tours are **replayable**, but adapt to user tier and state
- Tour path is stored and checkpointed in sessionStorage
- Each branch designed for brevity and clarity — no more than 3–4 steps

---

Canvas ID: ▧ ELOS.500.TRS
Cataloged by: The Librarian