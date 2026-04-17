### USER AFFINITY MODEL — v1.0
# Canvas: EL.900.AUD.UserAffinityModel
# Tracks user prompt interactions to inform relevance scoring and role refinement

class UserAffinityModel:
    def __init__(self):
        self.user_profiles = {}

    def log_interaction(self, user_id, prompt_id, rating, timestamp):
        self.user_profiles.setdefault(user_id, []).append({
            "prompt_id": prompt_id,
            "rating": rating,
            "timestamp": timestamp
        })

    def average_score(self, user_id):
        scores = [e["rating"] for e in self.user_profiles.get(user_id, []) if e["rating"] is not None]
        return sum(scores)/len(scores) if scores else 0

    def top_prompts(self, user_id, n=5):
        data = sorted(self.user_profiles.get(user_id, []), key=lambda x: x["rating"], reverse=True)
        return [d["prompt_id"] for d in data[:n]]

    def recent_prompts(self, user_id, limit=5):
        return self.user_profiles.get(user_id, [])[-limit:]

AFFINITY_TRACKER = UserAffinityModel()