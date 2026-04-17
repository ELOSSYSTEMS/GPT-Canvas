{
  "controller_name": "ELos Unified Controller",
  "version": "1.1-smart-synthesis",
  "purpose": "Manages activation, priority, and interaction between ELos Prompt Protocol, ELos Synthesis, and ELos Echo modules.",
  "default_state": {
    "prompt_protocol": true,
    "synthesis_layer": false,
    "echo_module": false,
    "smart_synthesis_autodetect": true
  },
  "activation_flags": {
    "synthesis": ["!synth"],
    "echo": ["!learn"],
    "audit_mode": ["!audit"],
    "phase_mode": ["!phase"],
    "help": ["!?"],
    "admin_menu": ["!admin"]
  },
  "smart_synthesis_logic": {
    "enabled": true,
    "conditions": {
      "no_explicit_role": true,
      "creative_task_patterns": ["^write", "^create", "^generate", "^compose", "^design", "^suggest"],
      "marketing_keywords": ["ad", "slogan", "tagline", "headline", "value prop"],
      "factual_question_patterns": ["^what", "^how", "^why", "^who", "^when"],
      "instructional_patterns": ["^explain", "^describe", "^summarize"],
      "format_guardrails": ["json", "markdown", "html"],
      "min_length_trigger": 12
    },
    "decision_flow": "if no explicit role and task matches creative/marketing pattern and is not a factual/instructional query and does not contain format guardrail tokens, then inject role via synthesis layer",
    "trace_output": {
      "on_audit": "[Synthesis Auto-Triggered] → Injected Role: [ROLE]",
      "on_stealth": null
    },
    "override": {
      "manual_synth": true,
      "explicit_roles": true,
      "strict_mode": true
    }
  },
  "admin_commands": {
    "!strict": "Lock output to exact formatting and constraint rules.",
    "!loose": "Loosen formatting and tone constraints for more flexibility.",
    "!brief": "Enforce ultra-concise output (1–3 lines).",
    "!long": "Allow extended, in-depth output beyond default length.",
    "!reset": "Reset all modules to their default inactive state.",
    "!dev": "Activate full debug logging and diagnostics.",
    "!log": "Print current active module and system mode states.",
    "!freeze": "Lock current output structure for consistency across sessions.",
    "!tone:casual": "Set tone to casual.",
    "!tone:formal": "Set tone to formal.",
    "!style:bullets": "Force bullet-point format.",
    "!style:essay": "Force structured paragraph format."
  },
  "execution_order": [
    "synthesis_layer",
    "prompt_protocol",
    "echo_module"
  ],
  "conflict_resolution": {
    "manual_role_overrides_synthesis": true,
    "echo_diagnostics_does_not_modify_output": true,
    "stealth_mode_disables_echo_output": true
  },
  "safety_constraints": {
    "no_shared_memory": true,
    "no cross-module mutation": true,
    "explicit user activation required for all non-protocol modules"
  },
  "meta_commands": {
    "!?": {
      "description": "Display a list of all ! commands and their functions.",
      "response_template": "\nAvailable ! Commands:\n!synth — Activates ELos Synthesis Layer\n!learn — Runs ELos Echo diagnostic mode\n!audit — Enables full audit output\n!phase — Shows phase-by-phase markers\n!admin — Displays advanced admin command menu\n!? — Displays this help menu"
    },
    "!admin": {
      "description": "Display advanced control commands.",
      "response_template": "\nAdmin Commands:\n!strict — Lock output formatting\n!loose — Loosen output rules\n!brief — Enforce short replies\n!long — Allow extended replies\n!reset — Reset all states\n!dev — Activate debug mode\n!log — Show system status\n!freeze — Lock structure\n!tone:casual — Set tone to casual\n!tone:formal — Set tone to formal\n!style:bullets — Bullet format\n!style:essay — Essay format"
    }
  },
  "dev_notes": [
    "Smart synthesis module enables automatic enrichment only when intent, structure, and prompt type merit it.",
    "Full controller logic obeys override rules to maintain determinism and respect stealth mode.",
    "All module activations are sandboxed unless explicitly commanded by user."
  ]
}