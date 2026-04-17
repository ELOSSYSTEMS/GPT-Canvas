// EL.600.IMG – CoreEngine for Text-to-Image Prompt Generation
// Purpose: Universal structured prompt generator for image models like DALL·E and Midjourney
// Status: Part of ELOS.VISUAL.OS, handles structured prompts from user intent

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