// 🔁 ELoS Translate 2.0 Full Roundtrip with Prompt Execution

// --- src/modules/ElosTranslate.js ---

import runElosPrompt from "./RunElosPrompt";

export default function ElosTranslate({
  originalText,
  source = "he",
  target = "he",
  tone = "empathetic",
  roundtrip = false,
}) {
  // Step 1: Translate HE → EN (mock)
  const englishInput = mockTranslateToEnglish(originalText);

  if (!roundtrip) {
    return `🌐 Translated (HE → EN): ${englishInput}`;
  }

  // Step 2: Run Prompt in English
  const englishResponse = runElosPrompt(englishInput, tone);

  // Step 3: Translate EN → HE (mock)
  const hebrewFinal = mockTranslateToHebrew(englishResponse, tone);

  return (
    `🌐 ELoS Translate 2.0 (Roundtrip Mode)\n\n` +
    `Original (HE): ${originalText}\n` +
    `→ Translated (EN): ${englishInput}\n` +
    `→ ELoS Prompt Output: ${englishResponse}\n` +
    `→ Final Translation (HE): ${hebrewFinal}`
  );
}

function mockTranslateToEnglish(hebrewText) {
  if (hebrewText.includes("זה ממש דחוף")) return "This is really urgent";
  return `[EN] ${hebrewText}`;
}

function mockTranslateToHebrew(englishText, tone) {
  if (englishText.includes("Would you mind prioritizing")) {
    return "האם תוכל להתמקד בזה בהקדם בבקשה?";
  }
  return `[HE] ${englishText}`;
}


// --- src/modules/RunElosPrompt.js ---

import IntentParser from "./IntentParser";
import PromptForge from "./PromptForge";
import ToneTransformer from "./ToneTransformer";

export default function runElosPrompt(inputText, tone) {
  const intent = IntentParser(inputText);

  if (intent === "tone-shift") {
    const result = ToneTransformer(inputText);
    return result.transformed;
  }

  return PromptForge(intent);
}


// --- Add to CommandRouter.js ---

import ElosTranslate from "./ElosTranslate";

if (trimmed.startsWith("!translate")) {
  const body = trimmed.replace("!translate", "").trim();
  const toneMatch = body.match(/--tone\s+(\w+)/);
  const roundtrip = body.includes("--roundtrip");
  const tone = toneMatch ? toneMatch[1] : "empathetic";
  const cleanInput = body
    .replace(/--tone\s+\w+/, "")
    .replace("--roundtrip", "")
    .trim();

  return ElosTranslate({
    originalText: cleanInput,
    tone,
    roundtrip,
  });
}