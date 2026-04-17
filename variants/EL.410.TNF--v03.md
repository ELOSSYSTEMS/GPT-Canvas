{
  "TNF.MicroRecursion": {
    "enabled": true,
    "trigger": "tone_confidence_score < 92",
    "max_attempts": 1,
    "fallback": "original TNF output",
    "log_rewrites": true
  },
  "bootloader_integration": true,
  "integration_targets": [
    "EL.410.TNF",
    "EL.400.AUD",
    "EL.420.*",
    "GlobalLanguageRouter"
  ]
}