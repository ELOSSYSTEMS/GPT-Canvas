// /elos/stargate/stargate.kernel.js

import { classifyIntent } from './phase1.intentClassifier.js';
import { rewritePrompt } from './phase2.rewriteEngine.js';
import { postProcessPrompt } from './phase3.postProcessing.js';

export async function runStargateProtocol(userInput) {
  // Phase 1: Intent Classification + Diagnostic
  const intentData = classifyIntent(userInput);
  if (!intentData || !intentData.intent) {
    return {
      success: false,
      error: '❌ Intent could not be classified.',
    };
  }

  // Phase 2: Precision Rewrite
  const rewritten = rewritePrompt(userInput, intentData);
  if (!rewritten || typeof rewritten !== 'string') {
    return {
      success: false,
      error: '❌ Prompt rewrite failed.',
    };
  }

  // Phase 3: Post-Processing
  const finalized = postProcessPrompt(rewritten);
  if (!finalized || typeof finalized !== 'string') {
    return {
      success: false,
      error: '❌ Post-processing failed.',
    };
  }

  return {
    success: true,
    optimizedPrompt: finalized,
    metadata: {
      intent: intentData.intent,
      diagnostics: intentData.diagnostics,
    },
  };
}