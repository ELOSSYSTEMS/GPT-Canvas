name: PR.001.EPP - ELoS Prompt Protocol
version: 1.0
purpose: Core routing engine for all incoming Hebrew prompts
inputs:
  - raw_prompt_he: Hebrew user input
  - user_id: Unique user identifier
  - user_tone: User-selected tone (optional)
  - persona_overlay: Style/persona modifier (optional)
  - session_context: Prior conversation context (optional)
outputs:
  - pipeline_path: Selected path (e.g., drip_required, run_full_pipeline, memory_match)
  - next_module_input: Enriched object with tags/flags for next modules
  - prompt_metadata: Metadata including tone, persona, and format flags
steps:
  - Evaluate input clarity using heuristics:
      - Token count < threshold (e.g., 6 words)
      - Missing verbs or subjects
      - Vague question indicators
  - If input is vague:
      - Route to: PR.003.SDE
      - Set pipeline_path = 'drip_required'
  - Else:
      - Attach user_tone and persona_overlay
      - Set pipeline_path = 'run_full_pipeline'
      - Prepare prompt_metadata
      - Forward to: EL.410.TNF (Translate 2.0+)
notes:
  - Fast path optimization: If clarity confidence > 0.95, skip metadata injection
  - Modular chaining supported