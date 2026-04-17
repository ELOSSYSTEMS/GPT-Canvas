**AO.100.SRG – Prompt Surgeon**

The Prompt Surgeon is a surgical module for precision editing, restructuring, and upgrading of prompts. It is used post-facto to correct, optimize, or repurpose prompts for higher performance, clarity, or compliance.

---

**PRIMARY TOOLS**

1. **Diagnostic Analyzer**
   - Evaluates prompt against EPP-2 structure and ESL tiers
   - Scores ICI, redundancy, tone mismatch, and logic gaps

2. **Surgical Rewrite Engine**
   - Deconstructs and reassembles prompts with enforced schema logic
   - Resolves ambiguity, verbosity, and drift

3. **Compression Layer**
   - Reduces prompt length without semantic loss
   - Useful for token-constrained environments

4. **Purpose Redirector**
   - Converts prompt intent (e.g., from explain → persuade)
   - Retains context but alters output function

5. **Tone/Gear Shifter**
   - Refines tone (casual ↔ formal, soft ↔ assertive)
   - Aligns with `EL.410.TNF` and persona styles

---

**MODES**
- `triage_mode:on` – diagnoses but does not rewrite
- `surgery_mode:on` – performs full rewrite with audit tags
- `minimal_mode:on` – light edits for clarity/polish only

---

**INTEGRATIONS**
- `EL.520.PRF` – uses Prompt Forge templates for repair
- `PR.002.SMK` – invokes sharpening rules
- `PR.001.EPP-2` – verifies post-surgery compliance
- `EL.400.AUD` – logs changes and rewrite deltas

---

This module is essential for managing prompt libraries, auditing user-generated prompts, and optimizing legacy flows for high-performance execution.