**Canvas Title:** ELos - Tiered Help Command Logic

**Purpose:**
Define and control the dynamic behavior of the `!help` command based on the user’s current ELos tier. Ensures tier-appropriate tone, command access, and user guidance.

---

## **Tier-Based Responses**

### **Beginner Tier (White Logo)**
- **Tone:** Friendly, metaphorical, non-technical
- **Response Includes:**
  - What ELos is in simple terms
  - Commands: `!mode`, `!log`, `!whoami`
  - Tooltip: *“Try `!mode` to change how the assistant talks.”*
  - Prompt: *“Type `!overview` to learn more.”*

### **Intermediate Tier (Blue Logo)**
- **Tone:** Instructional, non-jargon, practical
- **Response Includes:**
  - Commands: `!mode`, `!log`, `!whoami`, `!diff`, `!overview`
  - Quick description of canvas system + persona selector
  - Tip: *“Some advanced features are only visible in Pro mode.”*

### **Pro Tier (Gold Logo)**
- **Tone:** Technical, compressed, systems-oriented
- **Response Includes:**
  - Commands: Full list → `!mode`, `!log`, `!diff`, `!shadowlog`, `!audit`, `!map`, `!overview`, `!review`
  - Persona stack usage
  - Logic tips (e.g., `!map` for system graph, `!audit` for logic state)

---

## **Command Behavior**
- On `!help`, assistant detects user tier state
- Delivers structured, inline response matching tier
- Surface `!overview` as default CTA across all tiers

---

## **System Integration**
- Tied into onboarding flows, guided tooltips, and UI overlays
- Follows tone/copy governance in ▧ ELos.500.TUX
- Enforced via ▧ ELos.100.GOV – Tier Compliance Governance Layer

---

**Tag:** ▧ ELos.500.HLP – ELos / UX / Tiered Help Logic