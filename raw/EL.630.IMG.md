// EL.630.IMG.StyleModifier
// Dynamically injects visual tone, aesthetic style, and mood into image prompts
// Accepts structured or natural language style descriptions and formats them into platform-friendly syntax

const StyleModifier = {
  inject(prompt, style = "") {
    if (!style) return prompt;
    const styleLine = `Style reference: ${style.trim()}`;
    return `${prompt}\n${styleLine}`;
  }
};