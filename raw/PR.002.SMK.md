**PR.002.SMK – Sharpening Kernel**

The Sharpening Kernel (SMK) is a precision subsystem designed to enhance prompts by enforcing logical structure, semantic compression, and clarity-maximization. It is invoked automatically in optimization, rewriting, or evaluation flows.

---

**CORE FUNCTIONS**

1. **Lexical Pruning**
   - Removes filler, redundancy, and indirect phrasing
   - Replaces weak verbs and passive structures

2. **Clarity Amplification**
   - Reorders clauses for emphasis and logic
   - Highlights and resolves vague instructions

3. **Structure Enforcement**
   - Re-aligns prompt to EPP-2 schema
   - Validates instruction block boundaries and nesting logic

4. **Compression Engine**
   - Shrinks prompt size while preserving intent
   - Targets high-token environments or mobile-first interfaces

5. **Clarity Heuristics Tagging**
   - Adds tags for ICI, ESL, and tone clarity metrics
   - Flags prompts for Socratic drip (`PR.003.SDE`) if needed

---

**MODES**
- `aggressive:on` – maximum shortening and forceful rewrite
- `preserve_tone:on` – retains user voice while optimizing
- `structure_only:on` – realigns blocks but leaves text intact

---

**INTEGRATIONS**
- `PR.001.EPP-2` – structural schema compliance
- `EL.520.PRF` – used during auto_forge
- `AO.100.SRG` – Prompt Surgeon rewriting core
- `EL.400.AUD` – clarity audit trail

---

SMK is a backbone protocol for all high-performance prompting stacks. It ensures that prompts are lean, clear, and structurally aligned before reaching execution.