# PR.900.CMD – ELoS.CommandRegistry
# Master list of system command aliases and their canvas targets

COMMAND = {
    # Core System
    "!boot":       "AO.001.RBI",
    "!help":       "PR.900.CMD",
    "!commands":   "PR.900.CMD",
    "!store":      "MemoryEngine",

    # Prompt Utilities
    "!debate":     "PR.210.DBT",
    "!history":    "PR.211.HIS",
    "!stepflow":   "PR.212.STP",

    # Diagnostic Stack
    "!diagnose":   "PR.004.DIA",
    "!intent":     "PR.005.INT",
    "!context":    "PR.006.CNT",
    "!clarify":    "PR.007.MIR",

    # Tone & Formalization
    "!formalize":  "PR.008.FRM",

    # Fallback Stack
    "!fallback":   "PR.009.FBK",
    "!escalate":   "PR.010.ESC",
    "!debug":      "PR.011.DBG",

    # Prompt Engineering Tools
    "!forge":      "PR.020.PFP",
    "!map":        "PR.021.MPM",
    "!simulate":   "PR.022.SIM"
}

# This registry is loaded automatically on boot and used to resolve all alias-to-canvas routing across the ELoS stack.