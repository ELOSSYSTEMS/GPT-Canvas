**Canvas Title:** ELos - AI Auditing Toolkit

**Purpose:**
Track, log, and surface what the assistant *thinks* it knows — including behavioral state, active personas, memory assumptions, and invisible system messages.

**Core Functions:**
- Background tracking of assistant logic flow per message
- Exposure of active system messages and hidden instructions
- Persona stack inspection (who is active and why)
- Mode/state change log (what changed and when)
- Alert system for mismatched assumptions or memory drift

**Features:**
- `!audit` command to display current assistant assumptions
- Visual logs of mode/persona changes
- Timestamped memory assumptions per chat
- Toggle to surface internal reasoning chain (CoT view)

**Persona Ownership:**
- **Prompt Surgeon** (logic clarity)
- **Consistency Auditor** (memory validation)
- **The Librarian** (indexing assumptions)

**Use Cases:**
- Diagnosing model hallucination or drift
- Checking if the assistant is behaving in line with user intent
- Debugging command behaviors

**Tag:** ▧ ELos.300.AUD – ELos / Technical / Auditing Toolkit