// EL.631.IMG.BrandPersona
// Prompts user for brand styling (preset or custom)
// If brand is well-known (e.g., 'Dior', 'Nike'), system simulates style injection via visual search-style phrasing
// Custom brands (like 'Forever Flowers') can be defined locally or inferred from user input
// For unknown brands, suggest fallback moodboard generation using image search or Luma AI-based inference

const BrandPersona = {
  inject(prompt, brandRaw = "") {
    const brand = String(brandRaw).trim();
    if (!brand) return prompt;

    const knownBrands = {
      "Dior": "Elegant, muted luxury with high contrast and white space",
      "Nike": "Bold, energetic, action-focused with dark tones",
      "Apple": "Minimalist, clean, well-lit with soft shadows",
      "Zara": "Fashion editorial, neutral colors, sleek models",
      "Restoration Hardware": "Rustic industrial with neutral tones, moody lighting",
      "Muji": "Simple, clutter-free, warm tones, light wood",
      "LEGO": "Bright, playful, vibrant and high-contrast",
      "Chanel": "Black and white classicism, elegance, fine detail",
      "Supreme": "Urban streetwear, red accents, fast-paced energy",
      "IKEA": "Functional Scandinavian realism, natural light, casual staging"
    };

    if (knownBrands[brand]) {
      return `${prompt}\nApply the visual tone of ${brand}: ${knownBrands[brand]}.`;
    } else {
      return `${prompt}\nStyle the image with visual elements aligned with the aesthetic identity of '${brand}'. Search for '${brand} product photography' on Google Images or Bing. If available, analyze mood using Luma or similar AI-based inference.`;
    }
  }
};