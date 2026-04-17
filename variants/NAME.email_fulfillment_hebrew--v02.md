<html lang="he" dir="rtl">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>{{ email_title }}</title>
  <link rel="stylesheet" type="text/css" href="/assets/notifications/styles.css">
  <style>
    .button__cell { background: {{ shop.email_accent_color }}; }
    a, a:hover, a:active, a:visited { color: {{ shop.email_accent_color }}; }
  </style>
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

<table class="body">
  <tr>
    <td>
      <table class="header row">
        <tr>
          <td class="header__cell">
            <center>
              <table class="container">
                <tr>
                  <td>
                    <table class="row">
                      <tr>
                        <td class="shop-name__cell">
                          {%- if shop.email_logo_url %}
                            <img src="{{shop.email_logo_url}}" alt="{{ shop.name }}" width="{{ shop.email_logo_width }}">
                          {%- else %}
                            <h1 class="shop-name__text">
                              <a href="{{shop.url}}">{{ shop.name }}</a>
                            </h1>
                          {%- endif %}
                        </td>
                        <td>
                          <table class="order-po-number__container">
                            <tr>
                              <td class="order-number__cell">
                                <span class="order-number__text">הזמנה {{ order_name }}</span>
                              </td>
                            </tr>
                            {%- if po_number %}
                              <tr>
                                <td class="po-number__cell">
                                  <span class="po-number__text">מספר הזמנת רכש #{{ po_number }}</span>
                                </td>
                              </tr>
                            {%- endif %}
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </center>
          </td>
        </tr>
      </table>
      <table class="row content">
        <tr>
          <td class="content__cell">
            <center>
              <table class="container">
                <tr>
                  <td>
                    <h2>{{ email_title }}</h2>
                    <p>{{ email_body }}</p>
                    {% if fulfillment.estimated_delivery_at %}
                      <p>{{ email_emphasis }}</p>
                    {% endif %}
                    {% if order_status_url %}
                      <table class="row actions">
                        <tr><td class="empty-line">&nbsp;</td></tr>
                        <tr>
                          <td class="actions__cell">
                            <table class="button main-action-cell">
                              <tr>
                                <td class="button__cell">
                                  <a href="{{ order_status_url }}" class="button__text">צפייה בהזמנה</a>
                                </td>
                              </tr>
                            </table>
                            {% if shop.url %}
                              <table class="link secondary-action-cell">
                                <tr>
                                  <td class="link__cell">או <a href="{{ shop.url }}">מעבר לחנות</a></td>
                                </tr>
                              </table>
                            {% endif %}
                          </td>
                        </tr>
                      </table>
                    {% endif %}
                  </td>
                </tr>
              </table>
            </center>
          </td>
        </tr>
      </table>
      <table class="row footer">
        <tr>
          <td class="footer__cell">
            <center>
              <table class="container">
                <tr>
                  <td>
                    <p class="disclaimer__subtext">אם יש לך שאלות, ניתן להשיב למייל זה או לפנות אלינו בכתובת <a href="mailto:{{ shop.email }}">{{ shop.email }}</a></p>
                  </td>
                </tr>
              </table>
            </center>
          </td>
        </tr>
      </table>
      <img src="{{ 'notifications/spacer.png' | shopify_asset_url }}" class="spacer" height="1" />
    </td>
  </tr>
</table>
</body>
</html>