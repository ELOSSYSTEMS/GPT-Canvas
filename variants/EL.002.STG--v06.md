{
  "stack": "Prompt Protocol Stack",
  "title": "Prompt Protocol Stack – Full Index",
  "layers": [
    "EL.002.STG – Stargate Protocol (v3.1-total-fireproofed)",
    "AO.200.CNS – Consistency Auditor",
    "EL.003.DVR – DiVeRSe Prompt Protocol Integration",
    "EL.003.EXP – Experimental Protocol Kernel",
    "EL.420.BBL – ELOS Babel (Multilingual Tone & Rewrite Layer)"
  ],
  "routing": {
    "governed_by": "EL.005.BRN – ELOS Prompt Brain",
    "default_layer": "Stargate",
    "embedded": [
      {
        "inside": "Stargate",
        "module": "Prompt Surgeon"
      }
    ],
    "conditional": [
      {
        "trigger": "Prompt language ≠ English",
        "activate": "EL.420.BBL – ELOS Babel"
      }
    ]
  },
  "description": "The unified execution and validation system governing prompt processing across ELOS, Allon OS, and experimental extensions. Each layer is activated selectively based on task, language, format, or intent. ELOS Babel is activated only when a non-English language is detected and manages tone fidelity, semantic rewrites, and cultural alignment."
}