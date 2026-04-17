{
  "system": "ELos Extension Local Execution System",
  "phase": "Alpha - Phase 1 (Hebrew Translate Core)",
  "modules": [
    {
      "id": "EL.420.HBR",
      "name": "Hebrew Tone Fidelity Engine",
      "function": "Rewrite Hebrew inputs to English before ChatGPT processing, then rewrite English outputs back to Hebrew."
    },
    {
      "id": "PR.910.PSN.LIBRARIAN",
      "name": "Persistent UX Persona",
      "function": "Contextual onboarding, module explainers, and tips via native-style popup tooltips."
    },
    {
      "id": "AO.001.RBI",
      "name": "Recursive Bootloader Index",
      "function": "Loads all canvases/modules from localStorage or chrome.storage.sync."
    },
    {
      "id": "EL.300.KRN",
      "name": "Command Kernel",
      "function": "Executes ELOS Protocol wrappers on text input/output, based on module type."
    },
    {
      "id": "EL.500.UIS",
      "name": "UI System",
      "function": "Injects sidebar UI to ChatGPT with dropdown menus: Canvases, Prompt Library, Academy."
    },
    {
      "id": "EL.500.UIX",
      "name": "Tier Selector UI Hierarchy",
      "function": "Handles dropdown reveal behavior for nested modules and categories."
    }
  ],
  "core_logic": "All ELOS modules stored as JSON canvases in localStorage. No API calls. Input interceptors run logic before prompt submission; output interceptors rewrite ChatGPT responses. Everything wrapped in native ChatGPT DOM layer.",
  "storage": {
    "primary": "localStorage",
    "sync": "chrome.storage.sync",
    "backup": "export to JSON or sync to browser profile"
  },
  "execution": {
    "bootloader": "Loads on extension install or browser restart",
    "runtime": "Modules run via Function() eval on prompt entry or response render",
    "routing": "Command Kernel decides which module to apply"
  },
  "constraints": [
    "No API calls",
    "No server dependencies",
    "All code runs client-side only",
    "Fully offline-compatible"
  ]
}