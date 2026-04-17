### CANVAS: EL.920.PRM.PersonaSyncLayer
# Syncs prompt generation engine with known user personas

class PersonaSyncLayer:
    def __init__(self, persona_registry):
        self.registry = persona_registry  # e.g., AO.300.PSN

    def match_persona(self, user_profile):
        persona_id = user_profile.get("assigned_persona")
        return self.registry.get(persona_id, None)

    def inject_persona_traits(self, prompt_payload, persona_profile):
        if not persona_profile:
            return prompt_payload
        traits = persona_profile.get("prompt_modifiers", {})
        prompt_payload.update(traits)
        return prompt_payload

    def sync(self, user_profile, prompt_payload):
        persona = self.match_persona(user_profile)
        return self.inject_persona_traits(prompt_payload, persona)

PERSONA_SYNC = PersonaSyncLayer(persona_registry={})