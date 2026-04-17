**Title**: *ELos Academy Unlock Flow*

---

### Purpose:
Define the behavioral, UX, and technical logic for unlocking partial Intermediate-tier features upon completing the ELos Academy tutorial.

---

## Strategic Objective:
Use the ELos Academy as an activation path to:
- Increase user engagement
- Reduce friction before upgrade
- Create a sense of earned progression

---

## Academy Completion Trigger:
- When the user finishes all required onboarding steps (tracked internally)
- Trigger a system state update to `"intermediate-lite"`

---

## Feature Unlocks (Post-Academy):
| Feature                  | Beginner | Post-Academy | Full Intermediate |
|--------------------------|----------|---------------|--------------------|
| Core 5 personas          | Yes      | Yes           | Yes                |
| `!help`, `!overview`     | Yes      | Yes           | Yes                |
| `!commands` chain        | No       | Yes (basic)   | Yes (full)         |
| Wizard toggle control    | Locked   | Yes           | Yes                |
| 1 bonus persona          | No       | Yes           | All                |
| Mode switcher (1 option) | No       | Yes (default) | All modes          |

---

## UX Behavior on Completion:
- System message: `"System update complete. Intermediate access granted."`
- Toggle updates from `elos-toggle-beginner` to `elos-toggle-lite`
- Wizard becomes user-toggleable
- Optional: Add tier tag "Intermediate (Academy)"

---

## Technical Notes:
- Academy stores progress in `chrome.storage.local` (e.g. `academyComplete: true`)
- On detection, content.js upgrades tier to `intermediate-lite`
- Popup reflects current unlocked state

---

## Retention Loop:
- Post-Academy, allow exploration of intermediate-lite features
- Use gentle nudges (e.g. grayed-out Pro features) to suggest full upgrade

---

**Result**: Engaged users progress naturally, system remains clean, frictionless, and rewarding without gamification.