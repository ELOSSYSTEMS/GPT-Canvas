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
      Your order is confirmed
    {% endcapture %}

    {% capture email_body %}
      Thank you for choosing Forever Flowers.

      Your order has been received and is now in process. It may include one or more of the following editions:

      • Flagship Edition — prepared within 24–48 hours
      • Seasonal/Devotion Editions — designed within 7–10 business days
      • Art Edition — ready within 14 business days
      • Bespoke Bouquets — custom crafted within 14–21 business days

      We will notify you again once your bouquet enters the final design or delivery phase. Every arrangement is hand composed in our Tel Aviv studio and delivered with care.
    {% endcapture %}

    <!-- Insert layout or rendering logic for email_title and email_body here -->
  </body>
</html>