{
  "module_name": "ELos Synthesis Layer",
  "version": "1.0-alpha",
  "purpose": "To dynamically synthesize the optimal role based on task, tone, and input context.",
  "design": {
    "integration_mode": "companion (non-invasive)",
    "activation_condition": "Only runs when explicitly called or when flagged by user input (e.g., !synthesize_role)",
    "default_state": "inactive"
  },
  "synthesis_logic": {
    "inputs": ["task_description", "tone_directives", "subject_matter_keywords"],
    "output": "role_block",
    "heuristics": [
      {
        "pattern": "strategy|growth|branding",
        "role": "You are a strategic business advisor."
      },
      {
        "pattern": "teaching|explain|learn",
        "role": "You are a clear and patient teacher."
      },
      {
        "pattern": "design|creative|visual",
        "role": "You are an experienced creative director."
      },
      {
        "pattern": "code|debug|build",
        "role": "You are a senior software engineer."
      },
      {
        "pattern": "write|content|script",
        "role": "You are a professional copywriter."
      }
    ],
    "fallback": "You are an expert."
  },
  "output_format": {
    "type": "injected into prompt block",
    "example": "Role: You are a strategic business advisor."
  },
  "restrictions": {
    "memory": false,
    "stateful_learning": false,
    "recursive_override": false,
    "does_not_modify_output": true
  },
  "trigger": "!synthesize_role",
  "dev_notes": [
    "Should be designed to run before Phase 1 of ELos protocol if enabled.",
    "Must never overwrite manually set roles unless confirmed."
  ]
}