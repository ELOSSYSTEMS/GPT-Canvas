<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <title>Your bouquet is on its way</title>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Lunasima&family=Libre+Franklin:wght@400;600&display=swap');

      body { direction: ltr; text-align: left; background-color: #F9F7F3 !important; }
      h1, h2, h3 {
        font-family: 'Lunasima', sans-serif;
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
      <