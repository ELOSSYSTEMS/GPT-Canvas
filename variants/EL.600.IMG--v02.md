// EL.600.IMG – ELos Image Prompt Engine (v2.0 – Fusion Mode)

/**
 * Purpose: Dynamically generate high-quality prompts for AI image generation,
 * with optional real image fusion and preset style profiles for product photography.
 * Integrated with ELOS Prompt Protocol for fireproofing, structure, and tone integrity.
 */

const ELosImagePromptEngine = {
  /**
   * Core Prompt Categories
   */
  categories: [
    "Vibe & Mood",
    "Style & Clothing",
    "Location",
    "Pose or Action",
    "Color & Aesthetic",
    "Body Type & Skin Tone",
    "Accessories & Contextual Props",
    "Camera & Lighting Settings",
    "Scene Intent"
  ],

  /**
   * Preset brand styles
   */
  stylePresets: {
    restorationHardware: {
      vibe: "Minimal, timeless, architectural",
      color: "Soft stone, taupe, warm gray",
      lighting: "Natural diffused window light",
      camera: "50mm full-frame, f/2.8",
      sceneIntent: "Product on rustic wood table with minimal shadow and white wall"
    },
    foreverFlowers: {
      vibe: "Earthy elegance, handmade charm",
      color: "Dried florals palette – creams, rust, blush",
      lighting: "Soft directional, golden hour tones",
      camera: "35mm with shallow DoF",
      sceneIntent: "Bouquet placed in center of artisan-style flat lay on linen cloth"
    }
  },

  /**
   * Default tone layer
   */
  defaultTone: "Editorial, branded realism",

  /**
   * Build raw prompt string from structured input
   */
  buildPrompt(input) {
    const preset = this.stylePresets[input.preset] || {};
    const {
      vibe = preset.vibe || "", style = input.style || "",
      location = input.location || "", pose = input.pose || "",
      color = preset.color || "", body = input.body || "",
      accessories = input.accessories || "", camera = preset.camera || "",
      sceneIntent = preset.sceneIntent || input.sceneIntent || ""
    } = input;

    const segments = [
      `Scene: ${sceneIntent || location}`,
      `Mood: ${vibe}`,
      `Style: ${style}`,
      `Pose: ${pose}`,
      `Color & Aesthetic: ${color}`,
      `Body & Skin: ${body}`,
      `Accessories: ${accessories}`,
      `Camera Settings: ${camera}`,
      `Tone: ${this.defaultTone}`
    ].filter(Boolean);

    return segments.join(" | ");
  },

  /**
   * Fireproofing Enhancer via ELOS Prompt Protocol
   */
  fireproofPrompt(rawPrompt) {
    return rawPrompt
      .replace(/woman|man/g, "subject")
      .replace(/generic|boring|normal/g, "visually compelling")
      .replace(/\s+/g, " ")
      .trim();
  },

  /**
   * Final output
   */
  generate(input) {
    const base = this.buildPrompt(input);
    const fireproofed = this.fireproofPrompt(base);
    return {
      raw: base,
      final: fireproofed
    };
  }
};


// EL.610.IMG.Fusion – ELos Multimodal Product Photography Engine

const ELosImageFusionModule = {
  generateFusionPrompt({
    referenceImage,
    targetStyle,
    input,
    intent = "eCommerce-ready product hero shot"
  }) {
    const structured = ELosImagePromptEngine.generate({ ...input, preset: targetStyle });

    return {
      mode: "img2img",
      inputImage: referenceImage,
      targetStyle,
      intent,
      finalPrompt: structured.final,
      compositionNotes: [
        "Main light source: natural window or golden hour side light",
        "Surface: rustic or textured base matching brand aesthetic",
        "Props: minimal, secondary to product",
        "Framing: shallow depth, 45° or top-down flat lay"
      ]
    };
  }
};

// Example Fusion Usage
const fusionExample = ELosImageFusionModule.generateFusionPrompt({
  referenceImage: "bouquet_real.jpg",
  targetStyle: "restorationHardware",
  intent: "Product detail image for high-end catalog",
  input: {
    style: "Natural preserved flower bouquet",
    pose: "Product resting gently on rustic table",
    accessories: "Linen cloth, aged ceramic vase"
  }
});

console.log(fusionExample);