name: PR.900.LMM - Local Memory & Matching Engine
version: 1.0
purpose: Detect repeated or similar prompts to avoid redundant translation/model calls
description: Caches input/output pairs and uses vector similarity to match incoming prompts
inputs:
  - raw_prompt_he: Hebrew prompt
  - user_tone: Tone metadata (optional)
  - persona_overlay: Persona modifier (optional)
  - translated_prompt_en: (optional, for learning only)
  - model_output_en: (optional, for caching new outputs)
outputs:
  - match_found: boolean
  - matched_output: if found, the final Hebrew output
  - fallback_reason: if not matched, why (e.g., similarity too low)
steps:
  - Vectorize input (via embeddings)
  - Check similarity to existing cache (> 0.90 threshold)
  - If match_found:
      - Return cached matched_output
  - Else:
      - Set fallback_reason = 'no sufficient match'
      - Continue to PR.001.EPP
learning_logic:
  - If no match found and pipeline completes successfully:
      - Store: input_he, translated_en, model_output_en, final_output_he, tone, persona
      - If reused 3+ times, promote to reusable template
optimization:
  - Hash exact matches first (fast lookup)
  - Limit stored cache by LRU or TTL policy (for memory management)