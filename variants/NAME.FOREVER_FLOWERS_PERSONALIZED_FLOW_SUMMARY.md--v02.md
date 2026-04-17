# Forever Flowers – Personalized, Guided Lifecycle Flow (Canonical Summary)

## Purpose of This Document
This file summarizes the **complete personalization, identity, homepage, PDP, and repeat-visit strategy** discussed, under the constraint of **Shopify Basic (not Plus)**.

It is intended as:
- A planning reference for implementation gaps
- A system map for what must change vs stay fixed
- A briefing document for the **Forever Panel** to evaluate execution choices

This is a **system design**, not a feature list.

---

## Core Thesis
Forever Flowers should behave like a **store with memory**, not a catalog.

The site must:
- Remember where a visitor is in their journey
- Never repeat the same initiation flow twice
- Reduce choice while increasing confidence
- Feel like a single, ongoing conversation across email and site

All personalization is driven by **state**, not pages.

---

## Non-Negotiable Constraints
- Shopify **Basic plan** (no Plus assumptions)
- Headless or semi-headless (Next.js + React)
- Checkout behavior is largely fixed
- Identity must be handled **outside checkout**
- Emotional guidance > technical personalization

---

## Mental Model (Critical)

### ❌ Do NOT think in
- Multiple landing pages
- A/B tests for emotion
- Catalog-first navigation
- Login-required experiences

### ✅ Think in
- **One canonical homepage**
- **One Tier-1 PDP**
- **State-driven variants**
- **Irreversible progress**

The surface stays fixed.
The *assumption about the visitor* changes.

---

## Visitor Lifecycle States

Each session resolves **exactly one** lifecycle state:

| State | Meaning |
|------|--------|
| STATE 0 | First-time visitor, no purchases |
| STATE 1 | Completed Tier 1 purchase |
| STATE 2 | Completed Tier 1 + Tier 2 |
| STATE 3 | Tier 3 / concierge |

Resolution priority:
1. Signed email/SMS link context
2. Logged-in customer (if present)
3. Visitor cookie/session memory
4. Default → STATE 0

---

## Page Architecture (Clarified)

The site intentionally has **very few page types**.

Canonical surfaces:
1. **Homepage** – single layout, multiple message variants
2. **Tier-1 PDP (Initiation PDP)** – one-product guided entry
3. **Regular PDPs** – for broader catalog (state-aware)
4. **Catalog / Collection pages** – **gated**; only visible after Tier-1 completion

There are **no landing pages**.
All variation happens inside these surfaces.

---

## Homepage as a Dynamic Surface

There is **one homepage** that behaves like many landing pages.

What changes per state:
- Headline copy
- Primary CTA label
- CTA destination
- Section visibility
- Content order

What never changes:
- Layout
- Navigation logic
- Visual identity

---

## Entry From Ads (Clarified)

Ads do not send traffic to special landing pages.
They send traffic to **existing surfaces** with an entry context.

Two valid ad destinations:
1. **Homepage (variant)** – when the ad is brand-level or conceptual
2. **Tier-1 PDP (variant)** – when the ad makes a concrete promise

Example:
- Ad: watering can / no upkeep / lasts months
- Destination: Tier-1 PDP with
  - Above-the-fold copy continuing the promise
  - AI visualization emphasized
  - Maintenance-free proof elevated

The layout does not change.
The *conversation* does.

---

### Homepage Variants

#### STATE 0 — First-Time Visitor
- One CTA only
- No catalog
- No collections
- Purpose: guided initiation

CTA example:
> "אני רוצה להכניס יופי לבית"

Destination:
- Tier-1 PDP only

---

#### STATE 1 — Tier 1 Completed
- Tier-1 CTA removed permanently
- Customer is no longer “trying”

CTA examples:
- Primary: "אני רוצה סידור נוסף"
- Secondary (soft): "הסטודיו ממליץ על הצעד הבא"

Destinations:
- Primary → curated catalog
- Secondary → Tier-2 guided entry

---

#### STATE 2 — Tier 2 Completed
- Fewer words
- Higher confidence
- Broader access or consultative flow

---

## Tier-1 PDP (First Visit Only)

This PDP is **state-locked** to STATE 0 and functions as an *initiation ritual*.

Characteristics:
- One product
- Multiple colors
- Multiple vase options
- Sticky bouquet image persists on scroll
- Color/vase selection updates the same image
- Zero branching

Scroll structure:
1. Sticky visual (default white + white vase)
2. Color selection → image swap
3. Vase selection → image swap
4. Add to cart
5. Only *below ATC*: story, philosophy, materials

### Tier-2 / Tier-3 Aspirational Nudge (Allowed)

Tier-1 PDP **may acknowledge that deeper studio work exists**, but may not offer choice.

Rules:
- Appears **below Add to Cart**
- Visually quieter than primary content
- No prices, no thumbnails, no comparisons
- No navigation to Tier-2/3 products

Purpose:
- Create aspiration
- Signal studio depth
- Reassure ambitious buyers

Example framing (conceptual):
> "הסטודיו עובד גם בקנה מידה אחר, ונפתח בהמשך"

Optional interaction:
- “לקריאה” opens a **modal**, not a page

The modal:
- Shows 1–2 studio-level images
- Uses language of scale, craft, and consultation
- Contains **no purchase CTA**
- Exit returns user to the same PDP state

After purchase:
- Customer marked `tier_completed = 1`
- This PDP is **retired forever** for that customer



---

## Returning Customer Behavior

Once Tier-1 is completed:
- Customer never re-enters the same funnel
- They are granted permission to browse

### Post-Tier-1 Catalog Rules
- Not a raw Shopify collection
- Curated
- Limited
- Pre-filtered by:
  - Color family
  - Scale
  - Same or +1 price band

Psychological goal:
> “You already belong here.”

---

## Email as the Narrative Engine

Email does not send traffic.
Email **restores context**.

Each lifecycle email includes a **signed deep link**:

```
/?source=care_checkin&stage=reflection&tier=1&sig=...
```

This tells the site:
- Why the visitor arrived
- What emotional mode to enter
- What *not* to show

No new landing pages are created.

---

## EntryContext Object (Conceptual)

Every visit resolves:

```
EntryContext = {
  entrySource,
  lifecycleStage,
  lastPurchaseTier,
  timeSinceLastOrder,
  emotionalIntent
}
```

This controls homepage variant, copy tone, CTA behavior, and whether feedback or elevation appears.

---

## Feedback as Intimacy (Not a Survey)

Never say “survey”.

First prompt:
> "איך הסידור חי אצלך בבית?"

If clicked:
- 2–3 progressive questions
- Saved to customer metafields or internal DB
- Future tone adapts based on answers

This is a **conversation checkpoint**, not analytics.

---

## Tier Elevation Without Tier Language

Never say:
- Upgrade
- Tier 2
- Next level

Say:
- “הסטודיו הכין עבורך אפשרות נוספת”
- “לקוחות רבים חזרו לשלב הבא אחרי זמן”

Rules:
- One recommendation
- Pre-selected
- No browsing
- Framed as continuation

---

## Identity & Detection (Shopify Basic-Safe)

### What Is NOT Guaranteed
- Customers are **not** automatically logged in after purchase
- Checkout identity ≠ storefront session

### Identity Stack (Recommended)
1. Signed email/SMS link (primary)
2. Persistent login (only if customer authenticated)
3. Anonymous cookie (continuity only)

Do not rely on checkout to establish identity.

---

## Modal vs Page Logic (Clarified)

### Governing Rule
**If content resolves doubt mid-decision, it must be a modal.**

**If content establishes brand authority for discovery or SEO, it can be a page.**

The content may be the same. The container differs.

---

### Modal Usage (In-Flow)

Use modals when:
- Visitor is inside homepage variant or PDP
- Content answers a specific hesitation
- You must preserve scroll position and momentum

Modal constraints:
- No navigation
- No footer
- No product grids
- One close action
- Returns user to exact prior state

Typical modal content:
- About the studio
- Our process
- Materials & longevity
- Risk-reversal explanations

---

### Page Usage (Discovery / SEO)

Use full pages when:
- Visitor arrives directly (SEO)
- Visitor enters without context

Rules:
- Visitor is immediately attached to STATE 0
- Page ends with **one initiation CTA only**
- No catalog access
- No branching

---

## RealtimeStack-Style Visitor Tracking

### How RealtimeStack Works (Conceptually)
RealtimeStack does not know the person.
It recognizes the **same browser/device**.

Mechanism:
- Injected JS runs on every page
- A first-party `visitor_id` is stored in cookies/localStorage
- Every page view is logged with timestamp + URL
- When the visitor returns hours/days later, the same ID is reused

This is **session stitching**, not IP tracking.

---

### What This Enables
- Detecting that a visitor left and came back
- Seeing repeated visits to the same PDP over days
- Resuming the last page visited
- Counting PDP views per visitor

This is fully replicable on Shopify Basic.

---

## PDP Progressive Nudge System

### Problem
Some customers visit the same PDP **10–15 times over 5–10 days** before purchasing.
A static PDP wastes these signals.

---

### PDP Visit States (Per Product)

| PDP State | Condition |
|---------|----------|
| PDP-0 | First visit |
| PDP-1 | 2–4 visits |
| PDP-2 | 5–9 visits or ≥48h |
| PDP-3 | ≥10 visits or ≥72h |

State derived from `visitor_id + product_id` over a rolling window.

---

### What Changes Across PDP States

**Layout never changes.**
Only one emphasis block swaps.

- **PDP-0**: product attributes, materials, longevity
- **PDP-1**: delivery ease, premium experience
- **PDP-2**: soft risk reversal, exchange/support reassurance
- **PDP-3**: strongest *real* policy promise + concierge framing

No urgency, no discounts, no “we tracked you” language.

---

### AI Visualization Escalation

Rule:
> Every repeat visit increases visualization salience.

- PDP-0: optional tool
- PDP-1: suggested tool
- PDP-2: framed as clarity
- PDP-3: framed as confidence

---

### Resume-Where-You-Left-Off

On return:
- Restore last PDP
- Restore last selected color/vase
- Do not reset to default

This signals memory and care.

---

### Email → PDP State Injection

Lifecycle emails can deep-link directly into PDP-2 or PDP-3:

```
/pdp/bespoke?
  pdp_state=consideration
  intent=visualize
  sig=...
```

Email tone and PDP tone must match.

---

## Irreversibility Rule (Critical)

Progress is one-way.

If you allow:
- Catalog access before initiation
- Tier-1 CTA after Tier-1 completion

The emotional ladder collapses.

---

## Why This Increases AOV

- Customer never restarts from zero
- Default option moves upward
- Choice friction stays constant
- Price increases feel natural

You are not convincing.
You are **continuing**.

---

## Open Questions for the Forever Panel

1. Which risk-reversal promises are we operationally willing to guarantee?
2. At which PDP state should AI visualization become dominant?
3. How strong can reassurance language be without hurting luxury perception?
4. Should resume-where-you-left-off be automatic or suggested?

---

## Tier-1 PDP: Aspirational Tier-2 / Tier-3 Nudge (Added)

Tier-1 PDP **may acknowledge that deeper studio work exists**, but must not offer choice.

Purpose:
- Signal studio depth
- Create aspiration without diversion
- Reassure ambitious buyers that the brand scales with them

Rules:
- Appears **below Add to Cart**
- Visually quieter than primary PDP content
- No prices, no thumbnails, no comparisons
- No navigation to Tier-2 or Tier-3 products

Allowed phrasing (conceptual examples):
- "הסטודיו עובד גם בקנה מידה אחר – נפתח בהמשך"
- "יש עבודות עמוקות ומורכבות יותר למי שממשיך איתנו"

### Optional Interaction
- A single text link such as "לקריאה" opens a **modal**, not a page

Modal constraints:
- 1–2 studio-level images only
- Language of scale, craft, and consultation
- **No purchase CTAs**
- Close returns the visitor to the same PDP scroll position

This creates aspiration **without collapsing Tier separation**.

---

## Modal vs Page Logic (Authoritative Rule)

### Governing Principle
**If content resolves doubt mid-decision, it must be a modal.**

**If content establishes brand authority for discovery or SEO, it may be a page.**

The content may be identical. The container is what changes.

---

### Modal Usage (In-Flow)

Use modals when:
- Visitor is inside the homepage or any PDP
- Content answers a hesitation or trust question
- You must preserve momentum and context

Modal constraints:
- No header navigation
- No footer
- No product grids
- No outbound links
- One close action only

Typical modal content:
- About the studio
- Our process
- Materials & longevity
- Risk-reversal explanations

Modals always return the user to **exactly where they were**.

---

### Page Usage (Discovery / SEO)

Use full pages when:
- Visitor arrives directly (SEO, external link)
- Visitor enters without active purchase context

Rules for pages:
- Visitor is immediately attached to **STATE 0**
- Page ends with **one initiation CTA only**
- No catalog access
- No branching

Pages are authoritative. Modals are supportive.

---

## Final Anchor

This system is not about personalization.
It is about **memory, authority, and continuity**.

If the site feels different every time—but never confusing—the customer feels seen.
