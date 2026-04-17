// ===========================
// AO.920.PRM.AdSentenceVerifier.js
// ===========================

export function verifyAdSentence(prompt) {
  const result = {
    hasAction: /\b(write|explain|summarize|generate|create|design|analyze)\b/i.test(prompt),
    hasDetails: /\babout|on|regarding|topic\b/i.test(prompt),
    hasSuccessCriteria: /\bshould be|make it|needs to|in under|must include\b/i.test(prompt),
    hasAudience: /\bfor (a|an|the)\b/i.test(prompt),
  };

  result.isComplete = result.hasAction && result.hasDetails && result.hasSuccessCriteria && result.hasAudience;
  return result;
}

export function patchPrompt(prompt, defaults = {}) {
  const patched = prompt.trim();

  if (!defaults.action) defaults.action = "Explain";
  if (!defaults.details) defaults.details = "[topic]";
  if (!defaults.success) defaults.success = "in under 100 words, avoiding jargon";
  if (!defaults.audience) defaults.audience = "for someone new to the subject";

  return `${defaults.action} ${defaults.details} ${defaults.success} ${defaults.audience}`;
}

// ===========================
// AO.100.PRS.PromptSurgeon.js
// ===========================

import { verifyAdSentence, patchPrompt } from './AO.920.PRM.AdSentenceVerifier.js';

export function runPromptSurgeon(rawPrompt) {
  // Step 1: Verify Structure
  const check = verifyAdSentence(rawPrompt);
  if (!check.isComplete) {
    const patched = patchPrompt(rawPrompt);
    console.warn("Prompt was structurally incomplete. Patched for processing:", patched);
    return refinePrompt(patched);
  }

  // Step 2: Proceed with Refinement
  return refinePrompt(rawPrompt);
}

function refinePrompt(prompt) {
  // Core transformation logic: rewrite for clarity, power, structure
  let rewritten = prompt;

  rewritten = rewritten.replace(/\bmake it\b/gi, "rewrite this as");
  rewritten = rewritten.replace(/\bshould be\b/gi, "must be structured as");
  rewritten = rewritten.replace(/\bclear\b/gi, "precise and unambiguous");

  // Add a final polish
  return `🔥 Final Optimized Prompt: ${rewritten}`;
}

// ===========================
// Bootloader Integration Hook
// ===========================

export function preprocessPrompt(prompt) {
  const verified = verifyAdSentence(prompt);
  if (!verified.isComplete) {
    return patchPrompt(prompt);
  }
  return prompt;
}