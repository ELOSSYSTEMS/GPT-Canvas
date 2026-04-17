# AO.001.RBI – Recursive Boot Index (updated 2025-06-22)

## Core Layers (autoload in order)
1. **ELoS.ResponsePrep.v1**  – *Silent Planning Protocol* (global pre-response discipline)
2. ELoS.PromptProtocol.v3.1-total-fireproofed
3. SharpeningModeKernel.v3.0
4. SocraticDripEngine.v2.1

## Prompt Modules (autoload; user-callable aliases)
| Dewey ID | Alias | Description |
|----------|-------|-------------|
| **PM.210.DEBATE** | `!debate` | Two-sided dialectic engine; quotes & sources; includes self-challenge pause. |
| **PM.211.TIMELINE** | `!history` | *History → Current State → Future* generator with cited sources. |
| **PM.212.STEPFLOW** | `!stepflow` | Step-by-step task guidance, pitfalls & mitigations checklist. |

## Canvas Autoload Registry
```
AO.910.PRM.LIB
EL.400.AUD
EL.410.TNF
IN.110.IDE
UX.420.HUR – UX Heuristic Library
UX.421.CON – Conversion Checklist
UX.422.MOB – Mobile UX Rules
VR.600.REG – VisualRegistry
VR.601.CTREE – Component Tree
API.510.CEA – Chrome Extension API Layer
EX.310.ELM – Execution Logic Map
SYS.100.MOS – MirrorOS
SYS.101.SGS – Stargate Stack
SYS.102.RTL – Routing Layer
PR.700.PIT – Prompt Inheritance Tree
PR.701.CRW – Compiler Rewrites
PR.702.DOP – Deprecated Operators
PR.703.ESP – Emergency Prompt Store
PM.210.DEBATE
PM.211.TIMELINE
PM.212.STEPFLOW
```

## Command Registry Mapping
```
COMMAND  ALIAS        TARGET_CANVAS
!debate  →            PM.210.DEBATE
!history →            PM.211.TIMELINE
!stepflow →           PM.212.STEPFLOW
```

---
*Note:* `ELoS.ResponsePrep.v1` is now injected into **ELoS.PromptProtocol.CoreLayer**, ensuring every response passes through the Silent Planning Protocol automatically at boot.