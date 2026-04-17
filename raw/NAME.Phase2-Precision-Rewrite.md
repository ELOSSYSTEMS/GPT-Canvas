// elos/stargate/phase2.precisionRewrite.js

/**
 * Phase 2 – Precision Rewrite
 * Core logic for structured prompt transformation
 * Powered by Stargate Protocol (v3.1-total-fireproofed)
 */

import { cleanInputText, normalizeSpacing, enforceClarityRules } from "../utils/fireproofingTools";

export function precisionRewrite(analysis) {
  if (!analysis || !analysis.intentType || !analysis.raw) {
    throw new Error("Missing analysis object or properties.");
  }

  let prompt = analysis.raw.trim();
  let rewrittenPrompt = prompt;

  // Apply precision edits based on intent
  switch (analysis.intentType) {
    case "instructional":
      rewrittenPrompt = prompt.replace(/^(please|can you)/i, "").trim();
      rewrittenPrompt = `Give step-by-step instructions: ${rewrittenPrompt}`;
      break;

    case "ideation":
      rewrittenPrompt = `Generate creative ideas for: ${prompt}`;
      break;

    case "rewrite":
      rewrittenPrompt = `Rewrite this clearly and concisely: ${prompt}`;
      break;

    case "diagnostic":
      rewrittenPrompt = `Analyze the following for tone, clarity, and logic gaps: ${prompt}`;
      break;

    case "strategic":
      rewrittenPrompt = `Respond like a strategist. Input: ${prompt}`;
      break;

    default:
      rewrittenPrompt = `Refine this prompt: ${prompt}`;
  }

  // Apply fireproofing utilities
  rewrittenPrompt = cleanInputText(rewrittenPrompt);
  rewrittenPrompt = normalizeSpacing(rewrittenPrompt);
  rewrittenPrompt = enforceClarityRules(rewrittenPrompt);

  return {
    original: prompt,
    rewritten: rewrittenPrompt,
    meta: {
      phase: "Precision Rewrite",
      timestamp: new Date().toISOString(),
      method: "rule-based with context overlay"
    }
  };
}