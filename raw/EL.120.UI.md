{
  "module": "ModuleViewerPanel",
  "type": "formula-module",
  "scope": "public-extension",
  "description": "UI panel for users to view and toggle ELos OS modules within the extension.",
  "structure": {
    "panelTitle": "Installed Enhancements",
    "moduleList": [
      {
        "name": "Bootloader",
        "status": "active",
        "toggle": true
      },
      {
        "name": "Stargate Protocol",
        "status": "active",
        "toggle": true
      },
      {
        "name": "Prompt Surgeon",
        "status": "active",
        "toggle": true
      },
      {
        "name": "PersonaNet",
        "status": "active",
        "toggle": true
      },
      {
        "name": "Language Pack",
        "value": "ExecOps Console",
        "toggle": false
      }
    ],
    "actions": [
      {
        "label": "Reset ELos",
        "action": "resetInstall"
      }
    ]
  },
  "methods": {
    "resetInstall": "calls InstallTracker.resetInstall() and reloads page"
  }
}