// EL.631.IMG.BrandPersona
// Prompts user for brand styling (preset or custom)
// If brand is well-known (e.g., 'Dior', 'Nike'), system will simulate style injection via visual search-style phrasing
// Custom brands (like 'Forever Flowers') can be defined locally

const BrandPersona = {
  inject(prompt, brand = "") {
    if (!brand) return prompt;

    const knownBrands = ["Dior", "Apple", "Zara", "Restoration Hardware"];

    if (knownBrands.includes(brand)) {
      return `${prompt}\nStyle the image with visual elements aligned with the aesthetic identity of ${brand}. Think of color tones, lighting, and product photography style used by ${brand}.`;
    } else {
      return `${prompt}\nApply the brand styling rules for ${brand}, including its preferred color palette, mood, lighting, and composition. If unknown, prompt user to define.`;
    }
  }
};