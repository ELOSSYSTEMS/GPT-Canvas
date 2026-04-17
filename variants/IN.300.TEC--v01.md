**Project Name:** Allon OS – Chrome Extension System Blueprint

**Purpose:** Create a Chrome extension that replicates Allon’s internal ChatGPT system, offering modular personas, behavioral overlays, journaling, planning, and full control over assistant logic to any user. This enables ChatGPT to function as a dynamic personal operating system.

---

**Core Features (MVP):**

1. **UI Injection:**
- Inject floating control panel or persistent sidebar into ChatGPT.
- Includes persona selector, mode toggles (e.g., Sharpening Mode, Stoic Governor), and quick commands.

2. **Persona Engine:**
- Users can activate predefined personas or create their own.
- Each persona has voice, role, behavior, and logic rules.
- Includes memory simulation and usage tracking.

3. **Behavioral Modules:**
- Built-in modules like:
  - Prompt Surgeon
  - Consistency Auditor
  - Stoic Governor
- Users can toggle each module on/off.

4. **Journaling System:**
- Daily Self-Journaler and The Scribe both embedded.
- Timestamped entry logs.
- Optional reflection prompts.

5. **Planning + Scheduling Tool:**
- Daily planner with time-blocked schedule.
- Rollover logic for incomplete tasks.
- Integration hooks for Google Sheets and Calendar.

6. **Command Interface:**
- Voice or text-driven.
- Examples: “Good morning,” “Log this,” “Activate [persona],” “What’s left from yesterday?”

7. **Memory Simulation Layer:**
- Stores recent context in localStorage.
- Personas recall relevant past interactions per user-defined retention scope.

---

**Technical Architecture:**
- **content.js** – DOM injection + event handling.
- **background.js** – Manages persistent settings and sync.
- **popup.html** – Optional config UI.
- **storage.js** – Local state (personas, logs, modules).
- **manifest v3** – Permissions: storage, activeTab, scripting.

---

**Future Expansion:**
- Account-based syncing.
- Tiered access model (free tier with limited personas + Pro).
- Drag-and-drop interface builder.
- AI-driven persona suggestions based on user input patterns.

▧ IN.300.TEC – Internal / Technical / Architecture