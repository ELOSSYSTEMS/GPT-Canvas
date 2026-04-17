<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <title>Your bouquet is on its way</title>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Bona+Nova+SC&family=Libre+Franklin:wght@400;600&display=swap');

      body { direction: ltr; text-align: left; background-color: #F9F7F3 !important; }
      h1, h2, h3 {
        font-family: 'Bona Nova SC', Georgia, serif;
        color: #101935;
        font-weight: 600;
        margin-top: 0;
        margin-bottom: 16px;
        letter-spacing: 0.5px;
      }
      p, li, td, span, a {
        font-family: 'Libre Franklin', 'Helvetica Neue', Arial, sans-serif;
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
        font-family: 'Libre Franklin', 'Helvetica Neue', Arial, sans-serif;
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

<h2>Your bouquet is on its way</h2>

<p>Your bouquet is scheduled for delivery today and will be hand-delivered to your door.</p>
<p>Later today, you’ll receive a WhatsApp message from our courier with an exact delivery window.</p>

<p>If you have any questions, feel free to reply to this email or contact us at <a href="mailto:info@foreverflowers.co.il">info@foreverflowers.co.il</a></p>

{% if order_status_url %}
  <table class="row actions" width="100%" style="text-align:center; padding: 40px 0;">
    <tr>
      <td class="actions__cell">
        <a href="{{ order_status_url }}" class="button__text">View your order</a>
      </td>
    </tr>
    {% if shop.url %}
    <tr>
      <td class="actions__cell">
        <span class="link__text">or <a href="{{ shop.url }}" class="link__text">Visit our store</a></span>
      </td>
    </tr>
    {% endif %}
  </table>
{% endif %}

<h3>Items in this shipment</h3>
<table class="row">
  {% for line in fulfillment.fulfillment_line_items %}
    <tr class="order-list__item">
      <td class="order-list__item__cell">
        <table>
          <tr>
            <td class="order-list__image-cell">
              {% if line.line_item.image %}
                <img src="{{ line.line_item | img_url: 'compact_cropped' }}" align="left" width="60" height="60" class="order-list__product-image"/>
              {% else %}
                <div class="order-list__no-image-cell">
                  <img src="{{ 'notifications/no-image.png' | shopify_asset_url }}" align="left" width="60" height="60" class="order-list__no-product-image"/>
                </div>
              {% endif %}
            </td>
            <td class="order-list__product-description-cell">
              <span class="order-list__item-title">{{ line.line_item.title }} × {{ line.quantity }}</span><br/>
              {% if line.line_item.variant.title != 'Default Title' %}
                <span class="order-list__item-variant">{{ line.line_item.variant.title }}</span>
              {% endif %}
            </td>
          </tr>
        </table>
      </td>
    </tr>
  {% endfor %}
</table>

</body>
</html>