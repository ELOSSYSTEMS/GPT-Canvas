{
  "id": "AO.911.IDE",
  "title": "ELoS Prompt Designer",
  "status": "✅ Fully Populated & Live",
  "purpose": "Automated system-level design and generation of GPT agents, prompt flows, logic modules, and recursive infrastructure.",
  "linked_canvases": ["AO.001.RBI", "EL.002.STG", "AO.300.GPT"],
  "modules": [
    {
      "name": "Prompt Architect",
      "function": "Designs structurally sound, fireproofed prompts from minimal input.",
      "inputs": ["User goal", "Tone", "Constraints"],
      "outputs": ["ELoS-compatible prompt", "Summary", "Suggested category"],
      "uses": ["Stargate v3.1", "ELoS Tone Fidelity", "Fireproofing Layer"],
      "rules": ["No prompt saved unless it passes consistency audit", "Every prompt is categorized and linked to AO.910.PRM.LIB"]
    },
    {
      "name": "Flow Composer",
      "function": "Builds recursive logic chains for multi-step flows.",
      "inputs": ["Use case", "Flow type (linear, recursive, conditional)", "Persona context"],
      "outputs": ["Chain of linked prompts", "Execution order", "System module references"],
      "uses": ["AO.500.CMD", "AO.300.EXE", "EL.300.KRN"]
    },
    {
      "name": "Persona Synthesizer",
      "function": "Constructs system personas based on role logic, behavior sets, and tone preferences.",
      "inputs": ["Persona role", "Activation behavior", "Tone defaults"],
      "outputs": ["Persona schema JSON", "Activation trigger", "Canvas reference"],
      "uses": ["AO.100.PSN", "AO.910.PSN.UXWatchdog"]
    },
    {
      "name": "Canvas Blueprint Generator",
      "function": "Auto-generates scaffolded canvases for new tools, agents, or flows.",
      "inputs": ["Purpose", "Parent logic block", "Linkage targets"],
      "outputs": ["Canvas JSON", "Dewey ID", "Traceability map"],
      "uses": ["AO.001.RBI", "EL.500.UIS", "AO.911.IDE"]
    }
  ],
  "execution_hooks": [
    "Triggered when user requests a new persona, flow, or prompt system",
    "Auto-generates new canvases for logic extensions and registers in AO.001.RBI",
    "Logs output to AO.700.MEM (if system logging is active)",
    "Validates new builds via Stargate + Fireproofing Stack before user delivery"
  ],
  "fail-safes": [
    "Do not store or register incomplete canvases",
    "All generated prompts must pass constraint + consistency audit",
    "Recursive references must be validated before committing linkage"
  ],
  "notes": [
    "AO.911.IDE (ELoS Prompt Designer) is the meta-designer of the GPTOS infrastructure",
    "Used heavily in experimental prompt systems and auto-canvas generation",
    "Outputs are linked directly into execution and UI layers when activated"
  ]
}