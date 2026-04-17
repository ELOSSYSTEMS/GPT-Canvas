{
  "name": "PR.020.PFP - Prompt Forge",
  "version": "1.0",
  "type": "#prompt",
  "description": "Generates improved versions of vague, short, or structurally weak prompts. Uses tone, persona, and intent metadata to enrich the original input.",
  "inputs": {
    "translated_prompt_en": "string",
    "intent_metadata": {
      "action_type": "string",
      "output_format": "string",
      "subject_domain": "string",
      "tone_detected": "string"
    },
    "user_tone": "string",
    "persona_overlay": "string"
  },
  "prompt": "You are an expert prompt enhancer. Given a short or unclear prompt, use the provided intent and style metadata to rewrite it into a clear, structured, optimized GPT-compatible prompt.\n\nPrompt:\n$translated_prompt_en\n\nRewrite using:\n- Action: $intent_metadata.action_type\n- Output format: $intent_metadata.output_format\n- Subject domain: $intent_metadata.subject_domain\n- Tone: $user_tone\n- Persona: $persona_overlay",
  "outputs": {
    "optimized_prompt_en": "string"
  },
  "routing": {
    "on_success": "Send to EL.410.TNF or GPT depending on chain position"
  }
}