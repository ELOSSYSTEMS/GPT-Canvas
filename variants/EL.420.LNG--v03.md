{
  "module": "TNF.Rewriter.de",
  "language": "German",
  "version": "1.0.0",
  "status": "active",
  "tone_fidelity_level": 3,
  "components": {
    "structural_rewrite_rules": [
      "Honor verb-final clause construction in subordinate structures",
      "Use modal particles (e.g., 'doch', 'mal', 'halt') to convey tone",
      "Mirror word-order fluidity in rhetorical emphasis (V2/V1 positioning)"
    ],
    "idiomatic_lexicon_layer": {
      "Germany": [
        {"phrase": "Ich verstehe nur Bahnhof", "meaning": "I have no idea what's going on", "tone": "confused"},
        {"phrase": "Alles klar", "meaning": "All good / Understood", "tone": "reassuring"},
        {"phrase": "Nicht schlecht, Herr Specht", "meaning": "Nicely done!", "tone": "playful"}
      ],
      "Austria": [
        {"phrase": "Passt schon", "meaning": "It’s fine", "tone": "casual"}
      ],
      "Switzerland": [
        {"phrase": "Guet gmacht", "meaning": "Well done (Swiss German)", "tone": "affirming"}
      ]
    },
    "tone_control_matrix": {
      "formal": {
        "register": "Hochdeutsch",
        "syntax": "strict",
        "vocabulary": "standard"
      },
      "casual": {
        "register": "Umgangssprache",
        "modal_particles": true,
        "syntax": "relaxed"
      },
      "cheerful": {
        "prefix_use": "positive intensifiers",
        "diminutives": true,
        "booster_words": ["toll", "klasse"]
      },
      "stoic": {
        "sentence_structure": "short",
        "verb_usage": "direct",
        "tone": "neutral"
      }
    },
    "style_tags": {
      "de": "Standard German",
      "at": "Austrian idioms",
      "ch": "Swiss dialect filter"
    },
    "validator": {
      "back_mirror": true,
      "prompt_reflection_fidelity": ">=95%",
      "native_speaker_audit_passed": true
    }
  },
  "notes": "Validated via native German linguist pass-throughs. Focus on modal particles for tone nuance and V2/V1 sentence positioning realism."
}