{
  "module": "TNF.Rewriter.ja",
  "language": "Japanese",
  "version": "1.0.0",
  "status": "active",
  "tone_fidelity_level": 3,
  "components": {
    "structural_rewrite_rules": [
      "Honor subject omission norms and context-based interpretation",
      "Respect sentence-final particle usage (e.g., 'ね', 'よ', 'の') to signal tone",
      "Preserve keigo (敬語) structure in formal mode"
    ],
    "idiomatic_lexicon_layer": {
      "Japan": [
        {"phrase": "やばい", "meaning": "crazy/great/dangerous depending on context", "tone": "versatile"},
        {"phrase": "マジで？", "meaning": "Seriously?", "tone": "casual/incredulous"},
        {"phrase": "なるほど", "meaning": "I see", "tone": "acknowledging"}
      ]
    },
    "tone_control_matrix": {
      "formal": {
        "keigo_mode": true,
        "sentence_end": "です／ます",
        "vocabulary": "standard"
      },
      "casual": {
        "keigo_mode": false,
        "particles": ["ね", "よ"],
        "sentence_end": "plain form"
      },
      "cheerful": {
        "emojis": true,
        "doubling_words": true,
        "excitement_particles": ["わーい", "やった"]
      },
      "stoic": {
        "minimal_particles": true,
        "sentence_ends": "abrupt",
        "cadence": "flat"
      }
    },
    "style_tags": {
      "ja": "Standard Japanese",
      "jp_youth": "Youth slang mode",
      "jp_formal": "Keigo override"
    },
    "validator": {
      "back_mirror": true,
      "prompt_reflection_fidelity": ">=95%",
      "native_speaker_audit_passed": true
    }
  },
  "notes": "Tuned for particle nuance, tone through omission, and keigo layer integration. Youth mode optional."
}