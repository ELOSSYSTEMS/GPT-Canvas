### ELOS PERSONALIZED PROMPT AGENT MODULE — v1.0
# Core logic for generating and updating user-personalized prompt bundles

class PersonalizedPromptAgent:
    def __init__(self, user_profile, prompt_library):
        self.user_profile = user_profile
        self.prompt_library = prompt_library
        self.trail_log = {}

    def classify_user(self):
        if "founder" in self.user_profile["roles"]:
            return "entrepreneur"
        elif "educator" in self.user_profile["roles"]:
            return "teacher"
        elif "marketer" in self.user_profile["roles"]:
            return "growth-ops"
        return "general"

    def filter_prompts(self):
        domain = self.classify_user()
        return [p for p in self.prompt_library if domain in p["tags"] or "universal" in p["tags"]]

    def adapt_tone(self, prompt):
        tone = self.user_profile.get("tone", "neutral")
        if tone == "sharp":
            prompt["text"] = prompt["text"].replace("Let’s explore", "Proceed with directive:")
        return prompt

    def generate_bundle(self):
        prompts = self.filter_prompts()
        adapted = [self.adapt_tone(p) for p in prompts]
        return {"bundle_id": f"user_bundle_{self.user_profile['user_id']}", "prompts": adapted}

    def log_trail(self, interaction_id, prompt_used):
        self.trail_log.setdefault(self.user_profile['user_id'], []).append({
            "interaction_id": interaction_id,
            "prompt": prompt_used
        })


# Tutorial UI Bubble
TUTORIAL_BUBBLE = {
    "title": "💡 Personalized Prompts Activated",
    "text": "Your library evolves based on your profile. Rate prompts to optimize further.",
    "nudge": "Power users: Enable deeper memory & tone sync in Advanced Settings."
}


class SyncPromptVault:
    def __init__(self):
        self.vault = {}

    def update_prompt(self, user_id, prompt):
        self.vault.setdefault(user_id, []).append(prompt)

    def get_latest(self, user_id):
        return self.vault.get(user_id, [])[-1] if user_id in self.vault else None


UI_FLAGS = {
    "new_personal_bundle_ready": True,
    "show_bubble_on_login": True,
    "advanced_mode_toggle": True
}

# Instantiate Primary Agent
prompt_agent_instance = PersonalizedPromptAgent(
    user_profile={"user_id": "alpha001", "roles": ["founder"], "tone": "sharp"},
    prompt_library=[]
)
sync_vault = SyncPromptVault()