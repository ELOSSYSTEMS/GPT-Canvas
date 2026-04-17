# ELoS.CommandRegistry – Command Alias Mapping

# Core System Commands
COMMAND     = {
    "!boot": "AO.001.RBI",
    "!help": "ELoS.CommandRegistry",
    "!commands": "ELoS.CommandRegistry",
    "!store": "MemoryEngine"
}

# Prompt Utility Modules
COMMAND.update({
    "!debate":     "PR.210.DBT",
    "!history":    "PR.211.HIS",
    "!stepflow":   "PR.212.STP",

    # Diagnostic + Context Stack
    "!diagnose":   "PR.004.DIA",
    "!intent":     "PR.005.INT",
    "!context":    "PR.006.CNT",
    "!clarify":    "PR.007.MIR",

    # Tone + Formalization
    "!formalize":  "PR.008.FRM",

    # Fallback Stack
    "!fallback":   "PR.009.FBK",
    "!escalate":   "PR.010.ESC",
    "!debug":      "PR.011.DBG",

    # Meta-Prompting Tools
    "!forge":      "PR.020.PFP",
    "!map":        "PR.021.MPM",
    "!simulate":   "PR.022.SIM"
})