# FOREVER_FLOWERS_SYSTEM_BOUNDARIES.md

## 0. Status
**Canonical.** This document defines system ownership and data boundaries.  
If any other file conflicts with this one, this one wins unless Tamar Kay overrides explicitly.

---

## 1. Purpose
Prevent architectural drift by freezing who owns what, where truth lives, and which layer is allowed to make which decisions.

This document exists to stop:
- duplicated logic
- data inconsistency
- “quick fixes” that become permanent
- CMS misuse as a database
- Shopify misuse as a content system

---

## 2. Systems in Scope

### 2.1 Shopify (Commerce Core)
Primary responsibility: transactional truth.

### 2.2 CMS (Sanity) (Content Core)
Primary responsibility: structured content and editorial governance.

### 2.3 Next.js (Experience Core)
Primary responsibility: rendering, routing, composition of sources, performance.

### 2.4 Analytics Stack (Measurement Core)
Primary responsibility: measurement, attribution, and reporting.

### 2.5 Forever Circle (Future System)
Primary responsibility: membership, rewards, community state, subscription product logic.

---

## 3. Ownership Table (Hard Lines)

### 3.1 Shopify Owns (Non-Negotiable)
Shopify is the source of truth for:
- Product catalog (title, handle, variants)
- Pricing and compare-at pricing
- Inventory and availability
- Collections (commercial grouping)
- Cart state
- Checkout
- Orders
- Customer core record (email/phone, addresses)

Shopify must remain authoritative because:
- payments, taxes, inventory, and order lifecycle must not fork

### 3.2 CMS (Sanity) Owns (Non-Negotiable)
Sanity is the source of truth for:
- The canonical pages and their content
- Portfolio structures and project galleries
- Journal structures and articles
- Service pages (Bespoke, Trade, B2B)
- PDP overlays (care, scale blocks, allowed CTAs) — **overlay only, never commerce truth**
- Tier ownership per page
- CTA objects and linking governance

Sanity must remain authoritative because:
- editorial changes must be safe and structured
- tier rules must be enforced outside the frontend

### 3.3 Next.js Owns (Non-Negotiable)
Next.js owns:
- URL routing and route groups
- Page rendering by model type
- Layouts and component composition
- Performance strategy (ISR/SSR/caching)
- Merge logic: Shopify + CMS overlays
- Enforcement of tier rules at runtime
- Preview mode behavior

Next.js must own this because:
- it is the experience engine; other systems cannot govern UX reliably

---

## 4. Shared Contracts (Where Integration Happens)

### 4.1 Shopify Reference Contract
CMS may reference Shopify entities only via:
- `handle`
- `gid` (optional)
- `type` (product | collection)

CMS must never store:
- price
- inventory
- variant IDs as truth (only as reference)

### 4.2 PDP Overlay Contract
For any PDP, the final page is:
- Shopify product truth
+ CMS overlay content (facts, care, placement guidance)

If conflict exists:
- Shopify wins for commerce facts
- CMS wins for editorial framing

### 4.3 CTA Contract
All CTAs must route through a CTA model that:
- declares target type (internal/external/form)
- enforces upward-only tier linking

---

## 5. Forbidden Patterns (Auto-Reject)

### 5.1 CMS as Database
Do not store:
- transactional states
- inventory
- customer actions
- subscription billing state

### 5.2 Shopify as Content System
Do not use Shopify:
- pages as primary editorial system
- metafields as a dumping ground for long-form content
- theme blocks as canonical UI (headless is canonical)

### 5.3 Next.js as Source of Truth
Do not hardcode content in Next.js except:
- navigation skeleton
- emergency fallbacks

All content must originate in Shopify or CMS.

---

## 6. Environments & Release Discipline

### 6.1 Required Environments
- **Dev**: rapid iteration
- **Staging**: editorial review + QA
- **Prod**: only validated releases

### 6.2 Preview Discipline
- Editors preview drafts via Next.js preview mode.
- No “publish and pray.”

---

## 7. Security & Data Exposure

### 7.1 Frontend Exposure Rule
Next.js must not expose:
- Shopify Admin API credentials
- sensitive customer data

### 7.2 Server Mediation
If a call requires secrets or privileged access:
- it must go through a server route (Next.js server, edge function, or backend)

---

## 8. Forever Circle (Future) Boundary Reservation

### 8.1 What Forever Circle Will Own
- membership status
- rewards ledger (earn/spend events)
- community objects (posts, comments, roles)
- subscription logic beyond “app-managed”

### 8.2 What Forever Circle Will Mirror to Shopify
Only summary fields in customer metafields:
- `forever_circle_tier`
- `forever_circle_points`
- `forever_circle_status`
- `forever_circle_member_since`

### 8.3 Why Mirroring Exists
- marketing segmentation
- lightweight personalization later (without changing page meaning)
- operational visibility

---

## 9. Dispute Resolution
When a decision spans systems:
1. Check this file for ownership.
2. The owning system decides.
3. If still ambiguous, Tamar Kay rules based on luxury doctrine.
