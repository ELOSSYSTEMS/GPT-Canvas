{
  "_module": "Stargate Manual Model Selector",
  "_description": "Maps use-case intent tags to recommended GPT models and prompts the user to switch if mismatch is detected.",

  "model_mapping": {
    "simple_question": "gpt-4o",
    "email_drafting": "gpt-4o",
    "image_analysis": "gpt-4o",
    "video_transcription": "gpt-4o",
    "general_brainstorm": "gpt-4o",

    "code_debugging": "gpt-4.1",
    "prompt_engineering": "gpt-4.1",
    "complex_logic": "gpt-4.1",
    "multi-step_planning": "gpt-4.1",
    "financial_modeling": "gpt-4.1",

    "strategic_decisioning": "gpt-4.5",
    "philosophical_reasoning": "gpt-4.5",
    "long_form_research": "gpt-4.5",
    "recursive_prompting": "gpt-4.5"
  },

  "logic_flow": [
    "1. After intent classification, extract intent_tag.",
    "2. Lookup recommended_model using intent_tag in model_mapping.",
    "3. If current_model != recommended_model, trigger user prompt:",
    "   → '⚠️ Recommended model: [X]. You are currently on [Y]. Switch?'",
    "4. Await user confirmation or force override.",
    "5. If override: proceed with current_model. Else: instruct model switch manually."
  ],

  "note": "Due to UI restrictions, model switching must be manual. The assistant cannot change models automatically in the ChatGPT interface."
}
