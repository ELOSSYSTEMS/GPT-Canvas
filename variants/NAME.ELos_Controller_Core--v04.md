{
  "controller_name": "ELos Unified Controller",
  "version": "1.0-alpha",
  "purpose": "Manages activation, priority, and interaction between ELos Prompt Protocol, ELos Synthesis, and ELos Echo modules.",
  "default_state": {
    "prompt_protocol": true,
    "synthesis_layer": false,
    "echo_module": false
  },
  "activation_flags": {
    "synthesis": ["!synthesize_role"],
    "echo": ["!learn"],
    "audit_mode": ["!audit"],
    "phase_mode": ["!phase"]
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
  "dev_notes": [
    "This controller ensures that optional modules remain dormant unless flagged.",
    "Maintains the purity of ELos v2 Prompt Protocol as the central core logic.",
    "Future modules (e.g. Persona Dock, TaskPulse) can register here."
  ]
}