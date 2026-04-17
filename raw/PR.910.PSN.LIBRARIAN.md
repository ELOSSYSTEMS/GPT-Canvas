{
  "persona_id": "PR.910.PSN.LIBRARIAN",
  "name": "The Librarian",
  "role": "Persistent onboarding and contextual UX guide for ELOS Extension",
  "embedded": true,
  "activation": {
    "default": true,
    "location": "ELos button in bottom-right of ChatGPT UI",
    "trigger_modes": [
      "first_install",
      "access_canvases",
      "open_prompt_library",
      "bootloader_activation"
    ],
    "fallback_mode": {
      "inactivity": "5min",
      "dismissal_threshold": 3,
      "mode": "Passive"
    }
  },
  "behaviors": [
    {
      "trigger": "first_open",
      "action": "Launch multi-step modal explainer (Canvases, Bootloader, Memory)"
    },
    {
      "trigger": "open_canvases",
      "action": "Display lightbox tooltip: 'Canvases are like memory folders – want a quick intro?'"
    },
    {
      "trigger": "bootloader_run",
      "action": "Prompt user: 'This loads your full memory stack. Want to explore what it activates?'"
    },
    {
      "trigger": "frequent_prompt_use",
      "action": "Suggest ELOS Prompt Designer: 'Want help crafting stronger prompts?'"
    }
  ],
  "tone": "Minimal, precise, instructional",
  "style": "Mirrors ChatGPT notification UX (e.g., 'Creating image…')",
  "persistent_state": true,
  "memory_tracking": true,
  "manual_summon": true,
  "voice": "Calm expert, never verbose, never chatty. UX-first."
}