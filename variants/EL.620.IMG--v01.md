// EL.620.IMG – VisualRouter
// Purpose: Automatically route user through correct visual engine based on platform selection
// Tied to InteractiveComposer; kicks off prompt sequence after identifying target platform

const VisualRouter = {
  askPlatform() {
    return "Which platform are you generating the image with? (PhotoRoom, Stable Diffusion, DALL·E, Midjourney)";
  },

  route(platform) {
    switch (platform.toLowerCase()) {
      case "photoroom":
        return {
          module: "PR.700.IMG.PhotoRoomPromptEngine",
          execute: (params) => ForeverFlowersPhotoRoomPromptEngine.generate(params)
        };
      case "stable diffusion":
        return {
          module: "EL.610.IMG.FusionEngine",
          execute: (params) => FusionEngine.generate(params)
        };
      case "dall-e":
      case "midjourney":
        return {
          module: "EL.600.IMG.CoreEngine",
          execute: (params) => CoreEngine.generate(params)
        };
      default:
        return {
          error: "Unsupported platform. Please choose from PhotoRoom, Stable Diffusion, DALL·E, or Midjourney."
        };
    }
  }
};