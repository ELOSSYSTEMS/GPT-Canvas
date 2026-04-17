// ELOS.VISUAL.OS – Modular Image Prompt Framework (Expanded with Interactive Composer)

/**
 * Includes:
 * 1. CoreEngine – domain-agnostic structured prompt builder
 * 2. FusionEngine – image + text multimodal handler
 * 3. VisualRegistry – preset manager and system gateway
 * 4. InteractiveComposer – Socratic visual prompt wizard (auto-triggered on vague inputs)
 */

// =====================
// 1. EL.600.IMG.CoreEngine
// =====================

const CoreEngine = {
  categories: ["Vibe", "Style", "Subject", "Location", "Pose", "Color", "Props", "Camera", "Lighting", "Format", "Intent"],
  defaultTone: "Editorial, high-fidelity realism",
  stylePresets: {},

  registerPreset(name, preset) {
    this.stylePresets[name] = preset;
  },

  buildPrompt(input) {
    const preset = this.stylePresets[input.preset] || {};
    const merged = { ...preset, ...input };
    const segments = [
      `Intent: ${merged.intent}`,
      `Subject: ${merged.subject}`,
      `Mood: ${merged.vibe}`,
      `Style: ${merged.style}`,
      `Location: ${merged.location}`,
      `Pose: ${merged.pose}`,
      `Color Scheme: ${merged.color}`,
      `Props: ${merged.props}`,
      `Camera: ${merged.camera}`,
      `Lighting: ${merged.lighting}`,
      `Format: ${merged.format}`,
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
  generate({ referenceImage, input, intent = "High-impact visual asset", targetStyle }) {
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
// 3. EL.620.IMG.VisualRegistry
// =====================

const VisualRegistry = {
  Core: CoreEngine,
  Fusion: FusionEngine,

  registerBrandStyle(name, config) {
    this.Core.registerPreset(name, config);
  }
};

// =====================
// 4. EL.630.IMG.InteractiveComposer
// =====================

const InteractiveComposer = {
  session: {},
  stepIndex: 0,
  steps: [
    (s) => !s.intent ? "What is the purpose of this image? (e.g. product photo, social post, hero banner)" : null,
    (s) => !s.subject ? "What is the subject of the image? (person, object, space, idea)" : null,
    (s) => !s.vibe ? "Should the image feel natural, dreamy, modern, or artistic?" : null,
    (s) => !s.lighting ? "Would you like the image to use natural light (e.g. window, sun) or artificial lighting (e.g. studio, lamp)?" : null,
    (s) => !s.color ? "What kind of color tone are you imagining – muted, vibrant, beige, black-and-white?" : null,
    (s) => !s.camera ? "Do you want a close-up shot, a wide scene, or something in between?" : null
  ],

  inject(input) {
    this.session = { ...this.session, ...input };
    this.stepIndex = 0;
  },

  next() {
    while (this.stepIndex < this.steps.length) {
      const question = this.steps[this.stepIndex](this.session);
      this.stepIndex++;
      if (question) return question;
    }
    return null; // no more questions
  },

  complete() {
    return CoreEngine.generate(this.session);
  }
};

// =====================
// ✅ Example Usage + Auto Trigger (Vague Visual Input)
// =====================

function handleVisualPrompt(input) {
  const isVague = !input.intent || !input.subject || Object.keys(input).length < 3;

  if (isVague) {
    InteractiveComposer.inject(input);
    return {
      mode: "interactive",
      ask: () => InteractiveComposer.next(),
      finish: () => InteractiveComposer.complete()
    };
  } else {
    return VisualRegistry.Core.generate(input);
  }
}