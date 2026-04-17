{
  "protocol_version": "3.0-fireproofed",
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
  "fireproofing": {
    "enabled": true,
    "input_patch_patterns": [
      {
        "pattern": "write (.+)",
        "rewrite": "Write a clear, concise paragraph about \1 with a defined purpose and target audience."
      },
      {
        "pattern": "explain (.+)",
        "rewrite": "Explain \1 in 3 structured bullet points, using simple language and one real-world example."
      },
      {
        "pattern": "generate ideas for (.+)",
        "rewrite": "Generate 3 distinct, creative ideas for \1, each with a one-line rationale."
      }
    ],
    "rewrite_integrity_checks": true,
    "post_output_audit": {
      "tone_check": true,
      "format_check": true,
      "length_check": true,
      "verb_alignment_check": true
    },
    "fallback_on_failure": "Revert to minimal expert prompt with tight constraints"
  },
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
      "glyph": "!synth",
      "function": "lock tone and constraints strictly"
    },
    {
      "glyph": "!learn",
      "function": "enable verbose educational output"
    }
  ],
  "excluded_features": [
    "prompt_history_cycling",
    "favorites_UI",
    "live_ghost_prompt_preview"
  ]
}