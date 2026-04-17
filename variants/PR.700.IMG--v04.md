// PR.700.IMG – Forever Flowers x PhotoRoom Prompt Engine (Dynamic Centerpiece Mode)
// Purpose: Generate realistic background prompts for any Forever Flowers bouquet using PhotoRoom Studio AI.
// Design: Assumes bouquet is always centered in frame. Vase + bouquet details dynamically described per input.

const ForeverFlowersPhotoRoomPromptEngine = {
  presets: {
    default: {
      lighting: "Soft daylight coming from large sliding windows",
      camera: "Smartphone view angled slightly down at center object",
      tone: "Photorealistic, UGC-style, casual realism",
      format: "4:5 vertical frame for product page or social",
      placement: "Product is centered and dominant in foreground"
    }
  },

  generate({
    bouquetDescription = "vibrant mixed dried bouquet with pops of pink, yellow, and purple",
    vaseDescription = "neutral-toned ceramic vase with matte finish",
    tableSurface = "white modern dining table",
    environment = "Israeli apartment with white walls, wooden floor, and balcony doors",
    surroundingProps = "ceramic coffee mug, linen napkin, soft morning shadows",
    preset = "default"
  }) {
    const p = this.presets[preset] || {};

    const centerpiece = `${bouquetDescription} arranged in a ${vaseDescription}`;

    const segments = [
      `Centerpiece: ${centerpiece}`,
      `Displayed on a ${tableSurface}`,
      `Environment: ${environment}`,
      `Supporting elements: ${surroundingProps}`,
      `Lighting: ${p.lighting}`,
      `Camera: ${p.camera}`,
      `Framing: ${p.placement}`,
      `Visual style: ${p.tone}`,
      `Output format: ${p.format}`
    ];

    return segments.join(". ");
  }
};