{
  "module": "TNF.Rewriter.pt",
  "language": "Portuguese",
  "version": "1.0.0",
  "status": "active",
  "tone_fidelity_level": 3,
  "components": {
    "structural_rewrite_rules": [
      "Respect verb conjugation across regional variants (PT-BR vs PT-EU)",
      "Apply enclisis, proclisis, and mesoclisis based on register",
      "Preserve contractions and elisions (e.g., 'da', 'do', 'n’isso')"
    ],
    "idiomatic_lexicon_layer": {
      "Brazil": [
        {"phrase": "Tá de boa", "meaning": "It’s chill", "tone": "casual"},
        {"phrase": "Ficar bolado", "meaning": "Get upset/confused", "tone": "emotive"},
        {"phrase": "Mó legal", "meaning": "Super cool", "tone": "cheerful"}
      ],
      "Portugal": [
        {"phrase": "Está-se bem", "meaning": "All’s well", "tone": "easygoing"},
        {"phrase": "Ficar em águas de bacalhau", "meaning": "To come to nothing", "tone": "disappointed"}
      ]
    },
    "tone_control_matrix": {
      "formal": {
        "syntax": "strict",
        "register": "European or high-register Brazilian",
        "vocabulary": "refined"
      },
      "casual": {
        "syntax": "relaxed",
        "register": "spoken",
        "vocabulary": "slang-prone"
      },
      "cheerful": {
        "booster_phrases": ["show de bola", "muito maneiro"],
        "emoji_compatibility": true,
        "rhythm": "animated"
      },
      "stoic": {
        "syntax": "compact",
        "modality": "low",
        "tone": "neutral"
      }
    },
    "style_tags": {
      "pt-br": "Brazilian Portuguese",
      "pt-eu": "European Portuguese tone norms"
    },
    "validator": {
      "back_mirror": true,
      "prompt_reflection_fidelity": ">=95%",
      "native_speaker_audit_passed": true
    }
  },
  "notes": "Built for bidialectal Portuguese output fidelity. Distinguishes casual tones across Brazil/Portugal."
}