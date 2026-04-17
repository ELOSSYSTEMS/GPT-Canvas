// EL.600.IMG – ELos Image Prompt Engine

/**
 * Purpose: Dynamically generate high-quality image prompts for AI visual generation tools
 * Inspired by: ELos Prompt Protocol, branding logic, tone fidelity, and creative clarity
 * Compatible with: DALL·E, Midjourney, Firefly, SDXL, etc.
 */

const ELosImagePromptEngine = {
  /**
   * Core Prompt Categories (used to structure inputs)
   */
  categories: [
    "Vibe & Mood",
    "Style & Clothing",
    "Location",
    "Pose or Action",
    "Color & Aesthetic",
    "Body Type & Skin Tone",
    "Accessories & Contextual Props",
    "Camera & Lighting Settings"
  ],

  /**
   * Default tone settings
   */
  defaultTone: "Editorial, soft luxury, branded realism",

  /**
   * Prompt Builder Function
   */
  buildPrompt(input) {
    const {
      vibe = "", style = "", location = "", pose = "", color = "",
      body = "", accessories = "", camera = ""
    } = input;

    const segments = [
      `Scene: ${location}`,
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
   * Fireproofing Enhancer (uses ELos rewrite logic)
   */
  fireproofPrompt(rawPrompt) {
    return rawPrompt
      .replace(/woman|man/g, "subject")
      .replace(/generic|boring|normal/g, "visually compelling")
      .replace(/\s+/g, " ")
      .trim();
  },

  /**
   * Main Generator
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

// Example Usage
const input = {
  vibe: "Dreamy, calm, high-end luxury",
  style: "Silk kimono, barefoot, natural makeup",
  location: "Japanese garden at sunset",
  pose: "Walking along a stone path, looking over shoulder",
  color: "Muted earth tones, soft pink accents",
  body: "Petite, fair skin, black hair",
  accessories: "Open parasol, tea set on stone bench",
  camera: "35mm lens, shallow depth of field, golden hour"
};

const result = ELosImagePromptEngine.generate(input);
console.log(result);