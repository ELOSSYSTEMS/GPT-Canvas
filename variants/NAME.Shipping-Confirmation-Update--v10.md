<!DOCTYPE html>
<html lang="he" dir="rtl">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <title>ההזמנה שלך מתקדמת</title>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Lunisima&family=Noto+Sans+Hebrew:wght@400;600&display=swap');

      body { direction: rtl; text-align: right; background-color: #F9F7F3 !important; }
      h1, h2, h3 {
        font-family: 'Lunisima', sans-serif;
        color: #101935;
        font-weight: 600;
        margin-top: 0;
        margin-bottom: 16px;
        letter-spacing: 0.5px;
      }
      p, li, td, span, a {
        font-family: 'Noto Sans Hebrew', 'Helvetica Neue', Arial, sans-serif;
        color: #101935;
        font-size: 15px;
        line-height: 1.6;
      }
      .button__text {
        background-color: {{ shop.email_accent_color }};
        color: #ffffff;
        padding: 12px 24px;
        text-decoration: none;
        font-weight: 600;
        border-radius: 6px;
        display: inline-block;
      }
      .link__text {
        font-family: 'Noto Sans Hebrew', 'Helvetica Neue', Arial, sans-serif;
        font-size: 15px;
        color: {{ shop.email_accent_color }};
        text-decoration: underline;
        font-weight: 600;
        display: inline-block;
        margin-top: 12px;
      }
    </style>
  </head>
  <body>

<table class="header" width="100%" style="text-align:center; padding: 40px 0;">
  <tr>
    <td>
      {% if shop.email_logo_url %}
        <img src="{{ shop.email_logo_url }}" alt="{{ shop.name }}" width="{{ shop.email_logo_width }}" style="max-width: 240px;">
      {% else %}
        <h1>{{ shop.name }}</h1>
      {% endif %}
    </td>
  </tr>
</table>

<h2>ההזמנה שלך מתקדמת בתהליך ההכנה</h2>

<p>ההזמנה שלך עברה לשלב הבא בתהליך ההכנה.</p>
<p>במקרה של מהדורות עונתיות, מהדורת הקדשה, מהדורת האמנות או זר בהזמנה אישית — שלב הייבוש והטיפול הושלם, והזר עובר כעת לעיצוב ידני בסטודיו שלנו.</p>
<p>במקרה של מהדורת הדגל — הזר מוכן ונמסר לשירות השליחויות.</p>
<p>נשלח אליך עדכון נוסף כאשר העיצוב יסתיים או כשהמשלוח יצא לדרכו.</p>

<p>כל זר מורכב בעבודת יד, בדיוק ובקפדנות — ללא פשרות.</p>

<p>אם יש לך שאלות, ניתן להשיב למייל זה או ליצור קשר ב־<a href="mailto:info@foreverflowers.co.il">info@foreverflowers.co.il</a></p>

{% if order_status_url %}
  <table class="row actions" width="100%" style="text-align:center; padding: 40px 0;">
    <tr>
      <td class="actions__cell">
        <a href="{{ order_status_url }}" class="button__text">צפה/י בהזמנה</a>
      </td>
    </tr>
    {% if shop.url %}
    <tr>
      <td class="actions__cell">
        <span class="link__text">או <a href="{{ shop.url }}" class="link__text">בקר/י באתר</a></span>
      </td>
    </tr>
    {% endif %}
  </table>
{% endif %}

  </body>
</html>