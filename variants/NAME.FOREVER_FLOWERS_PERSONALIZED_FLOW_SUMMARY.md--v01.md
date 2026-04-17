# Forever Flowers – Personalized, Guided Lifecycle Flow (Canonical Summary)

## Purpose of This Document
This file summarizes the **complete personalization, identity, and guided-flow strategy** discussed, under the constraint of **Shopify Basic (not Plus)**. It is intended as:
- A planning reference for implementation gaps
- A decision framework for what to change or preserve
- A briefing document for review by the **Forever Panel**

This is a *system design*, not a feature list.

---

## Core Thesis
Forever Flowers should behave like a **store with memory**, not a catalog.

The website must:
- Remember where a customer is in their journey
- Never repeat the same initiation flow twice
- Eliminate unnecessary choice
- Feel like a single, ongoing conversation across email and site

All personalization is driven by **state**, not pages.

---

## Non-Negotiable Constraints
- Shopify **Basic plan** (no Plus assumptions)
- Headless or semi-headless (Next.js + React)
- Checkout behavior is largely fixed
- Identity must be handled **outside** checkout
- Emotional guidance > feature personalization

---

## Mental Model (Critical)

### ❌ Do NOT think in:
- Multiple landing pages
- A/B tests
- Catalog-first navigation
- Login-required experiences

### ✅ Think in:
- **One canonical homepage**
- **One Tier-1 PDP**
- **State-driven variants**
- **Irreversible progress**

The site surface stays structurally fixed.
What changes is **what the site assumes about the visitor**.

---

## Visitor Lifecycle States

Each session resolves **exactly one** state:

| State | Meaning |
|-----|--------|
| STATE 0 | First-time visitor, no purchases |
| STATE 1 | Completed Tier 1 purchase |
| STATE 2 | Completed Tier 1 + Tier 2 |
| STATE 3 | Tier 3 / concierge-level |

Resolution priority:
1. Signed email/SMS link
2. Logged-in customer (if present)
3. Session cookie (fallback)
4. Default → STATE 0

---

## Homepage as a Dynamic Surface

There is **one homepage** that projects different variants.

The homepage changes based on resolved state and entry context:
- Headline copy
- CTA label
- CTA destination
- Section visibility
- Content order

Layout does **not** change.

### Homepage Variants

#### STATE 0 – First-Time Visitor
- One CTA only: initiation
- No catalog
- No collections
- Purpose: guided entry

CTA example:
> "אני רוצה להכניס יופי לבית"

Destination:
- Tier 1 PDP only

---

#### STATE 1 – Tier 1 Completed
- Tier 1 CTA is removed
- Primary CTA becomes familiarity-based

CTA examples:
- Primary: "אני רוצה סידור נוסף"
- Secondary (soft): "הסטודיו ממליץ על הצעד הבא"

Destinations:
- Primary → curated collection
- Secondary → Tier 2 guided entry

---

#### STATE 2 – Tier 2 Completed
- Fewer words
- Higher confidence
- Broader access or consultative flow

---

## Tier 1 PDP (First Visit Only)

This PDP is **state-locked** to STATE 0.

Characteristics:
- One product
- Multiple colors
- Multiple vase options
- Sticky bouquet image persists on scroll
- Color/vase selection updates the same image
- No branching

Scroll structure:
1. Sticky visual (default: white + white vase)
2. Color selection → image swap
3. Vase selection → image swap
4. Add to cart
5. Only *below ATC*: story, philosophy, materials

Once purchased:
- Customer is marked `tier_completed = 1`
- This PDP must **never** be shown again to that customer

---

## Returning Customer Behavior

A customer who completed Tier 1:
- Never re-enters the same funnel
- Is allowed to browse *only after* initiation

### Post-Tier-1 Catalog Rules
- Not a raw Shopify collection
- Curated
- Limited
- Pre-filtered by:
  - Color family
  - Scale
  - Same or +1 price band

Goal:
> “You already belong here.”

---

## Email as the Narrative Engine

Email does not "send traffic".
Email **restores context**.

Each lifecycle email includes a **signed deep link** with intent:

Example:
```
/?source=care_checkin&stage=reflection&tier=1&sig=...
```

This allows the site to know:
- Why the customer arrived
- What emotional mode to enter
- What not to show

No new landing pages are created.

---

## EntryContext Object (Conceptual)

Every visit resolves this object:

```
EntryContext = {
  entrySource,
  lifecycleStage,
  lastPurchaseTier,
  timeSinceLastOrder,
  emotionalIntent
}
```

This object controls:
- Homepage variant
- Copy tone
- CTA behavior
- Whether feedback is asked
- Whether tier elevation is introduced

---

## Feedback as Intimacy (Not a Survey)

Never say “survey”.

First interaction:
> "איך הסידור חי אצלך בבית?"

If clicked:
- 2–3 progressive questions
- Saved to customer metafields or internal DB
- Future tone adapts based on answers

Feedback is a **conversation checkpoint**, not analytics.

---

## Tier Elevation Without Tier Language

Never say:
- Upgrade
- Tier 2
- Next level

Say:
- “הרבה לקוחות שבחרו כך חזרו לשלב הבא”
- “הסטודיו הכין עבורך אפשרות נוספת”

Rules:
- One recommendation
- Pre-selected
- No browsing
- Framed as continuation

---

## Identity & Detection (Shopify Basic Safe)

### What is NOT guaranteed
- Customers are NOT automatically logged in after purchase
- Checkout identity ≠ storefront session

### Identity Stack (Recommended)

1. **Signed email/SMS link** (primary)
   - Works cross-device
   - No login required

2. **Persistent login (optional)**
   - Only if customer authenticated previously

3. **Anonymous cookie**
   - Continuity only, not true identity

Do not rely on checkout to establish identity.

---

## Irreversibility Rule (Critical)

Progress is one-way.

If you allow:
- Catalog access before initiation
- Tier 1 CTA after Tier 1 completion

The emotional ladder collapses.

Each completed tier retires its entry surface forever.

---

## Why This Increases AOV

- Customer never restarts from zero
- Default option moves upward
- Choice friction stays constant
- Price increases feel natural, not forced

You are not convincing.
You are continuing.

---

## What This Document Is For

Use this file to:
- Compare against what is currently built
- Identify leaks (catalog exposure, repeated CTAs)
- Plan required refactors
- Ask the Forever Panel to debate *execution*, not philosophy

---

## Final Anchor

1. Where is the cleanest place to store `customer_stage`?
2. How strict should catalog access be post-Tier-1?
3. How emotional vs restrained should homepage variants be?
4. How many lifecycle email stages are optimal before fatigue?

---



This system is not about personalization.
It is about **memory, authority, and continuity**.

If the site feels different every time—but never confusing—the customer feels seen.
