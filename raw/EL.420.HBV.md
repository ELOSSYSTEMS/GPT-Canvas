// Canvas: EL.420.HBV – Hebrew Voice Variant (Tone Fidelity Engine)
// Function: Post-processes Hebrew outputs from voice input to enforce tone fidelity, clarity, and rewrite quality

const toneAuditRules = [
  { rule: "Avoid passive constructs unless intentional", severity: "high" },
  { rule: "Prefer modern, conversational Israeli Hebrew", severity: "medium" },
  { rule: "Enforce consistent formality per context", severity: "high" },
  { rule: "Detect literal translations from English and rewrite idiomatically", severity: "critical" },
  { rule: "Shorten bloated syntax typical of voice-to-text", severity: "medium" }
];

function auditHebrewVoiceText(inputText) {
  const issues = [];
  toneAuditRules.forEach(rule => {
    // Placeholder: Each rule would be matched with NLP logic (e.g., TTS phrasing flags)
    if (inputText.includes("על ידי")) {
      issues.push({ issue: "Passive phrasing detected", severity: "high" });
    }
  });
  return issues;
}

function rewriteHebrewText(text) {
  let result = text;
  result = result.replace(/על ידי/g, "באמצעות");
  result = result.replace(/אני רוצה להגיד ש/g, "רק שתדע,");
  return result.trim();
}

function runVoiceToneFidelityEngine(inputText) {
  const issues = auditHebrewVoiceText(inputText);
  const rewritten = rewriteHebrewText(inputText);
  return {
    original: inputText,
    issues,
    rewritten,
    pass: issues.length === 0
  };
}

// Exportable logic for integration
module.exports = {
  runVoiceToneFidelityEngine,
  auditHebrewVoiceText,
  rewriteHebrewText
};