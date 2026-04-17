{
  "name": "EL.410.TNF - Translate 2.0+",
  "version": "1.0",
  "type": "#prompt",
  "description": "Bi-directional tone-aware Hebrew ↔ English translation module preserving intent and cultural fidelity.",
  "inputs": {
    "raw_prompt_he": "string (Hebrew user input)",
    "model_output_en": "string (optional: English response from GPT)",
    "user_tone": "string (e.g., formal, witty, blunt)",
    "persona_overlay": "string (optional persona)",
    "mode": "string (either 'he_to_en' or 'en_to_he')"
  },
  "prompt": {
    "he_to_en": "You are a bilingual AI trained in Hebrew and English. Your task is to translate the following Hebrew input into fluent English that captures:\n1. The user's tone ($user_tone)\n2. The user's intent and cultural context\n3. Clarity for use in LLM prompt execution\n\nIf the prompt is ambiguous, preserve the ambiguity in the translation.\n\nHebrew Input:\n$raw_prompt_he\n\nTone: $user_tone\nPersona: $persona_overlay",
    "en_to_he": "You are a professional Hebrew localization specialist. Translate the following English output into modern, fluent Israeli Hebrew that matches:\n1. The original tone ($user_tone)\n2. The voice/persona ($persona_overlay)\n3. Local cultural expressions\n\nAvoid literal translations. Emphasize native flow, idiomatic language, and stylistic fidelity.\n\nEnglish Output:\n$model_output_en"
  },
  "routing": {
    "if": "mode == 'he_to_en'",
    "use": "prompt.he_to_en"
  },
  "fallback": {
    "on_missing_output": "Return a direct translation using literal fallback engine and log the issue to SYS.101.SGS"
  }
}