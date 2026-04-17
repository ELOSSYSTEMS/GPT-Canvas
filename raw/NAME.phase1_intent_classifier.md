// elos/stargate/phase1.intentClassifier.js

/**
 * Intent Classifier: Analyze raw input to generate a diagnostic fingerprint
 * Includes language detection, tone tagging, complexity check, and special symbol triggers
 *
 * @param {string} input
 * @returns {object} diagnostic
 */
export function classifyIntent(input) {
  const trimmed = input.trim();
  const lang = detectLanguage(trimmed);
  const symbols = extractSymbolTriggers(trimmed);
  const tone = detectTone(trimmed);
  const complexity = estimateComplexity(trimmed);

  return {
    lang,
    tone,
    symbols,
    complexity,
    wordCount: trimmed.split(/\s+/).length,
    hasHebrew: /[֐-׿]/.test(trimmed),
    hasEnglish: /[a-zA-Z]/.test(trimmed),
  };
}

function detectLanguage(text) {
  if (/[֐-׿]/.test(text) && !/[a-zA-Z]/.test(text)) return "hebrew";
  if (/[a-zA-Z]/.test(text) && !/[֐-׿]/.test(text)) return "english";
  return "mixed";
}

function extractSymbolTriggers(text) {
  const triggers = [];
  if (text.includes("🔐")) triggers.push("private-mode");
  if (text.includes("✍️")) triggers.push("copy-polish");
  if (text.includes("⚡")) triggers.push("turbo-mode");
  return triggers;
}

function detectTone(text) {
  if (/!/.test(text)) return "urgent";
  if (/\?/.test(text)) return "inquisitive";
  return "neutral";
}

function estimateComplexity(text) {
  const sentences = text.split(/[.!?]/).length;
  const avgLength = text.split(/\s+/).length / sentences;
  if (avgLength > 20) return "high";
  if (avgLength > 10) return "medium";
  return "low";
}