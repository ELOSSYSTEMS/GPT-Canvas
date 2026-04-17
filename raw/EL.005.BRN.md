{
  "layer": "EL.005.BRN",
  "title": "ELOS Prompt Brain",
  "description": "Fireproofed orchestration logic for selective and intelligent prompt protocol routing.",
  "status": "active",
  "location": ["Allon OS Root", "ELos Subsystem"],
  "bootloader": true,
  "core_logic": {
    "language_detection": {
      "if": "prompt.language == 'Hebrew'",
      "then": "activate('EL.410.TNF')"
    },
    "redundancy_check": {
      "if": "prompt.is_redundant()",
      "then": "activate('AO.200.CNS', mode='skip')"
    },
    "length_filter": {
      "if": "prompt.length > 600",
      "then": "activate('EL.003.CPR')"
    },
    "ambiguity_scan": {
      "if": "prompt.is_creative and prompt.ambiguity_score > 0.7",
      "then": "activate('EL.003.DVR')"
    },
    "experimental_flag": {
      "if": "prompt.flags.contains('experimental')",
      "then": "activate('EL.003.EXP')"
    },
    "always_run": [
      "EL.002.STG"
    ]
  },
  "fireproofing": {
    "integrity_checks": true,
    "fallbacks": [
      "if any trigger fails, default to STG"
    ],
    "version_lock": "v1.0-fireproofed",
    "rewrite_guardrails": true,
    "prompt_validation": "enforced"
  },
  "logging": true,
  "version": "v1.0-fireproofed",
  "notes": "This is the protocol brain. All prompt traffic must pass through here before any transformation begins. Fireproofed against logic failure, prompt loss, and misrouting."
}