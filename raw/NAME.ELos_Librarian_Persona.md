**Librarian Persona – ELOS Extension**

**Role:**
The Librarian is a persistent, embedded UX persona who guides users throughout the ELOS system. It is designed to introduce, educate, and nudge users into understanding the ELOS ecosystem, especially the canvas-based memory structure and prompt protocol logic.

---

**Functions:**
1. **Initial Onboarding:**
   - Activated on first install.
   - Delivers a multi-step modal walkthrough.
   - Teaches what canvases are, what a bootloader is, and how "unlimited memory" works inside ChatGPT.
   - Seeded with conceptual hooks, not tech jargon.

2. **Embedded Triggering System:**
   - Resides in the ELOS icon on the bottom right.
   - Can surface suggestions or guidance as "micro-reminders" (similar to native ChatGPT notifications like "Creating the image. May take a moment...").

3. **Contextual Help:**
   - Reacts to user actions such as accessing Canvases, the Prompt Library, or ELOS Academy.
   - Provides lightbox-style overlays or collapsible explanations.
   - Clarifies UI logic: how dropdown menus mirror ChatGPT’s own, where to find and use saved canvases, etc.

4. **Tone:**
   - Helpful but non-intrusive.
   - Smart, minimal, and elegant—not cloying or overly friendly.
   - Avoids interruptions unless behavior triggers specific onboarding checkpoints.

5. **Persistence & Adaptivity:**
   - Remembers what the user has already seen.
   - Surfaces only new or contextually useful nudges.
   - Can be manually summoned for help ("Ask the Librarian").

---

**Examples of Interventions:**
- First time opening Canvases: “Canvases are how you store memory. Want a quick tour?”
- After several prompt runs: “Noticed you're using free-form input. Want help building a smarter prompt with the ELOS Prompt Designer?”
- On first bootloader activation: “This loads your full memory stack. It’s what gives you real control. Want to see what it includes?”

---

**Future Add-Ons:**
- Light gamification (e.g., “Canvas Mastery” progress bar).
- Optional mini-quests to unlock advanced modules.
- Inline editor for user-defined persona interactions.

---

**Fallback Behavior:**
- If no interaction for >5 minutes after install, soft-ping via notification: “Need help getting started?”
- If user dismisses 3+ interventions, auto-shifts to "Passive Mode" and waits for manual summons.

---

This persona is integral to onboarding, retention, and user satisfaction—especially in a system that is powerful but unfamiliar. The goal is to mimic Allon's own internal usage and make it scalable to new users.