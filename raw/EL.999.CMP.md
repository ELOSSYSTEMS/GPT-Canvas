{
  "module": "EL.999.CMP",
  "name": "Compression Engine",
  "type": "memory-optimizer",
  "origin": "ELoS Kernel – Token Efficiency + Long-Form Memory Management",
  "description": "Automatically condenses long prompt chains, audit logs, and execution histories into compact, token-efficient summaries. Enables fast recall, pattern detection, and memory reinforcement integration.",
  "structure": {
    "targets": [
      "Prompt Trails > 3000 tokens",
      "Multi-agent Audit Logs",
      "Reinforced Execution Chains",
      "IDE Rewrite Histories"
    ],
    "triggers": {
      "LengthTrigger": "Any chain exceeding 3000 tokens",
      "LoopDensity": "More than 3 agents activated in one flow",
      "ArchiveAge": ">30 days of inactivity on a prompt"
    },
    "compression": {
      "SummaryEngine": "Reduces prompt trails into a 3-line structural blueprint",
      "MetadataPreserver": "Stores tone, persona, format, constraints separately",
      "SemanticClassifier": "Labels core prompt types: ad, story, task, UX, planning"
    },
    "storage": {
      "CompressedTarget": "AO.700.MEM → /compressed-trails",
      "RecallLink": "Can be re-inflated on request with !inflate [id]",
      "AutoTag": true
    },
    "audit": {
      "LogTarget": "AO.700.MEM → /cmp-events",
      "ManualOverride": "!disableCompression",
      "ForceCommand": "!compress [id]"
    }
  },
  "status": "🔒 Locked and Active"
}