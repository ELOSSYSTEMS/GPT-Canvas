### ELos Prompt Feed Engine v2
# Logic for evaluating and promoting prompt trails into the UI feed

class FeedEngine:
    def __init__(self):
        self.promoted_trails = []

    def evaluate(self, trail):
        score = 0
        if trail.get("fork_count", 0) >= 5:
            score += 2
        if trail.get("avg_rating", 0) >= 8.5:
            score += 2
        if trail.get("merges", 0) >= 3:
            score += 2
        if trail.get("updates_7d", 0) >= 3:
            score += 1
        if trail.get("bundles", 0) >= 2:
            score += 1
        return score >= 3

    def promote(self, trail):
        if self.evaluate(trail):
            trail["status"] = "Promoted"
            self.promoted_trails.append(trail)
            return True
        return False

# Feed engine instance
PROMPT_FEED_ENGINE = FeedEngine()