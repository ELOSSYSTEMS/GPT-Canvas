<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <title>Your order is confirmed</title>
    <style>
      body {
        direction: ltr;
        text-align: left;
        background-color: #F9F7F3 !important;
      }
      h1, h2, h3 {
        font-family: 'Bona Nova SC', Georgia, serif;
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

{% capture email_title %}
  Your bouquet is on its way — thank you for your patience
{% endcapture %}

{% capture email_body %}
<p>Your order has completed its studio preparation and has now been handed off to our delivery specialist.</p>

{% if fulfillment.tracking_number %}
  <p>
    Here is your tracking information:<br>
    {{ fulfillment.tracking_company | default: "Delivery partner" }} tracking number: {{ fulfillment.tracking_number }}
  </p>
{% endif %}

<p>As a reminder, our editions vary in their design timelines:</p>
<ul>
  <li>Flagship Edition — delivered within 24–48 hours</li>
  <li>Seasonal & Devotion Editions — delivered within 7–10 business days</li>
  <li>Art Edition — delivered within 14 business days</li>
  <li>Bespoke Bouquets — made to order within 14–21 business days</li>
</ul>

<p>You will receive a final confirmation once delivery is complete.</p>

<p>Each bouquet is designed and composed by hand in our Tel Aviv studio — with care, not haste.</p>

<p>If you have any questions, reply to this email or contact us at <a href="mailto:info@foreverflowers.co.il">info@foreverflowers.co.il</a></p>
{% endcapture %}

<h2>{{ email_title }}</h2>
{{ email_body }}

{% if order_status_url %}
  <table class="row actions">
    <tr><td class="empty-line">&nbsp;</td></tr>
    <tr>
      <td class="actions__cell">
        <table class="button main-action-cell">
          <tr>
            <td class="button__cell"><a href="{{ order_status_url }}" class="button__text">View your order</a></td>
          </tr>
        </table>
        {% if shop.url %}
          <table class="link secondary-action-cell">
            <tr>
              <td class="link__cell">or <a href="{{ shop.url }}">Visit our store</a></td>
            </tr>
          </table>
        {% endif %}
      </td>
    </tr>
  </table>
{% endif %}

  </body>
</html>