{
  "canvas": "EL.001.ENV.Model",
  "description": "Defines the trinary execution environment model for ELos systems: local-private, public extension, and native ChatGPT interface.",
  "status": "active",
  "bootloader_registered": true,
  "environments_supported": ["env.chatgpt.native"],
  "environments": {
    "env.local.private": {
      "label": "Local Extension – Private",
      "description": "Stealth-mode Chrome extension running locally on user's machine.",
      "capabilities": [
        "Full DOM injection",
        "Protocol autoload (Stargate, Prompt Surgeon, etc.)",
        "UI modifications (ghost preview, dynamic buttons)",
        "LocalStorage state",
        "Zero external API dependency"
      ],
      "restrictions": []
    },
    "env.public.extension": {
      "label": "Public Extension – External Users",
      "description": "Distributed Chrome extension for external users with onboarding and consent.",
      "capabilities": [
        "Sandboxed DOM hooks",
        "Modular protocol injection",
        "User onboarding flows",
        "Feature gating via flags",
        "Terms-of-use enforcement"
      ],
      "restrictions": [
        "No stealth overrides",
        "Must support opt-in and data privacy"  
      ]
    },
    "env.chatgpt.native": {
      "label": "ChatGPT Interface – No Extension",
      "description": "Direct use of chat.openai.com or chatgpt.com without any local extension.",
      "capabilities": [
        "Manual protocol execution",
        "Prompt fireproofing within conversation",
        "Conversation memory logic",
        "User-visible outputs only"
      ],
      "restrictions": [
        "No DOM access",
        "No UI injection",
        "No stealth enhancement"
      ]
    }
  },
  "default_environment": "env.chatgpt.native",
  "routing_logic": "All future modules must declare their compatibility with one or more environments and fallback gracefully."
}