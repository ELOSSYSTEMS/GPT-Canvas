// TNFRouter.js – Universal Rewrite Dispatcher (v2.1)
// Now routes to TNFKernel (Private OS) or TNFChatGPTInjector (Public Extension)

window.TNFRouter = async function(text, tone = 'soft-professional') {
  try {
    if (window.TNFKernel && typeof window.TNFKernel.runRewrite === 'function') {
      const rewritten = await window.TNFKernel.runRewrite(text, tone);
      return rewritten + ' <!-- TNF: Kernel Rewrite -->';
    } else if (typeof window.TNFChatGPTInjector === 'function') {
      const rewritten = await window.TNFChatGPTInjector(text, tone);
      return rewritten + ' <!-- TNF: ChatGPT Rewrite -->';
    } else {
      console.warn('[TNFRouter] No rewrite engine found. Returning original text.');
      return text + ' <!-- TNF: Fallback Unrewritten -->';
    }
  } catch (err) {
    console.error('[TNFRouter] Rewrite error:', err);
    return text + ' <!-- TNF: Rewrite Failed -->';
  }
};