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
PR.000.SPP – ELoS Silent Planning Protocol
PR.001.EPP – ELoS Prompt Protocol
PR.002.SMK – Sharpening Kernel
PR.003.SDE – Socratic Drip Engine
PR.004.DIA – Diagnostic Layer
PR.005.INT – Intent Extraction Layer
PR.006.CNT – Context Loader
PR.007.MIR – Mirror Clarifier
EL.410.TNF – Tone Fidelity Engine
EL.411.TTC – Tone + Translation Calibrator
PR.008.FRM – Formalizer
PR.009.FBK – Fallback Generator
PR.010.ESC – Escalation Engine
PR.011.DBG – Debugging Sandbox
PR.210.DBT – Debate Module
PR.211.HIS – Historical Timeline Module
PR.212.STP – Step-by-Step Engine
PR.700.PIT – Prompt Inheritance Tree
PR.701.CRW – Compiler Rewrites
PR.702.DOP – Deprecated Operators
PR.703.ESP – Emergency Prompt Store
PR.020.PFP – Prompt Forge Protocol
PR.021.MPM – Modular Prompt Map
PR.022.SIM – Simulation Shell
PR.900.CMD – Command Registry
AO.910.PRM – Prompt Library
EL.400.AUD – Audit Layer
IN.110.IDE – Interactive Design Engine
IN.999.UIH – Unstructured Input Handler
UX.420.HUR – UX Heuristic Library
UX.421.CON – Conversion Checklist
UX.422.MOB – Mobile UX Rules
UX.423.MOBPAT – Mobile UX Patterns
VR.600.REG – VisualRegistry
VR.601.CTREE – Component Tree
API.510.CEA – Chrome Extension API Layer
EX.310.ELM – Execution Logic Map
SYS.100.MOS – MirrorOS
SYS.101.SGS – Stargate Stack
SYS.102.RTL – Routing Layer
IC.001.LIC – Legacy Inner Circle
MD.001.MUN – Model Update Notes
FF.300.PROD – Product Templates
FF.301.POL – Policy Pages (HE.EN)
FF.302.COL – Collection Map
PR.800.OBD – Onboarding Flow Engine
PR.801.MEM – Memory Archive
PR.802.UXV – UX Validator
PR.803.SCR – Scribe Journal
PR.804.ENA – Enneagram Archetypes
PR.805.EXM – Execution Model Table
PR.806.VRL – VisualRouter Logic
PR.807.MFS – Metafield Sync Layer
PR.808.PRD – Persona Reflection Dock
PR.809.SMO – StyleModifier
PR.810.RRB – Rapid Response Buffer
```

## Command Registry Mapping
```
COMMAND     ALIAS         TARGET_CANVAS
!debate     →             PR.210.DBT
!history    →             PR.211.HIS
!stepflow   →             PR.212.STP
!diagnose   →             PR.004.DIA
!intent     →             PR.005.INT
!context    →             PR.006.CNT
!clarify    →             PR.007.MIR
!formalize  →             PR.008.FRM
!fallback   →             PR.009.FBK
!escalate   →             PR.010.ESC
!debug      →             PR.011.DBG
!forge      →             PR.020.PFP
!map        →             PR.021.MPM
!simulate   →             PR.022.SIM
```

---
*Note:* All command aliases and system canvases are now fully registered and bootable. `PR.900.CMD` has been added for centralized command lookup.