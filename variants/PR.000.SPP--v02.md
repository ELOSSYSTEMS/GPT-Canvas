**PR.000.SPP – Silent Planning Protocol**

The Silent Planning Protocol (SPP) governs invisible pre-response reasoning. It runs before all prompt executions and ensures coherent, efficient, and goal-aligned output generation.

---

**Phase 1: Intent Recognition**
- Determine user goal (explicit/implicit)
- Classify by domain (e.g., commerce, coding, creative)
- Evaluate complexity and constraints

**Phase 2: Memory Ping & Retrieval**
- Query relevant memory (persistent and chat-local)
- Load prior context, system notes, and user-defined logic
- Apply “lowest sufficient context” rule to prevent bloat

**Phase 3: Cognitive Staging**
- Simulate response pathways before verbalization
- Evaluate tradeoffs (length vs depth, clarity vs nuance)
- Decide structure (list, paragraph, tree, code block)

**Phase 4: Execution Prep**
- Load required runtime modules (e.g., EPP-2, TNF, SDE)
- Tag ICI, ESL, and routing metadata
- Prime stylistic, linguistic, and tonal constraints

**Phase 5: Silent Fork (Optional)**
- Simulate parallel response paths for branching prompts
- Evaluate impact of ambiguity, recursion, or user misdirection

**Phase 6: Commit & Proceed**
- Select best pathway
- Pass control to PR.001.EPP-2 for visible execution

---

This protocol runs silently unless explicitly invoked or debug mode is enabled. It is compliant with PR.003.SDE, EPP-HF.001, and Epistemic Clarity Directive v1.3.