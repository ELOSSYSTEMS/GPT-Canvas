// Canvas: EL.420.HBU – Hebrew UI Translator Variant
// Function: On-the-fly UI label rewriting for full UI translation into culturally adapted Hebrew
// Intended for translation of button text, menus, labels, placeholders, etc.

const HBU_UI_TRANSLATIONS = {
  "Search": "חפש",
  "Submit": "שלח",
  "Cancel": "בטל",
  "Save": "שמור",
  "Continue": "המשך",
  "Settings": "הגדרות",
  "Language": "שפה",
  "Help": "עזרה",
  "Log out": "התנתק",
  "Profile": "פרופיל",
  "Back": "חזרה",
  "Next": "הבא"
};

function translateUILabels() {
  const allElements = document.querySelectorAll('*');

  allElements.forEach(el => {
    if (el.children.length === 0 && el.innerText) {
      const trimmed = el.innerText.trim();
      if (HBU_UI_TRANSLATIONS[trimmed]) {
        el.innerText = HBU_UI_TRANSLATIONS[trimmed];
      }
    }
    if (el.placeholder && HBU_UI_TRANSLATIONS[el.placeholder]) {
      el.placeholder = HBU_UI_TRANSLATIONS[el.placeholder];
    }
  });
}

function observeUIAndTranslate() {
  const observer = new MutationObserver(() => {
    translateUILabels();
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
}

if (typeof window !== "undefined") {
  document.addEventListener("DOMContentLoaded", () => {
    translateUILabels();
    observeUIAndTranslate();
  });
}

if (typeof module !== "undefined") {
  module.exports = { translateUILabels, observeUIAndTranslate };
}