**Canvas Title:** ELOS Protocol Lite & Pro Design Specification

**Dewey ID:** EL.410.PRC

**Canvas Type:** Protocol Architecture – Independent from Stargate

**Version:** 1.0

**Purpose:**
Define two entirely new, independent prompt optimization protocols for the ELOS Translator Extension: one lightweight (Lite) and one advanced (Pro). These protocols reference the design rigor of Stargate but are not built on top of it. They serve separate use cases—Lite for tone fidelity and accessibility, Pro for precision, recursion, and control.

---

**PROTOCOL NAME:** ELOS Protocol Lite

**Primary Use Case:**
- Mass-market adoption
- Fast, low-latency output that sounds natively human
- Simple logic focused purely on tone fidelity

**Core Logic Stack:**
- **Step 1: Language Detection**
- **Step 2: Tone Fidelity Rewriter** (via EL.410.TNF)
- **Step 3: Output Tone-Corrected Response**

**Constraints:**
- No persona chaining
- No intent parsing
- No modular enhancements
- No self-debugging or audit trail

**Strengths:**
- Feels magical to the average user
- No friction
- Runs light and fast across all devices

**Weaknesses:**
- No structural prompt improvement
- No diagnostics
- No learning or adaptation beyond tone

---

**PROTOCOL NAME:** ELOS Protocol Pro

**Primary Use Case:**
- Power users, creators, and multi-language professionals
- Full prompt refinement with recursive logic and diagnostics

**Core Logic Stack:**
- **Step 1: Deep Intent Detection (contextual + symbolic triggers)**
- **Step 2: Diagnostic Rewrite Analysis (precision + consistency check)**
- **Step 3: Language Adaptive Rebuild (tone, format, syntax match)**
- **Step 4: Modular Enhancements (Add Persona, Format, Constraint modules)**
- **Step 5: Post-Processing (Audit, Rewrite Certainty, Tone Pass)**
- **Step 6: Return Optimized Output with Optional Audit Layer**

**Includes:**
- Full EL.410.TNF integration for tone fidelity
- Local user preference memory (Pro only)
- Support for mutation engine in future phases

**Constraints:**
- Higher runtime
- Requires user education
- More vulnerable to over-tuning without feedback

**Strengths:**
- High precision and control
- Recursive mutation-capable
- Designed for multilingual mastery

---

**Shared Elements:**
- Native tone output is required for both protocols
- Seamless integration into extension UI

**UI/UX EXTENSION ARCHITECTURE:**
- Initial rollout uses **two-button UI**:
  - Original ChatGPT send button remains.
  - ELOS button appears next to it.
  - Allows side-by-side output comparison.
- Pro version allows users to toggle: "Make ELOS my default brain 🧠✨"
  - Overrides default send button behavior to route through ELOS Protocol.

---

**Final Note:**
Lite = native tone, silent enhancement. Pro = full prompt architecture and recursion. Both work together to dominate different tiers of usage.

**Status:** Version 1.0 locked and live. ✅