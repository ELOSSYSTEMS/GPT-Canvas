// AD.801.IMG – CanvaPromptEngine
// Purpose: Prompt builder for Canva AI image generator, optimized for clean, commercial-friendly visuals
// Supports presets for Instagram posts, ads, story formats, and presentations

const CanvaPromptEngine = {
  generate({
    subject = "preserved flower bouquet on table",
    background = "minimal living room with soft lighting",
    tone = "clean and airy",
    format = "Instagram square post",
    branding = "Forever Flowers"
  }) {
    return [
      `Design a ${format} featuring a ${subject}`,
      `Place the scene in a ${background}`,
      `Use a ${tone} visual style`,
      `Ensure composition feels natural and commercial-ready`,
      `Final image should align with the branding tone of ${branding}`
    ].join(". ");
  }
};