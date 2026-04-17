// Canvas: EL.900.AUD.TutorialPolicy
// Purpose: System Policy Archive – Tutorial Data Retention Policy
// Linked to: ELosTutorialRegistry, Advanced Settings, Promote Insight Tooltip

export const TutorialDataRetentionPolicy = {
  policyId: "EL.500.POLICY.TutorialRetention",
  description: "Defines data retention rules for all onboarding and tutorial-based user interactions.",
  scope: "System-wide",
  appliesTo: [
    "PromoteInsightTutorialBubble",
    "OnboardingTooltips",
    "ELosTutorialRegistry entries"
  ],
  rules: [
    {
      eventType: "viewed",
      retention: "90 days",
      autoClear: true,
      notes: "Auto-deleted unless followed by interaction."
    },
    {
      eventType: "dismissed",
      retention: "90 days",
      autoClear: true,
      notes: "Removed unless later action taken on related element."
    },
    {
      eventType: "promotedFromTip",
      retention: "infinite",
      autoClear: false,
      notes: "Flagged as meaningful. Used in UX optimization models."
    },
    {
      eventType: "flaggedByAdmin",
      retention: "infinite",
      autoClear: false,
      notes: "Manually locked entries for UX or audit purposes."
    }
  ],
  visibility: {
    userAccess: true,
    settingsPath: "Advanced → Tutorial Logs",
    displayAs: "Policy Notice Link"
  },
  linkedModules: [
    "EL.500.OBG.TIP.promoteInsight",
    "ELosInsightsDashboard",
    "AdvancedUserSettings"
  ],
  createdBy: "System Kernel",
  lastUpdated: "2025-06-09"
};