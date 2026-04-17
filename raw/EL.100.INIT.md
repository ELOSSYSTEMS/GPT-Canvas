{
  "module": "InstallConsent",
  "type": "formula-module",
  "scope": "public-extension",
  "description": "Initial install prompt for ELos OS extension. Triggers protocol injection and bootloader setup.",
  "trigger": "onFirstUse",
  "ui": {
    "title": "Welcome to ELos OS",
    "message": "Would you like to install the core intelligence modules to enhance your ChatGPT experience?",
    "options": [
      {
        "label": "Yes, install ELos OS",
        "action": "loadBootloader"
      },
      {
        "label": "No, use ChatGPT as usual",
        "action": "skipInstall"
      }
    ]
  },
  "actions": {
    "loadBootloader": [
      "setLocalStorage('elosInstallStatus', 'complete')",
      "setLocalStorage('installDate', now())",
      "installModules(['Bootloader', 'CanvasEngine', 'Stargate', 'PromptSurgeon', 'PersonaNet'])"
    ],
    "skipInstall": [
      "setLocalStorage('elosInstallStatus', 'skipped')"
    ]
  }
}