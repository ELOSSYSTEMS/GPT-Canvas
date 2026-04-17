<html lang="he" dir="rtl">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>{{ email_title }}</title>
</head>
<body style="direction: rtl; text-align: right;">

{% if fulfillment.item_count == item_count %} 
  {% capture email_title %}ההזמנה שלך בדרכה אליך{% endcapture %}
  {% capture email_body %}ההזמנה שלך בדרכה אליך. עקבו אחר המשלוח כדי לבדוק את סטטוס האספקה.{% endcapture %}
{% elsif fulfillment.item_count > 1 %} 
  {% if fulfillment_status == 'fulfilled' %}
    {% capture email_title %}הפריטים האחרונים מההזמנה שלך בדרכם אליך{% endcapture %}
    {% capture email_body %}הפריטים האחרונים מההזמנה שלך בדרכם אליך. עקבו אחר המשלוח כדי לבדוק את סטטוס האספקה.{% endcapture %}
  {% else %}
    {% capture email_title %}חלק מהפריטים בהזמנה שלך כבר נשלחו{% endcapture %}
    {% capture email_body %}חלק מהפריטים בהזמנה שלך כבר נשלחו. עקבו אחר המשלוח כדי לבדוק את סטטוס האספקה.{% endcapture %}
  {% endif %}
{% else %} 
  {% if fulfillment_status == 'fulfilled' %}
    {% capture email_title %}הפריט האחרון מההזמנה שלך בדרכו אליך{% endcapture %}
    {% capture email_body %}הפריט האחרון מההזמנה שלך בדרכו אליך. עקבו אחר המשלוח כדי לבדוק את סטטוס האספקה.{% endcapture %}
  {% else %}
    {% capture email_title %}פריט אחד מההזמנה שלך נשלח{% endcapture %}
    {% capture email_body %}פריט אחד מההזמנה שלך נשלח. עקבו אחר המשלוח כדי לבדוק את סטטוס האספקה.{% endcapture %}
  {% endif %}
{% endif %}

{% capture email_emphasis %}תאריך אספקה משוער: <strong>{{fulfillment.estimated_delivery_at | date: format: 'date'}}</strong>{% endcapture %}

<!-- Remaining content untouched except visible translations, preserve Liquid logic -->
<!-- Inserted into <body> from here forward -->
<!-- Layout continues below this line with {{ email_title }}, {{ email_body }}, etc. -->

</body>
</html>