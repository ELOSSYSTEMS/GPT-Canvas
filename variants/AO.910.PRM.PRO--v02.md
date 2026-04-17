**AO.910.PRM.PRO – Prompt Protocol Index**

**Purpose:**
This canvas serves as the master index and tracking system for all prompt optimization protocols used within the Allon OS and ELOS architecture. It documents active, experimental, and archived protocols, including their structure, status, dependencies, and activation criteria.

---

### 🔁 Active Protocols (Fully Integrated)

#### 1. **Stargate Protocol v3.1-total-fireproofed**
- **Function:** Core recursive prompt optimizer
- **Phases:**
  1. Intent Classification + Diagnostic Analysis
  2. Precision Rewrite
  3. Post-Processing (Constraint Verifier, Consistency Audit, Self-Debug)
- **Fireproofing:** Full
- **Activation:** Always-on unless explicitly disabled
- **Canvas:** `EL.002.STG`

#### 2. **Prompt Surgeon**
- **Function:** Fine-tuned surgical modifier for phrasing, clarity, and tone
- **Modes:** Direct Rewrite, Clarification Extractor, Persona Layer Integrator
- **Integrated with:** Stargate and Dabroo
- **Canvas:** `AO.100.PRS`

#### 3. **DiVeRSe Protocol**
- **Function:** Multi-path prompting, reasoning diversification, and synthesis
- **Phases:**
  1. M1 Prompt Variants → M2 Reasoning Paths
  2. Voting Verifier
  3. Answer Synthesis
- **Use Case:** High-ambiguity, high-value outputs
- **Canvas:** `EL.003.DVR`

#### 4. **Consistency Auditor**
- **Function:** Detects tone, logic, or style inconsistencies post-generation
- **Focus:** Ensures voice, tone, format, and verb alignment
- **Canvas:** `AO.200.CNS`

#### 5. **Fireproofing Layer**
- **Function:** Final defense against hallucination, slippage, and loss of context
- **Mode:** Passive, structural
- **Canvas:** Fully embedded in all primary protocols

---

### 🧪 Experimental Protocols (Planned or In Testing)

#### 6. **Meta-Socratic Interrogator**
- **Function:** Socratic QA loop to interrogate and refine user input before output
- **Status:** Design complete, not yet integrated
- **Trigger:** 🔍 Question-heavy input or ambiguity flag

#### 7. **Narrative Chain Integrity Enforcer**
- **Function:** Used in story-heavy or temporal reasoning prompts
- **Status:** Not yet scaffolded
- **Use Case:** World-building, storytelling, multi-step logic

#### 8. **Synthetic Debate Framework (SDF)**
- **Function:** Simulated debate between opposing AI perspectives
- **Status:** Concept only
- **Trigger:** ⚔️ Argumentative or complex ethical queries

#### 9. **Chain-of-Thought Expansion Booster**
- **Function:** Injects CoT scaffolds into concise prompts to lengthen reasoning
- **Status:** Planned for diagnostic tasks or math-heavy prompts

---

### 🧊 Archived / Legacy Protocols

#### 10. **Stargate v2**
- **Replaced by:** v3.1-total-fireproofed
- **Note:** Kept for fallback compatibility only

---

### ⚙️ System Notes
- **Canvas Registry:** All protocol canvases linked directly from this index
- **Bootloader Status:** ✅ Loaded on system boot
- **Prompt Flags Recognized:** 🔍 ⚔️ 🧠 ✍️ 📐 🔐 💡 ✅ ❌
- **Manual Override:** All protocols can be force-disabled per request

---

**Last Updated:** June 3, 2025

To add or activate a protocol, use the command: `Register Protocol: [Name] – [Purpose]`