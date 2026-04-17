// EL.632.IMG.PlatformConstraints
// Auto-modifies prompt according to platform-specific rules and restrictions

const PlatformConstraints = {
  apply(prompt, platform = "") {
    if (!platform) return prompt;

    switch (platform.toLowerCase()) {
      case "photoroom":
        return `${prompt}\nAvoid surreal elements. Use clean backgrounds. Use language suitable for commercial product photography.`;
      case "dall-e":
        return `${prompt}\nUse descriptive terms. Allow for subtle stylization. Works well with natural shadows and composition.`;
      case "midjourney":
        return `${prompt}\nUse photography terms. Avoid abstract language. Enforce aspect ratio formatting like --ar 3:2.`;
      case "firefly":
        return `${prompt}\nEnsure seamless blending for Photoshop. Emphasize lighting realism. Avoid cartoonish elements.`;
      case "stable diffusion":
        return `${prompt}\nUse highly descriptive photographic language. Include camera lens and lighting descriptions.`;
      case "canva ai":
        return `${prompt}\nKeep it short, direct, and safe for commercial templates. Avoid hyperrealistic or surreal styles.`;
      default:
        return prompt;
    }
  }
};