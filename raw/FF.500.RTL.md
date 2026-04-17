**Canvas: Tentative Horizon UI RTL Port**

**Domain:** Forever Flowers
**Category:** UX / Shopify Structure
**Tag:** FF.500.RTL – Forever Flowers / UX / Horizon RTL Port

---

### Objective:
Implement a Right-to-Left (RTL) visual and UX structure for a Horizon-based Shopify theme, creating a premium, native Hebrew shopping experience for Forever Flowers customers.

---

### Strategic Goals:
- Preserve Horizon's modular layout and performance advantages.
- Inject full RTL structural logic without degrading UI stability.
- Maintain premium visual standards similar to luxury sites like RH.com.
- Apply Hebrew selectively to product-focused elements.

---

### Layout Architecture

**Global Adjustments:**
- Inject `dir="rtl"` at the `<body>` level via `theme.liquid`.
- Add `.rtl` class to scope all RTL-specific CSS.
- Override flex and grid directions where necessary (`row-reverse`, `justify-content: flex-end`).

**Typography + Content Flow:**
- Headings and paragraphs: `text-align: right; direction: rtl;`
- Hebrew-specific areas: product titles, main descriptions, collection titles.
- Use Hebrew-optimized font stack: `Assistant`, `Heebo`, or `Noto Sans Hebrew`.

**Section Override Plan:**
| Section Type          | Action                             |
|----------------------|------------------------------------|
| Hero Banner          | Flip image/text if hardcoded LTR   |
| Image/Text Split     | Reverse flex direction              |
| Product Grid         | Keep LTR grid; align text RTL       |
| Testimonials         | Reverse navigation arrows, text     |
| Footer + Navigation  | Float right, reverse link order     |
| Cart / Drawer        | Align content RTL where possible    |

---

### App + Third-Party Handling:
- Manually patch review, wishlist, and pop-up apps to respect RTL.
- Inspect for iFrame usage (non-overridable elements).
- Adjust embedded scripts for tooltip, modals, and dropdowns.

---

### UX Consistency Rules:
- Center-align content where RTL doesn’t add value.
- Navigation, menus, and breadcrumbs must strictly follow RTL.
- Avoid over-flipping: grids/lists should maintain global best practices.
- Keep checkout LTR for better compatibility and flow.

---

### Dev Phases (Est. Time):
| Phase        | Task Description              | Est. Hours |
|--------------|-------------------------------|------------|
| Phase 1      | Global layout + `rtl.css`     | 4–6        |
| Phase 2      | Section-level overrides       | 8–12       |
| Phase 3      | App & widget inspection       | 4–6        |
| Phase 4      | UX polish + spacing/fonts     | 6          |
| **Total**    |                               | **24–30**  |

---

### Notes:
- RTL will be selectively applied based on user locale.
- Future-proofing by isolating overrides via `.rtl` class.
- Theme should remain editable via Shopify Theme Editor.

---

▧ FF.500.RTL – Forever Flowers / UX / Horizon RTL Port