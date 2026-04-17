{
  "module": "TNF.Rewriter.zh",
  "language": "Chinese (Mandarin)",
  "version": "1.0.0",
  "status": "active",
  "tone_fidelity_level": 3,
  "components": {
    "structural_rewrite_rules": [
      "Honor topic-prominent structure (subject often implicit)",
      "Respect sentence-final particles for tone (e.g., 吧, 呢, 啊)",
      "Use chengyu (成语) and idiomatic set phrases where appropriate"
    ],
    "idiomatic_lexicon_layer": {
      "Mainland": [
        {"phrase": "加油", "meaning": "Keep it up / You got this", "tone": "encouraging"},
        {"phrase": "别担心", "meaning": "Don’t worry", "tone": "reassuring"},
        {"phrase": "脑子进水了", "meaning": "What were they thinking?", "tone": "sarcastic"}
      ],
      "Taiwan": [
        {"phrase": "真的假的", "meaning": "For real?", "tone": "surprised/informal"},
        {"phrase": "赞啦", "meaning": "Awesome!", "tone": "cheerful"}
      ]
    },
    "tone_control_matrix": {
      "formal": {
        "syntax": "complete",
        "lexicon": "standard Mandarin",
        "tone": "neutral-respectful"
      },
      "casual": {
        "syntax": "abbreviated",
        "particles": ["啊", "啦", "呗"],
        "tone": "friendly"
      },
      "cheerful": {
        "intensifiers": ["超", "特别"],
        "emoji": true,
        "cadence": "light"
      },
      "stoic": {
        "modifiers": false,
        "sentences": "short",
        "tone": "flat"
      }
    },
    "style_tags": {
      "zh-cn": "Mainland Mandarin",
      "zh-tw": "Taiwan Mandarin",
      "zh-sg": "Singapore Mandarin"
    },
    "validator": {
      "back_mirror": true,
      "prompt_reflection_fidelity": ">=95%",
      "native_speaker_audit_passed": true
    }
  },
  "notes": "Focused on tone via sentence-final particles and set idioms. Handles simplified/traditional dialect toggling."
}