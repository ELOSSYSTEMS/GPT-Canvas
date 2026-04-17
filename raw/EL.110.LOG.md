{
  "module": "InstallTracker",
  "type": "formula-module",
  "scope": "public-extension",
  "description": "Logs installation status, date, and modules installed for ELos OS in localStorage.",
  "methods": {
    "logInstall": {
      "onInstallSuccess": [
        "localStorage.setItem('elosInstallStatus', 'complete')",
        "localStorage.setItem('installDate', new Date().toISOString())",
        "localStorage.setItem('modulesInstalled', JSON.stringify(['Bootloader', 'CanvasEngine', 'Stargate', 'PromptSurgeon', 'PersonaNet']))"
      ]
    },
    "checkInstallStatus": {
      "returns": "localStorage.getItem('elosInstallStatus') || 'not_installed'"
    },
    "resetInstall": {
      "actions": [
        "localStorage.removeItem('elosInstallStatus')",
        "localStorage.removeItem('installDate')",
        "localStorage.removeItem('modulesInstalled')"
      ]
    }
  }
}