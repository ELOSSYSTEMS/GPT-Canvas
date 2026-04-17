### Onboarding Tutorial Bubble – Promote Insight
# This module activates a first-time tooltip for prompt promotion understanding

class PromoteInsightTutorial:
    def __init__(self):
        self.id = "EL.500.OBG.TIP.promoteInsight"
        self.text = "💡 Tip: Promote prompts you love — your library evolves based on what you engage with."
        self.trigger = "on_first_dashboard_visit"
        self.persistence = "90d+infinite archive"
        self.display_conditions = ["first_use", "dashboard_initialized", "has_not_promoted"]

    def render(self):
        return {
            "title": "💡 Prompt Promotion Tip",
            "body": self.text,
            "action": "Got it",
            "link": "Advanced Tips → promoteInsight"
        }

    def should_display(self, user_state):
        return all(c in user_state for c in self.display_conditions)


# Exported for bootloader tutorial registry
tutorial_instance = PromoteInsightTutorial()