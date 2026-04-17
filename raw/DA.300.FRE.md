**Canvas: Dabroo - Free Tier Extension Plan**

**Objective:**
Design the feature set and behavioral structure of the free (non-premium) version of the Dabroo Chrome extension.

---

**Core Principle:**
Free tier should deliver real utility and create "aha moments" while:
- Making users dependent on Dabroo's value.
- Obscuring the premium mechanisms (e.g., prompt logic, personas).
- Nudging upgrade at key friction/reward points.

---

**Free Tier Inclusions:**

**1. UI Elements**
- Toggle switch: Enable/disable Dabroo Mode
- Visual confirmation: "Dabroo Mode Active" badge
- Branded chat bubble icon instead of lightning bolt

**2. Prompt Injection (Hidden)**
- Eden prompt logic active in background
- Prompt rewritten automatically before submission
- Free users cannot see or edit the prompt injection

**3. Output Handling**
- All responses are Eden-enhanced
- Dabroo header added to top of message ("Dabroo AI 🧠")
- Original user prompt not shown post-rewrite

**4. Feature Limitations**
- No access to:
  - Persona selector
  - Prompt editor or inspector
  - History search
  - Canvas/folder manager
  - Settings editor
- No ability to view injected prompt

**5. Upgrade Triggers**
- "Want to see how Dabroo transformed your prompt? Upgrade to Pro."
- Attempting to access locked features opens upgrade modal
- Usage cap or cooldown logic (e.g., 10 messages per day)

**6. Technical Implementation Notes**
- Use `sessionStorage` to persist toggle state
- Use `MutationObserver` to reinject toggle after chat switch
- Prompt injection should occur before fetch call
- Visual components injected via `content.js`

---

**Future Enhancements (Free Tier Only)**
- Add "Did this help?" thumbs up/down for reinforcement learning
- Daily tip popup ("Dabroo Tip of the Day")
- Countdown timer to next free use if cap hit

---

**Tag:** ▧ DA.300.FRE – Dabroo AI / Technical / Free Tier Extension