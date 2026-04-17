// ✅ dabroo-chat.js — Modular + Branching + User Data Capture

window.__dabrooUser = {};
window.__dabrooBranches = {
  ABOUT: [
    { role: 'system', text: 'Dabroo הוא עוזר אישי בעברית שנבנה במיוחד לעסקים ויוצרים ישראליים.' },
    { role: 'system', text: 'המטרה שלו היא לעזור לך לנסח, לדייק, ולתקשר בצורה הרבה יותר טבעית — בלי להרגיש כמו תרגום רובוטי.' },
    { role: 'system', text: 'רוצה לראות איך זה עובד? 🔽 תבחר אחד מהשלבים הבאים:' },
    {
      role: 'system',
      text: 'מה תרצה לעשות עכשיו?',
      options: [
        { label: 'לכתוב פוסט שיווקי', trigger: 'WRITE_POST' },
        { label: 'ללמוד איך לנסח פרומפט', trigger: 'LEARN_PROMPT' },
        { label: 'מה זה פרומפט בכלל?', trigger: 'WHAT_IS_PROMPT' }
      ]
    }
  ],
  WRITE_POST: [
    { role: 'system', text: 'בשמחה. נתחיל בקטן — על איזה נושא אתה רוצה לכתוב?' },
    { role: 'input', id: 'post_topic' },
    { role: 'system', text: 'מה הסגנון של הפוסט? מצחיק? מרגש? ענייני?' },
    { role: 'input', id: 'post_tone' },
    { role: 'system', text: 'ולאיזה קהל זה מיועד?' },
    { role: 'input', id: 'post_audience' },
    { role: 'system', text: 'הבנתי. הנה טיוטת הפוסט שלך — מותאמת ל{{post_audience}}, בסגנון {{post_tone}}:' },
    { role: 'system', text: '🌸 נושא: {{post_topic}} \n\n[כאן יבוא הפוסט השיווקי].' },
    {
      role: 'system',
      text: 'רוצה לנסות משהו אחר?',
      options: [
        { label: 'לכתוב פוסט נוסף', trigger: 'WRITE_POST' },
        { label: 'ללמוד איך לנסח פרומפט', trigger: 'LEARN_PROMPT' }
      ]
    }
  ],
  LEARN_PROMPT: [
    { role: 'system', text: 'לנסח פרומפט טוב זה כמו לתת הוראה מדויקת לחבר חכם. נתחיל?' },
    { role: 'system', text: 'שלושת העקרונות לפרומפט מוצלח הם: מטרה, קהל, והקשר.' },
    { role: 'system', text: 'אז בוא נבנה אחד יחד. מה אתה רוצה שהצ׳אט יעשה עבורך?' },
    { role: 'input', id: 'goal' },
    { role: 'system', text: 'למי זה מיועד? תאר לי את הקהל שלך בקצרה.' },
    { role: 'input', id: 'audience' },
    { role: 'system', text: 'יש הקשר שכדאי לי לדעת עליו? (למשל, חג, מבצע, קמפיין מסוים?)' },
    { role: 'input', id: 'context' },
    { role: 'system', text: 'פרפקט. הפרומפט שלך באנגלית המושלמת ייראה כך:' },
    { role: 'system', text: 'Write a {{goal}} for {{audience}}. The context is: {{context}}.' },
    {
      role: 'system',
      text: 'רוצה להמשיך ללמוד?',
      options: [
        { label: 'לכתוב פוסט', trigger: 'WRITE_POST' },
        { label: 'להתחיל מחדש', trigger: 'ABOUT' }
      ]
    }
  ],
  WHAT_IS_PROMPT: [
    { role: 'system', text: 'קודם כל — פרומפט הוא הנחייה. זה משפט שאתה כותב כדי לכוון את הצ׳אט מה לעשות.' },
    { role: 'system', text: 'למשל: ״תכתוב פוסט שיווקי לקהל של נשים עצמאיות על ניהול זמן״ — זו דוגמה לפרומפט.' },
    { role: 'system', text: 'צ׳אטג׳יפיטי לא "יודע" מה אתה רוצה. הוא רק מגיב למה שכתבת. לכן, ניסוח הפרומפט משפיע ישירות על איכות התוצאה.' },
    { role: 'system', text: 'מוכן לנסות אחד בעצמך?' },
    {
      role: 'system',
      text: 'מה תרצה לעשות עכשיו?',
      options: [
        { label: 'לכתוב פוסט', trigger: 'WRITE_POST' },
        { label: 'ללמוד איך לנסח פרומפט', trigger: 'LEARN_PROMPT' },
        { label: 'להתחיל מההתחלה', trigger: 'ABOUT' }
      ]
    }
  ]
};

// (rest of file remains unchanged)