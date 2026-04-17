// ✅ FIXED ELoS Translate 2.0 with full roundtrip + debug fallback
import runElosPrompt from "./RunElosPrompt";

export default function ElosTranslate({
  originalText,
  source = "he",
  target = "he",
  tone = "empathetic",
  roundtrip = false,
}) {
  console.log("🚀 ElosTranslate input:", originalText, { roundtrip, tone });

  // Step 1: Translate HE → EN (mock)
  const englishInput = mockTranslateToEnglish(originalText);
  console.log("🔤 Translated to English:", englishInput);

  if (!roundtrip) {
    return `🌐 Translated (HE → EN): ${englishInput}`;
  }

  // Step 2: Run Prompt in English
  const englishResponse = runElosPrompt(englishInput, tone);
  console.log("🧠 ELoS Prompt Output:", englishResponse);

  // Step 3: Translate EN → HE (mock)
  const hebrewFinal = mockTranslateToHebrew(englishResponse, tone);
  console.log("🔁 Translated back to Hebrew:", hebrewFinal);

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
  return `[EN MOCK] ${hebrewText}`;
}

function mockTranslateToHebrew(englishText, tone) {
  if (englishText.includes("Would you mind prioritizing")) {
    return "האם תוכל להתמקד בזה בהקדם בבקשה?";
  }
  return `[HE MOCK] ${englishText}`;
}