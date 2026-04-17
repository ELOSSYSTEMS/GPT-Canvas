### CANVAS: EL.920.PRM.ModuleRatingHeatmap
# Generates a heatmap of user prompt ratings for feedback and trend insight

class RatingHeatmap:
    def __init__(self):
        self.ratings_log = []  # list of (prompt_id, rating, timestamp)

    def log_rating(self, prompt_id, rating, timestamp):
        self.ratings_log.append((prompt_id, rating, timestamp))

    def generate_heatmap(self):
        from collections import defaultdict
        import datetime

        heatmap = defaultdict(lambda: [0]*24)
        for pid, rating, ts in self.ratings_log:
            hour = datetime.datetime.fromisoformat(ts).hour
            heatmap[pid][hour] += rating
        return dict(heatmap)

HEATMAP_ENGINE = RatingHeatmap()