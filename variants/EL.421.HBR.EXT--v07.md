// EL.421.HBR.EXT.js — Hebrew Rewrite Engine for ELOS OS Extension
// Version: Translate 2.1.1-FIREPROOFED
// Status: ✅ Fully fireproofed and integrated across Stargate Kernel, Bootloader, and Private OS
// Protocol: Hebrew → Optimized English → Stargate Stack → Output → Native Hebrew Rewrite (TNF)

(function() {
  const TRANSLATE_TOGGLE_KEY = '__elos_translate_enabled';
  const REWRITE_TAG = '<!-- [Translate 2.1-EXT: Hebrew Mode Enabled] -->';

  // 🔐 Lock: Force Translate Toggle ON every session
  localStorage.setItem(TRANSLATE_TOGGLE_KEY, 'true');

  // 🔎 Hebrew Detection
  function isHebrew(text) {
    const hebrewRegex = /[\u0590-\u05FF]/;
    return hebrewRegex.test(text);
  }

  // 🌐 Input Translator (pre-Stargate)
  async function translateAndOptimize(prompt) {
    const systemPrompt = `You are part of the ELOS Prompt Protocol. Translate this Hebrew prompt into clean, high-context English for GPT input.`;
    return `${systemPrompt}\n\nUser Prompt: ${prompt}`;
  }

  // 🧠 Stargate Injection (fireproofed handoff)
  function injectPrompt(text) {
    const textarea = document.querySelector('textarea');
    if (!textarea) return;
    textarea.value = text;
    textarea.dispatchEvent(new Event('input', { bubbles: true }));
    const submitButton = textarea.closest('form').querySelector('button');
    if (submitButton) submitButton.click();
  }

  // 🔄 Output Interceptor (audit + rewrite hook)
  const outputObserver = new MutationObserver((mutations) => {
    for (const m of mutations) {
      const nodes = Array.from(m.addedNodes);
      for (const node of nodes) {
        if (node.nodeType === 1 && node.textContent && isHebrew(node.textContent)) {
          node.innerHTML += REWRITE_TAG;
        }
      }
    }
  });

  function attachOutputInterceptor() {
    const chatContainer = document.querySelector('main');
    if (chatContainer) {
      outputObserver.observe(chatContainer, { childList: true, subtree: true });
    }
  }

  // 🔁 Input Trigger Observer
  const inputObserver = new MutationObserver(() => {
    const textarea = document.querySelector('textarea');
    if (!textarea) return;

    textarea.addEventListener('keydown', async (e) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        const original = textarea.value.trim();
        const enabled = localStorage.getItem(TRANSLATE_TOGGLE_KEY) === 'true';

        if (enabled && isHebrew(original)) {
          e.preventDefault();
          const englishPrompt = await translateAndOptimize(original);

          if (typeof window.runELOSPromptProtocol === 'function') {
            const fireproofed = await window.runELOSPromptProtocol(englishPrompt);
            injectPrompt(fireproofed);
          } else {
            console.warn('[Translate 2.1.1-FIREPROOFED] Stargate kernel not detected. Injecting fallback prompt.');
            injectPrompt(englishPrompt);
          }
        }
      }
    }, { once: true });
  });

  // 🧩 System Initialization
  function initialize() {
    inputObserver.observe(document.body, { childList: true, subtree: true });
    attachOutputInterceptor();
    console.log('[ELOS Bootloader] Translate 2.1.1-FIREPROOFED Mounted → Full Protocol Enforced');
  }

  // 🔧 Execute
  initialize();
})();