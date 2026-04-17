// EL.421.HBR.EXT.js — Hebrew Rewrite Engine for ELOS OS Extension
// Version: Translate 2.1-EXT
// Description: Forked from EL.420.HBR for use inside public-facing ELOS ChatGPT Extension

(function() {
  const TRANSLATE_TOGGLE_KEY = '__elos_translate_enabled';
  const REWRITE_TAG = '<!-- [Translate 2.1-EXT: Hebrew Mode Enabled] -->';

  // Utility: Language Detection (Basic RTL Heuristic)
  function isHebrew(text) {
    const hebrewRegex = /[\u0590-\u05FF]/;
    return hebrewRegex.test(text);
  }

  // Utility: Minimal Translation + Optimization Layer
  async function translateAndOptimize(prompt) {
    // TODO: Connect to Stargate-compatible optimizer inside the DOM
    const systemPrompt = `Translate the following Hebrew prompt into fluent, optimized English for GPT input, then rewrite the final output back into native Hebrew while preserving tone.`;
    const translatedPrompt = `${systemPrompt}\n\nUser Prompt: ${prompt}`;
    return translatedPrompt; // Stub; Replace with Stargate pipeline if available
  }

  // Inject English prompt, trigger GPT submission
  function injectPrompt(text) {
    const textarea = document.querySelector('textarea');
    if (!textarea) return;
    textarea.value = text;
    textarea.dispatchEvent(new Event('input', { bubbles: true }));

    const submitButton = textarea.closest('form').querySelector('button');
    if (submitButton) submitButton.click();
  }

  // Rewrite output when complete
  const outputObserver = new MutationObserver((mutations) => {
    for (const m of mutations) {
      const nodes = Array.from(m.addedNodes);
      for (const node of nodes) {
        if (node.nodeType === 1 && node.textContent && isHebrew(node.textContent)) {
          // TODO: Run tone audit if needed
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

  // Main Input Observer
  const inputObserver = new MutationObserver(() => {
    const textarea = document.querySelector('textarea');
    if (!textarea) return;

    textarea.addEventListener('keydown', async (e) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        const original = textarea.value.trim();
        const enabled = localStorage.getItem(TRANSLATE_TOGGLE_KEY) === 'true';
        if (enabled && isHebrew(original)) {
          e.preventDefault();
          const translated = await translateAndOptimize(original);
          injectPrompt(translated);
        }
      }
    }, { once: true });
  });

  // Boot logic
  function initialize() {
    inputObserver.observe(document.body, { childList: true, subtree: true });
    attachOutputInterceptor();
  }

  // Start
  initialize();
})();