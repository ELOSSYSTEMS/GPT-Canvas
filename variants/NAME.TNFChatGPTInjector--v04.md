// TNFRouter.js – Universal Rewrite Dispatcher (v2.1)
// Integrated into both Private OS Bootloader and ELOS OS Extension Bootloader
// Mirrors tone fidelity rewrite behavior via user's own ChatGPT

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

// Bootloader Hook — Register into Global ELOS Stack
if (window.bootloaderModules) {
  window.bootloaderModules.push('TNFRouter');
  console.log('[Bootloader] TNFRouter module mounted for private and extension environments');
} else {
  window.bootloaderModules = ['TNFRouter'];
  console.log('[Bootloader] TNFRouter module initialized');
}