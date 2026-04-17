{
  "id": "EL.003.AUD.FMT",
  "title": "Stargate Output Audit Format – Compact Mode",
  "origin": "Stargate Protocol Output Layer",
  "type": "System Behavior",
  "status": "Active",
  "bootloader": true,
  "settings": {
    "audit_display_mode": "compact",
    "display_on_all_outputs": true,
    "format": [
      "🔍 Stargate Audit",
      "Input: {user_input}",
      "Rewrite: {optimized_prompt}"
    ]
  },
  "notes": "Applies globally to all user-initiated prompts unless overridden by flag or exception layer. Logs audit inline above every response."
}