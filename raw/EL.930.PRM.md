### CANVAS: EL.930.PRM.RoleInferenceModel
# Infers user role based on system interaction behavior

class RoleInferenceModel:
    def __init__(self):
        self.interaction_history = []  # [(action, timestamp)]

    def log_interaction(self, action, timestamp):
        self.interaction_history.append((action, timestamp))

    def infer_role(self):
        frequency = len(self.interaction_history)
        if frequency > 100:
            return "expert"
        elif frequency > 25:
            return "intermediate"
        return "beginner"

    def classify_and_tag(self, user_profile):
        role = self.infer_role()
        user_profile["inferred_role"] = role
        return user_profile

ROLE_INFER = RoleInferenceModel()