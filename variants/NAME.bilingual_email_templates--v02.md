<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <title>{{ email_title }}</title>
    <style>
      body {
        direction: ltr;
        text-align: left;
        background-color: #F9F7F3 !important;
      }
      h1, h2, h3 {
        font-family: 'Lunasima', Georgia, serif;
        color: #101935;
        font-weight: 600;
        letter-spacing: 0.5px;
        margin-top: 0;
        margin-bottom: 16px;
      }
      p, li, td, span, a {
        font-family: 'Libre Franklin', 'Helvetica Neue', Arial, sans-serif;
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
        font-family: 'Libre Franklin', 'Helvetica Neue', Arial, sans-serif;
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
      {% if has_flagship and has_preserved %}
        Your order is confirmed — multiple bouquets, one refined delivery
      {% elsif has_flagship and not has_preserved %}
        Your floral experience begins now
      {% elsif has_preserved and not has_flagship %}
        Your bouquet is entering its preservation process
      {% else %}
        Thank you for your purchase
      {% endif %}
    {% endcapture %}

    {% capture email_body %}
      {% if has_flagship and has_preserved %}
        Your order includes both flagship and special-edition bouquets.  
        While some are available for immediate composition, others require time for careful preservation.  
        All bouquets will be delivered together, once every element is complete.  
        We’ll update you as soon as the final bouquet enters its design phase.
      {% elsif has_flagship and not has_preserved %}
        We’ve received your order and it’s now being composed by hand in our Tel Aviv studio.  
        Each stem is drawn from our curated botanical inventory and placed with care — no automation, no shortcuts.  
        Your bouquet is scheduled for completion within 24–48 hours. You’ll receive another update once it is handed to our delivery specialist.
      {% elsif has_preserved and not has_flagship %}
        We’ve received your order and have begun the preservation phase — a meticulous drying and preparation process designed to extend the life and beauty of your blooms.  
        This stage typically takes 7 to 10 business days, depending on the edition.  
        You’ll be updated again when your bouquet enters the design phase.
      {% else %}
        Thank you — your order has been received and is now in process.
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
                          Order {{ order_name }}
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
                                    <a href="{{ order_status_url }}" class="button__text">View Your Order</a>
                                  </td>
                                </tr>
                              </table>
                              <table class="link secondary-action-cell">
                                <tr>
                                  <td class="link__cell">
                                    or <a href="{{ shop.url }}">Visit Our Website</a>
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
                          Questions? Reply to this email or contact us at <a href="mailto:{{ shop.email }}">{{ shop.email }}</a>
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