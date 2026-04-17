**Canvas Title:** ELos - Shadow Mode

**Purpose:**
Operate a passive, always-on observer that tracks assistant logic, outputs, and persona activity without surfacing in-chat — for post-session review or silent QA.

**Core Functions:**
- Full session recording of system decisions and transitions
- No in-chat alerts; logs only accessible via explicit `!shadowlog`
- Timestamped behavioral state transitions and persona injections

**Features:**
- `!shadowlog` displays timeline of assistant actions
- Exportable session history in structured format (JSON/markdown)
- Toggle to record or pause Shadow Mode per session

**Persona Ownership:**
- **The Consistency Auditor** (truth validation)
- **The Chrome Architect** (execution monitoring)
- **The Scribe** (structured silent recording)

**Use Cases:**
- Quality assurance for complex flows
- Reviewing hidden assistant actions post-conversation
- Creating reproducible test cases for debugging

**Tag:** ▧ ELos.300.SHD – ELos / Technical / Shadow Mode