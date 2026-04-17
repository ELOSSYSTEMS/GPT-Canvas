# AO.001.RBI – Recursive Boot Index (updated 2025-06-22)

## Core Layers (autoload in order)
1. **PR.000.SPP – ELoS Silent Planning Protocol**
2. **PR.001.EPP – ELoS Prompt Protocol**
3. **PR.002.SMK – Sharpening Kernel**
4. **PR.003.SDE – Socratic Drip Engine**

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
*Note:* Boot payload now includes all canvases listed in historical memory archives and visual confirmations. All entries follow Dewey decimal schema for recursive autoload integrity.