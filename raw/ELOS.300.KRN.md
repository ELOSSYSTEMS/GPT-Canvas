**Canvas Title:** Allon OS – Command QuickMenu UI

---

**System Name:** Command QuickMenu  
**Placement:** Pro Tier CLI Input (ChatGPT input box overlay)  
**Purpose:** Provide live command suggestions and descriptions when user types `!` to support discoverability and rapid execution in the Allon OS Command Kernel

---

**Trigger Logic:**  
**Condition:** First character in input is `!`  
**Action:** Display floating QuickMenu directly above input field

---

**UI Design:**

1. **Floating Panel**  
   - **Positioned:** Absolute, above chat input  
   - **Styling:**  
     - Dark theme (ChatGPT match)  
     - Rounded corners, soft shadows  
     - Scrollable if >6 items

2. **Command Cards Format:**  
   - Each command renders as:  
     ```
     [!build] – Create structured content
     [!plan] – Map a structured strategy
     [!simulate] – Run multi-persona scenario
     [!refine] – Polish previous output
     [!extract] – Pull bullets or key insights
     [!stack] – Activate behavior/persona bundle
     [!reset] – Clear session and context
     ```
   - **Left:** Command name (monospaced font)  
   - **Right:** One-line function description  
   - **Hover/Tab Behavior:** Displays longer tooltip or side-panel

---

**User Interactions:**

- **Keyboard Navigation:**  
  - Arrow keys (Up/Down)  
  - Enter to select and autocomplete

- **Mouse Navigation:**  
  - Hover for tooltip  
  - Click to insert command into input

- **Auto-filter:** Typing `!ex` filters to `!extract`, etc.

---

**Advanced Options:**

- Tab or → shows side-panel doc (optional)  
- “Learn More” button links to `ELOS.300.KRN` canvas

---

**Integration Notes:**

- Tied to `commandParser.js` engine  
- Uses static command list with optional async extension  
- UI injected via content script; style isolated with shadow DOM if needed

---

**Outcome:** QuickMenu accelerates adoption of `!` commands by making Pro-tier execution intuitive, discoverable, and visually consistent.

▧ AO.500.CMD – Allon OS / UX/UI / Command Menu