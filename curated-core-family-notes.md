# Curated Core Family Notes

Date: 2026-04-17
Purpose: manual curation layer over the highest-value conflicted or overloaded recovered families.
Status: evidence-based interpretation from recovered export + source transcripts.

## 1. AO.001.RBI

### Most likely canonical meaning
`AO.001.RBI` most consistently reads as the **Recursive Boot Index** or **Runtime Bootloader Index**.

### Stable role
It appears to be the root registry that boot sequences load first, and it points to canvases/modules that should autoload into the runtime.

### Why it is conflicted
The same ID appears to have been reused for several adjacent but distinct artifacts:
- `Recursive Bootloader Index`
- `AO.001.BOOT`
- `bootloader.json`
- `ELoS.CommandRegistry`
- `EL2.110.TriggerMap`
- `EL.800.LNG.StarfleetLanguagePack`
- `ELos_Extension_Final_Form`

### Current best interpretation
Treat `AO.001.RBI` as the **index/root boot map**, and treat several later bodies as likely sibling or derived artifacts that drifted onto the same ID.

### Current recovered files of interest
- `raw/AO.001.RBI.md`
- `raw/AO.001.RBI.CANVAS.ALL.md`

### Curation recommendation
Do **not** trust the latest recovered body alone as canonical. The latest recovered body is a `bootloader.json` style config, which is plausible as a derivative boot config, but not sufficient evidence that the whole historical meaning of `AO.001.RBI` collapsed into that JSON file.

### Best candidate canonical split
- `AO.001.RBI` = Recursive Boot Index / Runtime Bootloader Index
- `AO.001.BOOT` = concrete bootloader config/runtime manifest
- `ELoS.CommandRegistry` = separate command mapping artifact
- `EL2.110.TriggerMap` = separate trigger/router artifact

---

## 2. AO.910.PRM.LIB

### Most likely canonical meaning
`AO.910.PRM.LIB` most consistently reads as the **Prompt Library** or **Master Prompt Index**.

### Stable role
It appears to be the main prompt corpus, often described as fireproofed and large-scale.

### Strong evidence
Recovered/source references repeatedly describe it as:
- master prompt index
- prompt library
- 110+ prompts indexed
- later 317 prompts indexed
- linked to bootloader activation

### Why it is conflicted
The same artifact key absorbed several likely sibling documents:
- `AO.910.PRM.LIB`
- `AO.910.PRM.LIB_All_Prompts`
- `AO.910.PRM.LIB_Full`
- `AO.910.PRM.IDX`
- `AO.910.PRM.META`
- `AO.910.PRM.HIST`
- `EL.910.PRM.PersonalizedAgent`
- `AO.911.RBI`
- `PromptForge_v3_Protocol`

### Current best interpretation
The recovered raw file for `AO.910.PRM.LIB` currently resolves to a history/metadata-style body, not the substantive prompt library itself. That means the artifact key is real, but the latest recovered body is likely **not** the best canonical representation of the family.

New evidence from the manually uploaded conversation `prompt Library - dyamic prompt forge.txt` strengthens the family interpretation:
- the library is presented as a real indexed corpus with category views and per-category prompt sets
- this conversation reports `148 unique prompts`, while other conversations report `110+` and later `317`, confirming that prompt-count drift/version drift is real across time and that a single latest recovered metadata body is insufficient to represent the family
- the same conversation sketches `PR.850.DPL – Dynamic Prompt Library (FORCE Subsystem)` as a not-yet-registered framework aligned to `AO.910.PRM.LIB` and `PR.020.PFP`, which suggests the library family had both a stored prompt corpus and an adjacent prompt-forge/autocomplete layer

### Curation recommendation
Treat this family as a **cluster**, not a single stable document:
- `AO.910.PRM.LIB` = main prompt library
- `AO.910.PRM.IDX` = prompt index view
- `AO.910.PRM.HIST` = version history / hashes / change log
- `AO.910.PRM.META` = metadata manifest
- `PR.850.DPL` / prompt-forge-related bodies = adjacent dynamic recommendation / autocomplete subsystem, not the same thing as the static library itself

The current recovered latest body should be treated as likely belonging to `HIST` or `META`, not as the final definition of `LIB` itself.

---

## 3. AO.910.PSN

### Most likely canonical meaning
`AO.910.PSN` appears to be a **persona family root**, not a single stable body.

### Stable role
It was used for persona-specific modules and behavior-set/onboarding logic.

### Why it is conflicted
The same key absorbed distinct persona and onboarding artifacts:
- `AO.910.PSN.Assassin`
- `AO.910.PSN.Architect`
- `AO.910.PSN.Gate`
- `AO.910.PSN.Builder`
- `AO.910.PSN.DevOperator`
- `AO.910.PSN.UXWatchdog`
- `AO.910.PSN.Registrar`
- `AO.910.PSN.SystemSynthesizer`
- `EL2.200.UX.B1`
- `EL2.220.BehaviorSets`
- `EL2.310.Builder.B1`

### Current best interpretation
`AO.910.PSN` should be treated as a **namespace bucket / persona root**, while the concrete child personas should each live under their own distinct IDs.

The current recovered raw body for `AO.910.PSN` is a beginner Builder flow, which is useful but clearly not the whole meaning of the family.

### Important related recovery
- `AO.910.PSN.LIBRARIAN` is separately recovered and appears stable.

### Curation recommendation
Interpret the family as:
- `AO.910.PSN` = persona family root or library root
- child personas = distinct persona canvases
- some `EL2.*` onboarding/behavior assets were temporarily written into the same family and should be separated conceptually

---

## 4. EL.410.TNF

### Most likely canonical meaning
`EL.410.TNF` is the **Tone Fidelity Layer / Tone Fidelity Engine**.

### Stable role
This family is comparatively stable. It governs tonal accuracy, style alignment, and Hebrew-native fidelity.

### Strong evidence
Recovered/source references consistently describe it as:
- Tone Fidelity Layer
- Tone Fidelity Engine
- Native Tone Fidelity Layer
- Hebrew tone fidelity / post-processing / stylistic constraint layer

### Why it is only mildly conflicted
The naming drift seems more like versioning/implementation-context drift than true identity collapse:
- `ELOS Native Tone Fidelity Layer`
- `TNF_Hebrew_Enforcement_v1_3`
- `EL.410.TNF_Translate_2.0`
- `EPP2_patch_2025-07-01`
- `boardroom_instructions`
- `EL.410.TNF – Tone Fidelity Layer`

### Current best interpretation
Treat `EL.410.TNF` as a stable canonical family with variant implementations or context-specific overlays.

### Related recovered files
- `raw/EL.410.TNF.md`
- `raw/EL.410.TNF.BENCHMARK.ETHICS.md`
- `raw/EL.410.TNF.BENCHMARK.GEO.md`
- `raw/EL.410.TNF.BENCHMARK.LEGAL.md`
- `raw/EL.410.TNF.BENCHMARK.SOCIAL.md`

---

## 5. PR.000.SPP

### Most likely canonical meaning
`PR.000.SPP` is the **Silent Planning Protocol**.

### Stable role
This family is stable. It governs hidden pre-response planning and staging before visible execution.

### Strong evidence
Recovered/source references consistently describe it as:
- Silent Planning Protocol
- invisible pre-response reasoning
- intent recognition, memory ping, cognitive staging, execution prep, optional silent fork, then commit to visible protocol

### Why it still shows unresolved partials
Most unresolved entries are partial updates from `Boot Sequence Execution` attempting to patch the autoload registry inside a larger boot document. Those look like operational edits around the protocol, not identity-level contradictions.

### Current best interpretation
Treat `PR.000.SPP` as stable and largely resolved.

---

## Overall curation summary

### Stable enough to trust as canonical family identity
- `EL.410.TNF`
- `PR.000.SPP`

### Real but overloaded, should be treated as family clusters rather than one latest body
- `AO.001.RBI`
- `AO.910.PRM.LIB`
- `AO.910.PSN`

### Practical rule
When a family is overloaded, prefer:
1. repeated semantic role across many conversations
2. explicit source transcript descriptions
3. older/full bodies that match the repeated role
4. latest body only if it still matches the family’s long-run meaning
