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
      },
      "intent_classifier": {
        "enabled": true,
        "map_to_types": ["question", "instruction", "story", "list", "comparison", "transformation"],
        "force_rewrite_on_conflict": true
      },
      "constraint_verifier": {
        "enforce_token_limits": true,
        "detect_language_flaws": true,
        "reject_on_violation": true,
        "auto_repair_attempts": 2
      },
      "feedback_loop": {
        "enabled": true,
        "store_failed_output_signals": true,
        "pattern_adaptation_window": 5,
        "bias_next_rewrite_toward": "clarity"
      },
      "self_debug": {
        "enabled": true,
        "pre_check": ["incomplete sentence", "missing subject", "conflicting goals"],
        "post_check": ["empty output", "null structure", "off-tone response"],
        "block_output_if_failed": true
      },
      "tone_matrix": {
        "marketing": "energetic, persuasive, modern",
        "legal": "precise, cautious, formal",
        "B2C Hebrew": "friendly, relatable, slang-tuned",
        "technical": "concise, exact, structured"
      },
      "refinement_limiter": {
        "enabled": true,
        "max_iterations": 3,
        "threshold_exit": {
          "clarity": "Pass",
          "tone_match": "Pass",
          "constraint_respected": "Pass"
        },
        "final_pass_mode": "return_output_with_reason: 'Refinement ceiling reached.'"
      },
      "hard_mode": {
        "enabled": true,
        "minimum_pass_rate": 6,
        "output_rejected_below": "threshold",
        "force_retry_limit": 3
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