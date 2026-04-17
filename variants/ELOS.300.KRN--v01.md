**Canvas Title:** ELos - Command Kernel & Execution Chains

---

**System Name:** Command Kernel (CK)
**Placement:** Pro Tier (Sovereign Command Protocol)
**Purpose:** Enable users to control ELos via modular, syntax-driven commands that chain logic across personas, behaviors, and execution layers.

---

**Core Concept:**
The `!command` system acts as a CLI interface for the assistant OS — allowing users to issue operational directives instead of prompts.

---

**Syntax Format:**
```
!command | [target/context] | [modifiers]
```

Examples:
- `!plan | Product Launch`
- `!simulate | Brand Steward + Strategist`
- `!build | Website Copy`
- `!extract | CTAs only`

---

**Primary Commands:**
| Command      | Action                                                                 |
|--------------|------------------------------------------------------------------------|
| `!build`     | Execute output via Builder persona                                     |
| `!plan`      | Load Planner logic and map strategy                                    |
| `!simulate`  | Run multi-persona simulation with defined roles                        |
| `!refine`    | Pass prior output to Editor module                                     |
| `!extract`   | Isolate insights, bullets, CTAs, or logical structure                  |
| `!stack`     | Activate layered personas and behaviors                                |
| `!override`  | Force system override of defaults (tone, limits, scope)                |
| `!reset`     | Full context reset and logic chain wipe                                |

---

**Execution Chains:**
Commands can be chained recursively to form logical pipelines:
```
!plan | Campaign Strategy
→ !simulate | Brand Steward + The Marketers
→ !build | Facebook ad copy
→ !refine | Hebrew, punchy tone
→ !extract | CTAs only
```

Each arrow passes output to the next command, forming a stateful execution path.

---

**Execution Behavior:**
- Output from each step is stored
- State logs are clickable and restackable in UI
- Personas act as runtime logic modules
- Chains can be forked or resumed mid-way

---

**System Behavior Notes:**
- CLI logic interprets commands differently than prompts
- No assistant guesswork: commands are explicit
- System infers chain logic from structural flow, not natural language

---

**UI Layer Hooks:**
- Pro UI contains CLI-style input box
- Command breadcrumbs rendered as interactive tiles
- Auto-suggest with command library reference (`!help`)

---

**Outcome:** The Command Kernel turns ELos into a programmable interface — enabling sovereign execution chains and modular cognitive control.

▧ ELOS.300.KRN – ELos / Strategy / Kernel