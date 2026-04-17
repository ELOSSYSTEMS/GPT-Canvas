```json
{
  "id": "intent.classifier.v1",
  "description": "Maps user input to best-matching persona ID based on Hebrew-first keyword and embeddings.",
  "type": "classifier",
  "version": "1.2-hebrew-priority",
  "matching_strategy": "hybrid",
  "pipeline": ["pattern_match_hebrew_first", "semantic_embedding", "fallback_to_generalist"],
  "personas": [
    {
      "persona_id": "P01.LGLS",
      "keywords": [
        "משמעות", "כיוון", "תקיעות", "זהות", "עוצמה", "קיום", "חוסר ביטחון", "ייעוד"
      ]
    },
    {
      "persona_id": "P02.HWCN",
      "keywords": [
        "בריאות", "עייפות", "חרדה", "נפיחות", "הרגלים", "תזונה", "שינה", "גוף", "כאב", "עור"
      ]
    },
    {
      "persona_id": "P03.CRED",
      "keywords": [
        "קריירה", "עבודה", "הייטק", "קורות חיים", "תואר", "השכלה", "ראיון", "שכר", "משרה"
      ]
    },
    {
      "persona_id": "P04.HACK",
      "keywords": [
        "באג", "קוד", "GPT", "בינה מלאכותית", "שגיאה", "אוטומציה", "אפליקציה", "סיומת", "בוט"
      ]
    },
    {
      "persona_id": "P05.MNGR",
      "keywords": [
        "תמחור", "לקוחות", "שיווק", "עסקים", "מכירות", "עצמאי", "סטודיו", "יזמות", "ניהול"
      ]
    },
    {
      "persona_id": "P06.MNDF",
      "keywords": [
        "מיינדפולנס", "נשימה", "חרדה", "הווה", "מודעות", "איזון רגשי", "דיכאון", "שקט פנימי", "עצמי", "שינה לא רגועה"
      ]
    },
    {
      "persona_id": "P07.RLTV",
      "keywords": [
        "זוגיות", "פרידה", "אקס", "גבולות", "אהבה", "רעילה", "קשר", "בדידות", "דייט"
      ]
    },
    {
      "persona_id": "P08.DGTL",
      "keywords": [
        "תוכן", "ריל", "כיתוב", "טיקטוק", "וידאו", "טון מותג", "סטוריטלינג", "קמפיין", "פוסט"
      ]
    },
    {
      "persona_id": "P09.CULT",
      "keywords": [
        "ישראלי", "סלנג", "תרבות", "עולה חדש", "התנהגות", "שוק", "הווי", "מנטליות"
      ]
    },
    {
      "persona_id": "P10.FINZ",
      "keywords": [
        "תקציב", "כסף", "משכנתא", "קריפטו", "חיסכון", "יוקר מחיה", "פנסיה", "חשבונות"
      ]
    },
    {
      "persona_id": "P99.GNRL",
      "fallback": true
    }
  ],
  "thresholds": {
    "semantic_match_score": 0.82,
    "fallback_trigger_score": 0.65
  }
}
```