{
  "000 – Super Prompts Index": {
    "100 – Strategic Thinking": [
      "101.1 – Expert Decision Matrix",
      "101.2 – Mental Model Generator",
      "101.3 – Simulate a Genius Boardroom"
    ],
    "200 – Personal Strategy": [
      "201.1 – Strategic Life Map",
      "201.2 – Systems Over Goals Builder",
      "201.3 – ‘Act As’ Superbrain Mode"
    ],
    "300 – Knowledge Systems": [
      "301.1 – Second Brain Setup"
    ]
  },

  "101.1 – Expert Decision Matrix": {
    "persona_goal": "Strategic Decision Maker evaluating multiple complex options",
    "instruction": "Construct a decision matrix to evaluate [Option A] vs. [Option B] using structured criteria: risks, benefits, values alignment, time horizon, and reversibility. Emulate the analytical approach of a McKinsey consultant.",
    "context": {
      "domain": "[Insert domain – e.g., product launch, hiring, investment]",
      "timeline": "[e.g., urgent / 30 days / flexible]",
      "stakeholders": "[Who is impacted]"
    },
    "tasks": [
      "Identify 5–7 evaluation criteria",
      "Assign weights to each criterion",
      "Score both options",
      "Generate ranked summary and matrix",
      "Interpret tradeoffs and give recommendation"
    ],
    "output_schema": "Table + Weighted Summary + Final Recommendation Paragraph"
  },

  "101.2 – Mental Model Generator": {
    "persona_goal": "Critical Thinker seeking clarity on a complex issue",
    "instruction": "Analyze [insert problem] using: First Principles, Second-Order Thinking, Inversion, and Opportunity Cost. Identify misassumptions and reframe logic.",
    "context": {
      "domain": "[Insert domain]",
      "constraints": "[Budget, time, etc.]"
    },
    "tasks": [
      "Define problem",
      "Apply each model",
      "Highlight faulty logic",
      "Propose new hypothesis"
    ],
    "output_schema": "Problem Summary + 4 Model Blocks + Reconstructed Insight"
  },

  "101.3 – Simulate a Genius Boardroom": {
    "persona_goal": "Founder seeking high-level strategic critique",
    "instruction": "Simulate a 3-person board (Naval Ravikant, Jeff Bezos, Brené Brown) reviewing [insert idea]. Offer critique and synthesis.",
    "context": {
      "idea_domain": "[Insert domain]",
      "intended_impact": "[Insert impact scope]"
    },
    "tasks": [
      "Summarize the idea",
      "Write feedback from each persona",
      "Conclude with synthesis paragraph"
    ],
    "output_schema": "Persona Feedback Blocks + Executive Summary"
  },

  "201.1 – Strategic Life Map": {
    "persona_goal": "Ambitious individual designing a multi-year plan",
    "instruction": "Design a 3-year life map for [insert goals]. Include leverage points, transitions, and bottlenecks.",
    "context": {
      "domains": "[Career, health, relationships, etc.]",
      "constraints": "[Insert limitations]"
    },
    "tasks": [
      "Break goals into milestones",
      "Map leverage actions",
      "Anticipate blockers",
      "Propose monitoring systems"
    ],
    "output_schema": "Year-by-Year Breakdown + Risk & Leverage Analysis"
  },

  "201.2 – Systems Over Goals Builder": {
    "persona_goal": "Productivity-focused operator seeking sustainable progress",
    "instruction": "Convert [insert goal] into a system with daily inputs, metrics, and feedback loops.",
    "context": {
      "domain": "[Insert domain]",
      "cadence": "[Daily, weekly, cyclic]"
    },
    "tasks": [
      "Define minimum viable inputs",
      "Establish tracking loop",
      "Set checkpoints",
      "Make system motivation-independent"
    ],
    "output_schema": "Input–Loop–Outcome Map"
  },

  "201.3 – ‘Act As’ Superbrain Mode": {
    "persona_goal": "High-performance operator optimizing execution",
    "instruction": "Combine strategies from productivity, psychology, and business to optimize time, energy, and decision quality.",
    "context": {
      "working_conditions": "[Insert context]",
      "challenges": "[e.g., distractions, fatigue]"
    },
    "tasks": [
      "Define ideal working state",
      "Productivity protocols",
      "Cognitive behavior strategies",
      "Execution model"
    ],
    "output_schema": "3 Expert Blocks + Daily Rhythm Flow"
  },

  "301.1 – Second Brain Setup": {
    "persona_goal": "Knowledge worker externalizing cognition",
    "instruction": "Design a Notion/Obsidian-based second brain for capture, review, and synthesis.",
    "context": {
      "platform": "[Notion or Obsidian]",
      "use_case": "[e.g., content, research, personal]"
    },
    "tasks": [
      "Define core modules",
      "Create tag + linking systems",
      "Design templates for capture/review",
      "Explain spaced repetition layer"
    ],
    "output_schema": "Module Blueprint + Flow Map + Example Templates"
  }
}