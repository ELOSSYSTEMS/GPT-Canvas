{
  "canvas": "EL.005.MOD.HUMANSEO",
  "description": "Ultra-Human SEO Enhancer – tone enhancer and rhythm optimizer for longform and shortform outputs.",
  "status": "active",
  "bootloader_registered": true,
  "environments_supported": ["env.chatgpt.native", "env.local.private"],
  "variants": {
    "LongForm": {
      "trigger": "output > 300 words",
      "actions": ["natural rhythm adjustment", "semantic amplification", "emotional cadence"]
    },
    "ShortForm": {
      "trigger": "output <= 300 words",
      "actions": ["clarity punch", "scan-friendliness", "SEO-keyframe alignment"]
    }
  },
  "integration_targets": ["Prompt Library", "Stargate Protocol", "Prompt Post-Processor"]
}