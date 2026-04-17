**Canvas Title:** ELos - Tiered UX & Language Map

**Purpose:**
Define tier-specific feature visibility, instructional tone, and UI copy to ensure progressive cognitive onboarding and avoid alienating users by capability or jargon.

---

## **TIER STRUCTURE**

### **1. Beginner Tier (White Logo)**
- **User Profile:** New to ChatGPT, overwhelmed by complexity, requires metaphors and guidance
- **Tone:** Friendly, metaphor-based, no jargon
- **Access Level:**
  - Limited command set (`!mode`, `!log`, `!help`, `!whoami`)
  - Hidden recursion features, diagnostic modules, and persona triggers
- **Copy Example:**
  - Tooltip: *“Want the assistant to sound different? Tap here to change its vibe.”*
  - Notification: *“You’re in Beginner Mode. Nice and simple.”*
- **Onboarding:**
  - Full walkthrough (clickable overlays, animated tooltips)
  - “Try this” nudges (e.g., suggest `!whoami` with hover explainer)

### **2. Intermediate Tier (Blue Logo)**
- **User Profile:** Familiar with ChatGPT, wants more control, curious about advanced features
- **Tone:** Clear, functional, slightly more technical
- **Access Level:**
  - Full command set unlocked (except shadow features)
  - Audit/diff/map modules visible but require opt-in to activate
  - Persona selector UI active, but no layering or advanced logic surfaced
- **Copy Example:**
  - Tooltip: *“Switch the assistant’s tone, like flipping a light switch.”*
  - Notification: *“Intermediate Mode activated. You now have more tools and control.”*
- **Onboarding:**
  - Inline guided prompts (e.g., “Type `!diff` to compare past versions.”)
  - Toggleable tutorial on diagnostics and memory

### **3. Pro Tier (Gold Logo)**
- **User Profile:** Power user, system thinker, wants full behavioral, memory, and diagnostic access
- **Tone:** Technical, compressed, surgically precise
- **Access Level:**
  - All modules unlocked: recursion stack, persona layering, command chaining
  - Full audit logs, diff overlays, memory graph, interoperability map
- **Copy Example:**
  - Tooltip: *“Inject persona stack or override logic layer. Use `!audit` to trace current assumptions.”*
  - Notification: *“Pro Mode engaged. Diagnostic layers and recursive control now active.”*
- **Onboarding:**
  - No walkthrough. Just `!review`, `!map`, `!shadowlog` links and system diagram

---

## **LANGUAGE GUIDELINES BY TIER**

| Tier | Tone | Word Style | Tooltip Behavior |
|------|------|------------|------------------|
| Beginner | Playful, warm | Concrete, analogy-driven | Tooltip on hover + demo animation |
| Intermediate | Calm, explanatory | Task-focused, simplified logic | Hover + optional expand for more detail |
| Pro | Blunt, efficient | Precise, modular, recursive language | Always-visible, terse tooltips + full docs linked |

---

## **Governance Rule:**
All UI elements, messages, and command suggestions must **contextually match the user’s current tier**. No leakage of advanced copy into Beginner or Intermediate flows.

---

**System Tag:** ▧ ELos.500.TUX – ELos / UX / Tiered UX & Language Map