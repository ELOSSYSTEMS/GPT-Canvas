<!DOCTYPE html>
<html lang="he" dir="rtl">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <title>ההזמנה שלך התקבלה</title>
    <style>
      body {
        direction: rtl;
        text-align: right;
        background-color: #F9F7F3 !important;
      }
      h1, h2, h3 {
        font-family: 'Lunasima', sans-serif;
        color: #101935;
        font-weight: 600;
        letter-spacing: 0.5px;
        margin-top: 0;
        margin-bottom: 16px;
      }
      p, li, td, span, a {
        font-family: 'Noto Sans Hebrew', sans-serif;
        color: #101935;
        font-size: 15px;
        line-height: 1.6;
      }
      .button__cell {
        background: {{ shop.email_accent_color }};
      }
      a, a:hover, a:active, a:visited {
        color: {{ shop.email_accent_color }};
      }
      .btn, .button, a.button {
        background-color: #B09B8A !important;
        color: #101935 !important;
        font-family: 'Noto Sans Hebrew', sans-serif;
        font-weight: 600;
        padding: 12px 20px;
        text-decoration: none;
        border-radius: 6px;
        display: inline-block;
      }
      .btn:hover {
        opacity: 0.9;
      }
    </style>
  </head>
  <body>
    {% capture email_title %}
      ההזמנה שלך התקבלה
    {% endcapture %}

    {% capture email_body %}
      <p>תודה שבחרת ב־Forever Flowers.</p>

      <p>ההזמנה שלך התקבלה ומטופלת כעת. הקולקציות שלנו כוללות מהדורות בעבודת יד, שכל אחת מהן מלווה בלוחות זמנים שונים להרכבה:</p>

      <ul>
        <li><strong>מהדורת הדגל</strong> — נמסרת תוך 24–48 שעות</li>
        <li><strong>מהדורות עונתיות ומהדורת הקדשה</strong> — מורכבות תוך 7–10 ימי עסקים</li>
        <li><strong>מהדורת האמנות</strong> — מורכבת תוך 14 ימי עסקים</li>
        <li><strong>זרים בהזמנה אישית</strong> — מורכבים לפי הזמנה תוך 14–21 ימי עסקים</li>
      </ul>

      <p>תקבלו עדכון נוסף כאשר הזר שלכם ייכנס לשלב העיצוב הסופי או המשלוח.</p>

      <p>כל זר מורכב בעבודת יד בסטודיו שלנו בתל אביב, בדיוק ובקפדנות.</p>
    {% endcapture %}

    <!-- Insert layout or rendering logic for email_title and email_body here -->
  </body>
</html>