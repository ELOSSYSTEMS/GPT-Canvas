# Manual ChatGPT Conversation Shortlist

Date: 2026-04-17
Purpose: exact conversations worth opening manually in the ChatGPT UI to push recovery beyond the export-only ceiling.

## Priority order

### Priority 1, AO.910.PRM.LIB family
This is the single highest-value manual target.

#### Why
The export proves the Prompt Library existed as a large real corpus, but the latest recovered `AO.910.PRM.LIB` body resolves to a history/metadata-style document instead of the actual library body.

#### Best conversations to open
1. **PROMPT LIBRARY**  
   URL: `https://chatgpt.com/c/684bbc9d-118c-8007-acf6-fdcf35fa1f30`  
   Why: strongest source for the library itself, including the 110 vs 317 count dispute.

2. **Prompt Library Overview**  
   URL: `https://chatgpt.com/c/6845ad2b-3224-8007-84ac-626a504207e3`  
   Why: likely index/overview representation of the library.

3. ***prompt Library / dyamic prompt forge***  
   URL: `https://chatgpt.com/c/68594052-8264-8007-a503-f657a04d94c1`  
   Why: likely bridge between prompt library, dynamic prompt forge, categories, and autocomplete-style behavior.

4. **Prompt Expansion Ready**  
   URL: `https://chatgpt.com/c/6849d663-c6d4-8007-ae50-37fe2edfd798`  
   Why: likely holds expansion-stage prompt additions not cleanly preserved in recovered `LIB`.

#### What to capture manually
- the latest full body of the main prompt library
- any index or category table that claims the full count
- any linked `IDX`, `META`, `HIST`, or `Full` canvases
- any place where the UI shows prompt count 317 or a larger registry than the export-recovered body

---

### Priority 2, AO.001.RBI family
This is the highest-value index/governance target.

#### Why
`AO.001.RBI` is real, but overloaded. The export shows drift between:
- root recursive boot index
- concrete bootloader config
- command registry / trigger map style derivatives

#### Best conversations to open
1. **Bootloader Function and Context**  
   URL: `https://chatgpt.com/c/6856841d-0278-8007-8425-f9869c3f8662`  
   Why: explicitly distinguishes `!boot`, boot profile, canvas load map, and command list behavior.

2. **Bootloader Initialization Explained**  
   URL: `https://chatgpt.com/c/6838fdbf-3938-8007-82e5-3ef0e64867a1`  
   Why: explicitly says `AO.001.BOOT loaded` while describing `AO.001.RBI` as the recursive meta-index. Strong evidence for split between BOOT and RBI.

3. **Boot Sequence Execution**  
   URL: `https://chatgpt.com/c/68577b7c-3c08-8007-b5c9-a8ffabffcbc6`  
   Why: contains modern boot stack framing and references the booted canvas set.

4. **BUILDING THE WEBAPP**  
   URL: `https://chatgpt.com/c/6857f12f-ff4c-8007-94b4-173ae272e279`  
   Why: likely source of the recovered `bootloader.json` body currently sitting in `raw/AO.001.RBI.md`.

#### What to capture manually
- whether `AO.001.RBI` and `AO.001.BOOT` were treated as distinct canvases
- the latest full body of the root boot index
- the latest full body of any `bootloader.json` or runtime manifest
- any explicit command registry or trigger map canvases that were linked but should not be merged into RBI

---

### Priority 3, AO.910.PSN family
This is the main persona-family disambiguation target.

#### Why
The recovered family clearly contains real persona material, but the parent key `AO.910.PSN` was used as a bucket for multiple child personas and onboarding/behavior documents.

#### Best conversations to open
1. **Recursive Persona System Design**  
   URL: `https://chatgpt.com/c/68332190-92b8-8007-95e4-27c38f9b1e07`  
   Why: main persona-system source conversation.

2. **System Boot Initialization**  
   URL: `https://chatgpt.com/c/6845c6c8-a8c4-8007-9e25-d03dd6cc22e8`  
   Why: contains `AO.910.PSN.LIBRARIAN`, which appears stable and should stay separate from the overloaded parent.

#### What to capture manually
- any explicit parent persona index body for `AO.910.PSN`
- child persona canvases with their exact IDs
- evidence that `Builder`, `Librarian`, `Assassin`, `Architect`, `UXWatchdog`, etc. were distinct canvases rather than revisions of one parent

---

## Optional manual targets

### EL.410.TNF family
#### Current status
Mostly resolved from export alone. Manual access is optional, not required.

#### If you want deeper recovery
1. **translation 2.0 integration and expansion**  
   URL: `https://chatgpt.com/c/684489e5-ddf8-8007-8e00-91dd8aae45fc`
2. **BUILDING THE WEBAPP**  
   URL: `https://chatgpt.com/c/6857f12f-ff4c-8007-94b4-173ae272e279`
3. **7 Laws of Power**  
   URL: `https://chatgpt.com/c/696a4b54-363c-8330-89f5-6e810dca0e69`

#### Why
These may expose richer benchmark/seat/voice-controller variants of TNF that were referenced in search but are not required to establish the family’s canonical identity.

---

### PR.000.SPP family
#### Current status
Largely resolved from export alone. Manual access is low priority.

#### Only open if you want perfection
1. **Boot Sequence Execution**  
   URL: `https://chatgpt.com/c/68577b7c-3c08-8007-b5c9-a8ffabffcbc6`
2. **Canvas List Retrieval**  
   URL: `https://chatgpt.com/c/688b7d01-e398-832a-9802-64b8f97b64d4`

#### Why
This can confirm the cleanest latest full body, but the family identity is already stable.

---

## Fastest manual workflow
For each conversation above:
1. open the URL in ChatGPT
2. if the URL fails, search the exact conversation title in ChatGPT history or fall back to the local exported source page under `/home/elos/.openclaw/wiki/main/sources/`
3. search within the conversation for the exact ID, for example `AO.910.PRM.LIB`
4. if a canvas/textdoc panel appears, open it
5. copy the latest full canvas body, not just a summary
6. if there are multiple variants, note which one looks like:
   - parent index
   - child/sibling artifact
   - metadata/history layer
   - implementation/runtime manifest

## Known URL-failure fallback notes
- If `PROMPT LIBRARY` does not open directly, fall back to:
  - `Prompt Library Overview`
  - `***prompt Library / dyamic prompt forge***`
  - `Prompt Expansion Ready`
- If `Recursive Persona System Design` does not open directly, fall back to:
  - `System Boot Initialization`
  - any accessible conversation where child persona IDs like `AO.910.PSN.LIBRARIAN`, `AO.910.PSN.Builder`, `AO.910.PSN.UXWatchdog`, or `AO.910.PSN.Assassin` appear in an actual canvas panel
- If a conversation is inaccessible in live ChatGPT but present in the export, treat the export transcript as evidence for family identity and reserve live manual recovery only for missing full canvas bodies.

## Minimum manual payload that would unblock the most
If you only want to do the smallest useful manual pass, open these three first:
1. `https://chatgpt.com/c/684bbc9d-118c-8007-acf6-fdcf35fa1f30`
2. `https://chatgpt.com/c/6856841d-0278-8007-8425-f9869c3f8662`
3. `https://chatgpt.com/c/68332190-92b8-8007-95e4-27c38f9b1e07`

Those three are the best leverage for resolving the biggest remaining ambiguity in:
- prompt library
- boot/root index
- persona family structure
