**Canvas Title: Dabroo AI Extension Framework**

---

## Objective
Scaffold a Chrome extension that transforms the ChatGPT interface into an Israeli-first RTL experience with Hebrew UI elements.

---

## Project Structure
```
/dabroo-extension
├── manifest.json
├── content.js
├── styles.css
└── assets/
    └── icons/
        └── dabroo-icon-32.png
```

---

### 1. manifest.json
```json
{
  "manifest_version": 3,
  "name": "Dabroo AI – ישראלי ChatGPT",
  "version": "0.1.0",
  "description": "Flips ChatGPT to RTL and localizes UI into Hebrew.",
  "permissions": ["activeTab", "scripting", "storage", "contextMenus"],
  "icons": { "32": "assets/icons/dabroo-icon-32.png" },
  "content_scripts": [
    {
      "matches": ["https://chat.openai.com/*"],
      "js": ["content.js"],
      "css": ["styles.css"]
    }
  ],
  "action": {
    "default_icon": "assets/icons/dabroo-icon-32.png",
    "default_title": "Dabroo AI"
  }
}
```

---

### 2. styles.css
```css
/* Flip layout to RTL */
html, body { direction: rtl !important; }
/* Move sidebar from left to right */
.chakra-ui-portal { right: auto !important; left: 0 !important; }
/* Override default fonts for Hebrew */
body, .prose { font-family: 'Assistant', sans-serif !important; }
```

---

### 3. content.js
```js
// content.js: inject Hebrew translations & adjust UI labels
(async () => {
  const translations = {
    'ChatGPT': 'דברו AI',
    'New chat': 'שיחה חדשה',
    'Dark mode': 'מצב כהה',
    'Light mode': 'מצב בהיר',
    'Settings': 'הגדרות',
    'Documentation': 'תיעוד'
  };

  // Replace UI text
  const replaceText = () => {
    document.querySelectorAll('*').forEach(node => {
      if (node.childNodes.length === 1 && node.childNodes[0].nodeType === Node.TEXT_NODE) {
        let text = node.innerText.trim();
        if (translations[text]) node.innerText = translations[text];
      }
    });
  };

  // Observe DOM changes for dynamic content
  const observer = new MutationObserver(() => replaceText());
  observer.observe(document.body, { childList: true, subtree: true });

  // Initial run
  replaceText();
})();
```

---

**Canvas Code:** ▧ DA.300.FRW – Dabroo AI / Technical / Framework