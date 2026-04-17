{
  "canvas": "EL.410.PRC",
  "description": "ELos Protocol Lite & Pro Design Specification – defines two prompt optimization pathways based on user context.",
  "status": "active",
  "bootloader_registered": true,
  "environments_supported": ["env.chatgpt.native", "env.local.private", "env.public.extension"],
  "variants": {
    "Lite": {
      "compression_level": "medium",
      "fireproofing_layers": 2,
      "post_audit": false
    },
    "Pro": {
      "compression_level": "none",
      "fireproofing_layers": 4,
      "post_audit": true
    }
  },
  "routing_logic": "Selects protocol variant based on user context, model tier, or explicit flag."
}