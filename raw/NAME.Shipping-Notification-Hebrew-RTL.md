{% if fulfillment.item_count == item_count %} 
  {% capture email_title %}ההזמנה שלך בדרך{% endcapture %}
  {% capture email_body %}ההזמנה שלך יצאה למשלוח. עקוב אחר הקישור למעקב כדי לבדוק את סטטוס המשלוח.{% endcapture %}
{% elsif fulfillment.item_count > 1 %} 
  {% if fulfillment_status == 'fulfilled' %}
    {% capture email_title %}הפריטים האחרונים בהזמנה שלך בדרך{% endcapture %}
    {% capture email_body %}הפריטים האחרונים בהזמנה שלך יצאו למשלוח. עקוב אחר הקישור למעקב כדי לבדוק את סטטוס המשלוח.{% endcapture %}
  {% else %}
    {% capture email_title %}חלק מהפריטים בהזמנה שלך בדרך{% endcapture %}
    {% capture email_body %}חלק מהפריטים בהזמנה שלך יצאו למשלוח. עקוב אחר הקישור למעקב כדי לבדוק את סטטוס המשלוח.{% endcapture %}
  {% endif %}
{% else %} 
  {% if fulfillment_status == 'fulfilled' %}
    {% capture email_title %}הפריט האחרון בהזמנה שלך בדרך{% endcapture %}
    {% capture email_body %}הפריט האחרון בהזמנה שלך יצא למשלוח. עקוב אחר הקישור למעקב כדי לבדוק את סטטוס המשלוח.{% endcapture %}
  {% else %}
    {% capture email_title %}פריט אחד בהזמנה שלך בדרך{% endcapture %}
    {% capture email_body %}פריט אחד בהזמנה שלך יצא למשלוח. עקוב אחר הקישור למעקב כדי לבדוק את סטטוס המשלוח.{% endcapture %}
  {% endif %}
{% endif %}

{% capture email_emphasis %}תאריך אספקה משוער: <strong>{{fulfillment.estimated_delivery_at | date: format: 'date'}}</strong>{% endcapture %}

<!DOCTYPE html>
<html lang="he" dir="rtl">
  <head>
  <title>{{ email_title }}</title>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <meta name="viewport" content="width=device-width">
  <link rel="stylesheet" type="text/css" href="/assets/notifications/styles.css">
  <style>
    body { direction: rtl; text-align: right; }
    .button__cell { background: {{ shop.email_accent_color }}; }
    a, a:hover, a:active, a:visited { color: {{ shop.email_accent_color }}; }
  </style>
</head>
<body>
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
                      <h1 class="shop-name__text">
                        <a href="{{shop.url}}">{{ shop.name }}</a>
                      </h1>
                    </td>
                    <td>
                      <span class="order-number__text">
                        הזמנה {{ order_name }}
                      </span>
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
                                <td class="button__cell"><a href="{{ order_status_url }}" class="button__text">צפייה בהזמנה</a></td>
                              </tr>
                            </table>
                            {% if shop.url %}
                            <table class="link secondary-action-cell">
                              <tr>
                                <td class="link__cell">או <a href="{{ shop.url }}">כניסה לאתר</a></td>
                              </tr>
                            </table>
                            {% endif %}
                          </td>
                        </tr>
                      </table>
                      {% endif %}
                      {% if fulfillment.tracking_numbers.size > 0 %}
                      <p class="disclaimer__subtext">
                        <br/>
                        {% if fulfillment.tracking_numbers.size == 1 and fulfillment.tracking_company and fulfillment.tracking_url %}
                          מספר מעקב {{ fulfillment.tracking_company }}: <a href="{{ fulfillment.tracking_url }}">{{ fulfillment.tracking_numbers.first }}</a>
                        {% elsif fulfillment.tracking_numbers.size == 1 %}
                          מספר מעקב: {{ fulfillment.tracking_numbers.first }}
                        {% else %}
                          מספרי מעקב {{ fulfillment.tracking_company }}:<br />
                          {% for tracking_number in fulfillment.tracking_numbers %}
                            {% if fulfillment.tracking_urls[forloop.index0] %}
                              <a href="{{ fulfillment.tracking_urls[forloop.index0] }}">
                                {{ tracking_number }}
                              </a>
                            {% else %}
                                {{ tracking_number }}
                            {% endif %}<br/>
                          {% endfor %}
                        {% endif %}
                      </p>
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
                      <p class="disclaimer__subtext">
                        יש לכם שאלות? השיבו למייל זה או צרו קשר בכתובת <a href="mailto:{{ shop.email }}">{{ shop.email }}</a>
                      </p>
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