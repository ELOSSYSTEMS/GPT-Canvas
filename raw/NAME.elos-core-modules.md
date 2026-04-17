{
  "modules": [
    {
      "id": "pr.001.epp",
      "name": "ELoS Prompt Protocol",
      "description": "Core logic for preprocessing and routing all prompts.",
      "prompt_template": "# Analyze user intent\n- Extract core command\n- Map to registered module\n- Route or reject\n\n{{input}}",
      "meta": {
        "type": "router",
        "depends_on": ["pr.005.int", "pr.003.sde"],
        "language": "hebrew-first"
      }
    },
    {
      "id": "pr.003.sde",
      "name": "Socratic Drip Engine",
      "description": "Engages user in recursive question flow to refine prompt.",
      "prompt_template": "# Socratic refinement engine\nRespond with clarifying questions:\n1. What’s the main outcome you want?\n2. What format should the response take?\n3. What’s the tone or context?\n\nInput: {{input}}",
      "meta": {
        "type": "interaction",
        "language": "hebrew-first"
      }
    },
    {
      "id": "pr.005.int",
      "name": "Intent Resolver",
      "description": "Resolves ambiguous user messages into actionable intents.",
      "prompt_template": "# Detect intent and rewrite as structured action\nInput: {{input}}\n\nReturn format:\n- action_type:\n- target_module:\n- metadata (optional):",
      "meta": {
        "type": "parser",
        "language": "hebrew-supported"
      }
    },
    {
      "id": "pr.020.pfp",
      "name": "Prompt Forge",
      "description": "Generates custom prompts based on user profile, upvoting, history.",
      "prompt_template": "# Generate personalized prompts\n- Use past successful prompts\n- Adapt to persona and tone\n- Score for originality and alignment\n\nBase prompt: {{input}}",
      "meta": {
        "type": "generator",
        "language": "hebrew-first"
      }
    },
    {
      "id": "pr.900.lmm",
      "name": "Local Memory Manager",
      "description": "Stores, retrieves, and scores reusable prompt structures.",
      "prompt_template": "# Local memory interface\nCommand: {{input}}\n\nReturn matching templates, examples, or store new entry.",
      "meta": {
        "type": "memory",
        "storage": "local",
        "language": "n/a"
      }
    },
    {
      "id": "sys.101.sgs",
      "name": "Stargate Stack Loader",
      "description": "Initializes runtime environment and boot logic stack.",
      "prompt_template": "# Bootloader init sequence\n- Load PR.000–PR.010\n- Load AO.910, EL.400–EL.410\n- Initialize UI canvas\n- Register modules\n\n{{input}}",
      "meta": {
        "type": "system",
        "autoload": true
      }
    },
    {
      "id": "el.410.tnf",
      "name": "Tone Fidelity Engine",
      "description": "Enforces tone rules per Hebrew fidelity protocol.",
      "prompt_template": "# Hebrew tone alignment layer\n- Rewrite for tone fidelity\n- Use defined style rules\n- Compare against reference tone bank\n\n{{input}}",
      "meta": {
        "type": "postprocessor",
        "language": "hebrew"
      }
    }
  ]
}