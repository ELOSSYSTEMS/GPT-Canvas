{% capture email_title %}הזמנה {{ name }} יצאה למשלוח{% endcapture %}
{% capture email_body %}
    ההזמנה שלך יצאה למשלוח ותגיע בקרוב.
{% endcapture %}

<!DOCTYPE html>
<html lang="he" dir="rtl">
  <head>
  <title>{{ email_title }}</title>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <meta name="viewport" content="width=device-width">
  <link rel="stylesheet" type="text/css" href="/assets/notifications/styles.css">
  <style>
    body, table {
        direction: rtl;
        text-align: right;
    }
    .order-list__product-description-cell {
        text-align: right;
    }
    .order-list__image-cell img {
        float: right;
    }
    .container, .content__cell, .section__cell, .footer__cell {
        text-align: right;
    }
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
                            <span class="order-number__text">
                              הזמנה {{ order_name }}
                            </span>
                          </td>
                        </tr>
                        {%- if po_number %}
                            <tr>
                              <td class="po-number__cell">
                                <span class="po-number__text">
                                  מספר הזמנת רכש #{{ po_number }}
                                </span>
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
              {% if order_status_url %}
                <table class="row actions">
  <tr>
    <td class="empty-line">&nbsp;</td>
  </tr>
  <tr>
    <td class="actions__cell">
      <table class="button main-action-cell">
        <tr>
          <td class="button__cell"><a href="{{ order_status_url }}" class="button__text">צפה בהזמנה שלך</a></td>
        </tr>
      </table>
      {% if shop.url %}
    <table class="link secondary-action-cell">
      <tr>
        <td class="link__cell">או <a href="{{ shop.url }}">בקרו בחנות שלנו</a></td>
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
              
              <p class="disclaimer__subtext">אם יש לך שאלות, השב למייל זה או צור קשר בכתובת <a href="mailto:{{ shop.email }}">{{ shop.email }}</a></p>
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