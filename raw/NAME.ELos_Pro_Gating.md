**Title**: *Pro Tier Gating System*

---

### Corrected Version

### Purpose:
Define the rules and behavior for gating features across tiers in ELos, specifically the Beginner tier, with visibility into locked features and a clean OS-like experience — not a gamified environment.

---

### Beginner Tier Restrictions:
- **Functionality is limited**:
  - Only core 5 personas are available
  - Only the default assistant mode is active
  - Journaling and canvas access limited to `!journal`, `!overview`, and `!help`
  - No command chaining (`!cmd1 -> !cmd2` logic is disabled)

- **Advanced Features Are Visible but Disabled**:
  - All locked items are **grayed-out**
  - Includes:
    - Additional personas
    - Behavior mode selectors
    - Pro-level `!commands`
  - Clicking these elements triggers a subtle response (either a chat message or UI modal):
    - “This feature is available in the Intermediate or Pro tiers.”

---

### UX Guidelines:
- System emphasizes **transparency without frustration**
- No gamified elements:
  - No scores
  - No streaks
  - No fake ‘unlock’ sounds or effects
- Entire interface remains clean, calm, and OS-like

---

### Upgrade Prompt Triggers:
- Repeated attempts to click locked items
- Wizard assistance failing due to tier limit
- Internal usage tracking (non-visible to user)

---

### Optional UX Enhancements:
- Locked personas display their name and a short teaser description
- Tier selector remains available in `popup.html`
- Upgrade prompt only appears after meaningful engagement (e.g. 3+ blocked clicks or failed attempts to run a pro command)

---

**Gating System Summary**: Show everything. Restrict action. Invite curiosity, not compliance.