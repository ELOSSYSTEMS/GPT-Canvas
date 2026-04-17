// PR.700.IMG – PhotoRoom-Specific Prompt Generator (Custom for Allon)
// Purpose: Tailored prompt builder for generating ultra-realistic, UGC-style product scenes using PhotoRoom's Studio AI Background model
// Scope: Separate from ELOS.VISUAL.OS. Lightweight, domain-specific, and tuned for photo-real realism

const PhotoRoomPromptEngine = {
  presets: {
    default: {
      lighting: "Natural daylight through Israeli apartment sliding windows",
      camera: "Smartphone camera at slight downward angle",
      tone: "Photorealistic, casual realism, not studio",
      format: "4:5 portrait for product page"
    }
  },

  /**
   * Generate final prompt using base bouquet description + context
   */
  generate({
    subject = "Preserved bouquet in ivory ceramic vase",
    surface = "white dining table",
    background = "modern Israeli apartment with couch and neutral walls",
    props = "coffee mug, placemat",
    preset = "default"
  }) {
    const p = this.presets[preset] || {};

    const segments = [
      `Photo of ${subject}`,
      `Placed on a ${surface}`,
      `Inside a ${background}`,
      `Props include: ${props}`,
      `Lighting: ${p.lighting}`,
      `Camera: ${p.camera}`,
      `Scene style: ${p.tone}`,
      `Aspect: ${p.format}`
    ];

    return segments.join(". ");
  }
};

// Example usage:
const prompt = PhotoRoomPromptEngine.generate({
  subject: "Dried floral bouquet with yellow craspedia, lavender, and eucalyptus",
  surface: "textured white table",
  background: "sunlit Tel Aviv apartment with white walls and sliding doors",
  props: "ceramic coffee mug, soft shadow, window frame"
});

console.log(prompt);