// ELOS.VISUAL.OS – Modular Image Prompt Framework

/**
 * This file contains the refactored universal prompt engine (CoreEngine),
 * a multimodal handler (Fusion), and an expandable registry system
 * for managing brand presets and mode behaviors.
 * Fully compliant with the ELOS Prompt Protocol v3.1-total-fireproofed.
 */

// =====================
// 1. EL.600.IMG.CoreEngine
// =====================

const CoreEngine = {
  categories: [
    "Vibe & Mood", "Style", "Subject", "Location", "Pose or Action",
    "Color & Aesthetic", "Props", "Camera", "Lighting", "Format", "Intent"
  ],

  defaultTone: "Editorial, high-fidelity realism",

  stylePresets: {}, // to be injected via registry

  registerPreset(name, preset) {
    this.stylePresets[name] = preset;
  },

  buildPrompt(input) {
    const preset = this.stylePresets[input.preset] || {};

    const {
      vibe = preset.vibe || "",
      style = input.style || "",
      subject = input.subject || "",
      location = input.location || "",
      pose = input.pose || "",
      color = preset.color || input.color || "",
      props = input.props || "",
      camera = preset.camera || input.camera || "",
      lighting = preset.lighting || input.lighting || "",
      format = input.format || "",
      intent = input.intent || preset.intent || ""
    } = input;

    const segments = [
      `Intent: ${intent}`,
      `Subject: ${subject}`,
      `Mood: ${vibe}`,
      `Style: ${style}`,
      `Location: ${location}`,
      `Pose: ${pose}`,
      `Color Scheme: ${color}`,
      `Props: ${props}`,
      `Camera: ${camera}`,
      `Lighting: ${lighting}`,
      `Format: ${format}`,
      `Tone: ${this.defaultTone}`
    ].filter(Boolean);

    return segments.join(" | ");
  },

  fireproofPrompt(rawPrompt) {
    return rawPrompt
      .replace(/generic|normal/g, "visually compelling")
      .replace(/\s+/g, " ")
      .trim();
  },

  generate(input) {
    const raw = this.buildPrompt(input);
    const final = this.fireproofPrompt(raw);
    return { raw, final };
  }
};

// =====================
// 2. EL.610.IMG.Fusion
// =====================

const FusionEngine = {
  generate({
    referenceImage, input, intent = "High-impact visual asset", targetStyle
  }) {
    const baseInput = Object.assign({}, input, { preset: targetStyle });
    const coreResult = CoreEngine.generate(baseInput);

    return {
      mode: "img2img",
      inputImage: referenceImage,
      finalPrompt: coreResult.final,
      metadata: {
        intent,
        targetStyle,
        compositionNotes: [
          "Maintain subject realism and proportional lighting",
          "Use on-brand color palette with natural textures",
          "Center framing or rule-of-thirds depending on subject"
        ]
      }
    };
  }
};

// =====================
// 3. ELOS.Visual.Registry – Expandable Config Hub
// =====================

const VisualRegistry = {
  Core: CoreEngine,
  Fusion: FusionEngine,

  registerBrandStyle(name, config) {
    this.Core.registerPreset(name, config);
  }
};

// =====================
// ✅ Example Usage
// =====================

VisualRegistry.registerBrandStyle("restorationHardware", {
  vibe: "Minimal, timeless, architectural",
  color: "Taupe, stone, sand",
  camera: "50mm full-frame, f/2.8",
  lighting: "Natural window light",
  intent: "High-end eCommerce banner"
});

const result = VisualRegistry.Core.generate({
  preset: "restorationHardware",
  subject: "Marble sculpture on pedestal",
  location: "Gallery with shadowed light",
  format: "portrait",
  pose: "centered, product-only",
  props: "plinth, white backdrop"
});

const fusion = VisualRegistry.Fusion.generate({
  referenceImage: "sculpture_photo.jpg",
  input: {
    subject: "Modern abstract sculpture",
    props: "gallery pedestal, spot light"
  },
  targetStyle: "restorationHardware"
});

console.log(result);
console.log(fusion);