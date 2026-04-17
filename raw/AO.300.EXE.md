// Canvas Title: Allon OS – Command Execution Layer

/*
System Name: Command Execution Layer (CEL)
Placement: Allon OS (ELos Tier: Pro)
Purpose: Allow Allon to issue structured `!` commands that execute deterministic assistant behavior chains within the Chrome extension.
*/

// --------------------------------------------------
// 1. Command Parser (Handles syntax: !command | context | modifiers)
// --------------------------------------------------
function parseCommandInput(input) {
  const chain = input.split("→").map(cmd => cmd.trim());
  return chain.map(step => {
    const [command, context = '', modifiers = ''] = step
      .split("|")
      .map(part => part.trim());
    return { command, context, modifiers };
  });
}

// --------------------------------------------------
// 2. Command Dispatcher (Maps commands to assistant behaviors)
// --------------------------------------------------
function dispatchCommand({ command, context, modifiers }, lastOutput) {
  switch (command.toLowerCase()) {
    case '!plan':
      return `System: Use the Planner persona to map out: ${context}`;
    case '!simulate':
      return `System: Simulate scenario using personas: ${context}`;
    case '!build':
      return `System: Build structured output for: ${context || lastOutput}`;
    case '!refine':
      return `System: Refine this with style: ${modifiers} → ${lastOutput}`;
    case '!extract':
      return `System: Extract ${context || 'main points'} from: ${lastOutput}`;
    case '!override':
      return `System: Override default behaviors. Context: ${context}`;
    case '!reset':
      return `System: Reset all prior context.`;
    default:
      return `System: Unknown command '${command}'. Skipping.`;
  }
}

// --------------------------------------------------
// 3. Execution Engine (Run full chain with memory)
// --------------------------------------------------
function executeCommandChain(input) {
  const chain = parseCommandInput(input);
  let lastOutput = ''; // Stores running output context
  const results = [];

  for (const step of chain) {
    const output = dispatchCommand(step, lastOutput);
    results.push(output);
    lastOutput = output; // Feed into next step
  }

  return results;
}

// --------------------------------------------------
// 4. Debug Example (for local QA inside Dev Console)
// --------------------------------------------------
const input = `!plan | New Launch Funnel → !simulate | The Marketers + Brand Steward → !build → !extract | CTAs`;
const chainOutput = executeCommandChain(input);
console.log('Execution Chain:', chainOutput);

/*
To integrate:
- Hook `executeCommandChain()` into content.js input interceptor
- Display `chainOutput` inside ChatGPT window via injected DOM node
- Add rollback/step-back toggle to each result
*/

// Tag: ▧ AO.300.EXE – Allon OS / Command / Execution Layer