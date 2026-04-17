### PROMPT FEEDBACK LOOP — v1.0
# Canvas: EL.910.PRM.FeedbackLoop
# Captures ratings, drives self-improvement signals for prompts

class PromptFeedbackLoop:
    def __init__(self):
        self.prompt_ratings = {}
        self.feedback_log = []

    def submit_rating(self, prompt_id, rating, user_id):
        self.prompt_ratings.setdefault(prompt_id, []).append(rating)
        self.feedback_log.append({
            "user": user_id,
            "prompt_id": prompt_id,
            "rating": rating
        })

    def get_average_rating(self, prompt_id):
        scores = self.prompt_ratings.get(prompt_id, [])
        return round(sum(scores) / len(scores), 2) if scores else 0

    def should_regenerate(self, prompt_id):
        avg = self.get_average_rating(prompt_id)
        return avg < 7.0

    def recommend_upgrade(self, prompt_id):
        if self.should_regenerate(prompt_id):
            return "Reroute through Stargate for repair"
        return "Stable prompt"

RATING_LOOP = PromptFeedbackLoop()