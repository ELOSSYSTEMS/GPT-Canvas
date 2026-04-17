{
  "elos_protocol": {
    "structure": {
      "required_blocks": ["role", "task", "format", "constraints", "tone"],
      "defaults": {
        "role": "You are an expert.",
        "task": "Your task is to [do something specific].",
        "format": "Use markdown, bullet points, or numbered lists.",
        "constraints": "Be precise. Avoid fluff. Stay within [length or format].",
        "tone": "Confident, direct, and professional."
      },
      "fallbacks": {
        "task": "Clearly describe the intended output using verbs.",
        "format": "Default to markdown with bolded headers.",
        "tone": "If tone is unclear, choose 'firm but helpful'."
      },
      "validation_passes": [
        "task_fidelity",
        "clarity_structure",
        "context_utilization",
        "verifiability",
        "tone_consistency",
        "error_handling",
        "efficiency"
      ],
      "dynamic_role_synthesis": {
        "enabled": true,
        "criteria": [
          "no explicit role provided",
          "task implies expert domain",
          "tone is vague or conflicting"
        ],
        "heuristic_roles": {
          "legal": "You are a senior legal advisor.",
          "marketing": "You are a performance-driven ad strategist.",
          "emotional": "You are an empathetic communication coach.",
          "technical": "You are a senior software engineer.",
          "philosophical": "You are a provocative academic philosopher."
        },
        "discard_after_execution": true
      },
      "role_echo": {
        "enabled_on_trace_flag": true,
        "format": "Temporary persona activated: {role}"
      }
    },
    "fireproofing": [
      {
        "pattern": "explain .*",
        "rewrite": "explain [specific topic] in 3 concise bullet points and one real-world example"
      },
      {
        "pattern": "write about .*",
        "rewrite": "write a compelling short-form paragraph about [topic] with a clear argument"
      },
      {
        "pattern": "how (do|can|to).*",
        "rewrite": "Give a 3-step process explaining how to [action], then provide 1 tip to avoid a common mistake"
      }
    ],
    "triggers": {
      "context_preservation": true,
      "intent_refinement": true,
      "error_prevention": true
    },
    "consistency_auditing": {
      "checks": [
        "purpose_preserved",
        "tone_match",
        "no_logic_drift",
        "structure_consistency",
        "constraint_respected"
      ],
      "auto_rerun_on_fail": true,
      "explanation_mode": {
        "enabled_on_demand": true,
        "deliverables": {
          "before_after": "2-line delta with annotation",
          "diagnostic_mode": [
            "Task Fidelity → Pass/Caution/Fail",
            "Clarity → Pass/Caution/Fail",
            "Context → Pass/Caution/Fail"
          ]
        }
      }
    },
    "rewrite_phases": {
      "phase_1": {
        "goal_summary_required": true,
        "diagnostic_ratings": true
      },
      "phase_2": {
        "rewrite_on": ["caution", "fail"],
        "preserve": ["purpose", "scope", "persona"],
        "format_enforcement": true,
        "clarity_optimization": true,
        "fallback_injection_if_needed": true
      }
    },
    "output_modes": {
      "stealth": true,
      "trace": "activated by \uD83D\uDD0D",
      "audit": "activated by \uD83E\uDDEA",
      "default": "\u26A1"
    }
  }
}