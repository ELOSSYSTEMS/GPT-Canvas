sts_framework:
  STS.001.Signals:
    - name: "Primary Signal Enforcement"
      actions:
        - "Optimize only for 'Purchase' event. Avoid ATC, IC as primary goals."
        - "Enable CAPI (Conversions API) and track via both browser + server events."
        - "Delay performance judgment to 48–72h post-click."
        - "Cross-validate Meta purchases with Shopify and GA4."

    - name: "Lead Quality Layering"
      actions:
        - "Post-purchase attribution survey to identify ad source."
        - "UTM tagging per ad creative to map LTV clusters."
        - "Flag orders <₪150 as low-value for downstream exclusion."

  STS.002.TestingSchema:
    - name: "Ad Test Pods"
      structure:
        - "Each pod = 3–5 creatives inside 1 ad set (same audience)."
        - "$10–20/day budget."
        - "Naming convention: [HOOK]_[OFFER]_[FORMAT]_[DATE]."
        - "Stop only after ≥3 purchases/ad or 5 days with 0 purchase."

    - name: "Creative Analysis Protocol"
      structure:
        - "Run weekly Win/Loss debriefs."
        - "Track CPP, ATC→PUR rate, AOV."
        - "Use scoring rubric: Message Clarity / Visual Hierarchy / Thumb-Stop Rate."

  STS.003.ScalingLogic:
    - name: "Controlled Scaling Sequence"
      actions:
        - "Migrate winners to new CBOs with 1–2 proven creatives."
        - "Initial CBO Budget: ₪100/day. Increase max 50% per 48h."
        - "Monitor for signal decay: CPP >20% over 3-day mean triggers pause."

    - name: "Evergreen Creative Layering"
      actions:
        - "Never test new creatives in CBOs."
        - "Inject fresh creatives weekly into ad set with winning audience."
        - "Maintain ad freshness index >85%. Replace stale creatives weekly."

  STS.004.EnforcementLayers:
    - name: "Test Cadence Limiter"
      rules:
        - "Max 2 Test Pods live per week."
        - "No overlapping pods with same offer angle."

    - name: "CPP Floor Alerts"
      rules:
        - "Alert if CPP <₪6 but 0 purchases after 3 days."
        - "Alert if ATC:IC ratio >3:1 → false positive."

    - name: "Post-Purchase Feedback Integration"
      rules:
        - "Capture and tag bouquet preference, style, and buyer intent."
        - "Link feedback to ad creative where possible via UTM correlation."

meta:
  version: 1.0
  project: Forever Flowers OS / Helix Stack
  embedded: true
  owner: Allon Schaham