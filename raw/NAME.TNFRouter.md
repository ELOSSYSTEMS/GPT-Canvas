// TNFRouter.js – Universal Rewrite Dispatcher
// Routes all Hebrew outputs to either full rewrite kernel (private OS) or heuristic fallback (extension-safe)
// Version: TNF v2.0 Unified

window.TNFRouter = async function(text, tone = 'soft-professional') {
  try {
    if (window.TNFKernel && typeof window.TNFKernel.runRewrite === 'function') {
      const rewritten = await window.TNFKernel.runRewrite(text, tone);
      return rewritten + ' <!-- TNF: Kernel Rewrite -->';
    } else if (typeof window.TNFHeuristicFallback === 'function') {
      return await window.TNFHeuristicFallback(text, tone);
    } else {
      console.warn('[TNFRouter] No valid rewrite engine found. Returning original text.');
      return text + ' <!-- TNF: Unrewritten Fallback -->';
    }
  } catch (err) {
    console.error('[TNFRouter] Rewrite error:', err);
    return text + ' <!-- TNF: Rewrite Failed -->';
  }
};