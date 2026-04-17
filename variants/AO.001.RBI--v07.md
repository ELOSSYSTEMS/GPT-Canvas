// 🔁 Trigger Map for Allon OS Ecosystem
// Maps custom commands to canvases for simulated system boot

const TriggerMap = {
  "!boot allon-os": [
    "AO.001.RBI", // Recursive Bootloader Index
    "EL2.110.TriggerMap", // This map
    "EL.002.STG", // Stargate Protocol v3.1-total-fireproofed
    "EL.300.KRN", // Command Kernel & Execution Chains
    "FF.100.POS", // Forever Flowers Positioning OS
    "AO.100.PSN", // Personas Master Index
    "AO.500.CMD"  // Command QuickMenu UI
  ],
  "load elos": [
    "EL.002.STG",
    "EL.300.KRN"
  ],
  "load forever flowers": [
    "FF.100.POS",
    "FF.200.HOM",
    "FF.700.OPS"
  ],
  "load dabroo": [
    "DB.100.CORE",
    "DB.200.HBR",
    "DB.300.FLO"
  ],
  "load marketer": [
    "AO.100.PSN.Marketer"
  ],
  "load financier": [
    "AO.100.PSN.Financier"
  ]
};

// 🔐 Export for boot simulation
if (typeof window !== 'undefined') {
  window.AllonTriggerMap = TriggerMap;
}