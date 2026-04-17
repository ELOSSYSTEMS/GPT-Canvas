## 🛠 Translate2 – WASM-NLP Hybrid Extension (Way Forward to Chrome Store)

### Dewey Decimal Catalog ID: 004.678.021-T2E

### 🌐 Objective:
Create and ship a Chrome Extension powered by the Translate2 symbolic engine, using a WebAssembly-backed NLP hybrid architecture that operates offline, respects privacy, and fits within Chrome Web Store Terms of Service.

---

### ✅ Phase 1: Core Engine Design (Translate2-WASM)

- [ ] **Define Local Logic Engine**
  - Symbolic layer mapper (archetype detection, mythic frames)
  - NLP layer: lightweight tokenizer or logic parser

- [ ] **Select WASM-Compatible NLP Modules**
  - spaCy via Pyodide (if needed)
  - Transformers.js for JS-native tokenization
  - Custom FSMs encoded in WASM for logic steps

- [ ] **Structure Core Layers:**
  - Input Preprocessor
  - Meta-Prompt Generator
  - Local Execution Engine (WASM or JS logic)
  - Output Renderer

---

### ✅ Phase 2: Extension Architecture

- [ ] **Manifest v3 Setup**
  - Set up permissions, background scripts, and WASM bindings
  - Ensure zero network calls (for TOS compliance)

- [ ] **Frontend Popup/UI**
  - Textarea input with dual-send logic:
    - 🔘 Button 1: Run with Translate2 Lite (local WASM)
    - 🔘 Button 2: Run with standard ChatGPT (delegates to OpenAI Web UI or external chat)
  - Output viewer with optional symbolic layer visualization

- [ ] **Local Storage Handling**
  - Save recent prompts and outputs (optional)

---

### ✅ Phase 3: Build & Test

- [ ] **WASM Compilation & Integration**
  - Test inference speed and output quality
  - Optimize WASM size for load time

- [ ] **Offline & Privacy Audit**
  - Confirm no external requests
  - Ensure GDPR/TOS compliance

- [ ] **UI/UX Polish**
  - Visual cues for each Translate2 layer
  - Minimal, identity-consistent styling

---

### ✅ Phase 4: Publish to Chrome Web Store

- [ ] **TOS Compliance Checklist:**
  - No remote code execution
  - All code bundled at install
  - No user tracking, ads, or analytics

- [ ] **Assets & Submission**
  - Logo, screenshots, description
  - Feature summary: "Offline Symbolic Translator"
  - Privacy policy: local-only processing

- [ ] **Submit and Monitor**
  - Track reviews, debug reports, and feedback
  - Plan for auto-update enhancements

---

### 🧠 Feature Modes: Lite vs Pro

**Lite Mode (default)**
- Language-agnostic symbolic logic
- Core archetypes and structural mapping
- Two-button system:
  - Run via Translate2 Lite (offline WASM)
  - Run via standard ChatGPT (optional redirect)

**Pro Mode (user-enabled)**
- Language-specific NLP packs (e.g., Hebrew, Arabic, etc.)
- Archetype visualizer
- Persona overlays (mythic, emotional, structural)
- Extended recursive inference logic

---

### 🧠 Future Roadmap (Post-Launch)
- Export to .txt or .json
- Collaborative mode with mirrored prompts
- Cloud sync option (optional and opt-in)

> This document will evolve with build checkpoints. Ready to activate next phase on command.