{
  "module": "AO.912.RPL",
  "name": "Recursive Prompt Library Optimizer",
  "type": "logic-system",
  "origin": "ELoS Core – Prompt Intelligence Layer",
  "description": "Automatically scores, ranks, rewrites, and evolves prompt entries in AO.910.PRM.LIB based on real usage outcomes.",
  "structure": {
    "inputs": ["Prompt ID", "Execution Outcome", "Edit Distance", "User Override"],
    "metrics": {
      "SuccessScore": "+1 if fireproofed output is accepted and deployed",
      "FailureScore": "-1 if prompt is edited, fails audit, or user reroutes",
      "UsageCount": "Total times prompt is used",
      "RewriteCount": "How many times prompt has been rewritten by IDE"
    },
    "triggers": {
      "ThresholdFail": "If prompt score ≤ -2 or RewriteCount ≥ 3 → Flag for IDE Rewrite",
      "ThresholdPass": "If prompt score ≥ +3 and UsageCount ≥ 5 → Mark as Canonical"
    },
    "actions": {
      "Rewrite": "IDE is invoked to rebuild prompt with fresh constraints",
      "Archive": "Deprecated version stored in AO.910.PRM.LIB → /archive",
      "Replace": "New version replaces old in live registry with new metadata"
    },
    "logging": {
      "AuditTrail": true,
      "LogTarget": "AO.910.PRM.LIB → /logs/rpl-events",
      "UpdateInterval": "After every 5 prompt runs"
    }
  },
  "status": "🔒 Locked and Active"
}