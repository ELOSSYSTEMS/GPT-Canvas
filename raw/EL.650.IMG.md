// EL.650.IMG.PostAuditLayer
// Reviews final prompt for tone match, realism, clarity, and brand alignment. Flags or auto-rewrites weak spots.

const PostAuditLayer = {
  audit(prompt) {
    const diagnostics = [];

    if (!/lighting/i.test(prompt)) {
      diagnostics.push("Missing lighting specification.");
    }

    if (!/background/i.test(prompt)) {
      diagnostics.push("Background not clearly defined.");
    }

    if (prompt.length < 200) {
      diagnostics.push("Prompt may be too short for complex image generation.");
    }

    const score = 10 - diagnostics.length;
    const flagged = diagnostics.length > 0;

    return {
      original: prompt,
      diagnostics,
      score,
      flagged,
      revised: flagged
        ? `${prompt}\n[RECOMMENDATION]: Add details – e.g., lighting, clear scene context.`
        : prompt
    };
  }
};