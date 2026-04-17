**AI OS – The Journal**

**Purpose:** Define the structure, flow, UX design, and sample prompt logic of the journaling system inside AI OS. Inspired by the Self Journal format but written from scratch to avoid any copyright or phrasing infringement.

---

**I. Journal Architecture**

The Journal is broken into two daily flows:
- **Morning Entry (Intention + Setup)**
- **Evening Entry (Reflection + Rollover)**

Each entry is timestamped, stored locally (or synced in Pro+), and organized as canvases under the "Journal" tab, tagged by date.

---

**II. Morning Entry – Flow & Prompts**

**Goal:** Prime the mind, clarify priorities, build momentum

1. **Gratitude Prompt**
> “What’s something — or someone — you’re thankful for today?”

2. **Top Priority Prompt**
> “If only one thing got done today, what would make it a win?”

3. **Supporting Tasks**
> “List 2–4 tasks that support your main goal.”

4. **Time Blocking Assistant**
> “What time do you plan to work on each task?”
- Outputs a time-blocked schedule using assistant memory
- Can export to calendar or just store locally

5. **Daily Tone/Focus Prompt (optional)**
> “What kind of energy do you want to bring into the day?”

---

**III. Evening Entry – Flow & Prompts**

**Goal:** Capture learning, acknowledge progress, reduce open loops

1. **Wins of the Day**
> “What went well today?”

2. **Unfinished Tasks**
> “What didn’t get done?”
- These are rolled over to tomorrow’s entry unless marked as cancelled

3. **Reflection Prompt**
> “What did you learn or notice about how you worked today?”

4. **Mood & Energy Log (optional)**
> “How did you feel throughout the day?”
- Chart or emoji scale for long-term pattern tracking (Pro+)

5. **Final Check**
> “Would you like to roll over any tasks into tomorrow’s plan?”
- If yes → added to next morning’s flow automatically

---

**IV. UX Design (Sidebar Layout)**

- **Tabs:** Morning | Evening | All Entries
- **Input Blocks:** One per prompt, collapsible for speed
- **Tone:** Calm, supportive, neutral (matches active behavior mode)
- **Export Options:** Save as canvas, copy to clipboard, download as .txt
- **Smart Suggestion (Pro+):** “This looks similar to yesterday — want to reuse?”

---

**V. Voice Logic (Persona Layer Integration)**
- If “Motherly Mode” is active → prompts feel nurturing
- If “Sharp Mode” is active → prompts are blunt and to-the-point
- If “Teacher Persona” is active → assistant will follow-up with Socratic questions based on reflection answers

---

**VI. Storage & Retrieval**
- **Default:** Stored locally in browser via `indexedDB` or `localStorage`
- **Pro+:** Optional cloud sync with export/backup tools
- **Indexing:** Entries stored as canvases tagged with `JOURNAL`, `MORNING`, `EVENING`, `YYYY-MM-DD`

▧ IN.500.JRN – Internal / UX / The Journal System