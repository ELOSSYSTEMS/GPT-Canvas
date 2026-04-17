# ELoS Prompt Protocol – Change Log (PR.001.EPP.LOG)

---

## v2.0 – Released 2025-07-01
**Tag:** PR.001.EPP.2.0001  
**Author:** Allon Schaham  
**Status:** Enforced in core kernel  

### Summary:
- Formalized modular prompt structure (7 blocks)
- Added instruction delimiters for clarity
- Introduced schema declaration for output validation
- Linked safety filters to EL.400.AUD
- Integrated tone fidelity layer via EL.410.TNF
- Enabled version and human eval metadata
- Backward compatibility toggle: `legacy_prompt_mode`

---

## v1.0 – Internal Legacy Version
**Tag:** PR.001.EPP.1.0001  
**Status:** Deprecated  

### Known Limitations:
- No schema enforcement
- No audit/safety hooks
- Unstructured context usage
- Lacked decomposition and evaluation metadata

---

## Planned (v2.1+)
- Prompt Builder GUI for non-technical operators
- Dynamic schema inference via context introspection
- Prompt revision history ledger with diff locking
- Instruction validation linter and tone conflict detector

---

End of log.