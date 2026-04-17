// Canvas: EL.410.TNF.v1.3 – Native Tone Fidelity Layer (Full Hebrew Enforcement)
{
  "module": "EL.410.TNF.v1.3",
  "status": "locked",
  "enforcement": {
    "scope": "full-body",
    "languages": ["hebrew"],
    "tone_source_priority": [
      "user_defined_tone",
      "input_tone_mirroring"
    ],
    "applies_to": [
      "prompt_output",
      "report_output",
      "structured_briefing",
      "creative_output"
    ],
    "failover": {
      "no_tone_defined": "mirror_input_tone",
      "no_input_tone": "default_neutral"
    },
    "labeling": {
      "summary_labels": false,
      "tone_tag_exposure": false
    }
  },
  "execution_log": {
    "test_case_id": "TNF-RunCase-20250607-ISR-MacroInstability",
    "input": "מה אתה חושב על ההשפעה של אי יציבות בישראל על הכלכלה",
    "translated_prompt": "What do you think about the economic impact of instability in Israel?",
    "stargate_core_output": "English economic analysis on political instability",
    "output_mode": "structured_report",
    "rewrite_engine": "TNF.v1.3",
    "tone_applied": "user_tone (Data+) → full body",
    "final_output_hebrew": "[see final structured Hebrew response from last message]"
  },
  "bootloader_injection": true,
  "extension_sync": true,
  "public_module_variant": {
    "stealth_mode": true,
    "user_tone_detection": "chatgpt_native_memory + conversational tone scanning",
    "fallback_behavior": "mirror_user_input"
  }
}