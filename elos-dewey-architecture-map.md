# ELoS Dewey Architecture Map

Date: 2026-04-17
Basis: recovered canvas corpus under `recovered-canvases/`, imported ChatGPT export transcripts, manual curation notes.
Status: reconstruction, not final canon.

## Executive summary

The recovered Dewey universe describes a modular AI operating system, not a single prompt pack.

At a high level, the architecture appears to separate into:
1. runtime boot and orchestration
2. prompt protocols and command surfaces
3. language, tone, and translation fidelity
4. personas and behavior governors
5. interface, visual, and extension layers
6. domain operating systems and applied business stacks
7. archive, memory, and retrieval governance

## Confidence legend

- Verified: strongly supported by recovered bodies and repeated transcript references
- Inference: likely from namespace patterns and multiple adjacent references
- Speculative: plausible but still under-resolved

---

## 1. Root operating layer

### `AO.000` to `AO.001`
Role: root boot, master index, runtime registry, activation map.
Confidence: Verified for the layer, mixed for exact body boundaries.

Key recovered signals:
- `AO.000.BOOT`
- `AO.000.IDX`
- `AO.001.BOOT`
- `AO.001.INDEX`
- `AO.001.RBI`
- `AO.001.RBI.CANVAS.ALL`

Best interpretation:
- `AO.001.RBI` = root recursive boot index / runtime bootloader index
- `AO.001.BOOT` = concrete boot sequence / activation behavior
- sibling artifacts likely drifted onto the same family, including command registry and runtime manifest bodies

What this means:
The system expected a boot event that loaded protocols, canvases, personas, and command logic into an active runtime state.

---

## 2. Prompt protocol layer

### `PR.000` to `PR.300`
Role: pre-response reasoning, prompt execution rules, command-callable prompt modules.
Confidence: Verified.

Key recovered signals:
- `PR.000.SPP` = Silent Planning Protocol
- `PR.001.*` = core prompt protocol family
- `PR.002.SMK` = Sharpening Kernel
- `PR.003.SDE` = Socratic Drip Engine
- `PR.210.DBT` = debate module
- `PR.211.HIS` = history/timeline module
- `PR.212.STP` = stepflow / step-by-step module
- `PR.900.*` = command layer adjacency

Best interpretation:
Prompting was treated as governed infrastructure. The system had a silent planning layer, visible execution layers, and modular callable prompt forms exposed as commands.

What this means:
ELoS was meant to convert generic prompting into a structured protocol stack with reusable behaviors and explicit routing.

---

## 3. Tone, language, and translation fidelity

### `EL.400` to `EL.420`
Role: audit, tone fidelity, Hebrew-native translation and rewrite.
Confidence: Verified.

Key recovered signals:
- `EL.400.AUD`
- `EL.410.TNF`
- `EL.420.*` family with Hebrew rewrite / audit / translation sublayers

Best interpretation:
`EL.410.TNF` is a core system service. It governs style, tone, register, and language fidelity, especially for Hebrew. `EL.400.*` appears to audit outputs, while `EL.420.*` implements translation and rewrite behavior.

What this means:
A major product promise of ELoS was not merely translation, but preserving native tone and intent across language.

---

## 4. Core ELoS runtime and architecture

### `EL.000` to `EL.300`
Role: system index, architecture, Stargate/runtime logic, kernel or routing-adjacent core.
Confidence: Verified for existence, partly inferred for boundaries.

Key recovered signals:
- `EL.000.*`
- `EL.001.*`
- `EL.002.*`
- `EL.003.*`
- `EL.100.*`
- `EL.300.*`

Best interpretation:
This is the ELoS core runtime and architecture layer. `EL.002` and `EL.003` consistently appear near Stargate / DiVeRSe / fireproofing logic. `EL.300` appears to connect to kernel or execution behavior.

What this means:
ELoS likely had a central kernel-like execution model where prompt, tone, personas, and UI could be mounted together.

---

## 5. Persona and governor layer

### `AO.100`, `AO.200`, `AO.910.PSN`, parts of `AI.800+`
Role: personas, auditors, planners, surgeons, recursive persona architecture.
Confidence: Verified for the layer, mixed for exact parent-child structure.

Key recovered signals:
- `AO.100.PSN`
- `AO.100.SRG`
- `AO.200.CNS`
- `AO.200.PLN`
- `AO.910.PSN`
- `AO.910.PSN.LIBRARIAN`
- `AI.800.RPA`
- `AI.810.RME`
- `AI.840.RCA`

Best interpretation:
There are two overlapping persona layers:
1. practical operator personas in `AO.*`
2. recursive/meta persona architecture in `AI.800+`

`AO.910.PSN` is best treated as a persona-family root, not a single stable body. Child personas such as Librarian, Builder, Assassin, Architect, and UXWatchdog were likely distinct canvases.

What this means:
The persona system was intended as a functional orchestration layer, not just character flavor.

---

## 6. Prompt library and recommendation layer

### `AO.910.PRM.*`, `PR.850.DPL`, `PR.020.*`
Role: stored prompt corpus, prompt indexing, history/meta, dynamic recommendation / prompt forge.
Confidence: Verified for existence, mixed for final canonical body.

Key recovered signals:
- `AO.910.PRM.LIB`
- likely siblings: `IDX`, `META`, `HIST`, `Full`
- uploaded evidence of category views and prompt counts: `110+`, `148`, later `317`
- `PR.850.DPL` = Dynamic Prompt Library
- `PR.020.PFP` = prompt forge adjacency

Best interpretation:
The prompt library family contained both:
- a static fireproofed prompt corpus
- an adjacent dynamic recommendation/autocomplete concept

What this means:
ELoS was moving toward a system that could surface or generate prompts contextually rather than only storing them.

---

## 7. Interface and extension layer

### `IN.*`, `UX.*`, `VR.*`, `AD.*`, `API.*`, `EX.*`
Role: interactive design engine, heuristics, visual prompt routing, browser or extension integration.
Confidence: Verified for the layer, partly inferred for some branches.

Key recovered signals:
- `IN.110.IDE`
- `UX` heuristic / conversion / mobile families
- `VR` visual registry / component tree references
- `AD.800.IMG.FireflyPromptEngine`
- `AD.801.IMG.CanvaPromptEngine`
- `AD.900.IMG.3DSceneRouter`
- `API.510.*` references in transcripts
- `EX.310.ELM` execution logic map references in transcripts

Best interpretation:
ELoS was meant to surface through a real UI, likely browser-extension first, with prompt, visual, and domain-specific tools embedded into active interfaces.

What this means:
This was not intended to remain a hidden prompt religion. It was product-facing.

---

## 8. Visual and multimodal subsystem

### `EL.600+`, `AD.800+`, `LYR.*`
Role: image prompt engines, visual router, multimodal handling, style modifiers.
Confidence: Verified.

Key recovered signals:
- `EL.600.*`
- `EL.610.*`
- `EL.620.*`
- `AD.800.IMG`
- `AD.801.IMG`
- `AD.900.IMG`
- `LYR.900.PMX`

Best interpretation:
This was a modular visual operating stack that routed visual prompting by platform and style, not a single generic image prompt helper.

What this means:
ELoS had a serious multimodal ambition, especially around visual creation workflows.

---

## 9. MindOS / recursive cognition / vVerse layer

### `AI.700+`, `AI.800+`, `AI.850+`, `VV.999.*`
Role: recursive system architecture, Mind OS, journaling, identity overlays, meta-logic.
Confidence: Verified.

Key recovered signals:
- `AI.700.DAO`
- `AI.720.REO`
- `AI.800.RPA`
- `AI.820.RJF`
- `AI.850.MOS`
- `AI.851.ALC`
- `AI.852.MIR`
- `AI.853.TRM`
- `AI.854.PAD`
- `VV.999.*`

Best interpretation:
This is the internal cognitive / reflective architecture that overlaps with Allon OS, Mind OS, and vVerse. It appears to govern recursive improvement, journaling, persona adaptation, and meta-system design.

What this means:
ELoS was not only an external product stack. It was also an attempt to build a structured cognitive operating model.

---

## 10. Domain operating systems

### `FF.*`, `DA.*`, `ELOS.*`, possibly `OS.*`
Role: applied business/domain stacks built on top of the core architecture.
Confidence: Verified.

Key recovered signals:
- `FF.*` = Forever Flowers
- `DA.*` = Dabroo / adjacent business domain
- `ELOS.*` = product-specific higher-layer system packages

Best interpretation:
The core system was meant to generalize across domains, but it was tested or instantiated in concrete businesses and product contexts.

What this means:
ELoS was envisioned as a reusable operating system substrate for multiple businesses or products.

---

## 11. Archive, retrieval, and governance layer

### Librarian, indexes, lineage, archive series
Role: naming, indexing, linking, versioning, recovery.
Confidence: Verified.

Key recovered signals:
- The Librarian references across corpus
- canonical index behavior
- Dewey assignment behavior
- archive and lineage expectations

Best interpretation:
The Librarian was effectively the artifact governance subsystem. If boot loaded the runtime, Librarian governed the knowledge base.

What this means:
The Dewey universe was intended to be queryable and maintainable, not just accumulative.

---

## Cross-cutting architectural principles

### 1. Bootable state
The system expects a boot event that loads modules and changes runtime behavior.

### 2. Governed prompting
Prompts are treated as modules with protocols, not raw one-offs.

### 3. Tone and language fidelity
Hebrew-native quality is a first-class requirement, not a cosmetic enhancement.

### 4. Functional personas
Personas act as auditors, planners, critics, governors, and archivists.

### 5. Product-facing interfaces
The system was designed to surface in extensions, overlays, command menus, and visual engines.

### 6. Durable archive and retrieval
The Dewey structure was intended to make the whole system recoverable and navigable over time.

---

## Current unresolved zones

These families remain overloaded and should not be reduced to a single latest body yet:
- `AO.001.RBI`
- `AO.910.PRM.LIB`
- `AO.910.PSN`

Practical rule:
trust family role first, exact latest body second.

---

## Highest-confidence architectural statement

ELoS appears to have been designed as a modular AI operating system composed of:
- a boot/index layer
- a protocol/prompt layer
- a tone/translation fidelity layer
- a persona/governor layer
- an interface/extension layer
- a multimodal visual layer
- domain operating systems
- and a librarian/archive governance layer
