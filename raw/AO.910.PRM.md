### Prompt Vault Sync + History Store
# Core module for tracking prompt edits, versions, sync state

class PromptVault:
    def __init__(self):
        self.vault = {}

    def record_version(self, user_id, prompt_id, version_data):
        self.vault.setdefault(user_id, {}).setdefault(prompt_id, []).append(version_data)

    def get_versions(self, user_id, prompt_id):
        return self.vault.get(user_id, {}).get(prompt_id, [])

    def latest(self, user_id, prompt_id):
        versions = self.get_versions(user_id, prompt_id)
        return versions[-1] if versions else None

    def sync_enabled(self):
        return True  # Cross-device sync default

# Instance
PROMPT_VAULT = PromptVault()