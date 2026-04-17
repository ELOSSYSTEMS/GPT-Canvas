// 🔁 ELoS Full Simulation Pipeline (Translate > ELoS Logic > GPT-4o-mini > Tone Fidelity)

import express from "express";
import cors from "cors";
import fetch from "node-fetch";
import dotenv from "dotenv";
import IntentParser from "./src/modules/IntentParser.js";
import ToneTransformer from "./src/modules/ToneTransformer.js";
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

function mockTranslateToEnglish(hebrewText) {
  if (hebrewText.includes("זה ממש דחוף")) return "This is really urgent";
  return `[EN MOCK] ${hebrewText}`;
}

function mockTranslateToHebrew(englishText, tone = "default") {
  if (englishText.includes("Would you mind prioritizing")) {
    return "האם תוכל להתמקד בזה בהקדם בבקשה?";
  }
  return `[HE MOCK] ${englishText}`;
}

app.post("/api/run", async (req, res) => {
  const { input } = req.body;

  try {
    // Step 1: Detect if Hebrew → translate to English
    const isHebrew = /[\u0590-\u05FF]/.test(input);
    const translatedInput = isHebrew ? mockTranslateToEnglish(input) : input;

    // Step 2: Run through ELoS Intent Parser (optional routing)
    const intent = IntentParser(translatedInput);

    // Step 3: Send to GPT-4o-mini
    const openaiRes = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${OPENAI_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-4o",
        messages: [{ role: "user", content: translatedInput }],
        temperature: 0.7,
      }),
    });

    const gpt = await openaiRes.json();
    const rawOutput = gpt.choices?.[0]?.message?.content || "⚠️ No GPT response.";

    // Step 4: If original input was Hebrew, translate back
    let finalOutput = isHebrew ? mockTranslateToHebrew(rawOutput) : rawOutput;

    // Step 5: If Hebrew, apply tone fidelity logic (mocked)
    if (isHebrew && intent === "tone-shift") {
      const toneAdjusted = ToneTransformer(finalOutput);
      finalOutput = `🎙️ Tone Fidelity Engine:
Original: "${toneAdjusted.original}"
Transformed: "${toneAdjusted.transformed}"`;
    }

    res.json({ output: finalOutput });
  } catch (err) {
    console.error("❌ Pipeline error:", err);
    res.status(500).json({ output: "Server error." });
  }
});

app.listen(4000, () => {
  console.log("✅ ELoS Full Pipeline Simulator running at http://localhost:4000/api/run");
});