// AD.800.IMG – FireflyPromptEngine
// Purpose: Generate prompts specifically tailored for Adobe Firefly (inpainting, generative fill, Photoshop-integrated workflows)
// Optimized for surface realism, soft transitions, and layer-friendly output

const FireflyPromptEngine = {
  generate({
    subject = "preserved flower bouquet",
    surface = "white matte table",
    lighting = "soft natural daylight",
    backgroundContext = "modern Israeli living room with window shadows",
    targetUse = "Photoshop layer for eCommerce product image"
  }) {
    return [
      `Generate a realistic background behind a ${subject}`,
      `It should be placed on a ${surface}`,
      `Scene should feature ${lighting}`,
      `Background context: ${backgroundContext}`,
      `Ensure the result blends naturally for use as a ${targetUse}`,
      `Avoid harsh edges or surreal elements`
    ].join(". ");
  }
};