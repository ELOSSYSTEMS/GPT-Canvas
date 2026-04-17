// PR.700.IMG – Forever Flowers x PhotoRoom Prompt Engine
// Purpose: Auto-generate photorealistic background prompts that frame the Forever Flowers bouquet + vase as the centerpiece.
// Behavior: Always assumes centered, well-lit product on a table. All scene design happens *around* the bouquet.
// Engine is hardcoded for Forever Flowers use only.

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
    bouquetStyle = "Forever Flowers preserved bouquet",
    vaseType = "ivory ceramic vase with soft matte texture",
    tableSurface = "white modern dining table",
    environment = "Israeli apartment with white walls, balcony window, and soft background furniture",
    surroundingProps = "ceramic mug, linen napkin, soft window shadow",
    preset = "default"
  }) {
    const p = this.presets[preset] || {};

    const subject = `${bouquetStyle} arranged in a ${vaseType}`;

    const segments = [
      `Centerpiece: ${subject}`,
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

// Example usage:
const prompt = ForeverFlowersPhotoRoomPromptEngine.generate({
  bouquetStyle: "Dried floral bouquet with yellow craspedia, burgundy eucalyptus, and lavender sprigs",
  vaseType: "stone-textured ivory ceramic vase",
  tableSurface: "smooth white laminate table",
  environment: "clean sunlit Tel Aviv apartment with sliding windows and beige sofa in background",
  surroundingProps: "folded napkin, espresso cup, and soft edge shadow"
});

console.log(prompt);