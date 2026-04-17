{
  "canvas": "EL.320.MODE.Selector",
  "description": "Defines mode fork logic for ELos system operation: data+text and data+voice",
  "status": "active",
  "bootloader_registered": true,
  "environments_supported": ["env.chatgpt.native", "env.local.private", "env.public.extension"],
  "modes": {
    "data+text": {
      "output_type": "text",
      "response_format": "markdown-rich",
      "boot_stack": "full",
      "rendering": ["tables", "code blocks", "recursion", "visuals enabled"],
      "post_processing": [
        "ELos Prompt Protocol v3.1",
        "Stargate Protocol",
        "Prompt Surgeon",
        "Consistency Auditor",
        "HumanSEO Module",
        "Tone Fidelity Engine",
        "VisualOS"
      ]
    },
    "data+voice": {
      "output_type": "text-for-speech",
      "response_format": "spoken-style text",
      "boot_stack": "minimal latency",
      "rendering": ["no tables", "no code blocks", "chunked phrasing", "compressed output"],
      "post_processing": [
        "ELos Prompt Protocol v3.1",
        "Stargate Protocol (compressed mode)",
        "Tone Fidelity Engine (adaptive)",
        "Redundancy Filter",
        "Auditory Clarity Compressor"
      ]
    }
  },
  "mode_selector_command": "!mode [data+text | data+voice]",
  "default_mode": "data+text",
  "tts_integration": false,
  "auto_switch_rules": {
    "trigger": "Advanced Voice Mode activated",
    "action": "Set MODE_CURRENT = data+voice",
    "fallback": "Revert to data+text upon typed input unless manually overridden"
  }
}