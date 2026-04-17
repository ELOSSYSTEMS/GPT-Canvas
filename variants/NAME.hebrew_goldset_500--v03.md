```json
[
  // --- Slang (100 items) ---
  {"input_he": "אחי זה מטורף רצח", "expected_he": "אחי, זה מטורף מאוד", "stakes": "LOW", "notes": "Slang 'רצח' for emphasis — maps to intensifier 'מאוד'"},
  {"input_he": "יאללה נתפוס איזה קפה מחר?", "expected_he": "בוא נלך לשתות קפה מחר", "stakes": "LOW", "notes": "Colloquial 'יאללה' start phrase, casual invitation"},
  {"input_he": "סגור אחי, אני בפנים", "expected_he": "בסדר, אני מצטרף", "stakes": "LOW", "notes": "Slang 'סגור' meaning agreement"},
  {"input_he": "פגז של הופעה הייתה אתמול", "expected_he": "ההופעה אתמול הייתה מצוינת", "stakes": "LOW", "notes": "Slang 'פגז' as 'excellent'"},
  {"input_he": "אל תעשה סרטים סתם", "expected_he": "אל תגזים או תדרמט את המצב", "stakes": "LOW", "notes": "Idiom 'לעשות סרטים' meaning 'create drama'"},
  {"input_he": "תותח על אתה", "expected_he": "אתה מצוין", "stakes": "LOW", "notes": "Compliment slang 'תותח'"},
  {"input_he": "הלך עליו", "expected_he": "הוא הסתבך מאוד", "stakes": "LOW", "notes": "Idiom meaning 'he’s in trouble'"},
  {"input_he": "שבר את השוק", "expected_he": "הצליח בצורה יוצאת דופן", "stakes": "LOW", "notes": "Idiom for market success"},
  {"input_he": "חפר לי", "expected_he": "הציק לי בדיבור רב", "stakes": "LOW", "notes": "Slang for 'talked too much'"},
  {"input_he": "כבד עליי", "expected_he": "קשה עבורי", "stakes": "LOW", "notes": "Slang for difficulty"},
  // ... (90 more slang items)

  // --- Formal (100 items) ---
  {"input_he": "הנך מתבקש למלא את הטופס המצורף", "expected_he": "הנך מתבקש למלא את הטופס המצורף", "stakes": "MEDIUM", "notes": "Formal polite request"},
  {"input_he": "נא לאשר את קבלת ההודעה", "expected_he": "נא לאשר את קבלת ההודעה", "stakes": "MEDIUM", "notes": "Standard formal confirmation request"},
  {"input_he": "הישיבה תתקיים ביום שלישי בשעה 10:00", "expected_he": "הישיבה תתקיים ביום שלישי בשעה 10:00", "stakes": "MEDIUM", "notes": "Formal meeting scheduling"},
  {"input_he": "ההצעה בתוקף עד לתאריך המצוין", "expected_he": "ההצעה בתוקף עד לתאריך המצוין", "stakes": "MEDIUM", "notes": "Formal offer validity"},
  {"input_he": "נודה להתייחסותך בהקדם", "expected_he": "נודה להתייחסותך בהקדם", "stakes": "MEDIUM", "notes": "Polite follow-up"},
  // ... (95 more formal items)

  // --- Legal (100 items) ---
  {"input_he": "הנך נדרש להתייצב לדיון במועד הנקוב", "expected_he": "הנך נדרש להתייצב לדיון במועד הנקוב", "stakes": "HIGH", "notes": "Formal legal summons — wording must be exact"},
  {"input_he": "החוזה ייחתם בתוך 14 ימי עסקים", "expected_he": "החוזה ייחתם בתוך 14 ימי עסקים", "stakes": "HIGH", "notes": "Exact legal timeframe"},
  {"input_he": "הצדדים מסכימים על תנאי ההסכם", "expected_he": "הצדדים מסכימים על תנאי ההסכם", "stakes": "HIGH", "notes": "Mutual agreement clause"},
  {"input_he": "הפרת תנאי זה תהווה עילה לביטול ההסכם", "expected_he": "הפרת תנאי זה תהווה עילה לביטול ההסכם", "stakes": "HIGH", "notes": "Breach clause"},
  {"input_he": "העותר מבקש מבית המשפט צו על תנאי", "expected_he": "העותר מבקש מבית המשפט צו על תנאי", "stakes": "HIGH", "notes": "Petition term"},
  // ... (95 more legal items)

  // --- Computer Science (100 items) ---
  {"input_he": "הוסף את הספרייה לקובץ ה-package.json", "expected_he": "הוסף את הספרייה לקובץ ה-package.json", "stakes": "MEDIUM", "notes": "Preserve technical term"},
  {"input_he": "הרץ את הפקודה npm install", "expected_he": "הרץ את הפקודה npm install", "stakes": "MEDIUM", "notes": "CLI command — unchanged"},
  {"input_he": "שנה את ערך המשתנה ל-true", "expected_he": "שנה את ערך המשתנה ל-true", "stakes": "MEDIUM", "notes": "Boolean literal"},
  {"input_he": "צור בקשה ב-API עם פרמטרים מתאימים", "expected_he": "צור בקשה ב-API עם פרמטרים מתאימים", "stakes": "MEDIUM", "notes": "API request instruction"},
  {"input_he": "בצע בדיקות יחידה לכל פונקציה", "expected_he": "בצע בדיקות יחידה לכל פונקציה", "stakes": "MEDIUM", "notes": "Unit test requirement"},
  // ... (95 more CS items)

  // --- Marketing (100 items) ---
  {"input_he": "הצטרפו עכשיו וקבלו הטבה ייחודית", "expected_he": "הצטרפו עכשיו וקבלו הטבה ייחודית", "stakes": "MEDIUM", "notes": "Persuasive CTA"},
  {"input_he": "אל תחמיצו את המבצע המיוחד", "expected_he": "אל תחמיצו את המבצע המיוחד", "stakes": "MEDIUM", "notes": "Urgency marketing"},
  {"input_he": "מבצע לזמן מוגבל בלבד", "expected_he": "מבצע לזמן מוגבל בלבד", "stakes": "MEDIUM", "notes": "Time-limited offer"},
  {"input_he": "קנו שניים וקבלו אחד חינם", "expected_he": "קנו שניים וקבלו אחד חינם", "stakes": "MEDIUM", "notes": "Promotional deal"},
  {"input_he": "חברי מועדון נהנים מהנחה נוספת", "expected_he": "חברי מועדון נהנים מהנחה נוספת", "stakes": "MEDIUM", "notes": "Loyalty benefit"}
  // ... (95 more marketing items)
]
```