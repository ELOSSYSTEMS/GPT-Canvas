{
  "logic_block": "ELOS.TNF.SafeExpansion",
  "description": "Modular fallback system for tone fidelity in non-validated languages. Includes telemetry, passive feedback, and dynamic fallback routing.",
  "modules": [
    {
      "id": "TNF.SafeRouter.v1.0",
      "status": "active",
      "fireproofed": true,
      "description": "Wraps non-validated TNF modules. If rewrite confidence < 95% or missing idiomatic mapping → fallback to native GPT."
    },
    {
      "id": "TNF.Feedback.Core",
      "status": "scaffolded",
      "description": "Captures 1–5 tone fluency ratings from end users. Stores language, score, hash, model ID, routing path."
    },
    {
      "id": "TNF.Telemetry.Store",
      "status": "scaffolded",
      "description": "Local, anonymized JSON store for per-output tone fidelity feedback."
    },
    {
      "id": "TNF.VersionLog",
      "status": "queued",
      "description": "Historical tracker for TNF module upgrades by language, version, and method of validation."
    }
  ],
  "bootloader": {
    "activation": "conditional",
    "rule": "if detected_language != 'en' AND detected_language != 'he'",
    "load_modules": [
      "TNF.SafeRouter.v1.0",
      "TNF.Feedback.Core",
      "TNF.Telemetry.Store"
    ]
  }
}