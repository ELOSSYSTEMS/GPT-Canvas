**PR.003.SDE – Socratic Drip Engine**

The Socratic Drip Engine (SDE) is a prompt governance layer that decomposes unclear, ambiguous, or complex prompts into clarified sub-prompts delivered incrementally. It supports the gradual revelation of assumptions, logic gates, and interpretive frames.

---

**CORE PURPOSES**
- Enforce epistemic clarity in prompt interpretation
- Prevent premature execution of unclear tasks
- Facilitate recursive question flow
- Aid user in realizing hidden assumptions or intent gaps

---

**DRIP MODES**
1. **Passive Drip** – system waits for clarification but nudges if threshold is crossed
2. **Active Interrogate** – system initiates direct sub-questioning to clarify ambiguity
3. **Recursive Depth** – each answer is re-evaluated for internal consistency and alignment
4. **Stacked Forks** – system proposes 2–3 interpretive branches for the user to select

---

**DRIP STAGES**
- **Stage 0** – ICI below threshold, drip is triggered
- **Stage 1** – Initial reframe offered ("Did you mean...?")
- **Stage 2** – Assumptions surfaced and validated
- **Stage 3** – Suggested reformulation(s) provided
- **Stage 4** – Confirmation or override from user

---

**INTEGRATION PROTOCOLS**
- Paired with `PR.001.EPP-3` for dynamic intent alignment
- Logs clarity metrics to `EL.400.AUD`
- Honors `EL.410.TNF` tone settings during drip
- Compatible with chainable prompt modules (`PR.801.MCT`)

---

**SAFETY & OVERRIDES**
- `drip_mode:off` disables auto-questioning
- `strict:clarity` enforces drip before all execution if ICI < 0.8
- `override:confirmed` allows bypass of recursive flow

---

The SDE is foundational in epistemically aligned systems, especially in user-facing, high-stakes, or abstract decision chains. It forces clarity before verbosity and alignment before output.