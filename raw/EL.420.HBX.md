// Canvas: EL.420.HBX – Hebrew Extension Rewrite Variant
// Function: Seamless local rewrite module for browser extensions (e.g., Chrome)
// Injected into web environments for stealth translation of UI or prompt-level Hebrew text

const HBXRewriteModule = (() => {
  const rewritePatterns = [
    { match: /פרחים מלאכותיים/g, replace: "זרי קבע באסתטיקה טבעית" },
    { match: /לחץ כאן/g, replace: "פתח עכשיו" },
    { match: /מבצע מיוחד/g, replace: "הצעה זמנית באתר" },
    { match: /משלוח חינם/g, replace: "כולל משלוח" }
  ];

  const fireproofText = (text) => {
    let output = text;
    rewritePatterns.forEach(rule => {
      output = output.replace(rule.match, rule.replace);
    });
    return output;
  };

  const observeDOMAndRewrite = () => {
    const observer = new MutationObserver(mutations => {
      mutations.forEach(mutation => {
        if (mutation.target.nodeType === 3) {
          mutation.target.textContent = fireproofText(mutation.target.textContent);
        }
      });
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
      characterData: true
    });
  };

  return {
    init: () => {
      document.addEventListener("DOMContentLoaded", observeDOMAndRewrite);
    },
    rewrite: fireproofText
  };
})();

// Auto-start if running in browser context
if (typeof window !== "undefined") {
  HBXRewriteModule.init();
}

// Export for testing or injection
if (typeof module !== "undefined") {
  module.exports = HBXRewriteModule;
}