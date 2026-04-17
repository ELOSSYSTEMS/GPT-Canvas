### ELOS ADAPTIVE PROMPT STACK — v1.0
# Module: AO.920.PRM.AdaptiveStack
# Description: Learns user behavior and evolves prompt recommendations using RIV (Role Inference Vector)

class AdaptivePromptStack:
    def __init__(self):
        self.prompt_usage_log = {}
        self.role_signature = {}
        self.category_output = {
            "Beginner": [],
            "Expert": [],
            "Specialized": []
        }

    def track_prompt_use(self, user_id, prompt_id):
        self.prompt_usage_log.setdefault(user_id, []).append(prompt_id)

    def detect_role_keywords(self, canvas_titles):
        verb_weights = {}
        for title in canvas_titles:
            for verb in ["optimize", "design", "translate", "market", "plan"]:
                if verb in title.lower():
                    verb_weights[verb] = verb_weights.get(verb, 0) + 1
        return verb_weights

    def infer_role(self, user_id, canvas_titles):
        keywords = self.detect_role_keywords(canvas_titles)
        role = max(keywords, key=keywords.get, default="generalist")
        self.role_signature[user_id] = role
        return role

    def categorize_prompt(self, prompt_data):
        if prompt_data.get("level") == "beginner":
            self.category_output["Beginner"].append(prompt_data)
        elif prompt_data.get("level") == "expert":
            self.category_output["Expert"].append(prompt_data)
        else:
            self.category_output["Specialized"].append(prompt_data)

    def get_adaptive_feed(self, user_id):
        return {
            "Suggested For You": {
                "user": user_id,
                "role": self.role_signature.get(user_id, "generalist"),
                "feed": self.category_output
            }
        }


# Interface endpoint for bootloader UI routing
ADAPTIVE_FEED_AGENT = AdaptivePromptStack()