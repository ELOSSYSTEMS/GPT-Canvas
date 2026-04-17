// TNFChatGPTInjector.js – Public ChatGPT-Injected Tone Rewrite (TNF v2.1)
// Updated: Match user tone precisely — do not inject system voice

window.TNFChatGPTInjector = async function(text, tone = 'soft-professional') {
  const toneProfiles = {
    'soft-professional': `Rewrite this Hebrew response to make it sound like it was written by a native Israeli speaker. Preserve the user's original tone and intention. Do not inject your own tone. Do not make it robotic or overly formal.`,
    'elevated-formal': `Rewrite this Hebrew response in high-end formal tone, but stay loyal to the user's original voice and content. Do not editorialize.`,
    'playful-casual': `Rewrite this Hebrew response using fluent, natural Israeli phrasing, while keeping the user’s original playful tone. Do not add humor if it wasn’t there.`,
    'poetic-minimal': `Rewrite this Hebrew text with clean poetic rhythm, but do not change the meaning or inject metaphor. Stay true to the original tone.`
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
          if (node.nodeType === 1 && node.textContent.includes('TNF')) continue;
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