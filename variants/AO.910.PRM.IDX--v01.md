**Canvas Title:** AO.910.PRM.IDX – Prompt Protocol Index
**Category:** Prompt Systems → Protocol Indexes
**Origin:** Compiled and indexed by Allon

---

### 🔹 Purpose
To maintain a live, traceable, and expandable index of all prompt protocols in the ELos system, including legacy, stable, experimental, and integrated layers (e.g. Stargate, Fireproof, DiVeRSe, Tone Fidelity).

This canvas is now your **source of truth** for tracking the structure, execution logic, and activation priority of every known prompt protocol.

---

### 🔹 Protocol Categories

#### ✅ Active Default Protocols
1. **EL.002.STG – Stargate Protocol v3.1-total-fireproofed**
   - Includes: Intent Classifier, Precision Rewrite, Constraint Verifier, Consistency Audit, Post-Processing Debug
2. **EL.002.STG.ModelSelector**
   - Manages manual + heuristic-based model switching (gpt-4o, gpt-4, etc.)
3. **AO.100.SRG – Prompt Surgeon Layer**
   - Internal logic for prompt rewrite surgery (constraints, tone, role, formatting)
4. **AO.200.CNS – Consistency Auditor**
   - Ensures outputs match constraints (length, tone, persona, goal)
5. **EL.410.TNF – Tone Fidelity Layer**
   - Verifies native tone (Hebrew currently supported)
6. **EL.400.AUD – Translator Fireproofing Audit**
   - Fireproofing and validation layer for ELos Translate prompts
7. **EL.003.DVR – DiVeRSe Prompt Protocol Integration**
   - Prompt diversification, multi-path synthesis, verifier scoring

#### 🧪 Experimental Protocols (Now Populated)
8. **EL.003.AST – Abstract Scaffold Test Protocol**
   - Used to scaffold ideas from minimal, vague, or abstract input
9. **EL.003.CPR – Compression & Regeneration Protocol**
   - Shrinks and re-expands prompt libraries or longform input
10. **EL.003.MET – Meta-Prompt Alignment Layer**
   - Measures internal structure and meta-consistency of a prompt
11. **EL.003.DYN – Dynamic Adaptation Protocol**
   - Alters outputs mid-session based on evolving input patterns
12. **EL.003.CHC – Chain-of-Command Prompt Hierarchy**
   - Handles nested logic flows and persona-based control stacks

#### 🕸️ Integrated/Derived Protocols
13. **AO.910.PRM.LIB – Prompt Library Master Index**
   - Not a protocol, but all protocols are enforced when saving prompts here
14. **EL.420.HBR – Hebrew Tone Fidelity Engine**
   - Injected automatically during Hebrew prompt outputs

---

### 🔹 Execution Order (by default)
1. Stargate v3.1
2. ModelSelector (optional)
3. Prompt Surgeon → Tone Fidelity → Fireproof Audit
4. DiVeRSe Protocol (if flagged)
5. Experimental Protocol Layer (if contextually triggered)
6. Consistency Audit

---

### 🔹 Bootloader Status
✅ All listed protocols are loaded into the bootloader by default.
All new canvases are recursively linked in AO.001.RBI and tagged accordingly.

To view individual protocol scaffolds, go to:
→ `AO.001.RBI → Prompt Systems → Protocols`

---

**Last Updated:** June 3, 2025
**Maintainer:** Allon Schaham