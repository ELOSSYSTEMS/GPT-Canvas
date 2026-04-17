# Forever Flowers — Gifting System Specification (Fireproofed v2)

Status: **LOCKED / FIREPROOFED**  
Applies to: **Next.js + Vercel + Shopify Headless Storefront**  
Primary Lens: **Tamar Kay — Israeli Luxury Consumer Psychology**  
Governance: **Forever Panel Approved**

---

## 1. Core Principle (Unchanged)

**Gifting is a studio service, not a checkout task.**

The customer is never made to manage logistics or feel responsibility for execution.  
The studio finishes the piece with quiet authority.

Less explanation = more confidence.

---

## 2. Studio Finish — What Every Order Includes (All Tiers)

Every Forever Flowers order includes a **Studio Finish** by default.

This is assumed. It is not framed as an add-on or a gift extra.

### Included in every order

1. **Care Guide Card**  
   - ללא מים  
   - להרחיק מאור שמש ישיר, לחות וחום  
   - לטפל בעדינות לשמירה על מבנה וצבע  
   - מתאים לחללים מאווררים ובטמפרטורה יציבה  
   - למעלה מ־100 ימי יופי טבעי

2. **“About the Arrangement” Card**  
   - Edition framing  
   - Design intent and narrative  
   - Quiet luxury language (שקט, ניקיון, איזון טבעי)  
   - Presence without demand

These two cards are **always included**.

They are never optional and never surfaced as configuration choices.

---

## 3. Complimentary Candle Policy (LOCKED)

### Tier 1 — סידורים (280₪)
- No candle included by default
- Candle may be offered as a **quiet optional add-on**

### Tier 2 — סטים
- **Complimentary handmade candle included**
- Auto-added
- Not removable

### Tier 3 — עיצוב אישי
- **Complimentary handmade candle included**
- Auto-added
- Not removable

### Global candle rules
- Candle is framed as part of the **Studio Finish**
- Never labeled “free”
- Never shows retail value
- Quantity: **1 candle per order**

---

## 4. Gift Decision Gate (Preserved, Refined)

The customer is always asked:

> **האם זו מתנה?**

### Placement rules
- Asked **only after Add to Cart**
- Lives in Cart Drawer or Cart Page
- Default selection: **לא, בשבילי**

This preserves frictionless Tier 1 conversion.

---

## 5. Gift Gate UI (Fireproofed)

### Collapsed state (default)

Component: `GiftGateCard`

Visible elements only:
- Title: **האם זו מתנה?**
- Two buttons:
  - כן, זו מתנה
  - לא, בשבילי (default)
- One subline only:
  - **גימור סטודיו כלול**

No lists. No explanations. No upsell language.

If Tier 2 or Tier 3 item exists in cart, append silently:
- **+ נר בעבודת יד כלול**

This line must not appear for Tier 1–only carts.

---

## 6. “For Me” Mode

If **לא, בשבילי** is selected:
- No further UI is revealed
- Checkout proceeds immediately

Operational outcome:
- Care Guide card included
- About card included
- Studio wrap applied
- Tier 2/3: candle included

---

## 7. “Gift” Mode (Progressive Disclosure)

If **כן, זו מתנה** is selected, open `GiftStudioSheet`.

### Section A — Studio reassurance (read-only)

Headline:
> **הסטודיו מסיים את זה כמתנה.**

Bullets (visible only inside sheet):
- אריזה מינימליסטית
- כרטיס שמירה
- כרטיס על הסידור
- Tier 2/3 only: נר בעבודת יד כלול

---

### Section B — Optional personal message

Label:
- **שורה אישית (אופציונלי)**

Rules:
- Single text field
- Short by design
- No obligation cues

---

### Section C — Recipient details (collapsed by default)

Row label:
- **פרטי מקבל (לתיאום בלבד)**

On expand:
- שם
- טלפון

No sender name field.  
No operational explanations unless tapped.

Primary CTA (fixed bottom):
- **שמירה והמשך לתשלום**

---

## 8. Tier 3 Gifting — Exception Flow (Refined Tone)

Tier 3 is service-led, not product-led.

If a Tier 3 item is marked as a gift:

Replace standard gift inputs with:

Text:
> **בעיצוב אישי כמתנה, נהיה בקשר עם המקבל וניקח אחריות מלאה על התהליך.**

CTA:
- **התחילו תהליך מול המקבל**

Outcome:
- Recipient becomes the primary participant
- Flow routes to WhatsApp or short intake
- No standard gift message emphasis

---

## 9. Shopify + Headless Data Contract

### Product metafields / tags
- `ff:tier` = start | studio | bespoke
- `ff:includes_candle` = true (Tier 2 / Tier 3)
- `ff:includes_care_card` = true
- `ff:about_card_id` = edition or product mapping

### Candle product
- `ff:is_candle = true`
- Belongs to `candles` collection

### Cart attributes
- `ff_gift_mode` = self | gift
- `ff_gift_message` = optional
- `ff_recipient_name` = optional
- `ff_recipient_phone` = optional
- `ff_bespoke_recipient_onboarding` = true (Tier 3 gift)

---

## 10. Enforcement Rules (Non-Negotiable)

- Candle auto-added when Tier 2 or Tier 3 exists in cart
- Candle cannot be removed
- On any cart mutation, candle presence is revalidated
- Gift UI verbosity must remain minimal in collapsed states

---

## 11. UX Tone Rules (LOCKED)

- No “FREE” language
- No discount framing
- No gift-shop aesthetics
- Calm, studio-led authority
- Defaults over choices
- Progressive disclosure only

Luxury is expressed through **restraint**.

---

## 12. Governance

This document is the **single source of truth** for gifting behavior.

Any future change:
1. Must be debated via the Forever Panel
2. Must update this document before implementation

---

**End of specification.**