// ELOS.VISUAL.OS — System Fireproofed Module Stack
// Includes: BrandPersona, StyleModifier, PlatformConstraints, PostAuditLayer, VisualRouter, and Platform-Specific Engines

// =====================
// EL.631.IMG.BrandPersona (already fireproofed)
// =====================
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

// =====================
// EL.632.IMG.StyleModifier
// =====================
const StyleModifier = {
  inject(prompt, style = "") {
    if (!style || typeof style !== 'string') return prompt;
    return `${prompt}\nApply the following style characteristics: ${style.trim()}.`;
  }
};

// =====================
// EL.633.IMG.PlatformConstraints
// =====================
const PlatformConstraints = {
  apply(prompt, platform = "") {
    const constraints = {
      "dalle": "Use OpenAI DALL·E-specific formatting and structure.",
      "stable diffusion": "Ensure prompt includes detailed descriptions, composition, and lighting.",
      "photoroom": "Center object, clean silhouette, strong separation from background.",
      "firefly": "Describe subject distinctly, enable transparent background options.",
      "canva": "Short descriptive phrases, good object clarity, centered placement.",
      "luma": "Use cinematic framing, depth, photorealism cues."
    };
    const key = platform.toLowerCase().trim();
    return constraints[key] ? `${prompt}\n${constraints[key]}` : prompt;
  }
};

// =====================
// EL.634.IMG.PostAuditLayer
// =====================
const PostAuditLayer = {
  verify(promptOutput) {
    let flags = [];
    if (!promptOutput.includes("lighting")) flags.push("Missing lighting specification");
    if (!promptOutput.includes("background")) flags.push("Background details may be underspecified");
    if (!promptOutput.match(/(centered|focus|framed)/i)) flags.push("Object composition unclear");
    return {
      auditPassed: flags.length === 0,
      issues: flags
    };
  }
};

// =====================
// EL.620.IMG.VisualRouter
// =====================
const VisualRouter = {
  route(platform, basePrompt, brand = "", style = "") {
    let p = basePrompt;
    p = BrandPersona.inject(p, brand);
    p = StyleModifier.inject(p, style);
    p = PlatformConstraints.apply(p, platform);
    const audit = PostAuditLayer.verify(p);
    return {
      finalPrompt: p,
      audit
    };
  }
};