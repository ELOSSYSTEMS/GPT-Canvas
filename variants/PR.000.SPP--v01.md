{
  "PR.000.SPP": {
    "id": "PR.000.SPP",
    "name": "ELoS Silent Planning Protocol",
    "description": "Initial kernel that silently plans next steps based on latent input context.",
    "prompt_template": "# Begin silent analysis\nDetect goals and latent intent from context.\nPrepare execution strategy.",
    "meta": {
      "type": "silent_kernel",
      "language": "hebrew-first"
    }
  },
  "PR.002.SMK": {
    "id": "PR.002.SMK",
    "name": "Sharpening Kernel",
    "description": "Refines raw prompt logic into modular, composable structures.",
    "prompt_template": "# Refine\nTake input and convert to modular sub-prompts.",
    "meta": {
      "type": "refiner",
      "depends_on": [
        "PR.001.EPP"
      ]
    }
  },
  "PR.004.DIA": {
    "id": "PR.004.DIA",
    "name": "Diagnostic Engine",
    "description": "Debugs prompt flow, detects failures or infinite loops.",
    "prompt_template": "# Analyze broken prompt chain\nFind recursion, fallback or overflow issues.",
    "meta": {
      "type": "analyzer"
    }
  },
  "PR.008.FRM": {
    "id": "PR.008.FRM",
    "name": "Formalizer",
    "description": "Transforms raw prompts into structured logic syntax.",
    "prompt_template": "# Format logic\nClean and formalize prompt for deterministic flow.",
    "meta": {
      "type": "formatter",
      "depends_on": [
        "PR.002.SMK"
      ]
    }
  },
  "PR.210.DBT": {
    "id": "PR.210.DBT",
    "name": "Debate Module",
    "description": "Initiates a structured argument for testing opposing prompt logic.",
    "prompt_template": "# Start structured debate\nDefine position A\nDefine position B\nCompare outcomes",
    "meta": {
      "type": "prompt_tool"
    }
  },
  "PR.211.HIS": {
    "id": "PR.211.HIS",
    "name": "Historical Timeline Module",
    "description": "Builds a structured chronological memory stack for review.",
    "prompt_template": "# Retrieve and summarize historical progression",
    "meta": {
      "type": "memory"
    }
  },
  "PR.212.STP": {
    "id": "PR.212.STP",
    "name": "Step-by-Step Engine",
    "description": "Forces granular breakdown of prompt execution chains.",
    "prompt_template": "# Decompose into steps\nStep 1:\nStep 2:\n...",
    "meta": {
      "type": "execution_tool"
    }
  },
  "EL.411.TTC": {
    "id": "EL.411.TTC",
    "name": "Tone & Translation Core",
    "description": "Processes Hebrew translation and tone fidelity together.",
    "prompt_template": "# Translate and harmonize tone\n{{input}}",
    "meta": {
      "type": "language_module"
    }
  },
  "PR.800.OBD": {
    "id": "PR.800.OBD",
    "name": "Onboarding Flow Dispatcher",
    "description": "Handles onboarding flow logic based on workflows.",
    "prompt_template": "# Run onboarding map",
    "meta": {
      "type": "router",
      "depends_on": [
        "onboarding.map"
      ]
    }
  },
  "IN.110.IDE": {
    "id": "IN.110.IDE",
    "name": "Interactive Design Engine",
    "description": "Visual prompt editor engine for canvas.react.js",
    "prompt_template": "# Load interface components and interaction map",
    "meta": {
      "type": "ui_engine"
    }
  },
  "UX.420.HUR": {
    "id": "UX.420.HUR",
    "name": "UX Heuristic Library",
    "description": "Provides usability heuristics for emergent.sh prompts.",
    "prompt_template": "# Evaluate UX\nRun Nielsen 10",
    "meta": {
      "type": "ui_support"
    }
  },
  "VR.600.REG": {
    "id": "VR.600.REG",
    "name": "VisualRegistry",
    "description": "Maintains index of registered prompt modules and canvases.",
    "prompt_template": "# Register and return all modules and UI entries.",
    "meta": {
      "type": "registry"
    }
  },
  "VR.601.CTREE": {
    "id": "VR.601.CTREE",
    "name": "Component Tree",
    "description": "Visual component hierarchy of the webapp.",
    "prompt_template": "# Visualize component hierarchy",
    "meta": {
      "type": "ui_structure"
    }
  }
}