{
  "module": "TNF.Rewriter.fr",
  "language": "French",
  "version": "1.0.0",
  "status": "active",
  "tone_fidelity_level": 3,
  "components": {
    "structural_rewrite_rules": [
      "Respect elision and liaison placement (e.g., 'j’aime', not 'je aime')",
      "Preserve register by toggling 'tu' vs 'vous' depending on tone",
      "Ensure subjonctif usage in emotional or uncertain contexts"
    ],
    "idiomatic_lexicon_layer": {
      "France": [
        {"phrase": "C’est pas sorcier", "meaning": "It’s not rocket science", "tone": "reassuring"},
        {"phrase": "Avoir le cafard", "meaning": "To feel blue", "tone": "empathetic"},
        {"phrase": "Grave stylé", "meaning": "Really cool", "tone": "cheerful/youth"}
      ],
      "Quebec": [
        {"phrase": "C’est ben correct", "meaning": "It’s all good", "tone": "casual"},
        {"phrase": "Je capote", "meaning": "I’m freaking out (excited or stressed)", "tone": "emphatic"}
      ]
    },
    "tone_control_matrix": {
      "formal": {
        "pronoun_use": true,
        "vocabulary": "standard",
        "modal_strength": "moderate"
      },
      "casual": {
        "pronoun_use": false,
        "vocabulary": "colloquial",
        "modal_strength": "light"
      },
      "cheerful": {
        "boosters": ["super", "génial"],
        "intonation": "elevated",
        "register": "youth"
      },
      "stoic": {
        "syntax": "declarative",
        "modifier_use": false,
        "cadence": "even"
      }
    },
    "style_tags": {
      "fr": "Metropolitan French",
      "qc": "Quebecois tone overrides",
      "afr": "African French simplification rules"
    },
    "validator": {
      "back_mirror": true,
      "prompt_reflection_fidelity": ">=95%",
      "native_speaker_audit_passed": true
    }
  },
  "notes": "Module engineered for idiomatic fluency, honoring register shifts and formality tone gradients. Passed native speaker audits (France and Quebec variants)."
}