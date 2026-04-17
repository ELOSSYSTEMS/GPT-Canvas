{
  "protocol_version": "2.0-final",
  "structure": {
    "phases": [
      "Phase 1",
      "Phase 2",
      "Phase 3"
    ],
    "completion_signal": "ELos Prompt Protocol Complete ✅",
    "default_mode": "stealth",
    "required_blocks": [
      "role",
      "task",
      "format",
      "constraints",
      "tone"
    ],
    "defaults": {
      "role": "You are an expert.",
      "task": "Your task is to [do something specific].",
      "format": "Use markdown, bullet points, or numbered lists.",
      "constraints": "Be precise. Avoid fluff. Stay within [length or format].",
      "tone": "Confident, direct, and professional."
    },
    "fallbacks": {
      "task": "Clearly describe the intended output using verbs.",
      "format": "Default to markdown with bolded headers.",
      "tone": "If tone is unclear, choose 'firm but helpful'."
    }
  },
  "fireproofing": [
    {
      "pattern": "explain .*",
      "rewrite": "explain [specific topic] in 3 concise bullet points and one real-world example"
    },
    {
      "pattern": "write about .*",
      "rewrite": "write a compelling short-form paragraph about [topic] with a clear argument"
    }
  ],
  "post_processing": {
    "constraint_verifier": true,
    "consistency_audit": true,
    "self_debug": true
  },
  "modes": {
    "stealth": {
      "visible_output": false,
      "default": true
    },
    "audit": {
      "visible_output": true,
      "phase_markers": false
    },
    "phase": {
      "visible_output": true,
      "phase_markers": ["Phase 1 ✅", "Phase 2 ✅", "Phase 3 ✅"]
    }
  },
  "glyph_triggers": [
    {
      "glyph": "🔐",
      "function": "lock tone and constraints strictly"
    },
    {
      "glyph": "✍️",
      "function": "enable verbose educational output"
    }
  ],
  "excluded_features": [
    "prompt_history_cycling",
    "favorites_UI",
    "live_ghost_prompt_preview"
  ]
}