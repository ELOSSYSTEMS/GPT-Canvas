▧ ELOS.500.BEG – ELos / UX/UI / Beginner Tier Interface Ruleset

# Beginner Tier – Interface Behavior Ruleset

This ruleset defines the user experience and UI logic for ELos users in the Beginner Tier. The goal is to create a sense of system installation and empowerment without overwhelming the user. It balances visual cues (the Magic Wand) with guided interactions (Core Staff personas).

---

## 1. Visual Entry: Magic Wand Lite

### Behavior:
- When user types `!`, a **floating command assistant** appears just above the input bar
- Shows only 3–5 allowed commands:
  - `!help` – triggers The Guide
  - `!overview` – explains ELos basics
  - `!mode` – toggles tone (limited set: Sharp, Motherly)
  - `!journal` – opens The Scribe
  - `!recall` – activates The Librarian

### Design:
- Minimal UI: tooltips, no popups
- Tier-specific styling: **white logo + soft bloom animation**
- Wand reacts visually to command selection (small pulse/glow)

---

## 2. Background Intelligence: Core Staff Personas

### Behavior:
- All five Core Staff personas are active from install
- Do not introduce themselves unless explicitly invoked
- Each command result subtly credits the active persona (e.g., “The Guide says…”)
- Behavior adjusts behind the scenes, matching user tone and confusion levels

---

## 3. First-Time Use Flow

- First `!` triggers The Guide to offer a quick tour: "Would you like a quick walkthrough of ELos commands?"
- If accepted, `!overview` runs and ends with: "You can type `!` anytime to see your tools."

---

## 4. Limitations by Design

- No access to advanced config, canvas editing, or persona modification
- No direct access to Prompt Surgeon, Auditor override, or system debug
- Keeps system feeling safe and learnable

---

## Goals:
- Immediate feeling of a new interface
- Gentle teaching of `!command` logic
- Smooth intro to simulated memory and behavior modes
- Subconscious exposure to persona system without overloading cognitive load

---

Canvas ID: ▧ ELOS.500.BEG
Cataloged by: The Librarian