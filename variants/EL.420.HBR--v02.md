**Canvas Title:** Hebrew Tone Fidelity Engine – Rewrite Logic Scaffold

**Dewey ID:** EL.420.HBR

**Canvas Type:** Language-Specific Rewrite Engine Blueprint

**Purpose:**
Scaffold a native Hebrew tone rewrite engine for ELOS Lite. Designed to intercept robotic or machine-translated outputs and regenerate them with fluent, conversational Israeli phrasing. This is the backbone of the Hebrew version of the ELOS Tone Fidelity Layer.

---

**CORE LOGIC PHASES:**

1. **Robotic Phrase Detection Layer**
   - Maintain a blacklist of common machine-like Hebrew phrases
   - Match against known translation patterns (Google Translate, raw GPT)
   - Tag for transformation

2. **Tone Rewrite Map (Israeli Fluent Style)**
   - Create a substitution map of native Israeli equivalents:
     - Formal → Conversational
     - Over-explained → Direct
     - Passive → Active
     - Awkward word order → Hebrew rhythm
   - Support two tone intensities:
     - Light (Minimal rewrite, subtle corrections)
     - Assertive (Aggressive, confident rewrites)

3. **Idiom & Register Filter**
   - Identify biblical, overly formal, or stiff phrasing
   - Replace with modern Israeli slang, idioms, or idiomatic structures when appropriate

4. **Negative Space Trimmer**
   - Detect redundancy, repetition, or over-modification
   - Remove or shorten without losing clarity

5. **Semantic Parity Check**
   - Compare original and rewritten versions to verify meaning is preserved
   - If semantic drift is detected, discard rewrite and return original

6. **Differential Threshold Rollback**
   - If less than 15% of the prompt is changed, assume rewrite is unnecessary and revert

7. **Fallback Logic**
   - If rewrite fails or output is unchanged, return original input
   - Ensure safety against tone overcorrection

8. **Rewrite Logging Layer (Pro Only)**
   - Log original vs. rewritten prompts with applied transformation tags
   - Store locally for user diagnostics and debugging

---

**DATA SOURCING STRATEGY:**
- Crawl and index high-quality native Hebrew sources:
  - Israeli tech startup websites
  - Ad copy from leading local brands
  - News headlines (Maariv, Calcalist, TheMarker)
  - Viral tweets and conversational LinkedIn posts
- Use sentence pair extraction (original vs. human rewrite)
- Feed into tone fidelity map manually (Lite) or dynamically (Pro)

---

**FEEDBACK INTEGRATION:**
- Connect rewrite patterns to EL.410.TNF feedback signals
- Boost or suppress phrase transformations based on user reactions

---

**UI INTEGRATION PLAN:**
- Passive by default — always runs
- Optional toggle for “strict tone filter” in settings (Pro only)
- Feedback loop wires directly into logic engine (Pro only)

---

**Next Step:**
- Begin populating robotic phrase blacklist and rewrite mapping table
- QA outputs with native speakers
- Lock version once tone matches Hebrew-native expectations

**Status:** Scaffolded with fireproofing logic applied ✅