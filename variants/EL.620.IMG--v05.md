**ELos Visual OS – Forever Flowers Deployment**

**1. System Components**
- **Core Engine:** EL.620.IMG.VisualRouter
- **Prompt Engines:**
  - AD.800.IMG.FireflyPromptEngine (Photoshop / Firefly fill)
  - AD.801.IMG.CanvaPromptEngine (drag-drop template logic)
  - AD.900.IMG.3DSceneRouter (Figma, 3D render logic)
- **Style Modules:**
  - StyleModifier v2.1 (Material Fidelity + Tone Matching)
  - BrandPersona Layer (restoration-inspired + local identity)
  - PlatformConstraints (Shopify, Instagram, Canva)
- **Post-Audit Layer:** EL.400.AUD (Composition/Color audit after generation)

**2. Visual Personas**
- **Ethan / Spider-Man Toddler:** for brand family aesthetics, realism, Israeli interior contexts
- **Shylie:** toddler feminine muse for bouquet scale reference, warmth layer

**3. Visual Standards (Forever Flowers)**
- **Palette:** travertine, oak, soft concrete, black accents, aged brass
- **Lighting:** directional daylight (RH-style), soft shadow depth
- **Backdrop Types:**
  - Urban Israeli penthouse (Tel Aviv skyline)
  - RH-inspired neutral interiors
  - Stylized tabletop surfaces (stone, wood, plaster)
- **Bouquet Staging Rules:**
  - Always centered or rule-of-thirds
  - Avoid harsh contrast behind stems
  - Allow space for Hebrew text overlay if needed (CTA or caption strip)

**4. Use Cases**
- Shopify Homepage Hero Banners
- Instagram Carousel Rows (3-post logic: Inspire / Educate / Sell)
- Collection page headers (Signature / Seasonal / Atelier)
- B2B Slide Decks
- Editorial Quote Blocks

**5. Caption Framework (if overlaying)**
- **Headline:** סידורי פרחים מיובשים ומשומרים
- **Subheadline:** מראה טבעי. תחזוקה אפסית. נשמרים עד 4 חודשים.
- **CTA:** גלו את הקולקציה החדשה

**6. Output Review Criteria (EL.410.TNF – Tone Fidelity Node)**
- Color deviation exceeds 15% = reject
- Material misclassification (plastic look instead of dried) = regenerate
- Light bleed or halo = flag
- Over-saturation or false bouquet scale = reroute to firefly corrective prompt

**7. Integration Touchpoints**
- Firefly / Photoshop → via AD.800.IMG
- Canva template design → via AD.801.IMG
- Shopify hero/composition export → routed through EL.620.IMG

**8. Expansion Protocols**
- Add seasonal variant triggers via date logic
- Enable 3D staging scenes on Atelier tier (future state)

**End of Visual OS Snapshot**