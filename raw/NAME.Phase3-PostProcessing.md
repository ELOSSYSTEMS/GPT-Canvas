// File: /elos/stargate/phase3.postProcessing.js

import { runConstraintVerifier } from "../utils/constraintVerifier.js";
import { runConsistencyAudit } from "../utils/consistencyAudit.js";
import { runSelfDebug } from "../utils/selfDebug.js";

export async function postProcessPrompt(phaseTwoOutput, originalInput) {
  const { rewrittenPrompt, diagnostics } = phaseTwoOutput;

  // Phase 3.1: Run constraint enforcement
  const constraintReport = runConstraintVerifier(rewrittenPrompt);

  // Phase 3.2: Run tone/length/structure consistency audit
  const consistencyReport = runConsistencyAudit(rewrittenPrompt, originalInput);

  // Phase 3.3: Run internal debug check for anomalies or rewrite corruption
  const debugReport = runSelfDebug(rewrittenPrompt);

  return {
    finalPrompt: rewrittenPrompt,
    constraintReport,
    consistencyReport,
    debugReport,
    diagnostics,
    status: "Phase 3 Post-Processing Complete ✅"
  };
}