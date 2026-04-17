{
  "module": "GlobalLanguageRouter",
  "version": "1.0.0",
  "scope": "Private OS + Public Extension",
  "function": "Dynamically route user inputs to correct TNF Rewriter module based on detected input language",
  "detection_engine": {
    "method": "ISO 639-1 language code detection",
    "fallback": "manual override or user-defined language preference",
    "confidence_threshold": 0.90
  },
  "routing_map": {
    "fr": "EL.420.LNG.Rewriter.fr",
    "de": "EL.420.LNG.Rewriter.de",
    "ja": "EL.420.LNG.Rewriter.ja",
    "pt": "EL.420.LNG.Rewriter.pt",
    "zh": "EL.420.LNG.Rewriter.zh",
    "he": "EL.420.HBR"  
  },
  "execution_sequence": [
    "Detect input language",
    "Match to routing_map",
    "Inject input into correct Rewriter module",
    "Process via TNF + Translate + Stargate chain",
    "Return output in native speaker tone-mirrored language"
  ],
  "override_options": {
    "user_tone_preference": true,
    "custom dialect toggle": true,
    "debug output trace": true
  },
  "audit_log": {
    "enabled": true,
    "log_path": "/logs/lang_router_runtime.json",
    "retention_days": 30
  },
  "notes": "All routing logic is zero-API and runs inside user ChatGPT logic. No external model calls."
}