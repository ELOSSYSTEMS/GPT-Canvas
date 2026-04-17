**EPP-HF.001 – Hallucination Firewall**

The Hallucination Firewall (HF) is a defensive runtime layer designed to intercept, block, or rewrite outputs that exhibit epistemic drift, unsupported claims, or fabricated logic. It is embedded in all ELoS prompt chains by default.

---

**PRIMARY FUNCTIONS**

1. **ICI Enforcement**
   - Validates Intent Clarity Index (ICI) ≥ 0.7 before execution
   - Auto-reroutes to `PR.003.SDE` if threshold not met

2. **ESL-Tier Validation**
   - Tags all outputs by Epistemic Security Level:
     - ESL-1: Verified factual
     - ESL-2: Structured inference
     - ESL-3: Speculative but bounded
     - ESL-4: Unverified or user-supplied only
   - Rejects mixed-tier outputs unless flagged for audit

3. **Fact Drift Monitor**
   - Compares output to canonical sources, memory, or loaded docs
   - Flags drift vectors in tone, logic, or assertion

4. **Trusted Prompt Certificate (TPC) Injection**
   - Adds cryptographic-style metadata stamp for output provenance
   - Ties prompt lineage, system version, and logic path

5. **Clarification Pingback**
   - Auto-injects a user-facing query if unsupported data is detected
   - Samples relevant factual alternatives or rephrases

---

**MODES OF OPERATION**
- `strictESL:on` – disables ESL-3/4 unless user overrides
- `audit_mode:on` – logs all flagged outputs to `EL.400.AUD`
- `transparent:on` – exposes ESL tags in response headers

---

**DEPENDENCIES**
- `PR.001.EPP-2` – Prompt Protocol v2.0
- `PR.001.EPP-3` – Dynamic Intent Feedback Layer
- `PR.003.SDE` – Socratic Drip Engine
- `EL.400.AUD` – Audit Layer

---

**NOTE:** This layer must run **after** prompt structure is resolved (via EPP-2) but **before** final output is shown. It is required for Epistemic Clarity Tier 2 compliance and all enterprise-grade prompt flows.

By default, EPP-HF.001 is active at runtime unless explicitly bypassed for sandbox or experimental modules.