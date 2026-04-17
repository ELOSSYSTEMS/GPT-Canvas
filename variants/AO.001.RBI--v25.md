**📦 ELOS EXTENSION FINAL FORM v1.0 – LOCKED**

---

### 🧱 1. CORE PHILOSOPHY
**Premise:**
> Local-first extension that upgrades ChatGPT by giving users structured memory (canvases), translation (Hebrew-native), and protocol-enhanced prompting—all without any API calls.

**Strategic Goal:**
> Replicate Allon's own recursive system, visually and functionally, inside the ChatGPT UI for non-technical users—starting with Hebrew users.

---

### 🧩 2. FEATURE STACK

#### ✅ MVP MODULES
- **Sidebar (UI)**: ChatGPT-native style, right-side aligned, with menus:
  - Canvases
  - Prompt Library (search + browse)
  - ELOS Academy
- **Bootloader (Local)**: Runs on load/install; loads all local canvases, logic, and persistent data
- **Canvas System**: Structured JSON-based logic/memory modules
- **Prompt Library**: Curated prompts, searchable by category, stored locally
- **Librarian Persona**: Contextual UX guide; embedded in icon, triggers onboarding modals and tooltip popups
- **TranslateOS [Hebrew]**: Hebrew-native prompt enhancer (non-API version) that rewrites inputs/outputs in English then returns Hebrew

#### 🟡 PHASE 2 (OPTIONAL ADD-ONS)
- ELOS Prompt Designer (recursive prompt builder)
- Visual OS (Midjourney-only Hebrew image prompts)
- Persistent Personas
- Editable Canvas Lightbox
- Modular Feature Storefront

---

### 🧠 3. CONSTRAINTS
| Constraint             | Enforcement               |
|------------------------|---------------------------|
| ❌ No API calls         | Full client-side JS only  |
| ❌ No external database | Chrome/localStorage only  |
| ❌ No server middleware | No Express/Firebase/etc   |
| ✅ Chrome Sync Ready     | For bookmarks + backups   |

---

### ⚙️ 4. EXECUTION STRUCTURE
- Canvases: JSON format, keyed under AO.001.RBI
- Bootloader Kernel: EL.300.KRN (drives module logic)
- Sidebar Modules:
  - `Canvases`
  - `Prompt Library`
  - `ELOS Academy`
- TranslateOS Runtime: Hooks into ChatGPT DOM and rewrites prompt text pre/post submission
- Librarian Persona: PR.910.PSN.LIBRARIAN, persistent across sidebar and input triggers

---

### 📈 5. TARGET PERSONA (END USER)
- Hebrew-first ChatGPT Plus user
- Seeks structure, improved prompts, or full Hebrew workflow
- Knows nothing about recursion or protocol logic
- Pays for outcome and control, not novelty

---

### 🚨 FINAL SANITY FILTER
This is **not**:
- A protocol marketplace
- A full SaaS platform
- A cloud-native collaborative tool
- A backend-powered AI agent framework

This **is**:
- A self-contained browser extension
- Built to simulate and productize Allon's recursive prompt + memory ecosystem
- Designed to visually and functionally mimic what power users do manually

---

**Status: LOCKED ✅**
All future work, questions, and modules must refer back to this as the canonical source of scope and logic for the MVP build.