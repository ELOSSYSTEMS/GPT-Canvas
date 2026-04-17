// ELos v1 – Core Extension Files (MV3 compliant)

// ------------------------
// manifest.json
// ------------------------
{
  "manifest_version": 3,
  "name": "ELos",
  "version": "1.0",
  "description": "The OS layer for ChatGPT",
  "permissions": ["scripting", "storage"],
  "host_permissions": [
    "https://chat.openai.com/*",
    "https://chatgpt.com/*",
    "https://chat.com/*"
  ],
  "background": {
    "service_worker": "background.js"
  },
  "content_scripts": [
    {
      "matches": [
        "https://chat.openai.com/*",
        "https://chatgpt.com/*",
        "https://chat.com/*"
      ],
      "js": ["content.js"],
      "css": ["styles.css"]
    }
  ],
  "action": {
    "default_popup": "popup.html"
  }
}

// ------------------------
// content.js
// ------------------------
(function injectELos() {
  const injectToggle = () => {
    if (document.querySelector('#elos-toggle')) return;

    const sidebar = document.querySelector("nav") || document.body;
    const toggle = document.createElement("div");
    toggle.id = "elos-toggle";
    toggle.textContent = "ELos: Beginner";
    toggle.style = "position:absolute;top:10px;left:10px;padding:6px 10px;background:#fff;color:#000;border-radius:6px;font-size:12px;cursor:pointer;z-index:9999;";

    toggle.onclick = () => {
      const current = sessionStorage.getItem("elos-tier") || "Beginner";
      const next = current === "Beginner" ? "Intermediate" : current === "Intermediate" ? "Pro" : "Beginner";
      sessionStorage.setItem("elos-tier", next);
      toggle.textContent = `ELos: ${next}`;
      location.reload();
    };

    sidebar.appendChild(toggle);
  };

  const injectWizard = () => {
    if (document.querySelector('#elos-wizard')) return;
    const chatbar = document.querySelector("textarea")?.parentNode;
    if (!chatbar) return;

    const wizard = document.createElement("div");
    wizard.id = "elos-wizard";
    wizard.textContent = "🧙‍♂️";
    wizard.title = "Click for help";
    wizard.style = "margin-right: 8px; cursor: pointer; font-size: 20px;";

    wizard.onclick = () => {
      alert("Wizard Guide coming soon. For now, type !help in the chat.");
    };

    chatbar.insertBefore(wizard, chatbar.lastChild);
  };

  const observer = new MutationObserver(() => {
    injectToggle();
    injectWizard();
  });

  observer.observe(document.body, { childList: true, subtree: true });
})();

// ------------------------
// styles.css
// ------------------------
#elos-toggle {
  font-family: sans-serif;
  font-weight: 600;
}

#elos-wizard {
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

// ------------------------
// popup.html
// ------------------------
<!DOCTYPE html>
<html>
<head><title>ELos Control</title></head>
<body>
  <h3>ELos Tier</h3>
  <button id="beginner">Beginner</button>
  <button id="intermediate">Intermediate</button>
  <button id="pro">Pro</button>

  <script src="popup.js"></script>
</body>
</html>

// ------------------------
// popup.js
// ------------------------
["beginner", "intermediate", "pro"].forEach(tier => {
  document.getElementById(tier).onclick = () => {
    sessionStorage.setItem("elos-tier", tier.charAt(0).toUpperCase() + tier.slice(1));
    alert(`Tier set to ${tier}`);
  }
});

// ------------------------
// background.js (stub for future API use)
// ------------------------
chrome.runtime.onInstalled.addListener(() => {
  console.log("ELos extension installed.");
});