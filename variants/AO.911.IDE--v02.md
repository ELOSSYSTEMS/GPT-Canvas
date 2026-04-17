{
  "id": "AO.911.IDE",
  "title": "Intelligent Design Engine",
  "status": "✅ Activated",
  "purpose": "Automated system-level design of GPT components, prompts, flows, and recursive logic chains.",
  "linked_canvases": ["AO.001.RBI", "EL.002.STG", "AO.300.GPT"],
  "modules": [
    {
      "name": "Prompt Architect",
      "function": "Designs new prompts based on intent classification, constraints, and desired output type.",
      "inputs": ["User goal", "Category", "Tone"],
      "outputs": ["Fireproofed prompt", "Summary", "Suggested category"],
      "dependencies": ["Stargate Protocol", "Tone Fidelity Layer"]
    },
    {
      "name": "Flow Composer",
      "function": "Generates modular chains for multi-step logic flows (e.g., onboarding, interview sim, funnel scripting).",
      "inputs": ["Use case", "Step count", "Persona role"],
      "outputs": ["Structured flow chain", "Prompt sequence", "UX notes"]
    },
    {
      "name": "Persona Synthesizer",
      "function": "Builds new system personas from role definitions, tone preferences, and constraints.",
      "inputs": ["Role archetype", "Behavioral parameters"],
      "outputs": ["Persona config file", "Activation rules"]
    },
    {
      "name": "Canvas Blueprint Generator",
      "function": "Scaffolds new canvases dynamically from high-level descriptions.",
      "inputs": ["Canvas purpose", "Target linkages", "Data schema"],
      "outputs": ["Canvas JSON", "Index reference", "Suggested parent group"]
    }
  ],
  "logic_notes": [
    "IDE is invoked whenever a new system object needs design-level structuring.",
    "Output is always stored in canvas format and cross-linked into AO.001.RBI.",
    "All outputs must pass fireproofing and validation via ELoS Prompt Protocol before being committed."
  ]
}