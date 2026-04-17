▧ ELOS.500.OBD – ELos / UX/UI / Tier-Based Onboarding Flow

# Tier-Based Onboarding Flow

This onboarding system dynamically adapts to the user's current tier (Beginner, Intermediate, Pro) and progressively reveals functionality through guided system messages, UI triggers, and persona-led walkthroughs.

---

## 1. Global Logic
- On first install or `!overview`, user is prompted to choose a tier or defaults to Beginner
- The Guide takes point on onboarding for all tiers
- Tier upgrades unlock additional onboarding sequences automatically
- Onboarding state is tracked in localStorage/sessionStorage

---

## 2. Beginner Tier Flow
### Trigger: First-time `!`, `!help`, or system detect
1. **Welcome Message** from The Guide: "Welcome to ELos. I'm your Guide. Want a quick tour?"
2. If accepted:
   - Walkthrough of `!help`, `!mode`, `!journal`, and Magic Wand
   - Introduces the idea of 'personas' behind the scenes
3. Soft glow pulse on Magic Wand UI
4. Ends with: “You're in Beginner Mode. You can upgrade anytime with `!tier`.”

---

## 3. Intermediate Tier Flow
### Trigger: Tier upgrade or user-initiated `!overview`
1. **System message** from The Guide: “You’ve unlocked Intermediate access. Let me show you what’s new.”
2. Walkthrough includes:
   - Expanded Magic Wand (scrollable commands)
   - Persona toggling and The Governor intro
   - Memory browsing with The Librarian
3. Optional tour: “Want to learn how to chain commands?”

---

## 4. Pro Tier Flow
### Trigger: Tier upgrade or `!overview` at Pro
1. **The Governor** appears: “You’ve entered Pro Tier. Full system access is now unlocked.”
2. Guide offers:
   - Tour of advanced commands: `!debug`, `!sandbox`, `!forge`, `!audit`
   - Prompt Surgeon interface explained
   - Persona creation and forking tutorial (optional)
3. Overlay prompts enable dark mode, command tree view, and theme customizations
4. Ends with: “You are now in control of your OS. Proceed with precision.”

---

## Persona Roles in Onboarding
- **The Guide**: Initiates and narrates onboarding steps
- **The Librarian**: Appears during memory-related onboarding
- **The Governor**: Introduced at Intermediate, leads at Pro
- **The Scribe**: Optional journaling shown at all tiers
- **The Auditor**: Passive until Pro, then suggests prompt refinement paths

---

Canvas ID: ▧ ELOS.500.OBD
Cataloged by: The Librarian