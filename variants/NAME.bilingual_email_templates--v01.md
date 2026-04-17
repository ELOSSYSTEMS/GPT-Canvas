<!-- 1. NOTIFICATIONS TEMPLATE (Shopify > Settings > Notifications) -->
<!-- Bilingual, Non-Conditional Order Confirmation Email -->

<!DOCTYPE html>
<html lang="he" dir="rtl">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <title>הזמנה {{ name }} אושרה | Order {{ name }} Confirmed</title>
    <style>
      body {
        direction: rtl;
        text-align: right;
        background-color: #F9F7F3 !important;
        font-family: 'Noto Sans Hebrew', 'Libre Franklin', sans-serif;
      }
      h1, h2, h3 {
        font-family: 'Lunasima', Georgia, serif;
        color: #101935;
        font-weight: 600;
        letter-spacing: 0.5px;
        margin-top: 0;
        margin-bottom: 16px;
        text-align: right;
      }
      p, li, td, span, a {
        font-family: 'Noto Sans Hebrew', 'Libre Franklin', sans-serif;
        color: #101935;
        font-size: 15px;
        line-height: 1.6;
      }
      .button__cell {
        background-color: {{ shop.email_accent_color }};
        border-radius: 6px;
        padding: 12px 20px;
        text-align: center;
      }
      .button__cell a {
        color: #ffffff;
        text-decoration: none;
        font-weight: 600;
      }
    </style>
  </head>
  <body>
    <h2>הזמנה אושרה | Order Confirmed</h2>
    <p>שלום {{ customer.first_name }},</p>
    <p>
      קיבלנו את ההזמנה שלך והיא כעת בעיבוד. <br>
      We've received your order and it's now being processed.
    </p>
    <p>
      תהליך ההרכבה והמסירה משתנה בהתאם למהדורה שהוזמנה. <br>
      The composition and delivery timeline depends on the edition you selected.
    </p>
    <p>
      תקבל/י מאיתנו עדכונים בהמשך. <br>
      You will receive further updates as we progress.
    </p>
    <div class="button__cell">
      <a href="{{ order_status_url }}">לצפייה בהזמנה | View your order</a>
    </div>
    <p>
      יש שאלות? השיבו למייל זה או כתבו לנו ב־<a href="mailto:{{ shop.email }}">{{ shop.email }}</a><br>
      Questions? Reply to this email or contact us at <a href="mailto:{{ shop.email }}">{{ shop.email }}</a>
    </p>
  </body>
</html>

<!-- ========================= -->
<!-- 2. TRANSLATE & ADAPT APP -->
<!-- Hebrew-only variant -->

<!DOCTYPE html>
<html lang="he" dir="rtl">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <title>הזמנה {{ name }} אושרה</title>
    <style>
      body {
        direction: rtl;
        text-align: right;
        background-color: #F9F7F3 !important;
        font-family: 'Noto Sans Hebrew', sans-serif;
      }
      h1, h2, h3 {
        font-family: 'Lunasima', serif;
        color: #101935;
        font-weight: 600;
        margin-top: 0;
        margin-bottom: 16px;
      }
      p, a {
        font-family: 'Noto Sans Hebrew', sans-serif;
        font-size: 15px;
        line-height: 1.6;
        color: #101935;
      }
      .button__cell {
        background-color: {{ shop.email_accent_color }};
        padding: 12px 20px;
        border-radius: 6px;
        text-align: center;
      }
      .button__cell a {
        color: #ffffff;
        font-weight: 600;
        text-decoration: none;
      }
    </style>
  </head>
  <body>
    <h2>הזמנתך התקבלה</h2>
    <p>
      שלום {{ customer.first_name }},<br>
      קיבלנו את ההזמנה שלך והיא נמצאת כעת בעיבוד.
    </p>
    <p>
      אנו נעדכן אותך כאשר הזר ייכנס לשלב הבא. זמן ההרכבה משתנה בהתאם למהדורה.
    </p>
    <div class="button__cell">
      <a href="{{ order_status_url }}">לצפייה בהזמנה</a>
    </div>
    <p>
      יש לך שאלה? כתוב/י לנו ל־<a href="mailto:{{ shop.email }}">{{ shop.email }}</a>
    </p>
  </body>
</html>