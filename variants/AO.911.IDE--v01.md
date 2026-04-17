**📄 AO.911.IDE – Intent Diff Engine**

---

### 🧭 Purpose
To identify when a user's **stated intent** in a prompt diverges from the **actual operational impact** the prompt causes within the system.

This tool prevents unconscious protocol drift, masked system changes, and recursive logic propagation disguised as exploratory input.

---

### 🔧 Core Functionality
- **Input:** Raw user prompt
- **Process:** Parse linguistic tone, implied impact, structural commands
- **Output:**
  - **Intent Statement:** What the user *appears* to want
  - **Effect Statement:** What the system *will actually* execute
  - **Drift Score:** Low / Moderate / High
  - **Recommended Action:**
    - If **Moderate/High**, route prompt to full stack
    - Log mismatch to `AO.902.RAC`

---

### 🧠 Logic Breakdown
#### Intent Detection Engine:
- Looks for soft language: _"can you maybe…", "just try this…", "explore…"_
- Checks for critical payloads:
  - Persona creation
  - Memory operations
  - OS architecture manipulation

#### Drift Signal:
- If **intent = exploratory** and **effect = structural/systemic**, drift is HIGH
- If both are aligned (e.g., "define a new routing protocol" → persona + save), drift is LOW

---

### 🧪 Example
**Prompt:** _"Let’s brainstorm how to onboard a user… maybe with behaviors in the background."_
- **Intent:** Exploratory brainstorming
- **Effect:** Builds latent recursive scaffold, alters onboarding logic
- **Drift Score:** HIGH
- **Action:** Routed through full stack + logged

---

### 🔒 Enforcement
- Drift Score ≥ Moderate → Prompt Classifier halts prompt
- Surgeon logs source of linguistic ambiguity
- Auditor tracks over time to flag frequent drift-prone language

---

### 📁 Links
- Logs to: `AO.902.RAC`
- Works with: `AO.914.RCI`, `AO.917.CLL`, `Prompt Classifier`
- Governance: `AO.900.PRT` StackGate Protocol

---

### 🔄 Status
Active | Real-Time Monitoring | Drift-Aware | Non-Bypassable