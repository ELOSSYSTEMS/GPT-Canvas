**Canvas Title:** Dabroo Free Tier Prompt Logic & Visibility Gate

**Purpose:**
Document how Dabroo injects and hides persona logic (Eden) for free users, and uses visibility as a conversion mechanism for Pro.

---

## 1. Core Concept:
Free-tier users benefit from Dabroo’s prompt rewriting and persona injection (via Eden), but cannot see how it works unless they upgrade.

This creates an "invisible value" effect: smart outputs with no visible transformation.

---

## 2. Free Tier Behavior:
- Input: User types sloppy/casual Hebrew
- Dabroo rewrites it silently in the background
- Eden persona prompt is wrapped around the cleaned prompt
- Modified prompt is submitted to ChatGPT
- User sees only their original Hebrew in the input field
- Output is fluent, clean, native-sounding Hebrew (thanks to Eden)

**Visibility:**
- No prompt breakdown shown
- No toggle to view prompt logic
- Optional soft wall: after X uses, show upgrade nudge

---

## 3. Pro Tier Behavior:
- Same backend behavior: rewrite + Eden injection
- UI shows both:
  - Original input
  - Final English prompt submitted
  - Eden wrapper (system prompt logic)
- Toggle: "? רוצה לראות איך דאברו עשה את זה"

---

## 4. Upgrade CTA Logic:
- For Free Users:
  - Locked overlay near output: "? רוצה לראות איך זה עובד"
  - Click reveals modal: “הפיצ׳ר הזה זמין רק למנויים” + upgrade CTA
  - Optional trigger after 5–10 uses: “שדרג כדי לראות את כל הקסם שמאחורי הקלעים”

---

## 5. Technical Mechanics (Client-Side Only):
- Use `localStorage` flag: `dabroo_pro = true/false`
- Inject Eden prompt via content script before submission
- Hide all injected logic unless `dabroo_pro === true`
- UI toggles and CTA overlays conditionally rendered

---

**Summary:**
Dabroo Free Tier runs silently — improving outputs without revealing how. This creates perceived magic while reserving transparency and control for Pro users only.

Visibility becomes the upsell, not just features.


▧ DA.300.LOG – Dabroo AI / Technical / Logic