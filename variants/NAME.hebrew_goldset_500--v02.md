```json
[
  // --- Slang (100 items) ---
  {"input_he": "אחי זה מטורף רצח", "expected_he": "אחי, זה מטורף מאוד", "stakes": "LOW", "notes": "Slang 'רצח' for emphasis — maps to intensifier 'מאוד'"},
  {"input_he": "יאללה נתפוס איזה קפה מחר?", "expected_he": "בוא נלך לשתות קפה מחר", "stakes": "LOW", "notes": "Colloquial 'יאללה' start phrase, casual invitation"},
  {"input_he": "סגור אחי, אני בפנים", "expected_he": "בסדר, אני מצטרף", "stakes": "LOW", "notes": "Slang 'סגור' meaning agreement"},
  {"input_he": "פגז של הופעה הייתה אתמול", "expected_he": "ההופעה אתמול הייתה מצוינת", "stakes": "LOW", "notes": "Slang 'פגז' as 'excellent'"},
  {"input_he": "אל תעשה סרטים סתם", "expected_he": "אל תגזים או תדרמט את המצב", "stakes": "LOW", "notes": "Idiom 'לעשות סרטים' meaning 'create drama'"},
  // ... (95 more slang items)

  // --- Formal (100 items) ---
  {"input_he": "הנך מתבקש למלא את הטופס המצורף", "expected_he": "הנך מתבקש למלא את הטופס המצורף", "stakes": "MEDIUM", "notes": "Formal polite request"},
  {"input_he": "נא לאשר את קבלת ההודעה", "expected_he": "נא לאשר את קבלת ההודעה", "stakes": "MEDIUM", "notes": "Standard formal confirmation request"},
  // ... (98 more formal items)

  // --- Legal (100 items) ---
  {"input_he": "הנך נדרש להתייצב לדיון במועד הנקוב", "expected_he": "הנך נדרש להתייצב לדיון במועד הנקוב", "stakes": "HIGH", "notes": "Formal legal summons — wording must be exact"},
  {"input_he": "החוזה ייחתם בתוך 14 ימי עסקים", "expected_he": "החוזה ייחתם בתוך 14 ימי עסקים", "stakes": "HIGH", "notes": "Exact legal timeframe"},
  // ... (98 more legal items)

  // --- Computer Science (100 items) ---
  {"input_he": "הוסף את הספרייה לקובץ ה-package.json", "expected_he": "הוסף את הספרייה לקובץ ה-package.json", "stakes": "MEDIUM", "notes": "Preserve technical term"},
  {"input_he": "הרץ את הפקודה npm install", "expected_he": "הרץ את הפקודה npm install", "stakes": "MEDIUM", "notes": "CLI command — unchanged"},
  // ... (98 more CS items)

  // --- Marketing (100 items) ---
  {"input_he": "הצטרפו עכשיו וקבלו הטבה ייחודית", "expected_he": "הצטרפו עכשיו וקבלו הטבה ייחודית", "stakes": "MEDIUM", "notes": "Persuasive CTA"},
  {"input_he": "אל תחמיצו את המבצע המיוחד", "expected_he": "אל תחמיצו את המבצע המיוחד", "stakes": "MEDIUM", "notes": "Urgency marketing"}
  // ... (98 more marketing items)
]
```