<!DOCTYPE html>
<html lang="he" dir="rtl">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <title>{{ email_title }}</title>
    <link rel="stylesheet" type="text/css" href="/assets/notifications/styles.css">
    <style>
      body {
        direction: rtl;
        text-align: right;
      }
      .button__cell {
        background: {{ shop.email_accent_color }};
      }
      a, a:hover, a:active, a:visited {
        color: {{ shop.email_accent_color }};
      }
    </style>
  </head>
  <body>
    {% capture email_title %}
      {% if has_pending_payment %}
        תודה על ההזמנה!
      {% else %}
        תודה על הרכישה!
      {% endif %}
    {% endcapture %}

    {% capture email_body %}
      {% if has_pending_payment %}
        {% if buyer_action_required %}
          תקבלו מייל אישור לאחר השלמת התשלום.
        {% else %}
          התשלום שלכם בעיבוד. תקבלו מייל כאשר ההזמנה תאושר.
        {% endif %}
      {% else %}
        {% if requires_shipping %}
        {% case delivery_method %}
            {% when 'pick-up' %}
              תקבלו מייל כאשר ההזמנה תהיה מוכנה לאיסוף.
            {% when 'local' %}
              שלום {{ customer.first_name }}, אנחנו מכינים את ההזמנה למשלוח.
            {% else %}
              ההזמנה שלכם מוכנה למשלוח. נודיע כאשר תצא לדרך.
        {% endcase %}

        {% if delivery_instructions != blank  %}
          <p><b>הוראות משלוח:</b> {{ delivery_instructions }}</p>
        {% endif %}
        {% if consolidated_estimated_delivery_time %}
          {% if has_multiple_delivery_methods %}
            <h3 class="estimated_delivery__title">זמן אספקה משוער</h3>
            <p>{{ consolidated_estimated_delivery_time }}</p>
          {% else %}
            <p>
              זמן אספקה משוער: <b>{{ consolidated_estimated_delivery_time }}</b>
            </p>
          {% endif %}
        {% endif %}
        {% endif %}
      {% endif %}

      {% assign gift_card_line_items = line_items | where: "gift_card" %}
      {% assign found_gift_card_with_recipient_email = false %}
      {% for line_item in gift_card_line_items %}
        {% if line_item.properties["__shopify_send_gift_card_to_recipient"] and line_item.properties["Recipient email"] %}
          {% assign found_gift_card_with_recipient_email = true %}
          {% break %}
        {% endif %}
      {% endfor %}
      {% if found_gift_card_with_recipient_email %}
        <p>מקבל/ת כרטיס המתנה יקבל/תקבל מייל עם הקוד האישי.</p>
      {% elsif gift_card_line_items.first %}
        <p>תקבלו מיילים נפרדים עבור כרטיסי המתנה.</p>
      {% endif %}
    {% endcapture %}

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
                        <table class="row actions">
                          <tr>
                            <td class="actions__cell">
                              <table class="button main-action-cell">
                                <tr>
                                  <td class="button__cell">
                                    <a href="{{ order_status_url }}" class="button__text">צפייה בהזמנה</a>
                                  </td>
                                </tr>
                              </table>
                              <table class="link secondary-action-cell">
                                <tr>
                                  <td class="link__cell">
                                    או <a href="{{ shop.url }}">כניסה לאתר</a>
                                  </td>
                                </tr>
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
        </td>
      </tr>
    </table>
  </body>
</html>