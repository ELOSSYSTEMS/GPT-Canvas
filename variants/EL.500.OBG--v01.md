### RECOMMENDATION AURA — v1.0
# Canvas: EL.500.OBG.RecommendationAura
# Surface-level aura system for prompt suggestion criteria and relevance context

class RecommendationAura:
    def __init__(self):
        self.criteria = {
            "recency": 0.25,
            "frequency": 0.25,
            "rating": 0.25,
            "trail_depth": 0.25
        }

    def calculate_aura_score(self, prompt_meta):
        score = (
            self.criteria["recency"] * prompt_meta.get("recency_score", 0) +
            self.criteria["frequency"] * prompt_meta.get("usage_count", 0) +
            self.criteria["rating"] * prompt_meta.get("avg_rating", 0) +
            self.criteria["trail_depth"] * prompt_meta.get("version_depth", 0)
        )
        return round(score, 3)

    def suggest_order(self, prompt_list):
        return sorted(prompt_list, key=self.calculate_aura_score, reverse=True)

SUGGESTION_ENGINE = RecommendationAura()