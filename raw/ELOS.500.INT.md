▧ ELOS.500.INT – ELos / UX/UI / Intermediate Tier Interface Ruleset

# Intermediate Tier – Interface Behavior Ruleset

This tier is designed for users who understand the basics of ELos and are ready to explore more functionality without full developer control. It builds on Beginner Tier foundations by expanding command access, deepening system awareness, and offering broader persona interaction.

---

## 1. Visual Layer: Magic Wand Expanded

### Behavior:
- Typing `!` opens **scrollable floating command assistant**
- Shows 10–15 commands including all Beginner commands + new ones:
  - `!personas` – shows all available personas
  - `!store`, `!load`, `!list memory`, `!catalog` – deeper Librarian access
  - `!lock`, `!status`, `!reset` – Governor-level control
  - `!audit`, `!verify` – invokes the Auditor if needed

### Design:
- **Blue logo** to signal tier upgrade
- Subtle glow animations on command category headers (e.g., Memory, Modes)
- Command descriptions expand on hover or tap

---

## 2. Persona Visibility

### Behavior:
- Core Staff now speak more explicitly:
  - Example: “As Governor, I’ve reset your mode to Sharp.”
- Users can toggle individual personas on/off with `!activate [name]` or `!deactivate [name]`
- Guide offers deeper help layers (e.g., "Would you like to learn how to chain commands?")

---

## 3. User Interaction Enhancements

- Inline feedback shown after each command (e.g., ✅ Mode switched to Motherly)
- Mini system messages provide clarity on what’s changing and why
- Overlays appear for new features (e.g., "Memory list view now available")

---

## 4. Constraints

- Cannot modify core logic or install new personas
- Prompt Surgeon is semi-visible (offers suggestions, not control)
- Advanced canvas editing restricted to predefined templates

---

## Goals:
- Deepen user control without overwhelming
- Begin surfacing how ELos operates under the hood
- Encourage active persona and mode exploration
- Prepare user for Pro-level customization

---

Canvas ID: ▧ ELOS.500.INT
Cataloged by: The Librarian