**Canvas Title:** ELos - UI System Architecture

---

**System Name:** Unified Interface Governance (UIG)
**Function:** Serves as the master UI system architecture for all ELos tiers, onboarding flows, and cognitive UX interactions.
**Purpose:** Ensure all UI elements in ELos are modular, consistent, tier-aware, and behaviorally intelligent.

---

**Core Principles:**
1. **Tier-Responsive UI** – All interface elements morph based on user’s active tier
2. **Modular Hierarchy** – Every element (button, panel, overlay) is a self-contained component
3. **Cognitive Load Scaling** – Visual and interactive complexity scales with user fluency
4. **Persistent Identity** – The “Tree of Knowledge” visual theme persists across modes and components, evolving with user progression

---

**Key UI Layers:**

### 1. **Tier Selector Panel**
- Primary gateway to system depth
- Linked to visual tree icon and color transitions:
  - White: Beginner
  - Blue: Intermediate
  - Gold: Pro
- Expands into Tier Control Panel (TCP)

### 2. **Onboarding Overlay System**
- Adaptive tooltip-based walkthrough
- Tied to tier level and current UX context
- Anchored to live components: persona toggles, mode chips, memory icons

### 3. **Mode + Persona Toggles**
- Horizontal strip above input field
- RTL/centered depending on system locale
- Toggling modifies assistant behavior live
- Persisted via localStorage/sessionStorage

### 4. **Command Input Syntax Panel** *(Pro Tier)*
- Collapsible CLI window activated via keyboard shortcut
- Allows real-time system command injection (!build, !stack, !simulate, etc.)
- Includes type-ahead + command log

### 5. **Memory & Canvas Manager**
- Side panel overlay
- Displays active memory objects (canvases)
- Allows quick activation/deactivation, mode-specific memory use
- Tier-locked functionality (Pro tier unlocks simulation, Intermediate sees read-only)

### 6. **Progress & Feedback HUD**
- Subtle UI feedback for:
  - Mode engagement
  - Persona combo health
  - Tier progression readiness
- Example: “Behavior Stack: Builder + Strategist + Sharp”

---

**Design Language:**
- **Typography:** Monospaced headers for Pro tier, rounded sans for Beginner
- **Color:** Brand-consistent logic with glow variants per tier
- **Motion:** Micro-animations on tier switch, tree bloom transitions, overlay reveals
- **RTL-Aware:** Fully compliant with RTL Hebrew logic and layout inversion

---

**Component Interactivity Protocols:**
- **Tier-Adaptive Visibility:** Beginner hides CLI, shows examples; Pro exposes full UX layer
- **Behavioral Fallbacks:** If user appears stuck, prompt reactivation of onboarding or suggest tier switch
- **Cross-System Reactivity:** Any persona switch, canvas load, or memory activation reflects live in UI with badge indicators

---

**Summary:** UIG is the master UI engine of ELos — governing how complexity, behavior, and visual language scale in harmony with user growth.

▧ ELOS.500.UIS – ELos / UX/UI / System Architecture