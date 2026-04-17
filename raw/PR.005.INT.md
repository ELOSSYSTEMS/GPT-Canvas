{
  "name": "PR.005.INT - Intent Parser",
  "version": "1.0",
  "type": "#prompt",
  "description": "Detects the user's intended action, output format, domain, and tone modifiers from Hebrew input.",
  "inputs": {
    "translated_prompt_en": "string (from EL.410.TNF)",
    "user_tone": "string",
    "persona_overlay": "string (optional)"
  },
  "prompt": "You are an intent classifier and tone decoder. Given the English version of a Hebrew prompt, return a structured analysis with the following keys:\n\n1. action_type (e.g., write, explain, summarize)\n2. output_format (e.g., list, paragraph, post, poem)\n3. subject_domain (e.g., parenting, marketing, relationships)\n4. ambiguity_level (scale 0–1)\n5. tone (if inferred)\n\nPrompt:\n$translated_prompt_en\n\nTone hint: $user_tone\nPersona hint: $persona_overlay",
  "outputs": {
    "action_type": "string",
    "output_format": "string",
    "subject_domain": "string",
    "ambiguity_level": "float",
    "tone_detected": "string"
  },
  "routing": {
    "if": "ambiguity_level > 0.6",
    "route": "PR.003.SDE"
  }
}