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

## 📦 Recursively Included Canvases (~60+)

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
- AO.290.ICL – Inner Circle Archive ⏳ Referenced
- AO.290.ARC – Archived Personas Log ⏳ Referenced

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
- FF.200.ETH to FF.700.CRM (7 total) ✅
- DA.100.MNF to DA.500.UX (5 total) ✅

### 🔹 MirrorOS & Doctrine [↗ MOR]
- MirrorOS.Doctrine – System Philosophy ⏳ Referenced

---

## 🧠 Status Legend
- ✅ Active – Fully scaffolded and in use
- ⏳ Referenced – Mentioned but not yet scaffolded
- ❌ Deprecated – No longer in use

---

> Use this canvas as a **recursive launchpoint** for loading, expanding, or regenerating any subdomain.
> Keep this updated with future canvases you create for auditability and continuity.