// DA.300.RTL-LITE – Dabroo AI / Technical / RTL Wrapper (Minimal Stable Build)

(() => {
  const TRANSLATIONS = {
    "New chat": "שיחה חדשה",
    "Upgrade to Plus": "שדרג לגרסה בתשלום",
    "Settings": "הגדרות",
    "Help": "עזרה",
    "Log out": "התנתק",
    "Clear conversations": "נקה שיחות",
    "ChatGPT": "דברו AI"
  };

  const translateTextNodes = () => {
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    let node;
    while ((node = walker.nextNode())) {
      const text = node.nodeValue.trim();
      if (TRANSLATIONS[text]) {
        node.nodeValue = TRANSLATIONS[text];
      }
    }
  };

  const applyRTL = () => {
    document.documentElement.setAttribute("dir", "rtl");
    document.body.style.direction = "rtl";
    document.body.style.textAlign = "right";
  };

  const init = () => {
    applyRTL();
    translateTextNodes();

    const observer = new MutationObserver(() => {
      translateTextNodes(); // only reapply translations
    });

    observer.observe(document.body, { childList: true, subtree: true });
  };

  const waitForApp = setInterval(() => {
    const appReady = document.querySelector("nav");
    if (appReady) {
      clearInterval(waitForApp);
      init();
    }
  }, 500);
})();