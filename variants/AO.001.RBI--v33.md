# AO.001.RBI – Recursive Boot Index (updated 2025-06-22)

## Core Layers (autoload in order)
1. **PR.000.SPP – ELoS.ResponsePrep.v1**  – *Silent Planning Protocol* (global pre-response discipline)
2. PR.001.EPP – ELoS.PromptProtocol.v3.1-total-fireproofed
3. PR.002.SMK – SharpeningModeKernel.v3.0
4. PR.003.SDE – SocraticDripEngine.v2.1

## Prompt Modules (autoload; user-callable aliases)
| Dewey ID | Alias | Description |
|----------|-------|-------------|
| **PR.210.DBT** | `!debate` | Two-sided dialectic engine; quotes & sources; includes self-challenge pause. |
| **PR.211.HIS** | `!history` | *History → Current State → Future* generator with cited sources. |
| **PR.212.STP** | `!stepflow` | Step-by-step task guidance, pitfalls & mitigations checklist. |

## Canvas Autoload Registry
```
\1
ELoS.CommandRegistry – Command Alias Registry
```

## Command Registry Mapping
```
COMMAND  ALIAS        TARGET_CANVAS
!debate  →            PR.210.DBT
!history →            PR.211.HIS
!stepflow →           PR.212.STP
```

---
*Note:* `PR.000.SPP` (Silent Planning Protocol) is now injected into the core ELoS Prompt Protocol Layer. All canvases grouped by namespace (PR, UX, SYS, VR, etc.) with Dewey identifiers.