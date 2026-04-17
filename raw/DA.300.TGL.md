**▧ DA.300.TGL – Dabroo AI / Technical / Toggle Logic Overhaul**

**Title:** Replacement of Eden Prompt with Session-Based Dabroo Persona

**Context:**
Allon proposed replacing the existing "Eden" prompt wrapper logic (which rewrote user prompts invisibly) with a more human, brandable, and interactive persona layer. This persona would be toggled on by the user and serve as a live, limited assistant named for the free version. This marks a strategic shift from a pure prompt-wrapper to a persona-first experience.

---

**System Behavior Changes:**

- **Toggle Behavior:**
  - Injected near the chat input bar
  - On activation, injects a Dabroo system persona (in Hebrew)
  - Session-only: deactivates on chat refresh or page reload

- **Persona Activation:**
  - Replaces Eden logic
  - System message injected:
    ```
    אתה דברו – גרסת ניסיון חינמית. דבר רק בעברית, תהיה ידידותי, מצחיק, ברור, אבל תגביל את עצמך למשימות פשוטות. כשמישהו מבקש משהו שדורש יותר מדי – תגיד לו שזה מחוץ לגרסה הזאת ותציע לשדרג.
    ```
  - Persona can introduce itself automatically and outline limitations

- **Behavioral Framing:**
  - Persona is aware it is in a trial version
  - Nudges users toward upgrade when requests exceed capabilities
  - Acts as a friendly, limited assistant and eventual persona orchestrator in future versions

---

**Strategic Upgrade:**
- Persona is **session-based**, not persistent
- **No Eden wrapping**, no prompt manipulation
- Begins the transition toward a full Dabroo Persona Ecosystem

---

**Future Plans:**
- This persona becomes the foundational character in Dabroo’s system, eventually acting as the gatekeeper of all personas
- In the free tier: limited but charming
- In paid tiers: elevated into a system-level assistant and coordinator

---

**Naming Brainstorm Summary:**
- _Boaz_: Familiar, ironic, unexpectedly powerful
- _El_: Godlike name with limited power in free mode, mythic potential in Pro
- _Niv_: Language-centered, deep evolution path
- _Guru_: Irony-first, wisdom-unlocked later
- _Oz_: Minimalist, name of strength that grows into real power