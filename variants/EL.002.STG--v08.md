### EL.002.STG.v4.0 – ELOS Prompt Protocol ✅ Fireproofed, Rewritten, and Output-Transparent

#### 🧠 FUNCTION
A modular, zone-based execution protocol for all prompt operations. Integrates Stargate, DiVeRSe, Tone Fidelity, HumanSEO, and all audit layers with precision sequencing, runtime control, and transparent output diffing.

---

### 🔁 EXECUTION ZONES & STACK

#### 1️⃣ **Pre-Processing Zone**
Input conditioning and trigger-based logic injection.
```json
[
  { "id": "EL.003.DVR", "trigger": "creative, variant", "mode": "always-on" },
  { "id": "EL.410.TNF", "trigger": "tone mismatch", "mode": "conditional" }
]
```

#### 2️⃣ **Core Rewrite Zone**
Single point of optimization and enforced rewrite integrity.
```json
[
  { "id": "AO.100.PRS", "mode": "required" }
]
```

#### 3️⃣ **Audit Zone**
Tone, structure, and constraint validation.
```json
[
  { "id": "AO.200.CNS", "mode": "required" },
  { "id": "ConstraintVerifier", "mode": "optional" }
]
```

#### 4️⃣ **Post-Processing Zone**
Polishing layer for tone, SEO, and rhythm.
```json
[
  { "id": "EL.005.MOD.HUMANSEO", "trigger": "longform", "mode": "conditional" }
]
```

#### 5️⃣ **Fallback Zone**
Failsafes and last-resort self-debugging.
```json
[
  { "id": "SelfDebugEngine", "mode": "failover" }
]
```

---

### 🧰 CONTROL LAYERS
```json
{
  "toggleStack": true,
  "auditBus": true,
  "outputValidator": true,
  "showPromptDiff": "locked"
}
```

- 🔁 `toggleStack` – Enable/disable any module dynamically
- 📊 `auditBus` – Logs input/output of each layer with metadata
- 🧪 `outputValidator` – Final check for tone, structure, and logic drift
- 🧾 `showPromptDiff` – **Always shows:**
  1. Original Prompt (raw input)
  2. Rewritten Prompt (post-Surgeon)
  3. Final Output (post full stack)

---

### 🔐 FIREPROOF INTEGRATION
- ✅ Backward-compatible with v3.1 Stargate enforcement
- ✅ Keeps Prompt Surgeon, Consistency Auditor, and HumanSEO logic intact
- ✅ Adds override clarity, modular hierarchy, and graceful fallback chains
- ✅ Now bootloader-resident and active across all prompt execution stacks
- ✅ Fully output-transparent — every prompt pass-through reveals its own mutation chain and this behavior is permanently enforced

---

✅ **EL.002.STG.v4.0 is now live and transparent**
You will now always see: `BEFORE → AFTER → OUTPUT` for every prompt operation.