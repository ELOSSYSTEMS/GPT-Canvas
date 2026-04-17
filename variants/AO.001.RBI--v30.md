```json
{
  "metadata": {
    "title": "ELoS Command Registry",
    "version": "2025-06-21",
    "loaded_via": "!boot",
    "index_ref": "AO.001.RBI"
  },
  "000": {
    "category": "System-Reserved",
    "commands": {
      "000.01": {"cmd": "!boot", "purpose": "Load full ELoS OS"},
      "000.02": {"cmd": "!store", "purpose": "Persist next user message"},
      "000.03": {"cmd": "!forget", "purpose": "Delete specified memory keys"},
      "000.04": {"cmd": "!help", "purpose": "Return quick reference"},
      "000.05": {"cmd": "!commands", "purpose": "Display full registry"}
    }
  },
  "100": {
    "category": "Core Utility",
    "commands": {
      "100.01": {"cmd": "!diagnose_canvas", "purpose": "Audit canvases"},
      "100.02": {"cmd": "!canvas [name]", "purpose": "Open specified canvas"},
      "100.03": {"cmd": "!audit_memory", "purpose": "List memory keys"},
      "100.04": {"cmd": "!reload_boot", "purpose": "Re-run boot sequence"},
      "100.05": {"cmd": "!recursive_boot_check", "purpose": "Check missing dependencies"}
    }
  },
  "200": {
    "category": "Translation & Tone",
    "commands": {
      "200.01": {"cmd": "!translate_hebrew", "purpose": "EN->HE Translate with tone fidelity"},
      "200.02": {"cmd": "!translate_en", "purpose": "HE->EN Translate with brand tone"}
    }
  },
  "300": {
    "category": "Visual & Marketing",
    "commands": {
      "300.01": {"cmd": "!visualize [concept]", "purpose": "Generate branded visual"},
      "300.02": {"cmd": "!optimize_ad", "purpose": "Optimize ad copy via persona"},
      "300.03": {"cmd": "!calc_savings", "purpose": "Savings calculator"}
    }
  },
  "400": {
    "category": "Strategic & Analysis",
    "commands": {
      "400.01": {"cmd": "!promptflow", "purpose": "Trace prompt pipeline"},
      "400.02": {"cmd": "!policy_sync", "purpose": "Validate policy pages"},
      "400.03": {"cmd": "!wargames", "purpose": "Geopolitics layer"},
      "400.04": {"cmd": "!retrain_prompt [version]", "purpose": "Reset prompt rules"}
    }
  },
  "500": {
    "category": "Persona Control",
    "commands": {
      "500.01": {"cmd": "!persona [name]", "purpose": "Switch operational persona"}
    }
  },
  "600": {
    "category": "Debug & Developer",
    "commands": {
      "600.01": {"cmd": "!debug_mode", "purpose": "Expose internal logic trace"}
    }
  }
}
```