**EL.520.PRF – Prompt Forge**

The Prompt Forge (PRF) is the core engine for constructing, templating, and optimizing high-fidelity prompts within the ELoS architecture. It is used to author reusable, auditable, and chainable prompt blocks across domains and personas.

---

**PRIMARY FUNCTIONS**

1. **Prompt Template Builder**
   - Allows schema-based construction of prompts with modular inputs
   - Supports variable injection, conditional logic, and tone anchors

2. **Chained Prompt Compiler**
   - Enables prompt chaining using dependency graphs or recursion logic
   - Compiles multi-block flows into optimized instruction stacks

3. **Persona Bindings Engine**
   - Binds prompt to one or more active personas (from `AO.100.PSN`)
   - Applies role-specific tone, priorities, and output expectations

4. **Prompt Optimization Layer**
   - Refines prompts for clarity, ICI maxing, structure, and brevity
   - Applies `PR.002.SMK` sharpening rules and ESL tagging

5. **Prompt Certification Stamp**
   - Attaches metadata: version, date, author, test coverage, validation score
   - Used in audit mode (`EL.400.AUD`) and hallucination defense (`EPP-HF.001`)

---

**MODES OF USE**
- `manual_mode:on` – human-edited construction
- `auto_forge:on` – autogenerates based on intent + persona
- `test_mode:on` – validates against EPP stack and ESL heuristics

---

**INTEGRATIONS**
- `AO.100.SRG` – Prompt Surgeon (for rewrites and triage)
- `PR.001.EPP-2` – Prompt Protocol v2.0
- `PR.002.SMK` – Sharpening Kernel
- `EL.400.AUD` – Audit Layer
- `PR.701.TST` – Prompt testing and tone/style simulation

---

Prompt Forge is the foundational toolset for building precision-grade AI interactions. It ensures every prompt meets structural, epistemic, and tonal requirements across runtime contexts.