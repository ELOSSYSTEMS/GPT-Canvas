# Forever Flowers – Personalized Flow Diagram

This diagram visualizes the **canonical flow logic** defined in the system summary.
It is written to be read top-down as a **state machine**, not as page navigation.

---

## 1. Entry Resolution (Every Visit)

```
Visitor Arrives
      │
      ▼
Resolve Entry Context
(UTM / Signed Link / Cookie / Login)
      │
      ▼
Resolve Lifecycle State
STATE 0 | STATE 1 | STATE 2 | STATE 3
```

Rules:
- Only ONE state is active per session
- State resolution happens before render
- State is irreversible

---

## 2. Homepage Logic

```
                ┌──────────────────────┐
                │      Homepage        │
                │  (Single Layout)     │
                └──────────────────────┘n                          │
        ┌─────────────────┼─────────────────┐
        │                 │                 │
        ▼                 ▼                 ▼
   STATE 0            STATE 1            STATE 2+
 First-time        Tier-1 done        Tier-2 done

 CTA:              CTA:               CTA:
 "Introduce"       "Another bouquet"  "Design / Concierge"

 Route:             Route:              Route:
 Tier-1 PDP         Curated Catalog     Advanced / Consult
```

Rules:
- Homepage never branches freely
- CTA text + destination are state-controlled

---

## 3. Ad → Site Entry

```
Ad Click
  │
  ▼
Entry Context (UTM)
  │
  ├── Brand / Conceptual → Homepage (variant)
  │
  └── Promise-based      → Tier-1 PDP (variant)
```

Rules:
- No landing pages
- Same surface, different conversation

---

## 4. Tier-1 PDP (Initiation PDP)

```
Tier-1 PDP (STATE 0 only)
  │
  ├─ Sticky Visual (default)
  ├─ Color Selection → image swap
  ├─ Vase Selection → image swap
  ├─ Add to Cart
  │
  └─ [Below ATC]
        │
        ├─ Story / Materials
        └─ Aspirational Tier-2/3 Nudge
             (Modal only)
```

Rules:
- No navigation to Tier-2/3
- Only acknowledgment of depth
- After purchase → Tier-1 PDP is retired forever

---

## 5. PDP Repeat-Visit Logic (Any PDP)

```
PDP Visit Count
  │
  ├─ PDP-0 (1st visit)
  │    → Product understanding
  │
  ├─ PDP-1 (2–4 visits)
  │    → Delivery & ease
  │
  ├─ PDP-2 (5–9 visits / 48h)
  │    → Soft risk reversal
  │
  └─ PDP-3 (10+ visits / 72h)
       → Strong reassurance / concierge
```

What changes:
- One emphasis block
- AI visualization prominence

What never changes:
- Layout
- Price
- Options

---

## 6. AI Visualization Escalation

```
PDP-0 → Optional
PDP-1 → Suggested
PDP-2 → Framed as clarity
PDP-3 → Framed as confidence
```

---

## 7. Non-Tier Content (About / Process / Materials)

```
In-Flow Doubt
   │
   ▼
 Open MODAL
   │
   └─ Close → Return to same state & scroll
```

```
SEO / Direct Entry
   │
   ▼
 Full Page
   │
   └─ Single CTA → STATE 0 initiation
```

Rules:
- Modals = support
- Pages = authority

---

## 8. Email → Site Continuation

```
Lifecycle Email
   │
   ▼
Signed Link
   │
   ▼
Homepage or PDP
(pre-resolved state)
```

Rules:
- Email restores context
- Email never resets journey

---

## 9. Irreversibility Guard

```
STATE 0 → STATE 1 → STATE 2 → STATE 3

(No backward transitions)
```

If backward access is allowed:
- Trust collapses
- Guidance collapses
- AOV collapses

---

## Final Mental Model

This is not navigation.
This is **progression**.

The customer never asks:
"Where should I go next?"

The system answers:
"This is where you are now."

---

## Canonical Email Lifecycle Map (Added)

This section pairs **marketing email concepts** with each lifecycle state and decision step.
Emails are not campaigns; they are **conversation continuations**.

---

## Email Collection (Non-Purchasing Users)

### Where to Collect Email (Allowed, Non-Disruptive)

Email capture must feel like service, not conversion.

Approved entry points:

1. **AI Visualization Gate (Primary)**
   - Before saving or revisiting a visualization
   - Framed as memory, not newsletter
   - Example framing:
     > "רוצה לשמור את הסידור שראית אצלך בבית?"

2. **PDP-2 / PDP-3 Risk Reversal Moment**
   - After repeated visits
   - Framed as assistance
   - Example:
     > "רוצה שנעדכן אותך אם זה מתאים לחלל שלך?"

3. **Exit-Intent (Only after ≥2 visits)**
   - Calm, optional
   - No discount language

Never:
- Gate first interaction
- Block Add-to-Cart
- Offer discounts for email

---

## Email Lifecycle by State

### STATE 0 — First-Time Visitor (No Email Yet)

**Goal:** Safety + curiosity

If email collected:
- **Email 1: Welcome / Orientation**
  - Tone: calm, human
  - Content: what makes Forever Flowers different
  - CTA: return to Tier-1 PDP

---

### PDP-1 / PDP-2 — Repeated Viewing, No Purchase

**Goal:** Reduce friction

Trigger:
- 2–4 PDP views or ≥48h

**Email: "Seeing It Clearly"**
- Focus: AI visualization, ease, delivery
- CTA: deep-link to PDP-2 state

---

### PDP-3 — High Intent, No Purchase

**Goal:** Remove fear

Trigger:
- ≥5 PDP visits or ≥72h

**Email: "You Are Covered"**
- Focus: support, exchange, concierge
- CTA: PDP-3 deep link

---

## STATE 1 — Tier-1 Purchased

### Day 0–2: Confirmation + Care
- Reinforce decision
- Visual reminder of chosen color

### Day 14: Living With It
- Emotional reflection
- No selling

### Day 90–120: Gentle Elevation

**Email: "When You’re Ready"**
- Acknowledge time passed
- Introduce Tier-2 as continuation
- CTA: Homepage STATE-1 variant

---

## STATE 2 — Tier-2 Purchased

**Goal:** Relationship, not conversion

Email cadence:
- Less frequent
- Higher confidence tone

**Email Concepts:**
- Behind the studio
- Seasonal thinking
- Personal note from the studio

CTA:
- Concierge or curated recommendation

---

## STATE 3 — Concierge / Top Tier

**Goal:** Belonging

Emails become:
- Invitations
- Early access
- Personal outreach

No funnels.
No automation feel.

---

## Email → Site Coupling Rules

Every email must:
- Restore context via signed link
- Land on homepage or PDP in correct state
- Never reset journey

Email is memory.
The site is continuation.
