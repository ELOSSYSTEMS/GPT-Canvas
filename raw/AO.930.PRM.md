### CANVAS: AO.930.PRM.PromptFeedbackTracker
# Tracks edits and behavior after prompt injection to learn implicit feedback

class PromptFeedbackTracker:
    def __init__(self):
        self.changelog = {}

    def register_edit(self, original_prompt, edited_prompt):
        prompt_id = hash(original_prompt)
        self.changelog[prompt_id] = {
            "original": original_prompt,
            "edited": edited_prompt,
            "delta_length": len(edited_prompt) - len(original_prompt),
            "changed": original_prompt != edited_prompt
        }

    def summarize_feedback(self):
        return {
            "total_tracked": len(self.changelog),
            "modified_prompts": sum(1 for data in self.changelog.values() if data["changed"])
        }

PROMPT_FEEDBACK_TRACKER = PromptFeedbackTracker()