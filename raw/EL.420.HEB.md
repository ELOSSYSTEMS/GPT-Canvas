// Canvas Title: ELOS Hebrew Lite Extension – Scaffold v1.0
// Dewey ID: EL.420.HEB
// Purpose: Scaffold for the Hebrew ELOS Lite Translator Chrome Extension

// --- manifest.json ---
{
  "manifest_version": 3,
  "name": "ELOS Lite – עברית",
  "version": "1.0",
  "description": "ChatGPT finally speaks Hebrew like a native.",
  "permissions": ["storage", "scripting"],
  "action": {
    "default_popup": "popup.html",
    "default_icon": {
      "16": "icon16.png",
      "48": "icon48.png",
      "128": "icon128.png"
    }
  },
  "content_scripts": [
    {
      "matches": ["https://chatgpt.com/*"],
      "js": ["inject.js"]
    }
  ]
}

// --- inject.js ---
(function() {
  const waitForInputBox = setInterval(() => {
    const inputBox = document.querySelector('textarea');
    const sendButton = inputBox?.parentElement?.querySelector('button');
    if (inputBox && sendButton) {
      clearInterval(waitForInputBox);

      const elosButton = document.createElement('button');
      elosButton.textContent = 'ELŌS עברית';
      elosButton.style.marginLeft = '8px';
      elosButton.onclick = () => {
        const originalPrompt = inputBox.value;
        const rewrittenPrompt = runToneFidelityRewrite(originalPrompt);
        inputBox.value = rewrittenPrompt;
        sendButton.click();
      };
      sendButton.parentElement.appendChild(elosButton);
    }
  }, 500);

  function runToneFidelityRewrite(prompt) {
    // Placeholder for Hebrew tone fidelity logic
    // For now, simply returns the original prompt
    return prompt;
  }
})();

// --- popup.html ---
<!DOCTYPE html>
<html>
<head><title>ELŌS עברית</title></head>
<body>
  <h1>ELŌS Lite – Hebrew Mode</h1>
  <p>Running tone enhancement for Hebrew prompts.</p>
</body>
</html>