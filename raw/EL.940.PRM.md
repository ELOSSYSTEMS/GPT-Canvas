### CANVAS: EL.940.PRM.ExperienceGradientTuner
# Adjusts prompt complexity and format based on user role and feedback

class ExperienceGradientTuner:
    def __init__(self):
        self.role_weights = {
            "beginner": 0.3,
            "intermediate": 0.6,
            "expert": 1.0
        }

    def tune_prompt(self, base_prompt, user_role):
        weight = self.role_weights.get(user_role, 0.5)
        if weight < 0.4:
            return f"[Simplified]\n{base_prompt}\n(Explain like I’m new)"
        elif weight < 0.8:
            return f"[Standard]\n{base_prompt}"
        return f"[Advanced]\n{base_prompt} — Add edge cases and nuance"

EXPERIENCE_TUNER = ExperienceGradientTuner()