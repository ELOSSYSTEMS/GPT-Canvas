// TNFChatGPTInjector.js – Public ChatGPT-Injected Tone Rewrite (TNF v2.1)
// Replaces Heuristic Fallback. Mirrors TNFKernel logic by using user’s ChatGPT window invisibly.

window.TNFChatGPTInjector = async function(text, tone = 'soft-professional') {
  const toneProfiles = {
    'soft-professional': `Rewrite this Hebrew response to sound like it was written by a native Israeli speaker. Keep it warm, professional, and clear.`,
    'elevated-formal': `Rewrite this Hebrew response in high-end formal tone. Make it sound polished and suitable for luxury or B2B communication.`,
    'playful-casual': `Rewrite this Hebrew response in a playful, conversational tone using casual Israeli phrasing.`,
    'poetic-minimal': `Rewrite this Hebrew text as a short poetic statement, with emotional weight but minimal words.`
  };

  const rewritePrompt = `${toneProfiles[tone] || toneProfiles['soft-professional']}\n\nResponse:\n${text}`;

  // Step 1: Open hidden thread or reuse an internal chat frame
  const textarea = document.querySelector('textarea');
  if (!textarea) throw new Error('[TNFInjector] No textarea available.');

  // Step 2: Inject prompt invisibly
  textarea.value = rewritePrompt;
  textarea.dispatchEvent(new Event('input', { bubbles: true }));
  const sendButton = textarea.closest('form').querySelector('button');
  if (sendButton) sendButton.click();

  // Step 3: Wait for ChatGPT reply (observe DOM mutations)
  return new Promise((resolve, reject) => {
    const observer = new MutationObserver((mutations, obs) => {
      for (const m of mutations) {
        const nodes = Array.from(m.addedNodes);
        for (const node of nodes) {
          if (node.nodeType === 1 && node.textContent.includes('TNF')) continue; // skip previous rewrites
          if (node.nodeType === 1 && node.innerText && /[\u0590-\u05FF]/.test(node.innerText)) {
            obs.disconnect();
            const cleaned = node.innerText.trim() + ' <!-- TNF: ChatGPT Injector -->';
            resolve(cleaned);
            return;
          }
        }
      }
    });
    const target = document.querySelector('main');
    if (target) observer.observe(target, { childList: true, subtree: true });
    else reject('[TNFInjector] No output container found.');
  });
};