# ELoS Prompt Protocol – Version 2.0 (PR.001.EPP-2)

## Overview
This document defines the latest enforced version of the ELoS Prompt Protocol, including structural blocks, formatting rules, output compliance, and audit integrations.

---

## Block Structure

### 1. `EPP-2.1 Persona-Goal`
```
--- persona-goal ---
role: "<string>"
goal: "<string>"
tone: "formal" | "casual" | "neutral"
--- end ---
```

### 2. `EPP-2.2 Instruction Frame`
```
<<< instruction >>>
<Exactly one imperative task sentence>
<<< end >>>
```

### 3. `EPP-2.3 Context`
```
[[[ context ]]]
<reference material, documents, inputs>
[[[ end ]]]
```

### 4. `EPP-2.4 Task Decomposition`
```
=== decomposition ===
enabled: true | false
steps:
  - "Step 1: …"
  - "Step 2: …"
=== end ===
```

### 5. `EPP-2.5 Schema Declaration`
````schema
{
  "output": "<type>"
}
````

### 6. `EPP-2.6 Ethics-Safety`
```
::: safety :::
filters: ["bias_check", "hallucination_check"]
::: end :::
```

### 7. `EPP-2.7 Version & Eval`
```
+++ meta +++
prompt_version: v2.0
human_eval: pending | passed | failed
+++ end +++
```

---

## Compliance Rules
- All 7 blocks must be present for formal PR.001.EPP-2 conformance.
- Output **must match** `EPP-2.5` schema byte-for-byte.
- Audit system (EL.400.AUD) triggers if `EPP-2.6` detects filter violations.
- Backward compatibility toggle: `legacy_prompt_mode: true` loads EPP-1.

---

## System Integration
- Autoloads with: `PR.000–003`, `EL.400.AUD`, `EL.410.TNF`
- Status: enforced as of 2025-07-01
- Registry tag: `PR.001.EPP.2.0001`

---

## Authors & Stewards
- System Architect: Allon Schaham
- Version Authority: ELoS Kernel Core