{
  "module": "EL.621.LNG.DebugView",
  "purpose": "Trace and visualize language detection and routing for TNF/Translate execution",
  "version": "1.0.0",
  "display_format": "diagnostic table + routing tree",
  "outputs": [
    {
      "input": "Raw user prompt (any language)",
      "detected_language": "ISO 639-1 code",
      "confidence": "float (0.00–1.00)",
      "routed_module": "TNF Rewriter module name",
      "tone_source": "user-defined | mirrored | default",
      "final_output_language": "Human-readable (e.g., French, Hebrew)"
    }
  ],
  "view_modes": {
    "compact": "one-line trace per prompt",
    "expanded": "full module path, fidelity scores, tone origin, overrides"
  },
  "user_controls": {
    "toggle_debug": true,
    "filter_by_language": true,
    "export_log": true,
    "manual_reroute": true
  },
  "storage": {
    "log_file_path": "/logs/tnf_language_router_debug.json",
    "retention_policy_days": 15,
    "privacy_mode": "local user storage only"
  },
  "notes": "Visual output should be available to both the OS developer (you) and optionally to extension users under developer mode. Fully local, no API interaction."
}