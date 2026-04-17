### CANVAS: EL.500.OBG.TutorialBubble
# Displays contextual guidance bubbles for new or advanced users

class TutorialBubbleManager:
    def __init__(self):
        self.bubbles = {}

    def register_bubble(self, location_id, message, trigger_event):
        self.bubbles[location_id] = {
            "message": message,
            "trigger": trigger_event
        }

    def should_display(self, user_state, location_id):
        return user_state.get("onboarding_stage") == self.bubbles[location_id]["trigger"]

    def get_bubble(self, location_id):
        return self.bubbles.get(location_id, None)

TUTORIAL_BUBBLE = TutorialBubbleManager()