{
  "system_id": "AO.940.PRM.ScorecardSystem",
  "title": "Prompt Fireproof Scoring System",
  "description": "A 10-vector rating system used to evaluate and fireproof prompts within the AO.910.PRM.LIB library.",
  "vectors": [
    {"id": "01", "name": "Clarity", "description": "Is the language unambiguous and instantly understandable?", "weight": 10},
    {"id": "02", "name": "Specificity", "description": "Does it define exactly what should be returned, including scope and format?", "weight": 10},
    {"id": "03", "name": "Constraint Control", "description": "Are input/output constraints clearly defined (length, tone, style)?", "weight": 10},
    {"id": "04", "name": "Resilience", "description": "Can the prompt resist model drift, vagueness, and hallucination?", "weight": 10},
    {"id": "05", "name": "Modularity", "description": "Can it be reused, chained, or slotted into automations without edits?", "weight": 10},
    {"id": "06", "name": "Strategic Value", "description": "Is the prompt solving a real-world, high-leverage task?", "weight": 10},
    {"id": "07", "name": "Execution Consistency", "description": "Does it produce consistent outputs across contexts and model runs?", "weight": 10},
    {"id": "08", "name": "Fireproof Syntax", "description": "Does the phrasing follow known best-practice design patterns?", "weight": 10},
    {"id": "09", "name": "Output Usefulness", "description": "Does the typical result match user intention and require no cleanup?", "weight": 10},
    {"id": "10", "name": "Tone Alignment", "description": "Does it adhere to intended tone or brand voice if specified?", "weight": 10}
  ],
  "scoring": {
    "max_total": 100,
    "thresholds": {
      "fireproof": "90-100",
      "usable": "75-89",
      "rewrite_required": "0-74"
    }
  },
  "activation": {
    "auto_audit": true,
    "manual_trigger": true,
    "bootloader_integration": true,
    "subsystem": "Prompt Library System",
    "category_tag": "\ud83d\udd25 Fireproof Audit"
  }
}