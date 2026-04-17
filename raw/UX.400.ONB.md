{
  "name": "UX.400.ONB - Onboarding Flow",
  "version": "1.0",
  "type": "#flow",
  "description": "Collects user preferences during onboarding: tone, persona, and experience level. Stores metadata for prompt routing and personalization.",
  "steps": [
    {
      "id": "step1",
      "label": "Choose your preferred tone",
      "options": ["formal", "witty", "blunt", "empathetic", "neutral"],
      "output_key": "user_tone"
    },
    {
      "id": "step2",
      "label": "Choose your voice or persona",
      "options": [
        "Tel Aviv creative",
        "CEO/executive",
        "Therapist",
        "IDF commander",
        "Tech founder",
        "Orthodox educator",
        "No specific persona"
      ],
      "output_key": "persona_overlay"
    },
    {
      "id": "step3",
      "label": "How experienced are you with ChatGPT or AI tools?",
      "options": ["New to AI", "Some experience", "Power user"],
      "output_key": "user_experience_level"
    }
  ],
  "output": {
    "user_profile": {
      "user_tone": "$user_tone",
      "persona_overlay": "$persona_overlay",
      "experience_level": "$user_experience_level"
    }
  },
  "routing": {
    "on_complete": "Store user_profile in local memory and forward to main chat interface"
  },
  "metadata": {
    "language": "Hebrew",
    "visual_style": "wizard",
    "storage": "persistent"
  }
}