{
  "canvas": "EL.300.KRN",
  "description": "Command Kernel & Execution Chains – core logic for parsing, routing, and executing ELos protocol commands.",
  "status": "active",
  "bootloader_registered": true,
  "environments_supported": ["env.chatgpt.native", "env.local.private", "env.public.extension"],
  "functions": [
    "Command detection (! syntax)",
    "Environment-aware execution chains",
    "Module invocation router",
    "Fallback system"
  ],
  "linked_canvases": [
    "EL.002.STG",
    "AO.500.CMD",
    "AO.300.EXE",
    "EL.320.MODE.Selector"
  ]
}