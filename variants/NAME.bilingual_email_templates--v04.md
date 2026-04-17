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
    {% assign preserved_tags = 'Seasonal Edition,Devotion Edition,Art Edition,Bespoke Bouquet' | split: ',' %}
    {% assign all_tags = order.line_items | map: 'product' | map: 'tags' | join: ',' %}
    {% assign has_flagship = all_tags contains 'Flagship Edition' %}
    {% assign has_preserved = false %}
    {% for tag in preserved_tags %}
      {% if all_tags contains tag %}
        {% assign has_preserved = true %}
      {% endif %}
    {% endfor %}

    {% capture email_title %}
      {% if has_pending_payment %}
        Thank you for your order!
      {% else %}
        {% if has_flagship and has_preserved %}
          Your order is confirmed — multiple bouquets, one refined delivery
        {% elsif has_flagship and not has_preserved %}
          Your floral experience begins now
        {% elsif has_preserved and not has_flagship %}
          Your bouquet is entering its preservation process
        {% else %}
          Thank you for your purchase!
        {% endif %}
      {% endif %}
    {% endcapture %}

    {% capture email_body %}
      {% if has_pending_payment %}
        {% if buyer_action_required %}
          You’ll get a confirmation email after completing your payment.
        {% else %}
          Your payment is being processed. You'll get an email when your order is confirmed.
        {% endif %}
      {% else %}
        {% if has_flagship and has_preserved %}
          Your order includes both flagship and special-edition bouquets. While some are available for immediate composition, others require time for careful preservation. All bouquets will be delivered together, once every element is complete. We’ll update you as soon as the final bouquet enters its design phase.
        {% elsif has_flagship and not has_preserved %}
          We’ve received your order and it’s now being composed by hand in our Tel Aviv studio. Each stem is drawn from our curated botanical inventory and placed with care — no automation, no shortcuts. Your bouquet is scheduled for completion within 24–48 hours. You’ll receive another update once it is handed to our delivery specialist.
        {% elsif has_preserved and not has_flagship %}
          We’ve received your order and have begun the preservation phase — a meticulous drying and preparation process designed to extend the life and beauty of your blooms. This stage typically takes 7 to 10 business days, depending on the edition. You’ll be updated again when your bouquet enters the design phase.
        {% else %}
          {% if requires_shipping %}
            {% case delivery_method %}
              {% when 'pick-up' %}
                You’ll receive an email when your order is ready for pickup.
              {% when 'local' %}
                Hi {{ customer.first_name }}, we're getting your order ready for delivery.
              {% else %}
                We're getting your order ready to be shipped. We will notify you when it has been sent.
            {% endcase %}
            {% if delivery_instructions != blank  %}
              <p><b>Delivery information:</b> {{ delivery_instructions }}</p>
            {% endif %}
            {% if consolidated_estimated_delivery_time %}
              {% if has_multiple_delivery_methods %}
                <h3 class="estimated_delivery__title">Estimated delivery</h3>
                <p>{{ consolidated_estimated_delivery_time }}</p>
              {% else %}
                <p>
                  Estimated delivery <b>{{ consolidated_estimated_delivery_time }}</b>
                </p>
              {% endif %}
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
        <p>Your gift card recipient will receive an email with their gift card code.</p>
      {% elsif gift_card_line_items.first %}
        <p>You’ll receive separate emails for any gift cards.</p>
      {% endif %}
    {% endcapture %}

    <!-- Existing layout remains unchanged -->
  </body>
</html>