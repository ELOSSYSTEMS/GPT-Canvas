{
  "module": "EL2.120.CommandGlossary",
  "description": "Master index of all !commands across ELOS OS and Extension. Includes function, trigger, scope, and routing info.",
  "commands": [
    {
      "command": "!boot",
      "function": "Boots full system stack (OS, Index, Personas)",
      "module": "Bootloader",
      "scope": "Both",
      "notes": "Core initializer. Required for system state."
    },
    {
      "command": "!promptdesign [description]",
      "function": "Routes input to AO.911.IDE for fireproofed prompt generation",
      "module": "AO.911.IDE",
      "scope": "Both",
      "notes": "Logs rationale, passes through Stargate."
    },
    {
      "command": "!plan [task]",
      "function": "Schedules task via Planner Persona",
      "module": "AO.200.PLN",
      "scope": "OS",
      "notes": "Auto-routes through IDE."
    },
    {
      "command": "!execute",
      "function": "Initiates final deployment via Strategic Executor",
      "module": "AO.300.EXE",
      "scope": "OS",
      "notes": "Finalizes decisions, compresses options."
    },
    {
      "command": "!disableAGT",
      "function": "Disables Autonomous Agent Trigger Stack",
      "module": "AO.920.AGT",
      "scope": "OS",
      "notes": "Failsafe override. Immediate effect."
    },
    {
      "command": "!logAGT",
      "function": "Displays last 5 autonomous agent dispatches with reasons",
      "module": "AO.920.AGT",
      "scope": "OS",
      "notes": "Audit and diagnostics only."
    },
    {
      "command": "!manualAgent [agent_name]",
      "function": "Directly calls a persona, bypassing AGT stack",
      "module": "AO.920.AGT",
      "scope": "OS",
      "notes": "Useful for force-routing."
    },
    {
      "command": "!view [canvas_id]",
      "function": "Opens any registered canvas by ID",
      "module": "EL.300.KRN",
      "scope": "Both",
      "notes": "Canvas must be indexed."
    },
    {
      "command": "!export prompts",
      "function": "Exports full prompt library in selected format",
      "module": "AO.910.PRM.LIB",
      "scope": "OS",
      "notes": "Options: plaintext, CSV, markdown."
    },
    {
      "command": "!override ide_extension",
      "function": "Disables IDE routing within extension runtime",
      "module": "EL.300.OS3",
      "scope": "Extension",
      "notes": "Developer override only."
    },
    {
      "command": "!disableUXWatchdog",
      "function": "Disables tone/fidelity audits from UXWatchdog",
      "module": "AO.910.PSN.UXWatchdog",
      "scope": "OS",
      "notes": "Not recommended. Removes friction monitoring."
    }
  ]
}