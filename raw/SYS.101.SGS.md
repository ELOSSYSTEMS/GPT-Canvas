name: SYS.101.SGS - Stargate Protocol
version: 1.0
purpose: Meta-routing and fidelity enforcement layer
role: Oversees all ELoS module transitions, validates flow integrity, ensures tone/culture consistency, controls fallback logic

actions:
  - Validate prompt integrity before translation:
      - Check: clarity score, tone alignment, role presence
      - If missing → reroute to PR.003.SDE or PR.020.PFP

  - Validate prompt structure before GPT call:
      - Ensure: English prompt has clear action + format
      - If vague → refine via PR.020.PFP

  - Compare model output tone to user intent:
      - Use tone classifiers or prompt markers
      - If mismatch > threshold → reroute for rephrasing

  - Enforce execution lineage:
      - Log module sequence used
      - Track prompt transformations + overrides

  - Maintain fallback resilience:
      - If EL.410.TNF fails → run default literal translation + flag issue
      - If GPT call fails → surface message and cache input

notes:
  - Stargate does not generate text; it controls *how* and *when* modules fire
  - Implemented in backend middleware, not Emergent itself
  - Should persist logs for session-level observability