# ELoS Prompt Protocol v2.0 – Hot-Patch 2025-07-01
# Purpose: enforce tone-fidelity audit on all section headers and block labels
# ----------------------------------------------------------------------------
SchemaDeclaration:
  rules:
    - id: HDG-001
      target: section_header
      description: |
        All top-level and nested section headers MUST pass through Tone Fidelity
        Layer (EL.410.TNF) and Stylistic Tension Resolver (AD.802.STY) before
        final output. Literal translations of visual metaphors (e.g., "Snapshot")
        are PROHIBITED unless brand-tone equivalence is explicitly verified.
      enforcement: REQUIRED
      fail_action: rewrite_and_reaudit
    - id: HDG-002
      target: block_label
      description: |
        Non-lexical labels are reclassified as user-visible headings when the
        output language is Hebrew. They inherit all tone-audit constraints.
      enforcement: REQUIRED
Routing:
  header_pipeline:
    - EL.410.TNF   # Tone Fidelity Layer – ensures RH × Habitat style
    - AD.802.STY   # Stylistic Tension Resolver – prevents literalism
  paragraph_pipeline:
    - EL.410.TNF
    - AD.802.STY

# ----------------------------------------------------------------------------
# Changelog
# 2025-07-01: Added HDG-001 and HDG-002 rules; inserted dedicated header_pipeline.
# ----------------------------------------------------------------------------
