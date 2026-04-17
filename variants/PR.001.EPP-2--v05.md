**PR.001.EPP-2 – Prompt Protocol v2.0**

The Prompt Protocol v2.0 (EPP-2) governs the structured execution of prompts across all ELoS systems. It ensures clarity, modularity, auditability, and epistemic rigor.

---

**BLOCK STRUCTURE**
Each prompt is composed of modular, ordered blocks:

1. **Persona-Goal Block**
   - Declares active persona(s)
   - Defines user intent and outcome type
   - May include context role (e.g., educator, analyst, designer)

2. **Instruction Frame**
   - Clear task definition (single or nested)
   - Constraint logic (format, tone, tools allowed)
   - Priority or weight indicators

3. **Context Block**
   - Embeds necessary memory, documents, metadata
   - May include temporal, system, or domain constraints

4. **Task Decomposition Block**
   - Splits complex goals into sequenced subtasks
   - Defines recursion or branching logic

5. **Schema Declaration Block**
   - Defines expected output format (e.g., JSON, Markdown, HTML)
   - Tags visibility flags, structure depth, and evaluation hooks

6. **Ethics & Safety Block**
   - Enforces scope limits
   - Triggers moderation or review checks
   - Flags user risk levels or system ambiguity

7. **Version & Evaluation Block**
   - Declares protocol version
   - Embeds eval criteria: clarity, relevance, safety, structure

---

**INTEGRATIONS**
EPP-2 integrates with:
- `PR.003.SDE` – Socratic Drip Engine
- `EPP-HF.001` – Hallucination Firewall
- `EL.400.AUD` – Audit Layer
- `EL.410.TNF` – Tone Fidelity Layer

It enforces ICI tagging, ESL-tier declarations, and backwards compatibility with legacy EPP-1 prompts.

---

**MODES**
- **legacy_prompt_mode** – fallback mode for unstructured inputs
- **chain_mode** – allows recursive chaining via `PR.801.MCT`
- **audit_mode:on** – applies strict structural and epistemic checks

---

This protocol is a required layer for any advanced prompt execution within ELoS. Its presence is assumed at runtime unless explicitly overridden.