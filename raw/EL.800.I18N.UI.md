{
  "EL.800.I18N.UI.Layer": {
    "status": "active",
    "bootloader_linked": true,
    "languageSelector": {
      "type": "dropdown",
      "options": [
        "he", "fr", "es", "de", "zh", "ja", "ko", "ar", "ru", "hi",
        "pt", "it", "pl", "nl", "id", "tr", "vi", "th", "uk", "fa"
      ],
      "default": "en"
    },
    "resourceLoader": {
      "fileStructure": "/lang/{langCode}.json",
      "fallback": "en"
    },
    "TNF_UI_Enhancement": {
      "enabled": true,
      "targetScope": [
        "onboarding.instructions",
        "tooltips",
        "system_messages",
        "notifications",
        "sidebar_labels"
      ],
      "rewriteEngine": "ToneFidelityModule",
      "failover": "literal_translation_neutral"
    },
    "runtimeSwitch": {
      "trigger": "user_language_change",
      "actions": [
        "flushUILocalizationCache",
        "loadLangResource",
        "rerenderDynamicText",
        "enableTNF"
      ]
    },
    "fallbackSafety": {
      "missingTranslation": "defaultToEnglish",
      "TNF_error": "disableTNF_useLiteral"
    }
  }
}