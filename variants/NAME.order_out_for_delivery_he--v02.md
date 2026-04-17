{% capture email_title %}הזמנה {{ name }} בדרך אליך{% endcapture %}
{% capture email_body %}
    ההזמנה שלך יצאה למשלוח ותגיע בקרוב.
{% endcapture %}

<!DOCTYPE html>
<html lang="he" dir="rtl">
  <head>
  <title>{{ email_title }}</title>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <meta name="viewport" content="width=device-width">
  <link rel="stylesheet" type="text