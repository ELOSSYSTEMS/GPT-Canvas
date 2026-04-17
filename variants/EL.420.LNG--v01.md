{
  "module": "TNF.Rewriter.es",
  "language": "Spanish",
  "version": "1.0.0",
  "status": "active",
  "tone_fidelity_level": 3,
  "components": {
    "structural_rewrite_rules": [
      "Prefer subject-drop where natural (e.g., 'Estoy bien' vs 'Yo estoy bien')",
      "Apply regional idiom placement after clause completion",
      "Reorder emphasis with phrase inversion where informal tone is intended"
    ],
    "idiomatic_lexicon_layer": {
      "Spain": [
        {"phrase": "Ni de co\u00f1a", "meaning": "No way", "tone": "dismissive/casual"},
        {"phrase": "Estar en las nubes", "meaning": "To be daydreaming", "tone": "neutral"}
      ],
      "LatinAmerica": [
        {"phrase": "\u00c1nimo", "meaning": "Cheer up", "tone": "supportive"},
        {"phrase": "Dale", "meaning": "Go ahead / Sure", "tone": "affirmative"},
        {"phrase": "Est\u00e1 ca\u00f1\u00f3n", "meaning": "That\'s intense/hard", "tone": "empathetic"}
      ]
    },
    "tone_control_matrix": {
      "formal": {
        "pronoun_use": true,
        "modal_strength": "polite",
        "vocabulary": "standard"
      },
      "casual": {
        "pronoun_use": false,
        "modal_strength": "light",
        "vocabulary": "colloquial"
      },
      "cheerful": {
        "intonation": "upbeat",
        "phrase_ends": "inclusive",
        "boosters": ["genial", "incre\u00edble"]
      },
      "stoic": {
        "intonation": "flat",
        "avoid_modifiers": true,
        "structure": "short-clause-heavy"
      }
    },
    "style_tags": {
      "mx": "Mexican slang prioritization",
      "es": "Castilian rhythm and form",
      "ar": "Argentinian interjections (e.g., 'che')"
    },
    "validator": {
      "back_mirror": true,
      "prompt_reflection_fidelity": ">=95%",
      "native_speaker_audit_passed": true
    }
  },
  "notes": "This module was constructed based on idiomatic corpora from Spain and Latin America, run through Stargate-optimized calibration prompts, and evaluated against Data+ tone and native speaker checks."
}