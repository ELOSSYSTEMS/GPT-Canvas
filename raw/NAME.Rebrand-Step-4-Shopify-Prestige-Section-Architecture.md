# Rebrand Step 4 — Shopify Section Architecture (Prestige Theme)

## Purpose
Translate the wireframe pages into **actual Shopify sections**, deciding:
- What Prestige already does well
- What must be custom-built
- What must NOT be used at all

Goal: minimum custom code, zero UX compromise.

---

## Core Rule (Lock This)

Use Prestige **only where it is silent and editorial**.
The moment a section feels "commerce-first" — replace it.

---

## Section Inventory — Prestige Theme (What We Can Reuse)

### ✅ 1. Image with Text (Prestige)

**Use for:**
- Homepage hero
- Tier PDP hero
- About page portrait

**Why it works:**
- Strong spacing controls
- Editorial alignment
- Minimal UI

**Constraints:**
- One image only
- No buttons unless single CTA

---

### ✅ 2. Rich Text (Prestige)

**Use for:**
- Quiet proof lines
- Fairness paragraphs
- Soft close lines

**Why it works:**
- Clean typography
- RTL-safe
- No visual noise

---

### ✅ 3. Multi-Column (Prestige — Modified)

**Use for:**
- Two paths (Home vs Gifting)
- Linear flow (3 steps max)

**How to configure:**
- Icons OFF
- Images ON (one per column)
- Titles short (1–2 words)

---

### ✅ 4. Timeline / Steps (Prestige)

**Use for:**
- "How it feels over a year"
- Gifting linear flow

**Constraints:**
- No dates
- No numbers higher than 3

---

### ✅ 5. Product Information (Prestige — Heavily Restricted)

**Use ONLY for:**
- Price display
- Add to cart

**Hide / Remove:**
- Quantity selector
- Variant selectors
- Payment badges

---

## Sections to DELETE / NEVER USE

❌ Featured collection
❌ Collection grid
❌ Product recommendations
❌ Testimonials carousel
❌ Slideshow
❌ Promotional banners
❌ Countdown / urgency blocks

If it increases browsing — it’s out.

---

## Custom Sections (Required)

### 🧩 1. Tier Overview Cards (Custom)

**Used on:**
- Home Styling landing

**Why custom:**
- Prestige comparisons feel salesy
- Need calm cards, not pricing tables

**Fields:**
- Tier name
- Descriptor line
- ₪/day anchor
- Link to tier PDP

---

### 🧩 2. Fairness Block (Custom, Reusable)

**Used on:**
- Home landing
- Tier PDPs
- How it works

**Why custom:**
- Language must be locked
- Visual consistency critical

**Content (locked):**
אפשר לרענן את הסידור עד שלוש פעמים במהלך השנה — לפי הצורך.

---

### 🧩 3. Decision Split (Homepage, Custom)

**Used on:**
- Homepage only

**Why custom:**
- Prestige grids imply browsing
- This is a binary choice

**Structure:**
- Two large blocks
- One sentence each

---

### 🧩 4. Gifting Date Selector (Custom)

**Used on:**
- Gifting landing

**Why custom:**
- No app UI allowed
- Needs calm, form-like behavior

**Fields:**
- Date 1
- Date 2
- Date 3

---

### 🧩 5. Price Framing Block (Custom)

**Used on:**
- All PDPs

**Why custom:**
- ₪/day emphasis
- Annual total secondary

---

## Page-by-Page Section Map

### Homepage
- Image with Text (Prestige)
- Rich Text (Prestige)
- Decision Split (Custom)
- Rich Text (Prestige)

---

### Home Styling Landing
- Image with Text (Prestige)
- Rich Text (Prestige)
- Tier Overview Cards (Custom)
- Fairness Block (Custom)
- Rich Text (Prestige)

---

### Tier PDP
- Image with Text (Prestige)
- Rich Text (Prestige)
- Timeline (Prestige)
- Fairness Block (Custom)
- Price Framing (Custom)
- Product Info (Prestige — stripped)

---

### Gifting Landing
- Image with Text (Prestige)
- Rich Text (Prestige)
- Timeline (Prestige)
- Gifting Date Selector (Custom)
- Price Framing (Custom)
- Product Info (Prestige — stripped)

---

### How It Works
- Rich Text (Prestige)
- Multi-Column (Prestige)
- Fairness Block (Custom)

---

### About
- Image with Text (Prestige)
- Rich Text (Prestige)

---

## Step 4 Exit Check

You are done when:
- No collection templates are used
- Only 5 custom sections exist
- Prestige handles layout, not persuasion

This is now ready for build sequencing.
