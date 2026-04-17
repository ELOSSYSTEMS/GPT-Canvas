### CANVAS: EL.500.OBG.TutorialMemoryEngine
# Stores and manages user dismissals for tutorial tooltips and UI helpers

class TutorialMemoryEngine:
    def __init__(self):
        self.dismissed_tutorials = set()

    def mark_dismissed(self, tutorial_id):
        self.dismissed_tutorials.add(tutorial_id)

    def should_show(self, tutorial_id):
        return tutorial_id not in self.dismissed_tutorials

    def reset(self):
        self.dismissed_tutorials.clear()

TUTORIAL_MEMORY_ENGINE = TutorialMemoryEngine()