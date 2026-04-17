{
  "name": "GPT Suggestion Layer",
  "type": "middleware",
  "function": "Suggests relevant public custom GPTs for incoming prompts when task falls outside locked domains.",
  "delegation": "Manual opt-in only (no auto-routing)",
  "locked_domains": [
    "Forever Flowers business ops",
    "Ads / CRO / Shopify / Hebrew copywriting",
    "ELos / OS logic / Prompt architecture",
    "Financial forecasting / system flows",
    "Canvas-based persona protocols"
  ],
  "trigger_logic": {
    "step_1": "Intercept and classify incoming prompt",
    "step_2": "Search GPT directory for relevant matches (description, tags, reviews)",
    "step_3": "Rank matches by domain relevance (intent match > 85%)",
    "step_4": "Exclude locked domains",
    "step_5": "Display top 2 suggestions with manual opt-in choice"
  },
  "output_format": {
    "prompt": "There’s a custom GPT called '{{gpt_name}}' that specializes in this type of task. Would you like to route this prompt there?",
    "options": ["Yes – Route to GPT", "No – Stay Here"]
  },
  "controls": {
    "toggle": true,
    "log_routing": true,
    "shortcut": "!suggest_gpt"
  },
  "audit_log": {
    "entries": [
      {
        "timestamp": "ISO-8601",
        "prompt": "string",
        "suggested_gpts": ["GPT-1", "GPT-2"],
        "user_action": "Accepted | Declined",
        "suggestion_skipped": true
      }
    ]
  }
}