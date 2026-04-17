### CANVAS: EL.950.PRM.DynamicPromptTagger
# Automatically tags prompts based on metadata, usage context, and tone

class DynamicPromptTagger:
    def __init__(self):
        self.tags = {}

    def tag_prompt(self, prompt_text, usage_context, sentiment):
        prompt_id = hash(prompt_text)
        self.tags[prompt_id] = {
            "context": usage_context,
            "sentiment": sentiment,
            "length": len(prompt_text),
            "tone": self.infer_tone(prompt_text)
        }
        return prompt_id

    def infer_tone(self, text):
        if any(w in text.lower() for w in ["excited", "amazing", "incredible"]):
            return "positive"
        elif any(w in text.lower() for w in ["problem", "issue", "concern"]):
            return "caution"
        return "neutral"

DYNAMIC_TAGGER = DynamicPromptTagger()