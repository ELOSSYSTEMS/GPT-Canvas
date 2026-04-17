// 📁 src/modules/ElosTranslate.js
const heToEn = {
  "זה ממש דחוף": "This is really urgent",
  "אני צריך את זה עכשיו": "I need this now",
};

const enToHe = {
  "This is really urgent": "זה ממש דחוף",
  "I need this now": "אני צריך את זה עכשיו",
  "Would you mind prioritizing this soon?": "האם תוכל להתמקד בזה בהקדם בבקשה?",
  "Can you please handle this now?": "תוכל לטפל בזה עכשיו בבקשה?",
};

export function translate(text, { from = "he", to = "en" } = {}) {
  if (from === "he" && to === "en") return heToEn[text] || "[en] " + text;
  if (from === "en" && to === "he") return enToHe[text] || "[he] " + text;
  return `[⚠️ unsupported translation]: ${text}`;
}


// 📁 src/modules/RunElosPrompt.js
import IntentParser from "./IntentParser";
import PromptForge from "./PromptForge";
import ToneTransformer from "./ToneTransformer";

export default function runElosPrompt(inputText, tone = "empathetic") {
  const intent = IntentParser(inputText);
  if (intent === "tone-shift") {
    const result = ToneTransformer(inputText);
    return result.transformed;
  }
  return PromptForge(intent);
}


// 📁 src/modules/CommandRouter.js (excerpt)
import { translate } from "./ElosTranslate";
import runElosPrompt from "./RunElosPrompt";

// Inside CommandRouter function:
if (trimmed.startsWith("!translate")) {
  const isRoundtrip = trimmed.includes("--roundtrip");
  const toneMatch = trimmed.match(/--tone\s+(\w+)/);
  const tone = toneMatch ? toneMatch[1].toLowerCase() : "default";

  const body = trimmed
    .replace("!translate", "")
    .replace(/--roundtrip/, "")
    .replace(/--tone\s+\w+/, "")
    .trim();

  const originalHE = body;
  const translatedEN = translate(originalHE, { from: "he", to: "en" });

  let processedEN = translatedEN;
  if (isRoundtrip) {
    processedEN = runElosPrompt(translatedEN, tone);
  }

  const finalHE = translate(processedEN, { from: "en", to: "he" });

  return (
    `🌐 ELoS Translate 2.0 (Roundtrip Mode)\n\n` +
    `Original (HE): ${originalHE}\n` +
    `→ Translated (EN): ${translatedEN}\n` +
    `→ Processed via ELoS Protocol: ${processedEN}\n` +
    `→ Translated back (HE): ${finalHE}`
  );
}