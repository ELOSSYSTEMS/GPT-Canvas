// EL.421.HBR.EXT.js — Hebrew Rewrite Engine for ELOS OS Extension
// Version: Translate 2.1-EXT (Integrated into ELOS Prompt Protocol as a language override layer)
// Description: Forked from EL.420.HBR and now embedded inside Stargate Kernel via dynamic routing logic

(function() {
  const TRANSLATE_TOGGLE_KEY = '__elos_translate_enabled';
  const REWRITE_TAG = '<!-- [Translate 2.1-EXT: Hebrew Mode Enabled] -->';

  // Utility: Language Detection (Basic RTL Heuristic)
  function isHebrew(text) {
    const hebrewRegex = /[\u0590-\u05FF]/;
    return hebrewRegex.test(text);
  }

  // Protocol Override (Stargate Hook): Translate 2.0 Pipeline Logic
  async function translateAndOptimize(prompt) {
    const systemPrompt = `You are part of the ELOS Prompt Protocol. Translate this Hebrew prompt into clean, high-context English for GPT input. Then, after response, rewrite the output into fluid, natural Hebrew with tone fidelity.`;
    const translatedPrompt = `${systemPrompt}\n\nUser Prompt: ${prompt}`;
    return translatedPrompt;
  }

  // Inject Prompt to ChatGPT
  function injectPrompt(text) {
    const textarea = document.querySelector('textarea');
    if (!textarea) return;
    textarea.value = text;
    textarea.dispatchEvent(new Event('input', { bubbles: true }));

    const submitButton = textarea.closest('form').querySelector('button');
    if (submitButton) submitButton.click();
  }

  // Output Handler: Tag and Rewrite if Hebrew
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

  // Kernel Mount Sequence
  function initialize() {
    inputObserver.observe(document.body, { childList: true, subtree: true });
    attachOutputInterceptor();
  }

  // Triggered via Bootloader or StargateKernelLoader
  initialize();
})();