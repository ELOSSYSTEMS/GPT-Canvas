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
      <p>Thank you for choosing Forever Flowers.</p>

      <p>Your order has been received and is now in progress. Our collections include several handcrafted editions, each with its own preparation timeline:</p>

      <ul>
        <li><strong>Flagship Edition</strong> — delivered within 24–48 hours</li>
        <li><strong>Seasonal & Devotion Editions</strong> — crafted within 7–10 business days</li>
        <li><strong>Art Edition</strong> — crafted within 14 business days</li>
        <li><strong>Bespoke Bouquets</strong> — made to order within 14–21 business days</li>
      </ul>

      <p>You will receive another update as soon as your bouquet moves into the final design or delivery phase.</p>

      <p>Each arrangement is designed and composed by hand in our Tel Aviv studio, with precision and care.</p>
    {% endcapture %}

    <!-- Insert layout or rendering logic for email_title and email_body here -->
  </body>
</html>