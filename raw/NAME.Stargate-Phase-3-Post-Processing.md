// /elos/stargate/phase3.postProcessing.js

export function postProcessPrompt(prompt) {
  let result = prompt;

  // Trim leading/trailing whitespace and normalize spacing
  result = result.trim().replace(/\s{3,}/g, '  ');

  // Ensure consistent punctuation spacing
  result = result.replace(/\s([,.!?])/g, '$1');
  result = result.replace(/([,.!?])(?=\S)/g, '$1 ');

  // Replace common lazy endings with clarity enforcement
  result = result.replace(/(etc\.|and so on)(?!\S)/gi, '');

  // Force sentence casing if single sentence
  if (!/[.!?]{2,}/.test(result)) {
    result = result.charAt(0).toUpperCase() + result.slice(1);
  }

  return result;
}