// /elos/dabroo/promptSurgery.js

import { classifyIntent } from '../stargate/phase1.intentClassifier.js';
import { rewritePrompt } from '../stargate/phase2.rewriteEngine.js';
import { finalizePrompt } from '../stargate/phase3.postProcessing.js';

const surgeryRules = [
  {
    pattern: /(?<!\w)write me a prompt(?!\w)/i,
    action: () => 'Generate a prompt template with persona, constraints, and output format.'
  },
  {
    pattern: /(?<!\w)make this better(?!\w)/i,
    action: () => 'Rewrite this prompt to be more specific, structured, and goal-driven.'
  },
  {
    pattern: /(?<!\w)translate this into(?!\w)/i,
    action: (match, input) => input.replace(/translate this into (\w+)/i, 'Rewrite the prompt in language: $1')
  }
  // Add more patterns as needed
];

export function runPromptSurgery(rawInput) {
  let surgicallyPatched = rawInput;

  for (const rule of surgeryRules) {
    if (rule.pattern.test(surgicallyPatched)) {
      const match = surgicallyPatched.match(rule.pattern);
      surgicallyPatched = typeof rule.action === 'function'
        ? rule.action(match, surgicallyPatched)
        : rule.action;
      break;
    }
  }

  const classified = classifyIntent(surgicallyPatched);
  const rewritten = rewritePrompt(surgicallyPatched, classified);
  const finalized = finalizePrompt(rewritten);

  return finalized;
}