// Great! Here's what we’ll do next, in this exact order:

---

## ✅ 1. User Flow Capture (Name, Use Case, Email)

We'll add a **structured mid-chat capture** that feels natural:

### 🔹 Flow Design:
Each branch will auto-trigger questions at specific points:

```js
{ role: 'system', text: 'רגע לפני שממשיכים, איך קוראים לך?' },
{ role: 'input', id: 'name' },
{ role: 'system', text: 'תודה {{name}}, ומה הסיבה העיקרית שבגללה את.ה משתמש.ת בצ׳אטג׳יפיטי?' },
{ role: 'input', id: 'use_case' },
{ role: 'system', text: 'ולסיום — איך נוכל ליצור איתך קשר?' },
{ role: 'input', id: 'email' },
{ role: 'system', text: '📩 תודה, {{name}}. ניצור איתך קשר בהקדם!' }
```

### 🔹 Implementation:
We’ll update `dabroo-chat.js` to:
- Detect role `input`
- Render custom input UI
- Store answers in a global `window.__dabrooUser` object
- Replace `{{variable}}` inside system messages dynamically

---

## ✅ 2. Sidebar Links as Global Blocks

We'll convert the sidebar to **global link blocks** so they’re reusable across all modular pages.

### 🔹 Add to `sections/sidebar.liquid`
```liquid
{% schema %}
{
  "name": "Sidebar Navigation",
  "settings": [],
  "blocks": [
    {
      "type": "link",
      "name": "Sidebar Link",
      "settings": [
        { "type": "text", "id": "title", "label": "Title" },
        { "type": "url", "id": "url", "label": "Link" },
        { "type": "image_picker", "id": "icon", "label": "Icon (optional)" }
      ]
    }
  ]
}
{% endschema %}
```
Then we’ll render it inside `dabroo-home` like:
```liquid
{% section 'sidebar' %}
```

---

## ✅ 3. Conversation Branching Logic

We’ll enhance the chat logic to allow **clickable branches** after a system response.

### 🔹 Example:
```js
{ role: 'system', text: 'מה מעניין אותך עכשיו?', options: [
  { label: 'איך לנסח פוסט טוב', trigger: 'WRITE_POST' },
  { label: 'הסבר על דברו', trigger: 'ABOUT' }
] }
```

When the user clicks an option:
- The label is typed into the input
- Predefined branch (`WRITE_POST`, etc.) is loaded from `window.__dabrooBranches`

### 🧪 Demo Branch: "מה זה Dabroo AI?"
```js
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
        { label: 'ללמוד איך לנסח פרומפט', trigger: 'LEARN_PROMPT' }
      ]
    }
  ]
};
```

---

Let me know if you'd like me to generate the updated `dabroo-chat.js` logic now or add more branches!