{
  "module": "Bootloader",
  "type": "core",
  "scope": "dual (private + public-extension)",
  "description": "Initial activation point for ELos OS systems. Registers modules, initializes canvases, and triggers protocol sequences.",
  "includes": [
    "CanvasEngine",
    "StargateProtocol",
    "PromptSurgeon",
    "PersonaNet",
    "LanguagePacks",
    {
      "module": "SessionValidator",
      "active": false,
      "note": "Extension-only enforcement. Not active in personal OS runtime."
    }
  ]
}