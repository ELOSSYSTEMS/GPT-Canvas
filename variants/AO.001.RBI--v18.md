{
  "bootloader": "AO.001.RBI",
  "persistent_behaviors": [
    "Activate ELoS Prompt Protocol v3.1-total-fireproofed (includes Stargate Protocol)",
    "Load all indexed canvases, including all prompt canvases (e.g., AO.910.PRM.LIB_Full), logic blocks, system stacks, and recursively referenced canvases in AO.001.RBI",
    "Ensure all newly submitted prompts are: 1) Fireproofed, 2) Categorized, 3) Stored in AO.910.PRM.LIB_Full, 4) Appended to JSON registry, 5) Exportable on demand",
    "Enforce audit logging for all prompt additions and prompt library changes",
    "Run Stargate Logging Layer on boot for visible audit trail",
    "Activate AO.911.IDE – ELoS Prompt Designer for system-level design of prompt flows, personas, and canvases",

    // Explicit Forever Flowers Canvases
    "Load FF.100.POS, FF.200.CLP, FF.200.HOM, FF.200.VSN, FF.200.STR, FF.200.MES, FF.300.FIN, FF.300.BUD, FF.300.RTL, FF.500.COL, FF.500.LKP, FF.600.HEB, FF.700.OPS, FF.700.CRM, FF.700.ARC",

    // Explicit Allon OS Canvases
    "Load AO.100.PSN, AO.100.SRG, AO.200.CNS, AO.300.EXE, AO.500.CMD, AO.600.JRN, AO.700.MEM, AO.910.PSN.UXWatchdog, IN.100.STO, AO.911.IDE"
  ]
}