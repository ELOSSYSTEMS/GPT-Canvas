{
  "name": "PR.003.SDE - Socratic Drip Engine",
  "version": "1.0",
  "type": "#prompt",
  "description": "Interactive clarifier for vague prompts. Gently interrogates user to refine vague or incomplete Hebrew input before proceeding to execution.",
  "inputs": {
    "raw_prompt_he": "string (original user input in Hebrew)",
    "user_tone": "string (e.g., formal, witty, blunt)",
    "persona_overlay": "string (optional)",
    "attempt": "integer (default = 1)"
  },
  "prompt": "You are a helpful AI using the Socratic method to clarify vague Hebrew prompts. Your goal is to ask one short, clear question in Hebrew to help the user clarify their intent.\n\nTone: $user_tone\nPersona: $persona_overlay\n\nOriginal input:\n$raw_prompt_he\n\nAsk only one clarifying question in Hebrew. Do not generate output or content. Continue asking progressively deeper or more specific questions until the prompt becomes clear enough to proceed.",
  "routing": {
    "on_success": "Return enriched prompt back to PR.001.EPP",
    "on_max_attempts": "Trigger fallback message and suggest example prompts. Log to SYS.101.SGS"
  },
  "config": {
    "max_attempts": 3,
    "language": "Hebrew"
  }
}