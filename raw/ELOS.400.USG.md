**Title:** ELos – Token Throttle + Prompt Injection Refactor

**Objective:** Migrate legacy AIOS/GPTOS logic into active ELos tiered system architecture.

---

### **Module 1: Token Throttle System (Legacy: ▧ AI.400.TKN)**

**New Module Name:** `!usage` – Token & Throttle Monitor  
**Canvas ID:** ▧ ELOS.400.USG  
**Persona Owner:** Prompt Surgeon + Rate Governor *(to be built)*  
**Tier Access:** Pro only

**Function:**
- Monitors user token usage per session/day/week
- Warns on overuse and auto-triggers throttling logic if custom usage caps are hit
- Integrates with `sessionStorage` and eventual OpenAI API tracking (when implemented)
- Optional UI badge with session count + warning icon

**UI Integration:**
- Appears in Wand tooltip hover panel for Pro users
- Logs visible under `!status` or `!usage`

---

### **Module 2: Prompt Injection Core (Legacy: ▧ AI.300.INJ)**

**New Module Name:** `!inject` – System Message & Prompt Scaffolding Tool  
**Canvas ID:** ▧ ELOS.300.INJ  
**Persona Owner:** Prompt Surgeon  
**Tier Access:** Intermediate+

**Function:**
- Allows crafting, viewing, and testing of system messages and dynamic prompt injections
- Supports:
  - Header/footer prompt wrapping
  - Persona overlays
  - Memory simulation logic
- Use-case: Developers and advanced users building custom assistant logic inside ELos or 3rd party wrappers

**UI Integration:**
- Accessed via advanced developer panel (locked for Beginner)
- Tooltips explain risk/sensitivity of injection logic

---

### **Retired Canvas:** ▧ AI.500.AUD – Early Conflict Auditor Prototype

**Status:** Officially retired and sealed. Superseded by Consistency Auditor and ELOS.300.CNF
**Tag:** ▧ RETIRED.500.AUD  
**Note:** No longer referenced in any active system.