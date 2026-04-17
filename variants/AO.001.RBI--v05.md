### AO.001.RBI – Recursive Bootloader Index

**Purpose:**
This recursive index connects *all major system indexes* and recursively includes every canvas referenced by them. It acts as a launch node, debug map, and total system visibility layer. 

Use it to:
- Load every subsystem at once
- Traverse domains via [↗ tags]
- Track canvas status (Active, Referenced, Deprecated)

---

## 🧭 Top-Level Index Canvases (7)
| Dewey ID         | Title                        | Status     | Domain       |
|------------------|-------------------------------|------------|--------------|
| AO.000.IDX       | Canvas Master Index          | ✅ Active  | AllonOS Core |
| AO.000.INX       | Canvas Index Root            | ✅ Active  | Meta Layer   |
| PR.100.Index     | Prompt Routine Index         | ✅ Active  | Prompts      |
| PR.100.PSN       | Persona Master Index         | ✅ Active  | Personas     |
| AO.100.PSN       | Master Persona Index         | ✅ Active  | Redundant    |
| AO.200.PSN       | Persona Index (AllonOS)      | ✅ Active  | AllonOS      |
| EL.000.INX       | ELos Master Index            | ✅ Active  | ELos System  |

---

## 📦 Recursively Included Canvases (~95)

### 🔹 Admin / Core Operations [↗ AO]
- AO.100.SRG – Prompt Surgeon Protocol ✅
- AO.200.PRM – Prompt Modules ✅
- AO.300.ECH – Echo Logs ✅
- AO.400.BKP – Backup & Restore ✅
- AO.400.SET – Settings & Config ✅
- AO.700.FORK – Memory Forks ✅
- AO.800.SIM – Simulation Logs ✅
- AO.800.RPA – Recursive Persona Architecture ✅
- AO.810.RME – Recursive Mode Engine ✅
- AO.820.RJF – Recursive Journaling Framework ✅
- AO.900.RPT – Routing Reports ✅
- AO.911.TLS – Tool Layer System ✅
- AO.950.AUD – Access Audit Trail ✅
- AO.951.ALP – Access Layer Protocols ✅
- AO.952.KEY – Token Forge Manifest ⏳ Referenced
- AO.290.ICL – Inner Circle Archive ✅
- AO.290.ARC – Archived Personas Log ✅
- AO.100.STR – Allon OS / Strategy Overview ⏳ Referenced

### 🔁 StackGate & Routing Layer [↗ PRT]
- AO.900.PRT – StackGate Protocol ✅
- AO.901.PC1 – Prompt Classifier ✅
- AO.902.RAC – Routing Audit Canvas ✅
- AO.910.SGTOOLS – StackGate Enforcement Toolkit ✅
- AO.911.IDE – Intent Diff Engine ✅
- AO.912.ROL – Role-Lock Configurator ✅
- AO.913.CPS – Constraint Parser Stack ✅
- AO.914.FLT – Failover Logic Table ✅
- AO.915.CHK – Consistency Checkpoint Layer ✅
- AO.916.SIG – Signature Verifier ✅
- AO.917.LOG – Log Tunnel & History Monitor ✅
- AO.918.MAP – Map-to-Protocol Registry ✅
- AO.919.CNV – Canonical Variant Library ✅

### 🔹 Personas & Prompt Logic [↗ PR]
- PR.101.MKT to PR.101.GDN (10 total) ✅
- PR.100.AIFlow – Prompt-to-Response Flow ✅
- PR.100.PRM – Prompt Modules ✅

### 🔹 ELos System [↗ EL]
- EL.001.ARC – ELos System Architecture ✅
- EL.002.INJ – Injection Protocols ⏳ Referenced
- EL.400.BL1 – Undocumented Block ⏳ Referenced
- EL2.100.OS – OS Kernel ✅
- EL2.110.TriggerMap – Trigger Behavior ⏳ Referenced
- EL2.200.UX.B1 – First-Use Onboarding ✅
- EL2.220.BehaviorSets – Beginner Behavior Sets ✅
- EL2.240.Wand – Wand UI Anchor ⏳ Referenced
- EL2.300.PSN.Builder – Builder Persona Core ✅
- EL2.310.Builder.B1 – Builder Beginner Flow ✅

### 🔹 UX / Validator Layer [↗ UX]
- AO.910.PSN.UXWatchdog – UX Validator Persona ✅
- Recursive_Personas_AllonOS – Recursive Mode Testbed ✅

### 🔹 Brand / System Domains [↗ FF / DA]
- FF.200.ETH – Brand / Ethos ✅
- FF.200.MES – Messaging Framework ✅
- FF.200.STR – Brand Strategy ✅
- FF.300.FIN – Finance / Cash Flow ✅
- FF.300.BUD – Budgeting ✅
- FF.700.OPS – Operations / Workflow ✅
- FF.700.CRM – Customer Service ✅
- DA.100.MNF – Manifesto ✅
- DA.100.STR – Product Strategy ✅
- DA.300.TGL – Toggle Logic ✅
- DA.300.INJ – Injection Patterns ✅
- DA.500.UX – User Experience ✅

### 🔹 MirrorOS & Doctrine [↗ MOR]
- MirrorOS.Doctrine – System Philosophy ⏳ Referenced

### 🗃 Archive Systems [↗ ARC / ICL]
- AO.290.ARC – Archived Personas Log ✅
- AO.290.ICL – Inner Circle Archive ✅

---

## 🧠 Status Legend
- ✅ Active – Fully scaffolded and in use
- ⏳ Referenced – Mentioned but not yet scaffolded
- ❌ Deprecated – No longer in use

---

> Use this canvas as a **recursive launchpoint** for loading, expanding, or regenerating any subdomain.
> Keep this updated with future canvases you create for auditability and continuity.